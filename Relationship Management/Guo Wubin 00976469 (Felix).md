---
type: contact
category: internal
name: Guo Wubin
english_name: Felix
employee_id: "00976469"
aka: Felix
org: Huawei — 待確認
role: 待確認 To confirm
location:
languages:
email:
relationship: 1
status: active
last_contact:
tags:
  - contact
---
# Guo Wubin (Felix) · 00976469

## At a glance
- **Role:** 待確認 To confirm.
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill.

## Background
Org / role 待確認 — fill in as I learn it.

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓補充:[[Sanjeewa Geegana Arachchige 84414674|Sanjeewa]](斯里蘭卡籍)與他管同一塊,幫他做執行的事情。

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
