$ErrorActionPreference='Stop'
$root=(Resolve-Path (Join-Path $PSScriptRoot '../../../..')).Path
$aDir=Join-Path $root '.agents/skills/plan-daily-ops';$cDir=Join-Path $root '.claude/skills/plan-daily-ops'
$skill=Get-Content -LiteralPath (Join-Path $aDir 'SKILL.md') -Raw
$template=Get-Content -LiteralPath (Join-Path $root 'Template/Daily Operations Template.md') -Raw
foreach($needle in @('Template/Daily Operations Template.md','scheduled < today','Work ≤3','Hub ≤2','carry-over consumes','second day','daily-plan:start','Kanban / Agenda')){if(-not $skill.Contains($needle)){throw "Missing contract: $needle"}}
if($skill -match 'scheduled`? ≤ today|most recent existing daily note|#### 📥 Backlog'){throw 'Old resurrection/template/backlog rule remains.'}
foreach($marker in @('<!-- daily-plan:start -->','<!-- daily-plan:end -->')){if(-not $template.Contains($marker)){throw "Template missing $marker"}}
$words=(($skill -split '\s+')|Where-Object{$_}).Count;if($words-gt500){throw "SKILL.md is $words words; limit 500."}
$files=@('SKILL.md','EVALS.md','fixtures/selection.json','fixtures/rerun.md','scripts/validate-skill.ps1');foreach($f in $files){$a=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $aDir $f)).Hash;$c=(Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $cDir $f)).Hash;if($a-ne$c){throw "Mirror mismatch: $f"}}
"PASS plan-daily-ops contract ($words words; 8 evals)"
