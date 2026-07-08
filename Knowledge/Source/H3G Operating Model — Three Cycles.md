---
type: reference
status: active
date: 2026-07-06
hub: "[[Life @Huawei System]]"
tags:
  - reference
  - product-knowledge
projects:
  - "[[8-7-2026 SCQA Meeting]]"
---
[[8-7-2026 SCQA Prep]]
# H3G Operating Model — Three Cycles

> My working map of the account's three cycles, drawn from our notes/meetings. Use for the SCQA "Product / Operation understanding". ⚠ = my onboarding read — verify with manager/Ziyi ("True or Not").
> Sources: [[16-6-2026 Meeting - Sample Management Practical Training]] · [[Source Note - Sample Management Knowledge]] · [[5T Group Handover - Brief, Terminology & Summary Format]] · [[FWA Business Development V1 (22-6-2026)]] · [[2-7-2026 Product Roadmap Meeting Notes]]

---

## 1 · H3G Operation Cycle（運營循環 — the day-to-day rhythm）
> The recurring loop that runs the account. **My pain point lives here**: the `H→H→Record→H→H` relay between Execute and Reco

```mermaid
flowchart LR
  D["Download / Team Sync<br/>Mon·Wed·Fri"] --> A["Daily action items<br/>by account"]
  A --> EX{{"Execute streams"}}
  EX --> P["Pricing · Bid<br/>报价 · 答标"]
  EX --> S["Sample ops<br/>樣機 → Cycle 2"]
  EX --> H["Homologation · Volume<br/>准入 · 圈量"]
  EX --> G["e-Commerce GTM<br/>Amazon 上市"]
  EX --> W["Workshops · HQ visits<br/>高访"]
  P --> R["Record / Report<br/>晨會待辦 · 紀要"]
  S --> R
  H --> R
  G --> R
  W --> R
  R --> D
  RM["Roadmap / Pricing mtg<br/>机关 · 碧斐 · ATP · H175/H176"] -.->|feeds| P
```

---

## 2 · Sample Management Cycle / Components（樣機管理 — my core mandate）
> GTM sample lifecycle. Ends only at **核销** (write-off) or **续借/延期**; the golden rule is **帳實一致 (CIAG)**.

```mermaid
flowchart TD
  subgraph Types["Sample types — GTM 樣機"]
    T2["Test 測試<br/>customer test · 12mo · preferred"]
    T1["Seeding 種子<br/>KOL/VIP · 6mo · usu. non-physical"]
    T3["Expansion 拓展<br/>display only · must physical write-off"]
  end
  F["Forecast 报 forecast<br/>shared table · per 林穎署"] --> AP["Apply in TSMP<br/>掛賬人 · type · 发货 PO/委托"]
  Types -.-> AP
  AP --> AV["Approval chain<br/>誠哥 → 林穎署 → 财经 → 机关处理人"]
  AV --> SH["Ship<br/>1–2 wks · UK customs · Kaiya"]
  SH --> IN["入庫 + tracking table<br/>SN vlookup · 帳實一致 CIAG"]
  IN --> DM["Daily mgmt<br/>cabinet in/out · key · self-use"]
  DM --> CU["Give to customer<br/>二次分配 · sign receipt"]
  DM --> EXP["Expiry mgmt<br/>monthly · 1-mo ahead · 掛帳週期"]
  CU --> WO["核销 Write-off<br/>physical RTC / non-physical / compensation"]
  EXP --> WO
  EXP --> EXT["续借 / 延期 Extend"]
  IN --> QS["Quarterly stocktake<br/>→ TSMP via 誠哥"]
```

---

## 3 · Sales Cycle（銷售循環 — deal flow, strategic layer feeds it）
> Commercial flow from customer need → launch. The **Strategic cycle** (FWA BD roadmap) sits above and feeds selection/pricing — which is why "Strategic could be part of Sales".

```mermaid
flowchart LR
  subgraph Strat["Strategic layer — FWA BD roadmap"]
    ST["Diagnosis → Positioning →<br/>Cooperation Scenarios → 2-Yr Plan"]
  end
  RQ["Requirement / RFQ<br/>Selina aggregates"] --> SEL["Product selection<br/>选型会 · portfolio"]
  SEL --> PR["Quotation / Pricing<br/>报价 · 碧斐 cost · ATP→PO/备货→EPD"]
  PR --> BID["Bid / Answer<br/>答标 · 标书"]
  BID --> HOM["Homologation<br/>准入 · 集团准入 · TA"]
  HOM --> VOL["Volume lock<br/>圈量"]
  VOL --> PROD["Production sched<br/>排产"]
  PROD --> LN["Launch / GTM<br/>Amazon · marketplace 上市"]
  LN --> POST["Post-launch perf<br/>Amazon PSI/SO/SI · Prime Day"]
  ST -.->|feeds| SEL
  ST -.-> PR
```

---

## How the three connect (one line)
- **Operation** is the *cadence* (sync → execute → record) that keeps everything moving; **Sample** and **Sales** are two of the streams it executes and reports on.
- **Sample** is where I own the full lifecycle today (heavy/ops); **Sales** is where I want to grow, fed by the **Strategic** roadmap layer.

> ⚠ Verify with manager/Ziyi: the **Sales-cycle ordering** (选型会 vs 报价 vs 准入 sequence) and whether the **Operation streams** are the right set — these are my reconstruction, ideal "True or Not?" material for Wed.
