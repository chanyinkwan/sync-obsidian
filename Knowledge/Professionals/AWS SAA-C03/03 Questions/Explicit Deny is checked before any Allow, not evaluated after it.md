---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-01]
services: [IAM, Organizations]
result: wrong
date: 2026-07-22
tags: [saa-c03, question]
---

# Explicit Deny is checked before any Allow, not evaluated after it

## 題目重點(改寫,不要整題貼上)
- An SCP denies `s3:DeleteObject`. An IAM user in that account has `AdministratorAccess` (`Allow *:*`). Can he delete? Walk the evaluation logic.

## 正解為何是對的
- AWS collects all applicable policies and checks Explicit Deny first. The `AdministratorAccess` Allow is never reached once a Deny applies, so the delete is denied.

## 我為何錯 / 誘答選項分析
- "from the first layer, it's account's allow let it pass throught the first layer, to reach the screening explicite deny layer, and he was stop there since there is a hard explicit deny so he failed"
- reached the right conclusion (denied) but described Allow being evaluated first and only later blocked, when Explicit Deny is actually checked first.

## 抽出的 Unknown
- The correct conclusion was reached via a wrong mechanism. Correct sequence: Explicit Deny checked first, always, before any Allow is even considered.

## 連結
- 對應 Knowledge Note [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
