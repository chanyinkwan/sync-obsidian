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

$nodes = @($canvas.nodes)
$edges = @($canvas.edges)
$nodeIds = @($nodes | ForEach-Object { $_.id })
$edgeIds = @($edges | ForEach-Object { $_.id })

if ($nodeIds.Count -ne 35) {
    throw "Expected 35 nodes; found $($nodeIds.Count)"
}
if ($edgeIds.Count -ne 29) {
    throw "Expected 29 edges; found $($edgeIds.Count)"
}
if (@($nodes | Where-Object { $_.type -eq 'group' }).Count -ne 4) {
    throw 'Canvas must contain exactly four zone groups'
}
if (@($nodeIds | Where-Object { [string]::IsNullOrWhiteSpace($_) }).Count) {
    throw 'Every node must have a non-empty ID'
}
if (@($edgeIds | Where-Object { [string]::IsNullOrWhiteSpace($_) }).Count) {
    throw 'Every edge must have a non-empty ID'
}
if (($nodeIds | Sort-Object -Unique).Count -ne $nodeIds.Count) {
    throw 'Duplicate node ID found'
}
if (($edgeIds | Sort-Object -Unique).Count -ne $edgeIds.Count) {
    throw 'Duplicate edge ID found'
}

$nodeSet = @{}
foreach ($id in $nodeIds) {
    $nodeSet[$id] = $true
}
foreach ($edge in $edges) {
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
$groupLabels = @($nodes | Where-Object { $_.type -eq 'group' } | ForEach-Object { $_.label })
foreach ($label in $requiredGroups) {
    if ($groupLabels -notcontains $label) {
        throw "Missing required group: $label"
    }
}

$allText = @($nodes | ForEach-Object { "$($_.text) $($_.label)" }) -join "`n"

$requiredText = @(
    'Customer 客戶',
    'Employee 員工',
    'Federated user 聯合身份使用者',
    'Operator 操作人員',
    'Human intent 人類意圖',
    'Client 用戶端',
    'AWS SDK — Software Development Kit',
    'Credential provider 憑證提供者',
    'SigV4 request signing 請求簽署',
    'AWS service AWS 服務',
    'Request context 請求情境',
    'Policy evaluation 政策評估',
    'IAM Role via instance profile',
    'AWS/EC2 assumes the role',
    'STS creates an AppRole assumed-role session and issues temporary credentials',
    'IMDS exposes rotating credentials',
    'SDK credential provider **obtains and caches**',
    'SDK performs SigV4 signing locally',
    'Amazon S3 authenticates the signed request',
    'Principal = the identity represented by the signing credentials',
    'Contains **Principal + Action + Resource + Conditions**',
    'If IAM-user access keys sign instead, the Principal is that IAM user',
    'IAM service itself is never the Principal',
    'Access key ID',
    'Secret access key',
    'Session token',
    'Not every API request creates a new STS session',
    'Identity-based policy 身份型政策',
    'Resource-based policy 資源型政策',
    'Permissions boundary 權限邊界',
    'Session policy 工作階段政策',
    'SCP — Service Control Policy',
    'RCP — Resource Control Policy',
    'Applicable Explicit Deny',
    'Applicable Allow + ceilings permit',
    'No effective Allow',
    'Policies do not travel inside the request',
    'SCP and RCP do not grant permissions'
)
foreach ($term in $requiredText) {
    if ($allText -notmatch [regex]::Escape($term)) {
        throw "Missing required architecture term: $term"
    }
}

$forbiddenStudyText = @(
    'Zone 5',
    'mastery status',
    'flashcard anatomy',
    'readiness tracking',
    'Dataview',
    'learned',
    'weak',
    'untouched'
)
foreach ($term in $forbiddenStudyText) {
    if ($allText -match [regex]::Escape($term)) {
        throw "Architecture-only canvas contains forbidden study-layer text: $term"
    }
}

$simplifiedChineseTerms = @(
    '软件',
    '开发',
    '临时',
    '凭证',
    '请求',
    '评估',
    '权限',
    '边界',
    '服务',
    '用户',
    '签署',
    '认证',
    '策略',
    '隐含',
    '明确',
    '实例',
    '访问',
    '资源配置'
)
foreach ($term in $simplifiedChineseTerms) {
    if ($allText.Contains($term)) {
        throw "Simplified Chinese term found: $term"
    }
}

function Get-NodeById {
    param([string]$Id)
    $match = @($nodes | Where-Object { $_.id -eq $Id })
    if ($match.Count -ne 1) {
        throw "Expected exactly one node with ID: $Id"
    }
    return $match[0]
}

function Assert-Edge {
    param(
        [string]$FromNode,
        [string]$ToNode
    )
    if (-not @($edges | Where-Object {
        $_.fromNode -eq $FromNode -and $_.toNode -eq $ToNode
    }).Count) {
        throw "Missing required edge: $FromNode -> $ToNode"
    }
}

$backboneIds = @(
    'node-human-intent',
    'node-client',
    'node-sdk',
    'node-credential-provider',
    'node-sigv4',
    'node-aws-service',
    'node-request-context',
    'node-policy-eval'
)
for ($i = 0; $i -lt ($backboneIds.Count - 1); $i++) {
    $from = Get-NodeById -Id $backboneIds[$i]
    $to = Get-NodeById -Id $backboneIds[$i + 1]
    if ([double]$from.x -ge [double]$to.x) {
        throw "Backbone is not left-to-right: $($from.id) -> $($to.id)"
    }
    Assert-Edge -FromNode $from.id -ToNode $to.id
}

$credentialChain = @(
    'node-iam-role',
    'node-instance-profile',
    'node-ec2-assumes-role',
    'node-sts-session',
    'node-temporary-credentials',
    'node-imds',
    'node-credential-provider',
    'node-sigv4',
    'node-aws-service'
)
for ($i = 0; $i -lt ($credentialChain.Count - 1); $i++) {
    Assert-Edge -FromNode $credentialChain[$i] -ToNode $credentialChain[$i + 1]
}
Assert-Edge -FromNode 'node-iam-user-alternative' -ToNode 'node-credential-provider'
Assert-Edge -FromNode 'node-principal-model' -ToNode 'node-request-context'

$policySources = @(
    'node-identity-policy',
    'node-resource-policy',
    'node-boundary',
    'node-session-policy',
    'node-scp',
    'node-rcp'
)
foreach ($sourceId in $policySources) {
    Assert-Edge -FromNode $sourceId -ToNode 'node-policy-eval'
}
foreach ($outcomeId in @('node-explicit-deny', 'node-effective-allow', 'node-implicit-deny')) {
    Assert-Edge -FromNode 'node-policy-eval' -ToNode $outcomeId
}

function Assert-Contained {
    param(
        [string]$GroupId,
        [string[]]$ChildIds
    )
    $group = Get-NodeById -Id $GroupId
    foreach ($childId in $ChildIds) {
        $child = Get-NodeById -Id $childId
        $inside = (
            [double]$child.x -ge [double]$group.x -and
            [double]$child.y -ge [double]$group.y -and
            ([double]$child.x + [double]$child.width) -le ([double]$group.x + [double]$group.width) -and
            ([double]$child.y + [double]$child.height) -le ([double]$group.y + [double]$group.height)
        )
        if (-not $inside) {
            throw "Node $childId is outside group $GroupId"
        }
    }
}

function Assert-NoNodeOverlap {
    param([string[]]$Ids)
    for ($i = 0; $i -lt $Ids.Count; $i++) {
        $a = Get-NodeById -Id $Ids[$i]
        for ($j = $i + 1; $j -lt $Ids.Count; $j++) {
            $b = Get-NodeById -Id $Ids[$j]
            $overlaps = -not (
                ([double]$a.x + [double]$a.width) -le [double]$b.x -or
                ([double]$b.x + [double]$b.width) -le [double]$a.x -or
                ([double]$a.y + [double]$a.height) -le [double]$b.y -or
                ([double]$b.y + [double]$b.height) -le [double]$a.y
            )
            if ($overlaps) {
                throw "Layout overlap: $($a.id) and $($b.id)"
            }
        }
    }
}

$humanIds = @('node-customer-01', 'node-employee-02', 'node-federated-03', 'node-operator-04')
$credentialIds = @(
    'node-iam-role',
    'node-instance-profile',
    'node-ec2-assumes-role',
    'node-sts-session',
    'node-temporary-credentials',
    'node-imds',
    'node-principal-model',
    'node-iam-user-alternative',
    'node-credential-cadence'
)
$policyIds = @(
    'node-identity-policy',
    'node-resource-policy',
    'node-boundary',
    'node-session-policy',
    'node-scp',
    'node-rcp',
    'node-policies-not-request',
    'node-explicit-deny',
    'node-effective-allow',
    'node-implicit-deny'
)

Assert-Contained -GroupId 'grp-human-pov-01' -ChildIds $humanIds
Assert-Contained -GroupId 'grp-request-path-02' -ChildIds $backboneIds
Assert-Contained -GroupId 'grp-credentials-03' -ChildIds $credentialIds
Assert-Contained -GroupId 'grp-policies-04' -ChildIds $policyIds

Assert-NoNodeOverlap -Ids $humanIds
Assert-NoNodeOverlap -Ids $backboneIds
Assert-NoNodeOverlap -Ids $credentialIds
Assert-NoNodeOverlap -Ids $policyIds

Write-Output "PASS: $CanvasPath"
