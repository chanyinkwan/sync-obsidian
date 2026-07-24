---
type: contact
category: customer
name: Sasha A.
employee_id:
aka:
org: VodafoneThree UK（原 VDF UK 團隊）
role: Head of Portfolio, Accessories & Home（原 VDF Head of Device）—— 🔴 目前準入決策人
location: UK
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Sasha A.

> 🔴 **目前準入／認證（homologation）決策人** —— O5 關係圖與《和記集團＆VDF3 客戶權利地圖 2026.07》均標記她為 VodafoneThree 現任的准入決策人，是這條線上優先級最高的新聯絡人之一。全名（姓氏）尚未知，僅有「Sasha A.」。

## At a glance
- **Role:** Head of Portfolio, Accessories & Home，原為 VDF Head of Device，向 [[Horace Francis]] 匯報。管轄 [[Brendan Arndt]]（Senior Device Manager）、[[Austen Gillon]]（Senior Accessories Manager）與懸缺的 Home Category Manager (IoT) 三條線。
- **What they care about / their stake:** 終端／配件／家用品類的准入與認證決策——這是她權力的核心。
- **How to work with them:** 待補——全名、對接管道均未知，需向 Ziyi／Selina 確認是否已有接觸。

## Background
2026-07-22 首次建卡，來源：[[0 VodafoneThree UK Org Map]]（《和記集團＆VDF3 客戶權利地圖 2026.07》）。除職稱與「目前準入決策人」的標記外，全名、對華為態度、歷史事件、生日、年資——全數待補。

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
