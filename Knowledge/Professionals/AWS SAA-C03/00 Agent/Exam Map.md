---
type: saa-reference
updated: 2026-07-26
verified: 2026-07-21
source: AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf via NotebookLM
tags:
  - saa-c03
  - reference
---
# Exam Map

Read this at the start of every session to brief the map before choosing scope. Weights verified 2026-07-21 against the official exam guide through NotebookLM, with citation.

## Logistics

- Exam: AWS Certified Solutions Architect - Associate (SAA-C03)
- Date: **2026-08-23, 12:00 BST**, **170 minutes** (base 140 + **granted ESL +30**)
- Pacing: 65 questions over 170 minutes ≈ **2 min 37 sec per question** on average (was ≈ 2 min 9 sec at 140). The **90-second flag-and-move cap still holds** per question; the extra 30 minutes is review slack for flagged questions, not per-question luxury, so the first pass stays fast.
- Booking task: [[SA 03 - Book AWS SAA Exam]]
- Study task: [[SA 04 - AWS SAA Study & Exam]], 60 minutes on weekdays
- Gate: this is Gate 2 of [[SA Presales Transition]]

## Domains and weights

| # | Domain | Weight | Coverage so far |
|---|---|---|---|
| 1 | Design Secure Architectures | **30%** | 5 sessions. Human-to-S3 request path, assumed-role Principal, STS credentials, SigV4, authentication vs authorization, grant sources, policy ceilings, Explicit Deny, SCP modes. Retention remains partial |
| 2 | Design Resilient Architectures | **26%** | Not started |
| 3 | Design High-Performing Architectures | **24%** | Not started |
| 4 | Design Cost-Optimized Architectures | **20%** | Not started |

Secure and Resilient together are 56% of the exam. Weight study time accordingly.

## Coverage targets and state model

Coverage is tracked with the canonical topic state ladder **Untouched < Touched < Proven** (plus contested) defined once in [[Agent Instructions]] — not restated here. Each topic is measured against **its own target**, not a blanket Proven, per [[Study Triage]]:

- **Core → Proven** (full four-part mastery).
- **Tail → Functional**: recognise and discriminate. Touched is acceptable; Proven is not required.
- **Sacrifice → skip** before the exam.

So a domain can be "ready" without every topic Proven. Read the coverage detail below as evidence against these targets.

## Readiness gate

Two unseen timed mocks **≥80% overall** (a self-imposed buffer above the official pass line of roughly 720/1000 ≈ 72%), with a **70–75% per-domain floor**. Fallback: **76% overall with every domain floor met still counts as GO**. The go/no-go call is weekly-review territory.

## Coverage detail

### 1. Design Secure Architectures (30%)
- Covered: Human/customer → browser/application → AWS SDK method call → credential provider → STS temporary credential triple → SigV4-signed HTTPS request → S3 authentication → assumed-role session Principal → request context → applicable policies → Allow or Deny. STS issues credentials, the AWS SDK signs, and S3 authenticates. Policies remain on AWS and do not travel in the request.
- Covered: identity-based and resource-based policies can grant. Permissions boundaries, session policies, SCPs, and RCPs are ceilings. SCP deny-list and allow-list modes were introduced; an SCP Allow never grants. Outcome model: `grant exists ∩ every applicable ceiling permits ∩ no Explicit Deny`.
- Retention status: on 2026-07-26, STS → AWS SDK → S3 was mapped correctly after correction, authentication was correctly separated from authorization in a no-Allow scenario, and the inverse SCP case was correctly calculated as `false ∩ true ∩ true = false`. However, initial unaided reconstruction again assigned signing to STS and Principal to the application request, final recall mislabelled a credential component as authorization, and the fresh SCP allow-list reasoning confused a failed ceiling with no grant and Explicit Deny. The formula is the strongest retained tool, but none of this is mastery evidence.
- Open: reconstruct the complete Human → S3 request path and explain why temporary credentials authenticate while policies authorize, without prompts. Not yet touched: encryption at rest and in transit, KMS, VPC network security, Security Groups and NACLs.
- Evidence: [[2026-07-21 IAM, EC2 and S3 Foundations]], [[2026-07-22 Temporary Credentials, Signing and Explicit Deny Guardrails]], [[2026-07-23 Policy Evaluation Order, OU Inheritance and SCP Guardrails]], [[2026-07-24 AWS Request Path, Principal and Policy Ceilings]], [[2026-07-26 Request Signing, Authentication, and SCP Allow-List Recall]]

### 2. Design Resilient Architectures (26%)
- Not started.

### 3. Design High-Performing Architectures (24%)
- Not started.

### 4. Design Cost-Optimized Architectures (20%)
- Not started.

## Maintenance

Update the coverage column after each session, at the same time as the dashboard. Record Touched / Proven transitions, not a binary covered/not, and read each topic against its [[Study Triage]] target. Keep it to one line per domain in the table; detail goes in the section below it. This file is the answer to "am I ready for a domain that is 30% of the exam", so it must reflect evidence, not intentions.
