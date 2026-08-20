---
type: project
status: active
owner: me
stakeholders:
  - "[[Ding Cheng 00611102 (程哥or 丁程)]]"
domain: Career Development @Huawei · SCQA alignment ritual
due:
tags:
  - project
  - scqa
---
# SCQA Cadence

## Goal / my scope
Run the recurring **SCQA alignment** with [[Ding Cheng 00611102 (程哥or 丁程)]]: bring one structural field observation, pitch it as Situation → Complication → Question → Answer, and secure **「True or Not / Feasible or Not」** validation. Every cycle must end with a named deliverable and a named next cycle.

## Cadence
- **Mondays · 15 min** with 程哥 (moved from Wednesdays after 2026-07-20).
- One prep note per cycle: `<date> SCQA Prep` → the meeting → transcript in `Operation Note/Meeting Transcript/SCQA/` → reflection when a cycle closes.
- Canvas template: [[Weekly SCQA Reflection Template]]. Source material: Daily Log Q2 (常數) + Q4 (痛點).


## SCQA meetings and transcripts (auto)
```dataview
TABLE WITHOUT ID file.link AS "Meeting", date AS "Date", account_or_project AS "Topic", host AS "Host"
WHERE type = "meeting-transcript" AND contains(projects, this.file.link)
SORT date DESC
```

## Open cycles and deliverables (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## Reflections (auto)
```dataview
TABLE WITHOUT ID file.link AS "Reflection", date AS "Date", cycle AS "Cycle"
WHERE (type = "scqa-reflection" OR type = "scqa-sprint-review") AND contains(projects, this.file.link)
SORT date DESC
```

### Relevant Source / Submission
[[O1 · Paddington Office Map.canvas]]
[[O2 · Org-to-Customer Relationship Map.canvas]]
[[O3 · Sample Management Map.canvas]]
[[O5 · Client Power Map.canvas]]
## Done (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", completedDate AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT completedDate DESC
```

## Reference
- [[H3G Operating Model — Three Cycles]] — Operation · Sample · Sales cycle maps
- [[Sales Prompt for SCQA Output]] — prompt used to draft July's outputs
