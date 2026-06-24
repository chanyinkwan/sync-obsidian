---
type: contact
category: internal
name: Qixuan Wang
employee_id: "wx1252689"
aka:
aliases: ["Qixuan Wang (wx1252689)", Qixuan Wang]
org: Huawei CBG — 大T
role: Product / Launch & Market
location:
languages:
email:
relationship: 2
status: active
last_contact: 2026-06-17
tags:
  - contact
---
# Qixuan Wang · wx1252689

## At a glance
- **Role:** Product / launch & market.
- **What they care about / their stake:** Clean relaunches, return-rate, and UK local-market sell-through.
- **How to work with them:** Coordinate on launch plans and market issues (esp. UK).

## Background
Owns relaunch planning and market performance. In the 17-Jun download flagged the **high return-rate** issue and that **UK local-market volume isn't picking up** — wants a separate UK conversation.

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
