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
# Amazon take over

## Goal / my scope
Take over **IoT category GTM for router** on the Amazon channel (西歐五國: 德/法/義/西/英) from [[Ziyi Zhang 84434577]] before she leaves Huawei. [[Qixuan Wang wx1252689|齊軒]] takes MBB in parallel; router is mine.

Category GTM owns the outcome, not the execution — the job is coordinating and pushing other functions (機關/地區部 GTM, 渠道 GTM, delivery) to land it, not doing the work yourself. Five work areas:
- **路標管理** — yearly new-product cadence + SKU-level revenue/shipment forecast (set Nov–Dec).
- **定價** — pricing and profit-rate calc, decided jointly with [[Zhang Xuan 00942107|張炫]] (機關 GTM for router).
- **選品** — what goes on Amazon; new-form-factor asks go through 張炫 to 機關 (can't push it alone).
- **廣告** — feeds KSP + competitor list to per-country traffic managers.
- **運營** — weekly price + sales + days-of-stock forecast table; the core working sheet.

Sits inside the wider [[Huawei Development]] SCQA cadence with [[Manager]]; this project tracks the Amazon-specific handover and ongoing ops.
Tracking task: [[Amazon Handover]].


## Key contact
- [[Zhang Xuan 00942107]] (張炫) — 地區部 GTM for router; pricing and new-SKU decisions go through him.
- [[Ding Cheng 00611102 (程哥or 丁程)]] (程哥) — account lead, Kess's direct manager.
- Amazon 渠道側: Eric (decision), Tony (execution/delivery), per-country traffic managers — full org chart in [[5T Group Handover - Brief, Terminology & Summary Format]] §Amazon IoT 品類 GTM.


## Tasks in this project (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## Done
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```
