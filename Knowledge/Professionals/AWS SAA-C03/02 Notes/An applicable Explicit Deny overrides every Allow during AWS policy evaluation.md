---
type: saa-note
domain: secure-architectures
topics: [sec-01]
services: [IAM, S3, Organizations]
status: capture
date: 2026-07-21
tags: [saa-c03, policy-evaluation, guardrail]
---

# An applicable Explicit Deny overrides every Allow during AWS policy evaluation

## 論點(用自己的話,3-5 句)
- AWS evaluates all applicable identity and resource policies together. An applicable Explicit Deny makes the final result Deny even when another policy allows the action. Without an applicable Allow, the default result is Implicit Deny. Customers usually author the policies, while AWS enforces the evaluation. The checking order is fixed, not simultaneous: (1) an applicable Explicit Deny, if found, stops evaluation and denies immediately; (2) otherwise an applicable Allow permits; (3) otherwise Implicit Deny applies. An Allow is never "passed through" before the Deny check, it is skipped entirely once a Deny applies.

- A useful outcome model is `grant exists ∩ every applicable ceiling permits ∩ no Explicit Deny`. Identity-based and resource-based policies can supply grants. Permissions boundaries, session policies, SCPs, and RCPs restrict the maximum; they do not grant by themselves.

## 考點 / Trap(exam 會怎樣考你)
- A broad Role Allow cannot bypass a matching Explicit Deny in a bucket policy or organisation guardrail.
- A distractor may describe an Allow being evaluated first and only later blocked by Deny. The real order always checks Explicit Deny first.

## 何時用 / 何時不用(vs 替代方案)
- Use Explicit Deny for non-negotiable guardrails such as blocking insecure transport or sensitive prefixes. Prefer a narrow Allow when no hard boundary is required.
- A narrow Allow only limits what its own author grants; an Explicit Deny (especially an SCP) limits what anyone, including a future admin, could grant.

## 連結
- 相關概念 [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]]
- 來源 Question [[Explicit Deny blocks an otherwise allowed S3 request]], [[Explicit Deny is checked before any Allow, not evaluated after it]], [[Implicit Deny is the default when no applicable policy source grants an Allow]]

## Retention evidence
- 2026-07-26: correctly explained one fresh no-Allow case as Implicit Deny and retained `true ∩ true ∩ true` as the only Allow outcome. Full unaided policy reasoning remained partial, so this is not mastery.
