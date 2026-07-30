---
type: contact
category: internal
name: Dongmiao
employee_id:
aka: 董淼(拼法未證實)
org: Huawei CBG — Amazon 渠道側 / 電商團隊
role: Amazon 渠道對口(offer、報價單、客戶 PO、站內資源位、聯合營銷)
location:
languages: Mandarin
email:
relationship:
status: leaving
last_contact:
tags:
  - contact
---
# Dongmiao

## At a glance
- **Role:** **Amazon 渠道側對口。** 全名與工號未確認(WeLink 帳號 `Dongmiao`,ASR 一律拼作「董淼」——兩者拼音一致,互相佐證,但漢字未經本人確認)。職能從兩場會的實際行為可確定:與 Amazon 談 **offer 與量**、發**報價單**、追**客戶 PO 回傳**、爭取**站內資源位**(BTS email / category banner / 會場 ASIN 格子 / 輪播)、給**聯合營銷**資源、承接 offer 執行錯誤與下架問題。
- **⚠ 即將離職。** 接任者已被拉進群但尚未發言([[Amazon Back to School Promotion Planning Meeting Transcript Part 2]] 48:42–49:00)。[[Yan Li 00504988|李哥]] 已交代 [[Zhang Xuan 00942107|張炫]] 與 [[Qixuan Wang wx1252689|齊軒]] 盯緊新人、溝通頻繁一點。
- **What they care about / their stake:** 站內資源位額度的分配(IoT 與平板共用同一批,路由要跟平板搶位);offer 與客戶下單量。
- **How to work with them:** 新品上市時,offer 定制、報價單發放、客戶回 PO、聯合營銷四件事都走這條線——**齊軒明說這些不用 Kess 自己做,Kess 只要「去跟一下、問問是不是都在進行中」**([[Amazon Handover Meeting Transcript Part 3]] 01:00:55–01:01:28)。他的團隊有群,Kess 待被拉入。

## Background
職能與離職事實出自 2026-07-29 / 07-30 兩場會與 2026-07-30 的 1:1 交接,可直接引用。**全名漢字、工號、以及與 [[Zhang Xuan 00942107|張炫]] 的匯報關係仍未確認**——[[Amazon Handover Prep]] 已把這一項列為待關閉的交接缺口,[[Amazon Handover Meeting Transcript Part 2]] 的 Open questions 亦然。

**接手風險:** Kess 接 router 品類的同一週,渠道側對口正在換人。這條線的知識不會自然移交,建議在董淼離開前主動要一次交接(至少:資源位申請的時間點與窗口、報價單/PO 的實際流程、聯合營銷的預算談法)。

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
