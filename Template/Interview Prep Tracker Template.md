<%*
const company = await tp.system.prompt("Company");
const role = await tp.system.prompt("Role");
const stage = await tp.system.suggester(["Screen", "Hiring Manager"], ["screen", "hiring-manager"]);
const interviewDate = await tp.system.prompt("Interview date & time (e.g. 2026-08-21 14:00)");
-%>
---
type: interview-prep-tracker
company: <% company %>
role: <% role %>
stage: <% stage %>
interview_date: <% interviewDate %>
status: in-progress
---
# Interview Prep — <% company %>

## Stage Checklist

- [ ] **T0 Commit** — `/interview-prep start <% company %>` — 15 min, invite night — Done: interview slot booked ≤48h out, partner informed, tracker note exists, research-baseline triggered. No reading tonight.
- [ ] **B1 Brief** — `/interview-prep brief` — 45 min — Done: one-page HM-POV brief written and read by Kess. Block notes never opened.
- [ ] **B2 Reps** — `/interview-prep reps` — 60 min — Done: compulsory anchors + 5 competency stories said out loud at ≤60s each; selector drill run.
- [ ] **B3 Gate** — `/interview-prep gate` — 45 min — Done: scored mock passed and verdict logged in tracker.
- [ ] **Pre-flight** — `/interview-prep preflight` — 15 min before interview — Done: checklist all green — room claimed, partner told, notes closed, link/mic tested, water.

## Links
- [[Interview Prep SOP]]
- [[Master Story Bank]]
- [[Pre-flight Checklist]]

## Gate Log
<!-- /interview-prep gate appends scored verdicts here. Do not edit by hand. -->
