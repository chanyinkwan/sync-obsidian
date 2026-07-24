---
status: todo
priority: mid
tags:
  - task
projects:
  - "[[AWS SAA-C03]]"
contexts:
  - hub
scheduled: 2026-07-24
due: 2026-08-23
recurrence: DTSTART:20260717;FREQ=DAILY;UNTIL=20260823T235959Z
timeEstimate: 10
dateCreated: 2026-07-17T12:00:00.000+01:00
complete_instances:
  - 2026-07-21
  - 2026-07-22
  - 2026-07-23
skipped_instances: []
dateModified: 2026-07-23T17:24:03.445+01:00
---
# SAA - Daily Session Processing

母專案:[[AWS SAA-C03]](sibling of [[SA 04 - AWS SAA Study & Exam]] — SA 04 is the 1h study itself; this is the ~10 min knowledge-processing step right after it, so it runs every day including weekends).

## Deliverable (what "done" looks like)
Today's study output is filed into the hub by `saa-knowledge-manager`: session note written, misses logged, unknowns triaged, dashboard current.

## How to run
In Claude Code, invoke the `saa-knowledge-manager` agent with the prompt below, filled in:

```text
Process this study session using the SAA knowledge management workflow.

Topic:
Study time:
What I studied:
Questions attempted:
Questions missed or guessed:
My original reasoning:
Concepts I still do not understand:
Anything that changed my understanding:

Keep the report brief and tell me only:
- files created
- files extended
- Active Unknowns changed
- my next study action
```

## Notes
- No study today = skip the instance, no guilt. The rep that matters is SA 04's study hour; this task exists so misses and unknowns never rot unprocessed overnight.
- "My original reasoning" is the field the agent preserves verbatim — dump it raw, wrong steps included.
