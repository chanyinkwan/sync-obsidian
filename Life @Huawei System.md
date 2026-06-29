---
type: hub
status: active
updated: 2026-06-16
---

# Life @Huawei System Design — 中央指揮 Hub

> Barbell Strategy 雙軌作戰圖。這是整個系統的單一入口:左手防守(Huawei 現金流錨點,把工作做到極致 ROI),右手進攻(零邊際成本資產,進入 Power Law)。所有決策、所有筆記,都從這裡放射出去。

---

## System Telemetry(每次 review 手動更新)

| 指標 | 現況 |
|---|---|
| 主攻槓桿 | Track A:求職自動化 SaaS x Build-in-Public |
| 當前 MVP | JD-Tailored CV Generator(M2 引擎開發中) |
| 防守端狀態 | 系統架構設計中(三類筆記 + 知識原子化) |
| 系統摩擦點 | 知識筆記如何起頭與管理(本回合處理) |
| 下一個 co-work block | 待定:M2 prompt chain / 防守端落地 |

---

## 決策時間軸 A — 進攻端(Offensive Lever)

> 規則:每做一個不可逆或定方向的決策,記一行 — 日期 / 決策 / 理由 / 連到的筆記。

| 日期         | 決策                              | 理由(一句)               | 產出筆記                        |
| ---------- | ------------------------------- | -------------------- | --------------------------- |
| 2026-06-16 | 主攻槓桿選 Track A + Build-in-Public | 最接近可變現 + 可展示         | (本 Hub)                     |
| 2026-06-16 | MVP 選 CV Generator(乘法閘門模型)      | 可行 x 付費 x 展示 = 60 最高 | [[CV-Generator-MVP-Schema]] |
| 2026-06-16 | Job Lookup 設為免費引流漏斗             | 免費前端 → 收費履歷          | [[CV-Generator-MVP-Schema]] |
| _next_     | M2 引擎「客製化」邏輯定版                  | 產品價值核心               | [[CV-Generator-MVP-Schema]] |

---

## 決策時間軸 B — 防守端(Defensive Anchor)

| 日期         | 決策                           | 理由(一句)        | 產出筆記                                                                |
| ---------- | ---------------------------- | ------------- | ------------------------------------------------------------------- |
| 2026-06-12 | 建立 Vault 結構 + 每日/每週反思模板      | 先有系統容器再談內容    | [[Daily Reflection Template]] · [[Weekly SCQA Reflection Template]] |
| 2026-06-12 | 鎖定 Huawei 為 Defensive Anchor | 低耗能現金流 + 免費內訓 | (本 Hub)                                                             |
| 2026-06-16 | 防守端定為三類筆記引擎                  | 把工作與學習轉成資產    | (見下方 Career Defense System)                                         |
| 2026-06-16 | 新增會議筆記模板(客戶+跨部門)             | 把會議轉成決策/情報/訓練資產 | [[Meeting Note Template]]                                           |
| _next_     | 知識原子化系統落地                    | 把免費內訓轉成可複用資產  | _待建_                                                                |

---

## Track A — 進攻端(Offensive Lever)

產品線:求職自動化 SaaS
核心筆記:[[CV-Generator-MVP-Schema]]

```
免費漏斗            收費 MVP              冷凍庫(有用戶再解凍)
Auto Job Lookup --> CV Generator --+      LinkedIn Scraper
                    (M2 引擎)       |      Outreach Drafter
                                    +--> Build-in-Public 內容流
```

進度:M2 Engine 原型(開發中)→ M1 → M3 → M4 → 漏斗串接
內容軌:每完成一個模組 = 一篇貼文(詳見 schema 內容軌表)

---

## Track B — 防守端 Career Defense System

> 主目標:用最低能量把 Huawei 工作做到完美 ROI,把省下的能量輸送到 Track A。原則:禁止被動消耗,每個活動都產出一個資產。

系統由三類筆記構成,彼此餵養,最後輸出資產:

```
輸入                處理(三類筆記)                  輸出(資產)
日常工作 ─────►  Daily Operations Note  ──┐
                 (計畫/執行/反思 → 抓痛點、常數)  │
公司免費內訓 ─►  Knowledge 原子筆記      ──┼──►  1. 驗證過的痛點+解法(→ 內部戰功 / Track A 點子)
 (必修+選修)     (一則一念、可複用)          │      2. 主管反饋日誌(自我訓練資料)
                 Weekly SCQA Canvas      ──┘      3. 原子知識庫(可遷移 → 貼文/面試彈藥)
                 (彙整痛點 → 主管對齊 → 收反饋)
```

三類筆記角色:
- **Daily Operations** — 原始訊號層。記錄當日計畫 / 完成 / 未完成 + 引導式反思,捕捉痛點(痛點)與常數(常數)。
- **Weekly SCQA** — 彙整層。把當週訊號提煉成 SCQA,向主管對齊,換取免費教練式反饋,並驗證痛點真偽。
- **Knowledge 原子筆記** — 複利層(目前最弱、本回合主攻)。把內訓內容拆成「一則一個可複用論點」,互相連結,長成知識網。

任務與專案管理(新):
- 控制台:TaskNotes views(指令面板:Task List / Kanban / Calendar / Agenda) · [[🏠 Home]]
- 進行中專案:[[FWA Business Development]] · [[Sample Management Ops]]
- 模板:[[Task Template]] · [[Project Template]] · [[Meeting Note Template]]

現有資產:
- [[Weekly SCQA Reflection Template]] · [[Daily Reflection Template]] · [[Meeting Note Template]]
- Daily 範例:[[9-6-2026 Daily Operations Day 2]] · [[10-6-2026 Daily Operations Day 3]] · [[15-6-2026 Daily Operations Day 6]]
- 知識(待原子化):[[Source Note - Sample Management Knowledge]] · [[什麼是WTTx]]
- [[Huawei Key Contacts]] �