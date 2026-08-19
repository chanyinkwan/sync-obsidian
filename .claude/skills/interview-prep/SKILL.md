---
name: interview-prep
description: Use when Chukwan wants to run or continue interview preparation for a Sales Engineer / Presales Consultant role, book and commit to an interview invite, get a one-page hiring-manager-POV brief, drill stories out loud, run the scored readiness gate, or do the pre-call checklist. Trigger on "interview prep", "prep for the interview", "prep for the screen", "/interview-prep", "run the gate", or Chukwan mentioning that an interview invite has arrived.
---

# Interview Prep

## Core principle

Readiness is proven, not felt. A fixed 3-hour budget across five stages replaces deferral, unread research, zero reps, and gut-feel confidence with one externally scored gate. The skill never hardcodes questions, the rubric, or stories — every stage reads its asset file at run time, because these files get edited independently of this skill.

## Assets (read at run time, never copy into this file)

| File | Used by |
|---|---|
| `Knowledge/Source/Job Hunt/$Interview System/Interview Prep SOP.md` | Reference for the full sequence, budgets, done-lines |
| `Knowledge/Source/Job Hunt/$Interview System/Master Story Bank.md` | `reps` |
| `Knowledge/Source/Job Hunt/$Interview System/Question Bank - Screen.md` | `gate` when tracker `stage: screen` |
| `Knowledge/Source/Job Hunt/$Interview System/Question Bank - Hiring Manager.md` | `gate` when tracker `stage: hiring-manager` |
| `Knowledge/Source/Job Hunt/$Interview System/Readiness Rubric.md` | `gate` |
| `Knowledge/Source/Job Hunt/$Interview System/Pre-flight Checklist.md` | `preflight` |
| `Template/Interview Prep Tracker Template.md` | Fallback shape if a tracker must be created by hand |
| `research-baseline` skill | invoked by `start`, and by `brief` if blocks are missing |

The tracker note is the only piece of durable state. It carries `type: interview-prep-tracker`, `company`, `role`, `stage`, `interview_date`, `status`, the Stage Checklist, and `## Gate Log`.

## Universal rules

1. **Announce before acting.** At the start of every stage, before doing anything else, say the stage's budget and its one-line "done means" (pull both from the SOP or the table below — do not paraphrase them away).
2. **Tick and stamp.** When a stage completes, check its box in the tracker's Stage Checklist and append a timestamp on that line (e.g. ` — done 2026-08-19 21:40`).
3. **ADHD-friendly shape.** Lead with the action, not the explanation. In `reps` and `gate`, one question at a time — never dump a list and wait. No walls of text; short lines, plain asks.
4. **No argument → resume.** Search the vault for notes with frontmatter `type: interview-prep-tracker` and `status: in-progress`, take the most recently modified one, read its Stage Checklist, announce which stage is next (first unticked box), and run that stage. If none exists, say so and ask whether to start one.

## Stage table

| Stage | Command | Budget | Done means |
|---|---|---|---|
| T0 Commit | `/interview-prep start <company>` | 15 min, invite night | Interview slot booked ≤48h out, partner informed, tracker note exists, `research-baseline` triggered. No reading tonight. |
| B1 Brief | `/interview-prep brief` | 45 min | One-page HM-POV brief written and read by Kess. Block notes never opened by Kess. |
| B2 Reps | `/interview-prep reps` | 60 min | Compulsory anchors + 5 competency stories said out loud at ≤60s each; selector drill run. |
| B3 Gate | `/interview-prep gate` | 45 min | Scored mock passed (4 of 5 answers ≥3/4) and verdict logged in tracker. |
| Pre-flight | `/interview-prep preflight` | 15 min before interview | Checklist all green: room claimed, partner told, notes closed, link/mic tested, water. |

## `start <company>`

1. Announce budget (15 min) and done-line.
2. Search the vault for an existing `type: interview-prep-tracker` note for this company.
   - Found → confirm it with Kess, continue.
   - Not found → tell Kess to run `Ctrl+Shift+I` (or `Ctrl+Alt+I` if that was rebound) to insert `Template/Interview Prep Tracker Template.md` and fill company/role/stage/interview date. If Kess cannot do that right now, create the tracker note directly using the same frontmatter and body shape as the template, asking Kess for company, role, stage, and interview datetime in chat.
3. Ask Kess to confirm, one at a time, as human steps — do not assume either:
   - "Booked the interview slot, ≤48h out — confirm?"
   - "Told your partner — confirm?"
4. Invoke the `research-baseline` skill for this company (baseline tier is the default; let that skill decide tier).
5. Say explicitly: **"No reading tonight."** Research runs in the background; brief is tomorrow's stage.
6. Tick T0 in the tracker, timestamp it, stop. Do not chain into `brief`.

## `brief`

1. Announce budget (45 min) and done-line.
2. Resolve the job folder: `Knowledge/Source/Job Hunt/<company>/` using the tracker's `company` field. Confirm with Kess if more than one folder plausibly matches.
3. Check for `<Job Folder>/Research - Index.md` and at least the company-scope block notes it references (plus any `$Categories` blocks it points to).
   - **Missing or incomplete → invoke `research-baseline` for this company now, tell Kess why, and stop.** Do not write a brief from thin air.
4. Read the index and every block it references — never summarise from memory, never let Kess read them. Kess reads only the finished brief.
5. Write `<Job Folder>/Interview Brief - <Company>.md` in exactly this shape:
   - **Voice**: written AS the hiring manager, addressed to Kess. Opens roughly "Here is what I expect a candidate to know about us, and why you specifically fit."
   - **Part 1 — Five facts you must be able to say**: up to 5 bullets (company, product, market, competitors, recent news), each speakable in one breath.
   - **Part 2 — My worries about you, and your counter**: 2–3 objections a HM would plausibly hold about Kess's profile, each with a one-line counter drawn from real evidence in the blocks (not invented).
   - **Part 3 — Your why-company answer, pre-drafted in your voice**: ≤90 words, conversational, no em dashes or en dashes, humanised per `Knowledge/Source/Job Hunt/CV Writing Rules.md` tone.
   - **Hard cap: ~400 words total, one page.** No em/en dashes anywhere in the prose.
6. Tell Kess the brief is ready and where it is. Tick B1, timestamp it.

## `reps`

One item at a time. Never print the whole deck up front.

1. Announce budget (60 min) and done-line.
2. Read `Master Story Bank.md` fresh (do not rely on anything cached from a prior run).
3. If `<Job Folder>/Interview Brief - <Company>.md` exists, pull its Part 3 text and the company-specific line to use for Deck A story A3 (why this company) and the `[FILL]` in A5. If the brief doesn't exist yet, tell Kess and proceed with the rest of the deck; A3 and the A5 fill-in wait for the brief.
4. Drill Deck A anchors first, one at a time, in order (A1–A5):
   - State which anchor it is.
   - Start a 60s timer, wait for Kess to say it out loud, stop the timer.
   - No transcript needed here — just confirm delivered and move on, or repeat once if Kess asks.
5. Then drill Deck B, one story at a time (Story 1–5):
   - Same 60s-timer pattern.
   - After each, check what Kess said against that story's **bolded anchor points** in the bank (e.g. "three workshops, six subnets, validated scope"). If a bolded number or artifact was dropped or changed, flag the drift by name — do not let it pass silently.
6. Selector drill: pick a question at random from either question bank (screen or hiring-manager bank matching the tracker's stage, or both if Kess wants more reps), read it out, and require Kess to first name which story they'd use, then answer it out loud with the timer. Repeat for a handful of rounds — Kess decides when to stop, but do not end the stage until at least 3 selector rounds have run.
7. Tick B2, timestamp it.

## `gate`

One question at a time. This is the proof of readiness, not a formality.

1. Announce budget (45 min) and done-line: scored mock passed (4 of 5 ≥3/4) and verdict logged.
2. Read `Readiness Rubric.md` fresh at run time — never reuse a cached copy of the axes or the pass rule.
3. Determine the question bank from the tracker's `stage` field: `screen` → `Question Bank - Screen.md`, `hiring-manager` → `Question Bank - Hiring Manager.md`.
4. Draw 5 questions:
   - 2 from `#anchor/*` tagged lines (cover two different anchors, not the same one twice).
   - 3 from the stage's question bank, **excluding every line tagged `#logistics`** (not scorable STAR answers), weighted toward keywords found in the JD note in the job folder or in the brief's Part 1/2 if no JD note exists.
5. For each of the 5, in order:
   - State the question only.
   - Tell Kess: materials closed, timer starts now, speak it out loud.
   - Start a timer. When Kess says done, stop it.
   - Ask Kess to type what they actually said, in their own words, plus the time it took.
   - Score the typed answer on the rubric's 4 axes (Structure, Timing, Specificity, Company link), 1 point each, using the rubric's own scoring language — show the score and a one-line why per axis, same shape as the rubric's worked example.
6. Verdict: pass = 4 of 5 answers at ≥3/4 each. Otherwise fail.
   - Fail → name only the weak answers (score <3) and tell Kess to redo just those, not the whole gate.
7. Append to the tracker note under `## Gate Log` (never overwrite prior entries):
   - Date, stage, per-question scores (question, 4 axis scores, total), verdict `READY` / `NOT YET`, and the typed answers verbatim.
8. Tick B3 in the Stage Checklist only if the verdict is `READY`; timestamp it either way with the verdict noted.

## `preflight`

One item at a time, not a dump.

1. Announce budget (15 min, right before the interview) and done-line.
2. Read `Pre-flight Checklist.md` fresh.
3. Walk each checkbox item in order: state it, wait for Kess to confirm done, mark it. Do not move to the next item until the current one is confirmed.
4. When all items are confirmed, tell Kess they're clear, tick Pre-flight in the tracker, timestamp it.

## Self-catch

If you catch yourself about to print a question bank, the rubric axes, or a story from memory instead of reading the file for this run, stop and read the file. If you catch yourself writing more than a short paragraph before Kess has to act or answer, stop and cut it down to the next single action.
