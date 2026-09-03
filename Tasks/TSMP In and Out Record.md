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

#### Gate 0 — 開工閘（2026-09-03，未過閘）

**Claude 開閘前發現（Sample Management folder 現狀）**
- 已有 `GTM_System_Master.xlsx` + operating model doc (2026-07-30)：解決嘅係「申請樣機」嗰邊（quota / BOM / 入庫 timing），唔係 in/out 同 write-off。
- 2026-08-21 foundation-import plan 同 `automation/Invoke-TSMPWorkstation.ps1` 指住 `build\TSMP_Automated_Workstation_v1.xlsm`，但 `build/` 唔存在 → workstation 未 build。
- 三個 `TSMP_ControlPanel*.xlsm` 變體 + `Data/Y26Q3W35/样机挂账物理号信息查询_20260824*.xlsx` → 呢啲係 in/out 嘅 raw data。
- Workstream 目前冇 named owner（Gate 0 B 未填）。

**A. Ideal Output**（Kess 親手寫）
- 

**B. Role Split**（Kess 親手寫）
- 

**C. Handoff 合約**（每個 assign 出去嘅 task 一行）
- 

**D. 必懂清單 — Claude 提名候選（Kess 揀）**
1. **Due date 嘅來源 + 30 日規則本質**：`样机挂账物理号信息查询` 邊個欄位係 due date？「30 日前 write off」係公司政策定係 TSMP 系統鎖？→ 決定所有日期計算啱唔啱。
2. **Out / write-off 嘅狀態機**：temporary out、permanent out（畀客）、destroy write-off、non-destroy write-off、return — 邊種狀態要邊種 receipt？→ 決定 workstation 要幾多種記錄。
3. **兩個帳號嘅責任結構**：d00611102 vs m00473733 — 邊個係 accountable holder？點解一個自己做、一個要 email 提醒？→ 決定邊啲動作 Kess 有權喺 TSMP 做。

**出閘測試**：待 Kess 揀完 D 之後出。
