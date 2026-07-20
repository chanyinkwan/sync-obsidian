# Career Hub Skills v2 — Design

## Outcome

Refine `tidy-meeting-transcript`, `fill-daily-log`, `sync-takeaways`, and `plan-daily-ops` so they match Chukwan's real habits, improve factual quality, and reduce routine context/token use by at least 60% versus the current instructions.

## Design decisions

1. **Progressive disclosure.** Each `SKILL.md` is a short operating contract (target: under 500 words). Heavy transcript attribution and output rules live in one-level reference files loaded only when the source requires them. Historical incidents remain in `FEEDBACK-LOG.md`; normal runs do not read it.
2. **One evidence pass at day close.** `fill-daily-log` builds a compact evidence register once. `sync-takeaways` consumes that register instead of reopening every linked note. Chat proves activity, never duration; only Pomodoro/user/explicit offline records create minutes.
3. **Capacity, not backlog, in the daily note.** `plan-daily-ops` uses the canonical template, shows at most Work 3 + Hub 2, preserves a Hub/offensive block, and sends overdue/old scheduled work to triage. Full backlog stays in the task system.
4. **Risk-routed transcript cleanup.** Labelled/simple transcripts use one economical model pass. Anonymous/shared-mic/identity-conflict cases load the attribution reference and may use stronger reasoning. A reviewer is requested only for unresolved blocker-risk claims, not by default.
5. **Safe, calibrated writes.** Raw transcript is preserved until validation passes. Routine formatting corrections stay out of user-facing questions. Names, owners, acronyms, product codes, and other high-impact ambiguity are never guessed. Glossary changes are proposed deltas and applied only when confirmed/high-confidence.
6. **Runtime-neutral skills.** Do not hard-code Claude/Codex model IDs or chat-storage paths. Use available providers and search indexes at runtime. Keep `.agents` and `.claude` copies aligned.

## Shared contracts

### Evidence register

One row per activity: `activity | source_note | lane | category | duration | duration_source | confidence`. `duration` is `untimed` unless supported by Pomodoro, a user statement, or an explicit offline record.

### Daily close

`fill-daily-log` writes happened + time allocation, then may call `sync-takeaways` with the same register. Takeaways are optional, maximum three, and each contains claim + reuse situation + source + route.

### Success gates

- Simple transcript: one model pass; timestamps/turn coverage preserved; no wrong person/owner.
- Risky transcript: low-confidence identity remains raw/TBD; at most one batched clarification round.
- Daily close: history/evidence scanned once; no chat-derived duration; zero unsupported category/lane claims.
- Daily plan: at most five visible selected tasks; at most two carry-overs; rerun does not duplicate generated content.
- Every skill has historical RED cases, a concise GREEN contract, and an independent lower-cost model review.

## Non-goals

- Do not build a new task database or chat-history service.
- Do not create atomic notes, glossary facts, or task-status changes without the existing confirmation gates.
- Do not stage, commit, or alter unrelated user changes in the current dirty workspace.
