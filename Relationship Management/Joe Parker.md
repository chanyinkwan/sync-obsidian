---
type: contact
category: customer
name: Joe Parker
employee_id:
aka:
org: Hutchison IOD (base London)
role: IOD 部門 head
location: London
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Joe Parker

## At a glance
- **Role:** IOD(Innovation of Development)部門的頭 —— 但**不太管我們、不太管供應商**。
- **What they care about / their stake:** IOD 部門整體。
- **How to work with them:** 供應商/選型的事實際走 [[Francesco Zampini]](組織上匯報 Joe Parker,但虛線直通 [[Dennis Lui]]);我們基本不需要直接對 Joe Parker。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓 + Kess 提供客戶組織圖:Canning Fok → Dennis Lui → **Joe Parker** → Francesco Zampini → Marlene Fantini → Mark Williams / Agostino Ruberto。IOD 是和記對接我們的 global team,大部分 base 倫敦(這也是我們團隊在倫敦的原因)。

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
