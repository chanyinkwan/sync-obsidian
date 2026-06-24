---
type: project
status: active        # active / on-hold / done
owner: me
stakeholders:
domain: Meta / Self-improvement
due:
tags:
  - project
---
# Mistakes Log — 錯誤日誌

> 紀錄旅程中每個有意義的錯誤。原則:**把「偷懶的明顯解法」和「正確的系統性解法」分開**;重複出現的錯誤 → 升級成一項技能 / 系統。
> 每個錯誤一則筆記(用 [[Mistake Note Template]]),放 `Mistakes/` 資料夾,自動匯入下表。

## Open mistakes (auto)
```dataview
TABLE WITHOUT ID file.link AS "Mistake", date AS "Date", domain AS "Domain", severity AS "Severity", status AS "Status"
FROM #mistake
WHERE status != "resolved"
SORT date DESC
```

## Resolved (auto)
```dataview
TABLE WITHOUT ID file.link AS "Mistake", date AS "Date", domain AS "Domain"
FROM #mistake
WHERE status = "resolved"
SORT date DESC
```

## Triggered skills / systems (auto)
```dataview
TABLE WITHOUT ID file.link AS "Mistake", triggered_skill AS "Skill triggered"
FROM #mistake
WHERE triggered_skill
SORT date DESC
```

---
### Plain-text list (fallback)
- [[2026-06-22 Mistake — 交 FWA 痛點分析前沒自己讀財報]]
