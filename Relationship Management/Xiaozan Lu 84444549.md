---
type: contact
category: internal
name: Xiaozan Lu
employee_id: "84444549"
aka: ASR 聽作「陸小珍」(以系統名 Xiaozan Lu 為準)
org: Huawei CBG — 大T · GTM & Solutions 團隊
role: GTM — testing / 准入(新入職)
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Xiaozan Lu · 84444549

## At a glance
- **Role:** GTM & Solutions 團隊([[Li Qinghua 00861267|李清華]] 之下)做 testing / 准入;很新,團隊還沒怎麼接觸過。
- **What they care about / their stake:** 地區部層面的統一測試 —— 共性、strategic、創新型項目(例:競品新品出現,多帳戶都需要優劣勢對比時,由他統一測)。
- **How to work with them:** 涉及跨帳戶/地區部層面的測試需求時找他。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓首次提及。注意:與 [[Luxi Zhou 84442451]](周露西,歐洲地區部**樣機**管理)是不同的人、不同職能。

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
