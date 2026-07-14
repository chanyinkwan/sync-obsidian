---
type: contact
category: customer
name: Francesco Zampini
employee_id:
aka:
org: Hutchison IOD (base London)
role: 核心選型 decision maker(管供應商)
location: London
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Francesco Zampini

## At a glance
- **Role:** IOD 內核心管供應商、管選型的人 —— **選不選華為,他說了算**,最核心的 decision maker。
- **What they care about / their stake:** 供應商選型;vendor 情況直接跟 [[Dennis Lui]] 匯報(虛線;組織上匯報 [[Joe Parker]],但 Joe 不管這段)。
- **How to work with them:** **程哥([[Ding Cheng 00611102 (程哥or 丁程)|丁程]])對接**。談判/壓價由他底下的 [[Melanie Fantini 馬蘭妮|Marlene Fantini]] 執行。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:客戶鏈 Canning Fok → Dennis Lui → Joe Parker → **Francesco Zampini** → Marlene Fantini → Mark Williams / Agostino Ruberto。與他合作的還有一位技術方向「CTO」(意大利,Ziyi 7 月送樣機對象,名字待補)。

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
