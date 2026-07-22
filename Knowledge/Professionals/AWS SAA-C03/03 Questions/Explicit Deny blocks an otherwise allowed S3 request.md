---
type: saa-question
source: Codex guided study
domain: secure-architectures
topics: [sec-01]
services: [IAM, S3]
result: guessed
date: 2026-07-21
tags: [saa-c03, question]
---

# Explicit Deny blocks an otherwise allowed S3 request

## 題目重點(改寫,不要整題貼上)
- A Role allows `s3:GetObject`, but an applicable bucket policy explicitly denies access to a sensitive prefix.

## 正解為何是對的
- AWS returns Deny because any applicable Explicit Deny overrides an Allow.

## 我為何錯 / 誘答選項分析
- "i dont understand in what case, the policy will setup explicit deny but theoriticaly, the answer should be B, since Explicit Deny are prioritised over IAM role"

## 抽出的 Unknown
- Real guardrail use cases for Explicit Deny and its relationship to Implicit Deny.

## 連結
- 對應 Knowledge Note [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
