---
name: interview-prep
description: Use when Chukwan wants to run or continue interview preparation for a Sales Engineer / Presales Consultant role, book and commit to an interview invite, generate the Gemini deep-research prompt, turn pasted research output into a five-question hiring-manager-POV brief plus the top 5 tailored stories and a GPT Voice bridge-drill prompt, or do the pre-call checklist. Trigger on "interview prep", "prep for the interview", "prep for the screen", "/interview-prep", or Chukwan mentioning that an interview invite has arrived.
---

# Interview Prep

## Core principle

Readiness is proven, not felt. A fixed budget across three skill stages replaces deferral, unread research, and gut-feel confidence. Division of labour: **Gemini gathers, Claude synthesises, Kess speaks.** Gemini Deep Research does the broad sweep (business model, market, competitors); Claude turns the pasted output plus the vault (Master Story Bank, CV evidence) into exactly two readable artefacts — the brief and the top 5 stories. Kess reads only finished artefacts.

The interview agenda is **five questions**: (1) what the company sells, (2) who they sell to, (3) what pains make those customers buy, (4) what this specific role must solve in the selling process, (5) how Kess's experience connects to those problems. The brief answers the first four and, for the fifth, only surfaces candidate evidence — **the connecting argument (the bridge) is always authored by Kess, out loud**, in a GPT Voice bridge drill run from a generated prompt (2026-08-23 redesign). Claude retrieves and verifies; GPT Voice drills and challenges; Kess authors. The drill is outside this skill and unscored — the booked interview itself is the external test.

The skill never hardcodes stories or checklists — every stage reads its asset file at run time, because these files get edited independently of this skill.

## Assets (read at run time, never copy into this file)

| File | Used by |
|---|---|
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Interview Prep SOP.md` | Reference for the full sequence, budgets, done-lines |
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Master Story Bank.md` | `brief` (story selection) |
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/CV Writing Rules.md` | `brief` (tone: humanised, no em/en dashes) |
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Pre-flight Checklist.md` | `preflight` |
| `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Role Brief.md` | `start` (seeds the research prompt), `brief` (JD keywords) |
| `Template/Interview Prep Tracker Template.md` | Fallback shape if a tracker must be created by hand |

The tracker note is the only piece of durable state. It carries `type: interview-prep-tracker`, `company`, `role`, `stage`, `interview_date`, `status`, and the Stage Checklist.

**Output locations.** Use exactly `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/`. Research prompt and pasted research output go in `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Research/`; brief and stories go in `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Interview/`. `00_Master System/` holds standing assets only and is read-only to this skill. Never create application files at the Job Hunt or vault root.

## Universal rules

1. **Announce before acting.** At the start of every stage, before doing anything else, say the stage's budget and its one-line "done means" (pull both from the SOP or the table below — do not paraphrase them away).
2. **Tick and stamp.** When a stage completes, check its box in the tracker's Stage Checklist and append a timestamp on that line (e.g. ` — done 2026-08-21 21:40`).
3. **ADHD-friendly shape.** Lead with the action, not the explanation. No walls of text; short lines, plain asks, one confirmation at a time.
4. **No argument → resume.** Search the vault for notes with frontmatter `type: interview-prep-tracker` and `status: in-progress`, take the most recently modified one, read its Stage Checklist, announce which stage is next (first unticked box), and run that stage. If the next box is B2 Bridge Drill, remind Kess that stage is his alone (paste the drill prompt into GPT Voice) and offer `preflight` when he is done. If no tracker exists, say so and ask whether to start one.
5. **Evidence eligibility is binding.** Only stories marked `ELIGIBLE` may be selected, copied into interview artefacts, or drilled. A `REVIEW_REQUIRED` story stays out of the generated story file and mock selector until its blocker is resolved and the Master Story Bank status is explicitly changed.

## Stage table

| Stage | Command | Budget | Done means |
|---|---|---|---|
| T0 Commit | `/interview-prep start <company>` | 15 min, invite night | Interview slot booked ≤48h out, partner informed, tracker note exists, research prompt written and fired into Gemini. No reading tonight. |
| B1 Brief | `/interview-prep brief` | 45 min | Research output pasted back; five-question brief + Top 5 Stories + Bridge Drill Prompt written, brief and stories read by Kess. |
| B2 Bridge Drill | — (Kess's own, no command) | ~60 min | Brief and stories read; drill prompt pasted into GPT Voice, Phase 1 recall and Phase 2 bridge rounds completed. |
| Pre-flight | `/interview-prep preflight` | 15 min before interview | Checklist all green: room claimed, partner told, notes closed, link/mic tested, water. |

## `start <company>`

1. Announce budget (15 min) and done-line.
2. Search the vault for an existing `type: interview-prep-tracker` note for this company.
   - Found → confirm it with Kess, continue.
   - Not found → tell Kess to run `Ctrl+Shift+I` to insert `Template/Interview Prep Tracker Template.md` and fill company/role/stage/interview date. If Kess cannot do that right now, create the tracker note directly using the same frontmatter and body shape as the template, asking Kess for company, role, stage, and interview datetime in chat.
3. Ask Kess to confirm, one at a time, as human steps — do not assume either:
   - "Booked the interview slot, ≤48h out — confirm?"
   - "Told your partner — confirm?"
4. Write `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Research/Research Prompt - <Company>.md`: one self-contained, paste-ready Gemini Deep Research prompt. Read `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Role Brief.md` first and weave the role context in. The prompt must ask for, in this order:
   - **How this business makes money**: who pays, for what, pricing model, revenue mix, and the two or three levers that actually drive revenue growth right now.
   - **Market structure and position**: market size and shape, where this company sits, what a general manager of this business would worry about this year.
   - **Competitors**: main rivals, how this company wins and loses deals.
   - **Recent news and strategy**: last 12 months — funding, launches, leadership, direction.
   - **Role context**: given the JD (paste key lines from Role Brief into the prompt), how this role connects to the revenue levers above; what the hiring manager likely needs this hire to fix.
   - Instruct Gemini to answer under those exact headers so the output pastes back cleanly.
5. Tell Kess: paste the prompt into Gemini Deep Research now (phone is fine), then close the laptop. When the report is ready — tonight or tomorrow — paste it into `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Research/Research Output - <Company>.md`.
6. Say explicitly: **"No reading tonight."**
7. Tick T0 in the tracker, timestamp it, stop. Do not chain into `brief`.

## `brief`

1. Announce budget (45 min) and done-line.
2. Resolve the company folder from the tracker's `company` field. Confirm with Kess if more than one folder plausibly matches.
3. Check `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Research/Research Output - <Company>.md`.
   - **Missing or empty → stop.** Tell Kess to paste the Gemini output there first (and where the prompt file is if it never ran). Do not write a brief from thin air.
4. Read the research output plus the canonical `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Role Brief.md`, `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Master Story Bank.md`, and `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/CV Writing Rules.md`. Filter the Story Bank by evidence status before drafting. Kess reads none of these — only the two finished artefacts.
5. Draft the why-company answer yourself first (≤90 words, conversational, no em or en dashes, humanised per CV Writing Rules). Both artefacts need it, so it is written once, up front.
6. Dispatch **two subagents in parallel**, handing each the research output, the Role Brief context, and the why-company draft (if subagents are unavailable, write the brief first, then the stories):
   - **Brief writer** → `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Interview/Interview Brief - <Company>.md`, structured as the five questions (frontmatter `structure: five-questions`):
     - **Voice**: written AS the hiring manager, addressed to Kess. Opens by saying the five questions are the interview's agenda: the first four are answered here, the fifth only gets candidate material.
     - **Q1 — What they sell**: product, pricing model, who they position against.
     - **Q2 — Who they sell to**: buyer profile, named customers, company context (founding, funding, size).
     - **Q3 — What pains make those customers buy**: market/regulatory drivers, day-to-day pains, proof points with numbers.
     - **Q4 — What this role must solve in the selling process**: where the role sits in their sales motion, what the hiring manager needs fixed, ending with the straight line from this role to their revenue growth (Kenny rule).
     - **Q5 — Candidate experiences**: a table of pain → `ELIGIBLE` story + short factual reminder. **Never write the connecting argument** — no "this proves I can..." sentences anywhere; the bridge is Kess's, spoken in the drill.
     - **Annex**: 2–3 HM worries with evidence-backed counters, the why-company answer from step 5, and any tactical reminder (e.g. salary).
     - **~One page.** No em/en dashes anywhere in the English prose.
   - **Story picker** → `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Interview/Top 5 Stories - <Company>.md`:
     - Pick up to 5 of the best `ELIGIBLE` Deck B stories from the Master Story Bank for this role and company. Never select, copy or recommend a `REVIEW_REQUIRED` story. If fewer than 5 are eligible, include only the eligible stories and name the uncovered question themes as gaps. Selection is weighted toward stories that can end in a revenue-shaped outcome for this company — Kenny rule: every selected story should let Kess draw a direct link between what he did and how a business makes money.
     - Copy each story's full speakable text with every `[FILL]` and `[Link: ...]` slot resolved from the research output; keep the bolded anchor points bold; close each story with its one-line revenue tie to this company.
     - Top of file: the compulsory anchors (A1 intro from the bank, why-company from step 5) so the file is fully self-contained — Kess never opens another note.
     - Bottom of file: a small selector table (question theme → which story), for use during the voice-AI mock.
     - If the file already exists for this company, overwrite it fresh.
7. After both subagents finish, write `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/Interview/Bridge Drill Prompt - <Company>.md`: one self-contained, paste-ready GPT Voice block (model it on `Companies/Cogna/Interview/Bridge Drill Prompt - Cogna.md`). It must contain:
   - **Rules**: short turns, one question at a time; never supply an answer Kess has not attempted; check every answer against the answer key and make him re-say corrections; push toward ~60-second answers; **never author a bridge — challenge and reject only**.
   - **Phase 1**: questions 1–4, asked one at a time, answered from memory.
   - **Phase 2**: one Q5 pain at a time — Kess names the experience and builds the connection himself; generic or superficial bridges get rejected for another attempt; pains he cannot connect get flagged plainly as uncovered.
   - **Debrief**: dropped facts, weak or rejected bridges, uncovered pains. Nothing else.
   - **Answer key**: Q1–Q4 facts and the Q5 pain list with factual reminders, compiled from the finished brief; plus Kess's verified personal facts with an instruction to question any number not in the key. Never read out unprompted.
8. Tell Kess all three files are ready and where they are. Done means he has read the brief and the stories.
9. Hand off B2 explicitly: "Next is yours — read both, then paste the drill prompt into GPT Voice and run the bridge drill. Nothing to run here until preflight." Tick B1, timestamp it. B2 is Kess's box to tick (or tell Claude to tick).

## `preflight`

One item at a time, not a dump.

1. Announce budget (15 min, right before the interview) and done-line.
2. If B2 Bridge Drill is unticked, ask once: "Did you read the brief and stories and run the bridge drill in GPT Voice?" Yes → tick B2 with timestamp. No → say the risk in one line and let Kess decide whether to proceed; do not block.
3. Read `Pre-flight Checklist.md` fresh.
4. Walk each checkbox item in order: state it, wait for Kess to confirm done, mark it. Do not move to the next item until the current one is confirmed.
5. When all items are confirmed, tell Kess they're clear, tick Pre-flight in the tracker, timestamp it.

## Self-catch

If you catch yourself writing a brief without a pasted research output, summarising research from memory, or printing a story from memory instead of reading the Master Story Bank for this run, stop and read the file. If you catch yourself scoring, drilling, or mocking Kess in chat — that was removed on purpose; the drill belongs to Kess and GPT Voice. If you catch yourself writing a bridge sentence — what an experience proves about this company — in any artefact, delete it; the bridge is Kess's alone. If you catch yourself writing more than a short paragraph before Kess has to act or answer, stop and cut it down to the next single action.
