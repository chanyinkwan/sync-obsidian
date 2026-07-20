$ErrorActionPreference='Stop'
$root=(Resolve-Path (Join-Path $PSScriptRoot '../../../..')).Path
$aDir=Join-Path $root '.agents/skills/sync-takeaways';$cDir=Join-Path $root '.claude/skills/sync-takeaways'
$skill=Get-Content -LiteralPath (Join-Path $aDir 'SKILL.md') -Raw
foreach($needle in @('EVIDENCE-REGISTER.md','maximum three','candidate Skill','candidate Constant','SCQA candidate','待拍板')){if(-not $skill.Contains($needle)){throw "Missing contract: $needle"}}
if($skill.Contains('#scqa-feed') -or $skill -match 'open every'){throw 'Dead tag or eager note scan remains.'}
$words=(($skill -split '\s+')|Where-Object{$_}).Count;if($words-gt500){throw "SKILL.md is $words words; limit 500."}
$files=@('SKILL.md','EVALS.md','fixtures/candidates.json','scripts/validate-skill.ps1');foreach($f in $files){$a=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $aDir $f)).Hash;$c=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $cDir $f)).Hash;if($a-ne$c){throw "Mirror mismatch: $f"}}
"PASS sync-takeaways contract ($words words; 6 evals)"
