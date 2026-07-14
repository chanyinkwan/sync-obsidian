---
type: project
status: active        # active / on-hold / done
owner: me
stakeholders:
domain: Meta / Self-improvement
due:
tags:
  - project
  - seed
---
# Seed Log — 種子日誌

> 每日反思 Q4「Seed of new ideas」的落點。原則:**捕捉要便宜,評估要挑日子** —— 平日只准一行 quick capture(格式 `D/M/YYYY -> idea`,與 [[sync-takeaways]] 路由一致),當下不展開;每週挑 1–2 顆「發芽」:補一句話 pitch + why yes + why no → 給決策。
> 決策只有三種:**GO**(轉 `Tasks/` 或 `Projects/`,本 log 只留指標)· **PARK**(寫明喚醒條件,睡回 log)· **KILL**(一行理由,屍體留著防止重複播種)。
> 種子來源:每日反思 Q4 · sync-takeaways 路由(`新想法/未驗證 idea → Seed Log`)· 會議中冒出的 tangent。

## Inbox · quick capture(一行一顆,勿展開)

(空 · 新種子先落這裡)

## 種子清單


| Seed(一句話)                                                                                  | Seeded     | Status   | Note                                 |
| ------------------------------------------------------------------------------------------ | ---------- | -------- | ------------------------------------ |
| 建一個帶特定人格(直言型導師,Elon Musk / 金星姐)的 mentor agent,交付前先用它壓力測試 SCQA / 決策                         | 2026-07-08 | ⏳ 待決策    | [[Mentor Agent (persona 教練)]]        |
| 給空降新環境的人一個 drag & drop 工具,把認人、認座位、認組織鏈做成 onboarding 關係圖系統                                  | 2026-07-08 | Declined | [[新環境關係管理工具 (drag & drop)]]          |
| From the Impact and Value perspective write a product development map for Huawei's product | 2026-07-13 | pending  | [[SCQA O4 - Product Portfolio Pack]] |

## 決策紀錄

*自動彙整自各顆種子筆記的 frontmatter,勿手動編輯此表。*

```dataview
TABLE WITHOUT ID
  seed_id AS "#",
  file.link AS "Seed",
  status AS "Decision",
  decision_date AS "Date",
  disposition AS "去向 / 喚醒條件 / 死因"
FROM "Knowledge/Seed"
WHERE type = "seed" AND status != "pending"
SORT seed_id ASC
```
