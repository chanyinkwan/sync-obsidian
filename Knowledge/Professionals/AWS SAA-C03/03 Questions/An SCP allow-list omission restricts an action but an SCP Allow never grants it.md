---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-05]
services: [Organizations, IAM, S3]
result: wrong
date: 2026-07-24
tags: [saa-c03, question, scp, policy-evaluation]
---

# An SCP allow-list omission restricts an action but an SCP Allow never grants it

## 題目重點(改寫,不要整題貼上)
- Decide an S3 request when an SCP allow-list omits the action, then decide whether adding that action to the SCP is sufficient to grant it.

## 正解為何是對的
- Omission from an applicable SCP allow-list means the ceiling does not permit the action, so the request is denied. Adding SCP Allow only opens the ceiling; an identity-based or resource-based policy must still grant the action.

## 我為何錯 / 誘答選項分析
- Initially answered the SCP allow-list omission as Allow and thought an SCP Allow alone grants permission. This treated the SCP as a grant source rather than a maximum-permissions boundary.
- On 2026-07-26 the fresh allow-list scenario reached Denied but reasoned: `the result is Deny, since there are no recorded Allow under this account, and there are explict deny to every exists n`
- The identity policy did supply a grant, no Explicit Deny existed, and the failed term was the SCP ceiling. After correction, the inverse scenario was answered correctly as `false n true n true -> false`.

## 抽出的 Unknown
- Apply `grant exists ∩ all applicable ceilings permit ∩ no Explicit Deny` to both SCP allow-list and deny-list scenarios.

## 連結
- 對應 Knowledge Note [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]]
