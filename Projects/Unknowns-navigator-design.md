
# Unknowns Navigator — Design Spec

Date: 2026-07-16
Status: approved-pending-user-review
Source philosophy: "A Field Guide to Fable: Finding Your Unknowns" (Thariq / trq212) — as summarised by Chukwan in the design conversation. Vault stub: [[Fable Field Guide]]

## 1. Goal

A vault-wide, modular, incrementally-amendable playbook that turns the article's Map-vs-Territory / 4-Unknowns philosophy into a repeatable LLM-guided process, driven by an installed Claude Code skill acting as a **strict navigator** (one question per message, no cognitive dumping). Scope: **both tracks** of the dual-track system — Work (防守: deals, RFPs, workshops, sample ops) and Hub (進攻: SA transition, job hunt, personal projects). No telecom assumptions in any protocol; telecom appears only in seed examples.

## 2. Architecture (agreed)

Four layers, strict separation:

1. **Engine** — `.claude/skills/unknowns-navigator/SKILL.md`. Pure behavior (state machine + interaction rules). Zero domain content. Rarely edited; requires Claude Code restart to change.
2. **Playbook** — `Knowledge/Playbook - Finding Unknowns/`. Hub, 3 thin stage maps, 9 technique cards, Ledger, Dictionary. The unit of amendment. Read fresh every session; edits take effect immediately.
3. **Run notes** — `Operation Note/Unknowns Runs/Run - <engagement> (<YYYY-MM>).md`. One per engagement. Holds state (frontmatter) + all answers/outputs (body). Survives session death → resumability.
4. **Learning loop** — Stage 3 distills lessons into the Ledger; Ledger lines with a tag recurring ≥3 times get *proposed* (never auto-applied) as permanent edits to technique cards.

## 3. File inventory (18 files)

| # | Path | Role |
|---|------|------|
| 1 | `.claude/skills/unknowns-navigator/SKILL.md` | Engine |
| 2 | `Knowledge/Playbook - Finding Unknowns/Playbook - Finding Unknowns (Hub).md` | Front door / system map |
| 3 | `Knowledge/Playbook - Finding Unknowns/Stage 1 - Pre-Implementation.md` | Stage map |
| 4 | `Knowledge/Playbook - Finding Unknowns/Stage 2 - During-Implementation.md` | Stage map |
| 5 | `Knowledge/Playbook - Finding Unknowns/Stage 3 - Post-Implementation.md` | Stage map |
| 6 | `Knowledge/Playbook - Finding Unknowns/Technique - Blind Spot Pass.md` | Technique |
| 7 | `Knowledge/Playbook - Finding Unknowns/Technique - Interview.md` | Technique |
| 8 | `Knowledge/Playbook - Finding Unknowns/Technique - Brainstorm & Prototypes.md` | Technique |
| 9 | `Knowledge/Playbook - Finding Unknowns/Technique - References.md` | Technique |
| 10 | `Knowledge/Playbook - Finding Unknowns/Technique - Action Plan.md` | Technique |
| 11 | `Knowledge/Playbook - Finding Unknowns/Technique - Implementation Notes.md` | Technique |
| 12 | `Knowledge/Playbook - Finding Unknowns/Technique - Pitch & Explainer.md` | Technique |
| 13 | `Knowledge/Playbook - Finding Unknowns/Technique - Quiz (Proof of Readiness).md` | Technique |
| 14 | `Knowledge/Playbook - Finding Unknowns/Technique - Ledger Distillation.md` | Technique |
| 15 | `Knowledge/Playbook - Finding Unknowns/Ledger - Lessons Learned.md` | Incremental learning store |
| 16 | `Knowledge/Playbook - Finding Unknowns/Dictionary - Ubiquitous Language.md` | Vocabulary |
| 17 | `Template/Unknowns Run Template.md` | Run note skeleton |
| 18 | `Knowledge/Skills/Skill - Unknowns Navigator.md` | Vault design note (convention) |

**Filename rules:** no `:` or `/` in any filename (Windows/Obsidian). Wikilinks in cards must match these names exactly.

**Language rules:** SKILL.md and all playbook cards in English (LLM-consumed). File 18's 設計筆記 section in Cantonese, matching the register of `Knowledge/Skills/Skill - Plan Daily Ops.md`. Trigger phrases bilingual.

## 4. Run note contract

### Frontmatter (engine-owned keys marked ⚙)

```yaml
---
type: unknowns-run
status: open          # open | closed          ⚙
stage: 0              # 0 setup | 1 | 2 | 3    ⚙
step: setup           # technique slug | done  ⚙
priority: normal      # normal | urgent — user sets urgent; engine resets ⚙
contexts: work        # work | hub (same vocabulary as TaskNotes)
project: "[[FWA Business Development]]"
domains: [h3g, fwa, spectrum]   # free-form kebab-case, drives ledger matching
deadline: 2026-08-01  # optional
started: 2026-07-16
---
```

### Body skeleton (fixed section names — technique Output contracts target these)

```markdown
# Run - <engagement>
## Brief (the Map)
## 4 Unknowns Matrix
## Interview Log
## Brainstorm Directions
## References
## Action Plan
## Implementation Log
## ⚡ Fast-Pass
## Pitch
## Quiz Results
## Reflection & Lessons
```

The 4 Unknowns Matrix is a 2×2 markdown table: Known Knowns (from the brief) / Known Unknowns (open questions, each with an owner) / Unknown Knowns (assumptions surfaced) / Unknown Unknowns (discovered gaps, dated when found).

## 5. Technique card contract (all 9 cards identical shape)

```markdown
---
type: technique
stage: 1                      # 1 | 2 | 3
slug: blind-spot-pass         # used as the run note step value
ledger-tags: [estimation, stakeholder, logistics]   # process-level tags
---
# Technique - <Name>
## Purpose            (1–2 lines)
## When to run / skip (explicit skip conditions; "never skip" is valid)
## Protocol           (numbered steps the navigator executes verbatim)
## Output → run note  (target section + exact format of what gets written)
```

### Protocol content per card (build to this)

- **Blind Spot Pass** (stage 1, slug `blind-spot-pass`, tags: `[any]`). Purpose: convert unknown unknowns / unknown knowns into known unknowns before planning. Protocol: (1) ask user to fill/point to `## Brief (the Map)` — one message; (2) navigator generates 8–12 candidate blind spots across six standard axes — people & approvals, physical & logistics, technical & compatibility, time & sequencing, external & regulatory, assumptions-inside-the-brief — with injected ledger lessons weighted first; presents them as ONE numbered recognition list (explicitly the only sanctioned list-dump: recognition is cheap, generation is what's outsourced); (3) user marks which resonate; (4) for each marked item, one clarifying question at a time → rewrite as a known unknown with an owner; (5) sort everything into the 4 Unknowns Matrix. Output: populated matrix + top-risks shortlist. Never skip.
- **Interview** (stage 1, slug `interview`, tags: stakeholder, scope, estimation). Purpose: extract tacit assumptions (unknown knowns). Protocol: ≤7 questions, strictly one per message, drawn from: success criteria, hard constraints, stakeholder map, deadline reality, definition of done, biggest private worry, "what would you check first if this failed?". Each answer reflected back in ≤2 lines then logged. Output: `## Interview Log` Q/A pairs + matrix updates. Skip: allowed only if matrix already has ≥3 surfaced assumptions from a previous session.
- **Brainstorm & Prototypes** (stage 1, slug `brainstorm`, tags: scope, estimation). Purpose: generate 2–4 solution directions before committing. Protocol: navigator drafts a compact comparison table (direction / sketch / cost / main risk / which unknown it bets on), then discusses one question at a time until user picks or hybridizes. Rejected directions are logged with reasons (kill log). Output: `## Brainstorm Directions` — chosen direction marked, kill log kept. Skip: allowed when the engagement has a mandated approach (e.g., client-dictated format).
- **References** (stage 1, slug `references`, tags: estimation, benchmark). Purpose: anchor the plan to precedent. Protocol: navigator searches the vault (`Projects/`, `Knowledge/Source/`, prior runs in `Operation Note/Unknowns Runs/`) for 2–3 analogous cases, proposes them one at a time; user confirms or supplies their own; for each: "what transfers / what differs". Output: `## References` list. Skip: allowed if no precedent exists — log "no precedent" explicitly (that itself is a known unknown).
- **Action Plan** (stage 1, slug `action-plan`, tags: logistics, sequencing, stakeholder). Purpose: risk-first rollout plan. Protocol: order steps so the highest-risk unknowns are attacked earliest; each step gets owner / verification method / dependency; every injected ledger lesson must be visibly addressed by a step or explicitly waived; final one-question review pass. Output: `## Action Plan` numbered list. Never skip — it is Stage 1's exit gate artifact.
- **Implementation Notes** (stage 2, slug `implementation-notes`, tags: scope-creep, deviation). Purpose: track Territory pushing back on the Map. Protocol per session: "what happened since the last entry?" — one event at a time; for each: what deviated from the plan, decision taken, any NEW unknown discovered (→ matrix, dated). Output: dated entries in `## Implementation Log`. Skip: n/a (stage 2 sessions are ad hoc; run as events happen).
- **Pitch & Explainer** (stage 3, slug `pitch`, tags: stakeholder). Purpose: synthesize the result for a named audience. Protocol: (1) ask audience + decision sought — one question; (2) draft in SCQA format (aligns with the existing 15-min SCQA manager cadence) from run note content only; (3) one revision question at a time. Output: `## Pitch`. Skip: allowed for personal-track runs with no external audience.
- **Quiz (Proof of Readiness)** (stage 3, slug `quiz`, tags: `[any]`). Purpose: prove the user can defend the work before walking into the room. Protocol: navigator generates 5–8 questions FROM the run note (edge cases, numbers, stakeholder positions, plan weak points), asks one at a time, grades each answer against the run note, and issues a readiness verdict; every miss becomes a matrix entry or ledger candidate. Output: `## Quiz Results` + verdict. Skip: allowed if no live audience event follows.
- **Ledger Distillation** (stage 3, slug `distillation`, tags: n/a — it writes the ledger). Purpose: close the learning loop. Protocol: (1) walk Implementation Log deviations + Quiz misses one at a time asking "does this generalize beyond this run?"; (2) for each yes, compose a one-liner in the ledger grammar and append after user confirmation; (3) count tag recurrence across the whole Ledger — any tag ≥3 → propose a concrete edit (quoted diff) to the matching technique card, user applies or declines; (4) offer cross-link to `Knowledge/Constants` (常數) when a lesson is really a constant; (5) set `status: closed`, `step: done`. Output: `## Reflection & Lessons` + Ledger appends. Never skip — it is Stage 3's exit gate.

## 6. Stage map contract (3 thin cards)

Each stage card contains ONLY: **Entry criteria** → **Sequence** (ordered wikilinks to technique cards) → **Exit gate** (checkable conditions the engine verifies before advancing `stage`).

- Stage 1: entry = run note exists, Brief filled. Sequence = Blind Spot Pass → Interview → Brainstorm & Prototypes → References → Action Plan. Exit gate = Action Plan exists, top 3 risks each have an owning step.
- Stage 2: entry = Stage 1 gate passed. Sequence = Implementation Notes (repeatable). Exit gate = user declares execution finished.
- Stage 3: entry = Stage 2 exited. Sequence = Pitch & Explainer → Quiz (Proof of Readiness) → Ledger Distillation. Exit gate = Distillation done, run `status: closed`.

## 7. Engine spec — `.claude/skills/unknowns-navigator/SKILL.md`

Frontmatter: `name: unknowns-navigator`; description with triggers: "start an unknowns run", "unknowns run on X", "blind spot pass", "run the playbook on X", "resume the run", "開 unknowns run / 盲點掃描 / 走 playbook". Model-invoked.

Rule blocks (behavior only, ~90 lines):

- **§0 Load order.** Read only what the current step needs: run note → current stage map → current technique card → Ledger (filtered) → Dictionary (only if a term is ambiguous). Never load all cards.
- **§1 Resolve the run.** Named engagement → glob `Operation Note/Unknowns Runs/`; exactly one match → open; several → ask which (one question); none → create from `Template/Unknowns Run Template.md` via 4-question setup (contexts, project wikilink, domains, deadline — one question per message; the Brief is filled by Blind Spot Pass step 1, not here). Invoked with NO engagement named → list runs with `status: open` and ask "resume which, or start new?" (one question).
- **§2 Fast-Pass check.** If frontmatter `priority: urgent`: NO questions. Rank blind-spot candidates from (a) Ledger lines matching run `domains` (paid-for knowledge, weighted first), (b) empty/thin quadrants of the run's 4 Unknowns Matrix, (c) the Blind Spot Pass card's six axes. Output exactly one markdown checklist — top 5, each line = blind spot + "verify before shipping:" phrase. Append as a nested `### Fast-Pass — <YYYY-MM-DD HH:mm>` block inside the `## ⚡ Fast-Pass` section; reset `priority: normal` in the same write; report and STOP. `stage`/`step` untouched.
- **§3 Strict navigator (guided mode).** Exactly one question per message, never multi-part. Reflect each answer back in ≤2 lines, write it to the run note section named in the technique's Output contract, THEN proceed. Never pre-fill answers or produce content the protocol assigns to the user. Offer "skip" only per the card's When-to-skip. Announce position at every technique boundary: `Stage S · step k/n · <next technique>`. Check the stage Exit gate before any stage transition; if unmet, name the missing condition.
- **§4 Ledger injection.** At each technique start: parse Ledger lines; match = line tags ∩ (run `domains` ∪ technique `ledger-tags`) ≠ ∅. Wildcard: if a technique's `ledger-tags` is `[any]`, every Ledger line is a candidate, with lines matching run `domains` ranked first. Inject ≤5, newest first within rank, as a "Lessons in play" block; say when zero match.
- **§5 Amendment loop.** Only during Ledger Distillation: tag count ≥3 across Ledger → propose quoted diff to the matching technique card. Engine NEVER edits playbook cards; user applies in Obsidian (or explicitly asks the session to).
- **§6 Safety.** Run note body is append-only for user content (mirror plan-daily-ops discipline); engine may modify only frontmatter keys `stage`, `step`, `priority`, `status`. Ledger is append-only. A missing/renamed card → halt and name the missing file; never improvise a protocol from memory.
- **Finish block.** Every session ends reporting: run name, `stage/step`, next checkpoint, pending promotion proposals if any.

## 8. Ledger contract — `Ledger - Lessons Learned.md`

Append-only. One line per lesson:

```markdown
- YYYY-MM-DD #tag #tag — lesson in one sentence → action cue (optional)
```

Seed content (ship with these three examples, both tracks represented):

```markdown
- 2026-07-10 #h3g #spectrum — H3G lab accepts B38 but field sites fall back to B40; spec sheets alone don't prove band fit → any RFP answer must cite a field test, not the datasheet
- 2026-07-08 #logistics #customs — HK→UK sample batch lost 6 working days at customs re-classification → add customs class check to action plan before promising demo dates
- 2026-07-14 #job-hunt #stakeholder — referral intros go cold after one follow-up → schedule the second touch the moment the first is sent
```

Header of the card documents the grammar + the promotion rule (≥3 same tag → technique card edit proposal) in ≤10 lines.

## 9. Dictionary contract — `Dictionary - Ubiquitous Language.md`

Thin. Three blocks: (1) playbook vocabulary — Map, Territory, the four quadrants, Fast-Pass, run, promotion; (2) wikilink to `[[5T Group Handover - Brief, Terminology & Summary Format]]` for account/telecom terms — do NOT restate; (3) an empty "Account & domain quirks" section for accumulation.

## 10. Hub card contract

≤60 lines: 10-line philosophy summary (Map vs Territory, 4 Unknowns Matrix); linked table of all cards with one-line jobs; the amendment guide (new lesson → Ledger one-liner; recurring ≥3 → promotion; protocol change → edit technique card, effective next session; behavior change → edit SKILL.md + restart); link to file 18 and the article stub.

## 11. Template contract — `Template/Unknowns Run Template.md`

Exactly the frontmatter + body skeleton of §4, with placeholder comments telling the engine what to fill during setup.

## 12. Vault design note — file 18

Follow `Skill - Plan Daily Ops.md` convention exactly: frontmatter (`type: skill-note`, `status: installed`, `invocation: model-invoked`, `source: "[[Fable Field Guide]]"`), the full SKILL.md in a copyable fenced block, 設計筆記 in Cantonese covering: two-layer engine/playbook split and why, Fast-Pass detour semantics + auto-reset rationale, ledger grammar + promotion rule, vault-wide dual-track scope, safety rules. 連結: Hub, Ledger, Template, `[[Life @Huawei System]]`, article stub.

## 13. Build & verification plan (consultant-executor protocol)

- Fable (this session) = spec + review. Sonnet subagents = file creation, dispatched with this spec.
- Suggested batches: (A) engine + template + design note; (B) hub + stage maps + ledger + dictionary; (C) 9 technique cards. Batches are independent given this spec; can run parallel.
- Review checklist after build: all 18 paths exist; every wikilink resolves to an existing file (run a link audit); no `:` or `/` in filenames; every technique card has valid frontmatter (`type`, `stage`, `slug`, `ledger-tags`) and all four contract sections; stage map sequences reference slugs that exist; SKILL.md contains all seven rule blocks; ledger seed lines parse against the grammar; design note register matches existing skill notes.
- Smoke test: simulate session start on a dummy engagement — engine must resolve "no run note" → setup path, and a hand-written `priority: urgent` run note → Fast-Pass path, without loading unrelated cards.
- Remind user: skill appears in the `/` menu only after Claude Code restart.

## 14. Out of scope (YAGNI)

- No automation hooks/cron; runs start manually.
- No integration with daily-ops skills yet (future: fill-daily-log could link the day's run sessions; note as future idea only).
- No auto-editing of playbook cards by the engine, ever.
- No portable paste-prompt variant (decided against; revisit only if a restricted-machine need appears).
