# Feedback Log — tidy-meeting-transcript

Append-only. One entry per run. The point is not to record that mistakes happened — it's to make the *same* mistake impossible next time.

## How this loop works

Each run: **Sonnet executes → Opus reviews → findings get a root-cause tag → the tag decides the fix.**

| Root cause | What it means | The fix |
|---|---|---|
| `skill-gap` | The skill never told the executor this. It could not have known. | **Patch `SKILL.md` now.** Not the executor's fault. |
| `executor-slip` | The instruction existed; the executor missed it. | Log it. **Second occurrence → promote to a hard rule in `SKILL.md`.** A slip that recurs *is* a skill gap. |

The promotion rule is the whole mechanism. One slip is noise; twice is a pattern, and a pattern means the instruction wasn't written forcefully or specifically enough. We fix the instruction, not the agent. Patching every slip on first offence would bloat the skill with things it already says — and a skill too long to hold in your head stops being read.

Track recurring slips in the tally at the bottom.

---

## Run 1 — 2026-07-13 · `13-7-2026 Meeting - Monday Download - Transcript.md`

**Setup:** Otter.ai export, ~6 min, all Mandarin, 4 anonymous speakers. Executor: Sonnet. Reviewer: Opus. **Round 1 verdict: BLOCK.**

This transcript broke the skill's founding assumption. It was written for WeLink dumps — bloated with avatar images, speakers carrying name labels. This was an Otter export: no bloat, and **no labels at all**. Attribution stopped being *mapping* and became *inference*, which is a different and much harder job. Most of the run's findings trace back to that one unhandled branch.

### `skill-gap` → patched into SKILL.md immediately

| # | Gap | Patch |
|---|---|---|
| 1 | **The confidence gate didn't exist.** Sonnet wrote in its own open questions that a speaker ID was "a genuine coin-flip … should be confirmed by the user, not committed" — then stamped that name onto 3 lines of the paste-ready minute. It had a positive instruction to attribute, and *no instruction on how to decline to attribute*. Given no way to ask (subagents can't call `AskUserQuestion`), "guess and flag" was the only move available to it. | New **Step 2.4**: high → commit; medium → commit with `⚠` + open question; **low → no name anywhere**, `_TBD` in the minute. "I can't ask" resolves to *leave it unattributed*, never *guess and flag*. A `⚠` next to a 50/50 name does not make it safe. |
| 2 | **No disproof tests written down.** Opus killed the Emilio candidate on register (Speaker 2 uses native idiom — 踢皮球, 扛着, 下来再看吧). That test existed nowhere; Sonnet called the two candidates indistinguishable and wasn't wrong to, given what it had been told. | New **Step 1.4b.2**: four disproof tests — self-reference, presence, register/language, role-consistency-across-the-whole-meeting. Plus 1.4b.3: absence redistributes topic ownership (look up who covers an absent person's remit). |
| 3 | **The skill's own known-mappings were broken wikilinks.** `[[Qiuxuan]]` and `[[Emilio de la Iglesia]]` don't exist; the real notes are `[[Qixuan Wang wx1252689]]` and `[[Emilio de la Iglesia 00737742]]`. Following the skill literally would have minted duplicate person notes. | Mappings corrected; **Step 1.4a** now requires Glob-verifying every `[[wikilink]]` resolves before writing it. |
| 4 | **One `Speaker N` label is not one person.** Otter's diarization merged **Ziyi Zhang and Qixuan Wang** under `Speaker 2`. Executor, reviewer *and* orchestrator all assumed 1 label = 1 person. Opus came closest — it noted Speaker 2's "behavioural fingerprint" spanned roll call + cupboard stock + shipping coaching + a LatAm commercial dispute + a stocktake — and concluded *one unusual person* rather than *two people*. **Breadth was the tell, and all three of us read it as seniority.** Caught only by Chukwan. | New **Step 1.4b.0** (and **RUBRIC C6**): test every label for *remit coherence*. A label spanning two accounts' work is two people, not one polymath. Watch for a question and its answer glued into one block (`有更新吗？你那边拉美…`). **Treat a suspiciously broad fingerprint as evidence of a merge, not of seniority.** |
| 5 | No normalize-vs-flag rule. Sonnet drew the right line from judgment alone (normalized `X七`→`X7`, left `DCP`/`DCB` verbatim + flagged). | **Step 1.3** codifies it: normalize renderings whose identity isn't in doubt; **never** silently pick between two spellings of a name/acronym/product code. List *every* normalization. |
| 6 | No rule for a speaker with too little signal (Speaker 4 says one word). Sonnet correctly refused to guess — again, from judgment, not instruction. | **Step 1.4b**: too little signal = no name. A correct outcome, not a failure. |
| 7 | Glossary carries two different `何总`. Sonnet picked one, unflagged. | **Step 1.6**: link *mentioned* people, not just speakers; where the glossary is ambiguous, print as heard and raise it. |

### `executor-slip` → logged, NOT patched (instruction already existed)

| # | Slip | Rubric ref | Where the rule already lives |
|---|---|---|---|
| S1 | **Download Summary written entirely in Chinese.** The English digest above it was correct, so this was a rendering choice, not a comprehension failure. | B2 / E4 | SKILL Step 4: "using **Section 3's English format**" |
| S2 | **Invented content in the digest.** Raw: `我们确实成本很差，但是呢友商现在来看还在扛着` (*our* cost is bad; competitors are *still holding out*). Sonnet wrote that competitors' costs were "also under pressure" — a claim with no raw line behind it, and it dropped our own cost position entirely. | A1 | Rubric A1 — the cardinal sin |
| S3 | **Host field contradicted its own role analysis.** Named Speaker 2 as host while simultaneously arguing Speaker 3 assigns owners and closes topics. | C4 | Rubric C4 |
| S4 | Attribution stamped on 12 turns from a single turn's evidence; confidence self-reported as "medium" when it was low. | C4 | Rubric C4 |
| S5 | Undisclosed normalization (`B二B`→`B2B` disclosed only after challenge). | D2 | Rubric D2 |
| S6 | Summary not in speaker order. | E4 | SKILL Step 4 |

**Round 2:** all seven gaps patched, ground truth supplied by Chukwan, Sonnet re-ran on the *patched* skill. Every slip above was fixed; the Speaker 2 split was applied at the `有更新吗？` boundary. **Round 2 verdict: REVISE** — one MAJOR remained (below). **Round 3:** fixed, glossary applied, closed.

### The misses that were not the executor's

| Who | Miss | Fix |
|---|---|---|
| **Reviewer (Opus)** | **Cardinality-before-identity.** It *wrote out* the impossibly broad fingerprint for Speaker 2 — roll call + cupboard stock + shipping coaching + a LatAm commercial dispute + a stocktake — and then spent 400 words hunting for a person senior enough to be all of them at once. It treated a **cardinality** puzzle (*is this one person?*) as an **identity** puzzle (*which polymath is this?*). The rubric's shape caused it: C1–C4 all begin from an assumed 1:1 label↔person mapping. The old C5 (shared-mic) was the closest rule but was scoped to *"room/device label"*, so on an Otter export with no device label the reviewer filed it as not-applicable and moved on. **The rule existed and the scoping keyword put it in the wrong drawer.** | **RUBRIC C5 rewritten** as *cardinality before identity*, scoped to **any** label, ordered explicitly **before** C1–C4, and given a hard mechanical test (deixis) so it fires without needing suspicion first. |
| **Orchestrator (Fable)** | **Contaminated the executor with an unsourced inference.** In the round-2 ground-truth handoff I wrote that Qixuan "is covering Kaili's sample-device remit while she is out." Chukwan never said that — he confirmed *who spoke*. I inferred the *why* and handed it over as fact. Sonnet propagated it faithfully into the note header, the digest, and a proposed glossary edit that would have written the inference into the permanent glossary, where every future run would read it as confirmed. Opus caught it. | **RUBRIC A5** — *who spoke is a fact; why they spoke is a guess* — and it explicitly binds instructions from the orchestrator, not just the executor's own reasoning. **SKILL 1.4b.3** rewritten from a conclusion-generator into a candidate-generator. |

### The reviewer's own patches, honestly scored

Of the six patches Opus proposed in round 1: **four are active and demonstrably changed round-2 behaviour** (fixed wikilinks + Glob-before-link; the normalize-vs-flag disclosure rule; linking mentioned people; too-little-signal-no-name).

**Two are untested and must not be counted as validated** — the anonymous-speaker inference protocol (1.4b) and the confidence gate (2.4). The human supplied ground-truth attribution between rounds, so neither ever ran. They address the *actual* hard problem — inference under uncertainty — and they are precisely the two that got no test, because the human short-circuited them by knowing the answer. **This is the loop's biggest live fragility. Re-test both on the next Otter export before trusting them.**

Worse, one clause of the untested patch (1.4b.3, "absence redistributes ownership") *caused* the round-2 MAJOR: it hard-coded glossary names into the skill (which the skill's own header forbids) and read as a conclusion-generator. A patch written to prevent an error produced a new one. **Patches are code; they carry bugs; review them.**

### What the loop taught us about the loop

The reviewer earned its cost — the coin-flip BLOCKER, the broken wikilinks and the laundered inference would all have shipped without it. But the single most expensive error got past **both** AI roles, and was caught by the human. A two-role AI loop reliably finds what someone already thought to write a check for; it takes a human to notice the thing nobody thought to check at all. **The human gate is load-bearing, not ceremonial** — an argument for keeping the ambiguity questions short and high-signal, not for removing them.

The second lesson is cheaper and more general: **the reviewer's characteristic failure is accepting the executor's framing.** It stress-tested Sonnet's *answers* and never audited its *question*. No amount of trying harder fixes that — it needs a check that runs before the first name is considered, which is why C5 now sits at the top of section C and asks *how many*, not *who*.

---

## Recurring-slip tally

Promote to a hard rule in `SKILL.md` on the **second** occurrence.

| Slip | Rubric ref | Count | Promoted? |
|---|---|---|---|
| S1 — summary rendered in Chinese, not English | B2 / E4 | 1 | no |
| S2 — invented content in the English digest | A1 | 1 | no |
| S3 — Host field contradicts own role analysis | C4 | 1 | no |
| S4 — whole-meeting attribution from one turn's evidence | C4 | 1 | no |
| S5 — undisclosed normalization | D2 | 1 | no |
| S6 — summary not in speaker order | E4 | 1 | no |
