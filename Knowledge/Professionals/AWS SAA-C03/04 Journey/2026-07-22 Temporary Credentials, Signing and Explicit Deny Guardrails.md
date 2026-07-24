---
type: saa-session
date: 2026-07-22
duration: 60
topic: Temporary credentials, request signing, and Explicit Deny as guardrail
mode: review
tags: [saa-c03, secure-architectures, sts, policy-evaluation]
---

# 2026-07-22 Temporary Credentials, Signing and Explicit Deny Guardrails

## 本次目標(開始前寫)
- Close [[Active Unknowns]] #1 and #2 from 2026-07-21: how temporary credentials sign a request and resolve to an IAM Role principal, and when Explicit Deny is the right guardrail instead of a narrower Allow.

## 實際完成
- Retrieval warm-up (unaided reconstruction of why EC2 should use a Role): partial. Corrected two misconceptions: authorization sits on AWS's side, not the application layer; the application signs the request, it does not "sign off" credentials.
- Demonstrated pass: blast radius of a temporary-credential leak vs a long-term key leak (time window), reusing the 訪客證 analogy unprompted. Tutor added the second dimension: a Role's permissions are typically narrower too.
- Taught: STS as the service issuing temporary credentials; the credential triple (access key, secret key, session token) and why the token must exist (STS does not persist temporary credentials in IAM, so the token self-carries Role identity, expiry, session policy); `ASIA...` vs `AKIA...` prefixes; SigV4 as the sequential signing step after STS; Kerckhoffs's principle; IAM permissions are additive; the three-step policy evaluation order (Explicit Deny, then Allow, then Implicit Deny); SCP as an org-level permission ceiling; guardrail as the general term.
- Three fresh questions asked and worked through; unaided recall at close.

## 數據
- 題數 / 正確率(if practice): warm-up partial; 1 demonstrated pass (blast radius); 3 fresh questions, results below.
- 新增 Notes: [[A temporary credential leak has a smaller blast radius than a leaked long-term IAM user key]], [[A session token exists because STS does not persist temporary credentials in IAM]], [[SigV4 signs each request using credentials that STS separately issues]], [[A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away]]
- 擴充 Notes: [[An EC2 workload should use an IAM Role to obtain temporary credentials]], [[An applicable Explicit Deny overrides every Allow during AWS policy evaluation]]
- 新增 Questions: [[Authorization happens on AWS's side, not inside the requesting application]] (wrong), [[A session token exists because temporary credentials are never persisted in IAM]] (wrong), [[Only an SCP-level Explicit Deny reliably blocks a newly added regional Allow]] (guessed), [[Explicit Deny is checked before any Allow, not evaluated after it]] (wrong mechanism, right conclusion)

## 冒出的 Unknowns
- The policy evaluation order (Explicit Deny checked first, then Allow, then Implicit Deny) was not retained and was mis-sequenced under test.
- The three components of a temporary credential, and specifically what the session token carries (Role identity and expiry, not request content).

## 反思
1. **Pace.** Attention was below normal today, his words: the second coffee was missing, "not really very attentive today". The study block ran 60 minutes today (up from the usual 45). Because attention was already compromised, this session is **not** fair evidence for or against lengthening the default 45-minute block.
2. **Teaching fit.** Analogies landed best again: 訪客證 reused spontaneously for blast radius; access key + secret key as the signature/handwriting proving a request was signed, session token as the visitor badge stating which Role and until when. Confirmed preference: when he answers wrong or guesses, he wants the tutor to supply the correct answer clearly and re-validate, rather than being pushed to struggle further.
3. **Rule signals for this session:**
   - Model preference, explicit and strong: his words, "I like it when communicating with opus, it feels more comprehensive and easier to understand comparing to sonnet" and "the first few chat with sonnet makes me feel stuck, it feels like i dont really understand what he is trying to express". Protocol currently designates Sonnet as the session model. Flagging for Sunday weekly review to decide whether the default changes; not amending [[Study Session Protocol]] unilaterally.
   - Process gap he raised himself: the tutor initially skipped asking his available time frame and briefing progress/goal/scope before starting. Checked [[Study Session Protocol]]'s Open section: it already lists "Confirm the time frame and the strategy for this session" and "Brief the exam map... state today's scope in one sentence" as steps, so the rule already exists and simply needs to be followed, not rewritten.
4. Session ran in Traditional Chinese with English terms preserved, per his standing request since he sits the exam in English. Matched existing protocol, worked as intended.

## 下一步(一個就好)
- Reconstruct the AWS policy evaluation order from scratch with no notes, then apply it to one fresh SCP-versus-identity-policy scenario, stating which step decides the outcome and why.
