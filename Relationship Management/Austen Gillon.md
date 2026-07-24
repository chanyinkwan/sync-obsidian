---
type: contact
category: customer
name: Austen Gillon
employee_id:
aka:
org: VodafoneThree UK（原 VDF UK 團隊）
role: Senior Accessories Manager (Wearable, Audio, etc.)
location: UK
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Austen Gillon

## At a glance
- **Role:** Senior Accessories Manager，負責 Wearable／Audio 等品類，向 [[Sasha A. (VodafoneThree)|Sasha A.]] 匯報。管轄 [[Agata Cook]]（Lead Category Manager – Digital）與 [[Erynn Lester]]（Commercial Manager）。
- **What they care about / their stake:** 穿戴／音訊配件品類——與華為穿戴品類拓展直接相關，值得優先關注。
- **How to work with them:** 待補。

## Background
2026-07-22 首次建卡，來源：[[0 VodafoneThree UK Org Map]]（《和記集團＆VDF3 客戶權利地圖 2026.07》）。除組織位置與匯報線外，對華為態度、歷史事件、生日、年資——全數待補。

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
