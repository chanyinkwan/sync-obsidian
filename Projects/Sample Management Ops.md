---
type: project
status: active
owner: me
stakeholders: ["[[Ziyi Zhang 84434577]]"]
domain: Sample Ops / GTM samples (大T)
due:
tags:
  - project
---
# Sample Management Ops

## Goal / my scope
- Own the end-to-end GTM sample lifecycle for 大T (handed over from Ziyi, 1-month shadowing): forecast, apply, track, write-off, transfer, expiry, quarterly stocktake.

## Source meetings
- [[16-6-2026 Meeting - Sample Management Practical Training]]

## Materials and deliverables
- SOP: [[Sample Management SOP - TSMP Handbook.pdf]]
- Knowledge: [[Source Note - Sample Management Knowledge]]

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
