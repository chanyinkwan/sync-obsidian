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
2. **At JD ~10, stop and freeze the domain vocabulary** (see `_JD Template`). Skipping this is how the tally at 50 ends up meaningless.
3. **At 50, do not wait for Friday.** Section 2's top 3 rows are SA 02's input; start SA 02 the moment the count lands, since Gate 1 is due 07-19 and there's no slack to push it into W2.
4. Section 5 is allowed to kill SA 03/SA 04. That's the point of collecting evidence before spending the weeks.
