---
type: saa-note
domain: secure-architectures
topics: [sec-01]
services: [EC2, IAM, STS, S3]
status: capture
date: 2026-07-24
tags: [saa-c03, principal, assumed-role, identity]
---

# The Principal for an EC2 workload request is its assumed-role session

## 論點(用自己的話,3-5 句)
- When an EC2 application uses AppRole temporary credentials, S3 resolves the Principal as that specific AppRole assumed-role session. The Human initiated the business action, but the Human, application process, and EC2 host are not automatically the AWS Principal. The session token and signed credential data let AWS establish the session identity and build request context for authorization.

## 考點 / Trap(exam 會怎樣考你)
- A persona in the scenario is not necessarily the AWS Principal. Follow the credentials used on the API request.

## 何時用 / 何時不用(vs 替代方案)
- Applies to a backend workload calling AWS with role credentials. Direct federated-user or IAM-user calls can have a different Principal.

## 連結
- 相關概念 [[An EC2 workload should use an IAM Role to obtain temporary credentials]], [[STS issues credentials, the AWS SDK signs requests, and S3 authenticates them]]
- 來源 Question [[Identify the Principal in an S3 request made by an EC2 application]]

## Retention evidence
- 2026-07-26: initial unaided reconstruction called the application request the Principal, and no later unaided Principal check passed. Remains capture, not mastery.
