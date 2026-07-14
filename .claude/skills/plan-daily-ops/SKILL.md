---
name: plan-daily-ops
description: Use when Chukwan wants to plan the day and set up today's Daily Operations note, populating its linked tasks from open task files. Trigger on "plan my day", "set up today's note", "start my day", "開今日日誌 / 計劃今日 / 幫我開今日 to-do".
---

Generate the new day's Daily Operations note and populate its **"Today's linked tasks"** section from open task files, grouped by track → project. Read-only against `Tasks/` — this skill only ever writes the daily note. Run in order.

## 1. Establish the operation day + note
- Default to **today**: `Operation Note/<D-M-YYYY> Daily Operations.md` (non-padded D-M-YYYY, e.g. `13-7-2026`).
- Compute the ISO date (`YYYY-MM-DD`) — needed for rrule/date filtering in §3.
- If the note doesn't exist, create it from the skeleton of the **most recent existing daily note** in `Operation Note/` — copy frontmatter, the H1 title, the header line (Day-counter **and** SAA countdown dataview expressions, plus the Hub link) verbatim, and all section headers; leave prose sections empty.
- If it already exists, open it and operate in **append-only mode** (§5).
- **Completion:** note path + ISO date known, skeleton present.

## 2. Scan open tasks (READ-ONLY)
- Glob `Tasks/*.md`, read frontmatter only.
- A task is a **candidate** if `status` is `todo` or `doing` (exclude `hold` and `done`).
- Never write to any task file — this skill only writes the daily note.
- **Completion:** candidate list with each task's status/priority/scheduled/due/recurrence/timeEstimate/projects/contexts in hand.

## 3. Decide today-relevant vs backlog
A candidate is **TODAY-RELEVANT** if any:
- `scheduled` ≤ today
- `due` ≤ today
- has a `recurrence` rrule that fires today — parse `FREQ` + `BYDAY` two-letter codes (`MO`/`TU`/`WE`/`TH`/`FR`/`SA`/`SU`) against today's weekday, and today ≤ the `UNTIL` date.

Everything else among candidates is **BACKLOG**.

Also collect **CARRY-OVERS**: unchecked `- [ ]` lines from the previous daily note's "Today's linked tasks" section — preserve inline annotations verbatim (e.g. "2hrs", "double check").

- **Completion:** three buckets sorted — today-relevant, carry-overs, backlog.

## 4. Build the Today's linked tasks section
Structure:
- Two track headings: `#### ⚔️ Work (防守)` and `#### 🚀 Hub (進攻)`, split by `contexts` (`work` → Work, `hub` → Hub; neither → `#### 🗂 Unassigned`).
- Under each track, subheadings per project from the `projects` wikilink, e.g. `**[[SA Presales Transition]]**`; tasks with no project go under `**(no project)**`.
- Each task line: `- [ ] [[Task name]]` plus inline markers — `🔴 overdue` if `due` < today; `🔁 <timeEstimate>m` if recurring (show the `timeEstimate` minutes); nothing extra otherwise.
- A `#### 🔁 Carry-over from <prev date>` block listing carry-over lines verbatim (annotations intact).
- A collapsed backlog at the very bottom: `#### 📥 Backlog (open, not scheduled today)` then a flat `- [ ]` list — keep it out of the track sections.
- **Completion:** section rendered with track → project grouping, markers, carry-over block, backlog.

## 5. Append-only safety
- If today's note already had a populated "Today's linked tasks", do **NOT** rewrite or delete existing lines (they may carry the user's ticks/notes) — only append task lines that are missing.
- Never remove a `- [x]` or annotated line.
- **Completion:** no existing line destroyed; only additions made.

## 6. Drift report (READ-ONLY, ask don't fix)
- Compare the previous daily note's ticked `- [x]` items against those task files' `status`.
- If a note tick disagrees with the file status (e.g. ticked in the note but the file is still `todo`/`doing`), **LIST** the mismatches in chat and ask whether to update — do not edit task files automatically.
- Rationale: a tick often means "worked on it", not "done"; TaskNotes `status` stays authoritative.
- **Completion:** mismatches surfaced (or "none"); no task file written without user confirmation.

## Finish
Report the note path, the counts (today-relevant / carry-over / backlog), and the drift-report result (mismatches or "none"). No task file is ever touched by this skill.
