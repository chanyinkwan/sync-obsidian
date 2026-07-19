---
type: playbook-hub
tags: [playbook]
---
# Playbook - Finding Unknowns (Hub)

## Philosophy
The **Map** is your plan, brief, spec — the model in your head or on paper. The **Territory** is what actually happens when you execute — it always pushes back. Every unknown is a gap between Map and Territory, in one of four shapes:

| | Known | Unknown |
|---|---|---|
| **Known** | Known Knowns — facts already in the brief | Known Unknowns — open questions, each with an owner |
| **Unknown** | Unknown Knowns — assumptions you didn't know you were making | Unknown Unknowns — gaps you only find by doing |

This playbook converts Unknown Unknowns and Unknown Knowns into Known Unknowns *before* you commit resources, then closes Known Unknowns through structured execution and post-mortem. Source article: [[Fable Field Guide]].

## Cards
| Card                                      | Job                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| [[Stage 1 - Pre-Implementation]]          | Plan the run: Blind Spot Pass → Interview → Brainstorm → References → Action Plan |
| [[Stage 2 - During-Implementation]]       | Track execution against the plan as Territory pushes back                         |
| [[Stage 3 - Post-Implementation]]         | Close the run: pitch, prove readiness, distill lessons                            |
| [[Technique - Blind Spot Pass]]           | Surface unknown unknowns into a recognition list, sort into the matrix            |
| [[Technique - Interview]]                 | Extract tacit assumptions via ≤7 one-at-a-time questions                          |
| [[Technique - Brainstorm & Prototypes]]   | Compare 2-4 solution directions before committing                                 |
| [[Technique - References]]                | Anchor the plan to 2-3 analogous precedents                                       |
| [[Technique - Action Plan]]               | Build the risk-first rollout plan (Stage 1 exit-gate artifact)                    |
| [[Technique - Implementation Notes]]      | Log deviations and new unknowns as execution happens                              |
| [[Technique - Pitch & Explainer]]         | Synthesize the result in SCQA for a named audience                                |
| [[Technique - Quiz (Proof of Readiness)]] | Pressure-test whether you can defend the work                                     |
| [[Technique - Ledger Distillation]]       | Generalize lessons into the Ledger, propose promotions (Stage 3 exit-gate)        |
| [[Ledger - Lessons Learned]]              | Append-only log of generalizable lessons                                          |
| [[Dictionary - Ubiquitous Language]]      | Shared vocabulary for this playbook                                               |
| [[Unknowns Run Template]]                 | Skeleton for a new run note                                                       |
| [[Skill - Unknowns Navigator]]            | Engine design note — the installed skill driving all of this                      |

## Amendment guide
- New lesson learned → add one line to [[Ledger - Lessons Learned]].
- Same tag recurs ≥3 times in the Ledger → Ledger Distillation proposes a promotion (quoted diff) to the matching technique card; you apply it.
- Protocol needs to change → edit the technique card directly; effective next session, no restart needed.
- Navigator behavior itself needs to change → edit `.claude/skills/unknowns-navigator/SKILL.md`, then restart Claude Code.
