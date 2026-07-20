# Evaluations — fill-daily-log v2

Run `scripts/validate-skill.ps1`, then have a fresh evaluator apply the fixtures without editing the vault.

1. `day-close.json`: build one register; fill both sections from it; a 45-minute chat span remains `untimed`, never `45m/~45m`.
2. `timezone-boundary.json`: `2026-07-14T23:30:00Z` belongs to the 15 July operation day in BST.
3. `empty-day.json`: empty evidence is a valid honest result; no invented activity/duration and no new Daily Note.
4. Same-day mode uses current visible activity + Pomodoro first; backfill uses the target date/index and opens only relevant sessions/notes.
5. Lane/category use task metadata or explicit evidence; uncertain values remain `unclassified`.
6. Only target sections change; a same-turn handoff to `sync-takeaways` reuses the same register with no second history scan.

PASS requires 6/6, zero chat-derived minutes, one evidence scan per close-day run, and no Critical/Important findings.
