---
type: how-to
status: active
project: "[[Career Hub Management]]"
domain: Personal Ops / Automation
tags:
  - how-to
  - automation
  - git
---
# Auto-Sync Vault to GitHub (Scheduled Script)

> **一句講晒：** 部 PC 會喺**平日（一至五）下午 5:00** 自動將成個 vault `commit` 同 `push` 上 GitHub，唔使我自己手動做。

關聯 project：[[Career Hub Management]]
Repo：https://github.com/chanyinkwan/sync-obsidian/

---

## 1. 做緊咩 (What it does)
個 scheduled task 會跑一個 PowerShell script，順序做以下嘢：
1. `git add -A` — stage 晒所有 changes。
2. 如果**冇任何改動** → 直接 skip，唔會做空 commit。
3. 有改動 → `git commit`，message 係 `Auto-sync <日期 時間>`。
4. `git push origin main` — push 上 GitHub。
5. 每次跑完都會寫一行落 log file。

---

## 2. 相關檔案 (Files)
| 檔案 | 用途 |
|---|---|
| `scripts/sync-vault.ps1` | 真正做 commit + push 嘅 script |
| `scripts/register-sync-task.ps1` | 一次性 installer，註冊個 scheduled task |
| `scripts/sync-vault.log` | 每次跑嘅紀錄（成功 / error 都會喺度）|

**Task 名：** `ObsidianVaultSync`
**時間：** 平日（Mon–Fri）下午 5:00 PM

---

## 3. 點樣 check 佢有冇跑 (How to verify)
**方法 A — 睇 log：** 直接開 `scripts/sync-vault.log`，最底嗰幾行就係最近嘅紀錄。
- `Pushed: Auto-sync ...` = 成功
- `No changes to commit.` = 嗰次冇嘢改，正常
- `ERROR: ...` = 出事，睇下面 Troubleshooting

**方法 B — Task Scheduler (PowerShell)：**
```powershell
Get-ScheduledTaskInfo -TaskName 'ObsidianVaultSync' |
  Select-Object LastRunTime, LastTaskResult, NextRunTime
```
- `LastTaskResult = 0` → 上次成功。
- 任何其他數字 → 上次有問題。

---

## 4. 常用操作 (Common operations)

**而家即刻手動跑一次（test）：**
```powershell
& "C:\Users\k84450674\Desktop\Career Journey\scripts\sync-vault.ps1"
```
> ⚠️ 如果見到 `running scripts is disabled on this system`（execution policy `Restricted`）：呢個只係**手動**跑先會撞到，**唔影響** 5pm 自動 task（task 自己用咗 `-ExecutionPolicy Bypass`）。一次過整好：
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
> ```
> （`RemoteSigned` = 准跑自己本機嘅 script，但 block 網上未簽名嘅。set 完開**新** PowerShell window 再跑。）
> 唔想改 policy 嘅話，可以逐次用：`powershell -ExecutionPolicy Bypass -File "scripts\sync-vault.ps1"`

**改時間**（例如改去 6:00 PM）：
開 `scripts/register-sync-task.ps1`，改 `-At '5:00PM'` 嗰行，然後**re-run** 個 installer：
```powershell
powershell -ExecutionPolicy Bypass -File "scripts\register-sync-task.ps1"
```
（`-Force` 會覆蓋舊 task，唔會整重複。）

**暫停 / 重新啟用：**
```powershell
Disable-ScheduledTask -TaskName 'ObsidianVaultSync'   # 暫停
Enable-ScheduledTask  -TaskName 'ObsidianVaultSync'   # 重開
```

**完全移除：**
```powershell
Unregister-ScheduledTask -TaskName 'ObsidianVaultSync' -Confirm:$false
```

---

## 5. 重要前提 (Conditions — 要記住)
- ⚠️ **部 PC 要開機 + 我要 login 咗**，個 task 先會喺 5pm 跑（佢喺我嘅 user session 入面行，冇存密碼）。
- ✅ 如果 5pm 嗰陣部機熄咗，`StartWhenAvailable` 會喺下次開機補跑。
- ⚠️ **Git auth 要 non-interactive**：credentials 已經 cache 咗喺 Windows Credential Manager。如果 GitHub 要求重新登入，scheduled run 會靜雞雞 fail → 去睇 log。

---

## 6. Troubleshooting
| 症狀                      | 可能原因            | 點做                                            |
| ----------------------- | --------------- | --------------------------------------------- |
| Log 有 `git push failed` | GitHub auth 過期  | 手動 `git push` 一次，重新 login，credential 會再 cache |
| 5pm 冇跑                  | 部機熄咗 / 冇 login  | 開機後睇 `NextRunTime`，或手動跑 script                |
| `LastTaskResult` 唔係 0   | script 出 error  | 開 `sync-vault.log` 睇最後一行                      |
| Push 咗但 GitHub 見唔到      | push 咗去錯 branch | 確認 `git status` 喺 `main`                      |

---

## 7. 注意 (Security note)
個 repo 而家係 **public**，入面有公司 internal / 同事個人資料 / 財務 PDF。如果日後想轉 private：
```powershell
gh repo edit chanyinkwan/sync-obsidian --visibility private
```
（注意：已經 push 咗嘅 content 之前已經公開過。）
