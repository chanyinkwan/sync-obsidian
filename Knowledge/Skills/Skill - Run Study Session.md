---
type: skill-note
status: installed
invocation: model-invoked
leading_word:      # TBD(候選:study / 溫習)
source: "[[AWS SAA-C03]]"
tags:
  - skill
---
# Skill: Run Study Session(一個指令開跑 SAA 溫習,warm-up 到 handoff 全程照 protocol)

> 用途:用一個指令啟動一節完整的 AWS SAA-C03 study session:載入 protocol 與 Exam Map、5 分鐘 retrieval warm-up、45 分鐘教學(按 Phase arc 決定形態)、15 分鐘共同反思,最後 dispatch saa-knowledge-manager 寫筆記與更新 dashboard。
> 觸發:跟側邊欄講「run a study session」「start studying」「study session」「開始溫習」「SAA study」。
> 安裝:已安裝為可呼叫 skill(`.claude/skills/run-study-session/SKILL.md`)。本筆記係設計稿與留底,改設計時兩邊要同步。教學規則本身住喺 [[Study Session Protocol]],唔住喺 skill 度;skill 只負責啟動同執行次序。
> 建議 model:Sonnet(判斷已前置入 protocol,session 屬執行工作;見設計筆記)。

## SKILL.md(可直接複製安裝)

```markdown
---
name: run-study-session
description: Use when Chukwan wants to run an AWS SAA-C03 study session, start today's study, do a retrieval warm-up, or continue exam prep. Trigger on "run a study session", "start studying", "study session", "開始溫習", "SAA study".
---

# Run Study Session

## 1. Load context, in order

1. `Knowledge/Professionals/AWS SAA-C03/00 Agent/Study Session Protocol.md`, the canonical session rules. This always wins over anything below or over memory of a previous run.
2. `00 Agent/Exam Map.md`, for domain weights and coverage so far.
3. `01 Dashboard/AWS SAA-C03 Home.md`, for days remaining and current focus.
4. `01 Dashboard/Active Unknowns.md`, for open blind spots.
5. Glob `02 Notes/` and `03 Questions/` for retrieval-warm-up candidates: items 3+ days old by their `date` field and not yet mastered.

## 2. Model check

This session is designed to run on Sonnet. If the current model is heavier, mention it once, then continue. Never block the session on model choice.

## 3. Run the session exactly per the protocol

- **Open** (about 10 min): retrieval warm-up first (previous session's 下一步, then 1 to 2 more items per step 1), map briefing, today's scope in one sentence, baseline check of what's already in his head, confirm timeframe.
- **Study** (about 35 min): follow the teaching loop, and shape it by whichever phase in the Phase arc the current date falls into (Foundations, Drill, or Mock + repair). From 2026-07-28 onward, end the question set with one cross-domain scenario.
- **Close** (15 min): joint reflection, unaided recall with no notes, then handoff.

## 4. NotebookLM

Use the MCP tools if available, for source-grounded citations. Conserve queries: reach for it when a citation matters (exam scope, weighting, official behaviour), not for routine explanation.

If unavailable or a call fails:
- Name the failure out loud and continue teaching from model knowledge. Never turn study time into troubleshooting.
- After the close, log the failure to `01 Dashboard/Fix List.md`. Do not fix it now.

## 5. Close and handoff

1. Dispatch the `saa-knowledge-manager` agent with the raw session output (goals, demonstrated understanding, unresolved concepts, reflection, one next step, never the full transcript). It writes, in order: session note, question notes, knowledge notes, unknowns triage, dashboard update.
2. Update the coverage column and detail in `00 Agent/Exam Map.md` yourself in the main session, or instruct the agent explicitly to do it. This file lives in `00 Agent/`, outside saa-knowledge-manager's usual write scope, so it is not touched unless told to.

## 6. Hard rules recap

- One question at a time; wait for his reasoning before moving on.
- English term first, 中文 as clarifier, in both explanations and questions.
- Guessed-correct is never mastery; record what actually happened.
- Capture his reasoning verbatim, mistakes included; clean formatting only, never the logic.
- Never paste the full chat transcript into the vault.
```

## 設計筆記(為何這樣寫)

- 解決的問題:每日開 study session 之前要手動打一大段 prompt(讀邊份 protocol、讀邊份 map、點樣開場),日日重複係摩擦成本,亦容易漏步驟(例如 warm-up 或 Exam Map coverage 更新)。一個 `/run-study-session` 收晒。
- **Skill 同 protocol 分層,係刻意的**:skill 只定「執行次序」(load 乜、跑邊三段、handoff 畀邊個),教學規則本身(teaching loop、evidence rules、45+15 timebox、Phase arc 日期)全部住喺 [[Study Session Protocol]]。噉樣改教法唔使掂 skill,亦令任何 model 都可以執行同一套 session:判斷已經前置寫入 protocol,session 時剩返執行,所以推薦 Sonnet 跑(對齊 consultant/executor 分工,Fable/Opus 留返做 protocol 修訂同每週 review)。
- **Retrieval warm-up 排第一**:mastery 規則要求 distilled 後 3+ 日要有一次成功 re-test,但之前冇任何機制去安排呢個 re-test,筆記會永遠停喺 `capture`。warm-up 由 `02 Notes/`/`03 Questions/` 抽 3+ 日前未 mastered 嘅項目,冇筆記作答,pass 直接計入 mastery evidence。上一節嘅 下一步 永遠係第一條 warm-up 題,令「下一步」真係會被執行。
- **Phase arc 按日期自動切換**:Foundations(而家至 08-01,Socratic)→ Drill(08-03 至 08-14,限時 10 題/20 分鐘)→ Mock + repair(08-15 至 08-21)。考試考量與速度(65 題/140 分鐘),第四週仲用第一日嘅教法就會識概念但爆鐘。07-28 起每節加一題跨 domain scenario(interleaving)。
- **NotebookLM fallback 係 Phase 1 已定嘅規則**:工具中途壞,講明、跳過、繼續教,收堂後先記入 [[Fix List]]。溫習時間永遠唔變 troubleshooting 時間。
- **Handoff 有一個特例**:saa-knowledge-manager 慣常只寫 `01`-`05` 資料夾,而 [[Exam Map]] 住喺 `00 Agent/`,所以 coverage 更新要主 session 自己做,或者明示 agent 去做,否則會漏。
- 安全屬性:唔貼全文 transcript 入 vault(只轉移 goals、demonstrated understanding、unresolved concepts、reflection、一個 next step);guessed-correct 一律唔當 mastery;原話 reasoning 逐字保留。
- 依 Matt writing-great-skills 慣例:load 有明確次序,每段有 timebox,fallback 有硬觸發。

## 連結

- 系統文件:[[Study Session Protocol]](canonical 教學規則)· [[Exam Map]] · [[Fix List]]
- 服務嘅專案:[[AWS SAA-C03]](Gate 2 of [[SA Presales Transition]])
- 落筆記嘅 agent:[[Agent - SAA Knowledge Manager]]
- 設計證據:[[Run - SAA Obsidian Study Experience (2026-07)]](Phase 1-3 interview log 同 2026-07-21 pilot)
- 相關 skill:[[Skill - Unknowns Navigator]](設計呢套系統用嘅 engine)· [[Skill - Coursera Notes]](課程來源入庫)
- 每日任務:[[SA 04 - AWS SAA Study & Exam]]
