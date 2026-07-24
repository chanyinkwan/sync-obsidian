---
type: contact
category: customer
name: Susan
employee_id:
aka:
org: VodafoneThree UK（原 VDF UK 團隊）
role: Head of Supply & Planning
location: UK
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Susan（VodafoneThree）

## At a glance
- **Role:** Head of Supply & Planning，向 [[Horace Francis]] 匯報，管轄供應鏈團隊（[[Dani (VodafoneThree)|Dani]] → [[Shana (VodafoneThree)|Shana]]）。
- **What they care about / their stake:** 供應與計畫排程——待補細節。
- **How to work with them:** 待補。

## Background
2026-07-22 首次建卡，來源：[[0 VodafoneThree UK Org Map]]（《和記集團＆VDF3 客戶權利地圖 2026.07》）。姓氏未知，僅有「Susan」。除職稱與匯報線外，對華為態度、歷史事件、生日、年資——全數待補。

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
