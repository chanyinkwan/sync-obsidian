---
name: tidy-meeting-transcript
description: Use when Chukwan asks to tidy, clean, reconstruct, or summarise a raw WeLink, Otter, or meeting transcript in Operation Note/Meeting Transcript, including Download, Team Sync, training, workshop, and 1:1 recordings.
---

# Tidy Meeting Transcript

## Core principle

Produce a readable, traceable note without translating speech or turning inference into fact. Spend reasoning only where a wrong identity, owner, term, or decision would mislead. **User-facing output defaults to Traditional Chinese**, except verbatim speech and required English meeting-minute fields.

## Sources

Always read `AGENTS.md` (or active project instructions) and `Knowledge/Source/Life at Huawei/5T Group Handover - Brief, Terminology & Summary Format.md`. Do not read `FEEDBACK-LOG.md` during a normal run; it is historical test evidence.

## Workflow

1. **Choose the source.** Use the named file; otherwise use the newest raw file in `Operation Note/Meeting Transcript/`. Detect WeLink (`data:image` bloat/labels) versus anonymous Otter-style speakers.
2. **Protect the raw.** Never delete first. Before replacement, create `Operation Note/Meeting Transcript/Raw/` and copy to `<stem>__raw__<YYYYMMDD-HHmmss><ext>`; add a numeric suffix on collision. Compute SHA-256 before and after copying. A mismatch is STOP. Record the backup path/hash. Transform a separate working copy; replace only after validation.
3. **Route by risk.** Labelled speaker + resolvable terms + no shared-mic signal = one economical pass, no reviewer. Anonymous labels, room devices, speaker-count contradictions, or uncertain names/owners/codes = load `ATTRIBUTION.md`. Request stronger review only while a BLOCKER-risk claim remains unresolved.
4. **Reconstruct faithfully.** Remove image blobs; fix punctuation, de-stuttering, and unambiguous rendering errors; preserve every timestamp/turn. Do not translate. Default Mandarin rendering is Traditional Chinese; English stays English; code-switching stays mixed. Never silently choose or correct a person/name, acronym, product code, owner, number, or ambiguous term. Use `*[不清]*` / `*[unclear]*` instead of invention.
5. **Write the note.** Follow `OUTPUT-CONTRACT.md`. Verify every committed person wikilink exists. Keep routine rendering fixes out of Open questions; surface consequential ambiguity only.
6. **Clarify once if needed.** Batch true blockers with raw evidence and the most likely option. Without an answer, preserve the raw label/TBD; never guess and flag.
7. **Handle deltas.** Propose glossary changes; apply only confirmed/high-confidence facts, never inferred motive/cover. Treat every existing Download Summary as user-authored: preserve it byte-for-byte unless replacement was explicitly requested. Add one only to Download/Team Sync meetings with no existing summary; add a separate AI reconciliation only when requested.
8. **Validate, then finish.** Check frontmatter, `meeting` tag, turn/timestamp coverage, links, confidence, summary gate, glossary delta, and raw hash evidence. Then write the cleaned result.

Report: source/backup/hash, risk route, validation, questions, glossary delta, and summary action.
