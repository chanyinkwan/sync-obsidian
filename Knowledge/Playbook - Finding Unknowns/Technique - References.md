---
type: technique
stage: 1
slug: references
ledger-tags: [estimation, benchmark]
tags: [playbook]
---
# Technique - References

## Purpose
Anchor the plan to precedent instead of first-principles guessing.

## When to run / skip
Skip if no precedent exists — but when skipping, log "no precedent" explicitly as a known unknown in the matrix; do not just silently skip.

## Protocol
1. Search the vault — `Projects/`, `Knowledge/Source/`, and prior runs in `Operation Note/Unknowns Runs/` — for 2–3 analogous cases.
2. Propose candidates to the user one at a time.
3. For each, ask the user to confirm it, reject it, or supply their own reference instead.
4. For each confirmed reference, capture "what transfers / what differs" versus this run.
5. If no candidate survives and the skip condition applies, log "no precedent" explicitly as a known unknown in `## 4 Unknowns Matrix`.

## Output → run note
`## References` — one entry per confirmed reference with "what transfers / what differs", or an explicit "no precedent" line if none was found.
