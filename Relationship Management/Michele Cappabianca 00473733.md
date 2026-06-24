---
type: contact
category: internal
name: Michele Cappabianca
employee_id: "00473733"
aka:
org: Huawei — Italy (technical)
role: Italy tech colleague / account holder
location: Italy
languages: Italian, English
email:
relationship: 2
status: active
last_contact:
tags:
  - contact
---
# Michele Cappabianca · 00473733

## At a glance
- **Role:** Italy technical colleague; Italy sample **account holder (掛賬人)** and standing **admission owner (准入負責人)**.
- **What they care about / their stake:** Manages several departments — bandwidth-constrained.
- **How to work with them:** **Very busy, replies are slow → keep chasing.** For Italy my scope is only sample application & extension.

## Background
Italy-based technical colleague. In TSMP he is the **Italy account holder** and the default **admission owner** entered on applications. Transfers (轉賬) of UK units to Italy go to his account (his account had issues — test whether a transfer now goes through). Because he is stretched across departments, expect delayed responses and chase him on Italy expiries/extensions.

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
