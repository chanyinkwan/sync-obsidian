---
status: done
priority: high
tags:
  - task
projects:
  - "[[SA Presales Transition]]"
contexts:
  - hub
scheduled: 2026-07-17
due: 2026-07-19
dateCreated: 2026-07-12T12:00:00.000+01:00
dateModified: 2026-07-27T18:00:00.000+01:00
---
# SA 02 - Unfair Advantage Intersection

母任務:[[SA Presales Transition]]
Source: [[how to become a Solution Architect or Presales Consultant]] — 行動2：找出你的「不公平優勢」交集點 (Unfair Advantage Intersection)

**GATE — blocks SA 05 onward.** This task must close before SA 05 (Three-Tier Discovery Question Bank) can start; the persona/domain work downstream depends on the positioning statement below.

Tie-break rule: if torn between two domains, pick the one with the higher requisition count (from SA 01) and move — skills are 80% transferable, a delayed choice costs more than a wrong one.

## Deliverable (what "done" looks like)
成功標準：寫下一句**確定且不帶問號**的定位宣言：「我要主攻的領域是 [領域名稱]，因為它能完美結合我過去在 [你的背景] 的優勢，解決 [特定買方] 的痛點。」

## Capacity slot
Overlay W1.

## Sub-steps
- [x] Draw a two-column table. Left column: past background keywords. Right column: top-3 domains from SA 01.
- [x] Find the intersection that requires the least re-explaining of past experience.
- [x] Apply tie-break rule if two domains are close — **not needed**, rank 1 won outright.
- [x] Write the final 定位宣言 sentence — no question mark allowed.

---

## The two-column table

Left = what you already are, weighted by how often the corpus asked for it (SA 01 §0b moat tally).
Right = the top-3 domains from the 50-JD heatmap.

| Your background (moat) | Reqs asking | | Top-3 domain | Reqs | What it needs that you lack |
|---|---:|---|---|---:|---|
| executive + technical audience communication | 39 | | **`ai-ml-platform`** | **10** | genai-hands-on-literacy, demo-asset ownership |
| cross-functional account governance | 34 | | `fintech-payments` | 6 | core-banking / payments domain depth (years, not weeks) |
| B2B enterprise sales | 29 | | `enterprise-saas` | 6 | product-ecosystem depth (Workday, ServiceNow, Asana — vendor-specific) |
| commercial and pricing deal work | 21 | | | | |
| portfolio solution positioning | 15 | | | | |
| multi-account stakeholder management | 10 | | | | |
| RFx / proposal experience | 10 | | | | |

## Which intersection needs the least re-explaining

The test is not "which domain is biggest" — it is **which domain lets your last five years count as relevant experience instead of a story you have to talk your way out of.**

- **`fintech-payments` (6)** — the barrier is domain depth measured in years. Core banking, loan origination, PCI, travel rule. Nothing in telecom hardware/channel GTM transfers. You would be re-explaining your whole CV. **Reject.**
- **`enterprise-saas` (6)** — the barrier is *vendor-specific* product depth. Workday Extend, ServiceNow, Salesforce ecosystems. Real, learnable, but it is someone else's platform certification treadmill and it does not compound across employers. **Reject.**
- **`ai-ml-platform` (10)** — the barrier is `genai-hands-on-literacy` (20 mentions), which is an **artifact gap, not an experience gap**. It is closable with the things already on the board: SA 08 (demo Loom), SA 09 (whiteboard asset), SA 10 (proof-of-capability artifact). Meanwhile the AI vendors in this corpus are mostly scale-ups selling into enterprises for the first time, and what they visibly cannot do is exactly your moat: navigate enterprise procurement, hold a multi-stakeholder account, and structure commercial terms. **Accept.**

The deciding asymmetry: in fintech and enterprise-saas your background is *overhead to explain*. In AI platform presales it is **the scarce half of the role** — those companies are full of people who can build the demo and empty of people who can land it in a 200-person enterprise.

### Two things arguing against this choice, stated so they are not hidden

1. **`telco-networking` is 2 of 50 (4%).** Your deepest domain has almost no market in this sample. This choice deliberately spends your telecom depth as *credibility* — proof you can hold an enterprise infrastructure conversation — rather than as the domain you claim. If you would rather claim telco, that is defensible, but do it knowing the corpus found two roles.
2. **`ai-ml-platform` also carries the corpus's hardest technical bars** — OutSystems (46) wants hands-on multi-agent orchestration and RAG; Jeen.ai (42) wants MLOps. The 10 reqs are not uniformly reachable. Roughly the commercial-leaning half (Profound, Parloa, the confidential AI SaaS req, Arize) are; the build-heavy half are not, yet.

Neither is enough to overturn a 67% lead at rank 1. Choice stands.

---

## 定位宣言 — GATE 1 CLOSED

> **我要主攻的領域是 AI SaaS / AI 平台的解決方案架構與售前（`ai-ml-platform` presales），因為它能完美結合我過去在企業電信與硬體 portfolio 商業方案銷售、跨職能大客戶治理、以及定價與商務條款設計的優勢，解決 AI 平台廠商「技術做得出來、但打不進企業採購流程與多方關係人決策」的痛點。**

English, for the LinkedIn headline and the first line of every application:

> **I go after Solutions Architect and presales roles at AI platform companies, because enterprise telecom portfolio selling, cross-functional key-account governance, and commercial deal structuring are exactly what AI vendors with strong technology and no enterprise motion are missing.**

No question mark. No hedge. This is the domain until SA 11 or SA 12 produces evidence against it.

## What this unblocks and constrains

- **SA 05 (Discovery Question Bank)** — write the three tiers against an AI platform buyer, not a generic one. Anchor on `technical-discovery` (25) and `solution-architecture-design` (24), the corpus's two top responsibilities.
- **SA 08 / SA 09 / SA 10** — these now have one job: close `genai-hands-on-literacy` (20) and `demo-asset-ownership` (6) with a public artifact. That is the whole gap between you and the commercial half of those 10 reqs.
- **SA 03 / SA 04 (AWS SAA)** — the corpus named zero cloud certs across 50 requisitions. See [[SA Requisition Dashboard]] §0c. Decide there whether the exam stays on the critical path; it should not outrank SA 08–SA 10.
- **SA 12 (First 5 Applications Out)** — 15 of the 50 postings named a real job poster with a verbatim LinkedIn URL. Those are the warm-intro surface. Start with the `ai-ml-platform` ones.
