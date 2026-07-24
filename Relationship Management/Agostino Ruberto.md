---
type: contact
category: customer
name: Agostino Ruberto
employee_id:
aka: Agos
org: Hutchison IOD
role: Global Technical Director（技術負責人，與 Francesco Zampini 同層，向 Joe Parker 匯報）
location: Italy
languages: English, Italian
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Agostino Ruberto (Agos)

> ✅ 2026-07-22 更正：先前記為「Marlene Fantini 之下」的匯報線，經《2026年3月和記集團客戶MWC接待策劃報告 V9》正式組織圖與文字核實為誤——他現任 **Global Technical Director**，直接向 [[Joe Parker]] 匯報，與 [[Francesco Zampini]] 同層。原始文件：「Agostino 是終端技術負責人，向 Joe Parker 匯報，認可華為的技術和解決方案能力。」7/10 交接培訓「在 Marlene 之下」的說法應為舊版或誤記，予以更正而非並存。

## At a glance
- **Role:** Global Technical Director，負責和記集團技術相關業務全貌——供應商測試需求、集團自測試流程、與所有芯片廠商溝通、集團新技術在子網的落地。集團選型准入的重要決策人，**具高度建議權與一票否決權**。與 [[Francesco Zampini]] 同層，均向 [[Joe Parker]] 匯報；意大利據點。
- **What they care about / their stake:** 手機/手錶品類選型；供應商測試結果與產品規格審查。
- **How to work with them:** 目前對接人記錄為 **[[Huang Yi 84411269 (Selina)|Selina]]**——但策略地圖文件列的 Huawei Sponsor 是 [[Ding Cheng 00611102 (程哥or 丁程)]]，這一項尚未解決，仍是開放矛盾（見下方 Framing note），需口頭向程哥／Ziyi 確認。他是我們**最多直接接觸到**的 IOD 層級（其餘技術方向的人 [[Michele Cappabianca 00473733|Michele]] 全包）。

## Background
2001 年加入和記意大利擔任技術主管，職涯起點就在和記體系內，無「和記前」資歷。2017 年轉入 IOD 部門擔任 CTO（後續頭銜演變為 Global Technical Director）。⚠ 個人履歷文件寫「在和記工作將近 15 年」，但依 2001 年入職推算應為近 25 年（2026 減 2001）——同一份文件內兩個數字對不上，可能是舊版文字沿用未更新，年資敘述以 2001 年入職年份（有西元年可查）為準，需向程哥／Ziyi 口頭確認。

2026-07 為 Ziyi 赴意大利送樣機的對象。對我司態度：支持，認可華為技術與產品能力。

## Strategic account intel (Relationship Map · 15-7-2026 + MWC接待策劃報告 · 2026-07-22)
> Source: [[Huawei_Strategic_Key_Account_Relationship_Mapping_v1 (15-7-2026)]] (§1.4 / §2.1.4 / §2.3.4 / §4)；《2026年3月和記集團客戶MWC接待策劃報告 V9》（華為機密，申請人丁程／審核人曾黎）。
- **Position:** Global Technical Director, CKH-IOD（策略地圖文件寫 CTO，為同一角色的舊頭銜——2017 年任職時稱 CTO，現稱 Global Technical Director）。
- **Influence level:** High. · **Huawei relationship status:** Strong. · **Huawei sponsor:** [[Ding Cheng 00611102 (程哥or 丁程)]]（⚠ 與「Selina 對接」的記錄衝突，見下方 Framing note）。
- **Role in decision chain (L3):** RFI review, test-result assessment (Decision Maker, Champion) — 新來源顯示他實際持有**一票否決權**，應視為比單純 Champion 更重的決策角色。
- **Governance forum:** chairs the **Technology Board** (1–2/month; product spec, ongoing project test progress & results assessment; **Huawei access ~90%**).
- **接觸史（節錄）：** 2025/10 訪問深圳總部；2025/6 與曾黎總交流確定回復 XG 項目合作；2025/3 巴展隨 Dennis 參加與何總交流；2024/10 訪問深圳總部；2024/2 隨 Dennis 參加與何總交流。
- **Ranking (§4):** Top-3 decision-maker **#3** for H3G.
- ⚠ *Framing note（仍未解決）：* 匯報線與同層關係已由新一手來源核實（見上方更正）；但「Selina vs 程哥」誰是他的**華為側對接人／Sponsor**，兩份文件仍互相衝突，尚未解決，需在下次 SCQA 會上向程哥當面確認。

## Last meeting / interaction
```dataview
TABLE WITHOUT ID file.link AS "Note", date AS "Date"
FROM #meeting
WHERE contains(file.outlinks, this.file.link)
SORT date DESC
LIMIT 5
```

## Open action items involving them
```dataview
TASK
FROM "Operation Note"
WHERE !completed AND contains(text, this.file.name)
```

## All linked notes (every mention)
```dataview
LIST
WHERE contains(file.outlinks, this.file.link) AND file.name != this.file.name
SORT file.mtime DESC
```
