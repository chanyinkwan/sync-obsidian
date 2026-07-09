---
type: contact
category: internal
name: Gao Mingsheng
employee_id: "84421756"
aka:
org: Huawei CBG UK — E-Commerce team
role: E-Commerce team member
location:
languages:
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Gao Mingsheng · 84421756

## At a glance
- **Role:** E-commerce team member.
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill.

## Background
On the e-commerce team (UK CBG side). Exact remit 待確認.

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
