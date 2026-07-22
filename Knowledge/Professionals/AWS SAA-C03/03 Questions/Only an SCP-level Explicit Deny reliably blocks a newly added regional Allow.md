---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-05]
services: [IAM, Organizations, EC2]
result: guessed
date: 2026-07-22
tags: [saa-c03, question]
---

# Only an SCP-level Explicit Deny reliably blocks a newly added regional Allow

## 題目重點(改寫,不要整題貼上)
- A team admin adds `Allow ec2:RunInstances` across all regions. Compare approach A (audit narrow Allows only) vs approach B (a top-level Explicit Deny on all non-eu-west-1 regions).

## 正解為何是對的
- Under A the new Allow succeeds because IAM permissions are additive, and the audit is invalidated the instant anyone adds a policy. Under B the Deny is evaluated first, so the Allow is never reached.

## 我為何錯 / 誘答選項分析
- "i am not very sure, this is a very interesting question, I would say the blast radius is different (? pure guess) i think using a explicit deny could ensure that there is no one single admin account could make a regional decision? not very sure"

## 抽出的 Unknown
- The mechanism connecting Explicit Deny to why it survives future policy additions, not just the intuition that it does.

## 連結
- 對應 Knowledge Note [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]]
