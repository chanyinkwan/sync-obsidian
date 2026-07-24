---
type: contact
category: customer
name: Max Taylor
employee_id:
aka:
org: VodafoneThree UK（原 VDF UK 團隊）
role: CEO, VodafoneThree（原 VDF UK CEO）
location: UK
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Max Taylor

## At a glance
- **Role:** CEO, VodafoneThree——3UK 與 Vodafone UK 合併後新實體的最高負責人，原為 VDF UK CEO。整條組織圖的頂點。
- **What they care about / their stake:** 待補——目前完全未知，零一手接觸紀錄。
- **How to work with them:** 待補。

## Background
2026-07-22 首次建卡，來源：[[0 VodafoneThree UK Org Map]]（《和記集團＆VDF3 客戶權利地圖 2026.07》）。除職稱與組織頂點位置外，對華為態度、歷史事件、生日、年資——全數待補。

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
