---
type: contact
category: internal
name: Olivier CADENE
employee_id: "00753347"
aka: Olivier
org: Huawei CBG — 大T · Orange(法電)系統部
role: 法電系統部 head
location: Paris
languages: French(英文很差)
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Olivier CADENE · 00753347

## At a glance
- **Role:** 法電(Orange)系統部 head,法國人,base Paris。
- **What they care about / their stake:** Orange 帳戶。
- **How to work with them:** **不太找得到人、英文很差,溝通相對難** —— 日常先找他底下的 [[Sun Xin 00966293|孫昕]];孫昕不熟的再問 [[Jia Yan 00270380|嚴佳]](曾兼管法電)。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:法電現有兩人 —— Olivier(head)+ 孫昕(新到任)。法電/德電歷史上曾由同一批人管。法電准入 = [[LIN Xuefeng 00443044|林雪峰(ZF)]];前任相關同事雪芳 ⚠ 已離職。

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
