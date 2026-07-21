---
type: saa-note
domain: secure-architectures
services: [EC2, IAM, STS, S3]
status: capture
date: 2026-07-21
tags: [saa-c03, identity, least-privilege]
---

# An EC2 workload should use an IAM Role to obtain temporary credentials

## 論點(用自己的話,3-5 句)
- An application on an EC2 instance assumes an IAM Role and receives rotating temporary credentials. It signs AWS API requests with those credentials, allowing AWS to resolve the Role principal and evaluate permissions. The Role controls permitted Actions, Resources, and Conditions, while the EC2 instance type controls CPU and memory. Do not hard-code long-term access keys or use root credentials.

## 考點 / Trap(exam 會怎樣考你)
- Prefer an attached least-privilege IAM Role over IAM User access keys stored in application code.

## 何時用 / 何時不用(vs 替代方案)
- Use for EC2 workloads calling AWS services. Do not use it to size compute resources or represent an end user's business permission.

## 連結
- 來源 Question [[Choose an IAM Role when an EC2 application needs S3 access]]
