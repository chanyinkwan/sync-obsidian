---
name: craft-cv
description: Use when Chukwan wants a CV or CV bullets written or tailored to a specific job description, a CV context JSON built or rendered, an existing CV rewritten for a new role, or a claim checked before it reaches an application. Trigger on "write the CV for X", "tailor my CV", "render the CV", "can I say this on my CV".
---

# Craft CV

## Core principle

A CV is a claim set, not a history. Every claim must survive a reader holding the JD who can ask "how do you know that number" at interview. **Truth gating runs before style, style before rendering.** An ungrounded bullet is worse than a missing one, because it is the one the interviewer picks.

## 1. Sources and authority

| Rank | Source | Authoritative for |
|---|---|---|
| 1 | `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/MasterExperienceDB.json` | Titles, dates, claims, bullet status. Canonical. **This skill treats it as read-only.** |
| 2 | `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/CV Writing Rules.md` | Bullet style. Binding. |
| 3 | `.claude/skills/craft-cv/TARGETING.md` | Positioning strategy above the bullet. |
| 4 | Prior `CV Context — *.json` | JSON shape only. Their prose predates the rules. |
| — | `CLAUDE.md`, `NewProofBank.json` | **Stale. Never use for titles or dates.** |

`Project Database (Master).json` was **deleted on 2026-08-13** as contaminated. If you find a copy, do not source from it.

## 2. Integrity gates

1. **`meta.hard_rule`:** render only bullets whose `status` is `verified` or `secondary`. Never restore anything in `excluded_from_cv`.
2. **`excluded_from_cv` is absolute.** Never cite the `github.com/chanyinkwan` repos (Lead-Enrichment-Pipeline, Financial-RAG-Assistant, AI-Bank-Reconciliation, AI-Email-Autoresponder), their metrics, or the freelance "AI Solutions Engineer" role, in any CV, portfolio, cover letter or interview answer. The Sep 2025 to Apr 2026 gap is an ordinary post-MSc job search and needs no cover.
3. **Obey per-bullet fields.** `note`, `arithmetic` and `correction` are binding instructions, not commentary. They forbid specific things, for example summing the Viu TV close into the pipeline figure, or claiming presenting or facilitating where the record says attended.
4. **Two meta flags override bullet status.** `independent_projects_flag` makes every `verified` in `independent_projects[]` unproven, and `education[].review_flag` does the same for the AutoTailor bullet. Verify with Chukwan personally, or do not use them. *(Remove this gate once the data is fixed, see `DATA-REDESIGN.md`.)*
5. **Client label, never client name.** Use `client_public_label` ("Tier-1 UK mobile network operator"). Never `client_private`.
6. **`secondary` renders only against a named JD criterion**, never as filler.
7. **Technical claims obey `technical_profile.honest_read`.** Hands-on at analytics grade, designs systems and directs whoever builds them, has never owned production code professionally. `Python (pandas, data analysis)` under analytics, never bare `Python` under engineering. Specced is not built.
8. **Rewrite invariants.** Numbers, named artifacts, verbs of agency and claims are immutable. Only framing, vocabulary and emphasis may change. Re-check `arithmetic` after any rewrite.
9. **Never invent a number.** No real Y means cut the bullet, then log it (§4).

## 3. Process

| Step | Output |
|---|---|
| 1. Derive and rank the JD's buying criteria (`TARGETING.md` §1) | 3 to 5 ranked criteria |
| 2. Query the bullet pool per criterion | Candidates, by competency and domain |
| 3. Gate every candidate (§2) | Gated pool, kills captured |
| 4. Pick the anchor role (`TARGETING.md` §2) | The role answering the hardest criterion |
| 5. Rewrite against the JD's vocabulary | Bullets ranked by criterion, within chronological sections |
| 6. Write `profile_summary` as complete printable prose. Put any gap analysis in `_targeting.gap_bridge` as a private note. Never paste, append, or concatenate `_targeting` into the summary (`TARGETING.md` §3) | Employer's problem named once. Private targeting fields never print. |
| 7. Render | `.docx` |
| 8. Pre-send check | Pass or fix |

Every ranked criterion must be answered by a rendered bullet or declared a logged gap. A criterion that silently returns nothing is the failure this skill exists to prevent.

## 4. Targeting record and grounding backlog

Replace prose provenance with a `_targeting` block in the CV context JSON:

```json
"_targeting": {"jd": "", "criteria": [], "anchor_role": "",
  "bullets_used": [], "killed": [{"bullet": "", "status": "", "criterion": ""}],
  "gap_bridge": ""}
```

`_targeting` is a private working record. It is never a render input. Never copy, append, interpolate, or concatenate `gap_bridge`, `killed`, `notes`, `review_fixes`, or any other `_targeting` field into `profile_summary` or any printable key. `profile_summary` is the only summary that prints, and it must be authored as complete standalone prose. Private targeting fields never print.

Append every kill to `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Grounding Backlog.json`: one record per bullet per application. Demand count is the priority queue, so the most-wanted evidence gets grounded first. A kill reported only in chat is a silent loss.

## 5. Render

Never hand-build the `.docx`.

```bash
python "Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Tools/render_cv.py" "Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/CV/CV Context — <Company> <Role>.json" "Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/CV/Kessog Chan CV — <Company> <Role>.docx"
```

Keys: `profile_summary`, `experience[{company, location, role, dates, bullets[]}]`, `activity_line`, `language_line`, `skills_line`, `interests_line`. Education is hard-coded in `Resume_Template.docx` and must stay aligned with `MasterExperienceDB.json`:

- University of Exeter: Master of Business Analytics (MSc Business Analytics). Merit may stay. Do **not** add a default Relevant Coursework line. No AI Governance, no Predictive Risk Engine, no MSc project bullets on every CV.
- Hang Seng University: **BSc Information Technology**. Never "Bachelor of Communication Technology" or any other degree name.

If the template drifts, fix the template. Do not invent a degree. Do not source education from `Knowledge/About Me/` or from a prior company's CV. `render_cv.py` passes only the printable keys above. It never passes `_targeting`.

## 6. Precedence

`cv_summary.positioning_boundary` and `technical_profile.honest_read` outrank every positioning tactic, including anything later imported into `TARGETING.md` from outside sources. Integrity beats strategy, always.

## Pre-send checklist

- [ ] Every bullet has X, Y and Z, with a real number for Y, result before method
- [ ] Every number defendable in 15 seconds: what it is, how it was calculated, what you did to drive it
- [ ] Zero `—` and zero `–` outside date ranges
- [ ] Every rendered bullet is `verified` or `secondary`, and its `note` / `arithmetic` obeyed
- [ ] Nothing excluded: no `chanyinkwan` repos, no freelance AI role, no client name
- [ ] Dates and titles match the DB exactly, no retitling toward the JD, including in the summary. Huawei's contract title is Portfolio Solution Presales; do not open the summary as Presales engineer or Sales Engineer. Technical framing matches `honest_read`
- [ ] Every ranked criterion answered or logged as a gap; kills appended to the backlog. `_targeting` stays private: gap_bridge, killed, notes and review_fixes never appear in printable keys. Private targeting fields never print
- [ ] Employer named once in the summary. Do not paste `_targeting.gap_bridge` into the summary
- [ ] Education on the page is BSc Information Technology and MSc Business Analytics. No Communication Technology. No default AI Governance coursework
- [ ] One page, 17 to 19 bullet lines total, English only, no tables or text boxes
- [ ] 80%+ of the JD's keywords present
- [ ] Read aloud once, start to finish
