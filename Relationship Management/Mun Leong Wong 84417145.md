---
type: contact
category: internal
name: Mun Leong Wong
employee_id: "84417145"
aka:
org: Huawei UK — IT Support
role: IT Support
location: UK office (Paddington, seat 01A)
languages: Cantonese
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Mun Leong Wong · 84417145

## At a glance
- **Role:** IT support.
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** Go-to for IT issues; sits at seat 01A (see O1 Paddington office map).

## Background
IT support in the UK office. Seat 01A on the [[SCQA O1 - Paddington Office Map]].

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
