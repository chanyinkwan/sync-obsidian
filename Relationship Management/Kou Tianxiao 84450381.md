---
type: contact
category: internal
name: Kou Tianxiao
employee_id: "84450381"
aka: 寇天孝
org: Huawei CBG — 大T · DT(德電)系統部
role: DT 准入(testing)
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Kou Tianxiao (寇天孝) · 84450381

## At a glance
- **Role:** DT(德電)准入 / testing。
- **What they care about / their stake:** DT 帳戶產品准入測試。
- **How to work with them:** 一般不接觸;需要 DT 准入相關資訊時才找。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:各帳戶准入分工 —— DT = 寇天孝;法電 = [[LIN Xuefeng 00443044|林雪峰(ZF)]];VDF + 和記 = [[Michele Cappabianca 00473733|Michele]] 兼任;Telefonica 暫無(找國家)。

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
