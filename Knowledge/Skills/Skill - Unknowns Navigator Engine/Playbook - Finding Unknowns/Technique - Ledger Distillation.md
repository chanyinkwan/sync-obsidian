---
type: technique
stage: 3
slug: distillation
ledger-tags: []  # n/a — this card writes the Ledger rather than consuming lesson tags
tags: [playbook]
---
# Technique - Ledger Distillation

## Purpose
Close the learning loop: generalize this run's deviations and misses into the Ledger, and close the run.

## When to run / skip
Never skip — this is Stage 3's exit gate.

## Protocol
1. Walk the Implementation Log's deviations and the Quiz's missed questions one at a time. For each, ask "does this generalize beyond this run?"
2. On a yes, compose a one-liner in the Ledger grammar (`- YYYY-MM-DD #tag #tag — lesson in one sentence → action cue (optional)`). Append it to [[Ledger - Lessons Learned]] only after the user confirms the wording.
3. Count tag recurrence across the whole Ledger. Any tag appearing 3 or more times → propose a concrete edit, as a quoted diff, to the technique card whose `ledger-tags` match it. Present the diff; never apply it without the user's say-so.
4. When a lesson is really a constant rather than a one-off, offer to cross-link it to the matching note under `Knowledge/Constants/` (常數), or note that a new one is worth creating.
5. Set the run note frontmatter `status: closed` and `step: done`.

## Output → run note
`## Reflection & Lessons` — the distillation walk's outcomes: which deviations/misses generalized, the ledger lines appended (and their confirmation), any promotion proposals raised, and any constants cross-links offered.
