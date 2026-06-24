# CV Generator MVP — 產品 × 內容 雙軌 Schema
> Status: ACTIVE | Created: 2026-06-16 | Owner: chukwan
> Strategy: Barbell / Offensive Lever — Build-in-Public 自增強迴圈

---

## 0. 決策紀錄 (Decision Log)

MVP 篩選採 **乘法閘門模型**(可行性是 gate,做不出來則歸零):

| 模組                    | 可行    | 付費    | 展示    | 乘積     | 裁決         |
| --------------------- | ----- | ----- | ----- | ------ | ---------- |
| Auto Job Lookup       | 5     | 2     | 4     | 40     | 免費前端漏斗     |
| **CV Generator(高品質)** | **5** | **3** | **4** | **60** | **MVP ✅**  |
| LinkedIn Scraper      | 3     | 4     | 4     | 48     | 冷凍(ToS 風險) |
| Outreach Drafter      | 2     | 4     | 4     | 32     | 冷凍(可行性低)   |
1
**核心洞察:** #1 + #2 串成單一漏斗 — 免費抓職缺(引流)→ 一鍵生成客製履歷(收費)。

---

## 1. 產品軌 (Product Track)

### MVP 範圍:JD-Tailored CV Generator
唯一承諾:**貼上一則職缺敘述(JD)+ 你的基本資料 → 產出一份 ATS 友善、針對該職缺客製化的履歷。**

| 子模組 | 輸入 | 處理 | 輸出 | 技能練到 |
|---|---|---|---|---|
| M1 Input | JD 文字 + 使用者 profile(JSON) | 解析 JD 關鍵字/硬性條件 | 結構化需求 | Prompt 工程 / 文本解析 |
| M2 Engine | 結構化需求 + profile | LLM 重寫 bullet、對齊關鍵字、量化成就 | tailored 草稿 | LLM API / prompt chaining |
| M3 ATS Optimizer | 草稿 | 關鍵字覆蓋率檢查、格式淨化 | 匹配分數 + 建議 | 評分邏輯 / 規則引擎 |
| M4 Render | 草稿 | 套版 → .docx / .pdf | 可下載檔 | 文件生成(docx 技能) |

### 技術棧(暫定,co-work 時逐塊決定)
- 後端邏輯:Python
- LLM:API(prompt chaining)
- 輸出:docx/pdf 生成
- 前端(MVP 階段可省):先 CLI 或最簡表單

### Build Milestones
- [ ] M2 Engine 原型(核心價值,先做這塊)
- [ ] M1 Input 解析
- [ ] M3 ATS 評分
- [ ] M4 文件輸出
- [ ] 接上 #1 免費 Job Lookup 前端漏斗

---

## 2. 內容軌 (Build-in-Public Track)

原則:**每寫一個產品步驟 = 產一篇內容。** 內容是開發的副產品,零額外能量。

| 對映產品步驟 | 內容主題(貼文骨架) | 形式 | Proof-of-Capability |
|---|---|---|---|
| M2 Engine 完成 | 「我怎麼讓 AI 把爛 bullet 改成量化成就」Before/After | 圖文對比 | LLM/prompt 能力 |
| M3 ATS 完成 | 「90% 履歷被 ATS 刷掉的真正原因」 | 教學貼 | 領域 know-how |
| M4 Render 完成 | 「一鍵生成 ATS 履歷 demo」 | 螢幕錄影 | 全棧執行力 |
| 漏斗串接 | 「我把找工作整個自動化的系統圖」 | 架構圖 | 系統設計力 |

### 內容主線(Narrative Spine)
「一個在大廠上班的人,如何用業餘能量,把求職這件痛事自動化成產品」——這條人設同時服務你的**個人品牌**與**未來求職展示**。

---

## 3. 冷凍庫 (Parked — 有用戶再解凍)
- LinkedIn Scraper:法律/ToS 風險,需用戶量支撐才值得碰
- Outreach Drafter:依賴 scraper,且自身可行性低

---

## 4. 下一步 (Next Co-Work Block)
> 先做 **M2 Engine 原型**——它是整個產品的價值核心。下一回合 co-draft:M2 的 prompt chain 架構 + 輸入/輸出資料結構。
