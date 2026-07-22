---
type: saa-question
source: Guided study (retrieval warm-up)
domain: secure-architectures
topics: [sec-01]
services: [EC2, IAM, STS, S3]
result: wrong
date: 2026-07-22
tags: [saa-c03, question]
---

# Authorization happens on AWS's side, not inside the requesting application

## 題目重點(改寫,不要整題貼上)
- Reconstruct without notes why an EC2 application should use an IAM Role for `s3:GetObject`, and what is wrong with hardcoded long-term access keys.

## 正解為何是對的
- The application only signs the request. AWS resolves the Role principal from the credentials and its own IAM policy evaluation engine decides Allow or Deny. Hardcoded long-term keys are wrong because they do not auto-expire and must be manually revoked once leaked, unlike temporary credentials.

## 我為何錯 / 誘答選項分析
- "alice request -> application layer verify permission -> application sign off temporary credentials -> AWS S3 receive request -> s3 get object -> read IAM role -> determine permission -> make sure not violating with explicit deny -> allow"
- on the distractor: "not sure what is 機制 here means, but as per my understanding, it should use the IAM role to identify whether to allow this request or not, hard coding would lead to not able to update credentials? (not sure about this)"

## 抽出的 Unknown
- Where authorization actually happens (app side vs AWS side), and the real security reason hardcoding is wrong (auto-expire vs manual revoke), not just update convenience.

## 連結
- 對應 Knowledge Note [[An EC2 workload should use an IAM Role to obtain temporary credentials]]
