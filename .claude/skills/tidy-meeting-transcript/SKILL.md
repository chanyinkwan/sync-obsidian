---
name: tidy-meeting-transcript
description: >-
  Turn a raw WeLink/meeting transcript dump into a clean, readable note, then
  fold new terms into the 5T glossary and append a Download Meeting Summary.
  Use when the user points at a transcript in "Operation Note/Meeting Transcript/"
  (a "Monday Download", "Morning Meeting", "Team Sync", or any raw "录音→整理"
  recording) and asks to tidy / clean it up / make it make sense. The raw file is
  usually a bilingual (Mandarin + English) ASR dump bloated with embedded WeLink
  avatar images.
---

# Tidy Meeting Transcript

Run the full pipeline below in order. It reproduces the exact process we settled on:
**(1) clean → (2) clarify → (3) update the glossary → (4) append the Download Meeting Summary.**

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
2. **Strip the bloat.** Drop every line containing `data:image` / embedded SVG (WeLink avatar blobs — ~99% of bytes). Filter into a clean working copy in scratchpad, e.g. `Get-Content $src | Where-Object { $_ -notmatch 'data:image' }`, then read that.
3. **Reconstruct the speech.** It's mostly English with Mandarin fragments, mangled by ASR. Rewrite each turn into clear English that makes sense given the team's work (FWA/CPE, Amazon e-commerce, device models, workshops). Keep the timestamps (`00:44` etc. — these are recording-elapsed time, not clock time). Preserve meaningful Mandarin as a short *(italic parenthetical)*; mark genuinely unintelligible bits `*[unclear]*`.
4. **Attribute speakers to canonical `[[wikilinks]]`.** Map ASR/device labels to the real person using `CLAUDE.md` + the glossary's people list. Known mappings: `QixuanWang`→`[[Qiuxuan]]` (Qixuan), `KailiLi`→`[[Kaili Li wx1252688 (凱莉)]]`, `EmiliodelaIglesia`→`[[Emilio de la Iglesia]]`. **A room/device label (e.g. `…WeLink-Board`) can carry several people sharing one mic** — split their updates at natural handoffs ("okay, for my side…") and confirm in Step 2.
5. **Fix metadata.** The date inside the body is often wrong; derive the real meeting date from the filename. Set/repair frontmatter: `type: meeting-transcript`, `date`, `account_or_project`, `attendees` (add anyone who spoke but was missing; add an `absent:` line for named no-shows). Add `monday-download` (or the relevant) tag.
6. **Lay out the note** in this structure:
   - `# <Meeting name>` + a header block (Date · Duration · Host · Location · In-room vs Dialled-in · Absent).
   - `> Context:` one-line framing (e.g. what anchors the week).
   - `## This week — action items by person` — bulleted digest grouped by `[[person]]`.
   - `## Cleaned transcript` — turn-by-turn (`**[[Speaker]]** · timestamp` then the line).
   - Leave room for `## Download Meeting Summary` (added in Step 4).

## Step 2 — Clarify (ask only what you genuinely can't resolve)

1. Resolve as much as possible **from the glossary and `CLAUDE.md`** before asking anything.
2. Use **`AskUserQuestion`** (batch up to ~4) only for true ambiguities, e.g.:
   - **Shared-mic / room speaker split** — who is behind a room/device label, and which update belongs to whom.
   - **Unknown or mis-transcribed terms** — a recurring garbled word (we hit `panday/pame day/pania` = **Amazon Prime Day**), product codes, customer/person names, event dates.
3. Offer the most likely option first (with your reasoning shown in the message), and let the user correct. Apply every answer back into Step 1's output (speaker attribution, term spellings, etc.).

## Step 3 — Fold clarifications into the 5T glossary

For each term/person/product/event that was newly clarified (or confirmed) in Step 2, **update `Knowledge/Source/5T Group Handover…md`** so the next cleanup is easier:

- Add it to the right subsection of **Section 2 術語表** (帳戶 / 產品代碼 / 流程·會議·縮寫 / 活動·展會 / Amazon·電商 / 人). Recurring account-level topics can also go in Section 1.
- Match the existing line style (term `=` short gloss; `⚠` prefix if still unconfirmed; canonical `[[wikilink]]` for people).
- **Don't duplicate** an entry that already exists — instead tighten/confirm it (e.g. remove a `⚠` once verified, or add the resolved spelling).
- Keep edits surgical; never rewrite unrelated parts of that note.

## Step 4 — Append the Download Meeting Summary

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
