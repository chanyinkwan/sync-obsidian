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


## 🎯 North-Star For your next job
- [ ] Able to work from home at least 2 days a week
- [ ] salary >45k gbp per annual
- [ ] London or places commute less than 1.5 hour
- [ ] Nice office
- [ ] 

## Source meetings


## Materials and deliverables


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
