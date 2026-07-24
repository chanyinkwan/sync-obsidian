---
name: run-study-session
description: Use when Chukwan wants to run an AWS SAA-C03 study session, start today's study, do a retrieval warm-up, or continue exam prep. Trigger on "run a study session", "start studying", "study session", "開始溫習", "SAA study".
---

# Run Study Session

## 1. Load context, in order

1. `Knowledge/Professionals/AWS SAA-C03/00 Agent/Study Session Protocol.md`, the canonical session rules. This always wins over anything below or over memory of a previous run.
2. `00 Agent/Exam Map.md`, for domain weights and coverage so far.
3. `01 Dashboard/AWS SAA-C03 Home.md`, for days remaining and current focus.
4. `01 Dashboard/Active Unknowns.md`, for open blind spots.
5. Glob `02 Notes/` and `03 Questions/` for retrieval-warm-up candidates: items 3+ days old by their `date` field and not yet mastered.

## 2. Model check

This session is designed to run on Sonnet. If the current model is heavier, mention it once, then continue. Never block the session on model choice.

## 3. Run the session exactly per the protocol

- **Open** (about 10 min), in this order. Steps 1 to 3 are mandatory and none may be skipped or merged:
  1. **Ask how long he has today.** Ask it outright and wait for an answer. Never assume the default 45+15, and never begin the study block without a stated timeframe.
  2. **Brief current progress**: sessions completed and what they covered, the four domains and their weights, which domains are untouched, days remaining to the exam, and the current Phase.
  3. **State today's goal and scope in one sentence, sized to the timeframe he just gave.** The scope is a function of his available time, so it cannot be stated before step 1.
  4. Retrieval warm-up: previous session's 下一步 first, then 1 to 2 more items per step 1 of this skill.
  5. Baseline check: ask what is already in his head on today's topic before teaching it. Assume nothing.
- **Study** (about 35 min): follow the teaching loop, and shape it by whichever phase in the Phase arc the current date falls into (Foundations, Drill, or Mock + repair). From 2026-07-28 onward, end the question set with one cross-domain scenario.
- **Close** (15 min): joint reflection, unaided recall with no notes, then handoff.

## 4. NotebookLM

Use the MCP tools if available, for source-grounded citations. Conserve queries: reach for it when a citation matters (exam scope, weighting, official behaviour), not for routine explanation.

If unavailable or a call fails:
- Name the failure out loud and continue teaching from model knowledge. Never turn study time into troubleshooting.
- After the close, log the failure to `01 Dashboard/Fix List.md`. Do not fix it now.

## 5. Close and handoff

1. Dispatch the `saa-knowledge-manager` agent with the raw session output (goals, demonstrated understanding, unresolved concepts, reflection, one next step, never the full transcript). It writes, in order: session note, question notes, knowledge notes, unknowns triage, dashboard update.
2. Update the coverage column and detail in `00 Agent/Exam Map.md` yourself in the main session, or instruct the agent explicitly to do it. This file lives in `00 Agent/`, outside saa-knowledge-manager's usual write scope, so it is not touched unless told to.

## 6. Hard rules recap

- One question at a time; wait for his reasoning before moving on.
- English term first, 中文 as clarifier, in both explanations and questions.
- Guessed-correct is never mastery; record what actually happened.
- Capture his reasoning verbatim, mistakes included; clean formatting only, never the logic.
- Never paste the full chat transcript into the vault.
