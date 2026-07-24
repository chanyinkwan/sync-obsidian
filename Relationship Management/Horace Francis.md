---
type: contact
category: customer
name: Horace Francis
employee_id:
aka:
org: VodafoneThree UK（原 VDF UK 團隊）
role: Head of Device（原 VDF UK Device Operation Director）
location: UK
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Horace Francis

## At a glance
- **Role:** Head of Device——VodafoneThree 終端業務負責人，向 [[Rob Winterschladen]] 匯報，原為 VDF UK Device Operation Director。**[[Sasha A. (VodafoneThree)|Sasha A.]]**（準入決策）、**[[Daniel Halsey]]**（商務談判決策）、**[[Susan (VodafoneThree)|Susan]]**（供應鏈）三條線均向他匯報——是連結 VodafoneThree 終端決策的樞紐位置。
- **What they care about / their stake:** 待補。
- **How to work with them:** 待補——但因三位關鍵決策/職能負責人均向他匯報，可能是這條線上最值得優先建立關係的人之一。

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
