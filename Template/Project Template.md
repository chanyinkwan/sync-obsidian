---
type: project
status: active        # active / on-hold / done
owner: me
stakeholders:         # ["[[Contact]]"]
domain:               # e.g. FWA / MBB / Sample Ops
due:
tags:
  - project
---
# {Project name}

## Goal / my scope
- 

## Source meetings
- 

## Materials and deliverables
- 

## Tasks in this project (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## Done
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```

---
<!-- USAGE
- New task for this project: create a task note (TaskNotes) and set projects:: ["[[this project]]"]. It auto-appears above.
- Primary task views come from the TaskNotes plugin; the Dataview tables here are a fallback.
-->
