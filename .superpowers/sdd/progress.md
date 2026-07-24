# SDD Progress Ledger — Unknowns Navigator build
Plan: docs/superpowers/specs/2026-07-16-unknowns-navigator-design.md (§13)
Base: f4954b6
Batches: A (engine+template+design note) · B (hub+stage maps+ledger+dictionary) · C (9 technique cards)
Mode: implementers write files, no commits; controller commits per batch after review. No worktree (live vault).

## Log
- Note: spec moved by user to Projects/Unknowns-navigator-design.md (content-neutral move; old docs/ path deleted). All dispatches use the new path.
- Batch A: complete (commit 9862d6f, review clean after fix loop — 2 Important fixed: §4 general-branch ordering, telecom example removed from engine; 1 Minor fixed: full-width parens in design note H1)
- Batch B: complete (commit 4bc2605, review clean after fix loop — 1 Important fixed: Stage 2 sequence-line prose trimmed to "(repeatable)"; 1 Minor fixed: ledger seed lines reordered chronologically. Fixes applied by controller after fix-agent died to session limit; re-reviewed independently.)
- Batch C dispatch note: technique-card frontmatter = §5 contract + tags: [playbook] (controller-sanctioned addition for vault consistency, matches Batch B).
- Batch C: complete (commit e9f6e14, review clean first pass — no fix loop; ledger-tags [] on Distillation adjudicated correct; 3 Minors triaged as accepted cosmetic).
- Final whole-build review (controller/Fable): PASS — 18/18 files, wikilink audit clean, frontmatter contracts exact, engine 7 blocks + Finish, seed grammar parses 3/3, smoke trace passes both §13 scenarios (setup path + Fast-Pass path). Build phase done; remaining: user restarts Claude Code for slash-menu registration, Phase 2 pilots.

# SDD Progress Ledger — SAA Readiness Dashboard
Plan: docs/superpowers/plans/2026-07-22-saa-readiness-dashboard.md
Spec: docs/superpowers/specs/2026-07-22-saa-readiness-dashboard-design.md
Base: 5319911
Mode: Sonnet implementers commit per task; controller (Fable) reviews each diff directly per user protocol. No worktree (live vault, main-only repo). Task 5 has a hard USER GATE (syllabus freeze).

## Log
- Task 1: complete (commit 1b67ebc, controller review clean, 2/2 tests)
- Task 2: complete (commit a239a1f, controller review clean, 5/5 tests, mastery rules verified against spec)
- Task 3: complete (commit 4fabdcd, controller review clean, 16/16 tests independently rerun)
- Task 4: complete (commit e748448, controller review clean, 16/16 pass; Obsidian eyeball deferred to Task 5 user gate)
- Task 5: complete (syllabus frozen, 52 topics 14/12/14/12, USER APPROVED at gate, parse verified)
- Task 6: complete (commit 8d90e35, controller review clean; baseline 4.3/0/6/6; Minor for final review: sec-01 clustering could refine to sec-02/sec-04)
- Task 7: complete (commit 8ad457a, controller review clean; Home embed placed, node acceptance pass)
- Final whole-branch review (controller/Fable): PASS. 16/16 tests, em-dash audit clean, live-vault run: touched 4.3 / proven 0, unmapped 0/0, streak 2/10 run 2, pace ON LINE, next action sec-02. Minor (sec-01 clustering) triaged: accepted, refinable by knowledge manager. Build done; remaining: user visual check in Obsidian.
