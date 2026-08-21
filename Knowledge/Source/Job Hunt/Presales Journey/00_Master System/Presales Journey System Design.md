# Presales Journey System Design

Date: 2026-08-21  
Status: Approved in chat; awaiting written-spec review

## 1. Purpose

Create one human-readable system for moving from verified career evidence to Presales applications, interviews, outcomes, and evidence improvements. The system must reduce duplicate facts, prevent claim inflation, and make the next action visible.

Target roles: Presales Consultant and Sales Engineer. Customer-facing Solution Architect roles are included only when the role is Presales-led rather than production-engineering-heavy.

## 2. Source-of-truth rule

- `Presales Journey/00_Master System/MasterExperienceDB.json` becomes the only working evidence database for Presales materials.
- `Knowledge/About Me/MasterExperienceDB.json` stays in its original folder as a frozen historical backup. It is not moved, deleted, or automatically synchronised.
- A claim may enter a CV or interview story only when it exists in the Presales Master DB.
- Only evidence with status `verified` or `secondary` may render into a CV.
- `needs_grounding`, `blocked`, `draft`, and `cut` evidence must not render.

## 3. Folder structure

```text
Presales Journey/
├── 00_Master System/
│   ├── MasterExperienceDB.json
│   ├── CV Writing Rules.md
│   ├── Grounding Backlog.json
│   ├── Master Story Bank.md
│   ├── Interview Prep SOP.md
│   ├── Readiness Rubric.md
│   ├── Question Banks/
│   ├── Templates/
│   └── Tools/
├── 01_Pipeline/
│   └── Application Pipeline.md
└── Companies/
    └── Company — Role/
        ├── Role Brief.md
        ├── CV/
        ├── Research/
        ├── Interview/
        └── Outcome.md
```

Completed applications remain in their company-role folder. Their outcome is shown in the Pipeline; there is no separate `90_Closed` folder.

Materials outside `Presales Journey` remain where they are. No `Quarantine` folder will be created. A file that is irrelevant or unsafe only for Presales will simply stay in the parent `Job Hunt` area and will not feed this system.

## 4. Pipeline design

`Application Pipeline.md` is the single application-status dashboard. It uses a Markdown table, not Excel.

| Display | Meaning |
|---|---|
| ⚪ `0 · Interested` | Saved, not started |
| 🔵 `1 · Preparing` | CV or application in preparation |
| 🟡 `2 · Applied` | Submitted, waiting for response |
| 🟠 `3 · Screening` | Recruiter or AI screening |
| 🟣 `4 · Interview` | Hiring-manager or later interview |
| 🟢 `5 · Offer` | Offer or negotiation |
| 🔴 `X · Rejected` | Employer rejected the application |
| ⚫ `— · Withdrawn` | Candidate withdrew |

The note has three sections:

1. `🔥 Action Required` — only near-term actions.
2. `📍 Active Pipeline` — all live opportunities.
3. `📦 Closed` — rejected or withdrawn applications retained for learning.

Each pipeline row contains: Company / Role, Stage, Last Contact, Next Action, Deadline, and Company Folder link.

## 5. Company-role records

Each application has one company-role folder.

- `Role Brief.md`: JD, application facts, fit, gaps, and role-level hypothesis.
- `CV/`: submitted CV, editable CV, and CV Context.
- `Research/`: company, product, buyer, competitor, and technical research.
- `Interview/`: preparation notes, expected questions, actual questions, and answer notes.
- `Outcome.md`: stage reached, result, direct feedback, inferred failure hypotheses, and follow-up improvements.

## 6. Evidence data flow

```text
MasterExperienceDB
        ↓
CV Context (select and order evidence only)
        ↓
Role-specific CV
        ↓
Interview Story (no new facts)
        ↓
Outcome and post-mortem
        ↓
Grounding Backlog
```

Rules:

- CV Context may select, order, shorten, and truthfully reframe evidence. It may not invent a role, number, customer interaction, technical action, or outcome.
- Master Story Bank must point back to Master DB evidence and preserve ownership level: owned, led, contributed, or attended.
- Unverified numbers, ownership, and technical depth go to Grounding Backlog.
- Company research does not become personal experience evidence.
- Outcome hypotheses remain hypotheses unless direct feedback or repeated evidence confirms them.

## 7. Migration and deletion policy

The first pass only creates folders, moves files, renames files where needed, and records provenance. It does not rewrite experience claims or delete source material.

After migration:

- Update active references to the new canonical paths.
- Do not maintain duplicate Presales paths or compatibility copies.
- Flag duplicate, obsolete, conflicting, or role-irrelevant files in a review list before any removal.
- Ask for explicit approval before deleting any material.

## 8. Success criteria

The structure is complete when:

- The Presales Master DB has one clear path and parses as valid JSON.
- Every active application appears once in the Pipeline and links to one company-role folder.
- Every company-role folder separates role facts, CV, research, interview material, and outcome.
- No CV or interview story contains a claim that is absent from the Master DB.
- A user can identify the next required application action from the Pipeline in under one minute.
