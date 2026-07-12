---
type: contact
category: internal
name: Yi Han Bajura
employee_id: "84448633"
aka: 依涵
org: Huawei CBG — 大T · DT(德電)系統部
role: Sales operation / assistant(contractor)
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Yi Han Bajura (依涵) · 84448633

## At a glance
- **Role:** DT 的 sales operation / assistant,台灣人,contractor —— 與 Kess/Charco 同類角色。
- **What they care about / their stake:** DT 日常 operation 執行。
- **How to work with them:** DT 的事**先找她或 [[Lin Yingshu 林穎署|林穎署]]** —— 溝通比直接找正編([[Xin Chen 00279864|陳昕]]/[[Jia Yan 00270380|嚴佳]])更多、更直接。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓首次提及(ASR 復原「依涵」,系統顯示名 Yi Han Bajura 已確認)。

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
