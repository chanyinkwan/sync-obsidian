---
type: contact
category: internal
name: He Gang
english_name: Kevin
employee_id: "00866077"
aka: Kevin, 何剛
org: Huawei 歐洲 CBG
role: 歐洲 CBG head
location:
languages:
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# He Gang (Kevin 何剛) · 00866077

## At a glance
- **Role:** 歐洲 CBG head —— 組織鏈最上層(CBG → MSS → … → [[Zeng Li 00798010|曾黎]])。
- **What they care about / their stake:** 歐洲 CBG 整體業務;客戶高層會面。
- **How to work with them:** 不需主動對接 —— 典型場景是幫他約客戶高層的時間。知道是誰即可。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓確認:Kevin(何剛)是歐洲 CBG head(此前 5T 術語表曾誤標為和記客戶側 ⚠,已更正)。MSS 及其上兩層具體是誰,Ziyi 待確認後回報。

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
