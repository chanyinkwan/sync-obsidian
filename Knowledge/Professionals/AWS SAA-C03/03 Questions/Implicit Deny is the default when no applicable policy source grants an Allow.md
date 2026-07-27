---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-01]
services: [IAM, Organizations]
result: wrong
date: 2026-07-23
tags: [saa-c03, question, policy-evaluation]
---

# Implicit Deny is the default when no applicable policy source grants an Allow

## 題目重點(改寫,不要整題貼上)
- Without notes, reconstruct the decision flow from Explicit Deny through Allow to Implicit Deny, then explain which policy sources AWS considers.

## 正解為何是對的
- AWS first checks all applicable policy sources for an Explicit Deny. If none applies, any applicable Allow permits the request; if no applicable Allow exists, the default outcome is Implicit Deny.

## 我為何錯 / 誘答選項分析
- 'first the AWS layer will review whether the request is violating the explicit deny, if not then it will review the IAM role to see whether its aligning with what it request, then check whether there implicit deny that violates with the request if not then Allow'
- At closing recall: 'So when AWS received the request, it checks whether there are explicit deny if there are no explicit deny violating with the request then it checks whether there are allow in the IAM role that fulfill the request -> if yes Allow if no -> implicit deny; OU level SCP are reliable guardrail because explicit deny in a sandbox prioritise explict deny which overrides account Allow'
- The core order was corrected, but both reconstructions narrowed the Allow search to the IAM Role. The initial answer also treated Implicit Deny as another policy that can conflict with a request instead of the default result when no Allow applies.
- On 2026-07-24 the warm-up was again partial: Implicit Deny was checked first and policies were treated as sequential checks. The final `grant ∩ ceilings permit ∩ no Explicit Deny` formulation came only after layered correction, so this is repeated failure evidence, not mastery.
- On 2026-07-26 the no-Allow scenario was answered correctly: `the result is deny, because of the aws policy when no Allow and no explicit deny the result will be implicit deny; authentication means this identity of this request owner is autheticated, but this doent mean the action itself is authorized`
- This is one successful fresh check, but it does not overcome the same-session failures in the full request-path and credential recall.

## 抽出的 Unknown
- [[Active Unknowns]]: reconstruct the flow using all applicable grant sources and permission ceilings, then retain and apply it without prompts.

## 連結
- 對應 Knowledge Note [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
