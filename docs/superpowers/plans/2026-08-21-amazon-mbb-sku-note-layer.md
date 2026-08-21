# Amazon MBB SKU Note Layer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a SKU object layer to the vault so that每個 Amazon MBB SKU 的生命週期、盯點與策略意圖有固定住所，並讓生命週期決定哪些週期檢查可以跳過。

**Architecture:** `Products/` 一 SKU 一筆記，frontmatter 帶封閉詞彙的 `lifecycle` 欄位；五個生命週期輪廓集中定義於 `Products/SKU Lifecycle Profiles.md`；SKU 筆記的 `## Open items` 以既有 dataview 模式自動反查 TaskNote，唯一手動連結方向是 Task → Product。一個 PowerShell 結構驗證器在每個任務結束時把 schema 規則變成可執行的 gate。

**Tech Stack:** Obsidian Markdown, TaskNotes frontmatter, Dataview, Obsidian Bases (`.base` YAML), PowerShell 5.1 驗證腳本。

**Spec:** `docs/superpowers/specs/2026-08-21-amazon-mbb-sku-note-layer-design.md`

## Global Constraints

- Amazon MBB only；Router 不納入本層。
- 不把 SO／DOS／價格等 KPI 讀數搬進 Obsidian。筆記只保存狀態、門檻與判斷。
- `lifecycle` 與 `lifecycle_uk` 只能取五個封閉值：`prelaunch`、`ramp`、`live-core`、`drain`、`hold`。渠道模式（直營／代理）不進這兩個欄位。
- `priority_tier` 只能取四個值：`core`、`maintain`、`drain`、`watch`。
- 只有以該 SKU 為主體的營運／專案 TaskNote 才建立連結；帶 `gate:` 欄位的學習任務永不連結。
- 手動連結方向只有一個：在 TaskNote 的 `projects:` 加入 SKU 連結。Product → Task 由 dataview 自動產生，不寫手動回連。
- 不修改 `Knowledge/Source/Life at Huawei/Amazon Hand Over/Amazon MBB Operations Scenario Matrix.md` 的任何門檻或流程。
- 不修改 `TaskNotes/Views/Operation.base`、`.obsidian/plugins/tasknotes/data.json`、Daily Operations 模板。
- 不建立第二個每日儀表板；`Products.base` 是月度視圖。
- 所有 user-facing 標題與欄位標籤使用繁體中文；Amazon、MBB、EU、UK、SKU、PD、DOS、buybox、MOQ、DT、BTS、TaskNotes 等既有名詞保持原樣。
- 每個任務以 `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1` 通過作為 gate。

---

## File Map

| Path | Responsibility |
|---|---|
| `scripts/validate-product-notes.ps1` | 結構驗證器：必填欄位、封閉詞彙、必要章節、完整性與接線檢查 |
| `Products/SKU Lifecycle Profiles.md` | 五個生命週期輪廓的唯一定義；決定每個 profile 要做與不做的檢查 |
| `Template/Product Note Template.md` | 新 SKU 筆記的可重用結構 |
| `Products/H173-383.md` | ramp 參考實作；其餘十二筆依此結構 |
| `Products/H153-381.md` 等十二筆 | 其餘 SKU 物件筆記 |
| `TaskNotes/Views/Products.base` | 依 lifecycle 分組的月度檢視，含 `isStale` 提示 |
| `Tasks/H173首銷.md` 等六筆 | `projects:` 補上 SKU 連結 |
| `Tasks/SKU 狀態複核.md` | 月度 recurring 複核任務 |
| `Projects/Amazon GTM Management.md` | 新增 `## SKU 狀態` 章節 |
| `Projects/Amazon GTM Operation.md` | 控制筆記加入 `[[SKU Lifecycle Profiles]]` |
| `Tasks/Amazon MBB Product Categorising.md`、`Tasks/Amazon Product Level Category Identification.md` | 指向本次建置並關閉 |
| `docs/superpowers/specs/2026-08-21-amazon-mbb-sku-note-layer-design.md` | Status 由 approved 改為 implemented |

---

## SKU Inventory Reference

十三筆筆記的權威清單。Task 2 與 Task 3 逐字使用此表。

| Note | family | markets | lifecycle | lifecycle_uk | priority_tier | decision_owner |
|---|---|---|---|---|---|---|
| `H153-381` | FWA CPE | [EU, UK] | hold | — | watch | `[[Zhang Xuan 00942107]]` |
| `E6888-982` | MiFi | [EU] | live-core | — | core | `[[yubeifei y00663235]]` |
| `B320-323` | FWA CPE | [EU, UK] | live-core | ramp | core | `[[Zhang Xuan 00942107]]` |
| `B636-336` | FWA CPE | [EU] | live-core | — | maintain | `[[Zhang Xuan 00942107]]` |
| `E5586-336` | MiFi | [EU] | live-core | — | watch | `[[Zhang Xuan 00942107]]` |
| `B530-336` | FWA CPE | [EU] | live-core | — | core | `[[Zhang Xuan 00942107]]` |
| `B535-230` | FWA CPE | [EU] | drain | — | drain | `[[Zhang Xuan 00942107]]` |
| `E5783-230b` | FWA CPE | [EU] | drain | — | drain | `[[Zhang Xuan 00942107]]` |
| `E5785-320b` | MiFi | [EU, UK] | hold | live-core | core | `[[Zhang Xuan 00942107]]` |
| `H155-383` | FWA CPE | [EU] | drain | — | drain | `[[Zhang Xuan 00942107]]` |
| `H165-383` | FWA CPE | [EU] | live-core | — | watch | `[[Zhang Xuan 00942107]]` |
| `H173-383` | FWA CPE | [EU, UK] | ramp | — | core | `[[Zhang Xuan 00942107]]` |
| `E6898` | MiFi | [EU, UK] | prelaunch | — | core | `[[Zhang Xuan 00942107]]` |

---

### Task 1: Validator and lifecycle profiles

**Files:**
- Create: `scripts/validate-product-notes.ps1`
- Create: `Products/SKU Lifecycle Profiles.md`

**Interfaces:**
- Consumes: nothing.
- Produces: `scripts/validate-product-notes.ps1` accepting optional switch `-RequireComplete`. Without the switch it validates whatever notes exist. With it, it additionally asserts the full 13-note inventory, the six task links, `TaskNotes/Views/Products.base`, the two integration edits, and `Tasks/SKU 狀態複核.md`. Exit code 0 = pass, throw = fail. Every later task runs it.

- [ ] **Step 1: Write the failing validator**

Create `scripts/validate-product-notes.ps1`:

```powershell
param(
    [Parameter(Mandatory = $false)]
    [switch]$RequireComplete
)

$ErrorActionPreference = 'Stop'

$VaultRoot = Split-Path -Parent $PSScriptRoot
$ProductsDir = Join-Path $VaultRoot 'Products'
$ProfilesPath = Join-Path $ProductsDir 'SKU Lifecycle Profiles.md'

$ValidLifecycle = @('prelaunch', 'ramp', 'live-core', 'drain', 'hold')
$ValidTier = @('core', 'maintain', 'drain', 'watch')
$RequiredFields = @('type', 'model', 'family', 'markets', 'lifecycle',
    'lifecycle_reviewed', 'priority_tier', 'watch', 'strategy',
    'decision_owner', 'projects', 'tags')
$RequiredHeadings = @('## 現況', '## 控制輪廓', '## 盯點',
    '## Open items', '## 產品本體', '## 變更日誌')
$ExpectedModels = @('H153-381', 'E6888-982', 'B320-323', 'B636-336',
    'E5586-336', 'B530-336', 'B535-230', 'E5783-230b', 'E5785-320b',
    'H155-383', 'H165-383', 'H173-383', 'E6898')

$issues = New-Object System.Collections.Generic.List[string]

function Get-Frontmatter {
    param([string]$Text)
    $map = @{}
    if ($Text -notmatch '(?s)^---\r?\n(.*?)\r?\n---') { return $null }
    foreach ($line in ($Matches[1] -split "`r?`n")) {
        if ($line -match '^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$') {
            $map[$Matches[1]] = $Matches[2].Trim()
        }
    }
    return $map
}

if (-not (Test-Path -LiteralPath $ProductsDir)) {
    $issues.Add('Products/ directory does not exist')
}
if (-not (Test-Path -LiteralPath $ProfilesPath)) {
    $issues.Add('Products/SKU Lifecycle Profiles.md is missing')
}
else {
    $profileText = Get-Content -Raw -LiteralPath $ProfilesPath
    foreach ($value in $ValidLifecycle) {
        if ($profileText -notmatch [regex]::Escape($value)) {
            $issues.Add("Profiles note does not define lifecycle value '$value'")
        }
    }
}

$noteFiles = @()
if (Test-Path -LiteralPath $ProductsDir) {
    $noteFiles = @(Get-ChildItem -LiteralPath $ProductsDir -Filter '*.md' |
        Where-Object { $_.Name -ne 'SKU Lifecycle Profiles.md' })
}

$seenModels = @()
foreach ($file in $noteFiles) {
    $name = $file.Name
    $text = Get-Content -Raw -LiteralPath $file.FullName
    $fm = Get-Frontmatter -Text $text
    if ($null -eq $fm) {
        $issues.Add("${name}: no frontmatter block")
        continue
    }
    foreach ($field in $RequiredFields) {
        if (-not $fm.ContainsKey($field) -or [string]::IsNullOrWhiteSpace($fm[$field])) {
            $issues.Add("${name}: missing or empty field '$field'")
        }
    }
    if ($fm['type'] -ne 'product') {
        $issues.Add("${name}: type must be 'product'")
    }
    if ($fm.ContainsKey('lifecycle') -and $ValidLifecycle -notcontains $fm['lifecycle']) {
        $issues.Add("${name}: lifecycle '$($fm['lifecycle'])' not in closed vocabulary")
    }
    if ($fm.ContainsKey('lifecycle_uk') -and $ValidLifecycle -notcontains $fm['lifecycle_uk']) {
        $issues.Add("${name}: lifecycle_uk '$($fm['lifecycle_uk'])' not in closed vocabulary")
    }
    if ($fm.ContainsKey('priority_tier') -and $ValidTier -notcontains $fm['priority_tier']) {
        $issues.Add("${name}: priority_tier '$($fm['priority_tier'])' not in closed vocabulary")
    }
    if ($fm.ContainsKey('lifecycle_reviewed') -and
        $fm['lifecycle_reviewed'] -notmatch '^\d{4}-\d{2}-\d{2}$') {
        $issues.Add("${name}: lifecycle_reviewed must be YYYY-MM-DD")
    }
    if ($fm.ContainsKey('model')) {
        $seenModels += $fm['model']
        if ($fm['model'] -ne [System.IO.Path]::GetFileNameWithoutExtension($name)) {
            $issues.Add("${name}: model field does not match filename")
        }
    }
    foreach ($heading in $RequiredHeadings) {
        if ($text -notmatch [regex]::Escape($heading)) {
            $issues.Add("${name}: missing section '$heading'")
        }
    }
    if ($text -notmatch 'contains\(projects, this\.file\.link\)') {
        $issues.Add("${name}: Open items dataview query is missing")
    }
}

if ($RequireComplete) {
    foreach ($model in $ExpectedModels) {
        if ($seenModels -notcontains $model) {
            $issues.Add("Complete check: note for '$model' is missing")
        }
    }
    foreach ($extra in ($seenModels | Where-Object { $ExpectedModels -notcontains $_ })) {
        $issues.Add("Complete check: unexpected note '$extra'")
    }

    $links = @{
        'Tasks/H173首銷.md'                = 'H173-383'
        'Tasks/H173 Sales Monitoring.md'   = 'H173-383'
        'Tasks/E6888圈量.md'               = 'E6888-982'
        'Tasks/Super MiFi (E6898) 上市.md' = 'E6898'
        'Tasks/E6898 樣機運抵英國.md'       = 'E6898'
        'Tasks/德國 B636 流量優化.md'       = 'B636-336'
    }
    foreach ($taskPath in $links.Keys) {
        $full = Join-Path $VaultRoot $taskPath
        if (-not (Test-Path -LiteralPath $full)) {
            $issues.Add("Complete check: task '$taskPath' not found")
            continue
        }
        $taskText = Get-Content -Raw -LiteralPath $full
        if ($taskText -notmatch [regex]::Escape("[[$($links[$taskPath])]]")) {
            $issues.Add("Complete check: '$taskPath' does not link [[$($links[$taskPath])]]")
        }
    }

    $basePath = Join-Path $VaultRoot 'TaskNotes/Views/Products.base'
    if (-not (Test-Path -LiteralPath $basePath)) {
        $issues.Add('Complete check: TaskNotes/Views/Products.base is missing')
    }

    $mgmt = Get-Content -Raw -LiteralPath (Join-Path $VaultRoot 'Projects/Amazon GTM Management.md')
    if ($mgmt -notmatch '## SKU 狀態') {
        $issues.Add('Complete check: Amazon GTM Management.md has no SKU 狀態 section')
    }
    $ops = Get-Content -Raw -LiteralPath (Join-Path $VaultRoot 'Projects/Amazon GTM Operation.md')
    if ($ops -notmatch [regex]::Escape('[[SKU Lifecycle Profiles]]')) {
        $issues.Add('Complete check: Amazon GTM Operation.md does not link SKU Lifecycle Profiles')
    }
    $refresh = Join-Path $VaultRoot 'Tasks/SKU 狀態複核.md'
    if (-not (Test-Path -LiteralPath $refresh)) {
        $issues.Add('Complete check: Tasks/SKU 狀態複核.md is missing')
    }
}

if ($issues.Count -gt 0) {
    $issues | ForEach-Object { Write-Host "FAIL: $_" }
    throw "$($issues.Count) validation error(s)"
}

Write-Host "PASS: $($noteFiles.Count) product note(s) validated"
```

- [ ] **Step 2: Run the validator to verify it fails**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: FAIL listing `Products/ directory does not exist` and `Products/SKU Lifecycle Profiles.md is missing`.

- [ ] **Step 3: Create the lifecycle profiles note**

Create `Products/SKU Lifecycle Profiles.md`:

```markdown
---
type: reference
status: active
date: 2026-08-21
account_or_project: "[[Amazon GTM Operation]]"
tags:
  - reference
  - amazon
  - mbb
  - product
---
# SKU 生命週期輪廓

> 用途：SKU 的生命週期決定哪些週期檢查適用、哪些可以跳過。輪廓在此定義一次，SKU 筆記只引用不複述。

`lifecycle` 與 `lifecycle_uk` 是封閉詞彙，只能取以下五個值。渠道模式（直營／代理）不是生命週期，不進這兩個欄位。

| Profile | 定義 | 要做 | 不做 |
|---|---|---|---|
| `prelaunch` | 未上市，準備中 | 准入／物料適配／首批備貨／上架配置 | DOS 週檢、SO 偏差、forecast 增量 |
| `ramp` | 預售或剛上市，價格紀律期 | 挺價紀律、竄貨監控、buybox、首銷追蹤 | 清庫、促銷降價 |
| `live-core` | 正常在售 | 全套週期檢查、劃線價／DT、促銷節奏 | — |
| `drain` | 日落中，清庫至下架 | 清庫速度、價格下探、下架時點 | forecast 增量、廣告投入、新促銷 |
| `hold` | 斷貨或無分貨，策略保留 | 3P buybox、供應恢復時點 | SO 偏差、DOS、forecast |

## 使用方式

1. 週期檢查前先看 SKU 的 `lifecycle`，跳過「不做」欄的項目。
2. 任何門檻覆寫寫在該 SKU 筆記的 `## 控制輪廓`，不改本表。
3. 生命週期變更時，同時更新該 SKU 的 `lifecycle_reviewed` 與 `## 變更日誌`。

## 與情境矩陣的關係

本表只決定**是否適用**；判斷門檻與零遺漏流程仍以 [[Amazon MBB Operations Scenario Matrix]] 為準。兩者不重複描述門檻。

## 相關

- [[Amazon GTM Operation]]
- [[Amazon GTM Management]]
```

- [ ] **Step 4: Run the validator to verify it passes**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 0 product note(s) validated`

- [ ] **Step 5: Commit**

```bash
git add scripts/validate-product-notes.ps1 "Products/SKU Lifecycle Profiles.md"
git commit -m "feat: add SKU lifecycle profiles and structural validator"
```

---

### Task 2: Product note template and H173-383 reference implementation

**Files:**
- Create: `Template/Product Note Template.md`
- Create: `Products/H173-383.md`

**Interfaces:**
- Consumes: `scripts/validate-product-notes.ps1` from Task 1.
- Produces: the exact six-section body structure and frontmatter key order that Task 3's twelve notes copy. Section headings are `## 現況`, `## 控制輪廓`, `## 盯點`, `## Open items`, `## 產品本體`, `## 變更日誌`.

- [ ] **Step 1: Run the validator to confirm the starting state**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 0 product note(s) validated`

- [ ] **Step 2: Create the template**

Create `Template/Product Note Template.md`:

````markdown
---
type: product
model:
family:
markets: [EU]
lifecycle:
lifecycle_reviewed:
priority_tier:
watch: []
strategy:
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# <model>

## 現況

> 地區部原話逐字，附日期。EU 與 UK 分歧時分小節。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `<lifecycle>` 輪廓執行。本 SKU 的覆寫：

- 無

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
|  |  |  |

## Open items

```dataview
TABLE WITHOUT ID file.link AS "任務", status AS "狀態", due AS "期限"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## 產品本體

> spec／KSP／競爭擺位。供 [[Product Baseline]] Gates 取用；Gate 任務不連結至本筆記。

## 變更日誌

- YYYY-MM-DD — 事件
````

- [ ] **Step 3: Create the H173-383 reference note**

Create `Products/H173-383.md`:

````markdown
---
type: product
model: H173-383
family: FWA CPE
markets: [EU, UK]
lifecycle: ramp
lifecycle_reviewed: 2026-08-21
priority_tier: core
watch: [挺價紀律, 竄貨監控-livewire]
strategy: BTS 泛歐重點；英國不走直營，由 livewire 代理，辦事處承諾不竄貨，若竄貨則取消代理
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# H173-383

## 現況

**2026-08-21（地區部）** 預售中，8.3 開始挺價，BTS 泛歐重點。

**UK** 英國直營不上，由 livewire 代理。辦事處已承諾不竄貨至其他國家，若竄貨則取消代理。渠道模式屬代理，不在本層的 `SKU × UK` 營運粒度內，因此不填 `lifecycle_uk`。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `ramp` 輪廓執行：做挺價紀律、竄貨監控、buybox 與首銷追蹤；不做清庫與促銷降價。本 SKU 的覆寫：

- 8.3 起進入挺價期，任何降價提案先回到 [[Zhang Xuan 00942107]]。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 挺價紀律 | [[Amazon MBB Operations Scenario Matrix]] 月度定價 | 進行中 |
| 竄貨監控（livewire 代理） | 代理條件；竄貨即取消代理 | 進行中 |

## Open items

```dataview
TABLE WITHOUT ID file.link AS "任務", status AS "狀態", due AS "期限"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## 產品本體

> 供 [[Product Baseline]] Gate G2 取用。材料見 `Knowledge/Source/Life at Huawei/Product Knowledge/FWA MWC 2026 Mainslides (CBG)-MBB全量版.pdf`。

- 待填：形態、代際、核心規格、KSP、競爭擺位。

## 變更日誌

- 2026-08-03 — 開始挺價
- 2026-08-21 — 建立本筆記，狀態取自地區部 SKU 情況表
````

- [ ] **Step 4: Run the validator to verify it passes**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 1 product note(s) validated`

- [ ] **Step 5: Commit**

```bash
git add "Template/Product Note Template.md" "Products/H173-383.md"
git commit -m "feat: add product note template and H173-383 reference note"
```

---

### Task 3: Remaining twelve SKU notes

**Files:**
- Create: `Products/H153-381.md`, `Products/B535-230.md`, `Products/E5783-230b.md`, `Products/H155-383.md`, `Products/E6888-982.md`, `Products/B636-336.md`, `Products/E5586-336.md`, `Products/B530-336.md`, `Products/H165-383.md`, `Products/B320-323.md`, `Products/E5785-320b.md`, `Products/E6898.md`

**Interfaces:**
- Consumes: the six-section structure and the Open items dataview block from `Products/H173-383.md` (Task 2).
- Produces: the complete 13-note inventory that Task 6's `-RequireComplete` check asserts.

Each note below shows frontmatter through `## 盯點`. After the `## 盯點` table, every note appends these three sections verbatim, with `<model>` replaced by the note's model:

````markdown
## Open items

```dataview
TABLE WITHOUT ID file.link AS "任務", status AS "狀態", due AS "期限"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## 產品本體

> 供 [[Product Baseline]] 取用；Gate 任務不連結至本筆記。

- 待填：形態、代際、核心規格、KSP、競爭擺位。

## 變更日誌

- 2026-08-21 — 建立本筆記，狀態取自地區部 SKU 情況表
````

- [ ] **Step 1: Create the four `hold` and `drain` notes**

`Products/H153-381.md`:

```markdown
---
type: product
model: H153-381
family: FWA CPE
markets: [EU, UK]
lifecycle: hold
lifecycle_reviewed: 2026-08-21
priority_tier: watch
watch: [3P-抢buybox, 產能恢復時點]
strategy: 地區部策略保留 SKU；明年產能恢復加 3P 庫存出清後，與 H173 做交替 offer
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# H153-381

## 現況

**2026-08-21（地區部）** 已斷貨，3P 抢 buybox 問題嚴重。地區部策略保留 SKU。明年產能恢復加 3P 庫存出清後，與 [[H173-383]] 做交替 offer。

**UK** 來源表該列為空白，狀態未知。此為資料缺口，`lifecycle_uk` 留空，下次與地區部對齊時補上。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `hold` 輪廓執行：做 3P buybox 與供應恢復時點；不做 SO 偏差、DOS 與 forecast。本 SKU 的覆寫：

- 無

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 3P 抢 buybox | 斷貨期間第三方佔據 buybox | 嚴重，未有主體任務 |
| 產能恢復時點 | 決定與 [[H173-383]] 交替 offer 的起點 | 待地區部給時間 |
| UK 狀態缺口 | 來源表空白 | 待補 |
```

`Products/B535-230.md`:

```markdown
---
type: product
model: B535-230
family: FWA CPE
markets: [EU]
lifecycle: drain
lifecycle_reviewed: 2026-08-21
priority_tier: drain
watch: [AMZ側庫存清完即截止]
strategy: 日落中，AMZ 側庫存清完即截止
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# B535-230

## 現況

**2026-08-21（地區部）** 日落中，AMZ 側庫存清完截止。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `drain` 輪廓執行：做清庫速度、價格下探與下架時點；不做 forecast 增量、廣告投入與新促銷。本 SKU 的覆寫：

- 無

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| AMZ 側庫存清完即截止 | 下架時點 | 進行中 |
```

`Products/E5783-230b.md`:

```markdown
---
type: product
model: E5783-230b
family: FWA CPE
markets: [EU]
lifecycle: drain
lifecycle_reviewed: 2026-08-21
priority_tier: drain
watch: [超長期庫存, 週銷節奏, 價格體系突破]
strategy: 7 月起下調價格清庫，保持週銷節奏，年底前完成清庫
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# E5783-230b

## 現況

**2026-08-21（地區部）** 超長期庫存較高。7 月開始已下調價格，短期內突破價格體系，以指引為準。保持週銷 100-150pcs 可在年底前完成清庫。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `drain` 輪廓執行：做清庫速度、價格下探與下架時點；不做 forecast 增量、廣告投入與新促銷。本 SKU 的覆寫：

- 清庫節奏門檻：週銷 100-150pcs 至年底。此為節奏門檻，不是 KPI 讀數；實際數值仍在線上來源判斷。
- 價格已突破既有價格體系，一切以月度指引為準。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 週銷節奏 100-150pcs | 清庫速度 | 進行中，未有主體任務 |
| 價格體系突破 | 月度定價指引 | 已授權，以指引為準 |
| [[E5785-320b]] 導流承接 | 泛歐高價導流至本 SKU | 進行中 |
```

`Products/H155-383.md`:

```markdown
---
type: product
model: H155-383
family: FWA CPE
markets: [EU]
lifecycle: drain
lifecycle_reviewed: 2026-08-21
priority_tier: drain
watch: [清庫後下架時點]
strategy: 無分貨，日落中，清庫後可下架
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# H155-383

## 現況

**2026-08-21（地區部）** 無分貨，日落中，清庫後可下架。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `drain` 輪廓執行：做清庫速度、價格下探與下架時點；不做 forecast 增量、廣告投入與新促銷。本 SKU 的覆寫：

- 無分貨，不再有新入庫。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 清庫後下架時點 | 下架決策 | 待清庫完成 |
```

- [ ] **Step 2: Run the validator**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 5 product note(s) validated`

- [ ] **Step 3: Create the five single-market `live-core` notes**

`Products/E6888-982.md`:

```markdown
---
type: product
model: E6888-982
family: MiFi
markets: [EU]
lifecycle: live-core
lifecycle_reviewed: 2026-08-21
priority_tier: core
watch: [圈量規則待明確, EU電池法規斷點-2027-02]
strategy: PD 表現突出，保持銷售勢能；2027 年 2 月後不再發貨，須完成圈量囤貨
decision_owner: "[[yubeifei y00663235]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# E6888-982

## 現況

**2026-08-21（地區部）**

1. PD 表現突出，重點保持銷售勢能。
2. 27 年 2 月後不再發貨，須圈量囤貨，具體規則待明確。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `live-core` 輪廓執行全套週期檢查。本 SKU 的覆寫：

- 2027-02 為發貨硬斷點，forecast 與圈量須在斷點前完成，見 [[E6888圈量]]。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 圈量規則待明確 | 地區部要求基於 PO 囤貨，AMZ 僅提前兩週回 PO | 衝突未解，見 [[E6888圈量]] |
| EU 電池法規斷點 | 2027-02 後不可發貨 | 已知，倒排中 |
| PD 銷售勢能 | 保持勢能 | 良好 |
```

`Products/B636-336.md`:

```markdown
---
type: product
model: B636-336
family: FWA CPE
markets: [EU]
lifecycle: live-core
lifecycle_reviewed: 2026-08-21
priority_tier: maintain
watch: [廣告分配偏移, 德國-YoY下跌, 黑色變體爬坡]
strategy: 修正廣告投入分配，恢復 YoY；德國持續關注
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# B636-336

## 現況

**2026-08-21（地區部）** YoY 銷量下跌明顯，主要是廣告投入分配問題，費用流向同組內更高銷量型號如 [[B320-323]]。意大利目前已有好轉，德國還需持續關注。

### 變體：B636-336（黑）

**2026-08-21（地區部）** 未達到上市前預期，但保持現狀穩步提升即可。與主色共用生命週期與控制輪廓，僅表現不同。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `live-core` 輪廓執行全套週期檢查。本 SKU 的覆寫：

- 廣告分配屬 [[Amazon GTM Management]] 的廣告工作區，不在 BAU 週期檢查範圍；本層只保存盯點與後續任務連結。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 廣告分配偏移至 [[B320-323]] | 同組內費用分配 | 進行中，見 [[德國 B636 流量優化]] |
| 德國 YoY 下跌 | 國家層級表現 | 持續關注 |
| 意大利 | 已有好轉 | 觀察中 |
| 黑色變體爬坡 | 未達上市前預期 | 穩步提升，保持現狀 |
```

`Products/E5586-336.md`:

```markdown
---
type: product
model: E5586-336
family: MiFi
markets: [EU]
lifecycle: live-core
lifecycle_reviewed: 2026-08-21
priority_tier: watch
watch: [德國-buybox, 國家GTM拒絕跟價]
strategy: 解決德國 buybox 與跟價分歧；德國佔銷量一半，風險集中
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# E5586-336

## 現況

**2026-08-21（地區部）** 德國偶爾有 buybox 問題，且國家 GTM 拒絕跟價。德國佔本 SKU 銷量 50%。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `live-core` 輪廓執行全套週期檢查。本 SKU 的覆寫：

- 德國為單一集中風險市場，月度定價檢查時優先看德國。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 德國 buybox | 偶發 | 未有主體任務 |
| 國家 GTM 拒絕跟價 | 定價分歧，需人拉齊 | 未有主體任務 |
```

`Products/B530-336.md`:

```markdown
---
type: product
model: B530-336
family: FWA CPE
markets: [EU]
lifecycle: live-core
lifecycle_reviewed: 2026-08-21
priority_tier: core
watch: [劃線價維護, DT獲取, 脈衝節奏]
strategy: 典型 offer 推動型號，走脈衝式打法
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# B530-336

## 現況

**2026-08-21（地區部）** 典型 offer 推動型號，促銷與平銷期會有 3 倍左右價差。做好劃線價維護和 DT 獲取，走脈衝式打法。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `live-core` 輪廓執行全套週期檢查。本 SKU 的覆寫：

- 促銷與平銷期價差約 3 倍屬正常，不視為價格異常；判斷重點在劃線價是否維護到位。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 劃線價維護 | 促銷定價 | 常態 |
| DT 獲取 | 促銷資源 | 常態 |
| 脈衝節奏 | 促銷排期 | 常態 |
```

`Products/H165-383.md`:

```markdown
---
type: product
model: H165-383
family: FWA CPE
markets: [EU]
lifecycle: live-core
lifecycle_reviewed: 2026-08-21
priority_tier: watch
watch: [輿情-差評與退貨, PD後-buybox]
strategy: 銷量低於預期；先做一輪差評與退貨分析找出根因
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# H165-383

## 現況

**2026-08-21（地區部）** 銷量低於預期。PD 後有少量 buybox 問題。輿情不太理想，可能需要做一輪差評和退貨分析。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `live-core` 輪廓執行全套週期檢查。本 SKU 的覆寫：

- 輿情與退貨分析不屬 BAU 週期檢查，需獨立任務承接。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 輿情差評與退貨分析 | 銷量低於預期的根因 | 未有主體任務 |
| PD 後 buybox | 少量 | 觀察中 |
```

- [ ] **Step 4: Run the validator**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 10 product note(s) validated`

- [ ] **Step 5: Create the two dual-market notes and the prelaunch note**

`Products/B320-323.md`:

```markdown
---
type: product
model: B320-323
family: FWA CPE
markets: [EU, UK]
lifecycle: live-core
lifecycle_uk: ramp
lifecycle_reviewed: 2026-08-21
priority_tier: core
watch: [UK-上市推遲, BTS-英國重點]
strategy: 泛歐保持現狀；英國補上錯過的 PD，BTS 期間為重點
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# B320-323

## 現況

**2026-08-21（地區部）· EU** 今年以來銷量都非常好，沒有太多需要注意的，保持現狀即可。

**2026-08-21（地區部）· UK** 上市推遲未趕上 PD，BTS 英國重點。

## 控制輪廓

EU 依 [[SKU Lifecycle Profiles]] 的 `live-core` 輪廓執行全套週期檢查。UK 依 `ramp` 輪廓：做挺價紀律、buybox 與首銷追蹤；不做清庫。本 SKU 的覆寫：

- UK 錯過 PD，BTS 為補救窗口，UK 判斷與 EU 分開做。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| UK 上市推遲未趕上 PD | UK 上市 | 未有主體任務 |
| BTS 英國重點 | UK 促銷窗口 | 進行中 |
| 吸走 [[B636-336]] 廣告費用 | 同組內廣告分配 | 見 [[B636-336]] |
```

`Products/E5785-320b.md`:

```markdown
---
type: product
model: E5785-320b
family: MiFi
markets: [EU, UK]
lifecycle: hold
lifecycle_uk: live-core
lifecycle_reviewed: 2026-08-21
priority_tier: core
watch: [泛歐高價導流至E5783, UK-後台配置問題, UK-核心產品]
strategy: 泛歐庫存清完後維持高價，把需求導流至 E5783；英國為核心產品，優先解決後台配置
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# E5785-320b

## 現況

**2026-08-21（地區部）· EU** 現有庫存已清完，泛歐可保持高價，優先導流至 [[E5783-230b]]。

**2026-08-21（地區部）· UK** 英國核心產品，週銷 50+，重點關注。目前有後台配置問題，需要跟進解決。

## 控制輪廓

EU 依 [[SKU Lifecycle Profiles]] 的 `hold` 輪廓執行：庫存已清完，維持高價作導流，不做 forecast 與 DOS。UK 依 `live-core` 輪廓執行全套週期檢查。本 SKU 的覆寫：

- 泛歐高價是導流手段，不是定價異常；月度定價檢查時不視為紅燈。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 泛歐高價導流至 [[E5783-230b]] | 清庫協同 | 進行中 |
| UK 後台配置問題 | 影響英國核心產品 | 未有主體任務 |
| UK 週銷節奏 50+ | 節奏門檻，非 KPI 讀數 | 重點關注 |
```

`Products/E6898.md`:

```markdown
---
type: product
model: E6898
family: MiFi
markets: [EU, UK]
lifecycle: prelaunch
lifecycle_reviewed: 2026-08-21
priority_tier: core
watch: [危險品准入, 地區部取消上市決策, MOQ未達-小訂單]
strategy: 上市準備中；危險品准入受阻，已提出取消上市，待地區部決策
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# E6898

## 現況

**2026-08-21（地區部）· 上市準備** 機關物料已交付，待適配 AMZ。首批備貨已提，100pcs 未達 MOQ，地區部同意申請走小訂單，保守備貨。

**2026-08-21（地區部）· 危險品交付** 客戶側准入有問題，已提出取消上市，待地區部決策。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `prelaunch` 輪廓執行：做准入、物料適配、首批備貨與上架配置；不做 DOS 週檢、SO 偏差與 forecast 增量。本 SKU 的覆寫：

- 上市本身可能被取消，所有準備動作在地區部決策前不再加碼投入。

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
| 危險品客戶側准入 | 阻塞上市 | 已提出取消上市，待決策 |
| 地區部取消上市決策 | 決定後續全部動作 | 待回覆 |
| 機關物料適配 AMZ | 上架配置 | 物料已交付，待適配 |
| MOQ 未達，走小訂單 | 首批備貨 100pcs | 地區部已同意 |
```

- [ ] **Step 6: Run the validator**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 13 product note(s) validated`

- [ ] **Step 7: Commit**

```bash
git add Products/
git commit -m "feat: add twelve remaining Amazon MBB SKU notes"
```

---

### Task 4: Task linking

**Files:**
- Modify: `Tasks/H173首銷.md` frontmatter `projects:`
- Modify: `Tasks/H173 Sales Monitoring.md` frontmatter `projects:`
- Modify: `Tasks/E6888圈量.md` frontmatter `projects:`
- Modify: `Tasks/Super MiFi (E6898) 上市.md` frontmatter `projects:`
- Modify: `Tasks/E6898 樣機運抵英國.md` frontmatter `projects:`
- Modify: `Tasks/德國 B636 流量優化.md` frontmatter `projects:`

**Interfaces:**
- Consumes: the 13 notes from Tasks 2 and 3.
- Produces: populated `## Open items` tables on `H173-383`, `E6888-982`, `E6898`, `B636-336`. Task 6's `-RequireComplete` check asserts all six links.

- [ ] **Step 1: Add the SKU link to each of the six tasks**

In each file's frontmatter, append the SKU wikilink to the existing `projects:` list. Keep `[[Amazon GTM Management]]` in place; add the SKU below it. Example for `Tasks/E6888圈量.md`:

```yaml
projects:
  - "[[Amazon GTM Management]]"
  - "[[E6888-982]]"
```

Mapping:

| File | Link to add |
|---|---|
| `Tasks/H173首銷.md` | `- "[[H173-383]]"` |
| `Tasks/H173 Sales Monitoring.md` | `- "[[H173-383]]"` |
| `Tasks/E6888圈量.md` | `- "[[E6888-982]]"` |
| `Tasks/Super MiFi (E6898) 上市.md` | `- "[[E6898]]"` |
| `Tasks/E6898 樣機運抵英國.md` | `- "[[E6898]]"` |
| `Tasks/德國 B636 流量優化.md` | `- "[[B636-336]]"` |

If a file has no `projects:` key, add one carrying both entries. Do not remove or reorder any other frontmatter field.

- [ ] **Step 2: Verify every link landed**

Run:

```bash
for f in "Tasks/H173首銷.md" "Tasks/H173 Sales Monitoring.md" "Tasks/E6888圈量.md" "Tasks/Super MiFi (E6898) 上市.md" "Tasks/E6898 樣機運抵英國.md" "Tasks/德國 B636 流量優化.md"; do echo "--- $f"; grep -A3 "^projects:" "$f"; done
```

Expected: each block lists `[[Amazon GTM Management]]` plus the mapped SKU link.

- [ ] **Step 3: Confirm no gate task was linked**

Run:

```bash
grep -rl "^gate:" Tasks/ | xargs grep -l "\[\[H173-383\]\]\|\[\[E6888-982\]\]\|\[\[E6898\]\]\|\[\[B636-336\]\]"
```

Expected: no output. A gate task carrying an SKU link violates the linking rule and must be reverted.

- [ ] **Step 4: Run the validator**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 13 product note(s) validated`

- [ ] **Step 5: Commit**

```bash
git add Tasks/
git commit -m "feat: link operations tasks to their SKU notes"
```

---

### Task 5: Products.base view

**Files:**
- Create: `TaskNotes/Views/Products.base`

**Interfaces:**
- Consumes: the `product` tag and frontmatter fields from Tasks 2 and 3.
- Produces: `TaskNotes/Views/Products.base`, which `Projects/Amazon GTM Management.md` embeds in Task 6.

- [ ] **Step 1: Create the base**

Create `TaskNotes/Views/Products.base`:

```yaml
filters:
  and:
    - file.hasTag("product")
    - type == "product"
formulas:
  daysSinceReviewed: if((lifecycle_reviewed.isEmpty() == false), ((number(today()) - number(date(lifecycle_reviewed))) / 86400000).floor(), null)
  isStale: (lifecycle_reviewed.isEmpty() == false) && date(lifecycle_reviewed) < (today() - "45 days")
  ukState: if(lifecycle_uk.isEmpty(), "同 EU", lifecycle_uk)
views:
  - type: table
    name: SKU 狀態
    groupBy:
      property: lifecycle
      direction: ASC
    order:
      - model
      - priority_tier
      - formula.ukState
      - watch
      - lifecycle_reviewed
      - formula.isStale
    sort:
      - property: priority_tier
        direction: ASC
      - property: model
        direction: ASC
  - type: table
    name: 需要複核
    filters:
      and:
        - formula.isStale
    order:
      - model
      - lifecycle
      - lifecycle_reviewed
      - formula.daysSinceReviewed
    sort:
      - property: lifecycle_reviewed
        direction: ASC
  - type: table
    name: 盯點總覽
    filters:
      and:
        - priority_tier != "drain"
    order:
      - model
      - lifecycle
      - watch
      - strategy
    sort:
      - property: model
        direction: ASC
```

- [ ] **Step 2: Verify the YAML parses and holds three views**

Run:

```bash
python -c "import yaml,io; d=yaml.safe_load(io.open('TaskNotes/Views/Products.base',encoding='utf-8')); print(len(d['views']),'views'); print([v['name'] for v in d['views']])"
```

Expected: `3 views` then `['SKU 狀態', '需要複核', '盯點總覽']`

- [ ] **Step 3: Run the validator**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1`

Expected: `PASS: 13 product note(s) validated`

- [ ] **Step 4: Commit**

```bash
git add TaskNotes/Views/Products.base
git commit -m "feat: add Products base view grouped by lifecycle"
```

---

### Task 6: Integration wiring, refresh cadence, and stub closure

**Files:**
- Modify: `Projects/Amazon GTM Management.md` (add `## SKU 狀態` above `## Tasks in this project (auto)`)
- Modify: `Projects/Amazon GTM Operation.md` (add profiles link under `## 控制筆記`)
- Create: `Tasks/SKU 狀態複核.md`
- Modify: `Tasks/Amazon MBB Product Categorising.md` (close)
- Modify: `Tasks/Amazon Product Level Category Identification.md` (close)
- Modify: `docs/superpowers/specs/2026-08-21-amazon-mbb-sku-note-layer-design.md` (status line)

**Interfaces:**
- Consumes: everything from Tasks 1 to 5.
- Produces: a `-RequireComplete` validator pass, which is the acceptance gate for the whole plan.

- [ ] **Step 1: Run the complete check to verify it fails**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1 -RequireComplete`

Expected: FAIL listing `Amazon GTM Management.md has no SKU 狀態 section`, `Amazon GTM Operation.md does not link SKU Lifecycle Profiles`, and `Tasks/SKU 狀態複核.md is missing`.

- [ ] **Step 2: Add the SKU 狀態 section to Amazon GTM Management**

Insert immediately above the line `## Tasks in this project (auto)` in `Projects/Amazon GTM Management.md`:

````markdown
## SKU 狀態

每個 SKU 的生命週期、盯點與策略意圖見 `Products/`。生命週期決定哪些週期檢查適用，定義見 [[SKU Lifecycle Profiles]]。

![[Products.base]]

```dataview
TABLE WITHOUT ID file.link AS "SKU", lifecycle AS "生命週期", priority_tier AS "層級", lifecycle_reviewed AS "複核日"
FROM #product
SORT lifecycle ASC, model ASC
```
````

- [ ] **Step 3: Add the profiles link to Amazon GTM Operation**

In `Projects/Amazon GTM Operation.md`, change the `## 控制筆記` list from:

```markdown
## 控制筆記
- [[Amazon MBB Source Index]]
- [[Amazon MBB Operations Scenario Matrix]]
```

to:

```markdown
## 控制筆記
- [[Amazon MBB Source Index]]
- [[Amazon MBB Operations Scenario Matrix]]
- [[SKU Lifecycle Profiles]] — 生命週期決定每個 SKU 適用哪些週期檢查；逐 SKU 狀態見 `Products/`
```

- [ ] **Step 4: Create the monthly refresh task**

Create `Tasks/SKU 狀態複核.md`:

```markdown
---
status: todo
priority: mid
scheduled: 2026-09-01
recurrence: DTSTART:20260901;FREQ=MONTHLY;BYMONTHDAY=1
recurrence_anchor: scheduled
projects: ["[[Amazon GTM Operation]]"]
contexts:
  - "@pricing"
timeEstimate: 30
tags:
  - task
eisenhower: q2
---

## 完成標準

`Products/` 內十三筆 SKU 筆記的生命週期與盯點與地區部當前說法一致，且每筆的 `lifecycle_reviewed` 推進至本次複核日。

## 檢查清單

> 本清單只供每次發生事項閱讀；請勿編輯 ☐ 標記，只完成 TaskNotes 發生事項。

- ☐ 對齊月度定價視窗執行；地區部策略最常在該時點浮現。
- ☐ 開啟 `TaskNotes/Views/Products.base` 的「需要複核」檢視，先處理逾 45 天未複核的 SKU。
- ☐ 逐筆確認 `lifecycle` 是否仍成立；值只能取 [[SKU Lifecycle Profiles]] 的五個封閉值。
- ☐ 生命週期有變更時，同時更新 `## 現況`、`## 控制輪廓` 與 `## 變更日誌`。
- ☐ 盯點已解決的，在 `## 盯點` 表把狀態改為已關閉並記入 `## 變更日誌`；不刪除歷史列。
- ☐ 盯點仍在途但無主體任務的，在 [[Amazon GTM Operation]] 下建立後續 TaskNote，並把該 SKU 筆記加入該任務的 `projects:`。
- ☐ 所有十三筆的 `lifecycle_reviewed` 推進至本次複核日，無論是否有變更。
- ☐ 執行 `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1 -RequireComplete`，確認通過。
- ☐ 不把 SO／DOS／價格讀數寫進任何 SKU 筆記。
```

- [ ] **Step 5: Close the two superseded stub tasks**

In `Tasks/Amazon MBB Product Categorising.md`, change `status: todo` to `status: done` and replace the whole body below the frontmatter with:

```markdown
## Ask as received

本任務所述的 SKU 分類工作由 SKU 物件層取代並完成。

## 結果

`Products/` 十三筆 SKU 筆記，依 [[SKU Lifecycle Profiles]] 的五個生命週期輪廓分類。設計規格見 `docs/superpowers/specs/2026-08-21-amazon-mbb-sku-note-layer-design.md`。
```

In `Tasks/Amazon Product Level Category Identification.md`, change `status: todo` to `status: done` and apply the identical body replacement.

- [ ] **Step 6: Update the spec status line**

In `docs/superpowers/specs/2026-08-21-amazon-mbb-sku-note-layer-design.md`, change:

```
Status: approved; implementation pending
```

to:

```
Status: implemented; structural verification passed; live Obsidian acceptance pending
```

- [ ] **Step 7: Run the complete check to verify it passes**

Run: `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1 -RequireComplete`

Expected: `PASS: 13 product note(s) validated`

- [ ] **Step 8: Commit**

```bash
git add "Projects/Amazon GTM Management.md" "Projects/Amazon GTM Operation.md" "Tasks/SKU 狀態複核.md" "Tasks/Amazon MBB Product Categorising.md" "Tasks/Amazon Product Level Category Identification.md" "docs/superpowers/specs/2026-08-21-amazon-mbb-sku-note-layer-design.md"
git commit -m "feat: wire SKU note layer into projects and add monthly refresh"
```

---

## Acceptance

- [ ] `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1 -RequireComplete` exits 0.
- [ ] Opening `Products/H173-383.md` in Obsidian shows `H173首銷` and `H173 Sales Monitoring` under `## Open items`.
- [ ] Opening `Products/E5586-336.md` shows two watchpoints with no subject task, which is the intended gap signal.
- [ ] `TaskNotes/Views/Products.base` renders thirteen rows grouped into five lifecycle groups.
- [ ] `Projects/Amazon GTM Management.md` shows the SKU table under `## SKU 狀態`.
- [ ] No SO, DOS, or price reading appears in any file under `Products/`.
