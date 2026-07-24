---
name: plan-daily-ops
description: Use when Chukwan asks to plan the day, start or set up a Daily Operations note, choose today's tasks, carry unfinished work forward, or triage overdue and recurring TaskNotes items.
---

# Plan Daily Operations

## Core principle

The Daily Note is a capacity-limited action surface, not a copy of the backlog. Preserve strategic blank space and one offensive Hub block. **User-facing output defaults to Traditional Chinese** while preserving task titles, wikilinks, and standard status terms.

## 1. Create or locate the note

Use the named operation day, otherwise today. A missing note is instantiated only from `Template/Daily Operations Template.md`, replacing its date tokens. Never copy yesterday's note. In an existing note, edit only between `<!-- daily-plan:start -->` and `<!-- daily-plan:end -->`. If markers are absent, insert a new empty region below “Today's linked tasks” and leave legacy content outside it.

## 2. Scan task metadata read-only

Read frontmatter from `Tasks/*.md`; candidates have `status: todo|doing`. Exclude `hold|done`.

- Today candidates: explicit user must-do; `scheduled == today`; `due == today`; recurrence fires today.
- Triage: `scheduled < today`, `due < today`, expired recurrence, undated `doing`, and second-day unfinished carry-over. These never enter WIP automatically.
- Future/undated `todo`: backlog only.

For recurrence, require today on/after `DTSTART` or the scheduled anchor and on/before `UNTIL`. `FREQ=DAILY` fires without `BYDAY`; `FREQ=WEEKLY` uses `BYDAY`, or the anchor weekday when absent.

## 3. Select within capacity

Rank: user must-do → active recurrence → due today → scheduled today → priority → smaller estimate. Carry forward at most two unchecked items from yesterday only if not previously carried; mark `↪1`. A carry-over consumes its lane cap. On the second day it goes to triage.

Hard limits: **Work ≤5**, **Hub ≤5**, total ≤10. Unassigned items do not bypass caps. If any Hub candidate exists, reserve at least one Hub slot unless the user explicitly overrides. When available time is known, selected estimates must fit within 80%, leaving ≥20% blank space.

## 4. Render idempotently

Inside the managed region group tasks under Work/Hub, then show only: `> 📥 N open tasks remain in TaskNotes Kanban / Agenda.` Never list the full backlog.

On rerun, de-duplicate by task wikilink. Preserve an existing selected line verbatim—including checkbox and annotations. Remove/regenerate only unannotated unchecked machine lines; never touch text outside the markers.

## 5. Triage and finish

Keep task files read-only. In chat, propose at most five triage decisions (`do today / reschedule / delegate / drop / hold`) plus the remaining count; apply none without separate authority. Report note path, Work/Hub counts, carry-over count, blank-space check, backlog count, and status drift concisely.
