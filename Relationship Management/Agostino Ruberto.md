---
type: contact
category: customer
name: Agostino Ruberto
employee_id:
aka: Agos
org: Hutchison IOD
role: 手機/手錶選型(under Marlene Fantini)
location: Italy
languages: English, Italian
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Agostino Ruberto (Agos)

## At a glance
- **Role:** [[Melanie Fantini 馬蘭妮|Marlene Fantini]] 之下,管**手機、手錶**這些品類的選型;意大利。
- **What they care about / their stake:** 手機/手錶品類選型。
- **How to work with them:** **[[Huang Yi 84411269 (Selina)|Selina]] 對接**;他是我們**最多直接接觸到**的 IOD 層級(其餘技術方向的人 [[Michele Cappabianca 00473733|Michele]] 全包)。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:客戶鏈 Canning Fok → Dennis Lui → Joe Parker → Francesco Zampini → Marlene Fantini → Mark Williams / **Agostino Ruberto**。依 Kess 表格註記:意大利,即 Ziyi 本次(2026-07)赴意送樣機的對象。

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
