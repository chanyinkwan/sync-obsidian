---
type: contact
category: internal
name: Ding Cheng
employee_id: "00611102"
aka: 程哥
org: Huawei CBG — 大T System Dept
role: Account Lead
location:
languages: Mandarin
email:
relationship: 3
status: active
last_contact: 2026-06-17
tags:
  - contact
---
# Ding Cheng (程哥or 丁程) · 00611102

## At a glance
- **Role:** Account lead; runs the Mon/Wed/Fri team download.
- **What they care about / their stake:** Speed on bids and unblocking stalled flows; getting signed sample receipts back (he bears the responsibility).
- **How to work with them:** Be concise and action-oriented; bring blockers + a proposed next step, not just status.

## Background
Account lead for the 大T system department and the person who runs the recurring download. Decision-maker on bid priorities (e.g. pushed 173 to commercial bid; set group-level bidding). In sample management he is the **UK account holder (掛賬人)** — approvals route through him and he bears main responsibility for receipts/write-off. Approves my self-use of spare samples (alongside Ziyi).

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓補充:① **答標由他出**(項目分析會後發正式答標函、帶 negotiation);② 客戶分工 —— [[Francesco Zampini]] 與 [[Melanie Fantini 馬蘭妮|Marlene Fantini]] 由程哥對接;③ **香港子網敏感,只限和記線由他親自對**;④ 和記意大利的 GTM 事務他管(明浩不參與);⑤ 回國高訪(一年兩次,約 6 月/10 月)由他接待;⑥ 6/24 初見 [[Dennis Lui]],觸發樣機急單;⑦ 指示 Kess 一個月內把產品包講流利。

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
