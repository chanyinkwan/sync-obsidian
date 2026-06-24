---
type: reference
status: living
updated: 2026-06-16
hub: "[[Life @Huawei System]]"
tags:
  - reference
  - product-knowledge
---
# Huawei Terminology Cheat-Sheet

> Long-run reference for MBB product knowledge + team jargon. Two jobs: (1) let me follow the Mon/Wed/Fri download in real time, (2) be my standing product-knowledge map for customer conversations.
> **Living note** — add/refine rows whenever something new shows up. 
> Primary sources: [[什麼是WTTx]] · [MBB 红宝书](obsidian://open?vault=Career%20Journey&file=Knowledge%2FSource%2FProduct%20Knowledge%2FMBB%E7%BA%A2%E5%AE%9D%E4%B9%A6.pdf) · [MBB 6F 产品包](obsidian://open?vault=Career%20Journey&file=Knowledge%2FSource%2FProduct%20Knowledge%2FMBB%206F%20%E4%BA%A7%E5%93%81%E5%8C%85202605-0529.pdf)
>  · [[Source Note - Sample Management Knowledge]].

---

## 1. The big picture — where MBB sits

- **MBB = Mobile Broadband.** Our product domain: delivering internet over the cellular network instead of a fixed line.
- **WTTx** = Huawei's name for **wireless home broadband**. (Internally: 4G wireless home broadband = WTTx; 5G = FWA.)
- **FWA = Fixed Wireless Access** = the industry's name for the same idea: a *fixed* device at the customer's home gets internet over the *wireless* network.
- Why it sells: cheaper and faster to deploy than laying fibre (no "last-mile" digging) → fast ROI. It competes with fixed broadband (FTTx/fibre).

---

## 2. MBB product taxonomy (the core map)

MBB splits into two product families by **fixed vs portable**:

| Family | What it is | Sub-lines | Model prefix | Examples |
|---|---|---|---|---|
| **CPE** *(product type)* | **Fixed** wireless router for the home/office. Sits by the window, converts 4G/5G → WiFi + LAN. Mains-powered, bigger antennas. | **5G CPE Pro**, **4G CPE**, indoor / outdoor variants | **H** (5G), **B** (4G) | 5G CPE Pro 5 = **H158**-381; 4G CPE 5 = **B636** |
| **MiFi / Mobile WiFi** | **Portable** pocket hotspot. Battery-powered, carry it anywhere; SIM in, WiFi out. | mobile hotspots | **E** | **E5785** (4G LTE Cat6) |

> **CPE clarified:** in our world "CPE" names a **product type** (the fixed-router family), not a generic term. The acronym origin is *Customer Premise Equipment (客户前置设备)* — the box that "stands in front of" the user's devices and turns the cellular signal into home WiFi. When the team says "CPE" they mean the fixed-router products (5G CPE Pro, 4G CPE), as opposed to MiFi.

---

## 3. Model-code decoder

| Prefix | Family | Read it as |
|---|---|---|
| **E** (E5785) | MiFi / Mobile WiFi | Portable battery hotspot |
| **B** (B636) | 4G CPE | Mains fixed router, 4G |
| **H** (H138 / H155 / H158 / H352) | 5G CPE | Mains fixed router, 5G (higher number ≈ newer/higher tier) |

Number logic: higher ≈ newer / higher tier. Regional suffixes (e.g. E5785**Lh-22c**, H158**-381**) = band/region/variant.

---

## 4. Spec vocabulary (so you can read a datasheet)

| Term                         | Plain meaning                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| **MIMO** (2×2, 4×4)          | Multiple antennas both ends → more capacity at same spectrum. 4×4 > 2×2.                |
| **QAM** (64/256QAM)          | Modulation density — higher QAM packs more bits per signal → faster.                    |
| **CA** (Carrier Aggregation) | Bond multiple frequency bands together for higher peak speed.                           |
| **Cat** (LTE Cat6/13/18…)    | 4G speed/capability class — higher Cat = faster.                                        |
| **Sub-6 vs mmWave**          | 5G band types: Sub-6GHz (range, e.g. C-band ~3.5G) vs mmWave (huge speed, short range). |
| **FDD vs TDD**               | Duplex modes: FDD = paired up/down bands (high freq); TDD = time-shared (low freq).     |
| **Balong (巴龙)**              | Huawei's own modem chipset (e.g. Balong V750). Rivals: Qualcomm, MTK, Unisoc/展锐, ASR.   |
| **eSIM / 4FF**               | Embedded SIM / the nano-SIM physical form factor.                                       |

---

## 5. Internal codes heard (confirm + fill)

| Code | Best current understanding | Status | Confirm with |
|---|---|---|---|
| **5785** | MiFi **E5785** (4G LTE Cat6 pocket hotspot); hit **Amazon BSR top 30** | public, confirmed | — |
| **H23** | New MBB launch on Mall + Amazon ("overall MBB launch"); H-prefix → likely a 5G CPE | internal, unverified | Ziyi |
| **Super E5** | New MBB hotspot (E-series → MiFi lineage); launch plan in draft | internal, unverified | Ding Cheng |
| **173 產品** | Product on tender — tech bid passed, now commercial bid; group-level; Italy/Austria RFQ pending | internal, unverified | Ding Cheng |
| _add new…_ |  |  |  |

> Atomic-note tie-in: any product you must *explain to a customer* → spin out an [[Atomic Note Template]] (title = a claim, e.g. "4G CPE 5 (B636) targets price-sensitive markets vs the 5G CPE Pro flagship").

---

## 6. Business & team jargon

| Term             | Means                                | In our context                                                    |
| ---------------- | ------------------------------------ | ----------------------------------------------------------------- |
| **RFQ**          | Request For Quote                    | Customer formally asks for pricing (Italy/Austria pending)        |
| **BSR**          | Best Sellers Rank (Amazon)           | Sales rank; "top 30" = strong                                     |
| **大T**           | Big-T = **Deutsche Telekom**         | Major telco customer                                              |
| **合計**           | **Hutchison** (和記黃埔 / 3 Group)       | Major telco customer                                              |
| **機關 / 總部**      | HQ / head-office functions           | Where payments, RFQ, sample quota are approved — frequent blocker |
| **生態 (交流)**      | Ecosystem (exchange)                 | Cross-team / partner / tech ecosystem work                        |
| **DCB**          | Direct Carrier Billing (likely)      | Payment matter chased with HQ — *confirm*                         |
| **子網 / C 端**     | Subnet / Consumer-end                | Network scope / consumer market (vs B-end enterprise)             |
| **IFA**          | Berlin consumer-electronics show     | Customers may attend instead of our launch event                  |
| **發布會**          | Product launch event                 | Sept 2 (clashes with IFA Sep 4-8)                                 |
| **核銷 / 盤點 / 掛賬** | Write-off / stocktake / registration | See [[Source Note - Sample Management Knowledge]]                 |

---

## 7. People

People now live as individual CRM-style contact notes — see **[[Huawei Key Contacts]]** for the dashboard (background, last meeting, open actions per person):

---

## 8. Maintenance rule
After every download: if a term made you pause, add a row **before end of day**. When this sheet stops growing, the comprehension gap is closed.