---
type: project
status: active
owner: me
stakeholders:
  - "[[Huang Yi 84411269 (Selina)]]"
  - "[[Ding Cheng 00611102 (程哥or 丁程)]]"
  - "[[Dennis Lui]]"
domain: H3G / VDF3 Key Account Relationship Mapping
due:
tags:
  - project
---
# Relationship Management

## Goal / my scope
- Own the durable client relationship intelligence layer for H3G/VDF3 — org maps, power maps, stakeholder briefs — so it survives handovers instead of being rebuilt from scratch each time a manager or successor needs it.
- Turn each SCQA cycle (O1, O2, O3, O5, O6...) into a reusable canvas or brief, not a one-off meeting prep artifact.

## Source meetings
- [[10-7-2026 Meeting - July Relationship and Product Training - Transcript]]
- [[27-7-2026 SCQA Transcript]]

## Materials and deliverables
- [[O1 · Paddington Office Map]]
- [[O2 · Org-to-Customer Relationship Map]]
- [[O3 · Sample Management Map]]
- [[O5 · Client Power Map]]
- [[O6 · H3G Stakeholder Brief]] — pack spec: [[SCQA O6 - H3G Stakeholder Brief Pack]]
- [[和记集团&VDF3 客户权利地图2026.07.pdf]]
- [[Paddington Office Floorplan.pdf]]
- [[2026年和记高层巴展交流策划报告 V9.pdf]]

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
