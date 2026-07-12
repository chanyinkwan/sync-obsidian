---
type: contact
category: internal
name: Fergus
employee_id:
aka:
org: Huawei CBG UK — PR
role: PR
location: London (Paddington)
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Fergus

## At a glance
- **Role:** 我們的 PR;外籍,戴眼鏡。
- **What they care about / their stake:** PR / 媒體事務。
- **How to work with them:** **幾週才來辦公室一次,沒有固定座位** —— 別在座位圖上給他固定位。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓(座位圖環節)確認:Kess 後方常見的眼鏡外籍同事不是 James,偶爾出現的那位才是 Fergus(PR)。
(註:本檔曾一度誤含 James ST John Darwall Warren 00627122 的卡片內容 —— 2026-07-10 已更正;James 的舊卡片已被刪除,如需保留他的資料請另建卡。)

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
