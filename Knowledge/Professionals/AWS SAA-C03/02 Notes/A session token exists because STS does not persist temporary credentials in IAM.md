---
type: saa-note
domain: secure-architectures
topics: [sec-01]
services: [STS, IAM]
status: capture
date: 2026-07-22
tags: [saa-c03, sts, identity]
---

# A session token exists because STS does not persist temporary credentials in IAM

## 論點(用自己的話,3-5 句)
- STS issues temporary credentials at a volume AWS does not store in the IAM database, so there is nothing to look up when a request arrives. The session token itself is a signed, tamper-evident payload carrying which Role the principal is, the expiration, and any session policy. S3 (or any service) resolves the principal straight from the token rather than from a lookup. Temporary access keys are prefixed `ASIA...`, long-term IAM user keys `AKIA...`.

## 考點 / Trap(exam 會怎樣考你)
- A distractor may claim the token is a second verification layer against a compromised algorithm. The real reason is simpler: the identity has nowhere else to be stored.

## 何時用 / 何時不用(vs 替代方案)
- Applies to any STS-issued temporary credential (assumed Role, federated session). Not applicable to long-term IAM User keys, which have no session token because IAM does store them directly.

## 連結
- 相關概念 [[SigV4 signs each request using credentials that STS separately issues]]
- 來源 Question [[A session token exists because temporary credentials are never persisted in IAM]]
