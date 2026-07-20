# Career Hub Skills v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver four concise, evidence-tested personal skills that are safer, more habitual, and materially cheaper to run.

**Architecture:** Keep runtime contracts small, move conditional meeting complexity to focused references, and connect daily close skills through one evidence register. Validate each skill against observed Claude-history failures before moving to the next.

**Tech Stack:** Markdown skills, Obsidian notes, TaskNotes metadata, JSONL/chat-provider evidence, independent `gpt-5.6-terra` reviews.

## Global Constraints

- Traditional Chinese is the user-facing default; spoken content is not translated.
- `SKILL.md` target is under 500 words; supporting references load only on an observable condition.
- No hard-coded model IDs or runtime-specific history paths.
- No duration inferred from chat timestamps.
- No task, glossary, or unrelated note is silently mutated.
- `.agents` and `.claude` skill copies remain behaviorally identical.
- Do not stage or commit in the current dirty workspace.

---

### Task 1: Tidy meeting transcript

**Files:** modify both runtime copies of `tidy-meeting-transcript`; add/update `EVALS.md`, `ATTRIBUTION.md`, `OUTPUT-CONTRACT.md`, and concise `RUBRIC.md`.

- [ ] Record RED cases: merged speakers, coin-flip naming, stale glossary path, raw overwrite, forced expensive reviewer, lost user summary, excessive normalization questions.
- [ ] Replace `SKILL.md` with source detection → risk routing → safe working copy → reconstruction → validation → conditional glossary/summary flow.
- [ ] Put cardinality-first attribution and confidence gates in `ATTRIBUTION.md`; put note schema and validation gates in `OUTPUT-CONTRACT.md`.
- [ ] Independently review against every eval; fix all Critical/Important findings before Task 2.

### Task 2: Fill daily log

**Files:** modify both runtime copies of `fill-daily-log`; add `EVALS.md`.

- [ ] Record RED cases: nonexistent Codex path, chat-wall-clock duration, repeated source scans, invented lane/category, same-day/backfill confusion.
- [ ] Define provider-neutral evidence collection and the shared evidence-register schema.
- [ ] Make `untimed` a valid duration outcome; restrict minutes to explicit duration sources.
- [ ] Independently review all evals before continuing.

### Task 3: Sync takeaways

**Files:** modify both runtime copies of `sync-takeaways`; add `EVALS.md`.

- [ ] Record RED cases: opening every note, six-item padding, Constant→Skill misroute, dead `#scqa-feed`, proposal promoted to fact.
- [ ] Consume an existing evidence register when available and lazy-open only weakly evidenced candidates.
- [ ] Cap at three; separate procedure→Skill and principle→Constant; route SCQA as a plain candidate until a consumer exists.
- [ ] Independently review all evals before continuing.

### Task 4: Plan daily operations

**Files:** modify both runtime copies of `plan-daily-ops`; add `EVALS.md`; update the canonical daily template with a generated-region marker.

- [ ] Record RED cases: stale scheduled tasks resurfacing, 19-item backlog, copied prior-note drift, rerun duplication, unlimited carry-over.
- [ ] Use only `Template/Daily Operations Template.md` for creation.
- [ ] Select Work ≤3 and Hub ≤2; carry-over ≤2; route overdue and second-day incomplete tasks to triage.
- [ ] Make reruns replace only the generated region while preserving user annotations outside it.
- [ ] Independently review all evals before continuing.

### Task 5: Integrated verification

**Files:** all above.

- [ ] Check YAML frontmatter, mirror parity, file links, word counts, prohibited strings, limits, and managed-region contract.
- [ ] Ask lower-cost reviewers to re-run their domain evals on the refined files.
- [ ] Run a final cross-skill review and report amendments, impact, remaining caveats, and measured word-count reduction.
