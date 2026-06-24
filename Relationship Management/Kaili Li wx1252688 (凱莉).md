---
type: contact
category: internal
name: KaiLi
employee_id:
aka: 凱莉
aliases: [kaili, KaiLi, 凱莉, Kaili]
org: Huawei CBG — 大T
role: Telefonica Account Manager
location:
languages:
email:
relationship: 3
status: active
last_contact:
tags:
  - contact
---
# KaiLi (凱莉)

## At a glance
- **Role:** Account Manager for Telefonica (and ~5 other major telco accounts).
- **What they care about / their stake:** Managing the major telco account relationships.
- **How to work with them:** Go-to for Telefonica / large telco account matters; shares updates in the download.

## Background
Inner-circle account manager (Colleague K). Owns the Telefonica relationship plus several other major telco accounts. Appears in the team download sharing account updates.

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
