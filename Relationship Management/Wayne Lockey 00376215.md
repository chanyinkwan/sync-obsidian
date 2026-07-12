---
type: contact
category: internal
name: Wayne Lockey
employee_id: "00376215"
aka: Wayne
org: Huawei CBG UK
role: Country sales director
location: London (Paddington)
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Wayne Lockey · 00376215

## At a glance
- **Role:** Country sales director(英國),外籍;坐 Paddington 辦公室 Kess 後排中間位。
- **What they care about / their stake:** 英國 country sales。
- **How to work with them:** 英國業務上會有一些交集;見面打招呼即可,非終端大T 直接對口。

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
