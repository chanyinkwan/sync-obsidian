---
type: contact
category: internal
name: Charco
employee_id:
aka:
org: Huawei CBG — Vodafone 帳戶
role: 樣機管理(Vodafone 帳戶)
location:
languages: Mandarin
email:
relationship: 2
status: active
last_contact: 2026-06-24
tags:
  - contact
  - sample-resource
---
# Charco

## At a glance
- **Role:** Vodafone 帳戶的樣機管理同仁;掌握 Vodafone 側樣機申請與挪貨流程。
- **What they care about / their stake:** 樣機額度、挪貨群協調、簽收/銷帳。
- **How to work with them:** 直接問他挪貨群與流程;他會把你拉進「大T 挪貨群」對接。

## Background
2026-06-24:Vodafone 為核心客戶申請 Pura 90 樣機,**透過機關 GTM 挪貨成功**;把 Ziyi 拉進大T 挪貨群。是了解「機關挪貨怎麼走」的第一手窗口。

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
