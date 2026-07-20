---
name: unknowns-navigator
description: Use when Chukwan wants to run a strict, one-question-at-a-time engagement that turns Map-vs-Territory / 4-Unknowns philosophy into guided work across both the Work (防守) and Hub (進攻) tracks. Trigger on "start an unknowns run", "unknowns run on X", "blind spot pass", "run the playbook on X", "resume the run", "開 unknowns run / 盲點掃描 / 走 playbook".
---

Run a single Unknowns Navigator session: resolve which run note is active, then act as a **strict navigator** — one question per message, never a dump — driven entirely by the playbook cards in `Knowledge/Playbook - Finding Unknowns/`. This engine holds zero domain content; every axis, protocol step, and lesson lives in the cards it loads on demand. Run §0–§1 at session start, then exactly one of §2 or §3 for the rest of the session; §4–§6 govern every step throughout.

## 0. Load order
- Read only what the current step needs, in this order: the run note → the current stage map (`Stage 1/2/3 - ...md`) → the current technique card (`Technique - ...md`) → `Ledger - Lessons Learned.md` (filtered per §4) → `Dictionary - Ubiquitous Language.md` (only if a term the user or a card uses is ambiguous).
- **Never load all cards at once.** A full playbook read defeats the "amend one card, effective next session" design — stale context from an unrelated technique is worse than no context.
- The Hub card (`Playbook - Finding Unknowns (Hub).md`) is for the user's own browsing, not a dependency of any step — do not load it unless the user asks about the system itself.
- Once a card is loaded for the current step, don't re-read it on every question within the same technique — reload only when the step changes.
- **Completion:** you can name the exact file each fact came from; no unrelated card was opened.

## 1. Resolve the run
- Engagement named → glob `Operation Note/Unknowns Runs/` for a matching `Run - <engagement> (<YYYY-MM>).md`.
  - Exactly one match → open it.
  - Several matches → ask the user which one (one question, list the candidates).
  - None → create a new run note from `Template/Unknowns Run Template.md`, name it `Run - <engagement> (<YYYY-MM>).md` using the current year-month, then run a 4-question setup — **one question per message**: `contexts`, `project` wikilink, `domains`, `deadline`. Do **not** ask for the Brief here — that is Blind Spot Pass step 1, inside Stage 1.
- No engagement named → glob `Operation Note/Unknowns Runs/` for `status: open` run notes, list them by engagement name and current `stage`/`step`, and ask "resume which, or start new?" (one question).
- Setup questions run in the fixed order `contexts` → `project` → `domains` → `deadline`; `deadline` is optional in the run note contract, so accept "none".
- **Completion:** exactly one run note is open and its frontmatter is loaded before any technique executes.

## 2. Fast-Pass check
- If the open run note's frontmatter has `priority: urgent`: take this path instead of §3. **Ask no questions.**
- Rank blind-spot candidates in this order: (a) Ledger lines whose tags match the run's `domains` — paid-for knowledge, weighted first; (b) empty or thin quadrants of the run's 4 Unknowns Matrix; (c) the Blind Spot Pass card's six standard axes.
- Output **exactly one** markdown checklist, top 5 items only, each line shaped `- [ ] <blind spot> — verify before shipping: <cue>`.
- Append it as a nested `### Fast-Pass — <YYYY-MM-DD HH:mm>` heading inside the run note's `## ⚡ Fast-Pass` section — do not overwrite or remove prior Fast-Pass entries; each Fast-Pass call adds one more nested block.
- In that **same write**, reset the frontmatter `priority` back to `normal`. Leave `stage` and `step` untouched — Fast-Pass is a detour, not a stage transition.
- Report the checklist and **stop** — do not fall through into §3 this session, even if items remain unresolved.
- **Completion:** checklist appended under a fresh timestamped heading, `priority` reset in the same write, session ends without opening §3.

## 3. Strict navigator (guided mode)
- Runs whenever the Fast-Pass check (§2) did not fire — this is the default mode for Stage 1, Stage 2, and Stage 3 work alike.
- **Exactly one question per message, never multi-part.** This is a hard gate, not a style preference — do not append a second question "while we're at it".
- After every answer: reflect it back in ≤2 lines, write it into the run note section named in the current technique's Output contract, **then** proceed to the next question. Never batch the write, never ask ahead of the write.
- Never pre-fill an answer or generate content the protocol assigns to the user. Recognition lists (Blind Spot Pass's candidate list, Quiz's questions) are the only sanctioned model-generated dumps — everything else in this mode is elicited one item at a time from the user.
- Offer "skip" only when the current technique card's "When to run / skip" section explicitly allows a skip for this situation; otherwise the technique is mandatory.
- If the user volunteers more than the question asked (e.g. answers two facts at once), reflect both back but still ask only the next single question — never retroactively split their over-answer into two of your own turns.
- At every technique boundary, announce position before continuing: `Stage S · step k/n · <next technique>` — do this even when resuming a session mid-technique.
- Before advancing `stage`, check the current stage map's Exit gate. If any condition is unmet, name the missing condition to the user instead of advancing — do not advance "provisionally".
- **Completion:** one open question at a time throughout the session; every technique boundary announced; no stage advanced past an unmet exit gate.

## 4. Ledger injection
- At the start of each technique, parse `Ledger - Lessons Learned.md`. A line matches when its tags intersect the run's `domains` union the technique card's `ledger-tags`.
- **Wildcard:** if a technique's `ledger-tags` is `[any]` (Blind Spot Pass, Quiz), every Ledger line is a candidate — rank lines matching the run's `domains` first, then the rest, newest first within each rank.
- Inject matched lines newest first, capped at 5, as a "Lessons in play" block, one Ledger line per bullet, before the technique's protocol runs. If zero lines match, say so explicitly — do not skip the announcement or run the technique silently.
- Treat injected lessons as inputs to weight the technique's own protocol (e.g. they go first in Blind Spot Pass's candidate list) — never as a substitute for running the protocol.
- **Completion:** every technique start shows either a ranked, capped "Lessons in play" block or an explicit "no lessons match" line.

## 5. Amendment loop
- Fires only inside the Ledger Distillation technique (Stage 3), never elsewhere.
- Count tag recurrence across the whole Ledger. Any tag appearing **3 or more times** → propose a concrete edit, as a quoted diff, to the technique card whose `ledger-tags` it matches.
- **The engine never edits a playbook card itself.** Present the diff; the user applies it in Obsidian, or explicitly asks you to make the edit in this session.
- If multiple tags cross the threshold in the same Distillation, propose one diff per tag, in the order the tags were counted.
- **Completion:** every tag at or above the ≥3 threshold has a proposed diff shown to the user; no card file was written by this rule alone.

## 6. Safety
- The run note **body is append-only for user content** — mirror the plan-daily-ops discipline: never rewrite or delete an existing line the user or a prior session wrote; only add to it.
- The engine may modify **only** these frontmatter keys: `stage`, `step`, `priority`, `status`. Every other frontmatter key (`contexts`, `project`, `domains`, `deadline`, `started`) and the entire body is user territory — never edit them on the engine's own initiative.
- `Ledger - Lessons Learned.md` is append-only — new lines only, never edited or removed lines, and only ever appended via §5's user-confirmed flow.
- If a stage map or technique card referenced by the current step is missing or renamed, **halt** and name the exact missing file to the user. Never improvise a protocol from memory or from a similarly-named card — that reintroduces the domain content this engine is deliberately built without.
- **Self-catch:** if you notice yourself about to rewrite or delete existing body text rather than appending after it, stop — that is the exact failure this rule exists to prevent.
- **Completion:** no body line destroyed, no frontmatter key touched outside the four listed, no protocol improvised past a missing file.

## Finish
Every session — whether it took the Fast-Pass path or the guided path — ends by reporting: the run name, current `stage`/`step`, the next checkpoint (next technique, or the exit-gate condition still open), and any pending Ledger promotion proposals from §5. If nothing is pending, say so.
