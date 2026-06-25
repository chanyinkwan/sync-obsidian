# sync-vault.ps1 — auto-commit and push the Obsidian vault.
# Run by Windows Task Scheduler on weekdays at 17:00 (see register-sync-task.ps1).

$ErrorActionPreference = 'Stop'

# Vault is the parent of this script's folder.
$VaultPath = Split-Path -Parent $PSScriptRoot
Set-Location $VaultPath

# Log to scripts/sync-vault.log so scheduled runs leave a trail.
$LogFile = Join-Path $PSScriptRoot 'sync-vault.log'
function Log($msg) {
    $line = "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $msg
    Add-Content -Path $LogFile -Value $line -Encoding utf8
    Write-Host $line
}

try {
    # Stage everything.
    & git add -A

    # Nothing staged? Then there's nothing to push.
    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Log "No changes to commit."
        exit 0
    }

    $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
    & git commit -m "Auto-sync $stamp" | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "git commit failed (exit $LASTEXITCODE)" }

    & git push origin main
    if ($LASTEXITCODE -ne 0) { throw "git push failed (exit $LASTEXITCODE)" }

    Log "Pushed: Auto-sync $stamp"
}
catch {
    Log "ERROR: $_"
    exit 1
}
