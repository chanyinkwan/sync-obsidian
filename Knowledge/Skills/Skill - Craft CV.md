---
type: skill-note
status: installed
invocation: model-invoked
leading_word:      # TBD（候選:craft / tailor / 履歷）
source: "[[Look for another job]]"
tags:
  - skill
---
# Skill: Craft CV（把 JD 變成一份可辯護的履歷）

> 用途:接到一份 JD,產出 tailored CV。核心不是寫作,是 **truth gating**:先把不能辯護的 bullet 擋掉,再談風格,最後才 render。
> 觸發:「幫我寫 X 公司的 CV」「tailor 我的履歷」「render CV」「這句我能不能寫上去」。
> 安裝:已安裝為可呼叫 skill(`.claude/skills/craft-cv/`),`/craft-cv` 可見。
> 建立:2026-08-13,起因是 BJAK Technical Product Manager 的投遞。

## 檔案結構(與其他 skill note 不同:這裡不留 SKILL.md 副本)

| 檔案 | 管什麼 | 長度 |
|---|---|---|
| `SKILL.md` | 9 條 integrity gates、8 步流程、targeting record 契約、render、checklist | 操作用,短 |
| `TARGETING.md` | bullet 之上的策略層:買點排序、anchor role、gap bridge、什麼叫贏得掃描 | 參考用,長 |
| `DATA-REDESIGN.md` | MasterExperienceDB 的重構設計。**尚未套用** | 待辦 |

> ⚠️ **刻意不在這裡貼 SKILL.md 全文。** 今天 Fable review 的最大一條發現就是:同一套 binding rules 存兩份必然 drift（`CV Writing Rules.md` 和 v0 SKILL.md 已經在 DB 路徑和 render 指令上分岔了）。所以本筆記只留設計理由,規則以 `.claude/skills/craft-cv/` 為準。

## 設計筆記(為何這樣寫)

### 解決的問題
不是「不會寫 bullet」,而是 **假的東西會跨文件擴散**。2026-07-28 發現 4 個 `github.com/chanyinkwan` repo 是買來的 code、freelance AI Solutions Engineer 是為了填空窗期虛構的;但這個排除只寫在 `MasterExperienceDB.json` 一個檔案裡,結果 8/12 寫 TripBiz portfolio 時又被當成 work sample 寫進去,標成「safe to show live」。Skill 存在的意義是把這道 gate 帶到每一次 career asset 的產出,不只 CV。

### 兩個 failure mode
1. **沒 ground 的數字悄悄擴散** → 靠 gates 擋。
2. **好證據因為沒人 ground 過而不能用** → 靠 `Grounding Backlog.json` 收。BJAK 那次砍掉 6 條 on-target bullet,其中 MoSCoW + Red Hat PoC 那條是整份 JD 最對題的,就因為 15 mandays 沒來源。以前這種損失只存在 chat 裡、滑過去就沒了。

### 為什麼 gate 比風格重要
`meta.hard_rule` 已經寫得很清楚,但光讀 `status` 不安全:`independent_projects[]` 裡的 bullet 掛著 `status: verified`,而 400 行外的 `independent_projects_flag` 說這些全部要當未驗證。**一個只讀 bullet.status 的 agent 會一邊違規一邊以為自己合規。** Gate 4 是為了補這個洞;`DATA-REDESIGN.md` 套用後這條 gate 就可以刪掉。

### competency 不是對的索引軸
`competency_model` 那 10 個 tag 是為 SA/presales 轉職做的 ontology。BJAK 這次證明它不適合 CV tailoring:真正贏的定位是「regulated payments、hard deadline、third-party rails、irreversible states」,一個 competency tag 都對不上。`DATA-REDESIGN.md` 建議加 `domains[]` 軸。

### NotebookLM 策略層,與被否決的部分
2026-08-13 從 NotebookLM CV 策略 notebook 匯入 `TARGETING.md` §6。採納:五秒掃描、impact-first 的閱讀力學根據、ATS 規則（80% keyword、不能有 table/text box）、一頁 17 到 19 條 bullet 的預算、15 秒可辯護數字。

**否決最重要的一條:「role signalling pivot」** —— 它教你把過去的 job title 改寫成貼近目標職位的講法,還拿 Apple 的 title 當範例。這極可能就是今天發現的 title drift 來源（三個檔案對 Apple 和 BOC 的 title/日期各說各話）。改過的 title 過不了 reference check。**對齊對方語言是在 summary 和 bullet,不是在 title 欄位。**

### 與既有規則的分工
- `CV Writing Rules.md`(`Knowledge/Source/Job Hunt/`)= 風格層,XYZ、破折號、動詞、讀出聲。
- `SKILL.md` = truth gating + 流程 + pipeline。
- Fable 建議把 rules 的 §5 truth gating 和 §7 pipeline 搬進 skill、讓 rules 只管風格,**尚未執行**。

## 現況與待辦

- [ ] 套用 `DATA-REDESIGN.md`:降級未 reground 的 status、刪掉互相矛盾的 meta flag、加 bullet ID、加 `domains[]` 與 `grounding_question`。套完可刪 gate 4。
- [ ] 補 `EVALS.md` + `fixtures/` + `scripts/validate-cv-context.ps1`。這是全 vault 風險最高的 skill,卻是唯一沒有驗證裝置的（對照 `tidy-meeting-transcript`、`fill-daily-log`）。
- [ ] 拆分 `CV Writing Rules.md`,消除兩份 binding rules。
- [ ] 清掉 TripBiz 與 Engineered Intelligence 兩個 CV context 裡的 repo 那行。
- [ ] `Grounding Backlog.json` 目前 7 條,按 demand 排序。最高價值是 manday arbitration —— DB 自己說那是最強的 leadership evidence,卻完全沒有數字。

## 連結
- 規則:[[CV Writing Rules]]（風格層）
- 資料:`Knowledge/About Me/MasterExperienceDB.json`(canonical)· `Knowledge/Source/Job Hunt/Grounding Backlog.json`
- 已刪除:`Project Database (Master).json` 於 2026-08-13 刪除(內含未標記的虛構 freelance 區塊與被修正過的膨脹數字),commit `2ce25d4` 可復原
- 產出範例:`Knowledge/Source/Job Hunt/BJAK Technical Product Manager/`
- Show-don't-tell 範例:[[Portfolio Draft v1 — TripBiz Senior PM EMEA]]
- 相關 skill:[[Skill - Structured Problem Solving]] · [[Skill - Data Submission Gate]]（同為「先擋再做」型）
