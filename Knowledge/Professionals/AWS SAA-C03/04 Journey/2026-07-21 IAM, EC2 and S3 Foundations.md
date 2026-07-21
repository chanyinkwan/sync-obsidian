---
type: saa-session
date: 2026-07-21
duration: 45
topic: IAM, EC2 and S3 secure request flow
mode: review
tags: [saa-c03, secure-architectures]
---

# 2026-07-21 IAM, EC2 and S3 Foundations

## 本次目標(開始前寫)
- Build a zero-baseline model of who uses AWS and how a secure request reaches S3.

## 實際完成
- Connected End User, application-level authorisation, EC2 workload, IAM Role, temporary credentials, `s3:GetObject`, and S3 policy evaluation.
- Recalled the end-to-end flow without notes, with small terminology corrections.

## 數據
- 題數 / 正確率(if practice): 8 / 8, including 2 guessed-correct items retained for review
- 新增 Notes: [[An EC2 workload should use an IAM Role to obtain temporary credentials]], [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
- 新增 Questions: [[Choose an IAM Role when an EC2 application needs S3 access]], [[Explicit Deny blocks an otherwise allowed S3 request]]

## 冒出的 Unknowns
- How temporary credentials sign a request and resolve to a Role principal.
- When Explicit Deny is the right guardrail instead of a narrower Allow.
- How end-user identity relates to a backend workload identity.

## 反思
- 45 minutes felt comfortable and focus was sustainable.
- Best learning order: real-world use case, analogy, then MCQ or request-flow reconstruction.
- English exam terms need a Chinese explanation on first mention.

## 下一步(一個就好)
- Answer two fresh IAM and S3 scenario questions without notes and explain why the main distractor is wrong.
