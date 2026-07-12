---
type: contact
category: internal
name: xusun
english_name: Grace
employee_id: "00565422"
aka: Grace
org: Huawei CBG UK — Marketing & E-Commerce
role: Head of CBG UK Marketing and E-Commerce
location: UK
languages:
email:
relationship: 2
status: active
last_contact:
tags:
  - contact
---
# xusun (Grace) · 00565422

## At a glance
- **Role:** Head of CBG UK Marketing and E-Commerce.
- **What they care about / their stake:** 待補 To fill — UK marketing & e-commerce performance.
- **How to work with them:** 待補 To fill — direct manager of [[ZHOU Yulu 84401415 (Lulu)]], [[Ni Shuyuan 84421757 (Sherene)]], and [[Miranda Yuan 84428748]].

## Background
Heads the CBG UK Marketing and E-Commerce team. Team members identified so far: Lulu (KOL communication), Sherene (UK Marketing), Miranda (E-Commerce). [[Fergus]] is also noted as Head of Marketing and E-Commerce — the exact split between them 待確認.

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
