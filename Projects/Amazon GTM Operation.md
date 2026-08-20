---
type: project
status: active
owner: me
stakeholders:
  - "[[Li Qinghua 00861267]]"
  - "[[yubeifei y00663235]]"
domain: Amazon MBB BAU Operations
due:
tags:
  - project
---
# Amazon GTM Operation

## 目標／我的範圍
供個人使用的 Amazon MBB 週期性營運 Zero-Drop-Ball 控制塔。線上系統仍是唯一真源；本專案只保存導航、判斷規則、例外證據及後續任務。

## 營運邊界
- 納入：MBB；SKU × EU Aggregate＋SKU × UK；SO／Forecast；DOS／Inventory；PO／Delivery／SI；月度定價；促銷定價＋DOS。
- 排除：Router；即時商店健康；廣告；上市；EOL／圈量；選品；其他有終點的一次性專案。

## 每日入口
- 使用現有 Daily Operations／TaskNotes 檢視；不要把本頁作為第二個每日儀表板。

## 控制筆記
- [[Amazon MBB Source Index]]
- [[Amazon MBB Operations Scenario Matrix]]
- [[2026-08 Amazon MBB Operations Log]]

## 例外流程
週期檢查 → Amber／Red 洞察 → 截圖＋來源連結＋月度紀錄 → 行動／後續 TaskNote → 決策負責人＋下一步＋期限 → 驗證結果 → 關閉。

## 何時建立 TaskNote
- 需要修正、通知、回覆或再次檢查：在 `[[Amazon GTM Operation]]` 建立 TaskNote。
- 全部 Green 且沒有下一步：只完成該次週期執行，不建立 TaskNote。
- 有明確成果、期限，並涉及多步驟跨團隊協作：另建有明確範圍的獨立專案，不放入 BAU 控制塔。

## 本專案任務（自動）
```dataview
TABLE WITHOUT ID file.link AS "任務", status AS "狀態", priority AS "優先順序", due AS "期限", scheduled AS "排程"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## 已完成
```dataview
TABLE WITHOUT ID file.link AS "任務", due AS "完成日期"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```
