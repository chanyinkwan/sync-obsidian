---
type: contact
category: internal
name: Attila Abraham
employee_id: "00645372"
aka: Attila
org: Huawei CBG UK — 渠道
role: 渠道經理(主管 Amazon,兼其他渠道)
location: London (Paddington)
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Attila Abraham · 00645372

## At a glance
- **Role:** 渠道經理 —— 主要負責 Amazon 渠道,其他渠道也管;坐 Kess 後排(Wayne 旁邊)。
- **What they care about / their stake:** UK 電商/渠道銷售。
- **How to work with them:** 見面打招呼即可,非終端大T 直接對口。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓(座位圖環節)首次記錄。

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
