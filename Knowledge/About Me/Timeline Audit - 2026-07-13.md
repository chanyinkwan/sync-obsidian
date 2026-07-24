# Timeline & Identity Consistency Audit — Career Proof Bank
Audit date: 2026-07-13
Sources audited:
- `Knowledge/Source/About Me/NewProofBank.json` (17 distinct company/role/timeline blocks, 32 entries total)
- `Knowledge/Source/About Me/Apple - Operation Data Analyst.md`
- `Knowledge/Source/About Me/Apple - B2B solution Experts.md`
- `Knowledge/Source/About Me/Bank of China - Technical Product Manager.md`
- `Knowledge/Source/About Me/Huawei CBG - Portfolio Solution Specialist.md`

**LinkedIn is not accessible to this audit and remains the pending authoritative source.** Every finding below is what the two local sources literally say — nothing has been "corrected" or inferred beyond what is written.

**Methodological caveat (important):** Three of the four role notes (Apple ODA, Apple B2B, Bank of China TPM) do **not** contain a self-authored description of the historical role. Each opens with the identical placeholder line *"which role do you want to identical to in this experience"* followed by a pasted **external job description** the candidate is prepping against for interviews (a Salesforce "Data Foundation Account Executive" JD in the Apple B2B file; a bank "Technical Product Associate" JD in the Bank of China file; nothing at all — the file is otherwise empty — in the Apple ODA file). None of these three files states an actual job title, start date, or end date for the historical role. Only the Huawei file contains genuine first-person content (self-described day-to-day duties), and even it states no dates. This means the notes **cannot be used to independently corroborate or overrule the JSON's titles/dates** — they can only be compared at the filename level, which is still a legitimate signal since the candidate chose those filenames to label the roles.

---

## 1. Master Chronology Table

All distinct (company, role, timeline) tuples from the JSON, sorted by start date. "Title in notes" reflects the filename label only (see caveat above), since no note contains an internally-stated title/date.

| # | Company | Title in JSON | Title implied by note filename | Timeline (JSON) | Source conflict? |
|---|---|---|---|---|---|
| 1 | Echoroaster | Data Infrastructure Intern | *(no note file exists for Echoroaster)* | Aug 2018 – Oct 2019 | No note to compare |
| 2 | Apple | Specialist | *(no note file exists for this role — see §3)* | Aug 2019 – Jul 2021 | No note to compare |
| 3 | Apple | Business Development Support | "B2B solution Experts" (filename) | Aug 2019 – Jul 2021 | **Yes — title wording differs** |
| 4 | Apple | Operation Strategy Analyst | "Operation Data Analyst" (filename) | Jul 2021 – Aug 2023 | **Yes — title wording differs** |
| 5 | Bank of China | Technical Business Analyst | "Technical Product Manager" (filename) | Sep 2023 – Oct 2024 | **Yes — title wording differs** |
| 6 | University of Exeter | Academic Project (5 project entries, same dates) | *(no note file; not mentioned in any of the 4 notes)* | Aug 2024 – Dec 2025 | No note to compare |
| — | **Huawei CBG** | **NOT PRESENT IN JSON** | "Portfolio Solution Specialist" (filename) vs CLAUDE.md's "Portfolio Solution **& Commercial Sales** Specialist" | Not stated anywhere | **Yes — missing entirely, see §3** |
| 7 | Freelance | AI Solutions Engineer — "AI Lead Enrichment Pipeline" | n/a | Oct 2025 – Present | — |
| 8 | Freelance | AI Solutions Engineer — "Financial RAG Assistant" | n/a | Feb 2026 – Present | — |
| 9 | Freelance | AI Solutions Engineer — "Multi-Platform Job Scanning System" | n/a | Feb 2026 – Present | — |
| 10 | Freelance | AI Solutions Engineer — "Modular AI Automation Platform" | n/a | Jan 2026 – Present | — |
| 11 | Freelance | AI Solutions Engineer — "System Architecture Migration" | n/a | Mar 2026 – Apr 2026 | — |
| 12 | Freelance | AI Solutions Engineer — "Intentional-Vibe Coding Education Plugin" | n/a | Mar 2026 – Present | — |
| 13 | Freelance | **Software Engineer** — "claude-island" | n/a | Mar 2026 – Present | **Yes — different title than every other concurrent freelance entry** |
| 14 | Freelance | AI Solutions Engineer — "AI Bank Reconciliation System" | n/a | Mar 2026 – Present | — |
| 15 | Freelance | AI Solutions Engineer — "AI Email Autoresponder" | n/a | Mar 2026 – Present | — |
| 16 | Freelance (Perfect Matching Agency) | AI Solutions Engineer — "Social Media Content Pipeline" | n/a | Apr 2026 – Present | **Company name inconsistent with "Freelance" used elsewhere** |
| 17 | Freelance | AI Solutions Engineer — "Iconic Use Case Scorer" | n/a | Apr 2026 – Present | — |

Row 1 = `NewProofBank.json` line 507-509 (and dupes at 531-533, 556-558). Row 2 = line 481-483. Row 3 = lines 402-404, 426-429, 451-454. Row 4 = lines 321-324, 346-349, 374-377. Row 5 = lines 132-135, 161-164, 188-191, 215-218, 242-245, 271-274, 296-299. Row 6 = lines 2-5, 28-31, 54-57, 80-83, 106-109.

---

## 2. Title Mismatches

| JSON title | Note filename title | Where each appears | Assessment |
|---|---|---|---|
| "Operation Strategy Analyst" (Apple, `NewProofBank.json:322`) | "Operation Data Analyst" (filename `Apple - Operation Data Analyst.md`) | Both refer to the Jul 2021 – Aug 2023 Apple stint (by process of elimination — content topic in the note is not stated) | Literal mismatch: "Strategy" vs "Data" Analyst. The note body itself never states either title — it only pastes an external JD and asks "which role do you want to identical to." **Cannot confirm which title, if either, was the actual historical title.** |
| "Business Development Support" (Apple, `NewProofBank.json:402`) | "B2B solution Experts" (filename `Apple - B2B solution Experts.md`) | Both plausibly refer to the Aug 2019 – Jul 2021 Apple B2B entries (3 bullets: Predictive Revenue Reporting, Automated Capacity Planning, B2B Client Acquisition) | Literal mismatch. Note body pastes a Salesforce "Data Foundation Account Executive" JD with no self-stated title. |
| "Technical Business Analyst" (Bank of China, `NewProofBank.json:133`) | "Technical Product Manager" (filename `Bank of China - Technical Product Manager.md`) | Both refer to the Sep 2023 – Oct 2024 Bank of China entries (7 bullets) | Literal mismatch, and a materially different seniority/function signal (Analyst vs Manager, Business vs Product). Note body pastes a "Technical Product Associate" JD (note: even the pasted target JD says "Associate," a third variant) and leaves interview-prep questions like "describe your day to day as a technical product manager in a bank" unanswered — this reads as an **aspirational target title for interview practice, not a record of the historical title actually held.** |
| Apple "Specialist" (`NewProofBank.json:481`, Customer Experience bullets) | *No corresponding note file* | — | There is no role note at all for this JSON entry, even though it shares the exact same Aug 2019 – Jul 2021 window as "Business Development Support." Unclear if "Specialist" was a separate concurrent job or the same job as BDS under one contract (see §4). |
| Huawei CBG "Portfolio Solution Specialist" (filename) | CLAUDE.md: "Portfolio Solution & Commercial Sales Specialist" | `Huawei CBG - Portfolio Solution Specialist.md` filename vs project memory file `CLAUDE.md` §1 | The filename itself drops "& Commercial Sales" relative to the title recorded elsewhere as the candidate's current role. |

**Net finding:** every JSON title that has a corresponding note file conflicts with that note's filename wording. However, because three of the four notes contain no self-declared title (only pasted external JDs), the notes cannot be treated as a ground-truth correction — both the JSON and the filenames are candidate-authored labels that disagree with each other, and neither is independently verified. LinkedIn or an offer letter/payslip would be needed to settle which (if either) is correct.

---

## 3. Missing Roles

**Huawei CBG — Portfolio Solution Specialist — CONFIRMED ABSENT from `NewProofBank.json`.** A full-text scan of the JSON found zero entries with `"company": "Huawei"` (or any variant). This is the candidate's current role per `CLAUDE.md` ("Current Role: Portfolio Solution & Commercial Sales Specialist").

What the note `Huawei CBG - Portfolio Solution Specialist.md` actually contains (verbatim, this is the only note with real first-person content):
- **No start/end dates stated anywhere in the file.**
- **No formal title stated inside the body** (only the filename says "Portfolio Solution Specialist").
- Self-described day-to-day duties:
  - "preparing RFI and RFP materials"
  - "needs analysis -> joining conferences with customers"
  - "sourcing the best ground for win win solution for both customers and the company"
  - "product roadmap and strategy: lead the discussion in GTM, how the product feature attract customers, and pricing"
  - "testing-> familiar with account subnet spec restriction"
- The remainder of the file is a pasted external JD ("Alternatives Value Advisory (Presales)" at SimCorp) used for interview-prep mapping — not descriptive of the Huawei role itself.

This gives enough raw material (5 duty bullets) to draft Huawei master_bullets later, but **dates and formal title must come from the candidate** before an entry can be added to the JSON.

**Apple "Specialist" (Customer Experience) has no note file** — flagged for completeness; not a company omitted from the JSON (the JSON entry exists), just an asymmetry versus the other three roles which each have a note.

---

## 4. Overlaps & Gaps (chronological, with risk notes)

| Boundary | Dates involved | Finding | Risk note |
|---|---|---|---|
| Echoroaster → Apple | Echoroaster Aug 2018–**Oct 2019**; Apple (Specialist / BDS) **Aug 2019**–Jul 2021 | 2-month overlap (Aug–Oct 2019) | Reads as double-counting two jobs worked simultaneously; needs a one-line explanation (e.g. notice period / part-time overlap) or the Echoroaster end date needs correcting. |
| Apple "Specialist" vs Apple "Business Development Support" | Both **identically** Aug 2019 – Jul 2021 | Two different titles, same company, same exact 23-month window, no note clarifying whether these were one blended role or two concurrent functions | Highest-risk item in the file. A recruiter will read this as either (a) one job mislabeled two ways across different bullet groups, artificially inflating the proof bank with duplicate tenure, or (b) an unexplained dual role. Needs candidate clarification before external use. |
| Apple BDS/Specialist → Apple Operation Strategy Analyst | Both **end/start exactly at Jul 2021** | Contiguous, not overlapping — but the shared boundary month is ambiguous (does Jul 2021 belong to the old role or the new one?) | Low risk (reads as an internal promotion), but worth tightening to non-overlapping months (e.g., "...Jun 2021" / "Jul 2021...") for precision. |
| Bank of China → University of Exeter | BOC Sep 2023–**Oct 2024**; Exeter **Aug 2024**–Dec 2025 | 3-month overlap (Aug–Oct 2024) between a stated full-time bank role and academic project work | Plausible if these were evening/part-time postgraduate modules studied while employed, but this is not stated anywhere — needs candidate confirmation, otherwise reads as full-time-job-plus-full-time-study overlap. |
| Bank of China → first Freelance entry | BOC ends **Oct 2024**; first Freelance ("AI Lead Enrichment Pipeline") starts **Oct 2025** | Exactly 12-month gap with **no paid role entry** in the JSON (only the ongoing, unpaid Exeter academic project spans this period) | Unexplained ~1-year gap in paid employment on a recruiter-facing timeline. This is very likely where the missing Huawei CBG role belongs (see §3) — strongly recommend resolving the Huawei dates before treating this as a real gap. |
| Freelance "AI Solutions Engineer" cluster | 8 separate JSON entries under "Freelance" all marked **Present**, with start dates Oct 2025, Jan 2026, Feb 2026 (×2), Mar 2026 (×4), Apr 2026 (×2) | By Apr 2026, the JSON implies the candidate is concurrently running **7+ simultaneous freelance engagements**, one under a differently-named company ("Freelance (Perfect Matching Agency)") and one under a different title ("Software Engineer" for claude-island vs "AI Solutions Engineer" for the rest) | High risk of looking like project padding/stacking if presented as sequential "roles" rather than a project portfolio. Recommend either consolidating into a single "Freelance AI Solutions Engineer, Oct 2025–Present" umbrella role with sub-bullets per project, or explicitly labeling these as a project portfolio rather than distinct employment entries. Also flag the lone "Software Engineer" title and the lone "(Perfect Matching Agency)" company suffix as inconsistent with the rest of the cluster. |

---

## 5. Internal Date Oddities

- **University of Exeter — all 5 "Academic Project" entries share the identical timeline "Aug 2024 – Dec 2025"** (`NewProofBank.json` lines 5, 31, 57, 83, 109). None of the four role notes mention the University of Exeter or state actual programme/module dates, so there is no independent source to check this against. A standard UK postgraduate taught programme typically runs Sept–Sept (with dissertation into ~Sept of the following year); an Aug start and a Dec end is an unusual pairing for a full programme and reads more like a specific term/module window — worth confirming whether "Aug 2024 – Dec 2025" is the whole programme or just this project's active window.
- **Bank of China note internally requests information the file doesn't have.** The note ends with unanswered interview-prep prompts ("describe your day to day as a technical product manager in a bank," "three story for the transferrable skills as a pre-sales") — i.e., the file is a half-finished prep worksheet, not a completed record, and should not be read as confirming any bullet in the JSON's Bank of China entries.
- **Huawei note has no dates at all**, not even relative ones ("since joining," "this year") — the entire timeline placement of the current role is undocumented in the vault outside of `CLAUDE.md`'s generic "Current Role" label.

---

## 6. Notes vs JSON — Content-Level Contradictions (Item E)

Because three of the four notes contain no first-person role content (only pasted external JDs and an unanswered placeholder line), there are **no bullet-level factual contradictions to report** between those three notes and their corresponding JSON master_bullets — there is simply nothing in the notes to compare against. The one exception:

- The Huawei note's day-to-day bullets (RFI/RFP prep, customer-conference needs analysis, GTM/pricing strategy discussion, subnet-spec testing) do not contradict anything in the JSON, because **the JSON has no Huawei entry to compare against** — this is a gap, not a contradiction (see §3).

No other content-level conflicts were found, because the pasted material in the Apple ODA, Apple B2B, and Bank of China notes is external target-company JD text (Salesforce, and a bank Technical Product Associate posting), not the candidate's own historical claims, and so is out of scope for a factual contradiction check against the proof bank.

---

## 7. Open Questions for the Candidate

1. What was your actual job title at Apple for the Aug 2019 – Jul 2021 window — was "Specialist" (Customer Experience) and "Business Development Support" (B2B) one blended role, two concurrent roles, or a role change partway through, and if so, what are the correct sub-dates for each?
2. Is "Operation Data Analyst" (per the note filename) or "Operation Strategy Analyst" (per the JSON) the correct title for the Jul 2021 – Aug 2023 Apple role — or was it a different title entirely?
3. Is "Technical Product Manager" (per the note filename), "Technical Business Analyst" (per the JSON), or "Technical Product Associate" (per the JD pasted inside the note, which you were prepping to match) the actual title you held at Bank of China from Sep 2023 – Oct 2024?
4. What are the exact start and end dates for your Huawei CBG role (Portfolio Solution Specialist / Portfolio Solution & Commercial Sales Specialist), and is it your current, still-active role? This is needed both to add the missing entry and to check whether it explains the Oct 2024 – Oct 2025 gap below.
5. Was there a 2-month overlap between Echoroaster (ending Oct 2019) and Apple (starting Aug 2019), or is one of those two dates imprecise?
6. Was there a 3-month overlap between Bank of China (ending Oct 2024) and the University of Exeter academic projects (starting Aug 2024) — were you studying part-time while employed full-time at the bank?
7. There is an apparent ~12-month gap in paid employment between Bank of China's end (Oct 2024) and the first Freelance entry (Oct 2025) — is this gap actually filled by the Huawei CBG role, by continued full-time study at Exeter, or something else not yet in the vault?
8. The "Freelance" entries from Oct 2025 through Apr 2026 currently read as 8 separate concurrent roles, several starting in the same month (Mar 2026 ×4, Feb 2026 ×2). Should these be consolidated into a single "Freelance AI Solutions Engineer" umbrella role with the 8 items presented as a project portfolio underneath, or were these genuinely sequential/concurrent paid freelance contracts?
9. One freelance entry ("claude-island") uses the title "Software Engineer" while every other concurrent freelance entry uses "AI Solutions Engineer" — is this intentional (a distinct engagement type) or should it be normalized to match the rest?
10. One freelance entry lists the company as "Freelance (Perfect Matching Agency)" while all others simply say "Freelance" — should the company field be standardized, and is "Perfect Matching Agency" a client name that should instead appear in the entry's context/description rather than the company field?
11. What are the actual University of Exeter programme dates (enrollment start, expected/actual completion) — does "Aug 2024 – Dec 2025" reflect the whole programme, or just the active window for these 5 specific projects?
12. Can you confirm via LinkedIn (once accessible) or an official document (offer letter, payslip, reference letter) the authoritative title and dates for each of the Apple, Bank of China, and Huawei roles, since the current notes for those three roles contain no self-declared title or dates at all?
