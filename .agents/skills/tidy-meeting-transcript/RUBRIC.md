# Review rubric — tidy-meeting-transcript

Use only for a requested/high-risk review. Read the raw, cleaned note, current glossary, `ATTRIBUTION.md`, and `OUTPUT-CONTRACT.md`.

## Severity

- **BLOCKER:** invented/misattributed claim, person, owner, action, or leaked low-confidence name.
- **MAJOR:** dropped turn/timestamp, translation, broken link/frontmatter, unsafe raw handling, wrong summary gate, unconfirmed glossary fact.
- **MINOR:** readability/formatting that does not change meaning.

## Checks

1. **Fidelity:** every claim/action traces to raw evidence; all turns/timestamps survive; unclear audio stays unclear; no inferred motive becomes fact.
2. **Language:** no translation; Mandarin follows the requested/default script; English and code-switching remain.
3. **Attribution:** count before naming; disproof tests applied; committed identities are High confidence; medium/low remains raw/TBD.
4. **Terminology:** glossary read from the canonical path; no silent choice between names/acronyms/product codes; delta is factual and minimal.
5. **Structure:** frontmatter, `meeting` tag, link resolution, body order, action traceability, and Open questions satisfy the output contract.
6. **Summary:** only Download/Team Sync; existing user version preserved unless replacement was explicit.
7. **Safety:** raw is recoverable and validation preceded replacement.

## Verdict

Return `PASS`, `REVISE`, or `BLOCK`. Each finding needs severity, raw evidence, failed check, and exact fix. Tag `skill-gap` only when no current instruction covers it; otherwise `executor-slip`. Historical incidents belong in `FEEDBACK-LOG.md`, not `SKILL.md`.
