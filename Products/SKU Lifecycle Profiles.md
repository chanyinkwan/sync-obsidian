---
type: reference
status: active
date: 2026-08-21
account_or_project: "[[Amazon GTM Operation]]"
tags:
  - reference
  - amazon
  - mbb
  - product
---
# SKU 生命週期輪廓

> 用途：SKU 的生命週期決定哪些週期檢查適用、哪些可以跳過。輪廓在此定義一次，SKU 筆記只引用不複述。

`lifecycle` 與 `lifecycle_uk` 是封閉詞彙，只能取以下五個值。渠道模式（直營／代理）不是生命週期，不進這兩個欄位。

| Profile | 定義 | 要做 | 不做 |
|---|---|---|---|
| `prelaunch` | 未上市，準備中 | 准入／物料適配／首批備貨／上架配置 | DOS 週檢、SO 偏差、forecast 增量 |
| `ramp` | 預售或剛上市，價格紀律期 | 挺價紀律、竄貨監控、buybox、首銷追蹤 | 清庫、促銷降價 |
| `live-core` | 正常在售 | 全套週期檢查、劃線價／DT、促銷節奏 | — |
| `drain` | 日落中，清庫至下架 | 清庫速度、價格下探、下架時點 | forecast 增量、廣告投入、新促銷 |
| `hold` | 斷貨或無分貨，策略保留 | 3P buybox、供應恢復時點 | SO 偏差、DOS、forecast |

## 使用方式

1. 週期檢查前先看 SKU 的 `lifecycle`，跳過「不做」欄的項目。
2. 任何門檻覆寫寫在該 SKU 筆記的 `## 控制輪廓`，不改本表。
3. 生命週期變更時，同時更新該 SKU 的 `lifecycle_reviewed` 與 `## 變更日誌`。

## 與情境矩陣的關係

本表只決定**是否適用**；判斷門檻與零遺漏流程仍以 [[Amazon MBB Operations Scenario Matrix]] 為準。兩者不重複描述門檻。

## 相關

- [[Amazon GTM Operation]]
- [[Amazon GTM Management]]
