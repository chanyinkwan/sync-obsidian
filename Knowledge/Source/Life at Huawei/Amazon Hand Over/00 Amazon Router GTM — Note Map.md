---
type: moc
date: 2026-07-30
account_or_project: "[[Amazon GTM Management]]"
tags:
  - moc
  - handover
---
# 00 · Amazon Router GTM — Note Map

> 這份是 Amazon 交接相關筆記的**唯一入口**。交接會還會再開幾場,先把擺放規則定下來,之後每場會只需要重複同一套動作,不用每次重想。

## 1. 四層結構(每層只做一件事)

| 層          | 位置                                                        | 這一層回答什麼                               | 可不可以改                                                               |
| ---------- | --------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------- |
| **L0 原始檔** | `Operation Note/Meeting Transcript/Raw/`                  | 「他到底說了什麼」——WeLink/Otter 原始匯出,含圖片 blob | **永不修改、永不刪除**。檔名 `<原名>__raw__<YYYYMMDD-HHmmss>.md`,存檔前後各驗一次 SHA-256 |
| **L1 逐字稿** | `Knowledge/Source/Life at Huawei/Amazon Hand Over/`       | 「可讀、可追溯的版本」——每個 turn、每個時間戳都在,不翻譯、不猜名字 | 只在拿到新事實時補 Open questions / 詞彙表增補,正文不重寫                              |
| **L2 運作圖** | `Amazon Handover.xlsx` + 本檔                               | 「這份工作到底怎麼運轉」——8 個流程 × 7 個問題           | 每次會後增補;**A–D 欄是你的思路,只增不改;E–G 欄放會議實證**                               |
| **L3 行動**  | `Tasks/Amazon Handover.md`、`Projects/Amazon take over.md` | 「我下一步要做什麼、要問誰」                        | 隨時                                                                  |

**規則:事實只寫一次。** L2 只寫結論並註明來源(會議 + 時間戳),不複製逐字稿原文;L3 只寫動作,不複製結論。要查證據就順著來源跳回 L1。

## 2. 現有筆記清單

### L1 逐字稿(全部已整理)
| 筆記 | 日期 | 場次性質 | 與會 |
|---|---|---|---|
| [[Amazon Handover Meeting Transcript Part 1]] | 2026-07-24 | IoT GTM 角色全貌(high level) | Ziyi → Kess |
| [[Amazon Handover Meeting Transcript Part 2]] | 2026-07-27 | MBB 品類交接(Kess 旁聽) | Ziyi → 齊軒 |
| [[Amazon Back to School Promotion Planning Meeting Transcript Part 1]] | 2026-07-29 | BTS 資源位 + 逐 SKU 要貨檢視 | 李哥 / 齊軒 / 張炫 / 董淼 |
| [[Amazon Back to School Promotion Planning Meeting Transcript Part 2]] | 2026-07-30 | 續昨:要貨、排產週期、下半年 PSI | 李哥 / 齊軒 / 張炫 |
| [[Amazon Handover Meeting Transcript Part 3]] | 2026-07-30 | 路標管理 + 新品上市倒排(1:1) | 齊軒 → Kess |

> ⚠ **Part 3 與 BTS Part 2 是同一場會**(同一條時間軸:Part 3 走 00:29→07:29 後跳到 50:46,中間 08:26→50:39 就是 BTS Part 2)。兩檔都保留、互相交叉引用,**不合併**——因為與會者不同、議題不同,分開比較好查。

### L2 運作圖
- **[[Amazon Handover.xlsx]]** — 8 個流程 × 7 個問題,**這是主檔**。
  - `1. Roadmap Management`:Annual Roadmap Plan / New Product Launch Checklist / Market Analysis / Commercial · Promo plan management
  - `2. Sales Performance Management`:BP and SI plan forecast / BP achievement monitor / CPFR Management / Sales Performance Tracking
  - 加上 `Operation Optimization checklist`(6 項可改的地方)與 `What access should I apply for?`(10 項權限)
- ~~`Amazon Handover Prep`~~ — **已於 2026-08-06 刪除**(router 框架隨範圍變更作廢)。
- **[[Amazon Operations Glossary]]** — Amazon 運營專用術語表(價格體系、deal tag、Buy Box、路標、競品分析、MBB SKU 現況、系統清單、ASR 錯拼對照)。**這是接 MBB 後的主要參考。**

### 待處理
- ~~`Amazon Handover — 7Q Known-Unknown Digest (2026-07-28)`~~ — **已於 2026-08-06 刪除**(空殼,只有 frontmatter,功能已被 Excel 的 E–G 欄取代)。
- **⚠ 本 Note Map 標題與內容仍是 router 框架。**2026-08-03 起 Kess 接的是 **MBB**,router 由 [[Zhang Xuan 00942107|張炫]] 直接接手——L2 運作圖的 8 個流程仍然通用,但品類邊界、SKU 清單與 KPI 需重做。

## 3. 每場會後的三個動作(不要再想第四件事)

1. **存原始檔** → `Raw/`,驗 SHA-256。
2. **整理逐字稿** → 放進本資料夾,寫 Open questions 與詞彙表增補建議。
3. **回填 Excel** → 只填 E(答案)/ F(來源)/ G(仍待確認)三欄,並把 G 欄的新項目加進下面的 Active Unknowns。

## 4. Active Unknowns(所有 ⚠ 集中在這裡,不要散在各筆記)

> 這張表是唯一的待確認清單。逐字稿裡的 Open questions 是**證據**,這裡是**待辦**。

### A. 人(接手後最先要認清的)
| # | 未知 | 為什麼要緊 | 問誰 |
|---:|---|---|---|
| 1 | 交付側提要貨的人(ASR「聰哥」)全名/工號 | **他是唯一能在系統提要貨的人**,你沒有權限 | 齊軒 |
| 2 | 「孟哥」「高坤」「劉斌」是誰、是否與 1 重複 | 排產與產線給量都經過他們 | 齊軒 |
| 3 | 董淼的接任者 | 渠道側對口正在換人,而你同週接手 | 齊軒 / 張炫 |
| 4 | 「子怡」在 Amazon 語境指誰(兩個候選) | 每月預測要回饋給他/她 | 齊軒 |
| 5 | 運營「子琪」是否即 5T 簡報的「紫棋」 | 新品頁面配置的對口 | 齊軒 |
| 6 | 董淼團隊 / 運營 / 各國店長 的邊界 | 出問題時該先找誰 | 齊軒 |

### B. 規則與口徑
| # | 未知 | 為什麼要緊 | 問誰 |
|---:|---|---|---|
| 7 | **DOS 正式目標**(張炫主張 ≥60 天;李哥主張期末庫存對齊六月底水位) | 這是你每週判斷「補不補貨」的唯一判準,現在兩套並存沒拍板 | 張炫 + 李哥 |
| 8 | 月度「居委會」全稱、時間、你要不要出席 | 這是 router 要貨的月度決策場 | 張炫 |
| 9 | Router 的正式 BP 數字(SO / 收入 / 增長 / 市佔) | 沒有它,BP achievement monitor 無法定量 | 程哥 / 張炫 |
| 10 | 一次排產量的計算公式 | 齊軒承認目前沒有嚴格邏輯,張炫要求給 | 你自己建,拿張炫核 |

### C. 物件
| # | 未知 | 為什麼要緊 | 怎麼拿 |
|---:|---|---|---|
| 11 | 正式 SKU 清單 | 逐字稿裡產品代碼全靠 ASR 猜,不可用 | 向齊軒要要貨/庫存表 |
| 12 | 「上市節奏倒排」範本 | 新品上市的核心工具;順帶自證逐字稿裡 11/22 vs 01/22 的日期矛盾 | 齊軒已答應發 |
| 13 | 完整系統清單與權限 | 見 Excel `What access should I apply for?` 10 項 | 齊軒已答應整理 |
| 14 | 交付側的產出/要貨/發貨節奏表 | 你的工作是檢查這張表並要求把時間往前抬 | 要求定期刷給你 |

## 5. 交叉引用

- 術語與人名的**權威來源**是 [[5T Group Handover - Brief, Terminology & Summary Format]];本資料夾各逐字稿末的「詞彙表增補建議」是**待併入**的 delta,確認後才寫回 5T 簡報。
- 專案層:[[Amazon GTM Management]] · 任務層:[[Amazon Handover]]
- 人:[[Ziyi Zhang 84434577]] · [[Qixuan Wang wx1252689]] · [[Yan Li 00504988]] · [[Zhang Xuan 00942107]] · [[Dongmiao]]
