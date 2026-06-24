---
type: contact
category:          # internal | customer | hq | partner
name:
employee_id:
aka:
org:
role:
location:
languages:
email:
relationship:     # 1-5 (closeness / trust)
status: active
last_contact:     # YYYY-MM-DD — update when you interact
tags:
  - contact
---
# {Name} ({aka}) · {employee_id}

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

---
<!-- USAGE
1. Requires the Dataview plugin (Settings → Community plugins → Dataview).
2. The queries auto-populate from any note that links to this contact via [[ ]]
   (e.g. meeting notes' attendees / stakeholder tables).
3. For correct chronological sort, use ISO dates (YYYY-MM-DD) in meeting frontmatter.
4. 'last_contact' + 'relationship' are manual fields you can also surface in a
   master Contacts dashboard (see [[Huawei Key Contacts]]).
-->
