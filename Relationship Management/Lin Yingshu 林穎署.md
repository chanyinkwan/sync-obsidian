---
type: contact
category: hq
name: Lin Yingshu
employee_id:
aka: 林穎署
org: Huawei HQ (機關) — Sample Administration
role: Sample Administrator (all 大T samples)
location:
languages: Mandarin
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Lin Yingshu (林穎署)

## At a glance
- **Role:** Sample administrator (機關) for all 大T samples.
- **What they care about / their stake:** Collecting accurate forecasts and running clean sample production cycles.
- **How to work with them:** First point of contact for any sample question; she posts production announcements in the WeChat groups.

## Background
HQ-side sample administrator covering all 大T samples. Announces upcoming samples per product/month, collects the forecast (via her shared spreadsheet), and signals when samples are "ready to apply." She is in the two sample WeChat groups and is the go-to for any sample question.

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓補充:組織上她是 DT 系統部的 contractor(head [[Xin Chen 00279864|陳昕]] 之下)——**名義掛德電,但樣機這塊掛整個 5T 所有人**。她發的是「available」通知;要不要申、申多少,聽程哥的需求(MWC 前會申一大批)。緊急需求時她也能找替代機(上次幫忙找到 Mate X7 頂上 Dennis Lui 試用需求)。

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
