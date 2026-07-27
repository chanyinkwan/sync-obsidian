---
name: run-study-session
description: Use when Chukwan wants to run an AWS SAA-C03 study session, start today's study, do a retrieval warm-up, or continue exam prep. Trigger on "run a study session", "start studying", "study session", "開始溫習", "SAA study".
---

# Run Study Session

## 0. North star and the three layers

Pass SAA-C03 on 2026-08-23 by building real architectural understanding — never by cramming answer keys. Two horizons: **by exam day**, pass plus genuine mastery of a high-leverage CORE (per `00 Agent/Study Triage.md`); **beyond exam day**, keep mastering the remaining tail on the normal Socratic trajectory. This is Gate 2 of the SA career transition, not a one-shot exam hack.

This system runs on three layers — know which one a file belongs to before touching it:
- **Layer 1, Coverage/Retention**: the frozen Syllabus + the `01 Dashboard` readiness views + `00 Agent/Exam Map.md`, tracking each topic through **Untouched < Touched < Proven**.
- **Layer 2, Remediation Pointer**: `00 Agent/Cantrill Index.md` (syllabus-id → lecture file → video URL).
- **Layer 3, Readiness Gate**: the mock log + sealed-mock inventory + the go/no-go decision. That decision itself is weekly-review territory, not this skill's.

Before any reschedule decision, check whether the AWS ESL +30-min accommodation is in play — it changes what "behind" means.

## 1. Load context, in order

1. `Knowledge/Professionals/AWS SAA-C03/00 Agent/Study Session Protocol.md`, the canonical session rules. This always wins over anything below or over memory of a previous run.
2. `00 Agent/Exam Map.md`, for domain weights and coverage so far, including each topic's Touched/Proven state.
3. `00 Agent/Study Triage.md`, for which syllabus-ids are Core (need Proven), Tail (need Functional), or Sacrifice (skip is enough) — this is what tells the session what today's coverage target actually is.
4. `01 Dashboard/AWS SAA-C03 Home.md`, for days remaining and current focus.
5. `01 Dashboard/Active Unknowns.md`, for open blind spots.
6. Glob `02 Notes/` and `03 Questions/` for retrieval-warm-up candidates: items 3+ days old by their `date` field and not yet mastered.
7. `00 Agent/Cantrill Index.md` — **load only the file path, then grep it for the row(s) matching today's concept.** Never dump the full index into context; it exists to answer "which lecture" one lookup at a time, not to be read cover to cover.

## 2. Model check

This session is designed to run on Sonnet. If the current model is heavier, mention it once, then continue. Never block the session on model choice.

## 3. Run the session exactly per the protocol

- **Open** (about 10 min): retrieval warm-up first (previous session's 下一步, then 1 to 2 more items per step 1), map briefing, today's scope in one sentence, baseline check of what's already in his head, confirm timeframe. If today's window is closer to 15 minutes, run the **Minimum Viable Day** instead: retrieval warm-up only, log it, skip Study/Close. It still counts as not breaking the chain.
- **Study** (about 35 min): teach FROM the Cantrill transcript for today's scope, in Cantrill's own build-up order, then validate — this layers on top of the teaching loop in the Protocol and the explanation micro-structure — **analogy → architecture flow → exam callout → real-world why**. This layers on top of persona-first, English-first, and diagnostic layering; it does not replace them. Shape the session by whichever phase in the Phase arc the current date falls into. From 2026-07-28 onward, end the question set with one cross-domain scenario. During drill phases, pull material in this order: section-quiz warm-up → fresh scenario drills → protected full mock. Sealed practice exams are quarantined — never used as daily drill material, only as the two unseen mocks in the readiness gate.
- **Stuck escalation** (inside Study): unaided fail → foundational correction → fresh validation question → only if it still fails, assign one specific short Cantrill video as JIT remediation, naming the exact lecture, not just "review this domain," and flag it on the relevant note. Never escalate to a video assignment after a single miss.
- **Promotion bar:** Touched → Proven is governed solely by the mastery test's single clock in [[Agent Instructions]] — 2 correct **unaided** retrievals, with at least one happening 3+ days (72h) after the note reached distilled. Guessed-correct is never mastery, in any phase — this holds identically in drill and mock, not only in Socratic teaching.
- **Prioritisation** (drill and mock phases): priority = domain weight × gap to target. Keep cross-domain interleaving going per the rule above; it does not stop once drill starts.
- **Readiness gate** (context for the tutor, not a decision this skill makes): two unseen timed mocks ≥80% overall — a self-imposed buffer above the official pass line of roughly 720/1000 (≈72%) — with a 70–75% per-domain floor. Fallback: 76% overall with every domain floor met still counts as GO, so the buffer alone can't force a pointless no-go.
- **Close** (15 min): joint reflection, unaided recall with no notes, then handoff. After **every** mock, not just a bad one, run an autopsy pass tagged by taxonomy — knowledge-gap vs misread vs trap-pattern. Full mocks are full-length, timed, one sitting (this trains reading stamina, not just recall); cap flag-and-move time at 90 seconds per question.

## 4. Tooling split

- **NotebookLM** (`aws-saa-c03-architectural-prob`): exam-scope and official-behaviour citations. Conserve queries — reach for it when a citation matters, not for routine explanation.
- **Cantrill Index** (local, grepped): "which video to watch" pointers. NotebookLM cannot cite a single video URL, so don't ask it to do Layer 2's job.

If either is unavailable or a call fails:
- Name the failure out loud and continue teaching from model knowledge. Never turn study time into troubleshooting.
- After the close, log the failure to `01 Dashboard/Fix List.md`. Do not fix it now.

## 5. Close and handoff

1. Dispatch the `saa-knowledge-manager` agent with the raw session output (goals, demonstrated understanding, unresolved concepts, reflection, one next step, never the full transcript). It writes, in order: session note, question notes, knowledge notes, unknowns triage, dashboard update.
2. Update the coverage column and detail in `00 Agent/Exam Map.md` yourself in the main session, or instruct the agent explicitly to do it. This file lives in `00 Agent/`, outside saa-knowledge-manager's usual write scope, so it is not touched unless told to. Record Touched/Proven transitions, not just a binary covered/not.

## 6. Hard rules recap

- One question at a time; wait for his reasoning before moving on.
- **Delivery language (bilingual).** Run the whole session in mixed Traditional Chinese + English. Keep every technical term in English — AWS service names, exam vocabulary, and any concept the exam tests in English (e.g. `IAM Role`, `Security Group`, `Multi-AZ`, `SigV4`, `Explicit Deny`). Write all surrounding explanation, questions, and reflection prose in Traditional Chinese (繁體中文); switch to English only for the terms themselves. Rationale: the exam is in English so terms must stay English, but Traditional-Chinese prose lowers reading friction and cognitive load. This supersedes the older "English term first, Chinese as clarifier" phrasing — terms stay English, but the connective explanation is now Traditional-Chinese-dominant.
- Guessed-correct is never mastery, in every phase — Socratic, drill, or mock. Record what actually happened.
- Promotion to Proven runs on the single mastery clock: 2 unaided correct retrievals, at least one 3+ days (72h) after distilled, not one lucky pass.
- A miss that triggers JIT remediation gets logged plus a video assignment (flagged on the note), not a full repair loop.
- Capture his reasoning verbatim, mistakes included; clean formatting only, never the logic.
- Never paste the full chat transcript into the vault.
