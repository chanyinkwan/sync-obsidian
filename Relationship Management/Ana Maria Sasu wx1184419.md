---
type: contact
category: internal
name: Ana Maria Sasu
employee_id: "wx1184419"
aka: Ana
org: Huawei UK office — Reception
role: Reception
location: UK office (Paddington)
languages: English
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# Ana Maria Sasu · wx1184419

## At a glance
- **Role:** Reception.
- **What they care about / their stake:** Smooth front-desk operations — visitors, deliveries.
- **How to work with them:** First stop for inbound deliveries (sample shipments arrive via reception; [[Kaidiliya Ainiwaer 84425233 (Kaiya)]] routes them onward).

## Background
Reception at the UK office. Relevant to sample ops as the first touchpoint for inbound sample deliveries.

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
