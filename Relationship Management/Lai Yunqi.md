---
type: contact
category: internal
name: Lai Yunqi
employee_id:
aka: Yun Ce (ASR)
org: Huawei
role:
location:
languages:
email:
relationship: 1
status: active
last_contact:
tags:
  - contact
---
# Lai Yunqi

## At a glance
- **Role:** _TBD — Kess to add context._ First appeared as an expected attendee of the 2026-07-15 Dominique FWA strategy review; the team waited for him at the start but he never joined online.
- **What they care about / their stake:** Unknown for now.
- **How to work with them:** Unknown for now.

## Background
- 2026-07-15: Named at the top of the Dominique FWA strategy review — Ding Cheng and Dominique waited a few minutes for him ("we are waiting for Yun Ce"), then started without him. Not a material participant in that meeting. ASR rendered the name as "Yun Ce"; canonical spelling **Lai Yunqi** per Kess.

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
