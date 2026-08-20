---
status: done
priority: high
due: 2026-08-03
scheduled: 2026-07-29
projects:
  - "[[SCQA Cadence]]"
  - "[[Huawei Development]]"
timeEstimate: 480
assigned_by: "[[Ding Cheng 00611102 (程哥or 丁程)]]"
source: "[[27-7-2026 SCQA Transcript]]"
tags:
  - task
  - scqa
contexts:
  - work
related:
  - "[[3-8-2026 SCQA Prep]]"
  - "[[27-7-2026 July SCQA Reflection]]"
  - "[[SCQA O5 - Client Power Map]]"
  - "[[SCQA O2 - Org-to-Customer Relationship Map]]"
  - "[[SCQA O7 - Portfolio Battlecard and Comparison Tool]]"
dateModified: 2026-08-20T15:05:19.105+01:00
eisenhower: q1
tasknotes_manual_order: tncxcxcxcxcx
completedDate: 2026-08-20
---

# O6 · H3G Stakeholder Brief Pack

母任務：[[3-8-2026 SCQA Prep]] · 交付對象：[[Ding Cheng 00611102 (程哥or 丁程)]] · 交付日：**2026-08-03（週一）**
真正的使用者：**八月 [[He Gang 00866077 (Kevin)]] × [[Dennis Lui]] 那場高層會議**（日期待核，聽到的版本是 11–13 號）
原型探索：[[SCQA O6 5 prototypes]]

程哥 7/27 8:31 的驗收句：「**如果說我們的領導、我們的主管過來想要了解這些情況，你拿這張紙給他看清**」。

---

## 🧭 設計原則：這份輸出只放常數

**常數進，變數不進。**


## 📦 Deliverable — 融合式決策鏈（2026-07-29 定版）

### 1. 組織圖骨
照官方組織圖畫（依《2026年3月和記集團客戶MWC接待策劃報告 V9》正式組織圖）。

```
              Canning Fok（集團副主席・接觸不到）
                        │
                  Dennis Lui                 [D]
                   ┌────┴────┐
            Francesco      Agostino  ← 同層   [D] [D]
                │
            Marlene                          [I]
                │
            Mark Williams                    [I]
```

### 2. 翻面照片卡 × 5
客戶照片即卡片正面，有明確可點擊提示，點擊翻面。

**正面**：照片 · 姓名 · 職稱 · **D / I 徽章**
**背面**：四塊（見組件 3）

> **不用顏色編碼。** 
> 角色以小字母徽章表示：**D ＝ Decision Maker**、**I ＝ Influencer**。

| 徽章 | 人物 |
|---|---|
| **D** | [[Dennis Lui]]、[[Francesco Zampini]]、[[Agostino Ruberto]] |
| **I** | [[Marlene Fantini]]、[[Mark Williams (Bristish)]] |

### 3. 卡片四塊規格（程哥 7/27 定的五塊，第⑤塊移至組件 1）

| 區塊 | 內容 | 程哥原話出處 |
|---|---|---|
| ① 個人 | 家庭狀況（婚否、幾個小孩）、一兩個主要愛好 | 9:06、10:49 |
| ② 對華為 | **具名的決策標準，不是形容詞** | 8:31 |
| ③ 近三場活動 | 每筆必含 **場合 ＋ 他在場上表達的立場 ＋ 對我方的含義**。寫不出立場與含義的不收錄。上限三筆，滿三筆淘汰最舊的 | 7:41、10:30 |
| ④ 未來 | 下一次接觸機會／計畫 | 11:52 |

> ℹ️ **第⑤塊「組織／匯報線」沒有被砍掉，是搬家了。** 匯報線已由組件 1 的組織圖骨架完整呈現，卡背重複一次只會佔版面。
> 若程哥問起，答案是：「匯報線在組織圖上，五塊都在，只是組織那一塊用畫的比用寫的清楚。」

> ⛔ ②的通過線：Francesco ＝「**guarded：受制於和記高層對合規問題的擔憂，合作態度謹慎**」，**不是**「關係普通」。
> Francesco 這一句是全份最關鍵的一行——顏色編碼拿掉後沒有視覺替它喊，**放卡背第一行**。

### 6. 就地渲染未知（取代獨立的 Gap Log 頁）

| 狀態 | 渲染 |
|---|---|
| 已核實 | 正常黑字 |
| 推斷 | 斜體，加註來源 |
| 未知 | 灰底空格 |

再加 `last_verified` 日期，**超過 90 天自動變灰**（防止三個月後領導拿著過期的卡去見客戶）。

> **不另開 Gap Log 頁**（缺口應在交付前補完），但缺口在原位就看得見，不會被「看起來填滿了」藏起來。
> 模板約束**結構**，不約束**完整度**——否則延伸到資料稀薄的客戶時會逼人編造。

---

## 📋 簡化人物檔案表（8 words/cell 上限 · HTML 資料源 · 2026-07-31）

來源：`27-7-2026 SCQA 客戶人物檔案（Tier A-B 精簡單表版＋官方英文職稱 2026-07-27）.docx`（桌面）。

> **例外**：「Official English Title」是專有名詞，不可壓縮，原文照登；其餘每格 ≤8 字/詞。
> **範圍**：只收 O6 決策鏈 8 人（Fok／Dennis／Francesco／Agostino／Marlene／Mark／Manjit／Valentina）。Joe Parker、義大利技術團隊、Barbara Balice、VodafoneThree 側不在 O6 範圍內（見下方明確排除表），完整資料留在原始 docx 供查。
> 這張表**取代**卡片內容的口語化描述，是 HTML `PEOPLE` 陣列改版時的直接資料源——每欄對應卡片正面／背面的一個欄位。

### 表 A — Fok／Dennis／Francesco／Agostino

| 欄位 | Canning Fok | Dennis Lui | Francesco Zampini | Agostino Ruberto |
|---|---|---|---|---|
| Official Title | 未知（僅知集團副主席，中文頭銜） | Executive Deputy Chairman and Executive Director | Director of Devices and Digital Products & Services, CKH IOD | Global Technical Director, CKH IOD |
| 職責 | 集團層決策，接觸不到 | 掌管亞洲及集團電訊業務 | 主導終端供應商選型 | 負責測試、晶片協作及新技術 |
| 匯報線（org 圖已畫） | 頂端，向下無匯報對象 | 向 Frank Sixt、Canning Fok | 終端業務向 Dennis 匯報 | 向 Joe Parker 匯報 |
| 彼此關係 | 集團層，高於 Dennis | 地位高於 Joe Parker | 與 Agostino 同層 | 與 Francesco 同層 |
| 對華為態度（具名標準） | 未知 | 長期高度支持 | 審慎但積極協助（合規顧慮） | 支持並認可技術能力 |
| 近期歷史事件 | 未知 | 2026-06-24 首次與程哥面談 | 2025-06 推動恢復 XG 合作 | 主持 Technology Board 多次交流 |
| 來和記前經歷 | 未知 | 1986 年加入，無更早職歷 | 2008–2017 任職 Accenture | 曾任 Ericsson Senior Engineer |
| 在和記年資 | 未知 | 約 40 年（1986 年起） | 約 9 年（2017 年起） | 約 25 年（文件誤植 15 年） |
| 年紀／生日 | 未知 | 75 歲，1951 年 3 月生 | 生日 10 月 15 日 | 未知 |
| 華為側對接人 | 未知 | 何剛（維繫）／曾黎、榮濤（審核） | 程哥（Ding Cheng） | 未定——Selina 或程哥，待核實 |
| 決策角色（badge） | D（不參與，僅標記頂端） | D，H3G Top-3 #1 | D，H3G Top-3 #2 | D，具技術准入否決權 |
| 下一次接觸點 | 未知 | 8/11–13 何剛×Dennis 高層會議 | 每月 Commercial Board；Q4 HQ Visit | 每月 Technology Board；Q4 HQ Visit |
| 關切議題 | 未知 | 香港手機表現、Aurora Store、AI | 定價、ranging、DDR4 供應、合規 | 測試結果、產品規格、新技術 |
| 來源可信度 | 低（僅組織圖標記，未查證） | 高（面談、逐字稿、文件互證） | 高（匯報線、履歷、生日佐證） | 中（對接人、部分履歷待核） |

### 表 B — Marlene／Mark／Manjit／Valentina

| 欄位 | Marlene Fantini | Mark Williams | Manjit Dhanjal | Valentina |
|---|---|---|---|---|
| Official Title | Head of Devices and Hardware Portfolio, CKH IOD | Senior Vendor Manager - Mobile Broadband and Home Broadband, CKH IOD | Senior Vendor Manager - Handsets and Accessories, CKH IOD | Executive Senior Project Assistant to CEO and Digital Products & Services Director, CKH IOD |
| 職責 | 終端選型執行主管 | 負責 MBB／Home Broadband 供應商 | 負責手機及配件供應商 | Francesco 秘書，行政支援 |
| 匯報線（org 圖已畫） | 向 Francesco 匯報 | 向 Marlene 匯報 | 向 Francesco 匯報 | 向 Francesco 匯報 |
| 彼此關係 | Francesco 下屬，首位影響者 | 與 Manjit 分管品類 | 與 Mark 分管品類 | 行政支援窗口 |
| 對華為態度（具名標準） | 支持，關係穩固 | 未知 | 未知 | 未知 |
| 近期歷史事件 | 2026-06-16 與程哥談年度計畫 | 出席 Q1 Device Forum | 2026-07-15 首次浮現於名單 | 未知 |
| 來和記前經歷 | 未知 | 約 20 年跨職能全球經驗 | 曾任職 Psion，後入 3UK | 未知 |
| 在和記年資 | 2001 意大利入職，2018 轉 IOD | 未知 | 未知 | 未知 |
| 年紀／生日 | 生日 1 月 19 日 | 生日 11 月 30 日 | 生日 7 月 23 日 | 40 歲，生日 10 月 12 日 |
| 華為側對接人 | 程哥（Ding Cheng） | Selina | Selina | 未知 |
| 決策角色（badge） | I，終端選型議價關鍵 | I ＋ Champion | I，手機品類執行窗口 | G（行政支援，非決策人） |
| 下一次接觸點 | 未知 | Q3 期中路線圖工作坊（規劃） | Q3 期中路線圖工作坊（規劃） | 未知 |
| 關切議題 | 定價、量能承諾、終端 portfolio | MBB、Home Broadband、FWA | 手機、配件、非 FWA 品類 | 未知 |
| 來源可信度 | 高（內部關係圖、接觸紀錄） | 中（公開履歷不完整） | 中（早期背景來自公開資料） | 中（僅內部基本資料） |

> ⚠ 註記未沿用：O5 關係圖「Manjit - BBI - Indian」意涵不明，未收錄（見 [[Manjit Dhanjal]] 原註）。
> ⚠ Agostino 對接人（矛盾 #2）仍完全開放，需 8/3 現場口頭確認，不進卡片正面。

---

## ✂️ 明確排除（範圍邊界）

| 排除項 | 去處／理由 |
|---|---|
| 這場會的 the ask | 變數 → 會議 brief |
| 客戶當期商業議程 | 變數 → 會議 brief |
| 會後 next steps 與 owner | 變數 → 會議 brief |
| 產品面競品分析 | → [[SCQA O7 - Portfolio Battlecard and Comparison Tool]] |
| [[Joe Parker]] | 不參與終端決策，供應商事務繞過他 |
| 獨立 Gap Log 頁 | 改為就地三態渲染 |
| 商務條款、價格、合約 | 不在本交付物範圍 |
| VodafoneThree 側 | 已在 [[SCQA O5 - Client Power Map]]，本次不動 |

---

## 🕳 交付前必補的資料缺口

> Gap Log 不進交付物，所以這些必須在 8/3 前補完，或以「未知」狀態誠實渲染。

- [ ] [[Mark Williams (Bristish)]] — 全欄最薄，Joe Parker 出局後他是最空的一個
- [ ] [[Dennis Lui]] — 生日／年紀（不在已知生日名單內）
- [ ] [[Agostino Ruberto]] — 年資矛盾：2001 入職推算應近 25 年，個人履歷文件寫「近 15 年」，同一份文件內兩個數字對不上
- [ ] [[Marlene Fantini]] — 量能承諾回饋仍未回（2026-06-16 程哥會面後等到現在）＝**未知，不是支持**
- [ ] 五人照片來源 — 🚫 **只用公司官方 IR／新聞稿照片並標註來源**；查不到官方照的用姓名縮寫圓牌代替，**不抓社群平台頭像**（GDPR：處理的是英國／義大利籍自然人個資，且此模板將複製到多個客戶）
---

## 📚 Materials

- [[27-7-2026 SCQA Transcript]]（五塊規格的原始出處）
- [[20-7-2026 SCQA Transcript]]
- [[SCQA O5 - Client Power Map]] ＋ [[和记集团&VDF3 客户权利地图2026.07.pdf]]
- [[SCQA O2 - Org-to-Customer Relationship Map]]
- 《2026年3月和記集團客戶MWC接待策劃報告 V9》（華為機密，申請人丁程／審核人曾黎）— **目前最紮實的一手來源**
- [[Huawei_Strategic_Key_Account_Relationship_Mapping_v1 (15-7-2026)]]
- [[5T Group Handover - Brief, Terminology & Summary Format]]（分工 glossary，與 7/27 說法衝突）

---

## 7 問題定義（本交付物切片 · 完整表見 [[3-8-2026 SCQA Prep]]）

| #   | 問題        | 本交付物的答案                                                                                        |
| --- | --------- | ---------------------------------------------------------------------------------------------- |
| 1   | 基本要解決的問題  | 主管臨時要了解和記，我們有沒有一張紙能讓他看清？（底層：**團隊沒有常設的客戶關係認知層**，每次有人接手都從零重建）                                    |
| 2   | 情境與背景     | 7/20 交辦梳理 → 7/27 口頭回報 → 程哥判定「資訊大部分都有，缺的是**形式**」→ re-scoped 成 per-person presentation           |
| 3   | 決策者與利害關係人 | 決策：程哥（驗收）／真正使用者：Kevin（八月見 Dennis）／資訊源：Selina、子義／被寫的人：Dennis、Francesco、Agostino、Marlene、Mark    |
| 4   | 成功標準      | 五張卡 × 四塊（未知就地標示）＋ 組織圖（＝第⑤塊匯報線）＋ 治理節奏表 ＋ 關係面競爭位置；②必須是具名決策標準；會議行為指標 ≥ 85 / 100                   |
| 5   | 解決方案範疇    | H3G IOD 終端決策鏈的**常數層**：人 ＋ 關係 ＋ 組織線 ＋ 治理節奏。不含變數（ask／當期議程／next steps）、不含產品面競品（→ O7）、不含商務條款       |
| 6   | 限制條件      | 7 天（7/27→8/3）· Selina 圖不可翻拍 · 生日愛好家庭永不外流 · 照片須用官方來源（GDPR）· 需 Selina 一場對話                       |
| 7   | 關鍵洞察來源    | 《MWC接待策劃報告 V9》· Selina（最高客戶接觸）· 程哥本人 · 子義 7/10 交接 · organization chart · O5 Power Map · 客戶本人對話 |
