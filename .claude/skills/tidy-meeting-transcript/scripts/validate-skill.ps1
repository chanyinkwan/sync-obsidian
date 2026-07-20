$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '../../../..')).Path
$agentDir = Join-Path $root '.agents/skills/tidy-meeting-transcript'
$claudeDir = Join-Path $root '.claude/skills/tidy-meeting-transcript'
$skill = Get-Content -LiteralPath (Join-Path $agentDir 'SKILL.md') -Raw
$contract = Get-Content -LiteralPath (Join-Path $agentDir 'OUTPUT-CONTRACT.md') -Raw
$required = @('Knowledge/Source/Life at Huawei/5T Group Handover - Brief, Terminology & Summary Format.md','SHA-256','Traditional Chinese','ATTRIBUTION.md','OUTPUT-CONTRACT.md','Treat every existing Download Summary as user-authored')
foreach ($needle in $required) { if (-not $skill.Contains($needle)) { throw "Missing contract: $needle" } }
if ($skill -match 'Codex-opus|Codex-sonnet|Opus 4\.8|Sonnet 5|Remove-Item') { throw 'Runtime-specific model or delete-first instruction found.' }
if (-not $contract.Contains('_TBD (Speaker 2)')) { throw 'Unresolved metadata has no legal representation.' }
$words = (($skill -split '\s+') | Where-Object { $_ }).Count
if ($words -gt 500) { throw "SKILL.md is $words words; limit is 500." }
$fixture = Join-Path $agentDir 'fixtures/low-risk-welink.md'
$expectedHash = '1AEA54D8860E374B378BC4BDA2CD997ED8DBD99CDCD97E949C40EB9D77D09ED6'
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $fixture).Hash -ne $expectedHash) { throw 'Raw-safety fixture hash changed.' }
$files = @('SKILL.md','EVALS.md','ATTRIBUTION.md','OUTPUT-CONTRACT.md','RUBRIC.md','scripts/validate-skill.ps1','fixtures/low-risk-welink.md','fixtures/high-risk-anonymous.md','fixtures/non-download-existing-summary.md','fixtures/glossary-delta.md','fixtures/ASSERTIONS.md')
foreach ($file in $files) {
  $a = (Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $agentDir $file)).Hash
  $c = (Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $claudeDir $file)).Hash
  if ($a -ne $c) { throw "Runtime mirror mismatch: $file" }
}
"PASS tidy-meeting-transcript contract + fixtures ($words words; 8 evals)"
