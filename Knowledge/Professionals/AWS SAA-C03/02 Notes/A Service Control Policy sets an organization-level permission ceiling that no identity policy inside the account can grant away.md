---
type: saa-note
domain: secure-architectures
topics: [sec-05]
services: [Organizations, IAM]
status: capture
date: 2026-07-22
tags: [saa-c03, guardrail, scp]
---

# A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away

## 論點(用自己的話,3-5 句)
- An SCP attached in AWS Organizations does not itself grant any permission; it only sets the maximum an account, or anything inside it, is allowed to reach. No identity policy, however broad (even `AdministratorAccess`), can exceed or remove an SCP boundary from inside the account. SCP is the AWS implementation of the general concept of a guardrail: a top-down limit the lower layer cannot circumvent.
- In deny-list mode, an action remains within the ceiling unless an applicable Deny removes it. In allow-list mode, every required parent-level SCP must permit the action; omission restricts it. In both modes, SCP and RCP are ceilings, never grant sources.

## 考點 / Trap(exam 會怎樣考你)
- A question describing a new Allow added by "an admin" that must stay blocked "no matter what future policy gets added" is pointing at SCP or guardrail, not at auditing individual identity policies one by one.

## 何時用 / 何時不用(vs 替代方案)
- An SCP Allow does not authorize an API call. A separate identity-based or resource-based Allow must grant it.
- Use an SCP when the requirement is organization-wide and must survive any future account-level policy change. A narrow identity-policy Allow only controls what that policy's own author grants.

## 連結
- 相關概念 [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
- 來源 Question [[Only an SCP-level Explicit Deny reliably blocks a newly added regional Allow]], [[An SCP allow-list omission restricts an action but an SCP Allow never grants it]]

## Retention evidence
- 2026-07-26: correctly calculated the inverse case as `false ∩ true ∩ true = false`, but a fresh allow-list omission scenario still confused a present grant and failed ceiling with no grant and Explicit Deny. Remains capture, not mastery.
