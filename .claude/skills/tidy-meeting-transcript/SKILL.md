---
name: tidy-meeting-transcript
description: >-
  Turn a raw WeLink/meeting transcript dump into a clean, readable note (keeping
  the spoken language — no translation), fold new terms into the 5T glossary, and
  append a Download Meeting Summary (Mon/Wed/Fri Download/Team Sync meetings only).
  Use when the user points at a transcript in "Operation Note/Meeting Transcript/"
  (a "Monday Download", "Morning Meeting", "Team Sync", or any raw "录音→整理"
  recording) and asks to tidy / clean it up / make it make sense. The raw file is
  usually a bilingual (Mandarin + English) ASR dump bloated with embedded WeLink
  avatar images.
---

# Tidy Meeting Transcript

Run the full pipeline below in order. It reproduces the exact process we settled on:
**(1) clean → (2) clarify → (3) update the glossary → (4) append the Download Meeting Summary (Download/Team Sync meetings only).**

## Canonical references (read these first — they are the source of truth)

- **Team map / who's who & internal→industry terms:** `CLAUDE.md` (project root).
- **5T glossary + meeting-minute format:** `Knowledge/Source/5T Group Handover - Brief, Terminology & Summary Format.md`
  - Section **2 術語表** = the term/person/product/event dictionary you read from and write back to.
  - Section **3 晨會紀要格式** = the exact output format for the Download Meeting Summary.
  - `⚠` marks terms that are unconfirmed — keep that convention.
- Transcripts live in `Operation Note/Meeting Transcript/`. Target is the file the user names; if none given, take the most recently added/modified one there.

Always re-read the 5T note at run time — it evolves. Do not hard-code its contents into this skill.

## Step 1 — Clean the transcript

1. **Back up the raw first.** Copy the original to the session scratchpad before touching it (the raw is recoverable for this session only). The raw files are huge, so to overwrite: `Remove-Item` the original, then `Write` the clean version fresh (a plain overwrite trips the "read whole file first" guard on a multi-MB file).
2. **Identify the source format first, then strip the bloat.**
   - **WeLink dump** (the common case): drop every line containing `data:image` / embedded SVG (avatar blobs — ~99% of bytes). Filter into a clean working copy in scratchpad, e.g. `Get-Content $src | Where-Object { $_ -notmatch 'data:image' }`, then read that. Speakers carry **name/device labels** → attribution is *mapping* (Step 1.4a).
   - **Otter.ai export** (`Transcribed by https://otter.ai` in the footer): small file, **no image bloat — skip the filtering entirely**. Speakers are **anonymous** (`Speaker 1..N`, `Unknown Speaker`) → there is nothing to map from, and attribution is *inference* (Step 1.4b). This is the hardest and most error-prone step in the whole skill; budget accordingly.
3. **Reconstruct the speech — in the language actually spoken.** Fix the ASR mangling into fluent text that makes sense given the team's work (FWA/CPE, Amazon e-commerce, device models, workshops), but **do NOT translate**: Mandarin turns stay Mandarin (简体, as the ASR emits), English turns stay English, and mixed turns keep their code-switching (English terms like ATP/EPD/PO/4CC stay English inside Mandarin sentences). The English layer belongs in the header/context/action-items sections, not the transcript turns. Keep the timestamps (`00:44` etc. — these are recording-elapsed time, not clock time); mark genuinely unintelligible bits `*[unclear]*` / `*[不清]*`.

   **Normalize vs. flag — where the line is.** You may silently normalize the *rendering* of a token whose identity is not in doubt: Chinese numerals inside alphanumeric codes (`X七`→`X7`, `B二B`→`B2B`), punctuation, de-stuttering, and unambiguous homophone slips in function words (`集团测`→`集团侧`). You may **never** silently choose between two spellings of a **name, acronym, or product code** (`DCP`/`DCB`, `孔维城`/`孔卫城`) — keep each spelling verbatim where it was said, and raise **one** Open-questions item identifying them as a single referent with the canonical spelling unresolved. **List every normalization you made in Open questions, including the obvious ones.**
4. **Attribute speakers to canonical `[[wikilinks]]`.**

   **4a. Labelled exports (WeLink) — map.** Use `CLAUDE.md` + the glossary's people list. Known mappings (verified against `Relationship Management/` — the wikilink **is** the note's file name): `QixuanWang` → `[[Qixuan Wang wx1252689]]` · `KailiLi` → `[[Kaili Li wx1252688 (凱莉)]]` · `EmiliodelaIglesia` → `[[Emilio de la Iglesia 00737742]]` · `丁程/程哥` → `[[Ding Cheng 00611102 (程哥or 丁程)]]`.
   **Before writing any `[[wikilink]]`, confirm the target note exists** (`Glob "Relationship Management/*<name>*"`). A wikilink that does not resolve mints a duplicate person and is worse than no link.
   **A room/device label (e.g. `…WeLink-Board`) can carry several people sharing one mic.** Any speaker label — device, room, or `Speaker N` — may carry more than one person. **Count before you name: apply 1.4b.0 here too**, then split at natural handoffs ("okay, for my side…") and confirm in Step 2.

   **4b. Anonymous exports (Otter.ai `Speaker 1..N`) — infer. Do not shortcut this protocol.**
   0. **Count before you name. A `Speaker N` label is NOT guaranteed to be one person** — this is the most expensive error in this skill, and it has burned the executor, the reviewer *and* the orchestrator. Otter's diarization merges similar or co-located voices, so one label routinely carries **two or more people**. Every identity test below presupposes the count; get the count wrong and they will confidently hand you one wrong name. Two tells:
      - **(a) Deixis contradiction — mechanical, costs nothing, run it first.** Within a single block, an interrogative addressed to `你` followed by a first-person answer means **two speakers, always**. `"有更新吗？你那边拉美那边突然跟我要…"` — nobody asks themselves for an update and then answers as the person being asked. Any block where 你/我 flip mid-turn, or where a question is immediately followed by a status report, is a split candidate.
      - **(b) Remit breadth — soft.** Do the topics under this label cohere as one person's job? A label spanning roll call + one account's logistics + another account's commercial dispute is **two people, not one polymath.** If you catch yourself asking *"who could possibly own all of this?"*, you have already failed this check — that question is the symptom. Treat breadth as evidence of a merge, not of seniority.

      Split at the natural handoff and confirm every split in Step 2.
   1. **Enumerate the candidate set from the glossary's 人 list — all of it — before you pick anyone.** Anyone whose remit touches a topic raised in the room is a candidate. Write the list down. Never narrow to two names without saying, per name, why the others are out.
   2. **Run all four disproof tests on every candidate, cheapest first:**
      - **Self-reference** — nobody refers to themselves in the third person. `"凯莉请假了"` ⇒ that speaker is not Kaili.
      - **Presence** — anyone reported absent or on leave cannot be a speaker.
      - **Register / language** — a turn in idiomatic native Mandarin (slang, idiom: 踢皮球, 扛着, 下来再看吧) is not a non-Chinese-speaking colleague, whatever account they sit on. Apply this **before** declaring two candidates a coin flip.
      - **Role-consistency across the whole meeting** — the identity must explain *every* turn that speaker takes, not the one line you inferred it from. The chair is whoever **asks for updates, assigns owners, dictates minutes and closes topics** — not whoever does the roll call or says goodbye. State which behaviours you relied on.
   3. **Topic ownership beats seniority, and absence redistributes it.** If a thread belongs to an absent person's remit, look up **in the glossary at run time** (do not trust any example hard-coded here — it will rot) who covers for them: their account lead, their stand-in, or the cross-account owner of that function.
      **This is a heuristic for generating candidates, not a finding.** Never write "X is covering for Y" into the note or the glossary unless someone *says so in the raw*. **Who spoke is a fact; why they spoke is a guess** — and guesses do not belong in the header, the digest, or the glossary. This rule exists because it was violated: an inference about who was covering for an absent colleague was written into a note header and very nearly into the permanent glossary, where the next executor would have read it as confirmed.
   4. **Score each surviving candidate, then apply the confidence gate in Step 2.4.**

   **Too little signal = no name.** If a speaker's entire captured contribution cannot support a topic or behaviour inference (e.g. a single filler word), do **not** attribute. Keep the raw `Speaker N` label and note in Open questions that the audio is too sparse. This is a correct outcome, not a failure.
5. **Fix metadata.** The date inside the body is often wrong; derive the real meeting date from the filename. Set/repair frontmatter: `type: meeting-transcript`, `date`, `account_or_project`, `attendees` (add anyone who spoke but was missing; add an `absent:` line for named no-shows). Add `monday-download` (or the relevant) tag.
6. **Lay out the note** in this structure:
   - `# <Meeting name>` + a header block (Date · Duration · Host · Location · In-room vs Dialled-in · Absent).
   - `> Context:` one-line framing (e.g. what anchors the week).
   - `## This week — action items by person` — bulleted digest grouped by `[[person]]`.
   - `## Cleaned transcript` — turn-by-turn (`**[[Speaker]]** · timestamp` then the line).
   - Leave room for `## Download Meeting Summary` (added in Step 4 — Download/Team Sync meetings only).
   - `## Open questions` — every unresolved attribution, garbled term and normalization you made, each with the raw string quoted, the evidence, and a confidence.

   **Wikilink people who are *mentioned*, not only people who speak** — in the header, action items, summary and Open questions (never inside transcript turns, which stay verbatim). Look each name up in `Relationship Management/` first (e.g. `丹尼斯` → `[[Dennis Lui]]`). **If the glossary carries two different referents for the same spoken name** (e.g. `何總` appears both as 中國區 GMDP and as Kevin/何剛 歐洲 CBG head), do **not** pick one — print the name as heard and raise it in Open questions. Resolve glossary terms in the English frame on first use (`机关 (HQ)`).

## Step 2 — Clarify (ask only what you genuinely can't resolve)

1. Resolve as much as possible **from the glossary and `CLAUDE.md`** before asking anything.
2. Use **`AskUserQuestion`** (batch up to ~4) only for true ambiguities, e.g.:
   - **Shared-mic / room speaker split** — who is behind a room/device label, and which update belongs to whom.
   - **Unknown or mis-transcribed terms** — a recurring garbled word (we hit `panday/pame day/pania` = **Amazon Prime Day**), product codes, customer/person names, event dates.
3. Offer the most likely option first (with your reasoning shown in the message), and let the user correct. Apply every answer back into Step 1's output (speaker attribution, term spellings, etc.).
4. **The attribution confidence gate — apply it even when you cannot ask.**
   - **High** (a hard positive: the speaker is addressed by name, self-identifies, or owns an exclusive-remit topic *and* every other candidate is disproved) → commit the `[[wikilink]]`.
   - **Medium** (best fit, alternatives weakened but not disproved) → commit the `[[wikilink]]` **with `⚠` + an Open-questions entry** naming the runner-up and the evidence.
   - **Low / coin-flip** (you cannot separate two or more candidates) → **put no name anywhere in the deliverable.** Keep the raw label `**Speaker 2**` in the transcript; write the Download Summary owner as `_TBD (Speaker 2 — see Open questions)`; list the full candidate set with evidence for and against each in Open questions. **Writing a 50/50 name into a paste-ready minute is a BLOCKER, and a `⚠` next to it does not make it safe.**
   - If `AskUserQuestion` is unavailable (e.g. you are running as a subagent), the gate still binds. The answer to "I can't ask" is **leave it unattributed** — never "guess and flag".

## Step 3 — Fold clarifications into the 5T glossary

For each term/person/product/event that was newly clarified (or confirmed) in Step 2, **update `Knowledge/Source/5T Group Handover…md`** so the next cleanup is easier:

- Add it to the right subsection of **Section 2 術語表** (帳戶 / 產品代碼 / 流程·會議·縮寫 / 活動·展會 / Amazon·電商 / 人). Recurring account-level topics can also go in Section 1.
- Match the existing line style (term `=` short gloss; `⚠` prefix if still unconfirmed; canonical `[[wikilink]]` for people).
- **Don't duplicate** an entry that already exists — instead tighten/confirm it (e.g. remove a `⚠` once verified, or add the resolved spelling).
- Keep edits surgical; never rewrite unrelated parts of that note.

## Step 4 — Append the Download Meeting Summary (Download / Team Sync meetings ONLY)

**Only the recurring Download / Team Sync meetings (every Monday, Wednesday and Friday — named "…Download" or "…Team Sync") get this summary. Any other meeting type (roadmap reviews, workshops, 1:1s, task-assignment calls, etc.) skips Step 4 entirely — end after Step 3.**

Under the cleaned transcript, add `## Download Meeting Summary` using **Section 3's English format**:

```
<M.DD> <meeting label> — Morning Meeting Minute (<account(s)>)
1. <topic / action> _<owner>
2. ...
```

Rules:
- One line = one topic/action + owner. Owner suffix is `_<FirstName>` (e.g. `_Ziyi`, `_Selina`, `_Qixuan`, `_Kaili`, `_Emilio`).
- Title carries **date + (group/) account**. If the meeting spans more than one account team, say so (e.g. `(Hutchison + TEF)`); if the user wants a single-account minute, scope it (e.g. `(Hutchison)`).
- Build the items straight from the Step 1 action-item digest, in speaker order.

## Finish

Report concisely: what was cleaned, which ambiguities you asked about and how they resolved, which glossary entries you added/updated, and the generated summary. Flag any low-confidence reconstructions for the user to eyeball.
