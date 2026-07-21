---
type: saa-note
domain: secure-architectures
services: [IAM, S3]
status: capture
date: 2026-07-21
tags: [saa-c03, policy-evaluation, guardrail]
---

# An applicable Explicit Deny overrides every Allow during AWS policy evaluation

## 論點(用自己的話,3-5 句)
- AWS evaluates all applicable identity and resource policies together. An applicable Explicit Deny makes the final result Deny even when another policy allows the action. Without an applicable Allow, the default result is Implicit Deny. Customers usually author the policies, while AWS enforces the evaluation.

## 考點 / Trap(exam 會怎樣考你)
- A broad Role Allow cannot bypass a matching Explicit Deny in a bucket policy or organisation guardrail.

## 何時用 / 何時不用(vs 替代方案)
- Use Explicit Deny for non-negotiable guardrails such as blocking insecure transport or sensitive prefixes. Prefer a narrow Allow when no hard boundary is required.

## 連結
- 來源 Question [[Explicit Deny blocks an otherwise allowed S3 request]]
