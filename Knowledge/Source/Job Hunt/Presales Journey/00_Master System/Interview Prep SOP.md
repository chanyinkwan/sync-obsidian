---
type: sop
tags: [job-hunt, interview-prep]
---

# Interview Prep SOP

**Total budget: ~2 hours 15 minutes.** Fixed. This is now a known cost, not an open-ended dread. Division of labour: **Gemini gathers, Claude synthesises, you speak.**

## The Friday-night version

Invite lands. You hit `Ctrl+Shift+I`, tracker note appears. You run `/interview-prep start`, book the slot, tell your partner, paste the generated research prompt into Gemini Deep Research (phone is fine), then close the laptop and sleep. When Gemini's report is ready you paste it into the Research Output note and run `/interview-prep brief` — Claude writes the five-question brief, your Top 5 Stories, and a Bridge Drill Prompt. You read the brief and stories, paste the drill prompt into GPT Voice, and run the drill: it quizzes you on the company from memory, then serves their pains one at a time while you build each bridge to your own experience out loud. 15 minutes before the call, you run the checklist. That's the whole system.

## T0 Commit

Run: `/interview-prep start <company>`
Budget: 15 min, invite night
Done means: interview slot booked ≤48h out, partner informed, tracker note exists, research prompt written and fired into Gemini. No reading tonight.

## B1 Brief

Run: `/interview-prep brief` (after pasting Gemini's report into `Research/Research Output - <Company>.md`)
Budget: 45 min
Done means: three artefacts written and the first two read by you. The brief is structured as the five questions — what they sell, who they sell to, what pains make those customers buy, what this role must solve in the selling process (ending on the straight line from role to revenue), and candidate experiences for question five as facts only, never pre-written bridges. Plus `Top 5 Stories - <Company>.md` and `Bridge Drill Prompt - <Company>.md`. You never open the raw research.

## B2 Bridge Drill

Run: nothing — this stage is yours, no command.
Budget: ~60 min
Done means: brief and stories read; drill prompt pasted into GPT Voice and the drill completed — Phase 1 answers questions 1 to 4 from memory, Phase 2 takes one company pain at a time while you name the experience and author the connection yourself. GPT challenges weak bridges and flags uncovered pains; it never builds a bridge for you. Tick the box yourself or tell Claude.

## Pre-flight

Run: `/interview-prep preflight`
Budget: 15 min before the interview
Done means: checklist all green - room claimed, partner told, notes closed, link/mic tested, water.

## Rule of thumb

Each stage announces its own budget and done-line before it starts anything. If a stage runs long, stop anyway and log where you got to. There is no scored gate any more (removed 2026-08-21): the booked interview itself is the external test, so the only thing that protects you is actually reading the two artefacts and saying the stories out loud before you walk in.
