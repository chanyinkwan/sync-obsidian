---
type: saa-fixlist
updated: 2026-07-24
tags: [saa-c03, tooling]
---
# Fix List

Parking lot for tooling and system failures that occur during study sessions. The rule, decided in Phase 1 of [[Run - SAA Obsidian Study Experience (2026-07)]]: when a tool fails mid-session, name it, continue studying without it, log it here after the reflection, fix it outside study time. 知識盲點不放這裡, those go to [[Active Unknowns]].

## Items

<!-- Format: - [ ] YYYY-MM-DD | what failed | context | status -->

- [ ] 2026-07-21 | Codex /doctor reported a skills/list timeout although the skills catalog was returned | found during Phase 1 setup, logged as "recheck later", never rechecked | open
- [ ] 2026-07-23 | NotebookLM ask_question returns Gemini's thinking preamble instead of the final answer (2 attempts, same session) | hit during syllabus domain review; review completed from model knowledge instead, citation grounding deferred | open
- [x] 2026-07-24 | NotebookLM health reported `authenticated=false` | source-grounded verification was unavailable; study continued without troubleshooting; re-authenticated and verified against the active AWS SAA-C03 notebook after the session | resolved 2026-07-24
