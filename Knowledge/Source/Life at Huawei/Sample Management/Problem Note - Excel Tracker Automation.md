---
type: problem-note
domain: Sample Management
status: draft
date: 2026-07-28
related:
  - "[[Sample Management Ops]]"
  - "[[16-6-2026 Meeting - Sample Management Practical Training]]"
  - "[[2026 Q4 Sample Stock Take]]"
source: "C:\\Users\\k84450674\\Desktop\\Sample Management\\docs\\superpowers\\specs\\2026-07-20-non-macro-prototype-design.md"
tags:
  - problem-solving
  - sample-management
---

# Problem Note — Excel/VBA 樣機追蹤工具自動化 (Non-Macro Prototype)

## 1. 基本要解決的問題 (Basic question to be resolved)
中文：如何在不遺失現有資料、不打壞六個現有按鈕的前提下，把目前 VBA 損毀的 Excel 樣機追蹤表，重建成一個乾淨、可靠、能自動追蹤借還與到期提醒的工具？

English: How do I replace the fragile, macro-corrupted Excel sample tracker with a clean, reliable tool that automates loan/return tracking, expiry alerts, and agreement generation — without losing existing data or breaking the six working buttons?

## 2. 情境與背景資訊 (Context)
- 目前使用中的 `TSMP_LastUpdate0709.xlsm` 的 VBA 專案已損毀（malformed），無法直接在原檔上修改。
- 2026-06-16 訓練紀錄記下的痛點是這個問題的根因證據：系統匯出「no remarks column」被迫用 SN 做 VLOOKUP 手動接續；每次櫃子進出都要人手記錄；到期管理完全靠記憶 + WeChat 群公告。訓練筆記原話：「When volume scales this breaks — and expiry/loss carry compliance + cost (賠錢) consequences」。
- 同一份紀錄已經提出解法雛型（solution seed）：一個輕量、低程式碼的 tracker，(a) 用 SN 跨匯出保留備註層、(b) 自動標記下月到期的樣機（UK+Italy）、(c) 產出未簽收清單提醒——並註明這同時是我 Python/自動化技能練習（Track A）。
- 2026-07-20 已產出正式規格書（`2026-07-20-non-macro-prototype-design.md`）：策略是先做一份無巨集的乾淨 `.xlsx` 保留原資料/公式/六個按鈕，再用編號模組（01–06）一次裝一個 VBA 功能，附新手安裝指南與逐步回滾說明，原始 `.xlsm` 保持不動。

## 3. 決策者與關鍵利害關係人 (Decision maker(s) & Key stakeholders)
- **我（Kessog）**：這是個人自建的自動化專案，我是建構者也是決策者。
- **Ziyi / 程哥**：驗證輸出是否仍符合實際作業要求（核銷理由代碼、收據範本內容是否對得上）。
- **未來接手人**：工具長期的實際使用者（見另一份 Playbook Problem Note，兩者相關但分開處理）。

## 4. 成功標準／成功要素 (Criteria for success)
- 無巨集 `.xlsx` 開啟時不跳巨集安全性提示，且不含 `vbaProject.bin`。
- 全部 11 個工作表、公式、驗證、格式、原始資料完整保留；六個按鈕外觀與預期巨集名稱都在。
- 六個模組（Navigation / Add Selected Sample / Clear Operation List / Loan-Return Movements / Generate Agreement / Send Reminders）能逐一安裝、逐一通過各自的受控測試，互不依賴。
- 借出/歸還透過 Original Loan Event ID 正確配對；找不到對應借出紀錄時，動作中止且不留下部分更新（no partial update）。
- 提醒功能預設用 Outlook 草稿/顯示模式測試，絕不在驗證階段直接寄出。

## 5. 解決方案範疇 (Scope of solution space)
- 僅限這個 Excel/VBA 原型本身：資料結構、六個按鈕行為、借還追蹤、協議文件產生、提醒自動化。
- 明確排除（依規格書 Out of Scope）：把 Excel 換成資料庫或網頁應用、自動在 Trust Center 開啟巨集、驗證期間真的寄出提醒信、更動借還欄位以外的既有庫存來源紀錄。

## 6. 限制條件 (Constraints on solution space)
- 不能碰壞或動到原始 `.xlsm`——一切改動都在副本上進行。
- 現有 VBA 專案已損毀，無法就地修改，只能重建乾淨版再逐一裝回功能。
- 沒有 IT/開發團隊支援，是我一人獨立搭建，因此每一步都要有可測試的小驗證與失敗時的移除說明，降低單一步驟拖垮整個工具的風險。
- Outlook / Word 不一定在所有環境可用，錯誤要優雅降級（清楚訊息），不能丟出原始 VBA 錯誤或卡住一個看不見、被訊息框擋住的 Excel 背景程序。

## 7. 關鍵洞察與資訊來源 (Key sources of insight)
- 規格書本身：`docs/superpowers/specs/2026-07-20-non-macro-prototype-design.md`（設計依據）。
- 現有 `TSMP_LastUpdate0709.xlsm`（原始資料/結構/公式的來源）。
- Huawei UK Client sample device receipt 範本 DOCX 檔案（協議產生功能要用的範本）。
- [[16-6-2026 Meeting - Sample Management Practical Training]]（痛點的第一手證據與問題成因）。
- 自己反覆建置與測試的過程（沒有外部資料庫可查，主要靠自己迭代驗證）。
