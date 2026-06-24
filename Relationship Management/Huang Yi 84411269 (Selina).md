---
type: contact
category: internal
name: Huang Yi
english_name: Selina
employee_id: "84411269"
aka: 瑟琳娜
aliases: [Selina, 瑟琳娜, Huang Yi, "Huang Yi (84411269)", Huang Yi 84411269]
org: Huawei CBG — 大T
role: Account Manager / Demand Capture Lead
location:
languages:
email:
relationship: 3
status: active
last_contact: 2026-06-17
tags:
  - contact
---
# Huang Yi 84411269 (Selina)

> Same person: English name **Selina** / 瑟琳娜 = **Huang Yi** (84411269).

## At a glance
- **Role:** Account Manager / Demand Capture Lead — highest client interaction, aggregates requirements; also covers Hutchison account & customer event coordination.
- **What they care about / their stake:** Customer relationships, clean requirements into the team, and customer attendance at key events.
- **How to work with them:** Customer-facing — route sample write-off documents to her for customer signatures; coordinate on Hutchison and event logistics.

## Background
Inner-circle account manager (Colleague S). Highest client-interaction role; aggregates customer requirements (demand capture). In the 17-Jun download she assessed customer attendance for the Sept 2 launch event (Hutchison likely unavailable; clash with IFA). In sample ops, she (or 程哥) takes documents to customers and brings back signatures for write-off.

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
