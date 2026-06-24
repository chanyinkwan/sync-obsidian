---
type: contact
category: internal
name: 明浩
employee_id:
aka: Minghao
aliases: [Minghao, 明浩]
org: Huawei CBG — 大T
role: Team member
location:
languages:
email:
relationship: 1
status: active
last_contact:
tags:
  - contact
---
# 明浩 (Minghao)

## At a glance
- **Role:** Team member (download attendee).
- **What they care about / their stake:** Phone customization alignment across networks.
- **How to work with them:** Fill in remit as I learn it.

## Background
Team member referenced in the 17-Jun download — raised the need to confirm with each network whether **custom phone versions** are required and what group special-support follows. Limited info so far.

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
