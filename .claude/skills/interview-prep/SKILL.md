---
name: interview-prep
description: Use when Chukwan wants to run or continue interview preparation for a Sales Engineer / Presales Consultant role, book and commit to an interview invite, generate the Gemini deep-research prompt, turn pasted research output into a one-page hiring-manager-POV brief plus the top 5 tailored stories, or do the pre-call checklist. Trigger on "interview prep", "prep for the interview", "prep for the screen", "/interview-prep", or Chukwan mentioning that an interview invite has arrived.
---

# Interview Prep

## Core principle

Readiness is proven, not felt. A fixed budget across three skill stages replaces deferral, unread research, and gut-feel confidence. Division of labour: **Gemini gathers, Claude synthesises, Kess speaks.** Gemini Deep Research does the broad sweep (business model, market, competitors); Claude turns the pasted output plus the vault (Master Story Bank, CV evidence) into exactly two readable artefacts — the brief and the top 5 stories. Kess reads only finished artefacts, then mocks out loud with a real-time voice AI on his own; the mock is deliberately outside this skill and unscored (2026-08-21 redesign — the booked interview itself is the external test).

The skill never hardcodes stories or checklists — every stage reads its asset file at run time, because these files get edited independently of this skill.

## Assets (read at run time, never copy into this file)

| File | Used by |
|---|---|
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Interview Prep SOP.md` | Reference for the full sequence, budgets, done-lines |
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Master Story Bank.md` | `brief` (story selection) |
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/CV Writing Rules.md` | `brief` (tone: humanised, no em/en dashes) |
| `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Pre-flight Checklist.md` | `preflight` |
| `Companies/<Company — Role>/Role Brief.md` | `start` (seeds the research prompt), `brief` (JD keywords) |
| `Template/Interview Prep Tracker Template.md` | Fallback shape if a tracker must be created by hand |

The tracker note is the only piece of durable state. It carries `type: interview-prep-tracker`, `company`, `role`, `stage`, `interview_date`, `status`, and the Stage Checklist.

**Output locations.** Company folders live at `Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/`. Research prompt and pasted research output go in `<Company folder>/Research/`; brief and stories go in `<Company folder>/Interview/`. `00_Master System/` holds standing assets only and is read-only to this skill. Never create files at the vault root.

## Universal rules

1. **Announce before acting.** At the start of every stage, before doing anything else, say the stage's budget and its one-line "done means" (pull both from the SOP or the table below — do not paraphrase them away).
2. **Tick and stamp.** When a stage completes, check its box in the tracker's Stage Checklist and append a timestamp on that line (e.g. ` — done 2026-08-21 21:40`).
3. **ADHD-friendly shape.** Lead with the action, not the explanation. No walls of text; short lines, plain asks, one confirmation at a time.
4. **No argument → resume.** Search the vault for notes with frontmatter `type: interview-prep-tracker` and `status: in-progress`, take the most recently modified one, read its Stage Checklist, announce which stage is next (first unticked box), and run that stage. If the next box is B2 Read & Mock, remind Kess that stage is his alone and offer `preflight` when he is done. If no tracker exists, say so and ask whether to start one.

## Stage table

| Stage | Command | Budget | Done means |
|---|---|---|---|
| T0 Commit | `/interview-prep start <company>` | 15 min, invite night | Interview slot booked ≤48h out, partner informed, tracker note exists, research prompt written and fired into Gemini. No reading tonight. |
| B1 Brief | `/interview-prep brief` | 45 min | Research output pasted back; brief + Top 5 Stories written in parallel and both read by Kess. |
| B2 Read & Mock | — (Kess's own, no command) | ~60 min | Brief and stories read; at least one full mock said out loud with a real-time voice AI. |
| Pre-flight | `/interview-prep preflight` | 15 min before interview | Checklist all green: room claimed, partner told, notes closed, link/mic tested, water. |

## `start <company>`

1. Announce budget (15 min) and done-line.
2. Search the vault for an existing `type: interview-prep-tracker` note for this company.
   - Found → confirm it with Kess, continue.
   - Not found → tell Kess to run `Ctrl+Shift+I` to insert `Template/Interview Prep Tracker Template.md` and fill company/role/stage/interview date. If Kess cannot do that right now, create the tracker note directly using the same frontmatter and body shape as the template, asking Kess for company, role, stage, and interview datetime in chat.
3. Ask Kess to confirm, one at a time, as human steps — do not assume either:
   - "Booked the interview slot, ≤48h out — confirm?"
   - "Told your partner — confirm?"
4. Write `<Company folder>/Research/Research Prompt - <Company>.md`: one self-contained, paste-ready Gemini Deep Research prompt. Read `Role Brief.md` first and weave the role context in. The prompt must ask for, in this order:
   - **How this business makes money**: who pays, for what, pricing model, revenue mix, and the two or three levers that actually drive revenue growth right now.
   - **Market structure and position**: market size and shape, where this company sits, what a general manager of this business would worry about this year.
   - **Competitors**: main rivals, how this company wins and loses deals.
   - **Recent news and strategy**: last 12 months — funding, launches, leadership, direction.
   - **Role context**: given the JD (paste key lines from Role Brief into the prompt), how this role connects to the revenue levers above; what the hiring manager likely needs this hire to fix.
   - Instruct Gemini to answer under those exact headers so the output pastes back cleanly.
5. Tell Kess: paste the prompt into Gemini Deep Research now (phone is fine), then close the laptop. When the report is ready — tonight or tomorrow — paste it into `<Company folder>/Research/Research Output - <Company>.md`.
6. Say explicitly: **"No reading tonight."**
7. Tick T0 in the tracker, timestamp it, stop. Do not chain into `brief`.

## `brief`

1. Announce budget (45 min) and done-line.
2. Resolve the company folder from the tracker's `company` field. Confirm with Kess if more than one folder plausibly matches.
3. Check `<Company folder>/Research/Research Output - <Company>.md`.
   - **Missing or empty → stop.** Tell Kess to paste the Gemini output there first (and where the prompt file is if it never ran). Do not write a brief from thin air.
4. Read the research output, `Role Brief.md`, `Master Story Bank.md`, and `CV Writing Rules.md`. Kess reads none of these — only the two finished artefacts.
5. Draft the why-company answer yourself first (≤90 words, conversational, no em or en dashes, humanised per CV Writing Rules). Both artefacts need it, so it is written once, up front.
6. Dispatch **two subagents in parallel**, handing each the research output, the Role Brief context, and the why-company draft (if subagents are unavailable, write the brief first, then the stories):
   - **Brief writer** → `<Company folder>/Interview/Interview Brief - <Company>.md`:
     - **Voice**: written AS the hiring manager, addressed to Kess. Opens roughly "Here is what I expect a candidate to know about us, and why you specifically fit."
     - **Part 1 — How they make money**: ~3 bullets (who pays, for what, what drives growth) plus one sentence stating the straight line from this role to their revenue growth.
     - **Part 2 — Five facts you must be able to say**: up to 5 bullets (company, product, market, competitors, recent news), each speakable in one breath.
     - **Part 3 — My worries about you, and your counter**: 2–3 objections a HM would plausibly hold about Kess's profile, each with a one-line counter drawn from real evidence (not invented).
     - **Part 4 — Your why-company answer**: the pre-drafted text from step 5.
     - **Hard cap: ~500 words, one page.** No em/en dashes anywhere in the prose.
   - **Story picker** → `<Company folder>/Interview/Top 5 Stories - <Company>.md`:
     - Pick the 5 best Deck B stories from the Master Story Bank for this role and company. Selection is weighted toward stories that can end in a revenue-shaped outcome for this company — Kenny rule: every story should let Kess draw a direct link between what he did and how a business makes money.
     - Copy each story's full speakable text with every `[FILL]` and `[Link: ...]` slot resolved from the research output; keep the bolded anchor points bold; close each story with its one-line revenue tie to this company.
     - Top of file: the compulsory anchors (A1 intro from the bank, why-company from step 5) so the file is fully self-contained — Kess never opens another note.
     - Bottom of file: a small selector table (question theme → which story), for use during the voice-AI mock.
     - If the file already exists for this company, overwrite it fresh.
7. Tell Kess both files are ready and where they are. Done means he has read both.
8. Hand off B2 explicitly: "Next is yours — read both, then mock out loud with your voice AI. Nothing to run here until preflight." Tick B1, timestamp it. B2 is Kess's box to tick (or tell Claude to tick).

## `preflight`

One item at a time, not a dump.

1. Announce budget (15 min, right before the interview) and done-line.
2. If B2 Read & Mock is unticked, ask once: "Did you read the brief and stories and run at least one voice mock?" Yes → tick B2 with timestamp. No → say the risk in one line and let Kess decide whether to proceed; do not block.
3. Read `Pre-flight Checklist.md` fresh.
4. Walk each checkbox item in order: state it, wait for Kess to confirm done, mark it. Do not move to the next item until the current one is confirmed.
5. When all items are confirmed, tell Kess they're clear, tick Pre-flight in the tracker, timestamp it.

## Self-catch

If you catch yourself writing a brief without a pasted research output, summarising research from memory, or printing a story from memory instead of reading the Master Story Bank for this run, stop and read the file. If you catch yourself scoring, drilling, or mocking Kess in chat — that was removed on purpose; the mock belongs to Kess and his voice AI. If you catch yourself writing more than a short paragraph before Kess has to act or answer, stop and cut it down to the next single action.
