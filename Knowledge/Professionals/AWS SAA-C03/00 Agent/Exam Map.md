---
type: saa-reference
updated: 2026-07-21
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
- Date: **2026-08-23, 12:00 BST**, 140 minutes
- Booking task: [[SA 03 - Book AWS SAA Exam]]
- Study task: [[SA 04 - AWS SAA Study & Exam]], 60 minutes on weekdays
- Gate: this is Gate 2 of [[SA Presales Transition]]

## Domains and weights

| # | Domain | Weight | Coverage so far |
|---|---|---|---|
| 1 | Design Secure Architectures | **30%** | 2 sessions. IAM Role, STS temporary credentials, SigV4 signing, policy evaluation order, Explicit Deny, SCP guardrails |
| 2 | Design Resilient Architectures | **26%** | Not started |
| 3 | Design High-Performing Architectures | **24%** | Not started |
| 4 | Design Cost-Optimized Architectures | **20%** | Not started |

Secure and Resilient together are 56% of the exam. Weight study time accordingly.

## Coverage detail

### 1. Design Secure Architectures (30%)
- Covered: the end user → application → IAM Role → temporary credentials → `s3:GetObject` → S3 policy evaluation request path. STS issues the temporary credential triple (access key, secret key, session token); the session token self-carries the Role principal and expiry because temporary credentials are not persisted in IAM. SigV4 signs each request, separate from and sequential to STS. IAM permissions are additive. Explicit Deny overrides Allow and is evaluated first; absent an Allow, Implicit Deny applies. SCP sets a permission ceiling above the account and cannot be bypassed from inside it, which is how a guardrail is implemented.
- Retention status: Explicit Deny as a design choice is the best-retained concept. Weak on unaided recall: the policy evaluation order (mis-sequenced under test, then dropped entirely), the three credential components, and the exact expansions of STS and SCP.
- Open: how an end-user identity relates to a backend workload identity across architectures. Not yet touched: encryption at rest and in transit, KMS, VPC network security, Security Groups and NACLs.
- Evidence: [[2026-07-21 IAM, EC2 and S3 Foundations]], 2026-07-22 session on temporary credentials and Explicit Deny guardrails

### 2. Design Resilient Architectures (26%)
- Not started.

### 3. Design High-Performing Architectures (24%)
- Not started.

### 4. Design Cost-Optimized Architectures (20%)
- Not started.

## Maintenance

Update the coverage column after each session, at the same time as the dashboard. Keep it to one line per domain in the table; detail goes in the section below it. This file is the answer to "am I ready for a domain that is 30% of the exam", so it must reflect evidence, not intentions.
