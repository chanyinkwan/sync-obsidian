---
type: contact
category: hq
name: huangwenyan
employee_id: "84291394"
aka:
org: Huawei — TSMP Administration
role: Admin managing TSMP access rights
location:
languages: Mandarin
email:
relationship: 4
status: active
last_contact:
tags:
  - contact
  - sample-resource
---
# huangwenyan · 84291394

## At a glance
- **Role:** Admin managing TSMP access rights.
- **What they care about / their stake:** Correct account permissions in TSMP.
- **How to work with them:** Contact point when TSMP access/permission issues come up (e.g. new account, role change, 掛賬人 setup).

## Background
Administrator for TSMP access rights — relevant to [[Sample Management Ops]] whenever platform permissions block an application, transfer, or write-off.

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
