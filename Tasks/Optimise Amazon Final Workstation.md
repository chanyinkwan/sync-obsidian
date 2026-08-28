---
status: todo
priority: high
scheduled: 2026-08-20
projects:
  - "[[Amazon GTM Management]]"
dateCreated: 2026-08-20T16:14:17.060+01:00
dateModified: 2026-08-26T10:06:18.885+01:00
tags:
  - task
eisenhower: q1
---

### Materials

[[26-8-2026 Amazon Goal-driven Alignment - Transcript]]

### Objectives on the Work Station

What do you want to achieve in this workstation
= answer the question are we on track to the aligned business outcome

Visualise how far we are from the goal
Visualise KPIs that could help identify hidden problems such as DOS

Minimum Viable Ownership:

Frame up the environment for this project, so it runs smoothly 
1. **Target**：要達成乜、幾時達成？
2. **Actual**：目前做到幾多？
3. **Gap**：距離目標幾遠？
4. **Levers**：你可以影響邊幾個變數？
5. **Triggers**：數據去到咩水平先需要行動？

Result → Reality → Gap → Control → Trigger

---
### Current Work Station

| 問題                                         | 答案                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **What** 佢而家實際做緊乜？                         | 用**一個** Excel 同時做五件事：① 逐 SKU 逐週操盤表（RRP／Runrate／促銷價／折扣率／銷毛／NSIP／收入／SC排產／HUBATA／運輸方式／SI／規劃SO／SO／三層庫存／三個 DOS）；② 出 `W` 週報畀領導同各國；③ 德法意西四國競品**逐日**價格監控；④ 上市計劃gannt chart（GTM／交付／運營／MTK 四條泳道）；⑤ 銷售預測、價促規劃、物流&成本參數。<br>更新方式＝**另存一份新 sheet**，靠 sheet 名日期後綴（`10.01`／`07.22`／`202507`／`202602`）做版本。<br>**核心用途：share information with other stakeholders**，唔係做決策運算。 |
| **Why** 點解會用而家呢個方法？背後動機係乜？                 | 品類 GTM 嘅本質係**統籌協調＋說服各部門落地，自己唔做執行**。要同機關、交付、各國 traffic manager、渠道 GTM 對數，唯一大家都開得到、唔使申請權限、唔使教嘅載體就係一個 Excel 附件。<br>加一個 sheet ＝ 零成本、零審批；起一個系統 ＝ 要 IT、要人教、要人肯用。                                                                                                                                                                                              |
| **Success** 對佢嚟講，咩叫做好？                     | **被問到隨時答得出**：呢週賣咗幾多、每個 SKU／每個國家幾多、庫存撐幾多日、下一批貨幾時到。加上週報準時出、大促價同貨齊、收入數達標（過去 12 個月 $5.2M）。<br>「張表靚唔靚」唔係 success，「答唔答得出」先係。                                                                                                                                                                                                                                  |
| **Constraints** 有咩限制令佢唔可以「照我諗嗰個最好方法」做？     | ① 數據源散喺 Amazon 後台／Vendor Central／排產系統／交付郵件，冇一個接得到嘅 API 或 DB。<br>② 對口跨部門＋跨國，只能用人人都有嘅工具（Excel／郵件）。<br>③ 一個人做兩年，冇 analyst、冇工程資源。<br>④ **交付 lead time 硬限制**：空運 2 週、海運 7 週、排產 AX 系 5 週／Mesh3 8 週、到德國客倉再 1 週 rework；西歐鐵運成本同週期唔滿足需求。<br>⑤ 客戶下 PO 到 sell in 只有兩週 → 必須先產先囤荷蘭 hub，張表要遷就呢啲時間軸去排。                                                                   |
| **History** 呢個方法係點形成？以前試過咩？                | 2024 年 8 月項目由零開始，先做路由器上市（AX3／AX2／Mesh3），用一份「上市进展周报」交代 PO／頁面／營銷／價促四件事。之後**每週複製一次**，滾到今日：**254 份操盤快照、423 份 `W29 (n)` 週報副本、360 份四國競品監控快照**。<br>**鐵證**：最新一份週報個標題仲寫住「路由上市进展周报-**W22**」，但內文係「**W29**整体进展」—— 複製咗冇改標題。<br>張表由「上市追蹤」慢慢長成「操盤＋預測＋競品＋物流」全能表，中間**冇人重新設計過**。                                                                                          |
| **Trade-off** 佢而家其實犧牲咗乜，換取咗乜？              | **犧牲咗**：單一真相（1140 個 sheet，冇人知邊個係現行版）、可比性（跨週要人手揭 sheet 對）、錯誤可見度（`#DIV/0!` 就咁擺喺 DOS 行冇人理）、交接成本（新人一打開就係程哥講嗰句「你可能睇唔明」）。<br>**換咗**：零導入成本、格式完全自由、任何 stakeholder 即刻開得到、唔使等任何人批。                                                                                                                                                                                |
| 如果我要替對方 defend 佢而家個做法，我 defend 唔 defend 到？ | **Defend 到，而且應該 defend。** 喺「一個人 × 兩年 × 冇工程資源 × 跨部門跨國對口」嘅約束下，Excel ＋ 另存複本係理性選擇，而且真係做到 0 → $5.2M。<br>**Defend 唔到嘅只有一樣：冇 archive 機制。** 錯嘅唔係「用 Excel」，係「舊 sheet 永遠唔刪」。<br>所以我要改嘅唔係換工具，係加一條**「當前版本 vs 歷史封存」**嘅界線，再補返佢冇做嘅嗰層 —— 由 *share information* 升做 **surface the gap**（距離 6M 仲爭幾多、DOS 跌到幾多要行動）。                                                          |

### Goal of this Work Station
the goal: 6M
factors that would affect the result whether this goal could be achieved or not:


### 可用數據：
#### Online Sales Operation Portal:
這些是用來定義數據範圍的參數，可作為 Dashboard 的動態控制項：

- **Region（區域）**：目前選擇為「European」（歐洲）
- **Country（國家）**：目前選擇為「Spain」（西班牙）
- **Product line（產品線）**：目前選擇為「IOT」
- **Product（產品）**：可選擇特定產品，目前未選擇（空白）
- **asin（商品編號）**：可輸入或選擇特定 ASIN，目前顯示「B0DQDLHF42 B0DQDNBP36 B…」
- **Period（期間）**：可選擇「Day」、「Month」，目前選擇「Month」
- **Analysis Period（分析期間）**：目前選擇「2026-W01 至 2026-W35」
- **Vs Previous（與前一期間比較）**：可選擇「2025-W01 至 2025-W35」
- **Vs last year（與去年同期比較）**：可選擇「2025-W01 至 2025-W35」
- **GMV(Local Currency) / GMV(USDS)**：可選擇以本地貨幣或美元顯示 GMV
- **Dimension（維度）**：
    - Country（國家）
    - Product Line（產品線）
    - Product[SKU]（產品編號）
    - Model（型號）
    - ASIN（商品編號）
    - Color（顏色）
    - Total（總計）
- **Indicator（指標）**：可勾選顯示的指標，目前勾選：
    - GV（總價值）
    - SO（銷售訂單）
    - GMV（商品交易總額）
    - C/R（成本/收入比或轉化率）
    - ASP（平均售價）
    - Sales Radio%（銷售比率）
    - Shipped（已出貨）
    - Returns（退貨）
    - Return Rate（退貨率）
    - Sellable Inv（可售庫存）
    - Open Order（未完成訂單）
    - DOS（供應天數）
    - SO<>0（銷售訂單不為零）
    - GMV(VAT)（含稅GMV）
    - ASP(VAT)（含稅平均售價）

表格包含以下欄位，可作為 Dashboard 的核心數據來源：

|欄位名稱|說明|
|---|---|
|**Country**|國家，目前為「Spain」|
|**ProductLine**|產品線，目前為「IOT」|
|**Product Name [SKU]**|產品名稱與 SKU，例如「HUAWEI 4G CPE 3」、「5G Mobile WiFi Pro 5」等|
|**ASIN**|商品編號，如 B0D9L7W63、B0DQK67F3 等|
|**SO (2026-W01~2026-W35)**|2026 年第 1 至 35 週的銷售訂單數量|
|**SO (2025-W01~2025-W35)**|2025 年同期銷售訂單數量|
|**VS Per**|與去年同期相比的百分比變化（如 -40.0%）|
|**GMV(local currency) (2026-W01~2026-W35)**|2026 年同期本地貨幣 GMV|
|**GMV(local currency) (2025-W01~2025-W35)**|2025 年同期本地貨幣 GMV|
|**VS Per**|GMV 與去年同期相比的百分比變化|
|**C/R**|成本/收入比或轉化率（如 2.4%）|
|**VS Per**|C/R 與去年同期相比的百分比變化|
|**ASP**|平均售價（如 66、72、185 等）|
|**VS Per**|ASP 與去年同期相比的百分比變化|
|**Sellable Inv**|可售庫存數量（如 0、2、4 等）|
|**SO (2026-W01)**|2026 年第 1 週銷售訂單數量|
|**GMV(local currency) (2026-W01)**|2026 年第 1 週 GMV|
|**C/R (2026-W01)**|2026 年第 1 週 C/R|
|**ASP (2026-W01)**|2026 年第 1 週 ASP|
|**Sellable Inv (2026-W01)**|2026 年第 1 週可售庫存|
|**SO (2026-W02)**|2026 年第 2 週銷售訂單數量|
|**GMV(local currency) (2026-W02)**|2026 年第 2 週 GMV|
|**C/R (2026-W02)**|2026 年第 2 週 C/R|
|**ASP (2026-W02)**|2026 年第 2 週 ASP|
|**Sellable Inv (2026-W02)**|2026 年第 2 週可售庫存|


---

#### Basic Amazon Product Info:
|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
    
|Product Model|BOM|亚马逊EAN|泛欧ASIN|Product Model|覆盖国家|上市时间|
|H153-381|51060KHY|6975508992420|B0DQDLHP42|H153-381|德、法、意、西、荷|25Q1|
|E6888-982|51071VPT|6975508992437|B0DQDNBP36|E6888-982|德、法、意、西、荷|25Q1|
|E5783-230a|51071URW|6942103148705|B0DQNK67F3|E5783-230a|德、法、意、西、荷|25Q1|
|B320-323|51060JRG|6942103147623|B0DQDMHSBM|B320-323|德、法、意、西、荷|25Q1|
|B636-336|51060KFW|6942103135316|B0D9LR7W63|B636-336|德、法、意、西、荷|24Q3|
|E5586-336|51071VHT|6942103156922|B0F21N4SYF|E5586-336|德、法、意、西、荷|25Q2|
|B530-336|51060KGE|6942103156939|B0F21LPW4T|B530-336|德、法、意、西、荷|25Q2|
|B535-230|51060HJC||B0F2FWQF7X|B535-230|德|25Q2|
|B636-336（黑）|51060KVJ|6942103159947|B0F3TBWXTC|B636-336（黑）|德、法、意、西、荷|25Q3|
|E5783-230b|51071VWU||B0FD99SLR8|E5783-230b|德、法、意、西、荷|25Q3|
|E5785-320b|51071VWQ||B0FD98QVG6|E5785-320b|德、法、意、西、荷|25Q3|
|H155-383|51060LDT|'6975508993243|B0FK1NLFWX|H155-383|德、法、意、西、荷|25Q3|
|H165-383|51060LCU|'6975508993236|B0FK18L4CR|H165-383|德、法、意、西、荷|25Q4|
|H153-381 (UK)|51060KJA|'6942103163227|B0FKBFZJXM|H153-381 (UK)|英|25Q4|
|E5785-320b (UK)|51071VWQ|'6975508992390|B0FKBFYBFB|E5785-320b (UK)|英|25Q4|
|B320-323 (UK)|||B0CQRT4N37|B320-323 (UK)|英|26Q3|
|H173-383|51060MBP||B0H3Z5XGF5|H173-383|德、法、意、西、荷|26Q3|

#### Sell In and Business Plan data
"C:\Users\k84450674\Downloads\EU Amazon Weekly AATP-PO-delivery Tracking.xlsx"
**Headers & Delivery**
- **Base fields:** Row 1 note `此表格不要排序操作`; Status; Product; Product Line; Product Series; 辅助; Product Name; Color; Product Model; BOM; ASIN; Quotation — **total**. (`SP# AATP-PO-delivery!A1:K3`)
- **1.14:** Mar / 401 / USD — **9,069,249**. (`SP# AATP-PO-delivery!L1:L3`)
- **2023 Delivery Summary:** Sep Shipped 13,892; Oct Shipped 35,454; Nov Shipped 28,576; Dec Shipped 13,721. (`SP# AATP-PO-delivery!M1:P3`)
- **2024 Delivery Summary:** Jan 29,033; Feb 20,938; Mar 33,754; Apr 22,302; May 30,150; Jun 56,644; Jul 68,877; Aug 8,200; Sep 56,163; Oct 64,450; Nov 60,890; Dec 31,423. (`SP# AATP-PO-delivery!Q1:AB3`)
- **2025 Delivery Summary:** Jan 53,834; Feb 27,713; Mar 43,591; Apr 38,249; May 82,587; Jun 81,748; Jul 41,543; Aug 49,544; Sep 76,230; Oct 62,051; Nov 72,297; Dec 42,223. (`SP# AATP-PO-delivery!AC1:AN3`)
- **2026 Delivery Summary:** Jan Shipped 58,925; Feb Shipped 54,341; Mar Shipped 52,472; Apr Shipped 46,570; May Shipped 64,883; Jun Shipped 86,157; Jul Shipped 47,015; Aug Plan Ship 53,588; Sep Plan Ship 38,432. (`SP# AATP-PO-delivery!AO1:AW3`)
- **Additional delivery status:** Aug Shipped 40,014; Aug Delivery Slot Confirmed 13,574; Aug Delivery Slot Pending 0; Sep Delivery Slot Confirmed 15,766; Sep Delivery Slot Pending 22,666. (`SP# AATP-PO-delivery!AX2:BB3`)

**Plans & Needs**
- **Delivery Plan:** 4-Aug 5,202; 6-Aug 4,304; 11-Aug 14,370; 13-Aug 3,601; 18-Aug 8,481; 20-Aug 4,056; 25-Aug 13,574; 1-Sep 15,766; Delivery Slot Pending 38,432. (`SP# AATP-PO-delivery!BC1:BK3`)
- **Accepted Quantity:** 4-Aug 7,439; 6-Aug 9,249; 7-Aug 1,701; 11-Aug 6,307; 12-Aug 8,015; 13-Aug 11,770; 14-Aug 2,645; 18-Aug 5,665; 20-Aug 7,541; 25-Aug 7,419. (`SP# AATP-PO-delivery!BL1:BU3`)
- **AATP Need:** WK34 Stock EU 59,610; Open PO 38,432; 4 Weeks AATP 110,453; WK34 SO 14,220; 4 Weeks HW SO 14,683; Avg. SO 16,243; Midian SO 13,790; Max. SO 70,077; Forecast SO 15,006; WOC Stock 10.6; WOC 本周派送 11.1; WOC Open PO 12.7; WOA 19.4; 九月 ATP 109,099; 九月 ATP value 13,960,247; 九月 PSI需求 70,554; 九月 需求value 9,116,868; ATP-需求 38,545; 九月 PO Gap 需求-PO 18,548; AATP ATP-PO 57,093; 九月 PO Gap Min 32,788; 2周可接单数量 21,224; 3周可接单数量 40,273. (`SP# AATP-PO-delivery!BV1:CR3`)

**Weekly**
- **8.10:** WK33 17,971; **8.17:** WK34 12,537; **8.24:** WK35 55,570; **8.31:** WK36 17,660; **9.7:** WK37 19,049; **9.14:** WK38 18,174; **9.21:** WK39 12,220; **9.28:** WK40 970; **10.5:** WK41 2,000; **10.12:** WK42 0; **10.19:** WK43 0. (`SP# AATP-PO-delivery!CS1:DC3`)
- **Other content:** AATP不冲减已接单数量; 3/9/2026; 九月. (`SP# AATP-PO-delivery!DD1:DI3`)

#### Business Plan
"C:\Users\k84450674\Downloads\MBB SI volume&Rev Tracker.xlsx"


### Missing detail
1. **確認 6M 口徑**  
    係 USD？自然年定 business year？SI revenue、認列收入定 GMV？MBB 五國範圍？
    
2. **目標拆解**  
    6M → H2 約 3.5M → 每月／每週 → SKU／國家。唔可以將「過去12個月 $5.2M」同「今年上半年 2.5M」混埋。
    
3. **年底 Forecast 同 Gap**  
    唔只顯示 Actual；要顯示目前速度年底會做到 5.0、5.5 定 6.0M，以及差額。
    
4. **收入 Driver Tree**  
    Revenue = 銷量 × ASP；再向下睇庫存、delivery、價格、促銷、traffic／conversion、新品上市。
    
5. **獨立但輕量嘅溝通輸出**  
    唔需要第二個 database。每週／每月由工作站抽出一頁：Actual vs Target、Forecast、Top Risks、Actions、Decision Needed。

### Solution

## Next move
