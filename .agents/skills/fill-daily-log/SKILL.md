---
name: fill-daily-log
description: Use when Chukwan asks to fill a Daily Operations note's “What actually happened today” or “How is your time allocated today?”, close the day, reconstruct a past operation day, or reconcile Pomodoro, chat, meeting, and task evidence.
---

# Fill Daily Log

## Core principle

Build the day's evidence once. Chat proves that activity happened; it never proves duration. **User-facing output defaults to Traditional Chinese** while preserving established headings, wikilinks, and English industry terms.

## 1. Target and mode

Use the named date/note, otherwise today's `Operation Note/<D-M-YYYY> Daily Operations.md`. Convert all evidence into the operation day's local timezone. If the note does not exist, stop and ask; do not create it.

- **same-day:** start with current visible work and today's Pomodoro records.
- **backfill:** use the target date and an available history index/provider to shortlist relevant sessions before opening any detail.

Never assume a Claude/Codex storage path or use file mtime as the activity date.

## 2. Build one evidence register

Follow `EVIDENCE-REGISTER.md` and scan each source at most once:

1. TaskNotes Pomodoro history for the target local date.
2. Current/shortlisted chat events from whatever history provider is available.
3. The target note's linked tasks/meetings only when needed to resolve an activity, lane, or category.
4. User-supplied offline work or durations.

Merge duplicate signals. A duration may come only from actual Pomodoro elapsed time, a user statement, or an explicit meeting/offline record. Chat timestamps, session span, model/tool waiting, and planned-but-uncompleted time produce `untimed`, never minutes.

## 3. Write “What actually happened today”

One evidence-backed bullet per activity: `[[existing note]] — description (≤10 words)`. Use a plain description only when no note exists. Do not pad or invent.

## 4. Write “How is your time allocated today?”

- Lane: `work`, `hub`, or `unclassified`; prefer task `contexts`/explicit evidence.
- Category: `admin`, `build`, `delivery`, `maintenance`, `reflection`, `meeting`, or `unclassified`; do not infer beyond evidence.
- Show timed lane totals, then aggregate `lane / category · duration`.
- List activity without valid duration separately as `⚠ untimed — <activity>`; exclude it from totals.

## 5. Apply safely

Edit only the two target sections; preserve the rest and the user's bilingual voice. An empty register is a valid honest result: state no evidence and leave durations empty. If `sync-takeaways` runs in the same close-day turn, pass it this exact register—no second history scan.

Report timed lane totals, untimed activities, unclassified rows, and unresolved note links.
