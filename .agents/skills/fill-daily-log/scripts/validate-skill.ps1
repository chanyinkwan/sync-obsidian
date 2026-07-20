$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '../../../..')).Path
$aDir = Join-Path $root '.agents/skills/fill-daily-log'
$cDir = Join-Path $root '.claude/skills/fill-daily-log'
$skill = Get-Content -LiteralPath (Join-Path $aDir 'SKILL.md') -Raw
if ($skill -match '\\.claude\\projects|\\.Codex\\projects|timestamp-derived|fall back to chat') { throw 'Runtime path or chat-derived timing remains.' }
foreach ($needle in @('EVIDENCE-REGISTER.md','untimed','provider','backfill','same-day','sync-takeaways')) { if (-not $skill.Contains($needle)) { throw "Missing contract: $needle" } }
$words = (($skill -split '\s+') | Where-Object { $_ }).Count
if ($words -gt 500) { throw "SKILL.md is $words words; limit 500." }
$files=@('SKILL.md','EVALS.md','EVIDENCE-REGISTER.md','fixtures/day-close.json','fixtures/timezone-boundary.json','fixtures/empty-day.json','scripts/validate-skill.ps1')
foreach($file in $files){$a=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $aDir $file)).Hash;$c=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $cDir $file)).Hash;if($a-ne$c){throw "Mirror mismatch: $file"}}
"PASS fill-daily-log contract ($words words; 6 evals)"
