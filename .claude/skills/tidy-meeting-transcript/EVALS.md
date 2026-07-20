# Evaluations — tidy-meeting-transcript v2

First run `powershell -NoProfile -File .agents/skills/tidy-meeting-transcript/scripts/validate-skill.ps1`. Then a fresh evaluator reads `SKILL.md`, `fixtures/ASSERTIONS.md`, and each fixture; it returns a decision manifest without editing the vault. Tests 1, 2, 4 and 6 are zero-tolerance.

1. **Canonical glossary:** the exact Life-at-Huawei glossary path resolves and Section 2/3 is used.
2. **Raw safety:** `low-risk-welink.md` has SHA-256 `1AEA54D8860E374B378BC4BDA2CD997ED8DBD99CDCD97E949C40EB9D77D09ED6`; matching backup permits validation, simulated mismatch returns STOP.
3. **Low-risk single pass:** apply `low-risk-welink.md`; use its `source_filename` for date and Qixuan's chairing behaviour for host; require zero questions/reviewer calls, valid metadata, `meeting` tag, links, two timestamps/turns.
4. **Anonymous/shared mic:** apply `high-risk-anonymous.md`; split before identity, raw/TBD metadata, unresolved DCP/DCB, no Candidate-A/B leak, at most one clarification batch.
5. **Language:** across low/high fixtures, no translation, Traditional-Chinese Mandarin by default, PO/4CC unchanged, ambiguous names/acronyms/codes unresolved.
6. **Summary gate:** apply `non-download-existing-summary.md`; sentinel remains byte-identical and no new Download Summary is added.
7. **Glossary delta:** apply `glossary-delta.md`; confirmed fact only, unresolved spelling stays `⚠`, inferred cover is excluded.
8. **Runtime parity:** `.agents` and `.claude` copies of runtime, tests, fixtures, and validator are byte-identical with no hard-coded model ID.

## Pass evidence

Attach validator output and the fresh evaluator's 1–8 manifest. PASS requires all eight, zero Critical/Important findings, zero low-confidence names, and at most one clarification batch.
