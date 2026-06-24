---
type: contact
category: customer          # internal | customer | hq | partner
name: Dennis
employee_id:
aka:
org: ex-Vodafone (retired) · 現為 Huawei 5T 電信帳戶兼職顧問（Vodafone 以外）
role: 顧問 / 原 Vodafone 重大決策者
location:
languages: English
email:
relationship: 1     # 1-5 (closeness / trust) — 新接觸
status: active
last_contact: 2026-06-24    # 程哥於 24-6 晨會首次提及（我尚未直接接觸）
tags:
  - contact
---
# Dennis

## At a glance
- **Role:** 新接觸的重要客戶 / 顧問。原 **Vodafone** 重大決策者,退休後以**兼職顧問**身分,負責 Huawei **其餘 5T 電信帳戶（Vodafone 以外）**。
- **What they care about / their stake:** 手機**明年回歸歐洲**的決策;想先了解我們在**香港市場**的表現。與他相關的主要是 **[[FWA Business Development|FWA BD]] 專案**。對 **Aurora Store** 不熟。
- **How to work with them:** 給他的材料要**精簡成 1–2 頁英文**（他不深入技術細節）;目前主要由 **[[Ding Cheng 00611102]]（程哥）** 對接;手機回歐決策的關鍵影響者,值得長期經營。

## Background
- 2026-06-24 晨會由 [[Ding Cheng 00611102]]（程哥）首次提及 —— 程哥當天見了 Dennis 並談了三件待跟進的事。
- 已從 Vodafone 退休的高層決策者,現以**兼職顧問**身分影響 Huawei 5T（Vodafone 以外）電信帳戶。
- 我方需為他準備的三線：①**香港手機表現同步** ②**回歐準入測試樣機**（最新 [[Pura 90]] + Aurora Store 體驗）③**Aurora Store 一頁式英文材料**。

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
