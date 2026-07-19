---
type: technique
stage: 2
slug: implementation-notes
ledger-tags: [scope-creep, deviation]
tags: [playbook]
---
# Technique - Implementation Notes

## Purpose
Track the Territory pushing back on the Map while execution is underway.

## When to run / skip
Not applicable — Stage 2 sessions are ad hoc; run this technique as events happen, not on a fixed schedule.

## Protocol
1. Ask "what happened since the last entry?" — one event at a time.
2. For each event, capture: what deviated from the plan, what decision was taken, and whether any new unknown was discovered.
3. If a new unknown was discovered, add it to `## 4 Unknowns Matrix`, dated.
4. Log the event as a dated entry in `## Implementation Log` before asking about the next event.
5. Repeat until the user has no more events for this session.

## Output → run note
`## Implementation Log` — dated entries, one per event. Any new unknown discovered also goes into `## 4 Unknowns Matrix`, dated.
