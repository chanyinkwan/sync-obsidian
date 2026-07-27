---
type: saa-note
domain: secure-architectures
topics: [sec-01]
services: [STS, IAM, S3]
status: capture
date: 2026-07-24
tags: [saa-c03, sts, sigv4, authentication]
---

# STS issues credentials, the AWS SDK signs requests, and S3 authenticates them

## 論點(用自己的話,3-5 句)
- A credential provider obtains the temporary triple from STS: access key ID, secret access key, and session token. The AWS SDK uses that triple to SigV4-sign an HTTPS request. S3 authenticates the signature and session, builds the request context, and then AWS authorizes the action. IAM supplies identity and policy configuration, but it does not sign or transport the request. Policy documents remain on AWS and are not carried inside the HTTPS request.

## 考點 / Trap(exam 會怎樣考你)
- Do not assign request signing to STS or authentication to the SDK. Separate credential issuance, client-side signing, service-side authentication, and AWS-side authorization.

## 何時用 / 何時不用(vs 替代方案)
- Use this path for AWS API calls made with temporary credentials. It is not the browser's application-level login flow for the Human.

## 連結
- 相關概念 [[SigV4 signs each request using credentials that STS separately issues]], [[The Principal for an EC2 workload request is its assumed-role session]]
- 來源 Question [[Separate STS credential issuance, SDK request signing, and S3 authentication]]

## Retention evidence
- 2026-07-26: component mapping was correct after correction, but initial and final unaided recall still assigned the wrong responsibilities and treated one credential component as authorization. Remains capture, not mastery.
