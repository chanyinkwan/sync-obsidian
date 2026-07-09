---
type: contact
category: internal
name: Zeynep Ilayda Gurcum
employee_id: "00972049"
aka: Zeynep
org: Huawei — European Legal
role: European Legal Assistant
location:
languages: English
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Zeynep Ilayda Gurcum · 00972049

## At a glance
- **Role:** European legal assistant.
- **What they care about / their stake:** 待補 To fill — legal/compliance review.
- **How to work with them:** 待補 To fill — contact point for legal questions (e.g. BCG compliance, agreements).

## Background
European legal assistant. Exact scope and when to route matters to her 待確認.

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
