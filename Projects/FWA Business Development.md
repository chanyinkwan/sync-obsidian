---
type: project
status: active
owner: me
stakeholders: ["[[Ziyi Zhang 84434577]]"]
domain: FWA / MBB
due: 2026-06-18
tags:
  - project
---
# FWA Business Development

## Goal / my scope
- Wider project: FWA business development strategy (High-Level Strategic Roadmap).
- My scope: complete Section 1.3 of the roadmap doc (fill in the numbers from the financial report).

## Source meetings
- [[17-6-2026 Meeting - Task Assigned (FWA Roadmap)]]
- Transcript: [[17-6-2026 Meeting - task assigned 閱讀財報及填寫High Level Strategic Roadmap - Transcript]]

## Materials and deliverables
- Target doc (deliverable): [[FWA Business Development V1 (17-6-2026).pdf]] — I fill Section 1.3
- Financials: [[CKH Telecom Fiscal Result 2025.pdf]]
- Context: [[20251203 Hutchison Strategy Workshop V7.pdf]] · [[Huawei_Strategic_Key_Account_Relationship_Mapping_v1 (17-6-2026).pdf]]
- (Materials currently in Operation Note/Meeting Transcript/temp materials file — consider moving to Knowledge/Source once confirmed reusable.)

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
