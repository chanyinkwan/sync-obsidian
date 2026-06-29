---
type: contact-linkedin
category: external
name: Kiran
linkedin_link: https://www.linkedin.com/in/kirankanggosal/
aka:
org: Trip.com
role: Trip.com Talent
location: London
languages: English
email:
relationship: 1
status: active
last_contact:
tags:
  - contact
---

## Kiran Gosal Kang

## At a glance
- **Role:** 
- **What they care about / their stake:** 
- **How to work with them:** 

## Background


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
