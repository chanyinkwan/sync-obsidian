# Interview Prep System — Design Spec

Date: 2026-08-19
Status: approved-in-chat, pending file review
Owner: Chukwan (Kess). Spec/review: Fable. Build: Sonnet (routine) + Opus (judgment-heavy).

## 1. Purpose

A fixed, repeatable 3-hour procedure that takes Kess from "interview invite received" to "provably ready", for Sales Engineer / Presales Consultant roles, covering two stages: recruiter/AI screening and hiring-manager round.

Failure modes this system must kill (from the 2026-08-17 SureCloud post-mortem):

1. No time estimate → invite deferred for days ("I'll do it when I'm ready").
2. Research generated but never digested (comprehensive PDFs ≠ interview input).
3. Near-zero spoken reps; delivery and unexpected questions were the actual weaknesses.
4. Readiness decided by gut feeling; the private rule ("speak the framework without looking") is never scored.
5. No environment protocol (partner interruption mid-recording).

Design principle (from Kess's commitment mechanism): prep only happens when it is **irreversible + externally scored + pre-announced**. Every stage below is built to satisfy at least one of those.

## 2. Architecture — three pieces

1. **Prep Tracker template** — `Templates/Interview Prep Tracker Template.md`, a Templater template inserted by Obsidian hotkey `Ctrl+Shift+I`. One tracker note per application: stage checklist with time budgets, gate log. The "where am I" surface.
2. **Standing assets** — `Knowledge/Source/Job Hunt/$Interview System/`, built once, reused every application (see §4).
3. **`/interview-prep` skill** — `.claude/skills/interview-prep/SKILL.md`, drives each stage in chat and writes progress back into the tracker note. Sibling of `research-baseline` and `craft-cv`. It **invokes** `research-baseline` for research; it never duplicates it.

Layering rule: the multi-block research notes are the **machine layer** — Kess never reads them. The one-page brief (§5, B1) is the **only human-facing research artifact**.

## 3. The sequence — 3 hours total, fixed budgets

| Stage | Command | Budget | Done means |
|---|---|---|---|
| T0 Commit | `/interview-prep start <company>` | 15 min, invite night | Interview slot booked ≤48h out, partner informed, tracker note exists, `research-baseline` triggered. No reading tonight. |
| B1 Brief | `/interview-prep brief` | 45 min | One-page HM-POV brief written and read by Kess. Block notes never opened by Kess. |
| B2 Reps | `/interview-prep reps` | 60 min | Compulsory anchors + 5 competency stories said out loud at ≤60s each; selector drill run. |
| B3 Gate | `/interview-prep gate` | 45 min | Scored mock passed (§7) and verdict logged in tracker. |
| Pre-flight | `/interview-prep preflight` | 15 min before interview | Checklist all green: room claimed, partner told, notes closed, link/mic tested, water. |

Every stage start: the skill announces the stage's budget and its single "done means" line before doing anything else.

## 4. Standing assets — file-by-file

Location: `Knowledge/Source/Job Hunt/$Interview System/`. All Markdown. Filenames use plain hyphens.

| File | Builder | Content requirements |
|---|---|---|
| `Interview Prep SOP.md` | Sonnet | The §3 sequence as a human-readable one-pager, written second person ("you"), with the Friday-night walkthrough. ≤1 page. |
| `Master Story Bank.md` | **Opus** | §6 structure. Sources: `Knowledge/Source/Job Hunt/Sure Cloud/SureCloud Five Master Competency Stories.md` (generalise, don't copy company-specific links), canonical career timeline memory, `CV Context — Master AI SaaS Presales.json`. HARD CONSTRAINT: nothing from the excluded-evidence list (chanyinkwan repos, fabricated freelance AI role) may appear. |
| `Question Bank - Screen.md` | **Opus** | 25–35 questions typical of recruiter calls and asynchronous AI screenings for SE/presales roles, each tagged with the competency or anchor it maps to. Include motivation, salary/logistics, and the SureCloud-style behavioural set. |
| `Question Bank - Hiring Manager.md` | **Opus** | 25–35 HM-round questions: competency/behavioural, role-fit, day-to-day scenarios (discovery call role-play prompts, objection handling), "why us", career-story probes. Same competency tagging. |
| `Readiness Rubric.md` | **Opus** | The §7 rubric, with a worked scoring example (one strong answer, one weak answer, both scored). |
| `Pre-flight Checklist.md` | Sonnet | ≤10 checkbox items, includes: partner informed with do-not-enter window, phone silenced, interview link + mic/camera tested, water, materials closed, tracker note open, 60s structure said once as warm-up. |

## 5. B1 Brief — the digest contract

`/interview-prep brief` reads `Research - Index.md` and every research block note in the job folder (plus `$Categories` blocks it references) and writes `<Job Folder>/Interview Brief - <Company>.md`:

- **Voice**: written AS the hiring manager, addressed to Kess. "Here is what I expect a candidate to know about us, and why you specifically fit."
- **Part 1 — Five facts you must be able to say** (company, product, market, competitors, recent news). Five bullets max, each speakable in one breath.
- **Part 2 — My worries about you, and your counter** (2–3 objections the HM would hold about Kess's profile, each with a one-line counter drawn from real evidence).
- **Part 3 — Your why-company answer, pre-drafted in your voice** (≤90 words, conversational, no em/en dashes, humanised per CV Writing Rules tone).
- Hard cap: one page (~400 words). If research blocks are missing, the skill invokes `research-baseline` first and tells Kess to come back when blocks land; it never writes a brief from thin air.

## 6. Master Story Bank structure

**Deck A — Compulsory anchors** (5 items):

1. Tell me about yourself (60–90s version).
2. Why this role (presales/SE).
3. Why this company — **template with a fill slot**; the per-company text comes from the B1 brief Part 3.
4. Why this industry (AI SaaS / cloud infrastructure).
5. Questions for them (3 defaults + 1 fill slot from the brief).

**Deck B — Five universal competencies**, one master story each, STAR + Link at ≤60s, numerical proof points marked in bold:

1. Consultative discovery and scoping — a time you scoped and delivered a tailored solution for a client.
2. Technical translation — explained complex technology to a non-technical buyer and won the decision.
3. Objection handling and stakeholder buy-in.
4. Commercial judgment and value selling — qualification, ROI, expansion.
5. Problem-solving under pressure / fast learning — new product or domain mastered against a deadline.

Plus the **fast story selector table** (question keyword → story), carried over and generalised from the SureCloud file.

## 7. Milestone Gate — proof of readiness

Protocol (`/interview-prep gate`):

1. Skill draws 5 questions: 2 from the compulsory anchors, 3 from the stage's question bank weighted toward the JD's keywords.
2. Per question: Kess says the answer **out loud with a timer, materials closed**, then types what he actually said (own words; dictation fine).
3. Skill scores each answer on 4 axes, 1 point each: **Structure** (STAR+Link present), **Timing** (self-reported ≤75s), **Specificity** (at least one concrete number or named artifact), **Company link** (ends by tying to this company/role).
4. **Pass = 4 of 5 answers scoring ≥3/4.** Fail → skill names the weak answers only; redo those, not the whole prep.
5. Verdict block appended to the tracker note: date, stage, per-question scores, verdict `READY` / `NOT YET`, and the typed answers. This is the dated, externally-scored proof.

## 8. Tracker template + hotkey

`Templates/Interview Prep Tracker Template.md` (Templater syntax):

- Prompts on insert: company, role, stage (screen / hiring-manager), interview datetime.
- Frontmatter: `type: interview-prep-tracker`, company, role, stage, interview_date, status.
- Body: the §3 table as a checkbox list with budgets, links to `$Interview System` assets and the job folder, empty `## Gate Log` section (the skill appends here).
- Registration (Sonnet): add the template to `enabled_templates_hotkeys` in `.obsidian/plugins/templater-obsidian/data.json`; bind `Ctrl+Shift+I` in `.obsidian/hotkeys.json` to that Templater command. Verify the key is unbound first; if taken, pick `Ctrl+Alt+I` and report.

## 9. Skill contract (`.claude/skills/interview-prep/SKILL.md`)

- Frontmatter description triggers on: "interview prep", "prep for the interview/screen", "/interview-prep", "run the gate", an interview invite being mentioned.
- Subcommands per §3; no argument → read the newest tracker note, announce current stage, run it.
- Every stage: announce budget + done-line first; write stage checkbox + timestamp back to the tracker note when done.
- ADHD output shape is mandatory in-skill: lead with the action, one question at a time in reps/gate, no walls of text.
- Gate questions come from the question-bank files at run time — the skill never hardcodes questions.
- The skill reads `Master Story Bank.md` during reps to check the told story against the recorded proof points, and flags drift.

## 10. Build dispatch

| Task | Agent | Inputs |
|---|---|---|
| 1. Tracker template + Templater/hotkey registration | Sonnet | §8 |
| 2. SOP + Pre-flight Checklist | Sonnet | §3, §4 |
| 3. Master Story Bank | Opus | §6 + named sources + excluded-evidence rule |
| 4. Two question banks + rubric | Opus | §4, §7 |
| 5. SKILL.md | Sonnet | §9, with §3/§5/§7 inlined in the prompt |
| 6. Review + wiring check | Fable | everything |

Tasks 1–4 are independent (parallel). Task 5 after 3–4 land (skill references the asset filenames). Task 6 last: Fable verifies file locations, Templater registration JSON validity, excluded-evidence scan of the story bank, and one dry-run of `/interview-prep` routing.

## 11. Out of scope (explicit)

- Technical/demo round and panel/final round playbooks (add later as new question banks + stages; architecture already accommodates).
- Any change to `research-baseline` internals.
- Salary negotiation content.
- Automation of interview-slot booking (T0 is a human commitment step by design).
