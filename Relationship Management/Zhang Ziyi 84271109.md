---
type: contact
category: internal
name: Zhang Ziyi
employee_id: "84271109"
aka:
org: Huawei CBG — Orange 帳戶
role: 樣機管理(Orange 帳戶)
location:
languages: Mandarin
email:
relationship: 1
status: active
last_contact: 2026-06-24
tags:
  - contact
  - sample-resource
---
# Zhang Ziyi · 84271109

> 注意:**與 mentor [[Ziyi Zhang 84434577]] 同音、不同人**(工號 84271109 vs 84434577)。連結時務必看工號,別連錯。

## At a glance
- **Role:** Orange 帳戶的樣機管理同仁。
- **What they care about / their stake:** Orange 側樣機/大貨庫存與借還。
- **How to work with them:** 可詢問是否能先借一台「大貨(商業量產版)」,承諾我方向機關申請的大貨產出後再還一台。

## Background
2026-06-24:擬請其協助**跨帳戶借大貨**(Orange→大T),作為樣機緊缺時的備援來源。

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
