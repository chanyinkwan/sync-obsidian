---
name: research-baseline
description: Use when Chukwan wants company research done for a job application, using a real Gemini Deep Research agent (gemini.google.com) via the gemini-dr MCP server for the deep tier and Claude-native subagents for the baseline tier. Trigger on "research <company>", "prep me for the screen", "run the baseline on X", "deep research for X".
---

# Research Baseline

## Core principle

A research block that cannot be trusted is worse than a missing one — QA floors and frontmatter exist so future reuse checks can tell real Deep Research output from a degraded run, and so a partial-failure never gets silently backfilled with a lower-effort answer.

## Gates

1. **Source of truth for the questions is `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Research Baseline.md`.** The skill never restates the question set; it reads it at run time.

<!-- OPUS: write gate 2 wording per build spec §3.2 item 2 — tier decision -->

<!-- OPUS: write gate 3 wording per build spec §3.2 item 3 — reuse check for B, D, E -->

4. **Output location contract.** Company research lives only in `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Research/`. Save blocks there as `Research - Block <letter> <Name>.md` and create or update `Research - Index.md` in the same folder. The opportunity index is `Knowledge/Source/Job Hunt/Presales Journey/01_Pipeline/Application Pipeline.md`; link every company research index back to its Pipeline row. Markdown only, never PDF.

5. **Every research note carries the frontmatter contract below.** A note without it is invisible to future reuse checks — writing one is a gate failure.

<!-- OPUS: write gate 6 wording per build spec §3.2 item 6 — QA mechanics live in the metric-floors table below; this gate is the judgment half -->

<!-- OPUS: write gate 7 wording per build spec §3.2 item 7 — quota gate -->

<!-- OPUS: write gate 8 wording per build spec §3.2 item 8 -->

9. **Never paste cookie values into chat, files in the vault, or tool arguments.** Auth trouble → relay the `repair` string from the tool error; the user handles the secret themselves.

## Process

| Step | Action | Output |
|---|---|---|
| 1 | Read `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Role Brief.md`; decide tier (gate 2); run block 0 triage if new | Tier + go/no-go |
| 2 | Reuse check for B, D, E (gate 3) | DR shopping list (0-5 jobs) |
| 3 | Quota gate (gate 7) | User go-ahead if > 3 |
| 4 | ✅-tier blocks: parallel Claude-native subagents (WebSearch), one per block, prompts from `BLOCKS.md` | Draft block notes |
| 5 | 🔍-tier: `start_deep_research` per shopping-list block (prompts from `BLOCKS.md`, company + role interpolated) | job_ids in `Research - Index.md` |
| 6 | While jobs run: finalize ✅ notes, write frontmatter, update index | Saved ✅ blocks |
| 7 | Round-robin `collect_deep_research` (wait_seconds=120) until all done or failure policy triggers | Raw reports + metrics |
| 8 | QA each report; save with frontmatter + QA verdict; update index | Saved 🔍 blocks |
| 9 | Report to user: blocks done, QA verdicts, unanswered ✅ questions, quota spent | One summary message |

## Partial-failure policy

- One block still running after ~30 min of collects: stop polling it, leave `job_id` and `status: pending-collect` in `Research - Index.md`, finish everything else, tell the user "Block X is still running server-side; say 'collect the research' later." Default is park-and-resume, never retry-from-scratch, never silent degradation to Claude-native.
- `AUTH_EXPIRED` / `TEMPORARILY_BLOCKED` mid-run: halt the entire deep tier (already-started jobs keep running server-side), relay the repair string, finish the baseline-tier work. Resuming the skill later finds the parked jobs in the index and goes straight to collect.
- `QUOTA_EXHAUSTED` / `PLAN_REJECTED` on start: stop starting further deep jobs that day; record unbought blocks in the index; report.
- QA floor failure: save flagged, report, user decides whether to rerun (never auto-rerun, it costs quota).

## Frontmatter contract

```yaml
---
type: research-block
block: A|B|C|D|E|F|G
scope: company
company: Geotab
role: Solutions Engineer
tier: baseline|deep        # baseline = the must-answer tier, deep = Deep Research
tool: claude-native|gemini-deep-research
generated: 2026-08-17
job_id: geotab-block-d-20260817-1430   # deep only
source_count: 47           # deep only
elapsed_min: 12            # deep only
quality: pass|flag|n/a
unanswered: []             # question texts the QA pass found unanswered
tags: [job-hunt, research]
---
```

## QA metric floors

The mechanics half of gate 6.

| Metric | Floor | Rationale |
|---|---|---|
| source_count | >= 12 | Real 80-160-search runs cite dozens; single-digit citations = degraded run |
| chars | >= 6000 | A genuine report runs 8-25k chars; under 6k is an abstract |
| h2_count | >= 4 | Prompt templates demand fixed numbered sections; fewer = sections skipped |
| elapsed_min | >= 4 | A report that landed in 2 minutes did not run the research loop |

All four pass → `quality: pass`. Any failure → `quality: flag` + report to user; never auto-rerun.
