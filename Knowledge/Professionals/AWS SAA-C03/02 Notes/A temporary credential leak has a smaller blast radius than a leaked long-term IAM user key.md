---
type: saa-note
domain: secure-architectures
topics: [sec-01]
services: [IAM, STS]
status: capture
date: 2026-07-22
tags: [saa-c03, identity, least-privilege]
---

# A temporary credential leak has a smaller blast radius than a leaked long-term IAM user key

## 論點(用自己的話,3-5 句)
- If leaked temporary credentials expire on their own, the exposure window is bounded automatically with no manual action needed. A leaked long-term IAM user key stays valid indefinitely until someone manually deactivates or deletes it. A Role's attached permissions are also typically scoped narrower than an IAM user's accumulated policies, so even during the leak window the reachable actions are usually smaller too.

## 考點 / Trap(exam 會怎樣考你)
- "Reduce blast radius" or "least privilege" phrasing is pointing at Roles over long-term keys on both the time dimension and the scope dimension, not just one.

## 何時用 / 何時不用(vs 替代方案)
- Applies when comparing Role-based temporary credentials to IAM User access keys. Not applicable when comparing two long-term credentials to each other.

## 連結
- 相關概念 [[An EC2 workload should use an IAM Role to obtain temporary credentials]]
