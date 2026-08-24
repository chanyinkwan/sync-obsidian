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

- [ ] **T0 Commit** — `/interview-prep start <% company %>` — 15 min, invite night — Done: interview slot booked ≤48h out, partner informed, tracker note exists, research prompt written and fired into Gemini. No reading tonight.
- [ ] **B1 Brief** — `/interview-prep brief` — 45 min — Done: research output pasted back; five-question brief + Top 5 Stories + Bridge Drill Prompt written, brief and stories read.
- [ ] **B2 Bridge Drill** — no command, this one is yours — ~60 min — Done: drill prompt pasted into GPT Voice; Phase 1 recall and Phase 2 bridge rounds completed.
- [ ] **Pre-flight** — `/interview-prep preflight` — 15 min before interview — Done: checklist all green — room claimed, partner told, notes closed, link/mic tested, water.

## Links
- [[Interview Prep SOP]]
- [[Master Story Bank]]
- [[Pre-flight Checklist]]
