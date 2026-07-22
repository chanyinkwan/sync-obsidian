# AWS SAA-C03 Readiness Dashboard Design

Date: 2026-07-22
Status: Draft, pending user review. The generated syllabus list additionally needs a user sanity-check before it is frozen.

## Outcome

A live, syllabus-anchored, ADHD-aware progress visualisation inside the Obsidian vault, answering "how far am I from exam-ready" every session, not just at review time. Exam: 2026-08-23 12:00 BST.

## Problem

Study evidence already exists (6 notes in `02 Notes/`, 6 questions in `03 Questions/`, 2 session notes in `04 Journey/`, Exam Map coverage table) but there is no single view that turns it into a readiness signal or makes daily effort visible. The user studies with ADHD; feedback must land same-session, not weeks later, or motivation dies.

## Design decisions

1. **Live rendering, one codebase.** `dataviewjs`, no manual regeneration. `dv.view()` loads a shared JS file (`00 Agent/readiness/view.js`) so the full dashboard and the compact Home embed share one implementation with two render modes.
2. **Frozen denominator.** A pre-declared syllabus checklist, generated once from the official exam guide via the NotebookLM notebook `aws-saa-c03-architectural-prob` by the saa-knowledge-manager agent, never built by the user in a study slot. Roughly 10-14 topics per domain, ~45-55 total, stable topic ids. Adding notes can never add topics, so the denominator cannot inflate.
3. **Two-tier credit: touched vs proven.** Headline shows both at equal visual size, e.g. `TOUCHED 18% · PROVEN 4%`, never proven-only, because proven reads 0% for the first week and a dead gauge kills motivation. The touched-proven gap is the honest statement of remaining work.
4. **Official domain weighting.** Secure 30, Resilient 26, High-Performing 24, Cost-Optimized 20. Headline touched% = Σ(weight × domain touched fraction); same formula for proven.
5. **Slot-based streak, not consecutive-day.** Study slots are weekdays (matches SA 04 recurrence BYDAY=MO,TU,WE,TH,FR). Display "N of last 10 slots" plus current run. A slot is hit iff a `04 Journey/` session note exists with `date` = that weekday. Weekend study counts as bonus toward the "last 10 slots" numerator but never breaks anything.
6. **Today-scoped pace, never cumulative-deficit.** Two target lines from the existing phase arc in Study Session Protocol: touched 100% by 2026-08-03 (Drill phase start), proven 100% by 2026-08-21 (last day of Mock+repair). The panel states the honest pace status (AHEAD / ON LINE / BEHIND) against the tighter line, then always pairs it with one actionable sentence for today, e.g. "BEHIND · today: open 2 topics in Resilient to get back on line". The status may say BEHIND when that is true, but it never appears without the same-day action next to it.
7. **Auto-computed next best action.** One line, one action, because task initiation is the expensive step. Priority order: (a) an untouched topic in the heaviest-weighted domain that is below its touched target, (b) the note closest to mastered (distilled/connected with a pending 3+ day retest), (c) an Active Unknown.
8. **Gated error clustering.** Renders "not enough data yet (N/20 questions)" until 20+ question notes exist, then clusters wrong/guessed by domain and services frontmatter.
9. **Session-close delta.** "This session: +2 topics touched, +1.4% readiness" computed as the diff between the latest two rows of the Progress Log. The saa-knowledge-manager appends one row per session (date, touched%, proven%, notes count, questions count) as a new final step of its session cadence; the same log feeds the pace trend.
10. **Collapse the wall.** Checklist rendering: current domain expanded, next 3 topics visible, everything else behind collapsed callouts/toggles. Never render 50+ unchecked boxes at once.
11. **Placement.** Full dashboard note `01 Dashboard/Readiness.md`; compact headline block embedded in `01 Dashboard/AWS SAA-C03 Home.md`, which the tutor loads at every session start per protocol, so it is seen by process, not willpower.

## Mastery definition (single source of truth)

The dashboard is read-only over mastery. It never computes, infers, or upgrades mastery itself. Single source of truth: the `status:` field in `02 Notes/` frontmatter, set only by the saa-knowledge-manager, only under the existing four-part test in Agent Instructions (explain unaided; 2 correct scenario questions; at least one of those 3+ days after distilled; explain why the main distractor is wrong), with evidence cited in the note.

Topic-level rules:

- **Touched**: at least one note mapped to the topic at any status (capture counts). Makes every session move the gauge.
- **Proven**: at least one mapped note with `status: mastered` and no contradicting evidence (below). `connected` is a linking state and never counts as proven.
- **Contested (demotion rule)**: if a question note mapped to the topic has `result: wrong` or `result: guessed` with `date` after the mastered note's `mastered:` date, the topic drops from proven back to touched and renders a warning "contested" badge. Evidence beats status. To support this, when the knowledge manager promotes a note to mastered it adds `mastered: YYYY-MM-DD` to frontmatter.
- **Mapping**: notes and question notes carry a new frontmatter field `topics: [<topic-id>]`, ids drawn from the frozen syllabus file. The knowledge manager assigns ids at note creation. A note with no valid topic id renders in an "unmapped" pile on the dashboard so mapping debt stays visible, and counts toward nothing.
- **Mock scores**: displayed as their own evidence line on the dashboard when present (from AWS SAA-C03 Home), never blended into the touched/proven computation. The gauge estimates; the mock measures; they stay visually separate.

## Files

### Create

- `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md`: frozen checklist. One section per domain, topics as a markdown table with columns id, topic, status hint (blank). Frontmatter: `type: saa-syllabus`, `frozen: true`, generation date, source citation.
- `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Readiness.md`: dashboard note, thin `dataviewjs` blocks calling `dv.view("Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness", {mode: "full"})`.
- `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`: the single shared implementation, two render modes: full, compact.
- `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md`: append-only markdown table.

### Modify

- `01 Dashboard/AWS SAA-C03 Home.md`: add compact embed block near the top.
- `00 Agent/Agent Instructions.md`: knowledge-manager additions: assign `topics:` on note creation; add `mastered:` date on promotion; append Progress Log row as final session-cadence step; syllabus generation is a one-time task it performs.
- `Template/SAA Knowledge Note Template.md` and `Template/SAA Question Note Template.md`: add a `topics:` line. (Template edits normally require user approval per Agent Instructions; this spec's approval covers it.)
- Backfill: add `topics:` to the existing 6 notes and 6 question notes once the syllabus exists.

## Panels (Readiness.md, top to bottom)

1. Dual headline: TOUCHED x% · PROVEN y%, days remaining, study slots remaining to exam.
2. Session-close delta (latest Progress Log diff).
3. Domain bars: per domain, touched bar (pale) over proven bar (solid), weight label.
4. Today's pace sentence.
5. Next best action.
6. Streak: N of last 10 slots + calendar heat strip of the last 4 weeks from `04 Journey/` dates + `duration` field.
7. Mock evidence line (blank until first mock, ~2026-08-02/03).
8. Error clustering (gated until 20 questions).
9. Collapsed syllabus checklist.
10. Unmapped notes pile (only renders if nonempty).

## Testing

- Fixture-based: a scratch folder with fake notes covering each rule (untouched / touched / proven / contested / unmapped) rendered through `view.js` and eyeballed once in Obsidian.
- Live acceptance: dashboard readings for the current real vault must show touched > 0 (Secure domain), proven = 0, streak 2 of last 10, error panel gated at 6/20, and all 12 existing notes mapped after backfill.

## Non-goals

- No web artifact, no publishing (explicitly deferred; may revisit at a Sunday weekly review).
- No changes to Study Session Protocol, mastery test, or scheduling/capacity logic (sa-transition-advisor territory).
- No automation of note-status promotion; mastery stays a human + knowledge-manager judgment.

## Open question for user review

Syllabus granularity: ~10-14 topics per domain is the target, but the exact topic list comes from the NotebookLM generation step and the user should sanity-check it before it is frozen.
