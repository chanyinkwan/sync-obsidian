# Evidence register contract

Build once per operation day and reuse for both Daily Log sections and same-turn `sync-takeaways`.

| Field | Meaning |
|---|---|
| `id` | Stable row id within this run. |
| `activity` | Evidence-backed action, not an interpretation. |
| `source_note` | Existing note link/path, or blank. |
| `evidence` | Pomodoro id, user statement, explicit record, chat event, or note line. |
| `lane` | `work`, `hub`, or `unclassified`. |
| `category` | `admin`, `build`, `delivery`, `maintenance`, `reflection`, `meeting`, or `unclassified`. |
| `duration` | Minutes, or `untimed`. |
| `duration_source` | `pomodoro`, `user`, `explicit-record`, or `none`. |
| `confidence` | `high`, `medium`, or `low`. |

Only Pomodoro actual elapsed time, a user-stated duration, or an explicit offline/meeting record may create minutes. Chat timestamps/session spans and file mtimes are never duration evidence.

Merge duplicate evidence into one row and retain source ids. Use operation-day local time for date assignment. The register may remain an in-memory/scratch artifact; do not create a vault note unless requested.
