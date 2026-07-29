---
type: problem-note
domain: Sample Management
status: draft
date: 2026-07-28
related:
  - "[[Sample Management Playbook]]"
  - "[[Sample Management Ops]]"
  - "[[16-6-2026 Meeting - Sample Management Practical Training]]"
  - "[[Source Note - Sample Management Knowledge]]"
tags:
  - problem-solving
  - sample-management
---

# Problem Note — 交接手冊 / Successor Playbook

## 1. 基本要解決的問題 (Basic question to be resolved)
中文：如何寫出一份不需要我或 Ziyi 在場解釋、下一個接手的人就能獨立操作樣機管理的交接手冊？

English: How do I write a pickup guide thorough enough that whoever inherits sample management next can operate it without me or Ziyi walking them through it live?

## 2. 情境與背景資訊 (Context)
- 我自己是靠 2026-06-16 與 Ziyi 的一個月口頭 shadowing 接手的，沒有任何成文手冊——規則靠 WeChat 群組公告、口耳相傳（例如「櫃子鑰匙只有一人持有、不能帶回家」「系統匯出沒有備註欄，要靠 SN VLOOKUP 手動接續」）。
- 交接訓練紀錄明確點出風險：tracking「heavily manual and memory-dependent」；我接手時就繼承了一台前手留下、標記「?」、下落不明的樣機——這是「沒寫下來」直接造成的資產風險。
- Extraction/exit 計畫（見 memory: extraction-exit-strategy）：目標 2026 年底前拿到 offer、2027 年 4 月前離開。代表這個角色遲早要交給下一個人，而且現在就該開始寫，不要等到離職前才趕。
- 現有草稿 [[Sample Management Playbook]] 只列了骨架（申請權限、自動化 deadline、匯出、核銷），status: todo，priority: low——目前只是佔位，尚未真正填內容。

## 3. 決策者與關鍵利害關係人 (Decision maker(s) & Key stakeholders)
- **我（Kessog）**：手冊的作者與範疇決定者。
- **Ziyi**：現有流程知識的來源驗證者（離職前是最後窗口）。
- **未來接手人**：目前尚未指定，是手冊的實際使用者與最終驗收者（能不能不問人就上手，是唯一的真檢驗）。
- **程哥 / manager**：交接品質的間接關注者（樣機是掛帳資產，交接不清會變成他們的合規風險）。

## 4. 成功標準／成功要素 (Criteria for success)
- 接手人只靠這份手冊就能完成：(1) 申請系統權限、(2) 追蹤到期日不靠記憶（有自動化機制而非人腦提醒）、(3) 匯出並比對 SN tracker、(4) 獨立走完一次核銷（實物/非實物/賠償三種路徑都知道怎麼填）。
- 不留下任何只存在我腦中的「潛規則」（鑰匙保管規則、VLOOKUP 接續技巧、列印卡在哪拿）。
- 手冊完成時間早於我自己的離職時間點，留有真正的交接窗口，而不是最後一刻才寫。

## 5. 解決方案範疇 (Scope of solution space)
- 僅限操作型 SOP：權限申請、到期管理自動化、匯出、核銷（含實物/非實物/賠償三種核銷路徑）。
- 涵蓋大T UK + Italy 的日常樣機管理操作。
- 不含：跨部門對接人地圖（見 O3 那份 Problem Note）、Excel 工具本身的重建邏輯（見 Excel 自動化那份 Problem Note）——這三個問題分開處理，避免手冊變成大雜燴。

## 6. 限制條件 (Constraints on solution space)
- 必須在我自己離職前（目標 2026 年底前有 offer）留足夠時間完成與驗證，不能壓線寫。
- 目前任務優先度標為 low，會被日常營運工作排擠，需要主動搶時間而非等它自然浮上來。
- 內容必須隨 TSMP 系統/流程演進保持更新，否則手冊本身會變成新的「假知識來源」。
- 我是唯一撰寫者，沒有其他人可以分攤或代寫。

## 7. 關鍵洞察與資訊來源 (Key sources of insight)
- 自己每天實際操作的第一手經驗（最主要來源）。
- [[16-6-2026 Meeting - Sample Management Practical Training]] 逐字稿（Ziyi 交接時講的完整流程與規則）。
- [[Source Note - Sample Management Knowledge]]（TSMP、核銷三種路徑、掛帳週期等術語，手冊需要引用一致的定義）。
- 現有草稿 [[Sample Management Playbook]]（骨架，待補血肉）。
- 16-6 會議 action item #7：待存檔的「非實物核銷範本文件」——核銷章節需要這份範本作為附件來源。
