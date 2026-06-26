# sync-vault.ps1 — auto-commit and push the Obsidian vault.
# Run by Windows Task Scheduler on weekdays at 17:00 (see register-sync-task.ps1).

# Vault is the parent of this script's folder.
$VaultPath = Split-Path -Parent $PSScriptRoot

# Log to scripts/sync-vault.log so scheduled runs leave a trail.
$LogFile = Join-Path $PSScriptRoot 'sync-vault.log'
function Log($msg) {
    $line = "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $msg
    Add-Content -Path $LogFile -Value $line -Encoding utf8
    Write-Host $line
}

try {
    Set-Location -Path $VaultPath -ErrorAction Stop

    # NOTE: git prints harmless notices (e.g. "LF will be replaced by CRLF") to
    # stderr. We capture each command's output and judge success by exit code
    # ONLY ($LASTEXITCODE) — never by the presence of stderr text. That keeps a
    # cosmetic warning from being mistaken for a real failure.

    $out = & git add -A 2>&1
    if ($LASTEXITCODE -ne 0) { throw "git add failed: $out" }

    # Nothing staged? Then there's nothing to push.
    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Log "No changes to commit."
        exit 0
    }

    $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
    $out = & git commit -m "Auto-sync $stamp" 2>&1
    if ($LASTEXITCODE -ne 0) { throw "git commit failed: $out" }

    $out = & git push origin main 2>&1
    if ($LASTEXITCODE -ne 0) { throw "git push failed: $out" }

    Log "Pushed: Auto-sync $stamp"
}
catch {
    Log "ERROR: $_"
    exit 1
}
