---
type: contact
category: internal
name: ZHOU Yulu
english_name: Lulu
employee_id: "84401415"
aka: Lulu
org: Huawei CBG UK — Marketing team(under Grace)
role: KOL Communication
location: UK
languages:
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
---
# ZHOU Yulu (Lulu) · 84401415

## At a glance
- **Role:** Responsible for KOL communication.
- **What they care about / their stake:** 待補 To fill — KOL/influencer relationships.
- **How to work with them:** 待補 To fill — relevant to seeding samples (KOL/VIP) coordination.

## Background
Under the marketing team of [[xusun 00565422 (Grace)]]. Handles KOL communication — a natural touchpoint for seeding-sample (KOL/VIP) activities.

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
