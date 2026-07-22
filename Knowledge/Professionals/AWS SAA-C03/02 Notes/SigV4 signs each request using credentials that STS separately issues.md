---
type: saa-note
domain: secure-architectures
topics: [sec-01]
services: [STS]
status: capture
date: 2026-07-22
tags: [saa-c03, sts, signing]
---

# SigV4 signs each request using credentials that STS separately issues

## 論點(用自己的話,3-5 句)
- STS and SigV4 (Signature Version 4) are sequential, not alternatives. STS issues the temporary credential once per session; SigV4, built on HMAC-SHA256, then signs every individual API request made with that credential. A publicly known, well-tested signing algorithm is the stronger design (Kerckhoffs's principle): secrecy lives in the key, not the formula, so a shared algorithm is not a fragility.

## 考點 / Trap(exam 會怎樣考你)
- A distractor implying "the same algorithm signs and verifies, so it is fragile" is testing Kerckhoffs's principle in reverse. A public algorithm with a secret key is the correct, standard design.

## 何時用 / 何時不用(vs 替代方案)
- Applies to every signed AWS API request, whether the credential behind it is temporary or long-term.

## 連結
- 相關概念 [[A session token exists because STS does not persist temporary credentials in IAM]]
