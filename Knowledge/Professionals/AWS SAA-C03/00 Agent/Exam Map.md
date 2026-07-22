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
| 1 | Design Secure Architectures | **30%** | Started 2026-07-21: IAM Role, temporary credentials, policy evaluation, Explicit Deny |
| 2 | Design Resilient Architectures | **26%** | Not started |
| 3 | Design High-Performing Architectures | **24%** | Not started |
| 4 | Design Cost-Optimized Architectures | **20%** | Not started |

Secure and Resilient together are 56% of the exam. Weight study time accordingly.

## Coverage detail

### 1. Design Secure Architectures (30%)
- Covered: the end user → application → IAM Role → temporary credentials → `s3:GetObject` → S3 policy evaluation request path, at a basic level. Explicit Deny overrides Allow; absent an Allow, Implicit Deny applies.
- Open: how temporary credentials sign a request and resolve to a Role principal; real guardrail use cases for Explicit Deny.
- Evidence: [[2026-07-21 IAM, EC2 and S3 Foundations]]

### 2. Design Resilient Architectures (26%)
- Not started.

### 3. Design High-Performing Architectures (24%)
- Not started.

### 4. Design Cost-Optimized Architectures (20%)
- Not started.

## Maintenance

Update the coverage column after each session, at the same time as the dashboard. Keep it to one line per domain in the table; detail goes in the section below it. This file is the answer to "am I ready for a domain that is 30% of the exam", so it must reflect evidence, not intentions.
