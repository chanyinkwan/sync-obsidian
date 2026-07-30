---
type: project
status: living
owner: me
stakeholders:
domain: Career Hub / Methodology
updated: 2026-07-16
tags:
  - project
---

# Unknowns Navigator Playbook

## Goal / my scope
- Turn the philosophy of "A Field Guide to Fable: Finding Your Unknowns" (Map vs Territory, the 4 Unknowns Matrix) into a repeatable, LLM-guided process: an installed Claude Code skill (`unknowns-navigator`) acting as a STRICT navigator (one question per message, no text-dumping) plus a modular playbook of Obsidian cards.
- Scope is vault-wide, both tracks: Work (防守 — deals, RFPs, workshops, sample ops) and Hub (進攻 — SA transition, job hunt, personal projects).
- Design finalised and committed 2026-07-16: [[Unknowns-navigator-design]] (lives under docs/superpowers/specs/). Article stub: [[Fable Field Guide]].

## Architecture (agreed 2026-07-16)
1. Engine — .claude/skills/unknowns-navigator/SKILL.md, pure behavior/state machine, zero domain content, needs Claude Code restart to change.
2. Playbook — Knowledge/Playbook - Finding Unknowns/ (Hub card, 3 thin stage maps, 9 technique cards, Ledger - Lessons Learned, Dictionary - Ubiquitous Language). The unit of amendment; read fresh every session.
3. Run notes — Operation Note/Unknowns Runs/, one per engagement, frontmatter holds stage/step/priority state → resumability. `priority: urgent` triggers Fast-Pass summary mode (top-5 blind-spot checklist, flag auto-resets).
4. Learning loop — Stage 3 distills one-line lessons into the Ledger; a tag recurring ≥3 times gets PROPOSED as a permanent technique-card edit (never auto-applied).

## Phases
- [ ] Phase 1 — Build: 18 files per design spec (3 Sonnet batches: A engine+template+design note, B hub+stage maps+ledger+dictionary, C 9 technique cards), Fable review against spec checklist, smoke test, Claude Code restart.
- [ ] Phase 2 — Pilot: one Work-track run (live deal/RFP) and one Hub-track run (e.g. SA transition artifact) end-to-end through Stage 1.
- [ ] Phase 3 — Prove the loop: first Ledger Distillation produces real one-liners; first promotion proposal (tag ≥3) lands in a technique card.

## Working protocol
Consultant–executor split — Fable (main session) specs and reviews, Sonnet subagents execute file creation; user approves promotions and card edits in Obsidian.

## Tasks in this project (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## Done
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```
