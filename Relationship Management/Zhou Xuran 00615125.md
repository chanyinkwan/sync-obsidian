---
type: contact
category: hq
name: Zhou Xuran
employee_id: "00615125"
aka:
org: Huawei — Brovi 產品線
role: Product Line (Brovi)
location: 
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Zhou Xuran · 00615125

## At a glance
- **Role:** Brovi 產品線對口。
- **What they care about / their stake:** Brovi 品牌線的產品規劃與供應。
- **How to work with them:** Brovi(非華為主品牌)相關的路標、選品與供應問題走他。

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
