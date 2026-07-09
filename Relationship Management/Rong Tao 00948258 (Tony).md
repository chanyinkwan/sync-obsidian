---
type: contact
category: internal
name: Rong Tao
english_name: Tony
employee_id: "00948258"
aka: Tony
org: Huawei CBG — 歐洲終端業務部 European Device Business Dept
role: Head of European Device BG(整個歐洲終端 BG 的負責人)
location:
languages:
email:
relationship: 2
status: active
last_contact:
tags:
  - contact
---
# Rong Tao (Tony) · 00948258

## At a glance
- **Role:** 整個歐洲終端 BG 的負責人 — head of the entire European Device BG(三級部門 European Device Business Dept 層級的領導)。
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill — senior leadership; likely the L3 anchor on [[SCQA O2 - Org-to-Customer Relationship Map]].

## Background
Head of the whole European Device BG (歐洲終端). Candidate to fill the L3「三級部門對接人」red card on the O2 org-to-customer map.

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
