---
type: unknowns-run
status: open
stage: 1
step: blind-spot-pass
priority: normal
contexts: hub
project: "[[AWS SAA-C03]]"
domains: [aws-saa, learning-system, obsidian, notebooklm, adhd-workflow, token-efficiency]
deadline: 2026-07-21
started: 2026-07-21
---

# Run - SAA Obsidian Study Experience

## Brief (the Map)

### User POV - 2026-07-21

When I request to start, I will be briefed with the map of the exam and what are the scope of today's study plan, agent aligning with me on the current understanding (nothing in my head in this current moment) then aligning the time frame of this current session and the overall strategy; each study session ends with a reflection together, and keep an eye on the progress.

### Required delivery sequence - 2026-07-21

All 12 blind spots must be resolved. Work proceeds through gated phases:

1. Setup: verify every required tool works as expected.
2. User POV alignment: finalise the end-to-end study flow.
3. Documentation: define how study evidence is captured and maintained.
4. Source priority: define authority and conflict-resolution rules.
5. User preferences: tune the experience to the user's habits.

Do not advance to a later phase until the current phase is verified.

## 4 Unknowns Matrix

| | Known | Unknown |
|---|---|---|
| **Known** | *Known Knowns - facts already established in the Brief* | *Known Unknowns - open questions, each with an owner* |
| **Unknown** | *Unknown Knowns - assumptions surfaced during Blind Spot Pass / Interview* | *Unknown Unknowns - gaps discovered later, dated when found* |

## Interview Log

### Phase 1 setup gate - 2026-07-21

- Decision: Phase 1 passes only when Codex Panel uses ChatGPT subscription authentication, can invoke SAA Knowledge Manager, and NotebookLM MCP can list notebooks and sources, query one non-sensitive test source with verifiable citations, and still work after restarting Obsidian.
- Hard constraint: no OpenAI API key may be requested, configured, or used.
- Known unknown: can the full toolchain pass this end-to-end test in the Obsidian sidebar?
- Owner: Codex executes and reports the test; Chukwan accepts the result.

### Phase 1 failure fallback - 2026-07-21

- Decision: if NotebookLM MCP fails during study, Codex names the failed task and continues the study with ChatGPT.
- After the study reflection, Codex adds the failure to a fix list for later resolution; troubleshooting must not consume the active study session.
- Owner: Codex records and later resolves the failure; the fix-list location is deferred to Phase 3 documentation design.

### Phase 1 test fixture - 2026-07-21

- NotebookLM notebook: `AWS SAA-C03 Architectural Problem Sets and Discussions`
- Data classification: user-approved non-sensitive study material for the end-to-end test.

### Phase 1 verification result - 2026-07-21

- FAIL: `codex mcp list` exposes only `node_repl`; no `notebooklm` MCP server is registered.
- FAIL: no NotebookLM tool is callable in the current Codex session.
- Consequence: the selected test notebook cannot yet be listed or queried from the Obsidian sidebar.
- Fix owner: Codex, after explicit approval to register and authenticate the unofficial community MCP.

### Phase 1 remediation progress - 2026-07-21

- PASS: registered global MCP `notebooklm` with pinned package `notebooklm-mcp@2.0.0`.
- PASS: package start check completed without an API key; the temporary process exited cleanly.
- PENDING: reload Obsidian app-server and expose NotebookLM tools in a new sidebar chat.
- PENDING: complete Google `setup_auth`, query the selected notebook with citations, then repeat after restart.

### Phase 1 UI correction - 2026-07-21

- Root cause: Codex Panel 5.1.2 does not expose an MCP Servers section in Settings by design.
- Correct verification path: run `/tools` inside a connected sidebar chat and inspect `Tool providers`; use `/doctor` only for CLI/app-server diagnostics.
- Correction: the earlier instruction to look for an MCP Servers settings column was inaccurate.

### Phase 1 sidebar probe - 2026-07-21

- PASS: `/tools` runs and reports tool providers from the connected app-server.
- Observed: `codex_apps` and `node_repl`; `node_repl` is ready with 3 tools and 0 resources.
- FAIL: `notebooklm` is absent from the app-server tool-provider inventory despite being present in `codex mcp list` from the standalone CLI.
- Current fault boundary: standalone CLI configuration to Obsidian-launched app-server configuration/runtime.

### Phase 1 app-server reload result - 2026-07-21

- PASS: configured command is `C:\Users\k84450674\AppData\Roaming\npm\codex.cmd` and Codex home is `C:\Users\k84450674\.codex`.
- PASS: `notebooklm` is ready in the Obsidian app-server with 20 tools and 0 resources.
- Note: `auth unsupported` means the server does not use Codex-managed OAuth; its own `setup_auth` browser flow is still pending.
- Warning: `/doctor` reported a `skills/list` timeout although the skills catalog was returned; recheck later without blocking NotebookLM authentication.

### Phase 1 NotebookLM authentication result - 2026-07-21

- PASS: Google authentication completed and `authenticated: true`.
- PASS: the browser session was saved and no API key was requested or used.
- FAIL: the authenticated NotebookLM library currently reports no notebooks, so the selected test notebook is not yet available to query.
- Known unknown: whether the selected notebook belongs to a different Google account or the MCP library still needs discovery/sync.
- Owner: Chukwan verifies browser-account visibility; Codex then tests MCP discovery.

### Phase 1 library root cause - 2026-07-21

- PASS: the selected notebook is visible in the same authenticated Google account.
- Root cause: `notebooklm-mcp@2.0.0` uses a separate local `library.json` and does not automatically import notebooks shown on the Google NotebookLM home screen.
- Required fix: obtain the selected notebook URL and register it with `add_notebook` after explicit user confirmation.
- Owner: Chukwan supplies the notebook URL; Codex performs and verifies the registration.

### Phase 1 notebook registration consent - 2026-07-21

- Decision: Chukwan explicitly approved proceeding with registration of the selected NotebookLM notebook.
- PENDING: receive the notebook URL required by `add_notebook`.

### Phase 1 notebook URL received - 2026-07-21

- Notebook URL: `https://notebooklm.google.com/notebook/fe99574a-081d-4b4a-82c3-fe25a246007e`
- Action authorised: register this notebook in the local NotebookLM MCP library and verify discovery.

### Phase 1 notebook content description - 2026-07-21

- Description: AWS SAA-C03 question bank supported by two course transcripts, one from YouTube and one from Coursera, plus official AWS materials including the exam guide.

### Phase 1 acceleration decision - 2026-07-21

- Time goal: start the first study session within the next 30 minutes.
- Decision: infer the remaining notebook metadata from the confirmed purpose and present one consolidated registration proposal for approval.
- Guardrail: complete the minimum end-to-end NotebookLM citation test before beginning study; defer non-blocking setup polish.

### Phase 1 notebook metadata approval - 2026-07-21

- APPROVED: register `AWS SAA-C03 Architectural Problem Sets and Discussions` with the proposed description, topics, content types, tags, and study use cases.
- APPROVED action: run discovery and one source-grounded citation test immediately after registration.

### Phase 1 NotebookLM end-to-end result - 2026-07-21

- PASS: `add_notebook` registered the selected notebook as `aws-saa-c03-architectural-prob`.
- PASS: `list_notebooks` returned the registered notebook with the approved metadata.
- PASS: `ask_question` queried the notebook and returned a source-grounded answer with a citation to `AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf`.
- Verified exam map: Secure 30%, Resilient 26%, High-Performing 24%, Cost-Optimized 20%.
- PASS: no OpenAI API key was requested, configured, or used.
- PENDING: repeat discovery after a full Obsidian restart to verify persistence and close the Phase 1 setup gate.

### Phase 1 restart checkpoint - 2026-07-21

- User checkpoint: Obsidian was restarted and the same study-system task was resumed.
- Verification action: query the NotebookLM MCP local library from the post-restart connection without consuming a NotebookLM study query.

### Phase 1 setup gate closed - 2026-07-21

- PASS: after restarting Obsidian, `list_notebooks` returned `aws-saa-c03-architectural-prob` with complete metadata.
- PASS: ChatGPT subscription authentication, Codex Panel, local SAA skills, and NotebookLM MCP are available without an OpenAI API key.
- PASS: NotebookLM can provide source-grounded citations and its local library persists across an Obsidian restart.
- Cost guardrail: no OpenAI API key is configured; NotebookLM queries use the authenticated Google account and should be conserved for source-grounded work.
- Phase decision: Phase 1 is complete. Proceed to Phase 2 user-POV flow alignment through a live first-session pilot.

### Phase 2 first-session start - 2026-07-21

- Available study time: 45 minutes.
- Starting state: no active SAA-C03 mental map is currently loaded.
- User instruction: proceed immediately.
- Session shape: exam map and today's scope, strategy alignment, active study, then reflection and progress tracking.

### Phase 2 live pilot ? Question 1

- Prompt: before selecting AWS services, what should a security architect clarify first?
- Original reasoning: "as a solution architect, I should first identify the data structure of the clients' data and needs, identify which section of the system needs to move to AWS to identify the feasibility and how will the user experience be in ideal situation and what are the potential risk"
- Assessment: strong migration-discovery framing, but the security-specific first principle was not explicit.
- Learning gap: identify who or what needs access to which resource, for which actions, and under what conditions; then design identity, permissions, and trust boundaries using least privilege.

### Phase 2 terminology preference and knowledge gap

- User question: what are IAM and least privilege?
- Preference: because the exam is in English, every important conceptual term must appear in English in explanations and in the question; Chinese may clarify it.
- Tutor rule for this pilot: introduce unfamiliar exam terms before testing them, using `English term??????` on first mention.

### Phase 2 live pilot ? Question 2

- Original reasoning: "i remember EC2 is the engine, and microservices are different worker with different responsibilities right? in that case to answer your scenario question, i dont have a clear understanding on what is S3 bucket and IAM Role and AWS root auth, but since we are testing safety topics, then I will say my answer for this question is B"
- Answer: B ? correct.
- Evidence quality: guessed correct; the answer relied on the safety theme rather than a clear model of S3, IAM Role, and the AWS account root user.
- Learning gaps: EC2 versus microservices; S3 bucket; IAM Role and temporary credentials; AWS account root user.

### Phase 2 live pilot ? IAM Role mental model check

- Original reasoning: "i am not sure what is the difference between EC2 and EC2 instance, but from my understanding, IAM Role will be a identifier for a request for the main computation - EC2 instance to know on which level of confidentiality we can disclose to this request"
- Correct element: the workload needs an identity when requesting another AWS service.
- Correction needed: an IAM Role is an assumable identity with permissions, not a confidentiality label; the EC2 instance does not decide disclosure.
- Learning gaps: EC2 service versus EC2 instance, request signing with temporary credentials, and target-service authorisation.

### Phase 2 live pilot ? Authorisation decision check

- Original reasoning: "so EC2 instance is like one of the model of EC2 like iphone 17 is one of the model of iPhone? so IAM Role is like a ??? where it tells EC2 how much consumption resources we should offer and what permission this guys are assigned? and s3 is a code for certain command / function? under this understanding the question for this MCQ would be B"
- Answer: B ? correct.
- Improved element: recognised the IAM Role as a pass carried by the workload and S3/AWS as the authorisation decision point.
- Corrections needed: an EC2 instance is an individual running server, while an instance type is the model/specification; IAM Role governs AWS API permissions, not CPU or memory; Amazon S3 is a storage service, while `s3:GetObject` is an API action.

### Phase 2 live pilot ? Compute versus access check

- Original reasoning: "so S3 is a microservices name / code? and S3 bucket is like a variable with preset type? and s3 get object is like bringing my fixed type variables to catch the value in the request? my answer for your question will be B"
- Answer: B ? correct; EC2 instance type determines CPU and memory.
- Learning gap: S3 is a managed object-storage service, a bucket is a named resource/container, and `s3:GetObject` is an API action that reads an object identified by bucket and key.

### Phase 2 live pilot ? S3 request model and missing context

- User questions: what is an external dependency service; can both a microservice and S3 be called through an API; who uses AWS; and what real use case produces an `S3.GetObject` request?
- Answer to previous check: A ? correct; bucket name plus object key identifies the requested object.
- Starting-state evidence: the learner does not yet have a user-persona or application-request-flow model for AWS.
- Flow amendment discovered: introduce persona, business use case, and request path before service definitions or SDK/API syntax.
- Terminology correction: both a custom microservice and Amazon S3 expose APIs; the difference is ownership and responsibility, not whether they can be called.

### Phase 2 live pilot ? Requesting persona check

- Answer: B ? correct; the backend microservice normally calls `S3.GetObject` using its IAM Role on Alice's behalf.
- Evidence quality: selected answer only, with no reasoning; do not count as mastery yet.
- Next check: separate application-level authorisation for Alice from AWS-level authorisation for the backend workload.

### Phase 2 live pilot ? Layered authorisation check

- Original reasoning: "it wont happen since the application layer would reject since this is the scope under the application layer. B"
- Answer: B ? correct.
- Evidence quality: reasoned correct; distinguished application-level business authorisation from AWS-level workload authorisation.
- Progress evidence: the end-user ? application ? IAM Role ? S3 request path is now understood at a basic level.

### Phase 2 live pilot ? Least privilege check

- Original reasoning: "so i assume you mean a request has passed through the application layer and the request reach the AWS layer, and in my understanding the principle of least privilege is similar to prompt engineering context managing, more accurate the better, in this case, my answer for this questions would be B"
- Answer: B ? correct.
- Evidence quality: reasoned correct; selected the minimum Action and Resource scope.
- Mental-model refinement: the backend creates an AWS API request under its IAM Role rather than forwarding the end-user request unchanged; least privilege reduces permissions and blast radius rather than improving answer accuracy.
- Session pacing: run one final IAM policy-evaluation check, then move to reflection and progress tracking.

### Phase 2 live pilot ? Explicit Deny check

- Original reasoning: "i dont understand in what case, the policy will setup explicit deny but theoriticaly, the answer should be B, since Explicit Deny are prioritised over IAM role"
- Answer: B ? correct.
- Evidence quality: theoretically derived correct, but not mastered because the learner cannot yet name a real Explicit Deny use case.
- Terminology refinement: AWS evaluates all applicable policies together; any applicable Explicit Deny overrides an Allow, including an Allow attached to the IAM Role.
- Open learning need: concrete guardrail use cases for Explicit Deny.
- Session transition: begin joint reflection after explaining the use cases.

### Phase 2 first-session reflection ? clarity check

- User reflection: "so far the concept explained are quite clear."
- Surfaced assumption: Explicit Deny is a hard rule managed by AWS, while IAM Role is co-managed by the application and AWS.
- Correction: customers or their administrators usually author both Allow and Explicit Deny statements and configure IAM Roles; AWS operates the IAM/STS services and enforces the resulting policy evaluation.
- Review decision: use unaided recall of the end-to-end request flow before judging retention.

### Phase 2 first-session reflection ? unaided recall

- Original recall: "so alice send a download request-> application layer receive request-> review it's permission includes the requested report -> application layer approved -> sign off IAM role temp or one off (like a ????-> the request bring along the temp signed off IAM Role to AWS S3 request to download the report -> S3 get object which contains the IAM Role and the request -> if not violating with Explicit Deny policies and the IAM Role is valid -> Allow request"
- Evidence quality: reasoned recall of the complete end-user ? application ? AWS authorisation path; basic mental model achieved.
- Precision corrections: the workload assumes an IAM Role and obtains temporary credentials; the API request is signed with those credentials rather than carrying the Role itself; `s3:GetObject` is the requested action; Allow requires an applicable Allow and no applicable Explicit Deny, otherwise Implicit Deny applies.
- Missing final hop: after S3 returns the object, the backend returns it to Alice or provides a controlled download mechanism.

### Phase 2 reflection-interface correction

- User question: what does `Analogy` mean?
- Definition: analogy???????explains an unfamiliar concept through a familiar comparison, such as IAM Role ? visitor pass.
- Flow amendment: the English-term-plus-Chinese-definition rule applies to reflection and interface questions, not only exam teaching content.

### Phase 2 learning-format preference

- Original preference: "i think the most easy to understand will be A and then B then D and C is somehow similar to me"
- Ranking: real-world use case first, analogy second, with MCQ practice and request-flow diagrams approximately equal afterward.
- Design implication: teach through persona and business scenario, bridge with analogy, then validate through a concise MCQ or flow reconstruction.

### Phase 2 pace and collaboration reflection

- Original reflection: "i think 45 minutes is a very comfortable time frame where i can keep focus and the way you teach is friendly for me as well and i think we communicate quite well today it is just about the best pace, but we can test it out and refine along the journey!"
- Session-duration preference: 45 minutes is a comfortable focus window; treat it as the starting default and refine it using future session evidence.
- Teaching-fit evidence: the current style feels friendly and communication quality feels strong.
- Documentation concern: the learner expected study documentation to live under `Knowledge/Professionals/AWS SAA-C03` and asked what was written and where.

### Phase 3 documentation-layer decision

- APPROVED: keep system-design evidence and raw interview trace in this Unknowns run.
- APPROVED: create a concise permanent session note under `Knowledge/Professionals/AWS SAA-C03/04 Journey`.
- Sync rule: transfer only study goals, demonstrated understanding, unresolved concepts, reflection, and one next step; do not duplicate the full chat transcript.

### Phase 3 documentation implementation result

- Created one formal 45-minute session note in `04 Journey`.
- Created two guessed Question Notes, each linked to exactly one Knowledge Note.
- Created two atomic Knowledge Notes with status `capture`; neither was marked mastered.
- Updated Active Unknowns to exactly three items.
- Updated the Dashboard exam countdown, Current Focus, one next action, and Recent Study.
- Verification passed: 5/5 files present, 2/2 question links valid, 2/2 capture statuses valid, UTF-8 intact, and Dashboard next action matches the session.

### Progress-visualisation discovery preference

- Decision: do not create browser mockups during proposal discovery.
- Preference: provide concise search keywords so Chukwan can inspect visual references independently and minimise token use.

## Brainstorm Directions

## References

## Action Plan

## Implementation Log

## ⚡ Fast-Pass

## Pitch

## Quiz Results

## Reflection & Lessons
