# AWS Request and Authorization Canvas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a permanent bilingual Obsidian Canvas that explains AWS request signing and authorization from Human POV through policy evaluation.

**Architecture:** The artifact is a static Obsidian `.canvas` JSON document with four grouped zones. A central left-to-right request backbone is supplemented by a credential-acquisition branch and a policy-source/evaluation branch; a PowerShell validator provides repeatable structural and semantic checks.

**Tech Stack:** Obsidian Canvas JSON, Markdown text nodes, PowerShell 5.1 validation, Git.

## Global Constraints

- Create `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`.
- English AWS terms precede concise Traditional Chinese clarification; do not use Simplified Chinese.
- The artifact is architecture-only: no Zone 5, mastery status, flashcard anatomy, readiness tracking, Dataview, or protocol changes.
- Preserve the approved four-zone layout: Human POV, request backbone, credential acquisition, and policy evaluation/applicable sources.
- IAM stores identity and authorization configuration; STS issues temporary credentials; the client-side SDK performs SigV4 signing.
- Policies do not travel inside the request.
- SCP and RCP are Organization-level permission ceilings and do not grant permission.
- Keep all unrelated dirty-worktree files untouched.

## File Structure

- Create `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas` — the user-facing architecture.
- Create `scripts/validate-saa-request-canvas.ps1` — repeatable JSON, graph-integrity, scope, and required-copy checks for this canvas.
- Do not modify the dashboard, study protocol, templates, or existing notes.

---

### Task 1: Establish Canvas Schema Validation and Four-Zone Skeleton

**Files:**
- Create: `scripts/validate-saa-request-canvas.ps1`
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`

**Interfaces:**
- Consumes: a filesystem path supplied through `-CanvasPath`.
- Produces: exit code `0` plus `PASS: <path>` for a valid canvas; a terminating error for missing files, malformed JSON, duplicate IDs, broken edges, or missing groups.

- [ ] **Step 1: Write the failing validator**

Create `scripts/validate-saa-request-canvas.ps1`:

```powershell
param(
    [Parameter(Mandatory = $false)]
    [string]$CanvasPath = 'Knowledge\Professionals\AWS SAA-C03\01 Dashboard\AWS Request and Authorization Architecture.canvas'
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $CanvasPath)) {
    throw "Canvas not found: $CanvasPath"
}

$raw = Get-Content -Raw -LiteralPath $CanvasPath
$canvas = $raw | ConvertFrom-Json

if ($null -eq $canvas.nodes -or $null -eq $canvas.edges) {
    throw 'Canvas must contain nodes and edges arrays'
}

$nodeIds = @($canvas.nodes | ForEach-Object { $_.id })
$edgeIds = @($canvas.edges | ForEach-Object { $_.id })

if (($nodeIds | Sort-Object -Unique).Count -ne $nodeIds.Count) {
    throw 'Duplicate node ID found'
}
if (($edgeIds | Sort-Object -Unique).Count -ne $edgeIds.Count) {
    throw 'Duplicate edge ID found'
}

$nodeSet = @{}
foreach ($id in $nodeIds) { $nodeSet[$id] = $true }
foreach ($edge in $canvas.edges) {
    if (-not $nodeSet.ContainsKey($edge.fromNode)) {
        throw "Edge $($edge.id) has missing fromNode $($edge.fromNode)"
    }
    if (-not $nodeSet.ContainsKey($edge.toNode)) {
        throw "Edge $($edge.id) has missing toNode $($edge.toNode)"
    }
}

$requiredGroups = @(
    'Zone 1 · Human POV 人類視角',
    'Zone 2 · Shared Request Backbone 共用請求主幹',
    'Zone 3 · Credential Acquisition 憑證取得',
    'Zone 4 · Policy Evaluation 政策評估'
)
$groupLabels = @($canvas.nodes | Where-Object { $_.type -eq 'group' } | ForEach-Object { $_.label })
foreach ($label in $requiredGroups) {
    if ($groupLabels -notcontains $label) {
        throw "Missing required group: $label"
    }
}

Write-Output "PASS: $CanvasPath"
```

- [ ] **Step 2: Run the validator and confirm RED**

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts\validate-saa-request-canvas.ps1
```

Expected: FAIL with `Canvas not found`.

- [ ] **Step 3: Create the minimal four-zone canvas**

Create the canvas with this exact skeleton:

```json
{
  "nodes": [
    {
      "id": "grp-human-pov-01",
      "type": "group",
      "x": 0,
      "y": -900,
      "width": 2800,
      "height": 520,
      "color": "6",
      "label": "Zone 1 · Human POV 人類視角"
    },
    {
      "id": "grp-request-path-02",
      "type": "group",
      "x": 0,
      "y": -250,
      "width": 5400,
      "height": 560,
      "color": "6",
      "label": "Zone 2 · Shared Request Backbone 共用請求主幹"
    },
    {
      "id": "grp-credentials-03",
      "type": "group",
      "x": 900,
      "y": 520,
      "width": 3000,
      "height": 820,
      "color": "4",
      "label": "Zone 3 · Credential Acquisition 憑證取得"
    },
    {
      "id": "grp-policies-04",
      "type": "group",
      "x": 4050,
      "y": 520,
      "width": 3500,
      "height": 1540,
      "color": "3",
      "label": "Zone 4 · Policy Evaluation 政策評估"
    }
  ],
  "edges": []
}
```

- [ ] **Step 4: Run the validator and confirm GREEN**

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts\validate-saa-request-canvas.ps1
```

Expected: `PASS: Knowledge\Professionals\AWS SAA-C03\01 Dashboard\AWS Request and Authorization Architecture.canvas`.

- [ ] **Step 5: Commit the skeleton and validator**

```powershell
git add -- 'scripts/validate-saa-request-canvas.ps1' 'Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas'
git commit -m "test: establish AWS request canvas structure"
```

---

### Task 2: Add Human POV Scenarios and the Shared Request Backbone

**Files:**
- Modify: `scripts/validate-saa-request-canvas.ps1`
- Modify: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`

**Interfaces:**
- Consumes: the four group node IDs from Task 1.
- Produces: Human scenarios feeding a single chronological backbone ending at `node-policy-eval`.

- [ ] **Step 1: Extend the validator with required Zone 1 and Zone 2 copy**

Insert before `Write-Output`:

```powershell
$requiredText = @(
    'Customer 客戶',
    'Employee 員工',
    'Federated user 聯合身份使用者',
    'Operator 操作人員',
    'Human intent 人類意圖',
    'Client 用戶端',
    'AWS SDK 軟件開發工具套件',
    'Credential provider 憑證提供者',
    'SigV4 request signing 請求簽署',
    'AWS service AWS 服務',
    'Request context 請求情境',
    'Policy evaluation 政策評估'
)
$allText = @($canvas.nodes | ForEach-Object { "$($_.text) $($_.label)" }) -join "`n"
foreach ($term in $requiredText) {
    if ($allText -notmatch [regex]::Escape($term)) {
        throw "Missing required architecture term: $term"
    }
}
```

- [ ] **Step 2: Run the validator and confirm RED**

Run the validator.

Expected: FAIL with `Missing required architecture term: Customer 客戶`.

- [ ] **Step 3: Add the exact Zone 1 and Zone 2 text nodes**

Append these node objects after the group nodes:

```json
{
  "id": "node-customer-01",
  "type": "text",
  "text": "## Customer 客戶\nClicks **Download invoice**\n點擊下載發票",
  "x": 100,
  "y": -760,
  "width": 500,
  "height": 190,
  "color": "6"
},
{
  "id": "node-employee-02",
  "type": "text",
  "text": "## Employee 員工\nRuns an **AWS CLI command**\n執行 AWS CLI 指令",
  "x": 750,
  "y": -760,
  "width": 500,
  "height": 190,
  "color": "6"
},
{
  "id": "node-federated-03",
  "type": "text",
  "text": "## Federated user 聯合身份使用者\nSigns in through company identity\n使用公司身份登入",
  "x": 1400,
  "y": -760,
  "width": 500,
  "height": 190,
  "color": "6"
},
{
  "id": "node-operator-04",
  "type": "text",
  "text": "## Operator 操作人員\nTriggers an application or Lambda workflow\n觸發應用程式或 Lambda 工作流程",
  "x": 2050,
  "y": -760,
  "width": 500,
  "height": 190,
  "color": "6"
},
{
  "id": "node-human-intent",
  "type": "text",
  "text": "## Human intent 人類意圖\nThe business action the human wants completed\n使用者希望完成的業務動作",
  "x": 100,
  "y": -100,
  "width": 520,
  "height": 230,
  "color": "6"
},
{
  "id": "node-client",
  "type": "text",
  "text": "## Client 用戶端\nBrowser · Application · AWS CLI · Lambda\nExecutes the API call 執行 API 呼叫",
  "x": 760,
  "y": -100,
  "width": 520,
  "height": 230,
  "color": "6"
},
{
  "id": "node-sdk",
  "type": "text",
  "text": "## AWS SDK 軟件開發工具套件\n`s3.getObject(bucket, key)` is an in-process method call.\n把 method call 轉成 HTTPS request；S3 service 不在 SDK 裏。",
  "x": 1420,
  "y": -100,
  "width": 520,
  "height": 260,
  "color": "6"
},
{
  "id": "node-credential-provider",
  "type": "text",
  "text": "## Credential provider 憑證提供者\nResolves a valid credential set\n尋找、快取並在需要時更新 credentials",
  "x": 2080,
  "y": -100,
  "width": 520,
  "height": 230,
  "color": "4"
},
{
  "id": "node-sigv4",
  "type": "text",
  "text": "## SigV4 request signing 請求簽署\nThe client-side AWS SDK signs the HTTPS request.\n由 client side SDK 簽署；不是 IAM 或 STS 逐次簽署。",
  "x": 2740,
  "y": -100,
  "width": 520,
  "height": 260,
  "color": "4"
},
{
  "id": "node-aws-service",
  "type": "text",
  "text": "## AWS service AWS 服務\nAmazon S3 receives and authenticates the signed request.\nS3 接收並驗證 signed request。",
  "x": 3400,
  "y": -100,
  "width": 520,
  "height": 230,
  "color": "5"
},
{
  "id": "node-request-context",
  "type": "text",
  "text": "## Request context 請求情境\nAWS identifies the **Principal 主體身份** and builds context:\nAction · Resource · Time · Source IP · Region · Conditions",
  "x": 4060,
  "y": -100,
  "width": 520,
  "height": 260,
  "color": "5"
},
{
  "id": "node-policy-eval",
  "type": "text",
  "text": "## Policy evaluation 政策評估\nAWS retrieves all **applicable policy sources 適用政策來源**.\nAuthorization happens on AWS's side.",
  "x": 4720,
  "y": -100,
  "width": 520,
  "height": 260,
  "color": "3"
}
```

- [ ] **Step 4: Add Human-to-client and backbone edges**

Append these edges:

```json
{"id":"edge-customer-client","fromNode":"node-customer-01","fromSide":"bottom","toNode":"node-client","toSide":"top","label":"web application"},
{"id":"edge-employee-client","fromNode":"node-employee-02","fromSide":"bottom","toNode":"node-client","toSide":"top","label":"AWS CLI"},
{"id":"edge-federated-client","fromNode":"node-federated-03","fromSide":"bottom","toNode":"node-client","toSide":"top","label":"federated application"},
{"id":"edge-operator-client","fromNode":"node-operator-04","fromSide":"bottom","toNode":"node-client","toSide":"top","label":"application / Lambda"},
{"id":"edge-intent-client","fromNode":"node-human-intent","fromSide":"right","toNode":"node-client","toSide":"left"},
{"id":"edge-client-sdk","fromNode":"node-client","fromSide":"right","toNode":"node-sdk","toSide":"left"},
{"id":"edge-sdk-provider","fromNode":"node-sdk","fromSide":"right","toNode":"node-credential-provider","toSide":"left"},
{"id":"edge-provider-sigv4","fromNode":"node-credential-provider","fromSide":"right","toNode":"node-sigv4","toSide":"left"},
{"id":"edge-sigv4-service","fromNode":"node-sigv4","fromSide":"right","toNode":"node-aws-service","toSide":"left","label":"signed HTTPS request"},
{"id":"edge-service-context","fromNode":"node-aws-service","fromSide":"right","toNode":"node-request-context","toSide":"left"},
{"id":"edge-context-eval","fromNode":"node-request-context","fromSide":"right","toNode":"node-policy-eval","toSide":"left"}
```

- [ ] **Step 5: Run the validator and confirm GREEN**

Run the validator.

Expected: PASS with all Zone 1 and Zone 2 terms present.

- [ ] **Step 6: Commit**

```powershell
git add -- 'scripts/validate-saa-request-canvas.ps1' 'Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas'
git commit -m "feat: add human-led AWS request backbone"
```

---

### Task 3: Add Credential Acquisition and Principal Identity

**Files:**
- Modify: `scripts/validate-saa-request-canvas.ps1`
- Modify: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`

**Interfaces:**
- Consumes: `node-credential-provider` and `node-sigv4`.
- Produces: a separate credential branch that feeds the provider without becoming a mandatory per-request STS hop.

- [ ] **Step 1: Add credential and principal assertions**

Insert before `Write-Output`:

```powershell
$credentialText = @(
    'IAM = Identity and Access Management',
    'STS = Security Token Service',
    'Access key ID',
    'Secret access key',
    'Session token',
    'AppRole assumed-role session',
    'Not every API request creates a new STS session'
)
foreach ($term in $credentialText) {
    if ($allText -notmatch [regex]::Escape($term)) {
        throw "Missing credential architecture term: $term"
    }
}
```

- [ ] **Step 2: Run the validator and confirm RED**

Expected: FAIL with `Missing credential architecture term: IAM = Identity and Access Management`.

- [ ] **Step 3: Add credential-acquisition nodes**

```json
{
  "id": "node-iam-role",
  "type": "text",
  "text": "## IAM = Identity and Access Management\nAWS identity and authorization configuration\n定義 IAM Role 與 policies；IAM service 本身不是 Principal。",
  "x": 1020,
  "y": 710,
  "width": 560,
  "height": 260,
  "color": "4"
},
{
  "id": "node-sts",
  "type": "text",
  "text": "## STS = Security Token Service\nIssues temporary credentials 簽發臨時憑證\nSTS does not perform SigV4 signing for each request.",
  "x": 1700,
  "y": 710,
  "width": 560,
  "height": 260,
  "color": "4"
},
{
  "id": "node-credential-triple",
  "type": "text",
  "text": "## Temporary credentials 臨時憑證\n1. **Access key ID**\n2. **Secret access key**\n3. **Session token**",
  "x": 2380,
  "y": 710,
  "width": 520,
  "height": 280,
  "color": "4"
},
{
  "id": "node-role-session",
  "type": "text",
  "text": "## Principal 主體身份\nApplication = software client 軟件用戶端\nEC2 instance = host 主機\n**AppRole assumed-role session** = Principal seen by AWS",
  "x": 3060,
  "y": 710,
  "width": 650,
  "height": 300,
  "color": "4"
},
{
  "id": "node-sts-not-every-call",
  "type": "text",
  "text": "> **Not every API request creates a new STS session.**\nCredential provider 會快取有效 credentials，接近 expiry 時才更新。",
  "x": 1700,
  "y": 1080,
  "width": 1250,
  "height": 170,
  "color": "4"
}
```

- [ ] **Step 4: Add credential edges**

```json
{"id":"edge-iam-sts","fromNode":"node-iam-role","fromSide":"right","toNode":"node-sts","toSide":"left","label":"assume role"},
{"id":"edge-sts-triple","fromNode":"node-sts","fromSide":"right","toNode":"node-credential-triple","toSide":"left","label":"issues"},
{"id":"edge-triple-session","fromNode":"node-credential-triple","fromSide":"right","toNode":"node-role-session","toSide":"left","label":"represents session"},
{"id":"edge-triple-provider","fromNode":"node-credential-triple","fromSide":"top","toNode":"node-credential-provider","toSide":"bottom","label":"resolved / cached"},
{"id":"edge-session-context","fromNode":"node-role-session","fromSide":"top","toNode":"node-request-context","toSide":"bottom","label":"authenticated Principal"}
```

- [ ] **Step 5: Run the validator and confirm GREEN**

Expected: PASS.

- [ ] **Step 6: Commit**

```powershell
git add -- 'scripts/validate-saa-request-canvas.ps1' 'Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas'
git commit -m "feat: map IAM STS credentials and principal"
```

---

### Task 4: Add Applicable Policy Sources and Decision Outcomes

**Files:**
- Modify: `scripts/validate-saa-request-canvas.ps1`
- Modify: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`

**Interfaces:**
- Consumes: `node-policy-eval`.
- Produces: six policy-source nodes feeding evaluation and three mutually exclusive outcomes.

- [ ] **Step 1: Add policy-source and non-goal assertions**

Insert before `Write-Output`:

```powershell
$policyText = @(
    'Identity-based policy 身份型政策',
    'Resource-based policy 資源型政策',
    'Permissions boundary 權限邊界',
    'Session policy 工作階段政策',
    'SCP = Service Control Policy',
    'RCP = Resource Control Policy',
    'Applicable Explicit Deny',
    'Applicable Allow + ceilings permit',
    'No effective Allow',
    'Policies do not travel inside the request',
    'SCP and RCP do not grant permissions'
)
foreach ($term in $policyText) {
    if ($allText -notmatch [regex]::Escape($term)) {
        throw "Missing policy architecture term: $term"
    }
}

$forbiddenText = @('Zone 5', 'learned', 'weak', 'untouched', 'Dataview')
foreach ($term in $forbiddenText) {
    if ($allText -match [regex]::Escape($term)) {
        throw "Architecture-only canvas contains forbidden study-layer text: $term"
    }
}
```

- [ ] **Step 2: Run the validator and confirm RED**

Expected: FAIL with `Missing policy architecture term: Identity-based policy 身份型政策`.

- [ ] **Step 3: Add policy-source nodes**

```json
{
  "id": "node-identity-policy",
  "type": "text",
  "text": "## Identity-based policy 身份型政策\nStored in IAM and attached to user or role\n可授予 permission；本身的 Implicit Deny 不等於 Explicit Deny。",
  "x": 4180,
  "y": 700,
  "width": 560,
  "height": 260,
  "color": "3"
},
{
  "id": "node-resource-policy",
  "type": "text",
  "text": "## Resource-based policy 資源型政策\nStored on the resource，例如 S3 bucket policy\nCan grant access to a named Principal.",
  "x": 4860,
  "y": 700,
  "width": 560,
  "height": 260,
  "color": "3"
},
{
  "id": "node-boundary",
  "type": "text",
  "text": "## Permissions boundary 權限邊界\nMaximum permissions for an IAM user or role\n只限制上限，不授予 permission。",
  "x": 5540,
  "y": 700,
  "width": 560,
  "height": 260,
  "color": "3"
},
{
  "id": "node-session-policy",
  "type": "text",
  "text": "## Session policy 工作階段政策\nOptional restriction applied when creating a session\n只能收窄 session permission。",
  "x": 4180,
  "y": 1040,
  "width": 560,
  "height": 250,
  "color": "3"
},
{
  "id": "node-scp",
  "type": "text",
  "text": "## SCP = Service Control Policy\nOrganization-level identity/account-side permission ceiling\n不授予 permission；Explicit Deny 可封鎖 action。",
  "x": 4860,
  "y": 1040,
  "width": 560,
  "height": 270,
  "color": "3"
},
{
  "id": "node-rcp",
  "type": "text",
  "text": "## RCP = Resource Control Policy\nOrganization-level resource-side permission ceiling\n**SCP and RCP do not grant permissions.**",
  "x": 5540,
  "y": 1040,
  "width": 560,
  "height": 270,
  "color": "3"
},
{
  "id": "node-policies-not-request",
  "type": "text",
  "text": "> **Policies do not travel inside the request.**\nAWS 按 Principal、Resource、Account 與 Organization configuration 載入 applicable policies。",
  "x": 6220,
  "y": 700,
  "width": 1100,
  "height": 190,
  "color": "3"
}
```

- [ ] **Step 4: Add evaluation-outcome nodes**

```json
{
  "id": "node-explicit-deny",
  "type": "text",
  "text": "## Applicable Explicit Deny\n適用的明確拒絕\n→ **DENY**",
  "x": 4180,
  "y": 1500,
  "width": 560,
  "height": 210,
  "color": "1"
},
{
  "id": "node-effective-allow",
  "type": "text",
  "text": "## Applicable Allow + ceilings permit\n有效 Allow 且所有上限放行\n→ **ALLOW**",
  "x": 4860,
  "y": 1500,
  "width": 560,
  "height": 210,
  "color": "5"
},
{
  "id": "node-implicit-deny",
  "type": "text",
  "text": "## No effective Allow\n沒有有效 Allow\n→ **Implicit Deny 隱含拒絕**",
  "x": 5540,
  "y": 1500,
  "width": 560,
  "height": 220
}
```

- [ ] **Step 5: Add policy-input and outcome edges**

```json
{"id":"edge-identity-eval","fromNode":"node-identity-policy","fromSide":"top","toNode":"node-policy-eval","toSide":"bottom"},
{"id":"edge-resource-eval","fromNode":"node-resource-policy","fromSide":"top","toNode":"node-policy-eval","toSide":"bottom"},
{"id":"edge-boundary-eval","fromNode":"node-boundary","fromSide":"top","toNode":"node-policy-eval","toSide":"bottom"},
{"id":"edge-session-eval","fromNode":"node-session-policy","fromSide":"top","toNode":"node-policy-eval","toSide":"bottom"},
{"id":"edge-scp-eval","fromNode":"node-scp","fromSide":"top","toNode":"node-policy-eval","toSide":"bottom"},
{"id":"edge-rcp-eval","fromNode":"node-rcp","fromSide":"top","toNode":"node-policy-eval","toSide":"bottom"},
{"id":"edge-eval-deny","fromNode":"node-policy-eval","fromSide":"bottom","toNode":"node-explicit-deny","toSide":"top","label":"any applicable Explicit Deny"},
{"id":"edge-eval-allow","fromNode":"node-policy-eval","fromSide":"bottom","toNode":"node-effective-allow","toSide":"top","label":"Allow + all ceilings permit"},
{"id":"edge-eval-implicit","fromNode":"node-policy-eval","fromSide":"bottom","toNode":"node-implicit-deny","toSide":"top","label":"otherwise"}
```

- [ ] **Step 6: Run the validator and confirm GREEN**

Expected: PASS with no forbidden study-layer text.

- [ ] **Step 7: Commit**

```powershell
git add -- 'scripts/validate-saa-request-canvas.ps1' 'Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas'
git commit -m "feat: map AWS policy sources and outcomes"
```

---

### Task 5: Validate Graph Integrity and Perform Obsidian Visual QA

**Files:**
- Modify only if QA finds a defect: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas`
- Test: `scripts/validate-saa-request-canvas.ps1`

**Interfaces:**
- Consumes: completed canvas from Tasks 1–4.
- Produces: verified architecture that opens cleanly and reads left to right at normal Obsidian zoom.

- [ ] **Step 1: Run the complete automated validator**

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts\validate-saa-request-canvas.ps1
```

Expected: one `PASS:` line and no warnings or errors.

- [ ] **Step 2: Run an independent JSON and edge count check**

```powershell
$path = 'Knowledge\Professionals\AWS SAA-C03\01 Dashboard\AWS Request and Authorization Architecture.canvas'
$canvas = Get-Content -Raw -LiteralPath $path | ConvertFrom-Json
$nodeIds = @($canvas.nodes.id)
$missing = @($canvas.edges | Where-Object { $_.fromNode -notin $nodeIds -or $_.toNode -notin $nodeIds })
if ($missing.Count) { throw "Broken edges: $($missing.id -join ', ')" }
[pscustomobject]@{
    Nodes = $canvas.nodes.Count
    Edges = $canvas.edges.Count
    Groups = @($canvas.nodes | Where-Object type -eq 'group').Count
    BrokenEdges = $missing.Count
} | ConvertTo-Json
```

Expected:

```json
{
  "Nodes": 31,
  "Edges": 25,
  "Groups": 4,
  "BrokenEdges": 0
}
```

- [ ] **Step 3: Open the canvas in Obsidian**

Open:

```text
Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas
```

Visually confirm:

- Zone 1 scenarios do not overlap.
- Zone 2 reads left to right without crossing the credential branch.
- Zone 3 clearly looks like credential acquisition feeding the provider, not a mandatory STS step inside every request.
- Zone 4 policy nodes feed evaluation and do not appear inside the network request.
- English terms appear before Traditional Chinese.
- No Zone 5 or study-status content is present.

- [ ] **Step 4: Correct only observed layout defects**

If a node overlaps, change only its `x`, `y`, `width`, or `height`. Do not alter approved wording or add new scope.

- [ ] **Step 5: Re-run automated validation after visual corrections**

Run the validator and independent JSON check again.

Expected: PASS; `Nodes: 31`, `Edges: 25`, `Groups: 4`, `BrokenEdges: 0`.

- [ ] **Step 6: Review the final diff**

```powershell
git diff --check
git diff -- 'Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas' 'scripts/validate-saa-request-canvas.ps1'
```

Expected: no whitespace errors; diff contains only the canvas and its validator.

- [ ] **Step 7: Commit final visual adjustments if any**

```powershell
git add -- 'Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS Request and Authorization Architecture.canvas' 'scripts/validate-saa-request-canvas.ps1'
git commit -m "fix: polish AWS request canvas layout"
```

Skip this commit only when Step 4 made no changes.

