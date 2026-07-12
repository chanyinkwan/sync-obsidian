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
relationship: 4
status: active
last_contact: 2026-06-24
tags:
  - contact
  - sample-resource
---
# Charco

## At a glance
- **Role:** VDF(Vodafone)系統部 **ops**,台灣人,在 [[Jerry Hsueh 00731266|Jerry]] 之下(VDF 全部門僅此二人,暫無 head);兼樣機申請與挪貨流程。
- **What they care about / their stake:** 樣機額度、挪貨群協調、簽收/銷帳。
- **How to work with them:** 直接問他挪貨群與流程;他會把你拉進「大T 挪貨群」對接。

## Background
2026-06-24:Vodafone 為核心客戶申請 Pura 90 樣機,**透過機關 GTM 挪貨成功**;把 Ziyi 拉進大T 挪貨群。是了解「機關挪貨怎麼走」的第一手窗口。

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓補充:VDF 系統部組成確認 —— 主要管事人 Jerry(台灣,base Luxembourg)+ Charco(ops);部門無 head(疑似曾黎想親自帶 ⚠)。

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
