---
type: contact
category: internal
name: Ni Shuyuan
english_name: Sherene
employee_id: "84421757"
aka: Sherene
org: Huawei CBG UK — Marketing team(under Grace)
role: UK Marketing team member
location: UK
languages:
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Ni Shuyuan (Sherene) · 84421757

## At a glance
- **Role:** UK Marketing team member.
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill.

## Background
Under the UK Marketing team; direct manager is [[xusun 00565422 (Grace)]]. Exact remit 待確認.

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
