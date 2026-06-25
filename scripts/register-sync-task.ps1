# register-sync-task.ps1 — install the weekday-5pm scheduled task for vault sync.
# Run once: powershell -ExecutionPolicy Bypass -File scripts\register-sync-task.ps1

$ErrorActionPreference = 'Stop'

$TaskName   = 'ObsidianVaultSync'
$ScriptPath = Join-Path $PSScriptRoot 'sync-vault.ps1'

$Action = New-ScheduledTaskAction `
    -Execute 'powershell.exe' `
    -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$ScriptPath`""

# Weekdays at 17:00.
$Trigger = New-ScheduledTaskTrigger `
    -Weekly `
    -DaysOfWeek Monday, Tuesday, Wednesday, Thursday, Friday `
    -At '5:00PM'

# Run whether logged in or not is avoided (needs stored password); run on logon session.
# StartWhenAvailable catches up if the PC was off at 17:00.
$Settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -DontStopOnIdleEnd `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 10)

Register-ScheduledTask `
    -TaskName $TaskName `
    -Action $Action `
    -Trigger $Trigger `
    -Settings $Settings `
    -Description 'Commits and pushes the Obsidian Career Journey vault to GitHub on weekdays at 5pm.' `
    -Force | Out-Null

Write-Host "Registered scheduled task '$TaskName' (weekdays at 5:00 PM)."
