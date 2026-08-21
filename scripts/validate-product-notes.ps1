param(
    [Parameter(Mandatory = $false)]
    [switch]$RequireComplete
)

$ErrorActionPreference = 'Stop'

$VaultRoot = Split-Path -Parent $PSScriptRoot
$ProductsDir = Join-Path $VaultRoot 'Products'
$ProfilesPath = Join-Path $ProductsDir 'SKU Lifecycle Profiles.md'

$ValidLifecycle = @('prelaunch', 'ramp', 'live-core', 'drain', 'hold')
$ValidTier = @('core', 'maintain', 'drain', 'watch')
$RequiredFields = @('type', 'model', 'family', 'markets', 'lifecycle',
    'lifecycle_reviewed', 'priority_tier', 'watch', 'strategy',
    'decision_owner', 'projects', 'tags')
$RequiredHeadings = @('## 現況', '## 控制輪廓', '## 盯點',
    '## Open items', '## 產品本體', '## 變更日誌')
$ExpectedModels = @('H153-381', 'E6888-982', 'B320-323', 'B636-336',
    'E5586-336', 'B530-336', 'B535-230', 'E5783-230b', 'E5785-320b',
    'H155-383', 'H165-383', 'H173-383', 'E6898')

$issues = New-Object System.Collections.Generic.List[string]

function Get-Frontmatter {
    param([string]$Text)
    $map = @{}
    if ($Text -notmatch '(?s)^---\r?\n(.*?)\r?\n---') { return $null }
    $currentKey = $null
    foreach ($line in ($Matches[1] -split "`r?`n")) {
        if ($line -match '^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$') {
            $currentKey = $Matches[1]
            $map[$currentKey] = $Matches[2].Trim()
        }
        elseif ($null -ne $currentKey -and $line -match '^\s+-\s*(.+)$') {
            $item = $Matches[1].Trim()
            if ([string]::IsNullOrWhiteSpace($map[$currentKey])) {
                $map[$currentKey] = $item
            }
            else {
                $map[$currentKey] = "$($map[$currentKey]); $item"
            }
        }
    }
    return $map
}

if (-not (Test-Path -LiteralPath $ProductsDir)) {
    $issues.Add('Products/ directory does not exist')
}
if (-not (Test-Path -LiteralPath $ProfilesPath)) {
    $issues.Add('Products/SKU Lifecycle Profiles.md is missing')
}
else {
    $profileText = Get-Content -Raw -LiteralPath $ProfilesPath
    foreach ($value in $ValidLifecycle) {
        if ($profileText -notmatch [regex]::Escape($value)) {
            $issues.Add("Profiles note does not define lifecycle value '$value'")
        }
    }
}

$noteFiles = @()
if (Test-Path -LiteralPath $ProductsDir) {
    $noteFiles = @(Get-ChildItem -LiteralPath $ProductsDir -Filter '*.md' |
        Where-Object { $_.Name -ne 'SKU Lifecycle Profiles.md' })
}

$seenModels = @()
foreach ($file in $noteFiles) {
    $name = $file.Name
    $text = Get-Content -Raw -LiteralPath $file.FullName
    $fm = Get-Frontmatter -Text $text
    if ($null -eq $fm) {
        $issues.Add("${name}: no frontmatter block")
        continue
    }
    foreach ($field in $RequiredFields) {
        if (-not $fm.ContainsKey($field) -or [string]::IsNullOrWhiteSpace($fm[$field])) {
            $issues.Add("${name}: missing or empty field '$field'")
        }
    }
    if ($fm['type'] -ne 'product') {
        $issues.Add("${name}: type must be 'product'")
    }
    if ($fm.ContainsKey('lifecycle') -and $ValidLifecycle -notcontains $fm['lifecycle']) {
        $issues.Add("${name}: lifecycle '$($fm['lifecycle'])' not in closed vocabulary")
    }
    if ($fm.ContainsKey('lifecycle_uk') -and $ValidLifecycle -notcontains $fm['lifecycle_uk']) {
        $issues.Add("${name}: lifecycle_uk '$($fm['lifecycle_uk'])' not in closed vocabulary")
    }
    if ($fm.ContainsKey('priority_tier') -and $ValidTier -notcontains $fm['priority_tier']) {
        $issues.Add("${name}: priority_tier '$($fm['priority_tier'])' not in closed vocabulary")
    }
    if ($fm.ContainsKey('lifecycle_reviewed') -and
        $fm['lifecycle_reviewed'] -notmatch '^\d{4}-\d{2}-\d{2}$') {
        $issues.Add("${name}: lifecycle_reviewed must be YYYY-MM-DD")
    }
    if ($fm.ContainsKey('model')) {
        $seenModels += $fm['model']
        if ($fm['model'] -ne [System.IO.Path]::GetFileNameWithoutExtension($name)) {
            $issues.Add("${name}: model field does not match filename")
        }
    }
    foreach ($heading in $RequiredHeadings) {
        if ($text -notmatch [regex]::Escape($heading)) {
            $issues.Add("${name}: missing section '$heading'")
        }
    }
    if ($text -notmatch 'contains\(projects, this\.file\.link\)') {
        $issues.Add("${name}: Open items dataview query is missing")
    }
}

if ($RequireComplete) {
    foreach ($model in $ExpectedModels) {
        if ($seenModels -notcontains $model) {
            $issues.Add("Complete check: note for '$model' is missing")
        }
    }
    foreach ($extra in ($seenModels | Where-Object { $ExpectedModels -notcontains $_ })) {
        $issues.Add("Complete check: unexpected note '$extra'")
    }

    $links = @{
        'Tasks/H173首銷.md'                = 'H173-383'
        'Tasks/H173 Sales Monitoring.md'   = 'H173-383'
        'Tasks/E6888圈量.md'               = 'E6888-982'
        'Tasks/Super MiFi (E6898) 上市.md' = 'E6898'
        'Tasks/E6898 樣機運抵英國.md'       = 'E6898'
        'Tasks/德國 B636 流量優化.md'       = 'B636-336'
    }
    foreach ($taskPath in $links.Keys) {
        $full = Join-Path $VaultRoot $taskPath
        if (-not (Test-Path -LiteralPath $full)) {
            $issues.Add("Complete check: task '$taskPath' not found")
            continue
        }
        $taskText = Get-Content -Raw -LiteralPath $full
        if ($taskText -notmatch [regex]::Escape("[[$($links[$taskPath])]]")) {
            $issues.Add("Complete check: '$taskPath' does not link [[$($links[$taskPath])]]")
        }
    }

    $basePath = Join-Path $VaultRoot 'TaskNotes/Views/Products.base'
    if (-not (Test-Path -LiteralPath $basePath)) {
        $issues.Add('Complete check: TaskNotes/Views/Products.base is missing')
    }

    $mgmt = Get-Content -Raw -LiteralPath (Join-Path $VaultRoot 'Projects/Amazon GTM Management.md')
    if ($mgmt -notmatch '## SKU 狀態') {
        $issues.Add('Complete check: Amazon GTM Management.md has no SKU 狀態 section')
    }
    $ops = Get-Content -Raw -LiteralPath (Join-Path $VaultRoot 'Projects/Amazon GTM Operation.md')
    if ($ops -notmatch [regex]::Escape('[[SKU Lifecycle Profiles]]')) {
        $issues.Add('Complete check: Amazon GTM Operation.md does not link SKU Lifecycle Profiles')
    }
    $refresh = Join-Path $VaultRoot 'Tasks/SKU 狀態複核.md'
    if (-not (Test-Path -LiteralPath $refresh)) {
        $issues.Add('Complete check: Tasks/SKU 狀態複核.md is missing')
    }
}

if ($issues.Count -gt 0) {
    $issues | ForEach-Object { Write-Host "FAIL: $_" }
    throw "$($issues.Count) validation error(s)"
}

Write-Host "PASS: $($noteFiles.Count) product note(s) validated"
