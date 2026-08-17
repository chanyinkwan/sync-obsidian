---
type: board
status: active
project: "[[Look for another job]]"
owner: me
updated: 2026-08-17
tags:
  - job-board
---
# On List Jobs

Live board for every job in play. Every row is generated from the frontmatter of that job's JD note — edit the note, not this table.

Related: [[Look for another job]] · [[North Star — Role Reality & Exit Strategy]] · [[SA Presales Transition]]

---

## 🔥 Live pipeline

Applied or further. Sorted by what is due next. **No date = top of the list.**

```dataview
TABLE WITHOUT ID
  link(file.path, company) AS "Company",
  role AS "Role",
  stage AS "Stage",
  fit AS "Fit",
  next_action AS "Next action",
  choice(next_action_date = null, "⚠️ set a date", choice(next_action_date <= date(today), "🔴 " + dateformat(next_action_date, "dd LLL"), dateformat(next_action_date, "dd LLL"))) AS "Due"
FROM #job-description
WHERE stage != "lead" AND stage != "closed" AND stage != "rejected"
SORT next_action_date ASC
```

## ⚡ Needs a decision

**High or Extremely-high → run craft-cv and apply. Medium → hold. Low → drop.**

```dataview
TABLE WITHOUT ID
  link(file.path, company) AS "Company",
  role AS "Role",
  fit AS "Fit",
  exit_fit AS "Direction",
  fit_reason AS "Binding constraint"
FROM #job-description
WHERE stage = "lead" AND posting_status != "closed"
SORT choice(fit = "extremely-high", 0, choice(fit = "high", 1, choice(fit = "medium", 2, 3))) ASC
```

## 🗄 Archive

Closed, rejected, or a lead whose posting died.

```dataview
TABLE WITHOUT ID
  link(file.path, company) AS "Company",
  role AS "Role",
  stage AS "Stage",
  fit_reason AS "Outcome"
FROM #job-description
WHERE stage = "closed" OR stage = "rejected" OR (stage = "lead" AND posting_status = "closed")
```

---

## How to talk to Claude about this board

| Say this | What happens |
|---|---|
| `add <JD link or pasted text>` | Folder created, JD note written with full frontmatter, fit scored, row appears |
| `score the board` | Every `fit` and `fit_reason` re-derived from current evidence |
| `refresh the board` | Each `source` URL re-checked, `posting_status` flipped, you are asked only about stage changes |
| `CV for <company>` | craft-cv runs against that folder |

**Refresh cadence:** no new ritual. Add one line to the weekly SCQA reflection — "refresh the board". Two minutes.

## How the fit verdict is built

`fit` is **derived, never hand-typed.** Four inputs:

1. **North Star hard filters** — WFH ≥ 2 days/week, **no pay cut** (not ">£45k" — see the 2026-07-21 amendment), London or ≤ 1.5h commute, decent office. Only a *confirmed* miss caps the score. `unknown` never caps.
2. **Evidence match** — how much of the JD can be backed from MasterExperienceDB without fabrication. See [[CV Writing Rules]].
3. **Realistic odds** — seniority gap and inside contact. Visa is not a factor (BN(O), no sponsorship needed).
4. **Exit fit** — is this `forward` toward SA/presales, `neutral`, or `sideways`?

**Exit fit is a cap, not an average.** A `sideways` job can never score above `high`, however well it matches on evidence. Without this rule, the roles closest to the current job always win, and the exit never happens.

Company risk, speed-to-offer and effort cost do not get their own fields. They collapse into the single `fit_reason` line, which always names the **binding constraint** — the one thing holding the score down.

## Frontmatter contract

Every JD note carries these nine lines. Six are Claude's, three are yours.

```yaml
stage: lead|applied|screening|interviewing|offer|rejected|closed   # Claude
posting_status: open|stale|closed                                  # Claude
salary_range: "£55-65k" | unknown                                  # Claude
exit_fit: forward|neutral|sideways                                 # Claude
fit: extremely-high|high|medium|low                                # Claude, derived
fit_reason: "one line naming the binding constraint"               # Claude
inside_contact: Name | none                                        # YOU
next_action: "the single next move"                                # YOU
next_action_date: 2026-08-20                                       # YOU
```

A job with no `next_action_date` is stale by definition and renders at the top of the pipeline until you give it one.
