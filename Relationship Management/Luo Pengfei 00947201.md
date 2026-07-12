---
type: contact
category: internal
name: Luo Pengfei
employee_id: "00947201"
aka: 駱鵬飛(⚠ 工號待查:表格填 00947201,O3 培訓筆記為 84151904 —— 查系統後擇一並改檔名)
org: Huawei — 北歐子網(瑞典+丹麥)
role: 北歐 IoT GTM
location: Nordics
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Luo Pengfei (駱鵬飛) · 00947201

## At a glance
- **Role:** 北歐(瑞典+丹麥)IoT GTM —— 在崗多年,對業務的熟悉程度可能超過國家 head,很有話語權。
- **What they care about / their stake:** 北歐子網 IoT 業務。
- **How to work with them:** **北歐的事統一直接找他就 OK**,不用繞國家 head。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:國家 IoT GTM 對口盤點(北歐=駱鵬飛;意大利=[[Michele Cappabianca 00473733|Michele]];英愛=[[Jingfei Wu wx1315747 (Vincent)|Vincent]]/[[chenshu 00504939|陳述]];奧地利=[[Song Jinkun 00731037|宋敬坤]];香港敏感,程哥親自對)。

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
