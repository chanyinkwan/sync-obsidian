# AWS Request and Authorization Canvas Design

**Date:** 2026-07-24  
**Status:** Approved in visual review  
**Artifact:** `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`

## Purpose

Create a permanent Obsidian Canvas that explains the end-to-end AWS request and authorization architecture from a human point of view. It must make the boundaries between the human, client application, AWS SDK, temporary credentials, SigV4, AWS service, request context, and policy evaluation visually unambiguous.

The canvas is an architecture reference, not a learning dashboard.

## Language

Every important AWS term appears in English first, followed by a concise Traditional Chinese clarification. Simplified Chinese is not used.

Examples:

- `Principal 主體身份`
- `Request context 請求情境`
- `Temporary credentials 臨時憑證`
- `Policy evaluation 政策評估`

## Layout

The canvas is a wide, left-to-right layered swimlane atlas with four zones.

### Zone 1: Human POV

Four entry scenarios show why a request begins:

1. `Customer 客戶` clicks “Download invoice.”
2. `Employee 員工` runs an AWS CLI command.
3. `Federated user 聯合身份使用者` signs in through a company identity.
4. `Operator 操作人員` triggers an application or Lambda workflow.

Each scenario connects to the relevant client in the shared request backbone.

### Zone 2: Shared Request Backbone

The central sequence reads left to right:

1. `Human intent 人類意圖`
2. `Client 用戶端` — browser, application, CLI, or Lambda
3. `AWS SDK 軟件開發工具套件`
4. `Credential provider 憑證提供者`
5. `SigV4 request signing 請求簽署`
6. `AWS service AWS 服務` — S3 is the concrete example
7. `Request context 請求情境`
8. `Policy evaluation 政策評估`

The backbone must show these distinctions:

- `s3.getObject(bucket, key)` is an in-process SDK method call, not yet the network request.
- The SDK converts the method call into an HTTPS request.
- The credential provider resolves a valid credential set.
- The SDK performs SigV4 signing on the client side.
- S3 receives and authenticates the signed request.
- AWS identifies the principal and builds the request context.
- Authorization occurs on the AWS side after the request arrives.

### Zone 3: Credential Acquisition

This branch sits below the SDK and credential-provider stations:

`Identity source / IAM Role 身份來源`
→ `STS issues temporary credentials STS 簽發臨時憑證`
→ `Credential provider caches and refreshes 憑證提供者快取及更新`
→ `SDK performs SigV4 signing SDK 執行 SigV4 簽署`

The branch must state that not every API request creates a new STS session.

The temporary credential triple is:

1. `Access key ID`
2. `Secret access key`
3. `Session token`

The canvas must not imply that IAM or STS signs each API request. IAM stores identity and authorization configuration; STS issues temporary credentials; the client-side SDK signs the request.

### Zone 4: Policy Evaluation and Applicable Sources

The evaluation decision is:

1. An applicable `Explicit Deny 明確拒絕` results in Deny.
2. Otherwise, an applicable Allow can result in Allow only when all relevant permission ceilings permit it.
3. Without an effective Allow, the result is `Implicit Deny 隱含拒絕`.

Policy sources are grouped by role:

- Permission sources:
  - `Identity-based policy 身份型政策`
  - `Resource-based policy 資源型政策`
- Permission ceilings or limits:
  - `Permissions boundary 權限邊界`
  - `Session policy 工作階段政策`
  - `SCP — Service Control Policy 服務控制政策`
  - `RCP — Resource Control Policy 資源控制政策`

The canvas must state that policies are stored in IAM, resource configuration, session configuration, or AWS Organizations. They do not travel inside the application request.

SCP and RCP are represented as Organization-level permission ceilings. They do not grant permissions.

## Principal Model

The canvas distinguishes the software actor from the AWS security identity:

- Human: initiates the business action.
- Application or CLI: client software that makes the API call.
- EC2 instance: host running the application.
- `AppRole assumed-role session`: principal seen by AWS when the application uses the role's temporary credentials.

An application-level end user is not automatically the AWS principal. A federated architecture may map a human identity into an AWS session, but a normal backend pattern exposes the workload's role session to AWS.

## Visual System

- Blue: human intent, client, and SDK.
- Purple: credentials, STS, role session, and SigV4.
- Green: AWS service and request context.
- Orange: policy sources and evaluation.
- Red: Explicit Deny outcome.
- Grey: Implicit Deny outcome and contextual notes.

Groups and arrows express architecture. Text remains concise enough to read at normal Obsidian Canvas zoom.

## Links

The canvas may include unobtrusive wiki-links to existing canonical knowledge notes where they directly support an architecture station. Links do not create a separate study lane and do not display mastery status.

No new flashcard or knowledge-note format is introduced by this artifact.

## Non-goals

- No Zone 5.
- No learned/weak/untouched status.
- No flashcard anatomy.
- No readiness dashboard or progress tracking.
- No Dataview or dynamic generation.
- No exhaustive IAM edge-case decision tree.
- No modification of the Study Session Protocol.

## Validation

Implementation is complete only when:

1. The `.canvas` file is valid JSON.
2. Every node ID is unique.
3. Every edge references existing node IDs.
4. Groups do not overlap their own child content incorrectly.
5. The central request backbone reads unambiguously from left to right.
6. The credential branch visually joins the SDK/credential-provider portion rather than appearing as a mandatory per-request STS hop.
7. The policy-source nodes feed the policy-evaluation station rather than appearing inside the request.
8. English terms precede Traditional Chinese clarifications.
9. The canvas opens in Obsidian without parse errors and is readable at normal zoom.

