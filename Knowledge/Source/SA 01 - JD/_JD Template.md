---
type: template
---

# JD Capture Schema

This is the contract every JD note in this folder follows. You never fill this in by hand — you paste the raw JD and I extract it.

```yaml
---
type: reference
tags:
  - reference
  - sa-requisition
company:        # e.g. AWS
title:          # verbatim title from the posting
seniority:      # junior | mid | senior | principal | unclear
location:       # city or "Remote"
work_model:     # remote | hybrid | onsite | unclear
domain:         # see "Domain vocabulary" below
industry:       # the customer vertical they sell INTO, if stated
keywords:       # normalised tools/tech, lowercase — this drives the heatmap
  - terraform
  - kubernetes
responsibilities:   # normalised verbs — what the SA actually DOES all day
  - discovery-calls
  - demo-delivery
  - poc-scoping
certs:          # certifications named as required or preferred
  - aws-saa
must_haves:     # hard requirements, verbatim-ish
nice_to_haves:
moat_hits:      # MY INFERENCE: things this JD wants that you already have
gap_hits:       # MY INFERENCE: things this JD wants that you don't yet have
comp:           # if stated
url:
posted:         # date on the listing
captured:       # date you pasted it
source:         # LinkedIn | company site | ...
recruiter:          # name of the job poster / hiring contact, if the posting names one — else leave blank
recruiter_title:    # their role, e.g. "Talent Acquisition Partner at Siemens"
recruiter_linkedin: # full URL to their LinkedIn profile — ONLY if it appears in the source. Never guess or construct one.
---
```

## Domain vocabulary — FROZEN 2026-07-27

The single biggest failure mode for this corpus is a premature enum: if I invent ten domain labels today and the real market clusters differently, the tally at JD 50 is garbage and Gate 1 rests on a miscount.

So the first batch of JDs was labelled freely. On **2026-07-27**, before extracting JDs 07 and 09–50, the vocabulary was frozen to the eleven clusters below and JDs 01–06 and 08 were retro-normalised onto it. Everything from here on uses this list and nothing else.

| label | means |
|---|---|
| `cloud-infra` | hyperscaler / cloud platform / infrastructure & migration |
| `ai-ml-platform` | AI/ML/GenAI/agentic products and platforms |
| `data-analytics` | data platform, BI, analytics, data engineering products |
| `fintech-payments` | banking software, payments, insurance tech |
| `telco-networking` | telecom, 5G, OSS/BSS, network infrastructure |
| `security-compliance` | cybersecurity, IAM, GRC products |
| `enterprise-saas` | HCM / ERP / CRM / ITSM / horizontal business SaaS |
| `devtools-web-infra` | developer tools, web infra, CI/CD, observability, APIs |
| `industrial-energy-ot` | energy, grid, manufacturing, OT/IIoT, engineering |
| `retail-commerce` | retail, e-commerce, supply chain, martech |
| `consulting-advisory` | vendor-neutral consultancies / SI advisory roles |

When a JD straddles two, pick the one the *product being sold* belongs to and note the ambiguity in Signal notes.

Retro-normalisation applied: `energy-grid-software`→`industrial-energy-ot`, `ai-solution-design-marketing`→`ai-ml-platform`, `agentic-web-infrastructure-presales`→`devtools-web-infra`, `strategic-account-advisory`→`enterprise-saas`, `core-banking-software`→`fintech-payments`, `telecom-cloud-transformation`→`telco-networking`, `ai-saas-presales`→`ai-ml-platform`.

## `moat_hits` / `gap_hits` — read these skeptically

These two fields are my judgment, not the JD's words. I infer them by diffing the posting against your background (portfolio solution + commercial sales, enterprise tech/telecom, key-account cross-functional governance). I will get some wrong. They exist to give SA 02 a running head start, not to make the call for you — override them freely.

## Recruiter fields

LinkedIn postings often name a "Job poster" — that person is the warm-intro surface for SA 12 (First 5 Applications Out), which is why we capture them here instead of leaving them buried in the raw JD text.

`recruiter_linkedin` must be copied verbatim from the source, never fabricated. A wrong profile URL means messaging a stranger — that's not a small mistake, it's the difference between a warm intro and cold-messaging someone who has nothing to do with the role.

Many postings name no one, or name someone without a linked profile. A blank field is the correct, honest answer — do not guess a name into `recruiter` or construct a plausible-looking URL into `recruiter_linkedin` just to fill the field.
