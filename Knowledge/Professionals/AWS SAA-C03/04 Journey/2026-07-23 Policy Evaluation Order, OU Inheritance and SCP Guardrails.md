---
type: saa-session
date: 2026-07-23
duration: 30
topic: Policy evaluation order, OU inheritance, and SCP guardrails
mode: review
tags: [saa-c03, secure-architectures, policy-evaluation, scp]
---

# 2026-07-23 Policy Evaluation Order, OU Inheritance and SCP Guardrails

## 本次目標(開始前寫)
- Reconstruct the AWS policy evaluation order accurately, then apply it to a fresh SCP-versus-identity-policy scenario.

## 實際完成
- Retrieval warm-up was not a pass: Explicit Deny came first, but Implicit Deny was treated as a later conflicting policy check and the Allow search was narrowed to the IAM Role.
- Corrected the flow: applicable Explicit Deny means Deny; otherwise an applicable Allow across all policy sources means Allow; otherwise Implicit Deny is the default.
- Learned OU means Organizational Unit, how an OU-level SCP constrains member accounts, and why an account-level Allow cannot override it.
- Correctly applied an OU-level Explicit Deny to Account C and D, correctly resolved an Implicit Deny scenario, and selected an OU-level SCP over per-role Denies to protect CloudTrail across future roles.
- Closing unaided recall recovered the core order and SCP override, but still narrowed the Allow search to the IAM Role rather than all applicable policy sources.

## 數據
- 題數 / 正確率(if practice): warm-up wrong; 4 fresh scenario outcomes correct, with one guardrail mechanism requiring a prompted rephrase; closing recall partial
- 新增 Notes: 0
- 擴充 Notes: [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]], [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]]
- 新增 Questions: [[Implicit Deny is the default when no applicable policy source grants an Allow]]

## 冒出的 Unknowns
- Reconstruct that AWS searches for an Allow across all applicable policy sources, not only the IAM Role.
- Make the full flow stable under unaided recall rather than relying on prompted reconstruction.
- The management-account exception to SCP scope was taught but not tested, so it remains in the Parking Lot.

## 反思
1. **Pace.** 今日只有 30 minutes because of work. This is a one-off constraint, and the regular session should be longer next time. 不修改 standard duration 或 capacity.
2. **Teaching fit.** Flow reconstruction 最有幫助，因為 it smooths the logic. The weakness is unaided memorisation of the full flow, so future sessions should repeat reconstruction until it is stable.
3. **Protocol rule.** Even if the session is started in pure English, always run it with English AWS terms first and Traditional Chinese clarification/interface. 不使用簡體中文. [[Study Session Protocol]] updated accordingly.

## 下一步(一個就好)
- Reconstruct the full policy evaluation flow with 'all applicable policy sources' rather than only IAM Role, then apply it to one fresh multi-policy scenario without prompts.
