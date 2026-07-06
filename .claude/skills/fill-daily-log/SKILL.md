---
name: fill-daily-log
description: Use when Chukwan wants a Daily Operations note's "What actually happened today" and/or "How is your time allocated today" filled from that day. Trigger on "fill in my daily log", "what happened today", "how was my time allocated", "幫我填今天的日誌/時間分配", or a pomodoro log pasted for a given operation day.
---
<!-- leading word: TBD（候選:allocate / 留白 / log） -->

Fill two sections of a Daily Operations note — **"What actually happened today"** and **"How is your time allocated today?"** — by reconciling that day's **Claude chat history** with the user's **pomodoro log**. Ground truth only: every line traces to real evidence. Run in order.

## 1. Establish the operation day + note
- If the user names a date or note, use it. Otherwise default to **today**: `Operation Note/<D-M-YYYY> Daily Operations.md`.
- Note the ISO date (`YYYY-MM-DD`) — you need it to filter the chat logs.
- **Completion:** note path + ISO date known. If the note doesn't exist, ask before creating one.

## 2. Collect the evidence (shared by both sections)
**A. Pomodoro record (quantitative — how long, on which task).** Read TaskNotes' own log: `.obsidian/plugins/tasknotes/data.json` → `pomodoroHistory` (array of `{startTime, endTime, plannedDuration, type, taskPath, completed}`). Filter entries whose `startTime` date == the target date.
- `startTime`/`endTime` are **local** (ISO with offset, e.g. `+01:00`) — unlike the chat logs (UTC), so no conversion needed here.
- Count `type: work` as productive time; `short-break`/`long-break` are breaks. Sum duration per `taskPath` — `taskPath` is the note the session ran against, mapping a block straight to a note (§3) and, via that task's `contexts`, to its lane (§4).
- If the day has **no** sessions, say so and fall back to chat-timestamp-derived timing; only ask the user if both are empty. The user may still paste extra/offline pomodoros — merge those.
- Never invent durations.

**B. Chat history of that day (qualitative — what, and which notes).** Read `C:\Users\k84450674\.claude\projects\C--Users-k84450674-Desktop-Career-Journey\*.jsonl`. Each line is JSON with `"timestamp"` (ISO, **UTC** — user is UK, so +1; mind the offset near midnight), `"type"`, `"message"`. Shortlist sessions by file mtime, then filter lines to the target date. Extract the ordered timeline: user requests, files/tasks/meetings touched, tool actions. Also skim the note's linked tasks + any linked meeting notes for offline context (meetings, sample ops).
- **Completion:** you have (i) durations per activity, and (ii) an ordered activity list, each mapped to the note it lives in.

## 3. Write "What actually happened today"
- One bullet per real activity: **`[[relevant note]] — <description, ≤10 words>`**.
  - **Quote the note** the work lives in (the task / meeting / deliverable / reference note it produced or touched). If an activity genuinely has no note, write the ≤10-word description alone.
  - This section is an **index, not a narrative** — deep detail stays inside the linked note.
- **Self-catch:** link only notes that exist and were actually touched; verify each `[[link]]` resolves; never invent an activity to pad the list.
- **Completion:** every evidenced activity is one `[[note]] — ≤10-word` line.

## 4. Write "How is your time allocated today?"
Tag each block on **two axes**:
- **lane** = TaskNotes `contexts`: **`work`** (Huawei) / **`hub`** (Track A, job-hunt, vault-building). See `Knowledge/How-To/Tagging & Metadata Rules.md`. Shortcut: a pomodoro's `taskPath` → open that task note → read its `contexts` for the lane directly.
- **category** = one of **admin / build / delivery / maintenance / reflection / meeting**:
  - `admin` — reactive ops chores (sample mgmt, printing, email, scheduling).
  - `build` — new **internal / system** artifacts (skills, vault features, templates, notes).
  - `delivery` — **core commercial deliverables** (FWA roadmap sections, pricing analysis, customer-facing materials).
  - `maintenance` — upkeep of existing (tagging, filing, reformatting, refactoring).
  - `reflection` — review / learning / thinking (daily reflection, SCQA, retro, reading).
  - `meeting` — attending or running meetings (Downloads, pricing, roadmap, 1:1s).

**Output — terse, quantitative only** (the narrative already lives in §3):
- One line per block: `[lane] / [category] · [duration]`; aggregate same `lane`+`category`.
- Lead with a one-line **lane total** (e.g. `hub ~1h55m · work ~1h41m`) — `contexts` is designed to sum pomodoro time by lane.
- The **only** text allowed beyond `lane / category · duration` is a `⚠ (… confirm)` flag on offline/uncertain blocks.
- **Self-catch:** every minute traces to a 🍅 block or chat event; unaccounted/offline time gets its own `⚠` line — do NOT pad to fill the day, and do NOT inflate the `hub` lane to hit the ~20% blank-space target. Manufacturing allocation to look productive is the exact failure this skill prevents.
- **Completion:** lane total present; every block is `lane / category · duration`; offline gaps carry `⚠`.

## 5. Write into the note
- Fill **only** the two target sections; leave every other section untouched. Keep the user's bilingual voice.
- **Completion:** both sections filled; the rest of the note unchanged.

## Finish
Report the lane split in one line, and flag: any **unaccounted** time, any 🍅 with no chat evidence (offline — confirm), any chat activity with no 🍅 (untimed — confirm duration), and any activity you couldn't attach a `[[note]]` to. Surfacing these gaps is the point; don't bury them.
