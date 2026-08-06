---
type: contact
category: internal
name: Meng Qingping
employee_id: "84291389"
aka: 蒙清萍
org:
role: 樣機發貨安排
location:
languages:
email:
relationship:
decision_rights: none — executes shipping once given an address and a date
incentive:
default_stance:
unlocks: a confirmed destination city and date
escalation:
status: active
last_contact:
tags:
  - contact
---
# Meng Qingping (蒙清萍) · 84291389

## At a glance
- **Role:** 
- **What they care about / their stake:** 
- **How to work with them:** 

## Stakeholder read
- **Decides:** none — executes shipping once given an address and a date
- **Only influences:** 
- **Measured on:** 
- **Default stance:** 
- **What gets a yes:** a confirmed destination city and date
- **Escalates to:** 
- **Observed pattern:** <!-- append-only, dated one-liners from real interactions -->

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
