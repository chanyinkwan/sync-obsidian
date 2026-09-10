---
status: doing
priority: high
scheduled: 2026-07-09
dateCreated: 2026-07-09T11:49:40.080+01:00
dateModified: 2026-08-26T11:16:20.402+01:00
tags:
  - task
projects:
  - "[[Sample Management Ops]]"
timeEntries:
  - startTime: 2026-07-14T08:32:27.490Z
    description: Work session
    endTime: 2026-07-14T08:57:27.857Z
  - startTime: 2026-07-21T13:40:42.234Z
    description: Work session
    endTime: 2026-07-21T13:40:52.962Z
  - startTime: 2026-08-26T09:58:37.596Z
    description: Work session
    endTime: 2026-08-26T10:16:20.402Z
eisenhower: q1
tasknotes_manual_order: tnririririrh
---

### Ask as received
My role's goal is to manage the samples in and out under two accounts:
d00611102 and m00473733 

the role of mine is to keep an eye on the due date, and the samples has to be written off 30 days before the due date; for d00611102 I handle this on my own, and for m00473733 I send a reminder email.

then to handle the non-destroying write off, my role is to generate a write off receipt for account manager which should automised with the excel workstation as well

the other ideal feature of the work station is to mark in and out receipt, the challenging point will be there are two kinds of out, one is temporary, and the other is permenant, which they will be given to the customers, which also need a write off recceipt, in some situations, the samples will come back
### Materials
This is the major folder that kept all the flow of data, and how I expected to manage the samples such as the VBA script I have written in there
"C:\Users\k84450674\Desktop\Sample Management"

### First Principle

#### Gate 0 — 已過閘（2026-09-08，Kess 裁定）

**A. Ideal Output**（xlsm workstation，base 檔未定）
1. auto generate reminder email draft, manual send
2. button: pick specific SN → write-off receipt, rule: no duplicated colours + model name
3. clean UI to record in/out for more than one product on a rolling basis; closed activity log stays referenceable (not wiped monthly)

**B. Role Split** — Kess: experiment + test, supply context during testing｜Claude: build

**C. Handoff** — build the 3 features; existing script (`SendSmartReminders` macro, `TSMP_LastUpdate0709.xlsm`) sends one email per item → must become one combined email, at most one a day

**D. 必懂（Kess 答）**
1. 30-day-before-due write-off = team practice, not a system lock
2. Permanent out (given to customer) = the case that needs a write-off receipt; temporary out may return
3. d00611102 = senior, hands work to Kess (Kess writes off directly)｜m00473733 (Michele) manages own, Kess only reminds

#### Decompose（2026-09-08）

**必答問題（09-08 答）**
1. Base：fresh build 落 `build/`，reference `TSMP_ControlPanel_new.xlsm` 嘅 data/logic；CONTROL_PANEL 頁 UI 重新設計（Kess：現有嘅唔好用）
2. Raw query：`挂账人` = account，`到期日期` = due date；兩個檔 = 兩個帳號各一（dingcheng 00611102：102 行｜Michele 00473733：19 行）；檔案係 BIFF `.xls` 改名 `.xlsx`，VBA `Workbooks.Open` 讀得，openpyxl 讀唔到
3. Feature 2、3 acceptance → Claude 提案，Kess 裁定（見 Audit）

**手上有乜料**
- Raw data：`Data/Y26Q3W31`、`Y26Q3W35` 各 2 個 query xlsx（疑似兩帳號各一）
- Email macro：`SendSmartReminders`（一 item 一 email）+ `TSMPAutoTrigger.vbs.disabled` 觸發器
- Receipt template：4 個 `Huawei UK Client sample device receipt_*.DOCX` 變體
- 4 個 xlsm 變體；`automation/` ps1 + `BatchDiscovery` / `WorkbookSafety` modules 指住未存在嘅 `build/`

**缺乜料，邊個有**
- Canonical receipt DOCX（4 揀 1）、合併 email 收件人/格式 → Kess
- 顏色來源：raw query 冇 `颜色` 欄；`传播名` / `BOM描述` 可能含色 → Claude probe

> **HANDOVER BLOCK — Decompose**
> 1. Reminder email：一日最多一封合併 draft，人手 send，唔自動發
> 2. Receipt 只喺 permanent out 出；按 SN 揀；同一張 receipt 內 model+colour 唔重複
> 3. In/out log rolling；closed activity 保留可查
> 4. Action date = due date − 30 日（team practice）；d00611102 Kess 直接 write off，m00473733 只 remind
> 5. Base = fresh build 落 `build/`，data/logic 參考 `_new`，UI 重畫
> Outcome：一個 xlsm workstation 畀 Kess 管兩帳號樣機 in/out、reminder、receipt。

#### Audit（2026-09-08）

**Scan 發現**：`_new` Module1 = `UpdateNewData` + `PrepareReminderEmail`；`LastUpdate0709` Module1 = `SendSmartReminders`（K 欄 custodian 過濾、AC 欄 deadline **33 日內**、Outlook 逐行 `.Send`）；MASTER_DATA 144 行，顏色只喺 `BOM描述` 文字內（星空黑 / 曜金黑 / 白色…）；4 個 receipt DOCX 冇 table 冇 placeholder。

**Answerability**：F1 reminder、F3 in/out log = `ANSWERABLE(用手上數據)`｜F2 receipt = `ANSWERABLE ONLY WITH [canonical DOCX + 收件 AM 名]@[Kess]`

> **HANDOVER BLOCK — Audit**
> 1. Reminder email 只出畀 m00473733；d00611102 到期項目出喺 Kess 自己嘅 action list，唔發 email
> 2. Email 用 Outlook `.Display` 出 draft，永遠唔 `.Send`；一日最多一封，所有到期 SN 合併一張表
> 3. Reminder window 係 parameter cell（default 30），唔 hardcode
> 4. Model+colour dedupe key 用 `BOM编码`，probe 確認前唔寫死
> 5. Import = VBA `Workbooks.Open` 讀 BIFF xls；F2 receipt build 等 Kess 揀 DOCX 先開
> Outcome：一個 xlsm workstation 畀 Kess 管兩帳號樣機 in/out、reminder、receipt。



**Kess 裁定（09-08）**：window = **33 日**（多 3 日 buffer）；顏色喺 receipt 上用簡化英文（White / Black / Beige / Orange…），唔跟原廠色名；receipt 必須跟 DOCX template，留意色 + model name。F2/F3 acceptance Kess 冇反對，視為通過（可推翻）。

#### Experiment（2026-09-08）

**Probe**：MASTER_DATA 144 行、97 個 BOM code。判定規則（睇數前落）：BOM code ↔ (传播名, 型号, BOM描述) 雙向 1:1 → key = BOM code；否則 key = 传播名 + 色。
**結果**：BOM code → 描述 1:1（1 例外係壞 cell）；但 **同一 model+色有 3 組用唔同 BOM code**（如 Brovi 5G CPE 5s 白 ×2 code、CPE 6 白 ×2）→ **BOM code 唔可以做 receipt dedupe key**。
**色嘅來源**：`BOM描述` 內中文色名（星空黑 / 曜金黑 / 米色 / 苍穹灰 / 丹宁蓝 / 羽沙白 / 钛空银 / 锖色…）；手錶有錶殼色 + 錶帶色兩個 token → 取第一個。舊「簡化色」方案 vault 同 folder 搵唔到（grep beige 零命中）→ 要重建一張 COLOUR_MAP 表。

> **HANDOVER BLOCK — Experiment**
> 1. Receipt dedupe key = `传播名` + 簡化英文色；**唔係** BOM code
> 2. 色由 `BOM描述` 抽：先查 COLOUR_MAP sheet（中文色名 → 英文簡化色，Kess 可改），查唔到 fallback 尾字規則（黑→Black 白→White 灰→Grey 蓝→Blue 金→Gold 银→Silver 绿→Green 红→Red 橙→Orange 紫→Purple 粉→Pink）；仍查唔到 → receipt 上標 `[COLOUR?]` 唔准靜靜出街
> 3. Reminder window parameter cell default **33**
> 4. Import 用 VBA `Workbooks.Open` 讀 BIFF xls；壞 cell（如 `家+AJ78+A67:Z67`）唔可以令 import 死，log 落 IMPORT_LOG
> 5. F2 receipt 等 Kess 揀 canonical DOCX；F1、F3 可以即開 build
> Outcome：一個 xlsm workstation 畀 Kess 管兩帳號樣機 in/out、reminder、receipt。
