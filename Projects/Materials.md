---
type: project
status: active
owner: me
stakeholders:
  - "[[Ding Cheng 00611102 (程哥or 丁程)]]"
  - "[[Zeng Li 00798010]]"
domain: Deliverable Production (老細物料 / decks / briefs)
due:
tags:
  - project
---
# Materials

## Goal / my scope
- 呢個 project 收晒所有「老細物料」類型嘅交付：deck、two-pager、brief、analysis workbook — 由 ask 落嚟到交出去為止。
- 目標唔係做得深，係**用最短路徑達到 asker 期望**：每份物料開工前過 Gate 0，交出去前跑 ship-check。
- 每份物料一定要有：ideal output（形態＋一句 takeaway＋depth budget）、role split（人做乜 / AI 做乜）、answerability 裁決。
- 相關但唔喺呢度：SCQA alignment ritual 喺 [[SCQA Cadence]]；career-capital framing 喺 [[Huawei Development]]。

## Operating rules（每份物料都要跑）
1. **Gate 0 — Kess 親手寫**：Ideal Output / Role Split / Handoff 合約 / 必懂清單。未過閘唔准 intake。
2. **HANDOVER BLOCK**：每個 phase 結尾 ≤5 條 binding constraints + 1 行 outcome。下游只讀呢個 block。
3. **Depth budget**：輸出長度硬設限。2 頁嘅嘢唔會值 900 行 blueprint，超出嘅入 appendix。
4. **Answerability 裁決**：ANSWERABLE / ANSWERABLE ONLY WITH [data] held by [who] / UNANSWERABLE。唔係第一種就先同 asker 對齊，唔准用 workaround metric 撐起成份嘢。
5. **Ship-check**：交出去前有一個檢查係指住製成品本身，唔係指住過程。

框架全文：[[Skill - First Principle (D-A-R-E)]]（`/first-principle`）

## Source meetings
- [[28-8-2026 Friday Download - Transcript]] — 程哥 verbal brief（和記競爭對手銷售策略）

## Materials and deliverables
| Material | Ask | State |
| --- | --- | --- |
| [[Material Preparation]] | 和記競爭對手有咩銷售策略 → 曾黎 5T report 餵料 slide | done (2026-09-03) |
| [[Material 2]] | 和記歐洲終端品牌合作全景（在售路標 + 售價偏離） | done (2026-09-03) |
| [[Material Reflection]] | 事後 reflection → prompt set 五項修訂 | done (2026-09-03) |

Working files（唔入 vault）：`C:\Users\k84450674\Desktop\Materials\`

## Lessons carried forward
- [[2026-09-02 Mistake — 冇 ideal output 就落手做 Material]]
- [[2026-09-02 Mistake — 揀咗攞得到嘅 metric 而唔係答到問題嘅 metric]]
- 索引：[[Mistakes Log]]

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
- New task for this project: create a task note (TaskNotes) and set projects:: ["[[Materials]]"]. It auto-appears above.
- Primary task views come from the TaskNotes plugin; the Dataview tables here are a fallback.
- Every new material starts with /first-principle Gate 0 before any intake.
-->
