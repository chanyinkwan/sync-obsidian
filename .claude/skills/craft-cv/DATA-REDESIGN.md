# Data redesign, not yet applied

Design for `Knowledge/About Me/MasterExperienceDB.json`. **Nothing here has been applied.** Chukwan chose design-only on 2026-08-13. Until it is applied, `SKILL.md` gate 4 patches the problem in prose, which is weaker.

Apply this **before** trusting the skill's gates to be complete, because several gates exist only to compensate for the data lying.

## The problem

`status` is not trustworthy on its own. Two meta flags sitting far from the bullets contradict the bullets' own status:

- `independent_projects_flag` says treat every `status: "verified"` in `independent_projects[]` as unproven, because they were never re-grounded after the purchased-repo discovery.
- `education[].review_flag` does the same for the AutoTailor bullet, which is exactly what an AI-role JD would pull.

An agent that faithfully enforces `meta.hard_rule` but misses one flag renders unproven material **while believing it is compliant**. A safeguard that only works if you read the whole file is a trap.

**Governing principle: an agent that reads only `bullet.status` must be safe.**

## Fix 1: make status tell the truth

Demote every un-regrounded proofbank bullet in `independent_projects[]` and `education[].projects[]` to `needs_grounding`. Then **delete** `independent_projects_flag` and `review_flag`. Delete gate 4 from `SKILL.md` at the same time.

Also make it a rule that a `verified` bullet carries either an `arithmetic` that closes, or a `source` naming a grounding interview or document.

## Fix 2: stable bullet IDs

Bullets are addressable only by text prefix, which breaks as soon as text is edited. Add `id` per bullet: `huawei-01`, `boc-04`, `edu-autotailor-01`. The targeting record, the grounding backlog and any validator all need this.

## Fix 3: a domain axis

`competency_model`'s ten tags are a presales-SE ontology, built for the SA transition. They are the wrong sole index for CV tailoring, and the BJAK draft proves it: the winning positioning was regulated payments, hard deadlines, third-party rails, irreversible states, none of which is a competency tag. `discovery` and `demo-technical-win` would have retrieved the wrong bullets.

Add `domains[]` per bullet, controlled vocabulary of roughly 10 to 12 values (regulated delivery, payments, telecom, retail ops, vendor management, AI tooling, observability, and so on).

Do not build a third index for hard skills. They live in bullet text and `technical_profile` already. With around 60 bullets the agent reads the whole file anyway, so the tags' real job is **auditability of coverage**, not retrieval speed: every ranked JD criterion maps to at least one (competency, domain) query, and each query either returns rendered bullets or a declared gap.

## Fix 4: a grounding question per bullet

Every `needs_grounding` bullet gets a `grounding_question`: the single concrete question whose answer would verify it. `Grounding Backlog.json` already carries these for the seven bullets cut so far, so migrate rather than rewrite them.

## Status lifecycle

| Status | Meaning | Renders | Moves when |
|---|---|---|---|
| `draft` | Written, never audited | Never | Grounding session sends it to verified, needs_grounding or cut |
| `needs_grounding` | Real work, figure not reconstructed | Never | Figure sourced, becomes verified with `arithmetic` and `grounded_on`. If unsourceable, rewrite without the figure as a new draft, or cut |
| `verified` | Survives "how do you know that number" in ten seconds | Yes | A contradiction sends it back to needs_grounding with a `correction` |
| `secondary` | True, low ceiling | Only against a named JD criterion | Editorial promotion or demotion. **Secondary implies grounded**: an ungrounded bullet can never be secondary |
| `blocked` | True but awaiting an external event | Never | Event completes, becomes draft. Add `unblocks_when` so the trigger is explicit |
| `cut` | Removed, with reason | Never | Terminal. Keep as a tombstone so the claim is not re-invented later |

**The rule above all:** `craft-cv` treats the DB as read-only. Only a grounding session with Chukwan moves a status, recorded with `grounded_on` or `correction`. The drafting agent never promotes a bullet mid-draft, however convenient it would be.

## Still outstanding

- **`CV Writing Rules.md` overlaps this skill.** Fable's recommendation: that file owns style only (its §1 to §4 and the read-aloud discipline), while truth gating and the render pipeline move here, because two copies of a binding layer drift. Evidence they already have: the rules file points at `Knowledge/Source/About Me/MasterExperienceDB.json`, a path that does not exist.
- **No verification apparatus.** Every other mature skill in this vault ships `EVALS.md`, `fixtures/` and a validator script. This one guards against fabrication reaching employers and has none. Most of the checklist is mechanical: banned strings (`chanyinkwan`, the four repo names, `Hutchison`, `Three UK`), dash scan outside date fields, every rendered bullet resolving to a DB bullet with an allowed status, dates and titles string-matching the DB.
- **Suggested fixtures:** a poisoned JD (an AI-engineer req that maximally tempts the excluded repos and the AutoTailor bullet), a gap-bridge JD (domain absent from the record), and a status-trap fixture.
