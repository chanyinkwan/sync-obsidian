---
status: done
priority: high
due: 2026-06-18
scheduled: 2026-06-18T10:00
projects:
  - "[[FWA Business Development]]"
timeEstimate: 60
assigned_by: "[[Ziyi Zhang 84434577]]"
source: "[[17-6-2026 Meeting - Task Assigned (FWA Roadmap)]]"
tags:
  - task
dateModified: 2026-06-22T14:02:30.661+01:00
timeEntries:
  - startTime: 2026-06-18T08:49:27.986Z
    description: Work session
    endTime: 2026-06-18T09:01:57.179Z
  - startTime: 2026-06-18T09:54:18.495Z
    description: Work session
    endTime: 2026-06-18T10:19:18.646Z
  - startTime: 2026-06-18T14:39:40.385Z
    description: Work session
    endTime: 2026-06-18T15:04:40.503Z
  - startTime: 2026-06-19T09:44:35.910Z
    description: Work session
    endTime: 2026-06-19T09:44:40.552Z
  - startTime: 2026-06-22T07:19:59.048Z
    description: Work session
    endTime: 2026-06-22T07:44:59.636Z
  - startTime: 2026-06-22T07:45:10.984Z
    description: Work session
    endTime: 2026-06-22T08:10:11.176Z
  - startTime: 2026-06-22T08:12:15.059Z
    description: Work session
    endTime: 2026-06-22T08:37:15.213Z
  - startTime: 2026-06-22T08:59:29.102Z
    description: Work session
    endTime: 2026-06-22T08:59:35.963Z
completedDate: 2026-06-22
tasknotes_manual_order: tnuuuuuuuuuu
---

# Fill FWA Roadmap Section 1.3


> Auto-list of source PDFs (DataviewJS — needs "Enable JavaScript Queries" in Dataview settings; PDFs can't be tagged, so plain Dataview can't do this):

```dataviewjs
const dir = "Knowledge/Source/FWA Roadmap";
const files = app.vault.getFiles()
  .filter(f => f.path.startsWith(dir) && f.extension === "pdf")
  .sort((a, b) => a.name.localeCompare(b.name));
dv.table(["Material", "Type"], files.map(f => [dv.fileLink(f.path), f.extension.toUpperCase()]));
```

## 材料拆解(What / How / Why)

### A. FWA Business Development V1 —(交付目標,我負責 §1.3)
整份 Why / 給誰:Huawei 大客戶團隊 + 策略決策層;把各客戶(DT / H3G / Orange / TEF)的 FWA 現況與合作機會結構化,產出 24 個月業務規劃。作者 Dominique Rousseau。

- **1. Customer Diagnosis** — What:客戶現況診斷。How:1.1 策略總覽 / 1.2 現有 FWA 業務評估 / **1.3 業績 KPI 表(我的)** / 1.4 痛點。Why:讓決策層先看懂「這客戶現在長怎樣」當基礎輸入。
- **2. Technology Evolution Assessment** — What:客戶與產業技術演進。How:2.1 現有技術環境 / 2.2 技術演進路線(5G-5.5G、PRPL、RDK-B)。Why:對齊我方技術路線。
- **3. Huawei Positioning Analysis** — What:Huawei 在此客戶的定位。Why:找我方優勢切入點。
- **4. Deep-Dive Cooperation Scenarios** — What:具體合作場景。Why:把定位轉成可談的方案。
- **5. Two-Year Business Development Plan** — What:24 個月業務計畫與里程碑。Why:落地路線圖。
- **6. Feasibility Assessment** — What:可行性評估。Why:驗證計畫可不可行。
- **7–10. Conclusions / Recommendations** — What:結論與建議。Why:給高層的 takeaway。

### B. CKH Telecom Fiscal Result 2025 —(主要數據來源)
整份 Why / 給誰:CK Hutchison Group Telecom 對投資人/公眾的 2025 官方財報。注意:**全是集團層級**,純 FWA / 各子網的 ARPU、churn、NPS 多半沒拆出來 → 對應 KPI 留白或 TBD。

- **1. Highlights** — What:集團財務頭條(營收 €11,387M +9%、EBITDA、EBIT、淨利;IFRS16 vs IAS17 兩種口徑;一次性項目:UK 合併 €898M 虧損)。How:2025 vs 2024 對比表 + 註腳。Why:績效摘要。→ 取 Profitability、集團營收成長。
- **2. Operations Review(分國)** — What:各 OpCo 營運回顧(Italy Wind Tre、Austria 3、UK 合併、北歐、愛爾蘭)的網路鋪設、客戶遷移、IT。Why:讓讀者懂各市場狀況。→ Italy / Austria 脈絡與成長。
- **3. Customer Base & Revenue Streams** — What:4,030 萬 active contract 客戶(約 70%)、broadband 為成長引擎、「beyond the core」(能源/保險/資安)。Why:顯示成長來源。→ 取 Subscriber Growth、Gross Adds、broadband / ARPU 線索。
- **4. Cost Structure & CapEx** — What:成本紀律、capex 下降。Why:解釋 margin 改善。→ Profitability 趨勢佐證。
- **5. Financial Strength / Leverage / Dividend** — What:淨槓桿 0.2x EBITDA、股利政策。Why:財務穩健度(對 §1.3 次要)。

### C. Hutchison Strategy Workshop V7 —(輔助來源 / 脈絡)
整份 Why / 給誰:Huawei H3G 大客戶團隊的內部策略對齊。給你市佔(Italy 36% / Austria 32%)、痛點與敘事,但**硬數字仍以財報為準**。

- **1. H3G Business Overview** — What:業務概覽(Telecom 占集團 21% 營收、僅 8% 利潤,最不賺;疫情後利潤承壓)。Why:理解客戶處境。→ Profitability 敘事 + §1.1 已填內容的出處。
- **2. H3G Strategies** — What:H3G 策略方向。Why:對齊我方提案。
- **3. Benchmarking & Competitor Analysis** — What:競品對標。Why:找差異化。
- **4. Actions & Levers for Growth** — What:成長槓桿與行動。Why:可執行建議。
- **5. Company Structure & Customer Relationship Mapping** — What:公司結構與關係圖。Why:找對的窗口。
- **6. Technical & Commercial Ranging Process** — What:選型與商務 ranging 流程。Why:懂產品如何被客戶選入。

## Definition of the Numbers included

> 範圍提醒:以下數字皆為 **CKHGT 集團 / 3 Group Europe** 層級(H3G 的最近似代理),**非 FWA 專屬**;財報未拆出 FWA 細分。引用為財報原文,可在 PDF 內 Ctrl-F。

| KPI               | Definition | Current Status                                                                                                                                                                                                                      | Trend                                | 來源(財報原文 / 出處)                                                                                                                                                                                                                                                          |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscriber Growth |            | 集團 active customer base **56.9M (2025)** vs 40.7M (2024),+40% YoY——但主要來自 3 UK + Vodafone UK 合併(2025/5),非有機成長                                                                                                                        | 上升(含併購)                              | "Active customer base as at 31 December 2025 of 56.9 million was 40% higher than 2024 following the completion of the merger of 3 UK and Vodafone UK"                                                                                                                  |
| ARPU              |            | 3 Group Europe **net ARPU €13.08 (2025)**,+3% vs 2024                                                                                                                                                                               | 上升 +3%                               | "3 Group Europe's 2025 net ARPU of €13.08 and net AMPU of €12.12 were both 3% higher as compared to 2024"                                                                                                                                                              |
| Churn             |            | Contract 客戶月均 churn **1.1% (2025)** vs 1.2% (2024),改善                                                                                                                                                                               | 下降(改善)                               | "Average monthly customer churn rate of the contract customer base improved to 1.1% for the year (2024: 1.2%)"                                                                                                                                                         |
| Market Share      |            | **Not found in the table**(財報無市佔)。脈絡:workshop 顯示 FWA Italy 36%(第1)、Austria 32%(第2)                                                                                                                                                  | —                                    | 財報:not found in the table。市佔見 [[20251203 Hutchison Strategy Workshop V7.pdf]]                                                                                                                                                                                          |
| Gross Adds        |            | **Not found in the table**(財報只揭露 net active base,未單列 gross adds)                                                                                                                                                                    | —                                    | not found in the table                                                                                                                                                                                                                                                 |
| NPS               |            | **Not found in the table**                                                                                                                                                                                                          | —                                    | not found in the table                                                                                                                                                                                                                                                 |
| Profitability     |            | 營收 **€11,387M (+9%)**;Underlying EBITDA **€3,128M** pre-IFRS16 (+10%) / €4,043M post (+9%);但 reported 轉虧:EBIT **€(230)M**、歸屬股東 **淨虧 €(733)M**,主因 UK 合併一次性非現金虧損 €898M;Underlying profit **€165M (+251%)**;broadband 為成長引擎且 margin 改善 | 混合:營收/底層 EBITDA 上升,reported 因一次性項目轉虧 | Highlights:"Total Revenue 11,387 +9%"、"Profit/(Loss) Attributable to Ordinary Shareholders (733)"、"Underlying Profit … 165 … +251%";"underlying EBITDA of €3,128 million was 10% higher";"the broadband segment has been a growth driver in 2025 … margin improvement" |


## Submission & Feedback

```dataview
TABLE WITHOUT ID file.link AS "Version note", submitted_version AS "Submitted version", status AS "Status", date AS "Date", feedback_summary AS "Feedback summary"
FROM #feedback
WHERE contains(file.outlinks, this.file.link)
SORT date ASC
```
