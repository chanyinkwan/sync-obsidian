---
type: contact
category: internal
name: James ST John Darwall Warren
employee_id: "00627122"
aka: James
org: Huawei CBG UK — Marketing & E-Commerce
role: Head of International Media
location: UK
languages: English
email:
relationship: 2
status: active
last_contact:
tags:
  - contact
---
# James ST John Darwall Warren · 00627122

## At a glance
- **Role:** Head of International Media as well — alongside [[xusun 00565422 (Grace)]].
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill.

## Background
Noted as Head of the Marketing and E-Commerce team, in parallel with Grace ([[xusun 00565422 (Grace)]]) — clarify how leadership is divided between them (e.g. local vs HQ-assigned, marketing vs e-commerce).

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
