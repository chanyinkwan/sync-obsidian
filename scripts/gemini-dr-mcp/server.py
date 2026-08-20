"""gemini-dr MCP server — a from-scratch shim over gemini-webapi==2.1.0 exposing the real
gemini.google.com Deep Research agent as three MCP tools: start_deep_research,
collect_deep_research, deep_research_health. Stdio transport via the official `mcp` SDK
(FastMCP). No hand-rolled JSON-RPC.

Secrets (cookies, per-job state) live outside the vault repo at ~/.gemini-dr/ — nothing
secret ever enters this file, the vault repo, or MCP registration.

Startup does NOT touch cookies (fast, prompt-free). The client initializes lazily on the
first tool call via _get_client().
"""

import hashlib
import json
import os
import re
import time
from pathlib import Path
from typing import Any

from gemini_webapi import (
    AuthError,
    DeepResearchPlan,
    GeminiClient,
    GeminiError,
    TemporarilyBlockedError,
    UsageLimitExceededError,
)
from mcp.server.fastmcp import FastMCP

SECRETS_DIR = Path(os.environ.get("USERPROFILE") or Path.home()) / ".gemini-dr"
COOKIES_FILE = SECRETS_DIR / "cookies.json"
JOBS_DIR = SECRETS_DIR / "jobs"
LAST_HEALTH_FILE = SECRETS_DIR / "last_health.json"
JOBS_DIR.mkdir(parents=True, exist_ok=True)

DEDUP_WINDOW_S = 24 * 60 * 60  # protects the ~20/day Deep Research quota

REPAIR_RECIPE = (
    "Open gemini.google.com in Chrome, confirm you are signed in, then open DevTools > "
    "Application > Cookies > https://gemini.google.com, copy the values of __Secure-1PSID "
    'and __Secure-1PSIDTS, and paste them into ~/.gemini-dr/cookies.json as '
    '{"__Secure-1PSID": "...", "__Secure-1PSIDTS": "..."}, then retry.'
)

mcp = FastMCP("gemini-dr")

class ToolError(Exception):
    """{ok:false, code, ...} shape every tool returns on failure — never a raw traceback."""

    def __init__(self, code: str, message: str, **extra: Any):
        super().__init__(message)
        self.code = code
        self.message = message
        self.extra = extra

    def to_dict(self) -> dict:
        return {"ok": False, "code": self.code, "error": self.message, **self.extra}

# --- persistence helpers ---------------------------------------------------------------

def _slug(label: str) -> str:
    return re.sub(r"[^a-zA-Z0-9]+", "-", label.strip().lower()).strip("-") or "job"

def _job_path(job_id: str) -> Path:
    return JOBS_DIR / f"{job_id}.json"

def _report_path(job_id: str) -> Path:
    return JOBS_DIR / f"{job_id}.report.md"

def _write_job(job_id: str, job: dict) -> None:
    _job_path(job_id).write_text(json.dumps(job, indent=2), encoding="utf-8")

def _read_job(job_id: str) -> dict | None:
    p = _job_path(job_id)
    if not p.exists():
        return None
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None

def _iter_jobs():
    for p in JOBS_DIR.glob("*.json"):
        try:
            yield p.stem, json.loads(p.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue

def _find_duplicate_job(query_sha256: str) -> dict | None:
    """A job with the same query already running, or completed < 24h ago."""
    now = time.time()
    for job_id, job in _iter_jobs():
        if job.get("query_sha256") != query_sha256:
            continue
        status = job.get("status")
        if status == "running":
            return {"job_id": job_id, "status": status}
        if status == "done" and now - job.get("completed_ts", job.get("started_ts", 0)) < DEDUP_WINDOW_S:
            return {"job_id": job_id, "status": status}
    return None

def _read_last_health() -> dict:
    if not LAST_HEALTH_FILE.exists():
        return {}
    try:
        return json.loads(LAST_HEALTH_FILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}

def _write_last_health(authenticated: bool, last_success_ts: float | None = None) -> None:
    data = _read_last_health()
    data["authenticated"] = authenticated
    if last_success_ts is not None:
        data["last_success_ts"] = last_success_ts
    try:
        LAST_HEALTH_FILE.write_text(json.dumps(data, indent=2), encoding="utf-8")
    except OSError:
        pass

def _persist_cookies(client: GeminiClient) -> None:
    """Write the client's current (possibly rotated) cookie values back to cookies.json."""
    jar = {c.name: c.value for c in client.cookies.jar}
    data = {k: jar[k] for k in ("__Secure-1PSID", "__Secure-1PSIDTS") if k in jar}
    if data:
        try:
            COOKIES_FILE.write_text(json.dumps(data, indent=2), encoding="utf-8")
        except OSError:
            pass

# --- lazy client init --------------------------------------------------------------------

_client: GeminiClient | None = None

async def _get_client() -> GeminiClient:
    global _client
    if _client is not None:
        return _client

    if not COOKIES_FILE.exists():
        raise ToolError("AUTH_MISSING", "No cookies file at ~/.gemini-dr/cookies.json.", repair=REPAIR_RECIPE)
    try:
        raw = json.loads(COOKIES_FILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        raise ToolError("AUTH_MISSING", f"cookies.json unreadable: {e}", repair=REPAIR_RECIPE) from e

    psid = raw.get("__Secure-1PSID")
    psidts = raw.get("__Secure-1PSIDTS")
    if not psid:
        raise ToolError("AUTH_MISSING", "cookies.json is missing __Secure-1PSID.", repair=REPAIR_RECIPE)

    client = GeminiClient(psid, psidts)
    try:
        await client.init(timeout=60, auto_refresh=True)
    except AuthError as e:
        raise ToolError("AUTH_EXPIRED", str(e), repair=REPAIR_RECIPE) from e

    _persist_cookies(client)
    _write_last_health(authenticated=True, last_success_ts=time.time())
    _client = client
    return client

# --- tools -------------------------------------------------------------------------------

@mcp.tool()
async def start_deep_research(query: str, label: str, model: str | None = None) -> dict:
    """Start a real Gemini Deep Research run. Returns in ~60-120s, never blocks for the
    full run — poll with collect_deep_research afterwards."""
    try:
        client = await _get_client()
    except ToolError as e:
        return e.to_dict()

    query_sha256 = hashlib.sha256(query.encode("utf-8")).hexdigest()
    if dup := _find_duplicate_job(query_sha256):
        return {
            "ok": False,
            "code": "DUPLICATE_JOB",
            "error": "A job with this exact query is already running or completed within 24h.",
            "job_id": dup["job_id"],
            "status": dup["status"],
        }

    try:
        plan = await client.create_deep_research_plan(query, model=model)
        await client.start_deep_research(plan)
    except UsageLimitExceededError as e:
        return ToolError("QUOTA_EXHAUSTED", str(e)).to_dict()
    except TemporarilyBlockedError as e:
        return ToolError("TEMPORARILY_BLOCKED", str(e)).to_dict()
    except AuthError as e:
        return ToolError("AUTH_EXPIRED", str(e), repair=REPAIR_RECIPE).to_dict()
    except GeminiError as e:
        # Gemini answered with a normal chat reply instead of a research plan.
        return ToolError("PLAN_REJECTED", str(e)).to_dict()

    started_ts = time.time()
    job_id = f"{_slug(label)}-{time.strftime('%Y%m%d-%H%M', time.localtime(started_ts))}"
    _write_job(job_id, {
        "label": label,
        "query_sha256": query_sha256,
        "cid": plan.cid,
        "metadata": plan.metadata,
        "plan_title": plan.title,
        "steps": plan.steps,
        "eta_text": plan.eta_text,
        "started_ts": started_ts,
        "status": "running",
    })

    return {
        "ok": True,
        "job_id": job_id,
        "plan_title": plan.title,
        "steps": plan.steps,
        "eta_text": plan.eta_text,
        "started_ts": started_ts,
    }

@mcp.tool()
async def collect_deep_research(job_id: str, wait_seconds: int = 90) -> dict:
    """Poll a running Deep Research job. wait_seconds is capped at 180 regardless of what
    is requested. Not-done is a normal outcome, not an error. Idempotent once done."""
    wait_seconds = min(max(int(wait_seconds), 1), 180)

    job = _read_job(job_id)
    if job is None:
        return ToolError("JOB_NOT_FOUND", f"No job file for job_id={job_id!r}.").to_dict()

    if job.get("status") == "done":
        report_path = _report_path(job_id)
        markdown = report_path.read_text(encoding="utf-8") if report_path.exists() else ""
        return {
            "ok": True,
            "status": "done",
            "markdown": markdown,
            "metrics": job.get("metrics", {}),
            "report_cached_at": job.get("completed_ts"),
        }

    try:
        client = await _get_client()
    except ToolError as e:
        return e.to_dict()

    plan = DeepResearchPlan(cid=job.get("cid"), metadata=job.get("metadata") or [])
    try:
        result = await client.wait_for_deep_research(plan, poll_interval=15, timeout=wait_seconds)
    except AuthError as e:
        return ToolError("AUTH_EXPIRED", str(e), repair=REPAIR_RECIPE).to_dict()
    except UsageLimitExceededError as e:
        return ToolError("QUOTA_EXHAUSTED", str(e)).to_dict()
    except TemporarilyBlockedError as e:
        return ToolError("TEMPORARILY_BLOCKED", str(e)).to_dict()
    except GeminiError as e:
        return ToolError("PLAN_REJECTED", str(e)).to_dict()

    elapsed_s = time.time() - job["started_ts"]
    if not result.done or result.document is None:
        return {"ok": True, "status": "running", "elapsed_s": elapsed_s, "eta_text": job.get("eta_text", "")}

    document = result.document
    markdown = document.markdown
    metrics = {
        "chars": len(markdown),
        "source_count": len(document.sources),
        "h2_count": sum(1 for line in markdown.splitlines() if line.startswith("## ")),
        "elapsed_s": elapsed_s,
    }
    _report_path(job_id).write_text(markdown, encoding="utf-8")
    job["status"] = "done"
    job["completed_ts"] = time.time()
    job["metrics"] = metrics
    _write_job(job_id, job)

    return {
        "ok": True,
        "status": "done",
        "markdown": markdown,
        "metrics": metrics,
        "report_cached_at": job["completed_ts"],
    }

@mcp.tool()
async def deep_research_health() -> dict:
    """Auth probe — mirrors this vault's NotebookLM MCP's get_health / setup_auth pattern."""
    cookie_file_present = COOKIES_FILE.exists()
    cookie_age_days = (time.time() - COOKIES_FILE.stat().st_mtime) / 86400.0 if cookie_file_present else None

    running_jobs = [
        {"job_id": jid, "elapsed_s": time.time() - job.get("started_ts", time.time())}
        for jid, job in _iter_jobs() if job.get("status") == "running"
    ]

    last_success_ts = _read_last_health().get("last_success_ts")
    repair = None
    try:
        await _get_client()
        authenticated = True
        last_success_ts = time.time()
    except ToolError as e:
        authenticated = False
        repair = e.extra.get("repair", REPAIR_RECIPE)
        _write_last_health(authenticated=False, last_success_ts=last_success_ts)

    out = {
        "ok": True,
        "authenticated": authenticated,
        "cookie_file_present": cookie_file_present,
        "cookie_age_days": cookie_age_days,
        "last_success_ts": last_success_ts,
        "running_jobs": running_jobs,
    }
    if repair:
        out["repair"] = repair
    return out

if __name__ == "__main__":
    mcp.run()
