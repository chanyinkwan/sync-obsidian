---
type: contact
category: customer
name: Dennis
employee_id:
aka:
org: Hutchison (Three)
role: No.1 client from Hutchison
location:
languages: English
email:
relationship: 1
status: active
last_contact:
tags:
  - contact
---
# Dennis

## At a glance
- **Role:** No.1 client from Hutchison — our top customer contact on the Hutchison account.
- **What they care about / their stake:** 待補 To fill.
- **How to work with them:** 待補 To fill — Hutchison account is covered by Selina ([[Huang Yi 84411269 (Selina)]]); 程哥 [[Ding Cheng 00611102 (程哥or 丁程)]] met him 24-Jun with three follow-ups (see [[Dominique]]).

## Background
Key Hutchison-side customer contact. Sits in the L5 客戶/渠道 layer of [[SCQA O2 - Org-to-Customer Relationship Map]] under Hutchison 客戶.

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
