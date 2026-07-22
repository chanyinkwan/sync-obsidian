---
type: saa-question
source: Codex guided study
domain: secure-architectures
topics: [sec-01]
services: [EC2, IAM, S3, STS]
result: guessed
date: 2026-07-21
tags: [saa-c03, question]
---

# Choose an IAM Role when an EC2 application needs S3 access

## 題目重點(改寫,不要整題貼上)
- An EC2 application needs read access to one specific S3 bucket without stored long-term credentials.

## 正解為何是對的
- Attach a least-privilege IAM Role so the workload receives rotating temporary credentials.

## 我為何錯 / 誘答選項分析
- "i dont have a clear understanding on what is S3 bucket and IAM Role and AWS root auth, but since we are testing safety topics, then I will say my answer for this question is B"

## 抽出的 Unknown
- How an EC2 workload assumes a Role and signs an S3 request.

## 連結
- 對應 Knowledge Note [[An EC2 workload should use an IAM Role to obtain temporary credentials]]
