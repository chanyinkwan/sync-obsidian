---
type: contact
category: internal
name: Emilio de la Iglesia
employee_id: "00737742"
aka: Emilio
org: Huawei CBG — Telefonica 系統部 Telefonica Account Device Business Dept
role: Account Manager(Telefonica 帳戶)
location:
languages: Spanish, English
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Emilio de la Iglesia · 00737742

## At a glance
- **Role:** Telefonica **Account Manager**(2026-07-10 O2 canvas 筆記更正 —— 舊記 Testing/GTM)
- **What they care about / their stake:** Quality Operation for the Telefonica account.
- **How to work with them:** 待補 To fill — Telefonica pod alongside [[Kaili Li wx1252688 (凱莉)]] (AM), [[Zhan minghao z00591534 (明浩)]], [[Qixuan Wang wx1252689]].

## Background
Telefonica-account GTM contact; placed in the Telefonica 系統部 pod on [[SCQA O2 - Org-to-Customer Relationship Map]].

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
