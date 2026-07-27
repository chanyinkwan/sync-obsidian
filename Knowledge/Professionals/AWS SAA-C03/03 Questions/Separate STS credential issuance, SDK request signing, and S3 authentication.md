---
type: saa-question
source: Guided study
domain: secure-architectures
topics: [sec-01]
services: [STS, IAM, S3]
result: wrong
date: 2026-07-24
tags: [saa-c03, question, sts, sigv4, authentication]
---

# Separate STS credential issuance, SDK request signing, and S3 authentication

## 題目重點(改寫,不要整題貼上)
- In the Human → S3 request path, identify which component issues credentials, signs the request, and authenticates it.

## 正解為何是對的
- STS issues the temporary credential triple. The AWS SDK uses it to SigV4-sign an HTTPS request. S3 receives the request and authenticates the signature and session before authorization.

## 我為何錯 / 誘答選項分析
- Initial unaided recall said the SDK verifies with IAM and STS signs with SigV4. This reversed issuance, signing, and authentication responsibilities. After correction, the answer was STS → AWS SDK → S3.
- 2026-07-26 initial unaided reconstruction: `human send request -> request received by EC2 application -> EC2 send validation request to IAM -> IAM validate the request and send request to STS for signature -> STS use SigV4 to sign temporary credentials for this request -> IAM send the signed request to S3 -> S3 run through the policy evaluation -> output allow or deny-> return the output to S3 -> return the output to EC2 -> return to human; STS obtains the temporary credentials and creates the sigv4, the application request is the principal, the applicable policies are evaluated after the sigv4 is signed`
- After correction, the component mapping was right: `1. STS issues temporary credentials, 2. AWS SDK creates the sigv4 signed request, 3.s3 Authenticates he request and performs authorization evaluation`
- The follow-up still mixed signing with permission validation: `STS produces a set of three components, access key ID + Secret Access Key with the session token; the AWS SDK knows about the request context that STS does not, which is necessary for validating the request matching with its permission`

## 抽出的 Unknown
- Retain the end-to-end responsibility boundary among IAM, STS, the credential provider, the AWS SDK, and S3 without prompts.

## 連結
- 對應 Knowledge Note [[STS issues credentials, the AWS SDK signs requests, and S3 authenticates them]]
