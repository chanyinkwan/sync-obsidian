---
type: contact
category: internal
name: Tang Yiyang
employee_id: "00952929"
aka:
org: Huawei — 法國代表處
role: 法國 GTM (Rep Office GTM)
location: France
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Tang Yiyang · 00952929

## At a glance
- **Role:** 法國代表處側 GTM,Amazon MBB 在法國落地的國家對口。
- **What they care about / their stake:** 法國站點的選品、定價落地與本地促銷節奏。
- **How to work with them:** 法國站的國家側問題先找他;跨國政策仍走地區部([[Li Qinghua 00861267|李清華]] / [[yubeifei y00663235|碧斐]])。

## Background
2026-08-21 由 Amazon GTM 對口組織表建卡(來源:[[Amazon GTM Management]] §Materials 組織圖 / [[Amazon GTM Org Map]])。尚未實際接觸,先建卡佔位,接觸後補 Stakeholder read。

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
