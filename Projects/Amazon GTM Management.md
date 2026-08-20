---
type: project
status: active
owner: me
stakeholders: ["[[Ziyi Zhang 84434577]]", "[[Qixuan Wang wx1252689]]", "[[Zhang Xuan 00942107]]", "[[Ding Cheng 00611102 (程哥or 丁程)]]"]
domain: Amazon Channel · IoT Category GTM @Huawei (router)
due:
tags:
  - project
---
# Amazon GMT Management

## Goal / my scope
Take over **IoT category GTM for MBB** on the Amazon channel (西歐五國: 德/法/義/西/英) from [[Ziyi Zhang 84434577]] .


Five work areas:

| Work area | Scope                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------- |
| **路標管理**  | Yearly new-product cadence + SKU-level revenue/shipment forecast (set Nov–Dec).                     |
| **定價**    | Pricing and profit-rate calc, decided jointly with [[Zhang Xuan 00942107\|張炫]] (機關 GTM for router). |
| **選品**    | What goes on Amazon; new-form-factor asks go through 張炫 to 機關 (can't push it alone).                |
| **廣告**    | Feeds KSP + competitor list to per-country traffic managers.                                        |
| **運營**    | Weekly price + sales + days-of-stock forecast table; the core working sheet.                        |

Handover stage Tracking task: [[Amazon Handover]].
## Key contact
- [[Zhang Xuan 00942107]] (張炫) — 地區部 GTM for router; pricing and new-SKU decisions go through him.
- [[Ding Cheng 00611102 (程哥or 丁程)]] (程哥) — account lead, Kess's direct manager.
- Amazon 渠道側: Eric (decision), Tony (execution/delivery), per-country traffic managers — full org chart in [[5T Group Handover - Brief, Terminology & Summary Format]] §Amazon IoT 品類 GTM.
- Deng Zhicong 00952885 = Delivery

### Materials
[[Scope of Amazon GTM - MBB Product]]

## Tasks in this project (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

### Relevant Meeting
Routine + operations meetings only (定價對齊、促銷/要貨檢視). Handover transcripts are excluded by design — they live in [[Amazon Handover]].

```dataview
TABLE WITHOUT ID file.link AS "Meeting", date AS "Date", account_or_project AS "Topic"
WHERE type = "meeting-transcript" AND contains(projects, this.file.link)
SORT date DESC
```

## Done
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```
