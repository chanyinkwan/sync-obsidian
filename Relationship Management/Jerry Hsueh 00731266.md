---
type: contact
category: internal
name: Jerry Hsueh
employee_id: "00731266"
aka: Jerry(工號 ⚠ 待確認)
org: Huawei CBG — 大T · VDF(Vodafone)系統部
role: VDF 主要管事人(部門暫無 head)
location: Luxembourg
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Jerry Hsueh · 00731266 ⚠

## At a glance
- **Role:** VDF(Vodafone)系統部主要管事人 —— 部門暫無 head(疑似 [[Zeng Li 00798010|曾黎]] 想親自帶 ⚠)。台灣人,base Luxembourg。
- **What they care about / their stake:** Vodafone 帳戶。
- **How to work with them:** 底下的 ops 是 [[Charco Chan]](亦台灣人),日常先找 Charco。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:VDF 只有 Jerry + Charco 兩人。注意:與 DT 的 [[Jia Yan 00270380|嚴佳]] **非同一人**(5T 術語表先前誤合併,已更正)。**工號 00731266 未 100% 確認(⚠ not sure)** —— 對過內部系統後在本卡更正。

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
