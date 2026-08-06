---
type: contact
category: internal
name: yubeifei
employee_id: "y00663235"
aka: bifei, 俞碧斐, 碧斐
org: Huawei CBG — 大T · GTM & Solutions 團隊
role: GTM — MBB 品類(5G CPE 等)
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# yubeifei (俞碧斐 / bifei) · y00663235

## At a glance
- **Role:** GTM & Solutions 團隊成員([[Li Qinghua 00861267|李清華]] 之下),按品類分管 **MBB**(如 5G CPE)。
- **What they care about / their stake:** MBB 品類的定價、選品、競爭分析。
- **How to work with them:** 客戶尋標 MBB 品類時,她和李清華會上項目分析會。**要推動 HQ 的事,大概率是碧斐他們幫我們去推** —— 地區部這邊有她就夠了;HQ 的 [[Chen Jun 00917572|陳軍]] 基本由程哥或碧斐去接觸。

## Stakeholder read
- **Decides:** which products go on next year's roadmap, and how supply is allocated
- **Only influences:** MOQ floors and marketing budget — he can go and get them, he does not hold them
- **Measured on:** moving the full European MBB portfolio, including products that are hard to sell
- **Default stance:** at year-end planning, pushing products Kess may not want to sell
- **What gets a yes:** an evidenced "I cannot sell this at MOQ 500" paired with a specific ask (drop MOQ to 100, or fund marketing)
- **Escalates to:** 地區部
- **Observed pattern:** <!-- append-only, dated one-liners from real interactions -->

### Balls currently in their court
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Due", nudged AS "Last nudged"
FROM #task
WHERE contains(waiting_on, this.file.link) AND status != "done"
SORT nudged ASC
```

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓確認角色與團隊歸屬。

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
