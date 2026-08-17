---
type: project
status: active
owner: me
stakeholders:
domain: Personal Ops / Knowledge System
updated: 2026-06-29
tags:
  - project
---
# Look for another job

## Goal / my scope


## Active sprint
**[[SA Presales Transition]]** (2026-07-13 → 2026-09-20) is the child sprint currently executing this goal: domain selection → AWS SAA cert → discovery/demo skills → applications → panels. Its child project is [[AWS SAA-C03]]. Strategy context: [[North Star — Role Reality & Exit Strategy]].

Applications against the criteria below go out at W8 (2026-08-31) via [[SA 12 - First 5 Applications Out]].

## 🎯 North-Star For your next job
- [ ] Able to work from home at least 2 days a week
- [ ] salary >45k gbp per annual
- [ ] London or places commute less than 1.5 hour
- [ ] Nice office
- [ ] 

## Source

[[On List Jobs]]


## Materials and deliverables
- [[Trip.com Interview]] — active in parallel: Trip.Biz Senior PM EMEA, panel interview 13 Aug 2026 with Jim Chung. Shares several task notes with this project (dual-tagged).

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
