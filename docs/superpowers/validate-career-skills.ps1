$ErrorActionPreference = 'Stop'
$validators = @(
  '.agents/skills/tidy-meeting-transcript/scripts/validate-skill.ps1',
  '.agents/skills/fill-daily-log/scripts/validate-skill.ps1',
  '.agents/skills/sync-takeaways/scripts/validate-skill.ps1',
  '.agents/skills/plan-daily-ops/scripts/validate-skill.ps1'
)
foreach ($validator in $validators) {
  & powershell -NoProfile -ExecutionPolicy Bypass -File $validator
  if ($LASTEXITCODE -ne 0) { throw "Validator failed: $validator" }
}
$skills = @('tidy-meeting-transcript','fill-daily-log','sync-takeaways','plan-daily-ops')
foreach ($skill in $skills) {
  $agent = ".agents/skills/$skill/SKILL.md"
  $claude = ".claude/skills/$skill/SKILL.md"
  $body = Get-Content -LiteralPath $agent -Raw
  if (-not $body.Contains('User-facing output defaults to Traditional Chinese')) { throw "Traditional-Chinese default missing: $skill" }
  if ((Get-FileHash -Algorithm SHA256 $agent).Hash -ne (Get-FileHash -Algorithm SHA256 $claude).Hash) { throw "Runtime mirror mismatch: $skill" }
}
$template = Get-Content -LiteralPath 'Template/Daily Operations Template.md' -Raw
if (([regex]::Matches($template,'<!-- daily-plan:start -->')).Count -ne 1 -or ([regex]::Matches($template,'<!-- daily-plan:end -->')).Count -ne 1) { throw 'Daily-plan markers must appear exactly once.' }
'PASS integrated career skills (28 evals; Traditional-Chinese default; runtime parity)'
