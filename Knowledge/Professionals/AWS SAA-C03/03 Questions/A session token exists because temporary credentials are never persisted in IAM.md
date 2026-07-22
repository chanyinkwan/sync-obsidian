---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-01]
services: [STS, IAM]
result: wrong
date: 2026-07-22
tags: [saa-c03, question]
---

# A session token exists because temporary credentials are never persisted in IAM

## 題目重點(改寫,不要整題貼上)
- Why is a session token needed rather than just an access key and secret key.

## 正解為何是對的
- STS issues temporary credentials at a volume too high to store in IAM, so the token itself must carry the signed Role identity and expiry. S3 resolves the principal from the token rather than from a lookup.

## 我為何錯 / 誘答選項分析
- "so the problem of using the same algorithm in sending credentials and verifying credentials would increase risk since what-if this algorithm is wrong or any part of the progress tied under this algorithm fail, the whole credential verification process become very fragile, is that correct? so to answer your question, a session token would be another verification to ensure that the algorithm of giving credentials and verifying credentials is not the same session?"
- also asked in the same exchange: whether STS is an AWS service (yes), whether SigV4 is an alternative to STS (no, sequential not alternative), and stated a belief that S3 runs on the EC2 instance (corrected: S3 is a separate storage service reached over the network).

## 抽出的 Unknown
- The role of the session token (identity and expiry carrier, not a second verification layer), and that a shared public signing algorithm (Kerckhoffs's principle) is the stronger design, not a fragility.

## 連結
- 對應 Knowledge Note [[A session token exists because STS does not persist temporary credentials in IAM]]
