---
type: contact
category: customer
name: Canning Fok Kin Ning
employee_id:
aka: 霍建寧
org: CK Hutchison(和記集團層)
role: 集團高層(Dennis Lui 之上)
location: Hong Kong
languages: English, Cantonese
email:
relationship:
status: archive
last_contact:
tags:
  - contact
---
# Canning Fok (霍建寧)

## At a glance
- **Role:** 和記集團層高層,[[Dennis Lui]] 的 head。
- **What they care about / their stake:** 集團層面。
- **How to work with them:** **接觸不到** —— 本卡僅存檔用,標記客戶組織圖最頂端。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓 + Kess 提供客戶組織圖:**Canning Fok Kin Ning** → Dennis Lui → Joe Parker → Francesco Zampini → Marlene Fantini → Mark Williams / Agostino Ruberto。

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
