---
type: skill-note
status: installed
invocation: user-invoked
leading_word:      # TBD（候選:prep / interview）
source: "[[Look for another job]]"
tags:
  - skill
---
# Skill: Interview Prep Procedure（把「準備好了」變成可驗證的事）

> 用途:收到 interview invite 開始,到走進面試前 15 分鐘為止,一套固定 ~2h15m 的流程。分工原則:**Gemini 負責搜集,Claude 負責合成,Kess 負責開口講**。
> 觸發:`Ctrl+Shift+I`(建立 tracker note)、`/interview-prep`、「幫我 prep 這個 interview」。
> 安裝:`.claude/skills/interview-prep/SKILL.md`,`/interview-prep` 可見。這是**一個 skill 對應一整套流程**,不是每個 stage 一個 skill。
> 建立:2026-08-19(SureCloud post-mortem)。**v2 重寫:2026-08-21**,依 Kess 的 feedback note(`Tasks/feedback on interview prep skills.md`):research 改行 Gemini prompt-note 流、brief + Top 5 Stories 平行產出、reps 同 gate 移除、改用 voice AI 自己 mock。**v2.1:2026-08-23**,brief 改成五問結構 + Bridge Drill(Cogna cycle 驗證):brief 只答頭四問,第五問(我嘅經驗點接上)嘅橋**永遠由 Kess 自己搭**,喺 GPT Voice 用生成嘅 drill prompt 大聲搭。

## 這系統在防什麼(SureCloud post-mortem 的 failure modes,v2 版對應)

| Failure mode | 哪個 stage 擋 |
|---|---|
| 1. 沒有時間估計 → invite 拖了好幾天不動 | **T0 Commit** — 15 分鐘、當晚就要 book slot + fire research prompt,把「不確定要花多久」變成已知成本 |
| 2. Research 做了但沒被消化(一堆 PDF ≠ interview input) | **B1 Brief** — Gemini 的 raw output Kess 從不讀,只讀一頁 HM 視角 brief + 一份 Top 5 Stories |
| 3. 幾乎零口說練習,delivery 才是真正的弱點 | **B2 Read & Mock** — Kess 自己用 real-time voice AI mock,大聲講,唔係喺 chat 度打字 |
| 4. Readiness 靠感覺決定 | ~~Gate~~ **已移除(2026-08-21,Kess 決定)**——訂好嘅 interview 本身就係 external test;冇咗打分,B2 有冇真係做係唯一防線 |
| 5. 沒有環境協議 | **Pre-flight** — 面試前 15 分鐘 checklist,包含 do-not-enter window |

## 端到端流程表(每一步對應哪個工具)

| Step | 觸發 | 工具 | 產出 |
|---|---|---|---|
| Invite 到手 | `Ctrl+Shift+I` | Templater hotkey → `Template/Interview Prep Tracker Template.md` | Tracker note(`type: interview-prep-tracker`),4 格 stage checklist |
| T0 Commit | `/interview-prep start <company>` | `.claude/skills/interview-prep/` | Slot booked ≤48h、伴侶已告知、`Research/Research Prompt - <Company>.md`(一份 paste-ready Gemini Deep Research prompt,內建 Kenny 問題:邊個俾錢、俾乜嘢錢、乜嘢真正推動 revenue growth、呢個 role 同 revenue 條線)。**當晚不讀任何東西。** |
| (Kess 手動) | 貼 prompt 入 Gemini,報告好咗貼返入 `Research/Research Output - <Company>.md` | Gemini Deep Research | Raw research(machine layer,Kess 不讀) |
| B1 Brief | `/interview-prep brief` | 兩個 subagent 平行 + main agent 收尾 | ① `Interview/Interview Brief - <Company>.md`:**五問結構**(Q1 賣乜、Q2 賣俾邊個、Q3 買家痛點、Q4 呢個 role 喺賣嘢過程解決乜 + role-to-revenue 條直線、Q5 痛點→候選經驗表,**只有事實提示,唔寫橋**),附錄 = 疑慮/counter + why-company;② `Interview/Top 5 Stories - <Company>.md`:只揀 `ELIGIBLE` story,revenue-weighted,anchors 放頂,self-contained;③ `Interview/Bridge Drill Prompt - <Company>.md`:一份 paste-ready GPT Voice drill prompt,內嵌 answer key |
| B2 Bridge Drill | 冇 command,Kess 自己做 | GPT Voice(貼 drill prompt) | Phase 1:Q1–4 憑記憶答,GPT 對 answer key 捉漏;Phase 2:一次一個痛點,Kess 自己搭橋,GPT 只挑戰同 reject 弱橋、標記接唔上嘅痛點,**唔會代寫**;格仔 Kess 自己剔 |
| Pre-flight | `/interview-prep preflight` | 讀 `Pre-flight Checklist.md` | Checklist 全綠,才進面試 |
| (上游,CV 已投遞後不會再跑) | — | `/craft-cv` | 這個 application 的 CV,truth-gated |

## 五問框架 + Bridge 原則(2026-08-23 加入)

成場面試嘅議程係五條問題:1) 公司賣乜、2) 賣俾邊個、3) 買家想解決乜痛點、4) 賣嘢過程入面呢個 role 要解決乜、5) 我嘅經驗點樣接上。頭四條係公司側事實,AI 答完寫入 brief 冇問題;**第五條唔可以由 AI 寫**——AI 生成嘅連結只會帶嚟 recognition,面試房入面要嘅係 recall,而 recall 只會喺自己親口搭橋嗰陣形成。所以分工係:**Claude/Obsidian = research、合成、evidence 驗證、候選經驗檢索;GPT Voice = recall、articulation、挑戰、對話練習;Kess = 條橋嘅唯一作者**。Brief 嘅 Q5 只可以出「痛點 → story + 事實提示」,任何「呢個經驗證明我可以⋯⋯」嘅句子都要刪。

## Kenny 框架(2026-08-21 加入)

Brief 同 story selection 嘅深度標準來自 Klook GM Kenny Sham 個 insight([訪談](https://www.youtube.com/watch?v=ZB6WGRCfMIk)):**識得呢盤生意點賺錢,同埋你嘅貢獻同佢 revenue growth 之間畫到一條好直嘅線。** 落地方式係約束咗嘅:深度係 Gemini prompt 嘅責任(prompt 內建 business model / market structure 問題),brief 只負責蒸餾成 3 個 bullet + 一句 role-to-revenue;story 揀選都用同一條規則。唔係要 Kess 喺 45 分鐘內變成 GM——嗰啲係 unbounded reading,正正係呢個系統要防嘅嘢。

## 設計筆記(為何這樣寫)

- **一個 skill,不是幾個。** Stage 共用同一份 tracker note 當狀態面,skill 讀 checkbox 就知道下一步。
- **Gemini 搜集 / Claude 合成,分工清楚。** Gemini Deep Research 做 broad sweep 好過 Claude in-session search;但 Gemini 冇 vault(Story Bank、CV evidence),所以揀 story、寫 objection counter 一定係 Claude。Prompt-note 人手貼上貼落,好過 MCP 自動化——冇嘢會斷。`research-baseline` skill 保留俾 application/CV research 用,interview prep 唔再叫佢。
- **Story bank、checklist 都是 runtime 讀取,skill 裡不寫死。** 內容會改,skill 邏輯不該跟著漂移。Question banks 同 Readiness Rubric 檔案仲喺 `00_Master System/`,但 skill 已經唔讀(gate 移除)。
- **T0 的 book slot / 告知伴侶是人類步驟,skill 只負責問「確認了嗎」。**
- **Gate 移除係 Kess 2026-08-21 明知 trade-off 之下嘅決定**:[[commitment-mechanism]] 話 external scoring 先算數,而家個 external test 係 interview 本身。Preflight 會問一句 B2 做咗未,但唔會擋。

## 連結
- [[Interview Prep SOP]]
- [[Master Story Bank]]
- [[Pre-flight Checklist]]
- Feedback 來源:`Tasks/feedback on interview prep skills.md`
- 相關 skill:[[Skill - Craft CV]](上游,CV 先送出)· research-baseline 沒有獨立 vault note,規則以 `.claude/skills/research-baseline/SKILL.md` 為準
- v1 spec(gate 版,已過時):`docs/superpowers/specs/2026-08-19-interview-prep-system-design.md`
