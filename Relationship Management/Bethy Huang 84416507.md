---
type: contact
category: internal
name: Bethy Huang
employee_id: "84416507"
aka: Bethy
org: Huawei CBG UK
role: Delivery
location: London (Paddington)
languages:
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Bethy Huang · 84416507

## At a glance
- **Role:** **Delivery**;台灣人(依 Kess O1 canvas 培訓現場筆記)。
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill.

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓(座位圖環節)首次記錄 —— 坐 [[Kaidiliya Ainiwaer 84425233 (Kaiya)|Kaiya]] 旁;Kess 現場筆記標注 Delivery / 台灣人(錄音中未提及,以現場筆記為準)。

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
