---
type: project
status: living
owner: me
stakeholders:
  - "[[Manager]]"
domain: Career Development @Huawei (SCQA alignment + skill building)
due:
tags:
  - project
---
# Huawei Development

## Goal / my scope
- Run the recurring **15-min McKinsey-style SCQA alignment** with my manager each month: surface a structural field observation, pitch a Situation → Complication → Question → Answer canvas, and secure **"True or Not / Feasible or Not"** validation.
- Convert each cycle's work into industry-standard assets (Deal Governance / Scoping / Pricing) and career capital toward the SA/SE + Deal Desk targets. See [[SA Lock-In — Gap Audit & 30-Day Sprint]].

## Cadence
The SCQA ritual itself now lives in its own project: **[[SCQA Cadence]]** — cadence rules, every prep note, meeting, transcript, reflection and output are indexed there. This note keeps the career-capital framing only.

## Reference / knowledge
- [[H3G Operating Model — Three Cycles]] — Operation · Sample · Sales cycle maps (Mermaid)

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
