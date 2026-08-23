---
type: contact
category: hq
name: Zhang Ying
employee_id: "wx1110631"
aka:
org: Huawei — R&D · 定制化
role: R&D — Customization
location: 
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Zhang Ying · wx1110631

## At a glance
- **Role:** R&D 定制化(Customization)對口。
- **What they care about / their stake:** 定制版本需求的可行性與排期。
- **How to work with them:** Amazon 專屬/渠道定制需求(包裝、預置、版本)由他評估。wx 工號=外包/協同帳號。

## Background
2026-08-21 由 Amazon GTM 對口組織表建卡(來源:[[Amazon GTM Management]] §Materials 組織圖 / [[Amazon GTM Org Map]])。尚未實際接觸,先建卡佔位,接觸後補 Stakeholder read。

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
