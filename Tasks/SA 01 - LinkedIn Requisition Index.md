---
status: done
priority: high
tags:
  - task
projects:
  - "[[SA Presales Transition]]"
contexts:
  - hub
scheduled: 2026-07-16
due: 2026-07-17
recurrence: DTSTART:20260713;FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20260727
timeEstimate: 15
dateCreated: 2026-07-12T12:00:00.000+01:00
complete_instances:
  - 2026-07-13
  - 2026-07-15
  - 2026-07-27
skipped_instances: []
dateModified: 2026-07-27T18:00:00.000+01:00
---

# SA 01 - LinkedIn Requisition Index

母任務:[[SA Presales Transition]]
Source: [[how to become a Solution Architect or Presales Consultant]] — 行動1：執行 LinkedIn 職缺量化指標分析 (LinkedIn Requisition Index)

## Deliverable (what "done" looks like)
成功標準：收集到至少 **50 個**最新職缺樣本，並整理出一份清晰的熱力圖（Heatmap），明確指出排名前三的熱門技術領域。

## Capacity slot
Overlay W1.
Repeats daily Mon–Fri this week — tick each day's instance in TaskNotes (15-min tracking session, top 2 pages of listings: LinkedIn job search, keyword `"Solutions Architect"`, region UK / EEA, Date Posted = `Past week` / `Past 24 hours`, tally keyword frequency in the tracking sheet).

## Sub-steps
- [x] Confirm ≥50 requisition samples collected.
- [x] Extract the schema on all 50 — 42 of them (07, 09–50) were still raw pastes on 07-27 and had never been parsed.
- [x] Freeze the domain vocabulary to 11 labels and retro-normalise JDs 01–06, 08.
- [x] Build heatmap of top-3 domains from the keyword tally.

## Result — 2026-07-27

Heatmap lives in [[SA Requisition Dashboard]] §0b. Top 3 domains:

| Rank | Domain | Reqs | Share |
|---|---|---:|---:|
| 1 | `ai-ml-platform` | 10 | 20% |
| 2 | `fintech-payments` | 6 | 12% |
| 2= | `enterprise-saas` | 6 | 12% |

No tie at rank 1, so SA 02's tie-break rule was not needed.

**Two findings worth more than the heatmap itself:**

1. **`telco-networking` is 2 of 50 (4%).** Your deepest domain is the thinnest market in the sample. Positioning on telco would aim the 定位宣言 at a market that is barely hiring.
2. **0 of 50 requisitions name AWS SAA — or any cloud certification.** Only `togaf` (1) and `pmp` (1) appear anywhere. This triggers the falsification clause the dashboard wrote for SA 03/SA 04; see §0c and route the decision into those tasks.

**Corpus is not 50 clean UK SA reqs** — file 31 is an unparseable truncated scrape, 34 and 47 are the same Deloitte role posted twice, 32 is a pure sales role, 07 is US-based. Effective clean n = 46. Re-tallying without all four leaves the rank-1 call unchanged.
