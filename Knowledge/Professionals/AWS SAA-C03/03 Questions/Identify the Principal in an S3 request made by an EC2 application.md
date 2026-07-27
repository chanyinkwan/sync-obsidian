---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-01]
services: [EC2, IAM, STS, S3]
result: wrong
date: 2026-07-24
tags: [saa-c03, question, principal, assumed-role]
---

# Identify the Principal in an S3 request made by an EC2 application

## 題目重點(改寫,不要整題貼上)
- When an EC2 application uses AppRole temporary credentials to call S3, identify the Principal AWS authorizes.

## 正解為何是對的
- The Principal is the AppRole assumed-role session resolved from the temporary credentials. It is not the application, EC2 host, or Human by default.

## 我為何錯 / 誘答選項分析
- The Principal flow was unclear and the initial model mixed the Human, application, EC2 host, and IAM Role. The missing distinction was that AWS authorizes the assumed-role session represented by the signed temporary credentials.

## 抽出的 Unknown
- Reconstruct how the credential provider and session token let S3 resolve the assumed-role session Principal.

## 連結
- 對應 Knowledge Note [[The Principal for an EC2 workload request is its assumed-role session]]
