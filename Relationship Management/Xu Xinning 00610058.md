---
type: contact
category: internal
name: Xu Xinning
employee_id: "00610058"
aka: 徐欣寧(漢字未證實)
org: Huawei CBG — Amazon 渠道側 / 電商團隊(承 [[Dongmiao|董淼]] 的位置,組織歸屬待證)
role: Amazon 渠道對口(offer 定制、報價單、客戶 PO 回傳、站內資源位、聯合營銷)— 繼任中
location:
languages: Mandarin
email:
relationship: 1
decision_rights:
incentive:
default_stance:
unlocks:
escalation:
status: active
last_contact:
tags:
  - contact
---
# Xu Xinning · 00610058

## At a glance
- **Role:** **[[Dongmiao|董淼]](00576863)的接任者** — 接手 Amazon 渠道側對口。已確認事實只有兩件:她的姓名拼寫與工號、以及她接董淼的位置(2026-08-25 Kess 確認)。**其餘全部是從董淼的職能推斷,尚未由她本人或任何會議證實。**
- **繼承的職能範圍(待她確認):** 與 Amazon 談 offer 與量、發報價單、追客戶 PO 回傳、爭取站內資源位(BTS email / category banner / 會場 ASIN 格子 / 輪播)、給聯合營銷資源、承接 offer 執行錯誤與下架問題。
- **How to work with them:** 新品上市時,offer 定制、報價單發放、客戶回 PO、聯合營銷四件事都走這條線。[[Qixuan Wang wx1252689|齊軒]] 明說這些不用 Kess 自己做,Kess 只要「去跟一下、問問是不是都在進行中」([[Amazon Handover Meeting Transcript Part 3]] 01:00:55–01:01:28)。
- **⚠ 這是新關係,沒有歷史可依。** [[Yan Li 00504988|李哥]] 已交代 [[Zhang Xuan 00942107|張炫]] 與 [[Qixuan Wang wx1252689|齊軒]] **盯緊新人、溝通頻繁一點**([[Amazon Back to School Promotion Planning Meeting Transcript Part 2]] 48:42–49:00)。Kess 同樣適用。

## Stakeholder read
- **Decides:** 未知 — 需確認她是否擁有董淼那層的資源位額度分配與 offer 談判權,還是要往上請示
- **Only influences:** 未知
- **Measured on:** 未知(董淼那條線是站內資源位分配 + offer 與客戶下單量)
- **Default stance:** 未知 — [[Ziyi Zhang 84434577|Ziyi]] 2026-08-04 明說「我不知道新來接他的人會是什麼風格」([[Amazon MBB Pricing Meeting Transcript]] 17:17)
- **What gets a yes:** 未知
- **Escalates to:** 未知
- **Observed pattern:** <!-- append-only, dated one-liners from real interactions -->
  - 2026-08-25 身分確認:姓名 Xu Xinning、工號 00610058、接 [[Dongmiao|董淼]](00576863)的位置。尚未有直接互動記錄。

### Balls currently in their court
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Due", nudged AS "Last nudged"
FROM #task
WHERE contains(waiting_on, this.file.link) AND status != "done"
SORT nudged ASC
```

## Background
董淼**五月就提了離職、八月初才確定**,[[Ziyi Zhang 84434577|Ziyi]] 評為「已經很晚了」([[Amazon MBB Pricing Meeting Transcript]] 17:17)。接任者早在 2026-07-30 就被拉進群但全程未發言([[Amazon Back to School Promotion Planning Meeting Transcript Part 2]] 48:42–49:00),8/5 的九月價格對齊會上 WeLink 分軌**仍只有 `Dongmiao` 一個對方標籤,接任者未發言、也可能沒出席**([[Amazon MBB Pricing Meeting Transcript — Kess-Led (8-5-2026)]] 收尾)。**2026-08-25 身分終於確認為 Xu Xinning 00610058。**

**時間風險:** Kess 接 MBB 品類的同一期間,渠道側對口正在換人——兩邊都是新人,這條線的知識不會自然移交。原本「在董淼離開前主動要一次交接」的建議,現在要改成**直接對 Xu Xinning 做一次雙向 onboarding**。

### 待她本人關閉的問題(逐條問,不要一次丟完)
1. 她的品類邊界:只接 MBB,還是同時管耳機/平板/IoT?(董淼是兼管,所以「看不了那麼細」,見 [[Amazon Operations Glossary]] 渠道 GTM 條目)
2. 站內資源位:申請的時間點、窗口、額度怎麼分(IoT 與平板共用同一批,路由要跟平板搶位)
3. 報價單 → 客戶 PO 回傳的實際流程與她的 SLA
4. 聯合營銷預算的談法與她的權限上限
5. 她的主管是誰、什麼事需要往上請示

### ⚠ 待釐清的衝突線索
[[Amazon Hutchison 8-Project Status Handover Meeting Transcript]] 19:21–19:37 記載「董淼的位置交接給 *[不清 — ASR「崔凱莉」]*」。該 ASR 名字與 Xu Xinning **對不上**。可能是 ASR 錯認、可能是中途換了人選、也可能是另一位同時接手的同事。**建議直接向 [[Qixuan Wang wx1252689|齊軒]] 或 Xu Xinning 本人確認渠道側目前到底幾個對口。**

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
