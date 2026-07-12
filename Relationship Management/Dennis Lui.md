---
type: contact
category: customer
name: Dennis Lui
employee_id:
aka:
org: Hutchison(和記電訊)
role: 和記電訊 head(一號/最大客戶)
location: Hong Kong
languages: English
email:
relationship: 1
status: active
last_contact:
tags:
  - contact
---
# Dennis Lui

## At a glance
- **Role:** 我們接觸得到的**最頂層**和記客戶 —— base 香港,title 複雜(多個 chairman 頭銜,不用管),實際管和記電訊的事、**很有話語權**。其上還有 [[Canning Fok 霍建寧|Canning Fok]],接觸不到。
- **What they care about / their stake:** 集團層面的供應商方向判斷;歐洲團隊回港向他匯報。
- **How to work with them:** 這一層要**上升到 [[Zeng Li 00798010|曾黎]] 或 [[Rong Tao 00948258 (Tony)|榮濤]]** 去對;程哥 [[Ding Cheng 00611102 (程哥or 丁程)]] 6/24 見過他,三個 follow-up(見 [[Dominique]])。

## Background
Key Hutchison-side customer contact. Sits in the L5 客戶/渠道 layer of [[SCQA O2 - Org-to-Customer Relationship Map]] under Hutchison 客戶.

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓補充:程哥會前初見 Dennis,他對華為手機**生態替代方案**(不能裝 Google Play 的解決方案)評價「聽起來還不錯」,要求拿給歐洲團隊試用 —— 觸發了那單緊急樣機需求(最終以 Mate X7 頂上;Pura 90 等 7/14 發布會後再發)。客戶鏈:Canning Fok → **Dennis Lui** → [[Joe Parker]] → [[Francesco Zampini]] → [[Melanie 馬蘭妮|Marlene Fantini]] → [[Mark Williams]] / [[Agostino Ruberto]]。

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
