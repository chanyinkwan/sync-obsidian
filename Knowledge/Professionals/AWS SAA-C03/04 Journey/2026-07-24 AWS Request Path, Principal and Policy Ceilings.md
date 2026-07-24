---
type: saa-session
date: 2026-07-24
duration: 60
topic: AWS request path, assumed-role Principal, and policy ceilings
mode: review
tags: [saa-c03, secure-architectures, sts, sigv4, policy-evaluation, scp]
---

# 2026-07-24 AWS Request Path, Principal and Policy Ceilings

## 本次目標(開始前寫)
- Reconstruct the full AWS policy evaluation flow using all applicable sources and apply it to a fresh scenario.

## 實際完成
- Retrieval warm-up was partial, not a pass: the answer again narrowed authorization, mis-sequenced elements, and did not reconstruct all applicable policy sources.
- Expanded to the Human POV path: Human/customer → browser/application → AWS SDK method call → credential provider → STS temporary credential triple → SigV4-signed HTTPS request → S3 authentication → assumed-role session Principal → request context → applicable policies → Allow or Deny. A Human-POV architecture map was designed to support this understanding.
- Corrected service responsibilities. STS issues temporary credentials, the AWS SDK signs the HTTPS request with SigV4, and S3 authenticates it before authorization. Policies stay on AWS and do not travel inside the request.
- Correctly resolved an OU SCP Explicit Deny over an identity Allow. Final recall expressed Allow as `grant exists ∩ every applicable ceiling permits ∩ no Explicit Deny`.
- SCP deny-list and allow-list modes were introduced. SCP and RCP are ceilings, never grants. Initial answers to an SCP allow-list omission and to whether SCP Allow alone grants permission were wrong, so this remains unmastered.

## 數據
- 題數 / 正確率(if practice): warm-up partial; 3 high-value retrieval failures logged; corrected OU SCP Explicit Deny scenario; closing formulation correct only after layered correction
- 新增 Notes: [[STS issues credentials, the AWS SDK signs requests, and S3 authenticates them]], [[The Principal for an EC2 workload request is its assumed-role session]]
- 擴充 Notes: [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]], [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
- 新增 Questions: [[Separate STS credential issuance, SDK request signing, and S3 authentication]], [[Identify the Principal in an S3 request made by an EC2 application]], [[An SCP allow-list omission restricts an action but an SCP Allow never grants it]]
- 擴充 Questions: [[Implicit Deny is the default when no applicable policy source grants an Allow]]

## 冒出的 Unknowns
- Reconstruct the complete Human → S3 path, including the temporary credential triple, HTTPS signing, authentication, Principal, request context, and authorization.
- Identify the Principal as the AppRole assumed-role session rather than the Human, application, or EC2 host by default.
- Apply grants, permission ceilings, and Explicit Deny together in both SCP deny-list and allow-list scenarios without treating policies as sequential checkpoints.

## 反思
1. **Pace.** There was a distraction and interruption in the middle. The standard 45-minute active-study block still feels right because catching up is important; this session used 60 active minutes.
2. **Teaching fit.** Question-and-correction works best. Large responses that answer many bundled questions are hard to catch up with and increase distraction.
3. **Protocol rule.** Approved [[Study Session Protocol]] amendment: Diagnostic layering 診斷式分層. Derive and correct the shared foundational misunderstanding first, ask one validation question, and only expand to the next layer after it passes. Keep upper-layer questions queued and always include the next question.
4. **Tooling.** NotebookLM health reported `authenticated=false`, so source-grounded verification was unavailable. Study continued without troubleshooting and the failure was queued in [[Fix List]].

## 下一步(一個就好)
- Reconstruct the complete Human → S3 request path and apply `grant ∩ ceilings permit ∩ no Explicit Deny` to one fresh SCP allow-list scenario without prompts.
