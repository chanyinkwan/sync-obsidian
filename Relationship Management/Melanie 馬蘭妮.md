---
type: contact
category: customer
name: Melanie
employee_id:
aka: 馬蘭妮
org: (customer)
role: Customer contact
location:
languages:
email:
relationship: 2
status: active
last_contact: 2026-06-16
tags:
  - contact
---
# Melanie (馬蘭妮)

## At a glance
- **Role:** Customer contact.
- **What they care about / their stake:** Pricing and committed volume — currently weighing the post-increase price.
- **How to work with them:** Awaiting her feedback to ring-fence this-year→next-year volume; watch for room to move on price.

## Background
Customer contact met ~15-16 Jun. Ding Cheng communicated this year's plan and the new (post-increase) pricing; we are waiting on her feedback to lock a this-year→next-year volume commitment. Identify her org and decision role as the relationship develops.

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
