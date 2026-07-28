---
type: reference
status: active
tags:
  - reference
projects:
  - "[[SA Presales Transition]]"
related:
  - "[[SA 01 - LinkedIn Requisition Index]]"
  - "[[SA 02 - Unfair Advantage Intersection]]"
dateCreated: 2026-07-13
---

# SA Requisition Dashboard

Live analysis of the JD corpus in this folder. You paste raw JDs into chat; each becomes one note here tagged `#sa-requisition`; these queries do the counting.

**Corpus exists to answer one question:** which domain do you claim in your 定位宣言? That is Gate 1, due **2026-07-19**. Everything below is built backwards from that.

> [!success] Corpus closed 2026-07-27 — 50/50 captured, schema extracted, domain vocabulary frozen.
> Sections 0a–0c below are a **static snapshot** taken at close. The Dataview blocks under them stay live and will drift if you add JDs; the snapshot is what Gate 1 was actually decided on. Domain vocabulary was frozen on 2026-07-27 (see `_JD Template`) and JDs 01–06, 08 retro-normalised onto it.

---

## 0a. Corpus integrity — read this before trusting any count

50 files, but they are not 50 clean UK SA requisitions. Known defects, all left in place and labelled rather than quietly dropped:

| File | Defect | Effect |
|---|---|---|
| `31` | Truncated Indeed scrape — title and pay only, no JD body. Frontmatter says `company: UNPARSEABLE`. | Not countable in any tally. `domain: unclear`. |
| `34` / `47` | **Same Deloitte role**, "Commercial Strategist, Technology & Transformation", posted to England and to Wales. | One role double-counted in `consulting-advisory`. |
| `32` | Datel "New Business Sales Consultant" — a pure quota sales role, no presales/SA content. | Inflates `enterprise-saas` by one. |
| `07` | Google TAM, **Sunnyvale CA** — outside the UK/EEA search scope. | Inflates `cloud-infra` by one. |

Effective clean n = **46**. Re-running the domain tally with all four removed changes the ordering nowhere in the top two and leaves a three-way tie at rank 3 — the Gate 1 call below is robust to every one of these defects, which is why it stands.

**Second-order caveat, stated plainly:** `seniority` is `unclear` on 16 of 50 because most presales titles carry no modifier. Section 8 is therefore weak evidence — do not tune your targeting on it. And `moat_hits`/`gap_hits` are *my inference against your background*, not the JDs' words. They are the most useful and least trustworthy fields here.

---

## 0b. Snapshot — domain tally at close (the heatmap, SA 01's deliverable)

| Rank | Domain | Reqs | Share of 50 |
|---|---|---:|---:|
| **1** | **`ai-ml-platform`** | **10** | **20%** |
| **2** | **`fintech-payments`** | **6** | **12%** |
| **2=** | **`enterprise-saas`** | **6** | **12%** |
| 4= | `industrial-energy-ot` | 5 | 10% |
| 4= | `security-compliance` | 5 | 10% |
| 6= | `consulting-advisory` | 4 | 8% |
| 6= | `retail-commerce` | 4 | 8% |
| 8 | `cloud-infra` | 3 | 6% |
| 9= | `data-analytics` | 2 | 4% |
| 9= | `devtools-web-infra` | 2 | 4% |
| 9= | `telco-networking` | 2 | 4% |
| — | `unclear` (file 31) | 1 | 2% |

**Top 3 = `ai-ml-platform`, `fintech-payments`, `enterprise-saas`.** `ai-ml-platform` leads by 67% over the next label and is the only domain that clears 15%. There is no tie at rank 1, so SA 02's tie-break rule never has to fire.

**The uncomfortable line in this table:** `telco-networking` is **2 of 50 — 4%**. Your deepest existing domain is the thinnest market in the corpus. That is the single most decision-relevant number here and it is an argument against claiming telco as your positioning domain, not for it.

### Snapshot — what the job actually IS, day to day

| Responsibility | Appears in |
|---|---:|
| technical-discovery | 25 |
| solution-architecture-design | 24 |
| demo-delivery | 24 |
| enablement-content-creation | 22 |
| cross-functional-alignment | 22 |
| product-feedback-loop | 21 |
| customer-advisory | 21 |
| customer-presentations | 20 |
| poc-management | 17 |
| proposal-ownership / requirements-gathering / rfx-response / stakeholder-management / account-growth | 15 each |
| cost-estimation-pricing | 14 |
| technical-workshops | 11 |

Discovery and demo tie at the top, which is what SA 05 (discovery bank) and SA 08 (demo Loom) already assume — those two tasks are correctly prioritised. `cost-estimation-pricing` at 14 is the surprise: it is a top-tier presales responsibility and it is *already your day job*.

### Snapshot — moat vs gap

| You already have | Reqs | | Gap to build | Reqs |
|---|---:|---|---|---:|
| executive-and-technical-audience-communication | 39 | | domain-vertical-knowledge | 32 |
| cross-functional-account-governance | 34 | | genai-hands-on-literacy | 20 |
| b2b-enterprise-sales | 29 | | saas-product-experience | 15 |
| commercial-and-pricing-deal-work | 21 | | solutions-architect-title-experience | 14 |
| portfolio-solution-positioning | 15 | | hands-on-cloud-architecture-depth | 11 |
| multi-account-stakeholder-management | 10 | | hands-on-coding-depth | 10 |
| rfx-proposal-experience | 10 | | poc-end-to-end-ownership | 9 |
| named-account-growth | 8 | | consulting-delivery-experience | 9 |
| vendor-management-experience | 8 | | demo-asset-ownership | 6 |

Read the two columns against each other: the top four things the market asks for are all things you already do. **The gate is not capability, it is evidence** — `solutions-architect-title-experience` (14) and `demo-asset-ownership` (6) are credential/artifact gaps, not skill gaps, and SA 08–SA 10 exist precisely to manufacture the artifacts. `domain-vertical-knowledge` topping the gap list at 32 is not one gap, it is 32 different verticals asking for their own; it collapses the moment you pick a domain, which is the whole point of Gate 1.

---

## 0c. Section 5 verdict — the AWS SAA falsification test RESOLVED

This dashboard committed in writing to letting the corpus kill SA 03/SA 04. It has to be honoured now, because the result is unambiguous:

> **Zero of 50 requisitions name AWS SAA. Zero name any cloud certification at all.**
> The only two certifications named anywhere in the corpus are `togaf` (1, OutSystems) and `pmp` (1, Parloa nice-to-have). Verified by full-text search for `aws-saa`, `Solutions Architect Associate`, and `SAA-C0` across all 50 files: **no hits.**

Cloud *platforms* are named — `aws` in 6, `azure` in 5, `gcp` in 5 — but as familiarity, never as credential. The distinction matters: the market wants you to be able to hold a cloud conversation, not to hold a badge.

**By the stated rule, this falsifies the premise behind SA 03/SA 04.** The honest reading, with both sides:

- **Against the spend:** 0/50 is not a weak signal, it is the strongest possible negative. The weeks SA 04 costs buy a credential no requisition in your own sampled market asks for. `cloud-certification` shows up as a gap in 5 JDs, but that is *my inference*, not any JD's words — it should not be used to rescue the cert.
- **For keeping it:** the corpus is UK presales-titled roles. It systematically under-samples hyperscaler and partner-side SA roles, where the cert genuinely is a screen — note that file `06` is AWS's own Telco SA req. And `hands-on-cloud-architecture-depth` (11) is a real gap the SAA syllabus partly closes even if the badge is worthless.

**This is your call, not mine, and it belongs in SA 03/SA 04 — but the dashboard's own rule says downgrade.** Recommended: keep studying for the *knowledge* if it is closing `hands-on-cloud-architecture-depth`, drop the exam booking from the critical path, and stop letting SA 04 block anything. Do not let it outrank SA 08–SA 10, which attack gaps the corpus actually ranks (`demo-asset-ownership`, `poc-end-to-end-ownership`, `solutions-architect-title-experience`).

---

## 1. Progress to 50

```dataview
TABLE WITHOUT ID
  length(rows) + " / 50 captured" AS "Progress",
  (50 - length(rows)) AS "Remaining"
FROM #sa-requisition
GROUP BY true
```

---

## 2. Domain tally — the direct input to SA 02

SA 02's tie-break rule reads "pick the one with the higher requisition count (from SA 01)." **This table is that count.** The top 3 rows are the heatmap.

```dataview
TABLE WITHOUT ID
  domain AS "Domain",
  length(rows) AS "Reqs",
  round(length(rows) / 50 * 100) + "%" AS "Share of corpus"
FROM #sa-requisition
GROUP BY domain
SORT length(rows) DESC
```

---

## 3. Keyword heatmap — what the market actually asks for

```dataview
TABLE WITHOUT ID
  kw AS "Keyword",
  length(rows) AS "Appears in"
FROM #sa-requisition
FLATTEN keywords AS kw
GROUP BY kw
SORT length(rows) DESC
LIMIT 30
```

---

## 4. Responsibility heatmap — what the job IS, day to day

Keywords tell you the tooling; responsibilities tell you the *motion*. SA 05–SA 09 (discovery bank, scripts, demo bridge, whiteboard) are all rehearsals of whatever tops this list. If `poc-scoping` outranks `demo-delivery`, your rep schedule should change.

```dataview
TABLE WITHOUT ID
  r AS "Responsibility",
  length(rows) AS "Appears in"
FROM #sa-requisition
FLATTEN responsibilities AS r
GROUP BY r
SORT length(rows) DESC
```

---

## 5. Certification demand — does SA 03/04 survive contact with the data?

You have SA 03 (book AWS SAA) and SA 04 (study & sit it) on the board. Those cost real weeks. **If `aws-saa` doesn't show up in a meaningful share of 50 real requisitions, that spend is not justified and the tasks should be cut or downgraded.** This query is the falsification test — let it actually falsify.

```dataview
TABLE WITHOUT ID
  c AS "Certification",
  length(rows) AS "Reqs naming it",
  round(length(rows) / 50 * 100) + "%" AS "Share"
FROM #sa-requisition
FLATTEN certs AS c
GROUP BY c
SORT length(rows) DESC
```

---

## 6. Moat hits — the left column of SA 02, pre-filled

Things the market asks for that **you already have.** Ranked by demand. My inference, not gospel — see `_JD Template` for why you should read these skeptically.

```dataview
TABLE WITHOUT ID
  m AS "You already have",
  length(rows) AS "Reqs wanting it"
FROM #sa-requisition
FLATTEN moat_hits AS m
GROUP BY m
SORT length(rows) DESC
```

---

## 7. Gap hits — what to build, ranked by market demand

This is the build queue. SA 05–SA 11 should be sequenced against *this* order, not the order they happen to sit in the task list.

```dataview
TABLE WITHOUT ID
  g AS "Gap",
  length(rows) AS "Reqs wanting it"
FROM #sa-requisition
FLATTEN gap_hits AS g
GROUP BY g
SORT length(rows) DESC
```

---

## 8. Seniority distribution — are you aiming at the right rung?

If the corpus skews `senior`/`principal` and you're pitching at `mid`, the 定位宣言 is aimed at a market that isn't hiring — or you're underselling. Either way you want to see this before writing it.

```dataview
TABLE WITHOUT ID
  seniority AS "Seniority",
  length(rows) AS "Reqs"
FROM #sa-requisition
GROUP BY seniority
SORT length(rows) DESC
```

---

## 9. Master table — every JD

```dataview
TABLE
  company AS "Company",
  title AS "Title",
  seniority AS "Level",
  domain AS "Domain",
  location AS "Location",
  captured AS "Captured"
FROM #sa-requisition
SORT captured DESC, company ASC
```

---

## How to use this

1. Paste a raw JD into chat. I create the note, extract the schema, and it appears above.
2. ~~At JD ~10, freeze the domain vocabulary~~ — **done 2026-07-27**, see `_JD Template`. Any new JD must use a frozen label.
3. ~~At 50, do not wait for Friday~~ — **corpus closed 2026-07-27**, SA 02 written the same day off section 0b.
4. ~~Section 5 is allowed to kill SA 03/SA 04~~ — **it did.** See section 0c. Route the decision into SA 03/SA 04; do not leave it sitting here.

## Log

- **2026-07-27** — Corpus closed at 50. JDs 07 and 09–50 (42 files) were still raw pastes with no frontmatter; all extracted against `_JD Template`. Domain vocabulary frozen to 11 labels, JDs 01–06 and 08 retro-normalised. Responsibility/moat/gap synonyms collapsed onto a canonical vocabulary so the tallies aggregate. Snapshot sections 0a–0c added. Gate 1 decided: `ai-ml-platform`. AWS SAA falsification test resolved 0/50.
- Recruiter contacts captured on 15 of 50 postings, verbatim URLs only — these are SA 12's warm-intro surface. The other 35 postings named no job poster; those fields are correctly blank, not missing.
