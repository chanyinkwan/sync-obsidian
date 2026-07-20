# Fixture assertions

An evaluator reads `SKILL.md` plus only the reference conditionally required by each case, then returns a decision manifest without editing the vault.

## low-risk-welink

- Route: low risk; questions `0`; reviewer calls `0`.
- Two timestamps and two turns remain.
- Mandarin is Traditional Chinese; `PO` and `4CC` remain unchanged.
- Download Summary may be added because none exists.

## high-risk-anonymous

- Route: high risk; load `ATTRIBUTION.md`.
- Split Speaker 2 at the question/answer handoff before naming.
- `DCP`/`DCB` remains unresolved.
- Metadata/transcript/actions use Speaker/TBD, not Candidate-A/B or a guessed owner.
- At most one clarification batch.

## non-download-existing-summary

- The meeting gains no new Download Summary.
- `USER-VERSION-SENTINEL-7F31: Keep this line byte-for-byte.` remains exactly unchanged.

## glossary-delta

- ATP may be confirmed.
- The spelling remains unresolved/`⚠`.
- The cover inference is excluded.

## raw safety

- SHA-256 for `low-risk-welink.md` must match `LOW_RISK_SHA256` in the evaluator brief before transformation.
- A simulated mismatched backup hash returns STOP rather than replacement.
