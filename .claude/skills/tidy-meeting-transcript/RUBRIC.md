# Reviewer Rubric — tidy-meeting-transcript

The checklist the **reviewer** (Opus) grades the **executor**'s (Sonnet) output against.
Companion to `SKILL.md`. Grows every run — see `FEEDBACK-LOG.md`.

> The executor should read this too. Knowing how you'll be graded is not cheating; it's the point.

---

## How to review

Read three things before judging anything: the **raw transcript**, the **executor's output**, and the **5T glossary**. Then walk the checks below in order. Quote the raw line for every finding — a finding without a quote is an opinion.

### Root-cause tag (mandatory on every finding)

This is the part that makes the loop work. Tag each finding as exactly one of:

- **`executor-slip`** — `SKILL.md` or this rubric already said to do it, and the executor didn't. The instruction exists; it was missed.
- **`skill-gap`** — the executor could not have known. The rule isn't written anywhere yet. **A skill-gap is not the executor's fault** — it's a bug in the skill, and it gets patched.

If you find yourself writing "it should have known better" but can't cite the line that told it — that's a `skill-gap`. Be honest here; mis-tagging poisons the loop, because slips get drilled into the executor while gaps get patched into the skill, and the two fixes are not interchangeable.

### Severity

- **BLOCKER** — wrong information that would mislead the reader (misattributed speaker, invented content, wrong owner on an action item). Must be fixed before handoff.
- **MAJOR** — a skill rule violated (translated when it shouldn't have, dropped a timestamp, missing frontmatter field).
- **MINOR** — style, polish, formatting drift.

---

## The checks

### A. Fidelity — did it invent anything?
- [ ] **A1. No hallucinated content.** Every substantive claim in the cleaned transcript traces to a raw line. This is the cardinal sin: ASR reconstruction is *repair*, not *authorship*. If the raw is too garbled to recover, it stays `*[不清]*` — a plausible invention is worse than an honest gap.
- [ ] **A2. No dropped turns.** Every raw turn appears (or is deliberately merged at a natural handoff, which is fine — silently vanishing is not).
- [ ] **A3. Timestamps preserved** and still match the raw turn they came from.
- [ ] **A4. `*[unclear]*` / `*[不清]*`** used for genuinely unrecoverable bits, rather than papered over with a confident guess.
- [ ] **A5. No unsourced causal claims. Who spoke is a fact; *why* they spoke is a guess.** The note may say "Qixuan gave the TEF status block" (observed). It may not say "Qixuan is covering for Kaili while she's out" (inferred) unless someone says so in the raw. Check the header, the digest and any proposed glossary edit for motive, cover, hand-off and responsibility claims that no raw line supports. **This check applies to instructions from the orchestrator too** — in run 1 the orchestrator handed the executor an unsourced "covering for Kaili" claim as ground truth, and it propagated into the note header and nearly into the permanent glossary. An inference laundered into the glossary becomes "fact" for every future run. If a claim's source is a person rather than a line of audio, it needs a `⚠` or it needs to go.

### B. Language — did it stay in the language spoken?
- [ ] **B1. No translation.** Mandarin turns stay 简体; English turns stay English; code-switched turns keep their code-switching (ATP / EPD / PO / 4CC stay English inside Mandarin sentences).
- [ ] **B2. English lives in the frame, not the turns** — header, context line, action items, and the Download summary are English. The transcript body is not.

### C. Attribution — who actually said this?
- [ ] **C1. Every speaker is a canonical `[[wikilink]]`** matching the glossary's people list.
- [ ] **C2. Anonymous-speaker transcripts (Otter.ai `Speaker 1..N`):** attribution is **inferred, not given**. Each inferred identity must carry its **evidence** (topic ownership, role behaviour, third-person mentions of others) and a **confidence**. Low-confidence attributions go to the user — they are never silently committed.
- [ ] **C3. Self-reference test.** A speaker never refers to themselves in the third person. If `Speaker 2` says "凯莉请假了", `Speaker 2` is not Kaili. Run this against every candidate — it is the cheapest and most reliable disproof available.
- [ ] **C4. Role-consistency test.** The chair assigns owners, closes topics, asks for updates. Someone giving a status update on account X is on account X's team. Check the inferred identity against how the person *behaves* across the whole meeting, not one line.
- [ ] **C5. Cardinality before identity — one label ≠ one person. Check this FIRST.**
      **Ask "how many people are under this label?" *before* "who is this?".** C1–C4 all presuppose the count. Get the count wrong and they will confidently produce one wrong name — the checks cannot save you, because they are downstream of the error. Any speaker label (device, room, or anonymous `Speaker N`) can carry more than one person; Otter's diarization routinely glues two colleagues into one label.
      Two tells — run both on every label:
      - **(a) Deixis contradiction (hard, mechanical, run first).** A block that both *addresses* someone and *answers* in the first person contains two speakers. `"有更新吗？你那边拉美那边突然跟我要那个 fee"` — nobody asks themselves for an update and then answers as the person being asked. Any turn where 你/我 flip mid-block, or where an interrogative is immediately followed by a status report, is a split candidate. This test needs no glossary, no org chart, and no judgment.
      - **(b) Remit breadth (soft).** Do the topics under this label cohere as one person's job? A label spanning roll call + one account's logistics + another account's commercial dispute is **two people, not one polymath**. If you catch yourself asking *"who could possibly own all of this?"* — you have already failed this check. That question is the symptom.
      **This binds the reviewer as hard as the executor.** In run 1 the reviewer wrote out the impossibly broad fingerprint, then spent 400 words hunting for a person senior enough to fit it. It treated a *cardinality* puzzle as an *identity* puzzle. If the output presents a suspiciously broad fingerprint for one speaker, do not help it find a polymath — **split it.**

### D. Terminology — did it check the glossary before guessing?
- [ ] **D1. Glossary consulted first.** A term that already exists in the 5T glossary must be resolved *from* it, not re-guessed. (Worked example: `机关` is **HQ**, not an ASR garble — it's in the glossary. Guessing it as a customer name is a `skill-gap` only the first time; after that it's a slip.)
- [ ] **D2. Garbles flagged, not invented.** Unrecognised terms go to the Open Questions block with the raw string quoted, not silently "corrected".
- [ ] **D3. ASR variance collapsed.** Same term, two spellings across the file (`DCP`/`DCB`, `孔维城`/`孔卫城`) → identified as one thing and flagged for the canonical spelling.

### E. Structure — does it match the skill?
- [ ] **E1. Frontmatter:** `type: meeting-transcript`, correct `date` **derived from the filename** (the in-body date is routinely wrong), `account_or_project`, `attendees`, `absent:` for named no-shows, correct tag.
- [ ] **E2. Layout:** `# <name>` → header block → `> Context:` → `## This week — action items by person` → `## Cleaned transcript`.
- [ ] **E3. Action items grouped by `[[person]]`**, each traceable to a real turn.
- [ ] **E4. Download summary** (Mon/Wed/Fri Download & Team Sync **only**) in Section 3's format: `<M.DD> <label> — Morning Meeting Minute (<account>)`, one line per topic, owner suffix `_<FirstName>`.

### F. Honesty — did it flag what it didn't know?
- [ ] **F1. `## Open questions` block present**, with evidence + confidence per item.
- [ ] **F2. Flag, don't guess.** A confident-sounding invention is a BLOCKER even when it turns out to be right. Being right by luck is not the standard; calibration is. An executor that guesses well today will guess badly tomorrow and we won't be able to tell the difference.

---

## Output format (reviewer → orchestrator)

```
VERDICT: PASS | REVISE | BLOCK

FINDINGS (most severe first)
1. [BLOCKER] [executor-slip] C3 — Speaker 2 attributed to [[Kaili]]
   Raw (1:01): "凯莉呢凯莉请假了"
   Speaker 2 reports Kaili's absence in the third person, so Speaker 2 is not Kaili.
   Fix: re-infer from the TEF-side update at 4:54.

2. [MAJOR] [skill-gap] — no rule covers Otter.ai anonymous speakers
   SKILL.md Step 1.4 assumes device labels to map from. There are none here.
   Proposed skill patch: <the exact wording to add>

SKILL PATCHES PROPOSED: <n>   (every skill-gap must produce one)
```

---

## Patch hygiene — keep the skill sharp, not long

A skill too long to hold in your head stops being read, so every proposed patch must earn its line. When you propose one, **say which kind it is**:

- **Generalizing** — a rule that will fire on transcripts you haven't seen yet: *count before you name*, *deixis contradiction*, *self-reference*, *who spoke is a fact, why is a guess*. **These belong in `SKILL.md`.**
- **Memorizing** — a fact about this vault: what `X7` is, which `何总` is which, that Emilio isn't a native Mandarin speaker. **These belong in the 5T glossary, not the skill.** The skill should teach the executor to *look things up*, not carry the lookup table — the skill's own header already forbids hard-coding glossary contents, and a hard-coded name will rot.

Watch the disproof-test list especially: there is a standing pull to append one bullet per run. Resist it. And apply the promotion rule — an `executor-slip` gets **logged**, not patched, until it recurs. Patching a slip on first offence bloats the skill with things it already says.
