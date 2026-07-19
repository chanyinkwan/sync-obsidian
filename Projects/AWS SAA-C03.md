---
type: project
status: active
owner: me
stakeholders:
domain: Career / Certification
due: 2026-08-23
updated: 2026-07-17
tags:
  - project
---
# AWS SAA-C03

## Goal / my scope
Pass the AWS Certified Solutions Architect – Associate (SAA-C03) exam on **2026-08-23**, and turn the study run into reusable assets: an atomic knowledge base, a question/error log, and public content that supports the AI Solutions Engineer positioning.

Parent sprint: [[SA Presales Transition]] — SAA study is its W2–W6 base layer (1h/day) and Gate 2 (SAA passed, end W6). This project carries the study system itself; scheduling and capacity decisions stay with the parent sprint.

## Knowledge hub
Everything lives in `Knowledge/Professionals/AWS SAA-C03/`:
- [[AWS SAA-C03 Home]] — dashboard (exam countdown, current focus, recent study)
- [[Active Unknowns]] — max 3 open blind spots + parking lot
- `02 Notes` / `03 Questions` / `04 Journey` / `05 Content` — filled via the four SAA templates in `Template/`

## Working loop
1. Study session → log with SAA Study Session Template into `04 Journey`.
2. Wrong / guessed / slow questions → SAA Question Note Template into `03 Questions`.
3. Each question traces to (or creates) an atomic note → SAA Knowledge Note Template into `02 Notes`.
4. Blind spots escalate to [[Active Unknowns]] (max 3); one next-action updates the Home page.
5. Reusable arguments become drafts via SAA Content Idea Template in `05 Content`.

## Materials and deliverables
- Exam logistics: [[SA 03 - Book AWS SAA Exam]] (Sunday 2026-08-23, 12:00 BST, 140 min)
- Daily study task: [[SA 04 - AWS SAA Study & Exam]]
- Post-exam artifact (W7): lab-based artifact per [[SA Presales Transition]] 行動10

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
