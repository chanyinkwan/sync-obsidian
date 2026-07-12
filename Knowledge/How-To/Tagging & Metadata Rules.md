---
type: reference
status: active
date: 2026-07-02
hub: "[[Life @Huawei System]]"
tags:
  - reference
  - system
---

# Tagging & Metadata Rules(標籤與欄位使用規則)

> 目的:讓每個標籤都有**一個明確的工作**。標籤是給機器(Dataview / TaskNotes 查詢)讀的路由訊號,不是給人做的分類美學。沒有查詢在讀的標籤 = 死重量。
> 維護方式:新增任何標籤前,先在本檔登記(第 5 節註冊表加一行)。找不到理由寫進註冊表的標籤,就不該存在。

---

## 規則 1 · 身分標籤(Identity)— 每檔恰好一個

每個筆記帶**恰好一個**身分標籤,對應它的筆記類型(與 frontmatter `type` 欄位互為鏡像):

`#task` `#daily` `#meeting` `#contact` `#project` `#goal` `#skill` `#constant` `#mistake` `#feedback` `#reference`

身分標籤是機器合約——插件與查詢依賴它們運作(見註冊表「消費者」欄)。改動或省略會直接弄壞查詢。

## 規則 2 · 賽道歸屬用 `contexts` 欄位,不用標籤

任務屬於哪條賽道,寫在 TaskNotes 的 `contexts` 欄位:

```yaml
contexts:
  - work    # 防守端:Huawei 工作(FWA、Sample Mgmt、內訓、考試)
  - hub     # 進攻端:Track A、求職、Vault 系統建設
```

**禁止 `#hub` / `#work` 標籤**(2026-07-02 已清除唯一一個 `#hub` 標籤)。理由:contexts 是 TaskNotes 原生欄位,所有視圖可直接篩選,且能被 Dataview 按賽道加總番茄鐘時間——標籤做不到後者。

## 規則 3 · 主題標籤(Topic)— 每檔 0 至 2 個

格式:**小寫、kebab-case、英文、單數**。例:`#fwa` `#cyber-security` `#product-knowledge`。

新增門檻:預期**至少 3 個筆記**會共用,才建新主題標籤。低於 3 個,用 wikilink 連到相關筆記就夠了。

## 規則 4 · 流程訊號標籤(Routing)— 必須有消費者

標記「這段內容要被某個流程撿走」的標籤,例如 `#scqa-feed`(標記要進當週 SCQA 的痛點/素材)。

鐵律:**每個流程訊號標籤必須有一個對應的查詢在讀它**。建立訊號標籤時,同時建立(或指名)讀取它的 Dataview 區塊;查詢廢除時,標籤一起廢除。

## 規則 5 · 禁止事項

| 禁止 | 正確做法 |
|---|---|
| 狀態進標籤(如 #done #wip) | `status` 欄位 |
| 人名進標籤(如 #coach #ziyi) | wikilink 到 [[Relationship Management]] 聯絡人筆記 |
| 專案進標籤(如 #fwa-roadmap) | `projects` 欄位 |
| 日期進標籤 | `date` / `due` / `scheduled` 欄位 |
| 中文標籤 | 英文 kebab-case(內容可中文,路由訊號統一英文) |

## 規則 6 · 資料夾與身分一致

`#task` 檔案**只住在 `Tasks/`**(2026-07-02 已把 3 個散落在 Operation Note/ 的任務檔歸位)。反過來,非任務檔(feedback、working-doc)長期不應住在 `Tasks/` — 目前有 2 個檔待搬(見註冊表下方待辦)。

---

## 5 · 現行標籤註冊表(2026-07-02 盤點)

| 標籤 | 類型 | 意義 | 消費者(誰在讀) |
|---|---|---|---|
| #task | 身分 | TaskNotes 任務 | TaskNotes 插件、專案筆記任務查詢、Home 儀表板 |
| #daily | 身分 | 每日操作筆記 | (目前無查詢——保留,C2 修復後儀表板會用) |
| #meeting | 身分 | 會議筆記 | 聯絡人筆記「最近互動」查詢 |
| #contact | 身分 | 聯絡人 | [[0 Huawei Key Contacts]] 聚合查詢 |
| #project | 身分 | 專案 | Home 儀表板活躍專案表 |
| #goal | 身分 | 目標 | — |
| #skill | 身分 | 可複用技能原子(SKILL.md playbook) | (C5 修復後:複利層轉化率統計) |
| #constant | 身分 | 常數原子(跨情境耐用的決策原則,住 `Knowledge/Constants/`) | — (2026-07-10 新增) |
| #mistake | 身分 | 錯誤日誌 | [[Mistakes Log]] 查詢 |
| #feedback | 身分 | 主管/同事回饋 | [[Fill FWA Roadmap Section 1.3]] 回饋查詢 |
| #reference | 身分 | 參考資料 | — |
| #scqa-feed | 流程訊號 | 進當週 SCQA 的素材 | ⚠️ 消費者查詢尚未建(違反規則 4,C5 修復時補) |
| #exam | 主題 | 考試相關 | — |
| #fwa | 主題 | FWA 業務開發領域 | — |
| #product-knowledge | 主題 | 產品知識 | — |
| #sample-resource | 主題 | 樣機資源相關聯絡人 | — |
| #system / #diagnosis | 主題 | Vault 系統建設 | — |
| #audit | 身分(稀有) | 定期系統審計筆記 | — |

**盤點時清除的漂移:** `#hub`(賽道→contexts 欄位)、`#coach`(人名→違反規則 5,改用 wikilink)。

**待辦:** `Tasks/` 裡兩個非任務檔(`FWA Section 1.3 - Revision Rationale`(working-doc)、`Fill FWA Roadmap Section 1.3 - Feedback v1/v2`(feedback))建議搬到 `Knowledge/Source/FWA Roadmap/` — 待確認後執行。
