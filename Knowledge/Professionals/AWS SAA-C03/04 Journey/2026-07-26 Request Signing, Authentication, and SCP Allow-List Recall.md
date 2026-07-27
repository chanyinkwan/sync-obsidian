---
type: saa-session
date: 2026-07-26
duration: 15
topic: Request signing, authentication, authorization, and SCP allow-list recall
mode: review
tags: [saa-c03, secure-architectures, sts, sigv4, authentication, authorization, scp]
---

# 2026-07-26 Request Signing, Authentication, and SCP Allow-List Recall

## 本次目標(開始前寫)
- Reconstruct the complete Human → S3 request path and policy evaluation without prompts.

## 實際完成
- Session was reframed to 30 minutes, with approximately 15 minutes of active retrieval and correction. No Resilient Architectures material was started.
- Initial unaided reconstruction assigned validation and request transport to IAM, signing to STS, and Principal to the application request. After correction, STS → AWS SDK → S3 responsibility mapping was answered correctly.
- Correctly separated successful SigV4 authentication from failed authorization when no applicable Allow exists.
- In a fresh SCP allow-list scenario, the Denied outcome was correct but the reasoning confused a present identity grant and a missing ceiling permission with no grant and Explicit Deny.
- The inverse scenario was correctly reduced to `false ∩ true ∩ true = false`. Final unaided recall retained the decision formula but again mislabelled the credential triple, so this is partial retention, not mastery.

## 數據
- 題數 / 正確率(if practice): 4 retrieval checks; 2 correct after correction, 1 correct outcome with wrong reasoning, 1 partial final recall
- 新增 Notes: 0
- 新增 Questions: 0
- 擴充 Notes: [[STS issues credentials, the AWS SDK signs requests, and S3 authenticates them]], [[The Principal for an EC2 workload request is its assumed-role session]], [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]], [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]]
- 擴充 Questions: [[Separate STS credential issuance, SDK request signing, and S3 authentication]], [[Authorization happens on AWS's side, not inside the requesting application]], [[Implicit Deny is the default when no applicable policy source grants an Allow]], [[An SCP allow-list omission restricts an action but an SCP Allow never grants it]]

## 冒出的 Unknowns
- Complete Human → S3 request path still cannot be reconstructed accurately without prompts.
- The temporary credential triple still gets mislabelled as containing authorization.
- SCP allow-list omission can be calculated with the formula, but fresh-scenario reasoning is not yet stable.

## 反思
1. **Pace.** 30 minutes was too short for the full daily target, but suitable as the first of two sessions today.
2. **Teaching fit.** `grant exists ∩ every applicable ceiling permits ∩ no Explicit Deny` was the most effective method.
3. **Protocol rule.** Keep [[Study Session Protocol]] unchanged until the new learning method is tested in the later session.

## 下一步(一個就好)
- Reconstruct the complete Human → S3 request path and explain why temporary credentials authenticate while policies authorize, without prompts.
