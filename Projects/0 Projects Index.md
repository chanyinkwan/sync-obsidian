---
type: dashboard
status: active
hub: "[[Life @Huawei System]]"
tags:
  - dashboard
  - project
---
# Projects Index

> All bodies of work. Click a project to see its tasks, materials, and source meetings.
> Powered by Dataview. If tables are blank, enable the Dataview plugin.

## Active projects
```dataview
TABLE WITHOUT ID file.link AS "Project", domain AS "Domain", status AS "Status", due AS "Due"
FROM #project
WHERE status = "active"
SORT due ASC
```

## On hold / done
```dataview
TABLE WITHOUT ID file.link AS "Project", status AS "Status"
FROM #project
WHERE status != "active"
SORT status ASC
```

---
### Plain-text list (fallback)
- [[FWA Business Development]]
- [[Sample Management Ops]]
- [[Career Hub Management]]
- [[Mistakes Log]]
