---
type: contact
category: internal
name: Li Qinghua
employee_id: "00861267"
aka: 李清華
org: Huawei CBG — 大T · GTM & Solutions 團隊
role: GTM & Solutions head(類二把手)
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Li Qinghua (李清華) · 00861267

## At a glance
- **Role:** GTM & Solutions 團隊 head —— 大T 內部僅次於 [[Zeng Li 00798010|曾黎]] 的類二把手角色 *[培訓原音不清]*;**所有大T 的價格都要過她的手**。
- **What they care about / their stake:** 地區部層面的價格合理性、選品合理性、競爭情報、部門長期盈利。
- **How to work with them:** 需求回來開項目分析會時她會上(MBB 品類與 [[yubeifei y00663235|碧斐]] 一起)。**可能年底調崗**,留意接任者。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:曾黎下共 6 個團隊 = 5 大T + GTM & Solutions。此團隊不直接面向客戶,對接機關產品線,輸入定價/選品/競爭 intelligence。她帶三人:[[yubeifei y00663235|俞碧斐]](MBB)、[[Zhang Xuan 00942107|張炫]](router)、[[Xiaozan Lu 84444549|陸小珍 ⚠]](testing/准入,新)。

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
