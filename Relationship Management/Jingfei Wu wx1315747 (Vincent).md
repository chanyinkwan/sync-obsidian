---
type: contact
category: internal
name: Jingfei Wu
english_name: Vincent
employee_id: "wx1315747"
aka: Vincent, 溫順(ASR;工號 ⚠ 待確認)
org: Huawei — 英國+愛爾蘭子網
role: 英國+愛爾蘭 head
location: UK
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Jingfei Wu (Vincent) · wx1315747 ⚠

## At a glance
- **Role:** 英國 + 愛爾蘭 head —— 英愛兩國的事都找他。
- **What they care about / their stake:** 英愛子網業務;英愛國家側話語權和角色比其他國家更大(我們的 GTM 對英愛管得沒那麼深)。
- **How to work with them:** 英愛需求對口找他;GTM 層面的日常對接是他底下的 [[chenshu 00504939|陳述]]。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓 + Kess 確認:溫順(Vincent)與陳述是**兩個人** —— Vincent 是 head,陳述在他之下做 GTM。**工號 wx1315747 未 100% 確認(⚠ not sure)** —— 對過內部系統後在本卡更正。

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
