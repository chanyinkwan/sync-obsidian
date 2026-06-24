---
type: meeting-note
meeting_type: training
date: 2026-06-16
account_or_project: "[[Sample Management Ops]]"
attendees: "[[Ziyi Zhang 84434577]]"
status: processed
hub: "[[Life @Huawei System]]"
tags:
  - meeting
---
# Sample Management Practical Training — 16-6-2026

> One-line purpose: Training / handover meeting — Ziyi walks me through the end-to-end GTM sample management operation that I am taking over (1-month shadowing period).

## 1. Attendees & Roles
| Name                    | Org / Role       | Their stake in this meeting                  |
| ----------------------- | ---------------- | -------------------------------------------- |
| [[Ziyi Zhang 84434577]] | E-Commerce / GTM Ops | Mentor, handing over sample management tasks |
| Kessog Chan (me)        | Portfolio Solution & Commercial Sales | Incoming owner of sample ops |

## 2. Agenda / Topics
- Sample taxonomy: GTM vs marketing; the 3 GTM sub-types (Seeding / Test / Expansion)
- Sample version stages (V3 → VN1 → VN2 → mass-production) and which to request
- Application workflow: forecast → apply in system → multi-step approval
- Shipping, receiving & inbound (入庫)
- Daily tracker management: system export, VLOOKUP, physical count, cabinet key
- Write-off (核銷) & transfer (轉賬); receipt/signature follow-up
- Expiry management (到期 / 延期) for UK and Italy
- Quarterly stocktake upload; self-use policy

## 3. Discussion Notes (raw capture)
[[16-6-2026 Meeting - Sample Management Practical Training Transcript]]

**Sample taxonomy**
- Department only uses **GTM samples** (not marketing samples).
- GTM has 3 sub-types:
  - **Seeding (種子):** for customer trial. Can be given to customer. Validity ~6 months. Approval more complex.
  - **Test (測試):** customer evaluates before buying. Can be given. Validity 1 year. Allows physical OR non-physical write-off. Simpler approval → **default choice unless special case** (e.g. tablets, obviously not "for testing").
  - **Expansion (拓展):** early-stage demo only. **Show but never give** to customer. Must be **physically written off** — the unit must always physically remain with us.

**Version stages**
- **V3** earliest, limited function, expansion only, request very few.
- **VN1** near-final; for **IOT** request VN1 (often already the last version before mass production).
- **VN2 / mass-production** for **wearables & earphones**; always request the newest = most stable.

**Application workflow**
- **Lin Yingshu (林穎署)** = sample administrator (機關) for all 大T samples; in the WeChat groups; first point of contact for any question.
- She announces upcoming samples per product/month → we report a **forecast** (need not be precise; ~2-3 units of the last version) in her shared spreadsheet.
- She produces samples → announces "ready, go apply."
- In system: always select **GTM sample**; **account holder (掛賬人)** = by destination — UK → 程哥, Italy → Michele Cappabianca 00473733.
- Purpose = Test (default); reason = "客戶測試"; **admission owner (准入負責人) = always Michele Cappabianca 00473733**.
- Shipping: **PO 發貨** (normal) vs **委託發貨** (entrusted, urgent/complex only).
- Address: UK = "Huawei Technology Inc" (the shortest one, W2 postcode); Italy address provided separately. Receiver = Ziyi or add yourself.
- **Budget field: ignore** (system calc is unreliable; control is flexible).
- Approval chain: 程哥 → Lin's manager → Finance (財經) → status "等待發貨" → allocation handler (處理人 at 機關) → supply chain → warehouse packs/ships → uploads logistics + tracker number.

**Timing & coordination (key Q&A)**
- Can apply **immediately** after the "ready" announcement. **No hard deadline**, BUT quota can be grabbed by other countries → apply fast.
- If quota runs out: a **regional allocation person** (one per category) can reallocate from countries that dropped out, or add a new production batch — but **you must coordinate and chase (催) her**. Much of the job is chasing the flow.

**Receiving & inbound**
- Logistics 1-2 weeks to UK + customs; arrives at reception / Kaiya → desk.
- **Inbound (入庫):** only account holder (程哥 /Michele Cappabianca 00473733) can do it in-system; usually auto-inbounds after a while. If a unit arrives before auto-inbound, **note it manually in the tracker**.

**Daily tracker management**
- Export: 查詢統計 → 樣機掛賬信息查詢 → input "GTM 樣機" → 導出掛賬 SN 清單. Re-export every **2 weeks–1 month**.
- Export has **no remarks column** → use **VLOOKUP on SN** (unique serial number) to carry your remarks into each new export.
- Do a **full physical count (盤點)** at handover; thereafter log **every in/out by SN, manually**.
- **Cabinet key: yours alone.** Don't take home (needed when you're on leave). Keep hidden at desk. Internal rule: anyone taking/returning a unit must announce in the group (creates a record).
- Count by reading the **SN on the box** (watches/IOT have it; tiny earphones may not).

**Write-off (核銷) & transfer (轉賬)**
- When customer keeps a sample → they sign the **non-physical write-off document** (template Ziyi sent). Fill model/color/SN; company name usually **HN3 or VF3**. Print (need print card), 程哥/Selina gets signature → scan → submit write-off in system.
- Daily uses two write-off paths: **renewal/extension (續借)** and **transfer (轉賬)**; purpose-change (用途變更) is rare.
- **Transfer example:** unit applied to UK, then Italy needs it → transferred to Michele Cappabianca 00473733 (test whether his account is fixed).
- **Physical write-off:** fill form, coordinate with a designated colleague (Ziyi to give 工號); **two people must witness** the device being physically destroyed (cut with pliers); upload receipt photos.

**Expiry management**
- Each month, check what expires **next month** (dates in system); handle **1 month in advance**.
- Options: write off OR apply extension (延期). **Must never let it expire** — expiry triggers an internal notification (serious).
- Applies to both UK (程哥) and Italy (Michele Cappabianca 00473733). For **Italy you only handle application & extension** — chase Michele Cappabianca 00473733 (very busy, replies delayed).

**Status reporting & self-use**
- **Quarterly stocktake** upload to system (Ziyi will train next month); write on quarterly list → pass to 程哥  → he uploads. Rarely, an inspector flies over (almost never).
- **Self-use:** may use spare/older samples for learning/trial — ask 程哥 or Ziyi first; newest reserved for customers; ownership not yours, must return; mark in tracker.

## 4. Decisions / Conventions Established
| Decision | Rationale | Decided by |
|---|---|---|
| Default to **Test** samples | Longer validity (1y), flexible write-off, simpler approval | Ziyi |
| IOT → request **VN1**; wearables/earphones → **VN2/mass-prod** | Newest = most stable; near-final function | Ziyi |
| Normal shipping = **PO 發貨**; 委託發貨 only if urgent | Standard, lower complexity | Ziyi |
| Admission owner field = **always Michele Cappabianca 00473733** | Standing convention | Ziyi |
| **I solely hold the cabinet key**, kept at desk, not home | Continuity when others need access | Ziyi |
| For **Italy (Michele Cappabianca 00473733): I manage only application & extension** | Rest handled by Italy side | Ziyi |

## 5. Action Items
| #   | Action                                                                                           | Owner     | Due                 | Status |
| --- | ------------------------------------------------------------------------------------------------ | --------- | ------------------- | ------ |
| 1   | Get a **print card** from Kaiya (for write-off documents)                                        | Me        | This week           | [ ]    |
| 2   | **Full physical count (盤點)** of cabinet vs tracker at handover                                   | Me        | At handover         | [ ]    |
| 3   | Set up/maintain **sample tracker** (export SN list + VLOOKUP remarks)                            | Me        | Ongoing (2wk–1mo)   | [ ]    |
| 4   | Follow up Selina/程哥 for **signatures on 5 units** out without receipts                           | Me        | Next customer visit | [ ]    |
| 5   | **Test account transfer (轉賬)** to Michele Cappabianca 00473733 (check his account is fixed)      | Me        | This week           | [ ]    |
| 6   | **Monthly:** check next-month expiries (UK + Italy); chase Michele Cappabianca 00473733 on Italy | Me        | Monthly             | [ ]    |
| 7   | **Save** the non-physical write-off template document                                            | Me        | This week           | [ ]    |
| 8   | **Quarterly stocktake** upload — shadow Ziyi                                                     | Me / Ziyi | Next month          | [ ]    |
| 9   | Investigate the **lost sample** marked "?" (locate or arrange signature)                         | Me        | Open                | [ ]    |

## 6. Stakeholder Intel
| Person                              | Position / Concern                                                  | Political note                                                         | Link                    |     |
| ------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------- | --- |
| Ziyi Zhang                          | Mentor, GTM Ops; 1-month handover                                   | Your day-to-day trainer; default approver for self-use                 | [[Ziyi Zhang 84434577]] |     |
| Lin Yingshu (林穎署)                   | Sample administrator (機關) for all 大T samples | First point of contact; controls forecast & production | [[Lin Yingshu 林穎署]] |
| Michele Cappabianca 00473733        | Italy tech colleague; account holder; admission owner | Very busy, replies delayed, keep chasing; account had issues | [[Michele Cappabianca 00473733]] |
| Ding Cheng (程哥) 00611102            | UK account holder; main responsibility for receipts/write-off | Cares most about getting signed receipts back | [[Ding Cheng 00611102 (程哥)]] |
| Huang Yi (Selina) 84411269          | Account Manager, customer-facing | Hands documents to customers for signature | [[Huang Yi 84411269 (Selina)]] |
| Regional allocation person          | Per-category quota allocator | Coordinate/chase for extra units when quota runs out | — |
| Kaidiliya Ainiwaer (Kaiya) 84425233 | Holds print card; reception handling | Logistics on-site contact | [[Kaidiliya Ainiwaer 84425233 (Kaiya)]] |

> Contacts: [[Lin Yingshu 林穎署]] · [[Michele Cappabianca 00473733]] · [[Ding Cheng 00611102 (程哥)]] · [[Huang Yi 84411269 (Selina)]] · [[Kaidiliya Ainiwaer 84425233 (Kaiya)]]

## 7. Pain Points & Solution Seeds  `#scqa-feed`
- **Observed pain point:** Sample tracking is heavily **manual and memory-dependent**. The system export has no remarks column (forced VLOOKUP merge), every cabinet in/out is logged by hand, receipts arrive late, and expiry/lost-unit awareness relies on individual memory + WeChat announcements. When volume scales this breaks — and expiry/loss carry **compliance + cost (賠錢) consequences** (internal notification on expiry; an already-lost unit inherited from a prior owner).
- **Possible solution seed:** A **lightweight, low-code tracker** that (a) persists a remarks layer keyed on SN across re-exports, (b) **auto-flags samples expiring next month** (UK + Italy), and (c) generates a **receipt-follow-up reminder list** for unsigned units. Directly attacks the "you forget if you don't track" failure mode — and doubles as my Python/automation skill-building (Track A).
- **Worth raising with manager?** [x] yes → carry to [[Weekly SCQA Reflection Template]]. Frame as **compliance-by-design + margin protection**, not "a cool tool."

## 8. Operations Training Log (early-phase record)
- **What I learned about how it works:** The system is just data entry; the **real job is coordination and chasing (催)** across a distributed authority chain — administrator (機關), regional allocator, account holders (程哥/Michele Cappabianca 00473733), finance, supply chain, logistics. Compliance is real: expiry → internal report; physical write-off needs a 2-person witness.
- **What I would do differently next time:** Stand up the tracker + expiry alerts **before** taking custody, so I never inherit an untraceable "?" unit like the one in the current list.

## 9. Links
- Hub: [[Life @Huawei System]]
- Related: [[Source Note - Sample Management Knowledge]] · [[Sample Management Ops]]
