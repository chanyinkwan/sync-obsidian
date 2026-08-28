# Targeting

The layer above the bullet formula. XYZ makes a claim well formed. This makes it win the screen.

Everything here is subordinate to `cv_summary.positioning_boundary` and `technical_profile.honest_read`. A tactic that conflicts with either one loses, including anything imported here from an outside source.

## 1. Deriving and ranking buying criteria

Split the JD into three classes, in the employer's own words.

| Class | What it is | How to treat it |
|---|---|---|
| **Gates** | Screen-out minimums: years, right to work, named hard skills | Binary. Answer each visibly or nothing else gets read |
| **The pain that created the req** | Usually the first two or three responsibilities, plus anything repeated or oddly specific | This is what they are buying. Rank these |
| **Tie-breakers** | Nice-to-haves, culture vocabulary | One skills-line or interests-line token each. Never a bullet |

Oddly specific phrasing is a scar, not boilerplate. "Comfortable with irreversible money movement" means something went wrong once.

Rank the pains: appears in the job title, then repeated in the JD, then carries a number, then implied by company stage. A seed fintech has regulatory and shipping pressure whether or not the JD says so.

Read one thing outside the JD (product, funding, market), because the summary has to name their actual problem.

Alongside the criteria, capture four things about the target (the "strategic intelligence brief" from §6). They shape vocabulary, not evidence:

- **Technical keywords** for ATS matching, aiming at 80%+ coverage.
- **Strategic pain points**, the 3 to 5 business problems this req exists to solve.
- **Internal dialect**, the firm's own branded terminology, mirrored back in the summary.
- **Strategic enemies**, the competitive and market pressure they are under.

**Output:** 3 to 5 ranked criteria, written into `_targeting.criteria` before any bullet is chosen. Positioning that is not written down is not reviewable.

## 2. Anchor role and evidence ordering

The anchor is the role answering the **hardest** criterion, the one most likely to bin the CV. Not the most recent, not the most senior.

Section order stays chronological. Recruiters need it, and reordering reads as hiding. Anchor with two other levers instead:

- **Bullet mass.** The anchor role gets the most bullets.
- **Summary lead.** The first sentence stakes its claim from the anchor role.

Inside the anchor role, order bullets by criterion rank, not by impact size, when the two disagree.

**Coverage rule:** each top-3 criterion is answered in the top half of page one, or explicitly by the summary bridge. Never left implicit.

## 3. Bridging an honest gap

Record the gap in `_targeting.gap_bridge` as a **private working note**. That field is not a render input. Never copy, append, interpolate, or concatenate `gap_bridge` (or `killed`, `notes`, `review_fixes`, or any other `_targeting` field) into `profile_summary`. `profile_summary` is the only summary that prints. Private targeting fields never print.

Do **not** dump working-note language into the printed summary. Phrases such as "the honest match is", "the ground it sits on", or "with no [product] on the CV" are targeting notes, not CV prose, unless the user has approved that exact printed sentence.

If the user-approved `profile_summary` already names the employer's problem once, stop. Do not tack the private bridge onto it.

Standing private note, not printed: regulated fintech delivery at Bank of China is the closest analogue into payments, banking and compliance-gated product roles.

**Banned in printable prose unless the user signed the exact sentence:** apology adverbs ("although", "while I haven't"), claiming adjacency as identity ("payments experience" for what was e-banking delivery), and automatic paste of `_targeting.gap_bridge`.

## 4. What separates a screen-winning bullet

XYZ is necessary and not sufficient. A bullet wins when it also:

1. **Answers a named criterion in the JD's vocabulary.** The reader is pattern-matching their own words.
2. **Carries a stake the reader fears**, not just a magnitude. "Delivered every HKMA mandate inside a hard 14-day window" beats "saved 400 hours a year" for a regulated-product reader, even though the second number is bigger, because regulator plus deadline is their nightmare.
3. **Shows a decision, not a task.** "By making the case across GTM roadmap and pricing reviews" shows agency. "By coordinating stakeholders" shows attendance.
4. **Sits where the scanner lands:** first bullet of the anchor role, or the summary.

**Test every bullet:** which ranked criterion does this answer? No answer means filler, however good the number. Demote or cut.

## 5. The two integrity controls, and how they differ

- **`positioning_boundary` is a filter and a ceiling.** Applied when choosing whether to apply at all (skip hands-on MLOps and multi-agent-orchestration reqs), and again when writing the summary. Every summary claim fits inside what he brings *to* an AI company, never "he is an AI engineer".
- **`honest_read` is a vocabulary generator.** It dictates the verb attached to every technical noun. Specced, not built, for the BoC prototype. `Python (pandas, data analysis)`, never bare `Python`. Design of a multi-agent system, code written by Claude.

## 6. Imported strategy

Source: NotebookLM CV-strategy notebook `40fdd19d-f1a0-452f-9fa0-81fb975096b6`, pulled 2026-08-13. Adopted subject to the precedence rule at the top of this file. The conflict ledger records what was overridden.

### How the document is actually read

- **Five seconds.** Format so a human reviewer finds the critical information in five seconds. Anything needing a second pass is wasted.
- **Left to right, then drop off.** Readers lose attention before the end of a line, so impact and result go in the first few words. Leading with action or context is the specific mistake the rule exists to prevent. Same conclusion as `CV Writing Rules.md` §2, reached from reading mechanics rather than style.
- **A CV competes on experience, a story competes on value.** It is an evidence-based marketing document, not an archive of duties.

### ATS survival

- Match **80%+ of the JD's keywords** before submitting.
- **No tables, text boxes, graphics or fancy templates.** Unreadable to the parser. Check `Resume_Template.docx` against this before trusting it.
- **English only.** No mixed-language entries.

### Budget and layout

- **One page, hard.** Visually inspect every render.
- **17 to 19 bullet lines total across all roles.** This is the real constraint behind §4's coverage test: with 19 lines, a bullet answering no criterion is stealing space from one that does.
- Section order: header with tagline, summary carrying the positioning statement, work experience, education, projects and extracurriculars, then additional information (languages with proficiency, skills grouped by function with depth, volunteering with hours).
- **Merge multi-project roles into one job block.** The several Bank of China initiatives are one block with selected bullets, never separate timeline entries.
- Every bullet opens with a strong result-driving verb.

### Bullet syntax

> **Action verb + metric-backed outcome → the specific technical action → business context or safeguard**

Numbers need surrounding boundaries (scale, headcount, duration) or they carry no commercial weight. Worked shape, figures stripped because the source's own numbers are ungrounded in our record:

- Weak: "Responsible for configuring dashboards to monitor system workflows."
- Strong: "Recovered [N] hours of weekly capacity by engineering a centralised observability dashboard across [N] systems, moving the team from data executors to decision makers."

### Selection and cutting

- **Keep:** experience matching the JD's core skill buckets, and extracurriculars where you taught, enabled, influenced or scaled something.
- **Cut:** task lists with no outcome, coursework with no adoption or scale, and dense acronym stacking a reader cannot parse in five seconds.

### Gaps

- **Transferable strengths** when the domain is absent: systems thinking, stakeholder engagement, pattern recognition.
- **Scope gaps:** substitute adoption, process velocity and organisational reach for budget size. Frame around decisions and judgement, not assigned tasks.
- **Show-don't-tell assets.** A three or four page simulated mini-deck showing how you break down their strategic problem, built before the interview. The TripBiz portfolio is exactly this pattern; reuse its structure.

### The numbers-proof rule

**Every number must be defendable in 15 seconds in the room.** Hold, for each: what the number is, how it was calculated or estimated, and what you did that drove it. **Remove or replace any number you cannot defend.**

This is the standard the DB already encodes as `arithmetic`, and it is the working definition of `verified`. A number failing the 15-second test is `needs_grounding`, and the bullet goes to `Grounding Backlog.json` with the question that would fix it.

Alternatives when revenue is unavailable: time saved, capacity recovered, stakeholder scale, adoption rate.

### Conflict ledger

| Imported claim | Ruling | Why |
|---|---|---|
| Source bullets from `NewProofBank.json` | **Overridden.** `MasterExperienceDB.json` is canonical | NewProofBank is archived with unreliable dates. The notebook predates the 2026-07-28 rebuild |
| "Role signalling pivot": rewrite past job titles toward the target's language, e.g. moving Apple operations titles toward "Operations Strategy Analyst" | **Rejected outright.** Titles and dates are canonical and never rewritten, including in the opening of `profile_summary` | This is the origin of the title drift found on 2026-08-13, where three sources disagreed on the Apple and BOC titles and dates. A retitled role is a claim that fails a reference check. Huawei's contract title is Portfolio Solution Presales; do not open a summary with Presales engineer or Sales Engineer. Match the target's language in **bullets and skills**, never by renaming a role |
| Worked examples citing 20 hours weekly across 30+ systems, and 98% of manual maintenance | **Form adopted, numbers rejected** | Those are the inflated figures the DB corrected. The observability saving is about 400 hrs/year, not 20 hrs/week |
| Pipeline of `cv_data.json` and `injector.py` | **Overridden.** Use `CV Context — *.json` and `render_cv.py` | Same idea, different implementation. The vault's pipeline is the real one |
| Everything else | **Adopted** | No conflict with `positioning_boundary` or `honest_read` |
