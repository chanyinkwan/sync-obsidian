---
type: contact
category: internal
name: Miranda Yuan
employee_id: "84428748"
aka: Miranda
org: Huawei CBG UK — E-Commerce team(under Grace)
role: E-Commerce team member
location: UK
languages:
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Miranda Yuan · 84428748

## At a glance
- **Role:** E-Commerce team member.
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill.

## Background
Under the E-Commerce team; direct manager is [[xusun 00565422 (Grace)]]. Exact remit 待確認.

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
