# Presales Journey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the copied Presales materials into one evidence-led, company-first job-application system with a human-readable Markdown Pipeline.

**Architecture:** Shared evidence, rules, templates, and tools live in `00_Master System`; one Markdown dashboard owns application status; each opportunity has one company-role folder. Personal claims flow in one direction from the Presales Master DB into CV Context, CV, interview story, outcome, and Grounding Backlog.

**Tech Stack:** Markdown, JSON, Obsidian links, PowerShell file operations, Python 3, `docxtpl`, `pytest`, Git.

**Spec:** `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Presales Journey System Design.md`

## Global Constraints

- `Knowledge/About Me/MasterExperienceDB.json` remains in place as a frozen historical backup.
- `Presales Journey/00_Master System/MasterExperienceDB.json` is the only working evidence database for Presales materials.
- Do not create `Quarantine` or `90_Closed` folders.
- The first pass must not delete source material or rewrite personal-experience claims.
- Only `verified` and `secondary` Master DB evidence may render into a CV.
- Company research must never become personal-experience evidence.
- Use native PowerShell `Move-Item -LiteralPath` for moves. Resolve and verify every source and destination before moving.
- Preserve unrelated working-tree changes. Each commit includes only the paths named in that task.

---

### Task 1: Build the shared Master System

**Files:**
- Move: `Presales Journey/MasterExperienceDB.json` → `Presales Journey/00_Master System/MasterExperienceDB.json`
- Move: `Presales Journey/$Interview System/CV Writing Rules.md` → `Presales Journey/00_Master System/CV Writing Rules.md`
- Move: `Presales Journey/$Interview System/Grounding Backlog.json` → `Presales Journey/00_Master System/Grounding Backlog.json`
- Move: `Presales Journey/$Interview System/Master Story Bank.md` → `Presales Journey/00_Master System/Master Story Bank.md`
- Move: `Presales Journey/$Interview System/Interview Prep SOP.md` → `Presales Journey/00_Master System/Interview Prep SOP.md`
- Move: `Presales Journey/$Interview System/Readiness Rubric.md` → `Presales Journey/00_Master System/Readiness Rubric.md`
- Move: `Presales Journey/$Interview System/Research Baseline.md` → `Presales Journey/00_Master System/Research Baseline.md`
- Move: `Presales Journey/$Interview System/Pre-flight Checklist.md` → `Presales Journey/00_Master System/Pre-flight Checklist.md`
- Move: `Presales Journey/$Interview System/Question Bank - Screen.md` → `Presales Journey/00_Master System/Question Banks/Question Bank - Screen.md`
- Move: `Presales Journey/$Interview System/Question Bank - Hiring Manager.md` → `Presales Journey/00_Master System/Question Banks/Question Bank - Hiring Manager.md`
- Move: `Presales Journey/$Interview System/Resume_Template.docx` → `Presales Journey/00_Master System/Templates/Resume_Template.docx`
- Move: `Presales Journey/$Interview System/Kessog Chan CV — Presales.pdf` → `Presales Journey/00_Master System/Templates/Kessog Chan CV — Presales.pdf`
- Move: `Presales Journey/$Interview System/KF-FYI-for-your-improvement-license-ENG-3-4-15.pdf` → `Presales Journey/00_Master System/Templates/KF-FYI-for-your-improvement-license-ENG-3-4-15.pdf`
- Move and modify: `Presales Journey/$Interview System/render_cv.py` → `Presales Journey/00_Master System/Tools/render_cv.py`
- Create: `Presales Journey/00_Master System/Tools/test_render_cv.py`

**Interfaces:**
- Consumes: approved folder design and the existing Master DB copy.
- Produces: one shared system root and `resolve_paths(context_arg, output_arg, cwd=None) -> tuple[Path, Path]` for CV rendering.

- [ ] **Step 1: Verify the Master DB before moving it**

Run:

```powershell
(Get-FileHash -Algorithm SHA256 -LiteralPath 'Presales Journey\MasterExperienceDB.json').Hash -eq (Get-FileHash -Algorithm SHA256 -LiteralPath '..\..\About Me\MasterExperienceDB.json').Hash
```

Expected: `True`.

Run:

```powershell
Get-Content -Raw -LiteralPath 'Presales Journey\MasterExperienceDB.json' | ConvertFrom-Json | Select-Object -ExpandProperty meta
```

Expected: valid metadata with `version: 3.0` and the Presales target path.

- [ ] **Step 2: Write the failing renderer path test**

Create `Presales Journey/00_Master System/Tools/test_render_cv.py`:

```python
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path


MODULE_PATH = Path(__file__).with_name("render_cv.py")
SPEC = spec_from_file_location("render_cv", MODULE_PATH)
MODULE = module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(MODULE)


def test_relative_context_defaults_output_next_to_context(tmp_path: Path) -> None:
    context = tmp_path / "Companies" / "Jamf — Sales Engineer EMEIA" / "CV" / "CV Context.json"
    context.parent.mkdir(parents=True)
    context.write_text("{}", encoding="utf-8")

    resolved_context, resolved_output = MODULE.resolve_paths(
        str(context.relative_to(tmp_path)), None, cwd=tmp_path
    )

    assert resolved_context == context.resolve()
    assert resolved_output == context.parent / "Kessog Chan CV — CV Context.docx"


def test_relative_output_resolves_from_working_directory(tmp_path: Path) -> None:
    context = tmp_path / "context.json"
    context.write_text("{}", encoding="utf-8")

    _, resolved_output = MODULE.resolve_paths(
        "context.json", "outputs/cv.docx", cwd=tmp_path
    )

    assert resolved_output == (tmp_path / "outputs" / "cv.docx").resolve()
```

- [ ] **Step 3: Run the tests and confirm the planned interface is missing**

Run:

```powershell
pytest 'Presales Journey\00_Master System\Tools\test_render_cv.py' -q
```

Expected: FAIL because `render_cv.py` is not yet in `Tools` or `resolve_paths` is not defined.

- [ ] **Step 4: Create the approved directories and move the shared files**

Create `Question Banks`, `Templates`, and `Tools` under `00_Master System`. Resolve the absolute source and destination paths. Move only the files listed in this task; leave the design and implementation plan in place.

- [ ] **Step 5: Replace the renderer with the location-independent implementation**

Use this content in `Presales Journey/00_Master System/Tools/render_cv.py`:

```python
"""Render a role-specific CV from a context JSON and the shared template."""

import json
import sys
from pathlib import Path

from docxtpl import DocxTemplate


HERE = Path(__file__).resolve().parent
SYSTEM_ROOT = HERE.parent
TEMPLATE = SYSTEM_ROOT / "Templates" / "Resume_Template.docx"


def resolve_paths(
    context_arg: str | None,
    output_arg: str | None,
    cwd: Path | None = None,
) -> tuple[Path, Path]:
    if not context_arg:
        raise ValueError("Pass a CV Context JSON path.")

    base = (cwd or Path.cwd()).resolve()
    context_path = Path(context_arg)
    if not context_path.is_absolute():
        context_path = base / context_path
    context_path = context_path.resolve()

    if output_arg:
        output_path = Path(output_arg)
        if not output_path.is_absolute():
            output_path = base / output_path
        output_path = output_path.resolve()
    else:
        role_name = context_path.stem.replace("CV Context — ", "")
        output_path = context_path.parent / f"Kessog Chan CV — {role_name}.docx"

    return context_path, output_path


def main() -> None:
    context_arg = sys.argv[1] if len(sys.argv) > 1 else None
    output_arg = sys.argv[2] if len(sys.argv) > 2 else None
    context_path, output_path = resolve_paths(context_arg, output_arg)

    if not TEMPLATE.exists():
        raise FileNotFoundError(f"CV template not found: {TEMPLATE}")
    if not context_path.exists():
        raise FileNotFoundError(f"CV Context not found: {context_path}")

    context = json.loads(context_path.read_text(encoding="utf-8"))
    output_path.parent.mkdir(parents=True, exist_ok=True)
    document = DocxTemplate(str(TEMPLATE))
    document.render(context, autoescape=True)
    document.save(str(output_path))
    print(f"Rendered: {output_path}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 6: Run the tests and one real rendering smoke test**

Run:

```powershell
pytest 'Presales Journey\00_Master System\Tools\test_render_cv.py' -q
```

Expected: `2 passed`.

Run the renderer with the Equinix CV Context and a temporary output path. Expected: exit code `0`, a non-empty `.docx`, and no modification to the submitted Equinix CV.

- [ ] **Step 7: Commit Task 1 only**

```powershell
git add -- 'Presales Journey/00_Master System' 'Presales Journey/$Interview System'
git commit -m "refactor: centralize presales master system"
```

---

### Task 2: Create the human-readable Markdown Pipeline

**Files:**
- Create: `Presales Journey/01_Pipeline/Application Pipeline.md`
- Move: `Presales Journey/$On List/On List Jobs.md` → `Presales Journey/01_Pipeline/Source Notes/On List Jobs (legacy).md`
- Move: `Presales Journey/$On List/Inbox.md` → `Presales Journey/01_Pipeline/Source Notes/Inbox (legacy).md`

**Interfaces:**
- Consumes: existing JD frontmatter and the user-confirmed outcome that the Samsara, SureCloud, and ProGlove processes did not progress.
- Produces: one visible status dashboard linking to the company-role folders created in Task 3.

- [ ] **Step 1: Move the two old board notes into Source Notes**

Create `01_Pipeline/Source Notes`. Preserve both Markdown files byte-for-byte during the move. They become evidence for reconstruction, not live dashboards.

- [ ] **Step 2: Create the Pipeline with the approved visual language**

Create `Application Pipeline.md` with:

```markdown
# Application Pipeline

Updated: 2026-08-21

## Colour key

⚪ `0 · Interested` · 🔵 `1 · Preparing` · 🟡 `2 · Applied` · 🟠 `3 · Screening` · 🟣 `4 · Interview` · 🟢 `5 · Offer` · 🔴 `X · Rejected` · ⚫ `— · Withdrawn`

## 🔥 Action Required

- [ ] Jamf — submit the application; ask about London salary and 50% travel.
- [ ] Equinix — follow up on 2026-08-24; ask for the London salary band.
- [ ] Geotab — follow up on 2026-08-24; ask for the London salary band.
- [ ] Google — build one small Vertex AI or Gemini RAG demo by 2026-08-31.
- [ ] Samsara, SureCloud, ProGlove — reconstruct outcomes and complete post-mortems.

## 📍 Active Pipeline

| Company / Role | Stage | Last contact | Next action | Deadline | Folder |
|---|---|---:|---|---:|---|
| Jamf — Sales Engineer EMEIA | 🔵 `1 · Preparing` | 2026-08-17 | Apply; ask salary and travel meaning | 2026-08-20 | [[Companies/Jamf — Sales Engineer EMEIA/Role Brief]] |
| Equinix — Sales Engineer, Telco & Media | 🟡 `2 · Applied` | 2026-08-17 | Follow up; ask salary band | 2026-08-24 | [[Companies/Equinix — Sales Engineer Telco and Media/Role Brief]] |
| Geotab — Solutions Engineer | 🟡 `2 · Applied` | 2026-08-17 | Follow up; ask salary band | 2026-08-24 | [[Companies/Geotab — Solutions Engineer/Role Brief]] |
| Google — Customer Engineer, AI Natives | 🟡 `2 · Applied` | 2026-08-17 | Build a small Vertex AI or Gemini RAG demo | 2026-08-31 | [[Companies/Google — Customer Engineer AI Natives/Role Brief]] |
| ThreatAware — Solutions Engineer (Labs) | ⚪ `0 · Interested` | 2026-08-17 | Confirm salary before investing effort | — | [[Companies/ThreatAware — Solutions Engineer Labs/Role Brief]] |
| CSC — Sales Engineer | ⚪ `0 · Interested` | 2026-08-17 | Check whether the posting is still live | — | [[Companies/CSC — Sales Engineer/Role Brief]] |

## 📦 Closed

| Company / Role | Stage | Last contact | Result evidence | Next learning action | Folder |
|---|---|---:|---|---|---|
| Samsara — Associate Sales Engineer | 🔴 `X · Rejected` | 2026-08-14 | User confirmed no next round; direct feedback not recorded | Complete post-mortem | [[Companies/Samsara — Associate Sales Engineer/Outcome]] |
| SureCloud — Presales Solutions Consultant | 🔴 `X · Rejected` | — | User confirmed no next round; direct feedback not recorded | Complete post-mortem | [[Companies/SureCloud — Presales Solutions Consultant/Outcome]] |
| ProGlove — Junior Solution Architect | 🔴 `X · Rejected` | — | User confirmed no next round; direct feedback not recorded | Complete post-mortem | [[Companies/ProGlove — Junior Solution Architect/Outcome]] |
```

- [ ] **Step 3: Validate stage labels and row counts**

Run a text scan. Expected: 6 Active Pipeline rows, 3 Closed rows, and no stage label outside the eight approved labels.

- [ ] **Step 4: Commit Task 2 only**

```powershell
git add -- 'Presales Journey/01_Pipeline' 'Presales Journey/$On List'
git commit -m "feat: add human-readable presales pipeline"
```

---

### Task 3: Rehouse every opportunity by company and role

**Files:**
- Move and reorganise: seven existing company folders under `Presales Journey/Companies/`
- Create: two lead folders for ThreatAware and CSC
- Move outside the Presales application system: `Presales Journey/Coffee Chat` → `Job Hunt/Coffee Chat`
- Create: `Role Brief.md`, `CV/`, `Research/`, `Interview/`, and `Outcome.md` in each company-role folder

**Interfaces:**
- Consumes: the Pipeline folder links from Task 2.
- Produces: nine company-role records with stable locations.

- [ ] **Step 1: Verify all destinations before any move**

Resolve the absolute source and destination for all nine company-role folders. Expected: all seven existing sources exist; none of the nine destination folders exists; parent-level `Job Hunt/Coffee Chat` does not exist.

- [ ] **Step 2: Move and rename the seven existing company folders**

Use these exact destination names:

| Source | Destination |
|---|---|
| `Samsara` | `Companies/Samsara — Associate Sales Engineer` |
| `Sure Cloud` | `Companies/SureCloud — Presales Solutions Consultant` |
| `Proglove` | `Companies/ProGlove — Junior Solution Architect` |
| `Equinix Sales Engineer` | `Companies/Equinix — Sales Engineer Telco and Media` |
| `Jamf Sales Engineer EMEIA` | `Companies/Jamf — Sales Engineer EMEIA` |
| `Google Customer Engineer AI Natives` | `Companies/Google — Customer Engineer AI Natives` |
| `Geotab Solutions Engineer` | `Companies/Geotab — Solutions Engineer` |

- [ ] **Step 3: Classify the simple company folders**

For Equinix, Jamf, Google, and Geotab:

- Rename the JD Markdown file to `Role Brief.md` without changing its claims.
- Move `CV Context*.json`, submitted `.pdf`, and editable `.docx` files into `CV/`.
- Create empty `Research/` and `Interview/` directories only where there is no material yet.
- Create `Outcome.md` with `Status: active`, `Direct feedback: none recorded`, and a link back to the Pipeline row.

- [ ] **Step 4: Classify the three interviewed company folders**

Use these exact groups:

**Samsara**

- `Role Brief.md`: rename `Associate Sales Engineer JD.md`.
- `CV/`: `Kessog Chan CV — Presales.pdf`.
- `Interview/`: `Screen Call Prep — Samsara ASE (2026-08-14).md`, `Samsara Interview Preparation Brief.pdf`.
- `Research/`: the remaining Samsara files, including company research, UK briefings, strategic audit, Elmira profile, and deep-research prompts.

**SureCloud**

- `Role Brief.md`: rename `Presales Solution Consultant JD.md`.
- `CV/`: `Kessog Chan CV — Presales.pdf`.
- `Interview/`: `SureCloud Presales Mastery Guide.pdf`, `SureCloud LinkedIn AI Screening Scope.md`, `SureCloud Five Master Competency Stories.md`, `LinkedIn SureCloud AI Interview Questions.md`.
- `Research/`: the remaining SureCloud files, including company, GRC, buyer, competitor, strategy, and hiring-manager research.

**ProGlove**

- `Role Brief.md`: rename `Job Descriptions.md`.
- `CV/`: `Kessog Chan CV — Presales.pdf`.
- `Interview/`: `Reps Deck - ProGlove.md`, `Questions Asked in the interview.md`, `Interview Brief - ProGlove.md`, `Gmail - Invitation for an interview with ProGlove.pdf`.
- `Research/`: the remaining ProGlove files, including architecture, market, competitor, company, and hiring-manager research.

Create `Outcome.md` in each folder with:

```markdown
# Outcome

- Status: Rejected after first live stage
- Direct feedback: None recorded
- Evidence: User confirmed the process did not progress to the next round
- Confirmed cause: None

## Hypotheses to test

- Technical credibility was not established strongly enough in the live conversation.
- Answers did not consistently use Presales-native discovery, solutioning, demo, objection, and commercial-outcome language.
- Role level or direct Presales competition may have affected the decision.

## Next action

Reconstruct the questions, actual answers, timing, and interviewer reactions before changing the interview strategy.
```

- [ ] **Step 5: Create the two Interested lead records**

Create `Companies/ThreatAware — Solutions Engineer Labs/Role Brief.md` and `Companies/CSC — Sales Engineer/Role Brief.md` using the URLs, locations, fit verdicts, and binding constraints preserved in `01_Pipeline/Source Notes/Inbox (legacy).md`. Set stage to `interested`; do not create CV claims.

Create empty `CV/`, `Research/`, and `Interview/` directories and an `Outcome.md` containing `Status: not applied` for both leads.

- [ ] **Step 6: Move Coffee Chat outside the application system**

Move `Presales Journey/Coffee Chat` to the parent `Job Hunt/Coffee Chat`. Preserve `Ollie Mallard Profile.pdf` unchanged.

- [ ] **Step 7: Validate every Pipeline link**

Expected: all nine Pipeline folder links resolve; each company-role folder has exactly one `Role Brief.md` and one `Outcome.md`; every existing CV, JD, research, and interview file still exists under its new destination.

- [ ] **Step 8: Commit Task 3 only**

```powershell
git add -A -- 'Presales Journey/Companies' 'Presales Journey/Coffee Chat' 'Coffee Chat'
git commit -m "refactor: organise presales applications by company"
```

---

### Task 4: Point all active workflows to the Presales source of truth

**Files:**
- Modify: `Presales Journey/00_Master System/CV Writing Rules.md`
- Modify: `Presales Journey/00_Master System/Research Baseline.md`
- Modify: `C:/Users/k84450674/Desktop/Career Journey/.claude/skills/craft-cv/SKILL.md`
- Modify: `C:/Users/k84450674/Desktop/Career Journey/.claude/skills/interview-prep/SKILL.md`
- Modify: `C:/Users/k84450674/Desktop/Career Journey/Knowledge/Skills/Skill - Craft CV.md`
- Modify: `AGENTS.md`
- Create: `Presales Journey/00_Master System/Evidence Integrity Review.md`

**Interfaces:**
- Consumes: stable paths from Tasks 1–3.
- Produces: one canonical path used by CV and interview workflows, plus a review queue that does not silently rewrite evidence.

- [ ] **Step 1: Update the canonical CV evidence path**

Replace active references to `Knowledge/About Me/MasterExperienceDB.json` with:

```text
Knowledge/Source/Job Hunt/Presales Journey/00_Master System/MasterExperienceDB.json
```

Apply this to `CV Writing Rules.md`, `.claude/skills/craft-cv/SKILL.md`, and `Knowledge/Skills/Skill - Craft CV.md`. Keep the original path only where the text explicitly describes the frozen historical backup.

- [ ] **Step 2: Update the interview workflow paths**

In `.claude/skills/interview-prep/SKILL.md`, replace every `$Interview System` input with its exact `Presales Journey/00_Master System` destination. Change per-application output from `Knowledge/Source/Job Hunt/<Company>/` to:

```text
Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Interview/
```

Update `Research Baseline.md` so research output goes to the same company-role `Research/` folder and links back to `Application Pipeline`.

- [ ] **Step 3: Correct the project-level target role context**

In `AGENTS.md`, replace the stale target-role line with:

```text
* Target Roles: Presales Consultant and Sales Engineer in B2B SaaS, cloud, or connected-product companies; customer-facing Solution Architect only where the role is Presales-led rather than production-engineering-heavy.
```

Do not change team architecture, terminology mappings, or work-system rules.

- [ ] **Step 4: Create the evidence-integrity review without changing claims**

Write `Evidence Integrity Review.md` with these ranked findings:

1. Huawei workshop ownership conflict: the Story Bank says "I run/ran the technical workshops" while the Master DB says the user did not present or facilitate.
2. Grafana 30-plus demo and live-objection claim remains `needs_grounding` and cannot be used as verified interview evidence.
3. Seven role bullets marked verified through `merged` or `proofbank` sources require a direct grounding source or reconstructable arithmetic review.
4. Direct external discovery leadership, tailored external demo/PoC technical wins, and concluded RFI/RFP outcomes remain evidence gaps, not wording gaps.
5. The modern Equinix, Jamf, Google, and Geotab CV Context files are allowed inputs; known contaminated Engineered Intelligence and TripBiz contexts are outside Presales Journey and must stay outside.

Label every item `Review required`; do not edit Master DB bullet text, status, or numbers in this task.

- [ ] **Step 5: Verify there are no stale active paths**

Run targeted searches for `$Interview System`, `$On List`, and `Knowledge/About Me/MasterExperienceDB.json` in active Presales workflow files.

Expected: no active old path. The historical-backup statement in the design document is allowed.

- [ ] **Step 6: Commit Task 4 only**

From the repository root, stage only the seven paths listed under Task 4:

```powershell
git add -- 'Knowledge/Source/Job Hunt/Presales Journey/00_Master System/CV Writing Rules.md' 'Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Research Baseline.md' 'Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Evidence Integrity Review.md' '.claude/skills/craft-cv/SKILL.md' '.claude/skills/interview-prep/SKILL.md' 'Knowledge/Skills/Skill - Craft CV.md' 'Knowledge/Source/Job Hunt/AGENTS.md'
```

Commit:

```powershell
git commit -m "refactor: route presales workflows through canonical evidence"
```

---

### Task 5: Verify the migrated system and produce the removal review

**Files:**
- Create: `Presales Journey/00_Master System/Removal Review.md`
- Verify: all files changed or moved by Tasks 1–4

**Interfaces:**
- Consumes: the completed migration.
- Produces: evidence that the system is usable and a user-approved list for any later deletion.

- [ ] **Step 1: Verify database integrity and uniqueness**

Run a JSON parse on `00_Master System/MasterExperienceDB.json`. Search inside `Presales Journey` for `MasterExperienceDB.json`.

Expected: valid JSON and exactly one Presales working copy. Confirm separately that the frozen `Knowledge/About Me/MasterExperienceDB.json` still exists and has not changed.

- [ ] **Step 2: Verify application completeness**

Expected:

- 9 Pipeline rows: 6 active and 3 closed.
- 9 company-role folders.
- Every Pipeline link resolves.
- Every company-role folder has one Role Brief and one Outcome.
- Existing source files are present under a mapped destination or at parent-level `Coffee Chat`.

- [ ] **Step 3: Verify renderer behavior**

Run the two unit tests and render one temporary Equinix CV from its moved CV Context.

Expected: `2 passed`, renderer exit code `0`, output `.docx` exists and is non-empty.

- [ ] **Step 4: Verify no unsupported claim entered the workflow**

Search active CV Contexts and interview materials for the excluded freelance AI Solutions Engineer identity, purchased GitHub repo claims, Huawei workshop-facilitation language, and the ungrounded Grafana 30-plus claim.

Expected: no excluded freelance or purchased-repo claim in active Presales inputs. Any workshop or Grafana conflict is listed in `Evidence Integrity Review.md` and is not silently changed.

- [ ] **Step 5: Create the removal review**

List only obsolete duplicates, legacy source notes, and empty folders that remain after migration. For every item record: current path, reason it is obsolete, replacement path, and whether removal is reversible through Git.

Do not remove anything in this task. Present `Removal Review.md` to the user for explicit approval.

- [ ] **Step 6: Run final repository checks**

Run:

```powershell
git diff --check
git status --short
```

Expected: no whitespace errors. Any unrelated pre-existing changes remain untouched and are reported separately.

- [ ] **Step 7: Commit the verification documents only**

```powershell
git add -- 'Presales Journey/00_Master System/Removal Review.md'
git commit -m "docs: record presales migration removal review"
```
