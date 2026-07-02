---
type: skill-note
status: reference
invocation: slash-command + model-invoked
source: "gstack README/SKILL.md (garrytan/gstack v1.58.5) + Superpowers README (obra/Superpowers)"
installed: 2026-06-29
tags:
  - skill
  - gstack
  - superpowers
  - workflow
---
# Skill: gstack & Superpowers — 作者預期使用旅程 (Author-Intended User Journey)

> 用途:speed-reference,把兩套 plugin 的「作者預期工作流」拆成階段,知道**哪一步該叫哪個 skill**。
> 安裝狀態:gstack v1.58.5(裝在 `~/.claude/skills/gstack`)+ Superpowers(官方 marketplace,global)。兩者**都靠 model 自動觸發**,你也可以用 slash command 手動叫。
> 一句話分工:**gstack = 產品/審查/出貨的「虛擬工程團隊」(廣);Superpowers = 寫程式當下的「TDD 紀律引擎」(深)。** 兩者互補,不是二選一。

---

## 0. 心智模型 Mental Model

|      | **gstack**(Garry Tan / YC)                              | **Superpowers**(Jesse Vincent / Prime Radiant)                         |
| ---- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| 比喻   | 一整支虛擬團隊:CEO、工程經理、設計、QA、資安官、發版工程師                        | 一位有紀律的資深工程師,逼你先想清楚、先寫測試                                                |
| 強項   | 產品決策 → 多角度審查 → QA → 出貨 deploy                           | 規格 → 計畫 → TDD → subagent 執行 → 收尾                                       |
| 形態   | ~35 個 slash command(`/office-hours`、`/review`、`/ship`…) | ~17 個 model-invoked skills(`brainstorming`、`test-driven-development`…) |
| 核心循環 | **plan → review → ship**                                | **brainstorm → plan → TDD → review → finish**                          |
| 何時用  | 「這值得做嗎 / 這安全嗎 / 上線吧」                                    | 「開始寫了 / 怎麼測 / 這 bug 哪來的」                                               |

> 重疊之處(brainstorm、plan、code-review)兩邊都有。**建議:策略/出貨走 gstack,實作/測試紀律走 Superpowers。** 見下方「§3 合併旅程」。

---

## 1. gstack — 作者預期旅程 (The plan → review → ship loop)

作者(Garry Tan)的核心主張:**完成一個完整 loop 才有價值** —— `/office-hours` 或 `/spec` 塑形 → `/plan-eng-review` 鎖定 → `/ship` 出貨。

### 階段 × Skill 對照表

| 階段 Stage | 何時叫 When | Skills |
|---|---|---|
| **① 塑形 Shape** | 有新點子、問「值得做嗎」、要寫 ticket | `/office-hours`(6 個逼問)、`/spec`(寫成 backlog issue) |
| **② 策略 Strategy** | 問 scope、「想大一點」、「該做什麼」 | `/plan-ceo-review`(4 種 scope 模式) |
| **③ 鎖定計畫 Lock the plan** | 審架構、「這設計合理嗎」 | `/plan-eng-review`、`/plan-design-review`、`/plan-devex-review`、`/design-consultation` |
| **③b 全自動審查** | 「幫我把所有 review 都跑一遍」 | `/autoplan`(串起所有 plan reviews) |
| **④ 實作/除錯 Build & Debug** | 報 bug、「為什麼壞了」、要安全模式 | `/investigate`(root cause)、`/careful`、`/guard`、`/freeze` `/unfreeze`(限制編輯範圍) |
| **⑤ 程式審查 Review** | 「看一下我的改動」、上線前 | `/review`(找 production bug)、`/cso`(OWASP+STRIDE 資安稽核)、`/devex-review` |
| **⑥ QA / 瀏覽器** | 「這能動嗎」、測 deploy、看視覺 | `/qa`、`/qa-only`(只報不修)、`/browse`、`/open-gstack-browser`、`/design-review`(視覺打磨)、`/setup-browser-cookies` |
| **⑦ 出貨 Ship** | 「上線」「送出」「開 PR」 | `/ship`、`/land-and-deploy`(merge+deploy+verify 一條龍)、`/canary`(上線後監控) |
| **⑧ 收尾/文件 Document** | 上線後更新文件、寫文件 | `/document-release`、`/document-generate` |
| **⑨ 回顧/學習 Retro** | 「這週出了什麼」「我們做得如何」 | `/retro`(每週工程回顧)、`/learn`(看 gstack 學到什麼) |
| **⑩ 脈絡保存 Context** | 「存進度」「我做到哪了」 | `/context-save`、`/context-restore` |
| **⑪ 維運 Maintenance** | 升級、健檢、調靈敏度、效能、出 PDF | `/gstack-upgrade`、`/health`、`/plan-tune`、`/benchmark`、`/make-pdf` |
| **第二意見** | 想要 codex 的交叉審查 | `/codex` |

> ⚠️ **瀏覽器規則(作者要求)**:所有網頁瀏覽一律用 `/browse`,**不要用 `mcp__claude-in-chrome__*`**。`/browse`、`/qa` 靠剛裝好的 Playwright Chromium 跑真實瀏覽器。

---

## 2. Superpowers — 作者預期旅程 (The basic workflow)

作者(Jesse Vincent)的核心主張:**agent 看到你要 build 東西時,不該直接寫 code** —— 先逼出規格、分段給你看、簽核後才動工,而且全程 **真 red/green TDD**。Skills 會**自動觸發**,你不用特別叫。

### 主線 7 步 × Skill 對照

| 步驟 Stage | 觸發時機 Activates when | Skill |
|---|---|---|
| **① 腦力激盪 Brainstorm** | 任何「創造性工作」之前(做功能、加行為) | `brainstorming` — Socratic 提問,把粗點子打磨成規格,分段給你 validate,存成 design doc |
| **② 開隔離工作區** | design 簽核後 | `using-git-worktrees` — 開新 branch 的隔離 workspace,跑 setup,確認 test baseline 乾淨 |
| **③ 寫計畫 Plan** | 有了簽核的 design | `writing-plans` — 拆成 2–5 分鐘的小任務,每個都有確切檔案路徑、完整 code、驗證步驟 |
| **④ 執行 Execute** | 有了 plan | `subagent-driven-development`(同一 session 派 subagent)或 `executing-plans`(分批 + 人工檢查點) |
| **⑤ TDD 實作** | 寫 code 當下 | `test-driven-development` — 強制 RED→GREEN→REFACTOR;先寫失敗測試→看它失敗→寫最小 code→看它過→commit。**測試前寫的 code 會被刪掉。** |
| **⑥ 程式審查 Review** | 任務之間、合併前 | `requesting-code-review`(送審前 checklist)、`receiving-code-review`(收到回饋:要技術性驗證,不要表演式同意) |
| **⑦ 收尾 Finish** | 全部任務完成、測試全綠 | `finishing-a-development-branch` — 驗測試,給出 merge / PR / 保留 / 丟棄 的選項,清掉 worktree |

### 隨時可觸發的支援 Skills

| 時機 When | Skill |
|---|---|
| 遇到任何 bug / 測試失敗 / 怪行為,**在提解法之前** | `systematic-debugging`(4 階段 root-cause) |
| **宣稱「完成 / 修好 / 通過」之前**(commit/PR 前) | `verification-before-completion` — 先跑驗證指令、確認 output,**證據先於宣稱** |
| 有 2+ 個互不相依的獨立任務 | `dispatching-parallel-agents` |
| 對話一開始 | `using-superpowers`(meta:怎麼找/用 skills) |
| 要新增/修改 skill | `writing-skills`(meta) |

> 哲學四條:**Test-Driven**、**Systematic over ad-hoc**、**Complexity reduction**、**Evidence over claims**。

---

## 3. 合併旅程 Combined Journey(我們實際怎麼疊用)

當你要 **從 0 做一個功能** 並 **上線**,作者意圖疊起來長這樣:

```
構想 idea
  │
  ├─[gstack] /office-hours ──→ 值得做嗎?逼問 6 題,塑形
  │   或 /plan-ceo-review ──→ scope 對不對、夠不夠大
  │
  ├─[SP] brainstorming ──────→ 打磨成 design doc(分段簽核)
  │
  ├─[gstack] /plan-eng-review → 鎖架構(「真的嗎/可行嗎」)
  │   [SP] writing-plans ────→ 拆成 2–5 分鐘小任務
  │
  ├─[SP] using-git-worktrees → 開隔離 branch,確認 baseline
  │   [SP] subagent-driven-development + test-driven-development
  │        └─ 實作階段:RED→GREEN→REFACTOR,subagent 逐任務跑
  │   [SP] systematic-debugging ←── 卡 bug 時
  │
  ├─[SP] requesting-code-review → 自審 checklist
  │   [gstack] /review ─────────→ 抓 production bug
  │   [gstack] /cso ────────────→ 資安稽核(上線前必跑)
  │
  ├─[gstack] /qa(/browse)─────→ 真瀏覽器 QA、測 deploy
  │   [SP] verification-before-completion → 證據先於宣稱
  │
  ├─[gstack] /ship 或 /land-and-deploy → 出貨 + PR + verify
  │   [SP] finishing-a-development-branch → merge/PR/清 worktree
  │
  └─[gstack] /canary(上線後監控)→ /retro(週回顧)
```

### 一句話分流規則 Routing cheat-sheet

- 「**這值得做 / 該做多大 / 上線吧 / 這安全嗎 / 這能動嗎**」 → **gstack**
- 「**開始寫了 / 怎麼測 / 這 bug 哪來的 / 完成前先驗證**」 → **Superpowers**
- 重疊時(brainstorm、plan、code-review):**策略面用 gstack,實作紀律用 Superpowers。**

---

## 4. 給「20% 留白 + 降摩擦」策略的提醒 (對你個人系統)

- 兩套都**自動觸發**,所以它們本身就在替你降低「從零起手」的摩擦 —— 但也會**主動插話/要你簽核**。若在留白時段不想被打斷,可手動用 slash command 精準呼叫,而非讓它全程接管。
- gstack 的 **`/retro`** 可直接餵你每週的工程回顧,對接你的 4 問日反思。
- gstack 的 **`/spec`** 把模糊想法變成 backlog-ready issue,適合把「新點子的種子」(第 4 問)落地。

---
*Author journeys 摘自:`~/.claude/skills/gstack/SKILL.md`(§Skill routing / §Route first)與 Superpowers README「The Basic Workflow」。Skills 清單以實際安裝版本為準,日後升級可能變動 —— 用 `/learn` 或 `/plugin` 查當前清單。*
