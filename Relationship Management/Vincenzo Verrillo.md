---
type: contact
category: customer
name: Vincenzo Verrillo
employee_id:
aka:
org: CKHH-IOD (Italy)
role: Head of Digital Technology, CKHH-IOD (Italy)
location: Italy
languages:
email:
relationship: 1
status: active
last_contact: 2026-06-05
tags:
  - contact
---
# Vincenzo Verrillo

## At a glance
- **Role:** Head of Digital Technology, CK Hutchison Italy (WindTre) IOD — client technical decision-layer lead for the smartphone-return validation work.
- **What they care about / their stake:** Technical alignment on smartphone product/strategy and Huawei's ecosystem solution as part of Hutchison's evaluation of a future smartphone return.
- **How to work with them:** Engage through the technical workshop track alongside the rest of the CKHH-IOD tech/QA team; Huawei-side technical counterpart is [[Michele Cappabianca 00473733]], account director [[Ding Cheng 00611102 (程哥or 丁程)]], account manager [[Huang Yi 84411269 (Selina)]].

## Background
Part of the CK Hutchison Italy (WindTre) IOD technical & QA team — Huawei's counterpart for smartphone-return technical validation (Pura 90 antenna/communication tech, ENDC CA, NR/LTE, Wi-Fi/BT, eSIM conformance) and ecosystem (Aurora Store) evaluation, engaged via the Q2-2026 workshops per §3.4 of [[Huawei_Strategic_Key_Account_Relationship_Mapping_v1 (15-7-2026)]].

Appears in the Q2 2026 Smartphone Technical Workshop (Rome) — see [[2026-Q2 Smartphone Technical Workshop (Rome)]] — and the Q2 2026 Ecosystem Workshop — see [[2026-Q2 H3G Ecosystem Workshop]]. ⚠ Attendee lists in the source doc are planned participants, not a confirmed sign-in sheet.

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
