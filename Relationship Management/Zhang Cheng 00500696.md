---
type: contact
category: internal
name: Zhang Cheng
employee_id: "00500696"
aka: 张程
org: 交付
role: 交付評估
location:
languages:
email:
relationship:
decision_rights: whether Plan A (air freight to a non-EU destination) is feasible
incentive:
default_stance: unknown — first interaction
unlocks:
escalation:
status: active
last_contact:
tags:
  - contact
---
# Zhang Cheng (张程) · 00500696

## At a glance
- **Role:** 
- **What they care about / their stake:** 
- **How to work with them:** 

## Stakeholder read
- **Decides:** whether Plan A (air freight to a non-EU destination) is feasible
- **Only influences:** 
- **Measured on:** 
- **Default stance:** unknown — first interaction
- **What gets a yes:** 
- **Escalates to:** 
- **Observed pattern:** <!-- append-only, dated one-liners from real interactions -->
  - 2026-08-06 first contact, via 程哥's E6898 sample task. No pattern yet.

### Balls currently in their court
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Due", nudged AS "Last nudged"
FROM #task
WHERE contains(waiting_on, this.file.link) AND status != "done"
SORT nudged ASC
```

## Background


## Last meeting / interaction
```dataview
TABLE WITHOUT ID file.link AS "Note", date AS "Date"
FROM #meeting
WHERE contains(file.outlinks, this.file.link)
SORT date DESC
LIMIT 5
```

## Open action items involving them
```dataview
TASK
FROM "Operation Note"
WHERE !completed AND contains(text, this.file.name)
```

## All linked notes (every mention)
```dataview
LIST
WHERE contains(file.outlinks, this.file.link) AND file.name != this.file.name
SORT file.mtime DESC
```
