---
type: project
status: hold
owner: me
stakeholders:
domain: Career / Job Search
updated: 2026-07-28
tags:
  - project
---
# SA Presales Transition

## Goal / my scope
Land a Solution Architect / Presales Consultant role. This is a 10-week sprint (2026-07-13 → 2026-09-20) running from domain selection → SAA cert → discovery/demo skills → applications → panels.

Parent goal: [[Look for another job]] (north-star criteria live there).
Strategy layer: [[North Star — Role Reality & Exit Strategy]] (why leaving, by when) · [[三條軌跡推演 (2026-07-21)]] (this sprint is track 2).
Source thinking: [[how to become a Solution Architect or Presales Consultant]] · [[Exploring What I want to do]] · [[SA Lock-In — Gap Audit & 30-Day Sprint]].

## 定位宣言 (locked, Gate 1 — see [[SA 02 - Unfair Advantage Intersection]])
> 我要主攻的領域是 **AI SaaS / AI 平台的解決方案架構與售前 (`ai-ml-platform` presales)**，因為它能完美結合我過去在企業電信與硬體 portfolio 商業方案銷售、跨職能大客戶治理、以及定價與商務條款設計的優勢，解決 AI 平台廠商「技術做得出來、但打不進企業採購流程與多方關係人決策」的痛點。

Evidence base: [[SA Requisition Dashboard]] (50-JD heatmap, `ai-ml-platform` 10/50 at rank 1) · [[Experience Question Bank - Presales SE]] (the stories that back it).
Gap to close: `genai-hands-on-literacy` — an artifact gap, closed by SA 08 / SA 09 / SA 10, not by more study.

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
| Week | Dates         | Base layer                           | Overlay / Sprint                         | Gate                      |
| ---- | ------------- | ------------------------------------ | ---------------------------------------- | ------------------------- |
| W1   | 07-13 → 07-19 | Requisition index + book exam        | —                                        | 定位宣言 written, exam booked |
| W2   | 07-20 → 07-26 | SAA study starts                     | 行動4 question bank                        | —                         |
| W3   | 07-27 → 08-02 | SAA                                  | 行動5 persona script                       | —                         |
| W4   | 08-03 → 08-09 | SAA                                  | 行動6 bridge reps                          | —                         |
| W5   | 08-10 → 08-16 | SAA practice exams                   | 行動7 Click-to-Value Loom                  | —                         |
| W6   | 08-17 → 08-23 | **SAA exam**                         | 行動8 whiteboard reps only — recovery week | SAA passed                |
| W7   | 08-24 → 08-30 | 行動10 artifact from SAA labs          | weekend **sprint #1** domain leader      | —                         |
| W8   | 08-31 → 09-06 | **applications start — 5 out**       | 行動9 fire drills                          | —                         |
| W9   | 09-07 → 09-13 | applications + role-plays            | weekend **sprint #2** challenger         | —                         |
| W10  | 09-14 → 09-20 | role-play #3 + first real interviews | —                                        | —                         |

## Progress
<!-- sa-progress:start -->
**As of 2026-07-28 — W3 of 10, day 16 of 70. Structurally on schedule, executionally behind.**

| Task                                           | Species     | State            | Note                                                                                                 |
| ---------------------------------------------- | ----------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| [[SA 00 - Exam Prep]]                          | one-shot    | ✅ done           |                                                                                                      |
| [[SA 01 - LinkedIn Requisition Index]]         | rep         | ✅ closed 07-27   | 3 of 11 weekday reps logged; closed on UNTIL, not on rep count. Output: [[SA Requisition Dashboard]] |
| [[SA 02 - Unfair Advantage Intersection]]      | one-shot    | ✅ done           | **Gate 1 passed** — 定位宣言 above                                                                       |
| [[SA 03 - Book AWS SAA Exam]]                  | one-shot    | ✅ done           | exam booked 07-13                                                                                    |
| [[SA 04 - AWS SAA Study & Exam]]               | rep (daily) | 🔄 running       | **3 of 6 weekday slots (50%)**; missed 07-20, 07-24, 07-27                                           |
| [[SAA - Daily Session Processing]]             | rep (daily) | 🔄 running       | **3 of 11 days (27%)**                                                                               |
| [[SA 05 - Three-Tier Discovery Question Bank]] | one-shot    | ⚠️ slipped       | due 07-26, still `todo`; W2 overlay never landed                                                     |
| [[SA 06 - Persona-Based Script Reps]]          | rep (daily) | 🔄 started 07-27 | W3 overlay; depends on SA 05 output                                                                  |
| SA 07 → SA 15                                  | mixed       | ⏳ not started    | all future-dated, none overdue                                                                       |

### Gates
- **Gate 1 — 定位宣言 (end W1): PASSED.** Domain locked, no question mark.
- **Gate 2 — SAA passed (end W6, exam 2026-08-23): AT RISK.** 26 weekday study slots remain; at the current 50% adherence that is ~13 hours of study before the exam. W5 assumes W2–W4 content is covered; it is roughly one week behind.
- **Gate 3 — 5 applications out (W8, 2026-08-31): on track.** 5 weeks of slack. Not the current bottleneck. See [[SA 12 - First 5 Applications Out]].

### Open decision
SA 05 finish or drop. It feeds SA 06 (running now) and SA 07/08 — doing persona scripts without the question bank means redoing them. Alternative is to drop it and give the whole overlay to SA 04 to recover Gate 2.
<!-- sa-progress:end -->

## Fixed calendar anchor
**AWS SAA-C03 exam — Sunday 2026-08-23, 12:00 BST (140 min).** Booked 2026-07-13. Order 0080-4439-8304, Registration ID 541404992, Candidate ID AWS06121315. Check-in opens 11:30 BST.

This is now the one immovable date in the sprint. Everything before it is study runway (W2–W6); everything after it is the applications half. Full details in [[SA 03 - Book AWS SAA Exam]].

## Decision gates
- **Gate 1** (end W1): 定位宣言 with no question mark. If torn between two domains, pick the higher requisition count and move — skills are 80% transferable, a delayed choice costs more than a wrong one.
- **Gate 2** (end W6): SAA passed.
- **Gate 3** (W8): applications go out regardless of "feeling ready" — the first two interviews are tuition.

## Project advisor agent
`.claude/agents/sa-transition-advisor.md` holds a project-scoped agent — documented at [[Agent - SA Transition Advisor]]. Invoke it in Claude Code for any rescheduling/prioritization suggestion. Workflow: advisor (Sonnet) proposes → consultant (main session) reviews → user approves.

## Connected notes

**Child project**
- [[AWS SAA-C03]] — the W2–W6 base layer and Gate 2; carries the study system itself. Dashboard: [[AWS SAA-C03 Home]], blind spots: [[Active Unknowns]].

**Strategy above this sprint**
- [[Look for another job]] — parent goal, north-star role criteria (salary, hybrid, commute).
- [[North Star — Role Reality & Exit Strategy]] — why leaving and by when; run sprint decisions through its tests.
- [[三條軌跡推演 (2026-07-21)]] — this sprint is track 2 of three.
- [[SA Lock-In — Gap Audit & 30-Day Sprint]] — the gap audit this sprint operationalises.
- [[Career Hub Goal]] — the hub-track goal this sprint sits inside.

**Evidence and assets**
- [[SA Requisition Dashboard]] — 50-JD corpus behind the domain choice; re-run before applications (W8).
- [[Experience Question Bank - Presales SE]] — stories mapped to presales competencies.
- `Knowledge/About Me/MasterExperienceDB.json` — canonical experience records feeding the CV.

**Machinery that runs this sprint**
- [[Agent - SA Transition Advisor]] — scheduling and capacity arbitration.
- [[Agent - SAA Knowledge Manager]] — turns study output into atomic notes.
- [[Skill - Run Study Session]] · [[Skill - Coursera Notes]] · [[Skill - Plan Daily Ops]] — daily execution surface.

**Constants that constrain it**
- [[常數 - Impact 要可見才算數(Legible Impact)]] — why artifacts (SA 08/09/10) beat more study.
- [[常數 - 沒有 100% 契合的職位(看佔比與趨勢)]] — why the `ai-ml-platform` choice does not need to be a perfect fit.

**Seeds feeding this**
- [[5 hands on project for solution architect]] — candidate material for SA 10.
- [[Mentor Agent (persona 教練)]] — a sparring partner for SA 06 and SA 13.

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
