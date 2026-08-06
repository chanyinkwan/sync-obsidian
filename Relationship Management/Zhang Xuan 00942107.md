---
type: contact
category: internal
name: Zhang Xuan
employee_id: "00942107"
aka: 張炫
org: Huawei CBG — 大T · GTM & Solutions 團隊
role: GTM — router 品類
location:
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Zhang Xuan (張炫) · 00942107

## At a glance
- **Role:** GTM & Solutions 團隊成員([[Li Qinghua 00861267|李清華]] 之下),按品類分管 **router**。
- **What they care about / their stake:** Router 品類定價/選品(目前和記還沒出現過 router 需求)。
- **How to work with them:** **Router 的所有需求先找張炫** —— router 產品線不在 [[Chen Jun 00917572|陳軍]] 下面,HQ 那頭是誰他知道。

## Stakeholder read
- **Decides:** router pricing and new-SKU questions; took router directly after 齊軒 left
- **Only influences:** MBB — not his category
- **Measured on:** 
- **Default stance:** 
- **What gets a yes:** 
- **Escalates to:** 地區部
- **Observed pattern:** <!-- append-only, dated one-liners from real interactions -->
  - 2026-08-06 confirmed as both 齊軒's manager and the router owner. Do not confuse with 張銉 (機關, router/XG materials) — different person.

### Balls currently in their court
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Due", nudged AS "Last nudged"
FROM #task
WHERE contains(waiting_on, this.file.link) AND status != "done"
SORT nudged ASC
```

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓首次提及(ASR 復原「張炫」,系統顯示名 Zhang Xuan 已確認)。

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
