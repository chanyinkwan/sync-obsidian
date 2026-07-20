# Evaluations — plan-daily-ops v2

Run `scripts/validate-skill.ps1`, then have a fresh evaluator dry-run the fixtures without editing the vault.

1. A missing Daily Note is created only from `Template/Daily Operations Template.md`; an existing note changes only inside the managed region.
2. `scheduled < today` and `due < today` go to triage, never automatic WIP or repeated daily resurrection.
3. Recurrence respects `FREQ`, `BYDAY`/anchor weekday, `DTSTART`/scheduled anchor, and `UNTIL`; a daily rule without `BYDAY` can fire.
4. Visible WIP is Work ≤3 and Hub ≤2, total ≤5; carry-over consumes those caps; Hub capacity is not silently filled by Work.
5. Carry-over ≤2; an item already carried once goes to triage on the second day.
6. Full backlog never appears in the Daily Note; show count + TaskNotes Kanban/Agenda pointer only.
7. Rerun is idempotent: no duplicate task/section; existing ticks/annotations in the managed region remain verbatim.
8. Task files remain read-only; drift/triage is reported concisely and never silently fixed.

PASS requires 8/8, action region ≤5 tasks, carry-over ≤2, no full backlog, mirror parity, and no Critical/Important findings.
