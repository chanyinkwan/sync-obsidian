---
type: contact
category: internal
name: LIN Xuefeng
employee_id: "00443044"
aka: ZF, 林雪峰
org: Huawei CBG — 大T · Orange(法電)系統部
role: 法電准入(testing)
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# LIN Xuefeng (ZF 林雪峰) · 00443044

## At a glance
- **Role:** 法電(Orange)准入 / testing。
- **What they care about / their stake:** Orange 帳戶產品准入測試。
- **How to work with them:** 大家都叫他 **ZF** —— 口頭/圖上直接寫 ZF 即可。一般不接觸。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:法電准入。前一位相關同事雪芳 ⚠ 已離職(舊材料上會見到她的名字)。

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
