---
type: contact
category: internal
name: Ziyi Zhang
employee_id: "84434577"
aka: Ziyi
org: Huawei CBG — E-Commerce / GTM Ops
role: GTM Ops Lead (E-Commerce)
location:
languages: Mandarin
email:
relationship: 4
status: active
last_contact: 2026-06-16
tags:
  - contact
---
# Ziyi Zhang · 84434577

## At a glance
- **Role:** E-Commerce / GTM Ops — Amazon GTM & B2B.
- **What they care about / their stake:** Smooth Mall + Amazon launches and a clean sample stocktake.
- **How to work with them:** My mentor right now — lean on her for any sample-management question during the handover.

## Background
E-Commerce / GTM Ops lead (Amazon GTM & B2B). My **mentor for the 1-month sample-management handover** (16-Jun-2026 training). Manages Mall + Amazon product launches and the quarterly sample stocktake; will train me on the quarterly upload next month. Default approver (with 程哥) for self-use of spare samples.

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
