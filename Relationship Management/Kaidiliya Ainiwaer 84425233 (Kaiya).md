---
type: contact
category: internal
name: Kaidiliya Ainiwaer
english_name: Kaiya
employee_id: "84425233"
aka: 卡亞
aliases: [Kaiya, 卡亞, Kaidiliya Ainiwaer]
org: Huawei CBG — 大T (office / logistics)
role: Reception / logistics support
location: UK office
languages:
email:
relationship: 2
status: active
last_contact:
tags:
  - contact
---
# Kaidiliya Ainiwaer 84425233 (Kaiya)

## At a glance
- **Role:** Office reception / logistics support.
- **What they care about / their stake:** Smooth inbound handling of deliveries.
- **How to work with them:** Get the **print card** from her; she routes inbound samples from reception to our desks.

## Background
On-site support contact. Holds the print card needed to print sample write-off documents, and helps route inbound sample deliveries from reception to the team.

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
