---
type: project
status: active
owner: me
stakeholders:
domain: Career / Job Search
updated: 2026-07-12
tags:
  - project
---
# SA Presales Transition

## Goal / my scope
Land a Solution Architect / Presales Consultant role. This is a 10-week sprint (2026-07-13 → 2026-09-20) running from domain selection → SAA cert → discovery/demo skills → applications → panels.

Parent goal: [[Look for another job]] (north-star criteria live there).
Source thinking: [[how to become a Solution Architect or Presales Consultant]].

## Capacity model (hard constraint)
20% daily strategic blank space ≈ 1.5h/day ≈ 7.5h/week during working hours. Split:
- **Base layer**: 1h/day (SAA study, later applications/interviews).
- **Overlay**: 2.5h/week (exactly ONE skill task per week).
- **Weekend sprints** (48hr deconstructions) sit outside working-hours capacity — they run on weekends.

Never schedule two overlay tasks in the same week.

## Task species
Three types of tasks in this project, handled differently:
- **One-shot deliverable** — closeable. Done when the artifact exists and meets its success criteria.
- **Rep-based practice** — measured in reps, not done until the rep count is hit. Do not close early just because it "feels" done. Implemented as TaskNotes recurring tasks (`recurrence` rrule field, per-instance completion via `complete_instances`); the task is done when all instances up to its UNTIL date are complete (SA 15: minimum 3 of 4, the 4th slot is buffer).
- **Weekend sprint** — a calendar event, not a task you can slide into a weekday. There are 2 total.

The two daily base-layer tasks (SA 01, SA 04) are also recurring, for daily surfacing in TaskNotes.

## 10-week timeline
| Week | Dates | Base layer | Overlay / Sprint | Gate |
|---|---|---|---|---|
| W1 | 07-13 → 07-19 | Requisition index + book exam | — | 定位宣言 written, exam booked |
| W2 | 07-20 → 07-26 | SAA study starts | 行動4 question bank | — |
| W3 | 07-27 → 08-02 | SAA | 行動5 persona script | — |
| W4 | 08-03 → 08-09 | SAA | 行動6 bridge reps | — |
| W5 | 08-10 → 08-16 | SAA practice exams | 行動7 Click-to-Value Loom | — |
| W6 | 08-17 → 08-23 | **SAA exam** | 行動8 whiteboard reps only — recovery week | SAA passed |
| W7 | 08-24 → 08-30 | 行動10 artifact from SAA labs | weekend **sprint #1** domain leader | — |
| W8 | 08-31 → 09-06 | **applications start — 5 out** | 行動9 fire drills | — |
| W9 | 09-07 → 09-13 | applications + role-plays | weekend **sprint #2** challenger | — |
| W10 | 09-14 → 09-20 | role-play #3 + first real interviews | — | — |

## Fixed calendar anchor
**AWS SAA-C03 exam — Sunday 2026-08-23, 12:00 BST (140 min).** Booked 2026-07-13. Order 0080-4439-8304, Registration ID 541404992, Candidate ID AWS06121315. Check-in opens 11:30 BST.

This is now the one immovable date in the sprint. Everything before it is study runway (W2–W6); everything after it is the applications half. Full details in [[SA 03 - Book AWS SAA Exam]].

## Decision gates
- **Gate 1** (end W1): 定位宣言 with no question mark. If torn between two domains, pick the higher requisition count and move — skills are 80% transferable, a delayed choice costs more than a wrong one.
- **Gate 2** (end W6): SAA passed.
- **Gate 3** (W8): applications go out regardless of "feeling ready" — the first two interviews are tuition.

## Project advisor agent
`.claude/agents/sa-transition-advisor.md` holds a project-scoped agent. Invoke it in Claude Code for any rescheduling/prioritization suggestion. Workflow: advisor (Sonnet) proposes → consultant (main session) reviews → user approves.

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
