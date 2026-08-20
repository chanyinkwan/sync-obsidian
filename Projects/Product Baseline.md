---
type: project
status: active
owner: me
stakeholders:
  - "[[Ding Cheng 00611102 (程哥or 丁程)]]"
domain: Product knowledge @Huawei MBB/FWA — sales specialist baseline
due: 2026-09-28
tags:
  - project
  - product
---

# Product Baseline

## Goal / my scope
程哥 7/27 定調（[[27-7-2026 SCQA Transcript]]）：最終目標是**能自己跟客戶去講產品**——口試、不看 PPT。驗收情境原話：「如果說我們的領導、我們的主管過來想要了解這些情況，你拿這張紙給他看清。」本項目把這個目標拆成可評分的 Gates，每關由程哥在週一 SCQA 口試驗收（[[SCQA Cadence]]）。Scope = 12 條 sales specialist baseline 中的第 1–8 條（「開口講產品」＋ operator 經濟賬）；第 9–12 條見 backlog：[[Develop Product Knowledge Baseline Journey]]。

## 診斷基線（2026-08-20 面試，5 題）

| # | 題目 | 表現 |
|---|------|------|
| Q1 | portfolio 概觀 | 只講得出 1 個 SKU 名 |
| Q2 | 自己 SKU 深度 | 全空白 |
| Q3 | FWA 概念 | 定義空白、成本邏輯反轉 |
| Q4 | 讀 spec | 5 個 term 識 1 個 |
| Q5 | Why Huawei | 零句 |

結論：起點 ≈ 5%，全加法無 unlearn。

## Gate 規格書（任何一關成立的五個必要件）
1. 考試形式——口頭、不看材料、場景寫明。
2. 主考人——預設程哥，週一 SCQA。
3. 評分表——5 維 × 0–2 分，滿分 10，**≥8 過關**，每維寫明 0 分同 2 分長相。
4. 重考規則——未達 8 分下週一同卷重考，rubric 不變。
5. 紀錄欄——frontmatter 填 `score` / `verdict`(pending|pass|retake) / `exam_date`。

## 加新關 template

```yaml
---
status: todo
priority: high
due:
scheduled:
gate: G_
score:
verdict: pending
examiner: "[[Ding Cheng 00611102 (程哥or 丁程)]]"
exam_date:
tags:
  - task
  - scqa
  - product
contexts:
  - work
projects:
  - "[[Product Baseline]]"
  - "[[SCQA Cadence]]"
dateCreated:
---

# Gate G_ · <名>

## 形式

## 評分表
| 維度 | 0 分 | 2 分 |
|------|------|------|
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |
|      |      |      |

## 重考

## 材料
```

## Gates（auto）

```dataview
TABLE WITHOUT ID file.link AS "Gate", due AS "考試日", verdict AS "Verdict", score AS "Score"
FROM #task
WHERE contains(projects, this.file.link) AND gate != null AND verdict != "pass"
SORT due ASC
```

## Passed（auto）

```dataview
TABLE WITHOUT ID file.link AS "Gate", score AS "Score", exam_date AS "Exam Date"
FROM #task
WHERE contains(projects, this.file.link) AND gate != null AND verdict = "pass"
SORT exam_date DESC
```

## Backlog / 未覆蓋範圍
[[Develop Product Knowledge Baseline Journey]] — 12 條 baseline 中未入關的 9–12 條同兩個 partial gap，每條帶觸發器；觸發器出現先開新卡。

## 讀書路線（5 份檔覆蓋 G1–G4，第 6 份服務 G5）
1. `G:/My Drive/Career System/Huawei/HW MBB/MBB New/3.拓展材料/HQ_RM_Retail Training_MBB & Router Basic Training Introduction_V3.pptx` s28–35
2. `G:/My Drive/Career System/Huawei/HW MBB/MBB New/2.产品包&营销包/XG产品资料&营销物料/H153-381/1、5G CPE 5s（H153-381）Product Introduction V1.0.pptx` s10–14
3. `G:/My Drive/Career System/Huawei/HW MBB/MBB New/4.竞争应对/竞争摆位.pptx`
4. `G:/My Drive/Career System/Huawei/HW MBB/MBB New/4.竞争应对/一指禅v4.0.xlsx`
5. `G:/My Drive/Career System/Huawei/HW MBB/MBB New/3.拓展材料/TCO/CBG MBB (HTB) Why Huawei 2024 V2.0 -EN.pptx` s9–30
6. `G:/My Drive/Career System/Huawei/HW MBB/MBB New/3.拓展材料/TCO/TCO Cost Calculator 2.0.xlsx`
7. vault：`Knowledge/Source/Life at Huawei/Product Knowledge/FWA MWC 2026 Mainslides (CBG)-MBB全量版.pdf`（H173/H165/H168 的產品料——G 盤呢幾個 folder 係空殼）＋ `Product_Master.xlsx`

## 盲點記錄（2026-08-20）
1. **用渠道熟悉度冒充產品知識**：H173 講得出 Buy Box/竄貨/EPD，講唔出佢係一台乜嘢機。
2. **成本邏輯反轉**：以為 FWA 輸喺成本——FWA 成個 pitch 就係成本（TCO 50%↓）。從來冇問過「呢個品類點解存在」。
3. **KSP 過手唔過腦**：廣告工作職責本身就係「feed KSP + competitor list 畀各國 traffic manager」——日日經手嘅材料，一個字冇讀入腦。
4. **產品線迴避咗三個幾星期**：7/27 承諾 8/3 匯報學習方法，O7 至今 todo。關係線（O6）做咗，產品線一步未行。
