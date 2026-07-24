---
type: contact
category: customer
name: Daniel Halsey
employee_id:
aka:
org: VodafoneThree UK（原 3UK 團隊）
role: Head of Vendor Management and Commercial Strategy（原 3UK Head of Device）—— 🔴 目前商務談判決策人
location: UK
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Daniel Halsey

> 🔴 **目前商務談判決策人** —— O5 關係圖與《和記集團＆VDF3 客戶權利地圖 2026.07》均標記他為 VodafoneThree 現任的商務談判決策人，是這條線上優先級最高的新聯絡人之一。原為 3UK Head of Device，合併後留任並升至此位置。

## At a glance
- **Role:** Head of Vendor Management and Commercial Strategy，向 [[Horace Francis]] 匯報。管轄 [[Andy Streeton]]（Commercial Vendor Managers – challenging Brands）。
- **What they care about / their stake:** 供應商商務談判與策略——這是他權力的核心，也是與華為議價最直接相關的窗口。
- **How to work with them:** 待補——需向 Ziyi／Selina 確認是否已有接觸；由於是商務談判決策人，值得優先建立關係。

## Background
2026-07-22 首次建卡，來源：[[0 VodafoneThree UK Org Map]]（《和記集團＆VDF3 客戶權利地圖 2026.07》）。除職稱與「目前商務談判決策人」的標記外，對華為態度、歷史事件、生日、年資——全數待補。

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
