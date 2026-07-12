---
type: contact
category: internal
name: Sanjeewa Geegana Arachchige
employee_id: "84414674"
aka: Sanjeewa
org: Huawei CBG UK
role: 執行支援(與 Felix 同一塊)
location: London (Paddington)
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Sanjeewa Geegana Arachchige · 84414674

## At a glance
- **Role:** 斯里蘭卡人;與 [[Guo Wubin 00976469 (Felix)|Felix]] 管同一塊,幫 Felix 做執行的事情(近似助理但不完全是)。
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 見面打招呼即可。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓(座位圖環節)首次記錄,坐 Kaiya/Bethy 附近。

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
