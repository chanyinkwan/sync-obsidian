---
type: project
status: active
owner: me
stakeholders:
domain: Personal Ops / Knowledge System
due:
tags:
  - project
---
# Career Hub Management

## Goal / my scope
- 管理整個 Career Journey vault 嘅 infrastructure 同 automation：sync、backup、scripts、workflow 維護。
- 確保 knowledge base 穩定運作，減少 manual operational friction（對齊 20% strategic blank space 嘅原則）。
- **治理雙軌平衡**：唔好讓防守端（Huawei）吃光時間，保住進攻端（Track A）有重量。

## 🎯 North-Star Goal
- **[[Dual-Track Development Goal]]** — 雙軌平衡 ｜ 90 日 milestone：Ship CV Generator M2 引擎（Due 2026-09-23）｜ 每週 R/Y/G 記分板。

## Source meetings
- 

## Materials and deliverables
- How-to: [[Auto-Sync Vault to GitHub (Scheduled Script)]]
- Scripts: `scripts/sync-vault.ps1`, `scripts/register-sync-task.ps1`
- Repo: https://github.com/chanyinkwan/sync-obsidian/

## Tasks in this project (auto)
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## Done
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```
