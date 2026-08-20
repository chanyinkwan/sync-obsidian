# Amazon MBB Zero-Drop-Ball Operating Control Tower Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a personal, offline Obsidian control tower that routes Amazon MBB recurring reviews to authoritative online sources and turns only amber/red insights into traceable TaskNotes.

**Architecture:** `Amazon GTM Management` remains the parent business scope while a new `Amazon GTM Operation` TaskNotes project owns BAU controls. Static Markdown notes hold the source registry and scenario rules; four recurring TaskNotes surface through the existing Daily Operations／TaskNotes system; a monthly exception log stores decision screenshots and handoff evidence without copying routine KPI data.

**Tech Stack:** Obsidian Markdown, TaskNotes 4.12.3 frontmatter and RRULE recurrence, Dataview project task tables, existing `TaskNotes/Views/Operation.base` and Daily Operations workflow.

**Spec:** `docs/superpowers/specs/2026-08-20-amazon-mbb-zero-drop-ball-control-tower-design.md`

## Global Constraints

- Amazon MBB only; Router is excluded.
- Operational grain is `SKU × EU Aggregate` and `SKU × UK`.
- DE／FR／IT／ES country prices are inspected only inside the EU monthly-pricing workflow; they do not create permanent country records.
- Online files and systems remain authoritative; do not create a KPI database or a new Excel control tower.
- Do not copy routine KPI values into Obsidian.
- Green checks complete the recurring occurrence without a log, screenshot, or new task.
- Formal recommendation／decision entries contain a source link and screenshot.
- Red business risks are handled the same working day; amber risks by the next scheduled review.
- Handoff is not green until Decision Owner, next action, and deadline are all explicit.
- Follow-up TaskNotes close only after result verification.
- Live-price checks, Buy Box／listing／availability monitoring, advertising, launch, EOL／圈量, selection, and other bounded projects are excluded.
- All BAU action and follow-up TaskNotes use `projects: ["[[Amazon GTM Operation]]"]`.
- All user-facing headings, checklists, instructions, and field labels use Traditional Chinese; established names and acronyms such as Amazon, MBB, EU, UK, SO, SI, DOS, PO, CPFR, TaskNotes, and Source ID remain unchanged.
- Use existing TaskNotes and Daily Operations surfaces; do not change `.obsidian/plugins/tasknotes/data.json`, `TaskNotes/Views/Operation.base`, or `Template/Daily Operations Template.md`.
- Use `apply_patch` for every Markdown edit.

---

## File Map

| Path | Responsibility |
|---|---|
| `Projects/Amazon GTM Management.md` | Parent entry; links to the BAU control tower without owning its tasks |
| `Projects/Amazon GTM Operation.md` | New BAU project home, usage rules, control-note links, active/done task views |
| `Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Source Index.md` | Single registry for S01–S11 source links, exact lookup instructions, owner, cadence, and link verification |
| `Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Operations Scenario Matrix.md` | Static green／amber／red rules, micro-actions, sources, and closure conditions for scenarios 9.1–9.9 |
| `Template/Amazon MBB Monthly Operations Log Template.md` | Reusable exception-only monthly log structure |
| `Operation Note/Amazon MBB Operations/2026-08 Amazon MBB Operations Log.md` | First monthly decision／recommendation record |
| `Tasks/Amazon MBB 每日控制檢查.md` | Weekday check for due, overdue, and waiting follow-ups only |
| `Tasks/Amazon MBB 每週 CPFR 檢查.md` | Weekly SO, forecast, DOS, PO, and inbound review |
| `Tasks/Amazon MBB 雙週交付與 SI 檢查.md` | Fortnightly delivery, ETA, and SI review |
| `Tasks/Amazon MBB 月度定價與促銷檢查.md` | Monthly guidance, approval, margin, and promotion-DOS review |
| `Tasks/Write in sell out data - Amazon.md` | Historical task; recurrence retired to prevent duplication |
| `docs/superpowers/specs/2026-08-20-amazon-mbb-zero-drop-ball-control-tower-design.md` | Final status changed from “not yet built” to “implemented” after verification |

---

### Task 1: Create the BAU project boundary and parent navigation

**Files:**
- Create: `Projects/Amazon GTM Operation.md`
- Modify: `Projects/Amazon GTM Management.md`

**Interfaces:**
- Consumes: Existing project frontmatter and Dataview task-table convention from `Template/Project Template.md`.
- Produces: `[[Amazon GTM Operation]]`, the canonical project link used by every recurring and follow-up TaskNote.

- [ ] **Step 1: Verify the new project does not already exist**

Run:

```powershell
Test-Path -LiteralPath 'Projects\Amazon GTM Operation.md'
```

Expected: `False`.

- [ ] **Step 2: Create `Projects/Amazon GTM Operation.md`**

Use `apply_patch` with this frontmatter and section contract:

```markdown
---
type: project
status: active
owner: me
stakeholders:
  - "[[Li Qinghua 00861267]]"
  - "[[yubeifei y00663235]]"
domain: Amazon MBB BAU Operations
due:
tags:
  - project
---
# Amazon GTM Operation

## 目標／我的範圍
供個人使用的 Amazon MBB 週期性營運 Zero-Drop-Ball 控制塔。線上系統仍是唯一真源；本專案只保存導航、判斷規則、例外證據及後續任務。

## 營運邊界
- 納入：MBB；EU Aggregate＋UK；SO／Forecast；DOS／Inventory；PO／Delivery／SI；月度定價；促銷定價＋DOS。
- 排除：Router；即時商店健康；廣告；上市；EOL／圈量；選品；其他有終點的一次性專案。

## 每日入口
- 使用現有 Daily Operations／TaskNotes 檢視；不要把本頁作為第二個每日儀表板。

## 控制筆記
- [[Amazon MBB Source Index]]
- [[Amazon MBB Operations Scenario Matrix]]
- [[2026-08 Amazon MBB Operations Log]]

## 例外流程
週期檢查 → Amber／Red 洞察 → 截圖＋月度紀錄 → 行動／後續 TaskNote → 決策負責人＋下一步＋期限 → 驗證結果 → 關閉。

## 何時建立 TaskNote
- 需要修正、通知、回覆或再次檢查：在 `[[Amazon GTM Operation]]` 建立 TaskNote。
- 全部 Green 且沒有下一步：只完成 recurring occurrence，不建立 TaskNote。
- 有明確成果、期限，並涉及多步驟跨團隊協作：另建 bounded project，不放入 BAU 控制塔。

## 本專案任務（自動）
```dataview
TABLE WITHOUT ID file.link AS "Task", status AS "Status", priority AS "Priority", due AS "Due", scheduled AS "Scheduled"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## 已完成
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Closed"
FROM #task
WHERE contains(projects, this.file.link) AND status = "done"
SORT due DESC
```
```

- [ ] **Step 3: Link the child operation project from the parent**

In `Projects/Amazon GTM Management.md`, insert immediately after the five-work-area table:

```markdown
## 營運系統

- [[Amazon GTM Operation]] — personal BAU control tower for MBB recurring checks, source navigation, exception decisions, and follow-up TaskNotes.
- Launch, EOL／圈量, selection, and other bounded work remain separate projects under this parent scope.
```

Do not move existing historical tasks or modify the five-work-area table.

- [ ] **Step 4: Verify project links and task ownership wording**

Run:

```powershell
$operation = Get-Content -Raw -LiteralPath 'Projects\Amazon GTM Operation.md'
$parent = Get-Content -Raw -LiteralPath 'Projects\Amazon GTM Management.md'
[pscustomobject]@{
  OperationProject = $operation -match '^# Amazon GTM Operation' -and $operation -match 'Amazon MBB BAU Operations'
  ParentLink = $parent -match '\[\[Amazon GTM Operation\]\]'
  ChildTaskFilter = $operation -match 'contains\(projects, this\.file\.link\)'
}
```

Expected: all three values are `True`.

- [ ] **Step 5: Commit the project boundary**

```powershell
git add -- 'Projects/Amazon GTM Operation.md' 'Projects/Amazon GTM Management.md'
git commit -m "feat: add Amazon MBB operations project boundary"
```

---

### Task 2: Build the single-source navigation registry

**Files:**
- Create: `Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Source Index.md`

**Interfaces:**
- Consumes: Source inventory S01–S11 from spec §6.
- Produces: Stable headings `S01` through `S11`, referenced by the Scenario Matrix and recurring TaskNotes.

- [ ] **Step 1: Verify no existing Source Index conflicts**

Run:

```powershell
Test-Path -LiteralPath 'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Source Index.md'
```

Expected: `False`.

- [ ] **Step 2: Create the Source Index with stable anchors**

Use `apply_patch`. Start with:

```markdown
---
type: reference
status: active
date: 2026-08-20
account_or_project: "[[Amazon GTM Operation]]"
tags:
  - reference
  - amazon
  - mbb
  - operations
---
# Amazon MBB 資料來源索引

> 線上來源仍是唯一真源。本頁只記錄去哪裡、看甚麼、誰維護及何時更新；不知道的URL或Owner刻意留空。

## 使用方式
1. 從週期 TaskNote 或情境矩陣打開指定 Source ID。
2. 使用「精確位置／篩選條件」找到欄位。
3. 在線上完成判斷，不把正常 KPI 搬進 Obsidian。
4. 只有形成建議／決策時才截圖並寫入月度營運紀錄。
```

Create headings `### S01 — FineBI` through `### S11 — iPrice`. Every heading must contain exactly these labels:

```markdown
- **URL:**
- **業務問題:**
- **精確位置／篩選條件:**
- **範圍:**
- **負責人:**
- **更新頻率:**
- **最後驗證日期:**
```

Populate the known values exactly from spec §6.2:

| ID | Business question / lookup |
|---|---|
| S01 | FineBI; previous-week Actual SO by SKU/week; weekly, normally Monday |
| S02 | `AMZ泛欧 路由&MBB上市进展.xlsx`; Forecast, 3+3, DOS, SKU operating status; weekly rolling six months |
| S03 | AMZ Delivery Plan／Delivery Tracker; PO, production, in-transit, ETA, actual SI; biweekly |
| S04 | `MBB SI volume&Rev Tracker.xlsx`; SI units, revenue, BP, actual variance; monthly/BP review |
| S05 | Inventory online table; Amazon inventory, NL hub, confirmed inbound; formal name and exact location unknown |
| S06 | `2026年 亚马逊MBB价格及销毛 v3.xlsx`; run/small promo/major promo price, margin, cost; monthly |
| S07 | `泛欧亚马逊月度价格指引.xlsx`; next-month first/second-half guidance; monthly |
| S08 | Amazon GTM final email; final approved price and country on-top; monthly/event-driven |
| S09 | Promotion Tracker; event date, promotion window, forecast; before promotion |
| S10 | `AMZ MBB量价模拟 V4.xlsx`; SO simulation, volume-price plan, BSR, freight; forecast/pricing review |
| S11 | iPrice; commercial authorization, margin, price floor; authorization events |

Leave `URL`, unknown `Owner`, and S05 unknown lookup fields empty. Do not add Amazon live pages, SellerSprite, Lingxing, or advertising dashboards.

Add ## 已知缺口 listing: S05 formal name/URL/exact location; all shared-file URLs; the post-董淼 Amazon channel GTM owner; PO expected-date/quantity field location; whether EU Aggregate and UK DOS are directly available; formal DOS/forecast/SI thresholds; and the unstable monthly price-meeting date. State that these gaps do not block version one.

- [ ] **Step 3: Validate IDs, labels, and exclusions**

Run:

```powershell
$text = Get-Content -Raw -LiteralPath 'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Source Index.md'
$ids = [regex]::Matches($text, '(?m)^### (S\d{2}) —') | ForEach-Object { $_.Groups[1].Value }
[pscustomobject]@{
  SourceCount = $ids.Count
  UniqueSources = (@($ids | Sort-Object -Unique).Count -eq 11)
  CompleteRange = ((1..11 | ForEach-Object { 'S{0:d2}' -f $_ }) -join ',') -eq (($ids | Sort-Object) -join ',')
  NoExcludedSources = $text -notmatch 'SellerSprite|Lingxing|Buy Box|live page|advertising dashboard'
}
```

Expected: `SourceCount = 11`; all Boolean values `True`.

- [ ] **Step 4: Commit the Source Index**

```powershell
git add -- 'Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Source Index.md'
git commit -m "feat: add Amazon MBB source index"
```

---

### Task 3: Build the scenario-by-scenario decision matrix

**Files:**
- Create: `Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Operations Scenario Matrix.md`

**Interfaces:**
- Consumes: `[[Amazon MBB Source Index]]` anchors S01–S11 and spec §§7–9.
- Produces: The static checklist used by all four recurring TaskNotes.

- [ ] **Step 1: Verify the Scenario Matrix does not already exist**

Run:

```powershell
Test-Path -LiteralPath 'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Operations Scenario Matrix.md'
```

Expected: `False`.

- [ ] **Step 2: Create the shared operating protocol**

Use `apply_patch` with this frontmatter and opening structure:

```markdown
---
type: reference
status: active
date: 2026-08-20
account_or_project: "[[Amazon GTM Operation]]"
tags:
  - reference
  - amazon
  - mbb
  - operations
---
# Amazon MBB 營運情境矩陣

> 用途： 我在哪裡 → 是否安全 → Where do I look → What do I do → When can I close.

## 健康狀態模型
- Business Green：不建立action或record。
- Business Amber：在下一次scheduled review前處理。
- Business Red：同一工作日處理。
- Control Red：尚未確認Decision Owner。
- Control Amber：Owner已知情，但下一步或期限仍缺失。
- Control Green：Decision Owner、下一步及期限全部確認。

## Zero-Drop-Ball 流程
1. 開啟scenario指定的Source IDs。
2. 套用EU Aggregate或UK filter。
3. 把線上數據與參考門檻比較。
4. Green：完成recurring occurrence，不建立其他記錄。
5. Amber／Red：截圖並加入Monthly Operations Log entry。
6. 寫明影響及建議，拉入正確stakeholders。
7. 在[[Amazon GTM Operation]]下建立Action／Follow-up TaskNote。
8. 確認Decision Owner、下一步及期限。
9. 驗證結果後才關閉。
```

- [ ] **Step 3: Add the nine exact scenario cards**

Create headings `## 9.1` through `## 9.9` with these names and source links:

| 標題 | 情境名稱 | Source links |
|---|---|---|
| 9.1 | SO 與 Forecast 偏差 | `[[Amazon MBB Source Index#S01 — FineBI]]`, `#S02` |
| 9.2 | Forecast 更新狀態 | `#S01`, `#S02` |
| 9.3 | 低 DOS／缺貨風險 | `#S02`, `#S03`, `#S05` |
| 9.4 | 高 DOS／滯銷風險 | `#S02`, `#S03`, `#S05`, `#S09` |
| 9.5 | PO 預計日期／數量偏差 | `#S02`, `#S03` |
| 9.6 | 交付／inbound ETA 延誤 | `#S02`, `#S03` |
| 9.7 | SI 與 Plan 偏差 | `#S03`, `#S04` |
| 9.8 | 月度價格指引／審批漂移 | `#S06`, `#S07`, `#S08`, `#S11` |
| 9.9 | 促銷價格與 DOS 準備度風險 | `#S02`, `#S05`, `#S06`, `#S08`, `#S09`, `#S11` |

For each scenario, copy the approved content from spec §9 under these fixed subheadings:

```markdown
### 我在哪裡
### 去哪裡查看
### 是否安全
### 要做甚麼
### 何時可以關閉
```

Preserve the exact approved thresholds:

- SO/Forecast: green ≤10%, amber 10–20%, red >20% or inbound coverage risk.
- Forecast freshness: green current six-month forecast; amber one review cycle late; red blocks supply decisions.
- Low DOS Coverage Buffer: green ≥2 weeks, amber 0–2, red <0.
- High DOS: green ≤13 weeks, amber >13–26, red >26 or rising for four weeks without a plan.
- PO quantity variance: green ≤10%, amber 10–20%, red >20% or expected date passed with DOS impact.
- Delivery Buffer: green ≥14 days, amber 0–14, red late or no confirmed ETA.
- SI variance: green ≤10%, amber 10–20%, red >20% or corrupts SO/inventory judgment.
- Price guidance: green guidance/final authorization aligned; amber on-top pending; red below floor or unauthorized.
- Promotion: green approved plus DOS buffer ≥2 weeks; amber tag risk or buffer 0–2; red unauthorized floor break, stockout risk, or discounting an out-of-stock SKU.

Label each numeric threshold `Experience`, `Derived`, or `Confirmed` exactly as the spec does. Include the promotion rules: run price about 30 days, offer no more than about two weeks, DE/UK about 15%, FR/IT/ES about 5%, and no low-price promotion when out of stock.

After the nine cards, add ## 邊界與錯誤規則 with the exact spec §14 behavior: broken URL is updated in Source Index rather than becoming a scenario; unknown owner stays blank; conflicting sources make Business Health at least amber; confirmed inbound changing to tentative triggers immediate buffer recalculation; threshold overrides record value/reason/date/scope; acknowledgment alone leaves Control Health amber; a decided-but-unexecuted or unverified item stays open.

- [ ] **Step 4: Validate scenario coverage and source references**

Run:

```powershell
$text = Get-Content -Raw -LiteralPath 'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Operations Scenario Matrix.md'
$scenarioCount = ([regex]::Matches($text, '(?m)^## 9\.[1-9] ')).Count
$required = @('我在哪裡','去哪裡查看','是否安全','要做甚麼','何時可以關閉')
$missingLabels = @($required | Where-Object { ([regex]::Matches($text, '(?m)^### ' + [regex]::Escape($_) + '$')).Count -ne 9 })
$sourceRefs = [regex]::Matches($text, 'Amazon MBB Source Index#(S\d{2})') | ForEach-Object { $_.Groups[1].Value }
[pscustomobject]@{
  ScenarioCount = $scenarioCount
  MissingRepeatedLabels = $missingLabels -join ', '
  InvalidSourceRefs = @($sourceRefs | Where-Object { $_ -notmatch '^S(0[1-9]|1[01])$' }).Count
  NoExcludedScenario = $text -notmatch '(?m)^## .*Advertising|(?m)^## .*Buy Box|(?m)^## .*Launch|(?m)^## .*EOL'
}
```

Expected: `ScenarioCount = 9`; `MissingRepeatedLabels` empty; `InvalidSourceRefs = 0`; `NoExcludedScenario = True`.

- [ ] **Step 5: Commit the Scenario Matrix**

```powershell
git add -- 'Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Operations Scenario Matrix.md'
git commit -m "feat: add Amazon MBB scenario decision matrix"
```

---

### Task 4: Add the exception-only monthly log

**Files:**
- Create: `Template/Amazon MBB Monthly Operations Log Template.md`
- Create: `Operation Note/Amazon MBB Operations/2026-08 Amazon MBB Operations Log.md`

**Interfaces:**
- Consumes: `[[Amazon MBB Operations Scenario Matrix]]` and `[[Amazon MBB Source Index]]`.
- Produces: Stable monthly headings that follow-up TaskNotes can link back to.

- [ ] **Step 1: Verify both files are absent**

Run:

```powershell
@(
  'Template\Amazon MBB Monthly Operations Log Template.md',
  'Operation Note\Amazon MBB Operations\2026-08 Amazon MBB Operations Log.md'
) | ForEach-Object { [pscustomobject]@{ Path = $_; Exists = Test-Path -LiteralPath $_ } }
```

Expected: both `Exists` values are `False`.

- [ ] **Step 2: Create the monthly-log template**

Use `apply_patch` to create:

```markdown
---
type: operations-log
status: active
month: {{date:YYYY-MM}}
account_or_project: "[[Amazon GTM Operation]]"
tags:
  - amazon
  - mbb
  - operations-log
---
# {{date:YYYY-MM}} Amazon MBB 營運紀錄

> 只記錄例外。全部 Green 時只需完成 recurring TaskNote occurrence。

## 未關閉例外

## 決策紀錄

<!-- Copy only when an amber/red insight produces a recommendation, decision, or follow-up.
### YYYY-MM-DD — [情境] [SKU] [EU/UK]

- 來源:
- 截圖:
- 洞察:
- 業務健康: 🟡 / 🔴
- 控制健康: 🔴 / 🟡 / 🟢
- 建議:
- 已通知 Stakeholders:
- 決策 Owner:
- 已確認下一步:
- 期限:
- Follow-up TaskNote:
- 結果／關閉依據:
-->
```

- [ ] **Step 3: Create the August 2026 log from the contract**

Create `Operation Note/Amazon MBB Operations/2026-08 Amazon MBB Operations Log.md` with fixed `month: 2026-08`, title `# 2026-08 Amazon MBB 營運紀錄`, the same exception-only rule, empty `未關閉例外` and `決策紀錄` sections, and the same commented decision-entry block.

Screenshots are pasted inline using the vault's current Obsidian attachment behavior; do not create a separate evidence database or attachment registry.

Add this instruction below the entry template: if an exception crosses a month boundary, the new month entry links back to the original heading; do not create a permanent SKU note.

- [ ] **Step 4: Validate the template and current log**

Run:

```powershell
$paths = @(
  'Template\Amazon MBB Monthly Operations Log Template.md',
  'Operation Note\Amazon MBB Operations\2026-08 Amazon MBB Operations Log.md'
)
$required = @('來源:','截圖:','洞察:','業務健康:','控制健康:','建議:','決策 Owner:','已確認下一步:','期限:','Follow-up TaskNote:','結果／關閉依據:')
$results = foreach ($path in $paths) {
  $text = Get-Content -Raw -LiteralPath $path
  [pscustomobject]@{
    Path = $path
    MissingFields = (@($required | Where-Object { $text -notmatch [regex]::Escape($_) }) -join ', ')
    ExceptionOnly = $text -match '只記錄例外'
  }
}
$results
```

Expected: both `MissingFields` values empty and both `ExceptionOnly` values `True`.

- [ ] **Step 5: Commit the log contract and first log**

```powershell
git add -- 'Template/Amazon MBB Monthly Operations Log Template.md' 'Operation Note/Amazon MBB Operations/2026-08 Amazon MBB Operations Log.md'
git commit -m "feat: add Amazon MBB monthly exception log"
```

---

### Task 5: Seed the four recurring TaskNotes and retire the duplicate SO recurrence

**Files:**
- Create: `Tasks/Amazon MBB 每日控制檢查.md`
- Create: `Tasks/Amazon MBB 每週 CPFR 檢查.md`
- Create: `Tasks/Amazon MBB 雙週交付與 SI 檢查.md`
- Create: `Tasks/Amazon MBB 月度定價與促銷檢查.md`
- Modify: `Tasks/Write in sell out data - Amazon.md`

**Interfaces:**
- Consumes: `[[Amazon GTM Operation]]`, `[[Amazon MBB Source Index]]`, `[[Amazon MBB Operations Scenario Matrix]]`, and `[[2026-08 Amazon MBB Operations Log]]`.
- Produces: The only four recurring Amazon MBB BAU controls surfaced by the existing TaskNotes/Daily Operations system.

- [ ] **Step 1: Verify the four new task files are absent and the old SO recurrence exists**

Run:

```powershell
$new = @(
  'Tasks\Amazon MBB 每日控制檢查.md',
  'Tasks\Amazon MBB 每週 CPFR 檢查.md',
  'Tasks\Amazon MBB 雙週交付與 SI 檢查.md',
  'Tasks\Amazon MBB 月度定價與促銷檢查.md'
)
$new | ForEach-Object { [pscustomobject]@{ Path = $_; Exists = Test-Path -LiteralPath $_ } }
Select-String -LiteralPath 'Tasks\Write in sell out data - Amazon.md' -Pattern '^recurrence:'
```

Expected: all new files `False`; old task prints one recurrence line.

- [ ] **Step 2: Create the weekday control task**

Create `Tasks/Amazon MBB 每日控制檢查.md` with:

```markdown
---
status: todo
priority: mid
scheduled: 2026-08-21
recurrence: DTSTART:20260821;FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
recurrence_anchor: scheduled
dateCreated: 2026-08-20T00:00:00+01:00
dateModified: 2026-08-20T00:00:00+01:00
projects:
  - "[[Amazon GTM Operation]]"
contexts:
  - "@ops"
timeEstimate: 10
tags:
  - task
eisenhower: q2
---

## 完成標準
所有到期、逾期及等待中的 Amazon MBB follow-up都有有效下一步；不打開全部KPI來源。

## 檢查清單
- [ ] Review open tasks under [[Amazon GTM Operation]].
- [ ] Red business risks have same-working-day action.
- [ ] Amber risks have action before their next scheduled review.
- [ ] Every handoff has Decision Owner, next action, and deadline.
- [ ] If there is no follow-up, complete this occurrence without writing a log.
```

- [ ] **Step 3: Create the weekly CPFR task**

Create `Tasks/Amazon MBB 每週 CPFR 檢查.md` using the same frontmatter contract, with `scheduled: 2026-08-24`, `recurrence: DTSTART:20260824;FREQ=WEEKLY;BYDAY=MO`, `timeEstimate: 45`, and `eisenhower: q2`.

Its checklist must link:

- S01／S02 for Actual SO, rolling four-week variance, forecast freshness, 3+3, and six-month refresh.
- S02／S03／S05 for EU and UK DOS, confirmed inbound, low/high DOS.
- S02／S03 for PO expected date and quantity variance.
- Scenario Matrix 9.1–9.5.
- Green completion rule and amber/red screenshot → August log → follow-up TaskNote flow.

- [ ] **Step 4: Create the fortnightly delivery/SI task**

Create `Tasks/Amazon MBB 雙週交付與 SI 檢查.md` with `scheduled: 2026-08-25`, `recurrence: DTSTART:20260825;FREQ=WEEKLY;INTERVAL=2;BYDAY=TU`, `timeEstimate: 30`, and `eisenhower: q2`.

Its checklist must link S02／S03／S04, Scenario Matrix 9.6–9.7, and require:

- Current milestone and confirmed ETA.
- Delivery Buffer against required available date.
- Actual SI vs Plan.
- Update to the forecast/DOS judgment when timing changes.
- 只記錄例外，並執行後續追蹤流程。

- [ ] **Step 5: Create the monthly price/promotion task**

Create `Tasks/Amazon MBB 月度定價與促銷檢查.md` with `scheduled: 2026-09-01`, `recurrence: DTSTART:20260901;FREQ=MONTHLY;BYMONTHDAY=1`, `timeEstimate: 45`, `eisenhower: q2`, and context `@pricing`.

The first checklist item must say: when the actual monthly price meeting date is known, move that occurrence to the preceding working day. Remaining items link S02／S05／S06／S07／S08／S09／S11 and Scenario Matrix 9.8–9.9, then check:

- Guidance, final approval, margin, and authorization alignment.
- DE／FR／IT／ES country prices within the EU source view; log only exceptions under EU Aggregate.
- UK pricing separately.
- Promotion price logic and promotion DOS buffer.
- Pending Decision Owner, next action, and deadline.

- [ ] **Step 6: Retire the old duplicate weekly SO recurrence**

In `Tasks/Write in sell out data - Amazon.md`:

- Remove only `recurrence:` and `recurrence_anchor:`.
- Keep its `status: done`, dates, history, and body unchanged.
- Add this line immediately below the closing frontmatter delimiter:

```markdown
> 歷史任務；Recurring control已移至 [[Amazon MBB 每週 CPFR 檢查]]。
```

- [ ] **Step 7: Validate recurrence, project assignment, and deduplication**

Run:

```powershell
$paths = @(
  'Tasks\Amazon MBB 每日控制檢查.md',
  'Tasks\Amazon MBB 每週 CPFR 檢查.md',
  'Tasks\Amazon MBB 雙週交付與 SI 檢查.md',
  'Tasks\Amazon MBB 月度定價與促銷檢查.md'
)
$rows = foreach ($path in $paths) {
  $text = Get-Content -Raw -LiteralPath $path
  [pscustomobject]@{
    Path = $path
    HasRecurrence = $text -match '(?m)^recurrence:'
    CorrectProject = $text -match '\[\[Amazon GTM Operation\]\]'
    HasTaskTag = $text -match '(?ms)^tags:\s*\r?\n\s+- task'
    HasGreenRule = $text -match '(?i)green|沒有follow-up|without writing a log'
  }
}
$old = Get-Content -Raw -LiteralPath 'Tasks\Write in sell out data - Amazon.md'
$rows
[pscustomobject]@{
  OldRecurrenceRemoved = $old -notmatch '(?m)^recurrence:'
  SupersessionLink = $old -match '\[\[Amazon MBB 每週 CPFR 檢查\]\]'
}
```

Expected: every new-task Boolean is `True`; both old-task Booleans are `True`.

- [ ] **Step 8: Commit the recurring controls**

```powershell
git add -- 'Tasks/Amazon MBB 每日控制檢查.md' 'Tasks/Amazon MBB 每週 CPFR 檢查.md' 'Tasks/Amazon MBB 雙週交付與 SI 檢查.md' 'Tasks/Amazon MBB 月度定價與促銷檢查.md' 'Tasks/Write in sell out data - Amazon.md'
git commit -m "feat: seed Amazon MBB recurring controls"
```

---

### Task 6: Run end-to-end verification and mark the spec implemented

**Files:**
- Modify: `docs/superpowers/specs/2026-08-20-amazon-mbb-zero-drop-ball-control-tower-design.md`

**Interfaces:**
- Consumes: All files produced in Tasks 1–5.
- Produces: A verified, internally linked first version and an implementation-status update in the approved spec.

- [ ] **Step 1: Verify every required file exists**

Run:

```powershell
$required = @(
  'Projects\Amazon GTM Operation.md',
  'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Source Index.md',
  'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Operations Scenario Matrix.md',
  'Template\Amazon MBB Monthly Operations Log Template.md',
  'Operation Note\Amazon MBB Operations\2026-08 Amazon MBB Operations Log.md',
  'Tasks\Amazon MBB 每日控制檢查.md',
  'Tasks\Amazon MBB 每週 CPFR 檢查.md',
  'Tasks\Amazon MBB 雙週交付與 SI 檢查.md',
  'Tasks\Amazon MBB 月度定價與促銷檢查.md'
)
$missing = @($required | Where-Object { -not (Test-Path -LiteralPath $_) })
[pscustomobject]@{ Required = $required.Count; Missing = $missing -join ', ' }
```

Expected: `Required = 9`; `Missing` empty.

- [ ] **Step 2: Verify the approved scope did not leak**

Run:

```powershell
$controlFiles = @(
  'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Source Index.md',
  'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Operations Scenario Matrix.md',
  'Tasks\Amazon MBB 每日控制檢查.md',
  'Tasks\Amazon MBB 每週 CPFR 檢查.md',
  'Tasks\Amazon MBB 雙週交付與 SI 檢查.md',
  'Tasks\Amazon MBB 月度定價與促銷檢查.md'
)
$joined = ($controlFiles | ForEach-Object { Get-Content -Raw -LiteralPath $_ }) -join "`n"
[pscustomobject]@{
  NoRouterControl = $joined -notmatch '(?im)^## .*router|(?im)^- \[ \].*router'
  NoAdvertisingControl = $joined -notmatch '(?im)^## .*advert|(?im)^- \[ \].*advert'
  NoStoreControl = $joined -notmatch '(?im)^## .*Buy Box|(?im)^- \[ \].*Buy Box|live-price'
  NoProjectControl = $joined -notmatch '(?im)^## .*launch|(?im)^## .*EOL|(?im)^- \[ \].*圈量'
}
```

Expected: all values `True`. The project boundary note is intentionally not scanned because it names exclusions as documentation.

- [ ] **Step 3: Verify internal wiki links resolve to canonical note names**

Run:

```powershell
$expect = @{
  'Amazon GTM Operation' = 'Projects\Amazon GTM Operation.md'
  'Amazon MBB Source Index' = 'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Source Index.md'
  'Amazon MBB Operations Scenario Matrix' = 'Knowledge\Source\Life at Huawei\Amazon Hand Over\Amazon MBB Operations Scenario Matrix.md'
  '2026-08 Amazon MBB Operations Log' = 'Operation Note\Amazon MBB Operations\2026-08 Amazon MBB Operations Log.md'
}
$expect.GetEnumerator() | ForEach-Object {
  [pscustomobject]@{ Link = $_.Key; Exists = Test-Path -LiteralPath $_.Value }
}
```

Expected: all `Exists` values `True`.

- [ ] **Step 4: Perform the manual Obsidian acceptance pass**

Open Obsidian and verify:

1. `Amazon GTM Management` opens `Amazon GTM Operation`.
2. The new project opens Source Index, Scenario Matrix, and August Log.
3. Each recurring TaskNote appears in TaskNotes and links to the correct source/scenario sections.
4. The weekday task appears in the existing Daily Operations planning flow without a new dashboard embed.
5. Completing one test occurrence does not create a log automatically.
6. Creating a temporary follow-up through TaskNotes can assign `[[Amazon GTM Operation]]` and link back to an August Log heading.

Delete only the temporary test follow-up after verification; do not delete a real task or occurrence.

- [ ] **Step 5: Update the spec status**

Use `apply_patch` to change:

```markdown
Status: approved design, not yet built
```

to:

```markdown
Status: implemented and verified
```

- [ ] **Step 6: Run final Git checks**

```powershell
git diff --check
git status --short
```

Expected: no whitespace errors; status shows only the spec status edit plus any known unrelated user changes.

- [ ] **Step 7: Commit the verified implementation status**

```powershell
git add -- 'docs/superpowers/specs/2026-08-20-amazon-mbb-zero-drop-ball-control-tower-design.md'
git commit -m "docs: mark Amazon MBB control tower implemented"
```
