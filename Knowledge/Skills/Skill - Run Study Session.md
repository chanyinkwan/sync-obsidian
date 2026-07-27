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

> 用途:用一個指令啟動一節完整的 AWS SAA-C03 study session:載入 protocol、Exam Map、Study Triage、Cantrill Index(只 grep 唔全讀)、5 分鐘 retrieval warm-up、35 分鐘教學(按 Phase arc 決定形態,疊加 analogy → architecture flow → exam callout → real-world why 嘅講解結構)、15 分鐘共同反思,最後 dispatch saa-knowledge-manager 寫筆記與更新 dashboard(包括 Touched/Proven 狀態)。Tutor 平時直接由 Cantrill transcript 教學(跟 Cantrill 原本嘅 build-up 次序),再驗證;Cantrill 片本身淨係喺理解真係唔夠先會指派一條指定短片做 JIT remediation,並喺相關筆記度落一個 flag,唔會變成一個獨立狀態,session 入面唔會睇片。
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

## 0. North star and the three layers

Pass SAA-C03 on 2026-08-23 by building real architectural understanding — never by cramming answer keys. Two horizons: **by exam day**, pass plus genuine mastery of a high-leverage CORE (per `00 Agent/Study Triage.md`); **beyond exam day**, keep mastering the remaining tail on the normal Socratic trajectory. This is Gate 2 of the SA career transition, not a one-shot exam hack.

This system runs on three layers — know which one a file belongs to before touching it:
- **Layer 1, Coverage/Retention**: the frozen Syllabus + the `01 Dashboard` readiness views + `00 Agent/Exam Map.md`, tracking each topic through **Untouched < Touched < Proven**.
- **Layer 2, Remediation Pointer**: `00 Agent/Cantrill Index.md` (syllabus-id → lecture file → video URL).
- **Layer 3, Readiness Gate**: the mock log + sealed-mock inventory + the go/no-go decision. That decision itself is weekly-review territory, not this skill's.

Before any reschedule decision, check whether the AWS ESL +30-min accommodation is in play — it changes what "behind" means.

## 1. Load context, in order

1. `Knowledge/Professionals/AWS SAA-C03/00 Agent/Study Session Protocol.md`, the canonical session rules. This always wins over anything below or over memory of a previous run.
2. `00 Agent/Exam Map.md`, for domain weights and coverage so far, including each topic's Touched/Proven state.
3. `00 Agent/Study Triage.md`, for which syllabus-ids are Core (need Proven), Tail (need Functional), or Sacrifice (skip is enough) — this is what tells the session what today's coverage target actually is.
4. `01 Dashboard/AWS SAA-C03 Home.md`, for days remaining and current focus.
5. `01 Dashboard/Active Unknowns.md`, for open blind spots.
6. Glob `02 Notes/` and `03 Questions/` for retrieval-warm-up candidates: items 3+ days old by their `date` field and not yet mastered.
7. `00 Agent/Cantrill Index.md` — **load only the file path, then grep it for the row(s) matching today's concept.** Never dump the full index into context; it exists to answer "which lecture" one lookup at a time, not to be read cover to cover.

## 2. Model check

This session is designed to run on Sonnet. If the current model is heavier, mention it once, then continue. Never block the session on model choice.

## 3. Run the session exactly per the protocol

- **Open** (about 10 min): retrieval warm-up first (previous session's 下一步, then 1 to 2 more items per step 1), map briefing, today's scope in one sentence, baseline check of what's already in his head, confirm timeframe. If today's window is closer to 15 minutes, run the **Minimum Viable Day** instead: retrieval warm-up only, log it, skip Study/Close. It still counts as not breaking the chain.
- **Study** (about 35 min): teach FROM the Cantrill transcript for today's scope, in Cantrill's own build-up order, then validate — this layers on top of the teaching loop in the Protocol and the explanation micro-structure — **analogy → architecture flow → exam callout → real-world why**. This layers on top of persona-first, English-first, and diagnostic layering; it does not replace them. Shape the session by whichever phase in the Phase arc the current date falls into. From 2026-07-28 onward, end the question set with one cross-domain scenario. During drill phases, pull material in this order: section-quiz warm-up → fresh scenario drills → protected full mock. Sealed practice exams are quarantined — never used as daily drill material, only as the two unseen mocks in the readiness gate.
- **Stuck escalation** (inside Study): unaided fail → foundational correction → fresh validation question → only if it still fails, assign one specific short Cantrill video as JIT remediation, naming the exact lecture, not just "review this domain," and flag it on the relevant note. Never escalate to a video assignment after a single miss.
- **Promotion bar:** Touched → Proven is governed solely by the mastery test's single clock in [[Agent Instructions]] — 2 correct **unaided** retrievals, with at least one happening 3+ days (72h) after the note reached distilled. Guessed-correct is never mastery, in any phase — this holds identically in drill and mock, not only in Socratic teaching.
- **Prioritisation** (drill and mock phases): priority = domain weight × gap to target. Keep cross-domain interleaving going per the rule above; it does not stop once drill starts.
- **Readiness gate** (context for the tutor, not a decision this skill makes): two unseen timed mocks ≥80% overall — a self-imposed buffer above the official pass line of roughly 720/1000 (≈72%) — with a 70–75% per-domain floor. Fallback: 76% overall with every domain floor met still counts as GO, so the buffer alone can't force a pointless no-go.
- **Close** (15 min): joint reflection, unaided recall with no notes, then handoff. After **every** mock, not just a bad one, run an autopsy pass tagged by taxonomy — knowledge-gap vs misread vs trap-pattern. Full mocks are full-length, timed, one sitting (this trains reading stamina, not just recall); cap flag-and-move time at 90 seconds per question.

## 4. Tooling split

- **NotebookLM** (`aws-saa-c03-architectural-prob`): exam-scope and official-behaviour citations. Conserve queries — reach for it when a citation matters, not for routine explanation.
- **Cantrill Index** (local, grepped): "which video to watch" pointers. NotebookLM cannot cite a single video URL, so don't ask it to do Layer 2's job.

If either is unavailable or a call fails:
- Name the failure out loud and continue teaching from model knowledge. Never turn study time into troubleshooting.
- After the close, log the failure to `01 Dashboard/Fix List.md`. Do not fix it now.

## 5. Close and handoff

1. Dispatch the `saa-knowledge-manager` agent with the raw session output (goals, demonstrated understanding, unresolved concepts, reflection, one next step, never the full transcript). It writes, in order: session note, question notes, knowledge notes, unknowns triage, dashboard update.
2. Update the coverage column and detail in `00 Agent/Exam Map.md` yourself in the main session, or instruct the agent explicitly to do it. This file lives in `00 Agent/`, outside saa-knowledge-manager's usual write scope, so it is not touched unless told to. Record Touched/Proven transitions, not just a binary covered/not.

## 6. Hard rules recap

- One question at a time; wait for his reasoning before moving on.
- **Delivery language (bilingual).** Run the whole session in mixed Traditional Chinese + English. Keep every technical term in English — AWS service names, exam vocabulary, and any concept the exam tests in English (e.g. `IAM Role`, `Security Group`, `Multi-AZ`, `SigV4`, `Explicit Deny`). Write all surrounding explanation, questions, and reflection prose in Traditional Chinese (繁體中文); switch to English only for the terms themselves. Rationale: the exam is in English so terms must stay English, but Traditional-Chinese prose lowers reading friction and cognitive load. This supersedes the older "English term first, Chinese as clarifier" phrasing — terms stay English, but the connective explanation is now Traditional-Chinese-dominant.
- Guessed-correct is never mastery, in every phase — Socratic, drill, or mock. Record what actually happened.
- Promotion to Proven runs on the single mastery clock: 2 unaided correct retrievals, at least one 3+ days (72h) after distilled, not one lucky pass.
- A miss that triggers JIT remediation gets logged plus a video assignment (flagged on the note), not a full repair loop.
- Capture his reasoning verbatim, mistakes included; clean formatting only, never the logic.
- Never paste the full chat transcript into the vault.
```

## 設計筆記(為何這樣寫)

- 解決的問題:每日開 study session 之前要手動打一大段 prompt(讀邊份 protocol、讀邊份 map、點樣開場),日日重複係摩擦成本,亦容易漏步驟(例如 warm-up 或 Exam Map coverage 更新)。一個 `/run-study-session` 收晒。
- **Skill 同 protocol 分層,係刻意的**:skill 只定「執行次序」(load 乜、跑邊三段、handoff 畀邊個),教學規則本身(teaching loop、evidence rules、45+15 timebox、Phase arc 日期)全部住喺 [[Study Session Protocol]]。噉樣改教法唔使掂 skill,亦令任何 model 都可以執行同一套 session:判斷已經前置寫入 protocol,session 時剩返執行,所以推薦 Sonnet 跑(對齊 consultant/executor 分工,Fable/Opus 留返做 protocol 修訂同每週 review)。
- **Retrieval warm-up 排第一**:mastery 規則要求 distilled 後 3+ 日要有一次成功 re-test,但之前冇任何機制去安排呢個 re-test,筆記會永遠停喺 `capture`。warm-up 由 `02 Notes/`/`03 Questions/` 抽 3+ 日前未 mastered 嘅項目,冇筆記作答,pass 直接計入 mastery evidence。上一節嘅 下一步 永遠係第一條 warm-up 題,令「下一步」真係會被執行。
- **Cantrill 用法收窄返做 JIT-only(priming engine 呢個概念已經撤銷)**:之前試過將 Cantrill 分做「between-session priming engine」同「JIT remediation pointer」兩個角色,但 priming engine 呢個前提已經俾用家推翻——冇證據話「session 之間自報睇咗片」會可靠咁反映真實理解,反而製造一個 agent 睇唔到、要靠自報嘅狀態。而家淨返一個角色:tutor 平時直接由 Cantrill transcript 教學(跟 Cantrill 原本 build-up 次序)再驗證;卡住先指派一條指定短片做 JIT remediation,喺相關筆記度落一個 flag,唔會變成獨立狀態,session 內永遠唔睇片。
- **Stuck-escalation ladder 分四級,「指派一條短片」係最後一步唔係第一步**:unaided fail → foundational correction → fresh validation → 仲係唔得先指派一條指定 JIT remediation 短片(要指名邊條 lecture,喺筆記落 flag)。目的係防止一次 miss 就急住派功課,而唔畀 in-session correction 一個機會。
- **Promotion bar 收返單一 clock**:Touched → Proven 淨係跟 [[Agent Instructions]] 嗰個四關 mastery test 嘅單一時鐘——2 次 unaided correct,其中至少一次係 distilled 後 3+ 日(72 小時)先算,冇第二條時間規則。呼應「guessed-correct 唔算 mastery」,擴展到全部 phase——drill 同 mock 入面 guess 中都唔算數,唔淨係 Socratic 教學先算。
- **Drill/mock 規則收緊**:drill 素材次序(section quiz → fresh scenario → protected full mock)同 sealed exam 隔離(sealed 卷永遠唔做日常 drill,淨係做 readiness gate 嗰兩份 unseen mock),係為咗保留 sealed 卷嘅「未見過」屬性到最後。Readiness gate 數字(80% overall buffer、70–75% per-domain floor、76% + 全部 domain floor 達標都算 GO 嘅 fallback)寫入 skill 係暫時做法——概念上呢個屬於 Layer 3 governance,長遠應該同 Phase arc 一齊搬入 Protocol,但今次唔改 Protocol 檔案,所以先記喺呢度,下次改 Protocol 時要搬埋過去(見下面 pacing arc 嗰條)。Autopsy 由「淨係 late 先做」改成「每次 mock 都做」,並且分 taxonomy(knowledge-gap / misread / trap-pattern),等錯誤可以被歸類而唔係堆埋一齊。90 秒 flag-and-move cap 對應嘅係考試本身嘅時間壓力(65 題 / 140 分鐘)。
- **Pacing / phase arc 由三段換成 W1–W4,呢個係本次唯一同 Protocol 現有內容有出入嘅地方**:Protocol 現存嘅表(Foundations → Drill → Mock+repair)已經被新排程取代——W1(07-26→08-01)tutor-led coverage(由 Cantrill transcript 教)、四個 domain 都離開零基礎、限時做完 Secure network/encryption cluster(對 Secure 呢個熟悉 domain 加時間上限,唔畀佢吃晒成星期);W2(08-02→08-08)週末做 Mock #1、同時教 Perf/Cost;W3(08-09→08-15)drill-dominant、限時 10 題/20 分鐘、priority = domain weight × gap to target、做 Mock #2;W4(08-16→08-22)兩份 sealed unseen mock + repair;08-21→08-23 taper + rest。Mock #2(約 08-09–08-12)係 early reschedule 決策點——如果 <60%,「≥80% by 08-20」呢條路已經死咗,要喺嗰陣做決定,唔好等到 08-20 先發現。**呢份 skill 設計筆記記低咗新排程,但 Protocol 檔案本身(`Study Session Protocol.md`)嘅 Phase arc 表暫時未跟住改**——SKILL.md 入面淨係抽象咁講「跟返 Phase arc 揀形態」,冇寫死舊日期,所以唔會直接衝突,但 Protocol 嘅表遲早要單獨更新去反映呢個新排程,否則兩份文件會唔一致。
- **Logistics 誠實化**:平日負荷寫明 ~1.5–2 小時。加返 Minimum Viable Day(15 分鐘 retrieval-only,都算冇斷鏈)畀真係冇時間嘅日子用。Missed-day absorption rule 同 taper 前留一日 rest day 呢兩條屬於跨日排程政策,冇放入 SKILL.md 嘅單次執行步驟入面,交返 weekly review(sa-transition-advisor 層面)處理,對齊 Protocol 原有「scheduling 唔係 tutor 嘅事」呢個分工。
- **ESL accommodation flag**:喺 SKILL.md 最頂(Layer 0)提一句——check AWS ESL +30 分鐘 accommodation——先過做任何 reschedule 決定,因為「落後幾多」呢個判斷要連埋呢個 buffer 一齊計,否則會太早驚慌。
- **Labs 政策**:淨係做必要嘅 lab,portfolio 用嘅 lab 同考試窗口嘅溫習時間分開計,唔佔用 exam-prep 嘅 session 時數。呢條屬於資源分配政策,冇寫入 SKILL.md 嘅逐步執行,留喺呢度做記錄。
- **NotebookLM fallback 係 Phase 1 已定嘅規則,呢次擴展到 Cantrill Index**:工具中途壞,講明、跳過、繼續教,收堂後先記入 [[Fix List]]。溫習時間永遠唔變 troubleshooting 時間。兩個工具分工亦寫清楚:NotebookLM 答「考試範圍/官方行為」,Cantrill Index 答「睇邊條片」——NotebookLM 答唔到單一 video URL,所以呢個分工唔可以疊埋。
- **Handoff 有一個特例**:saa-knowledge-manager 慣常只寫 `01`-`05` 資料夾,而 [[Exam Map]] 住喺 `00 Agent/`,所以 coverage 更新(而家包埋 Touched/Proven 狀態轉換)要主 session 自己做,或者明示 agent 去做,否則會漏。
- **語言規則由「英文術語 + 中文輔助」改為「雙語」**:術語(AWS service names、考試詞彙)繼續固定英文,但周邊解說、提問、反思一律改用繁體中文為主,理由係考試本身英文,術語必須英文,但繁中解說可以減低閱讀阻力同認知負擔;呢條已同步入 Protocol,取代舊有「English term first, Chinese as clarifier」講法。
- 安全屬性:唔貼全文 transcript 入 vault(只轉移 goals、demonstrated understanding、unresolved concepts、reflection、一個 next step);guessed-correct 一律唔當 mastery(全部 phase 通用);原話 reasoning 逐字保留。
- 依 Matt writing-great-skills 慣例:load 有明確次序,每段有 timebox,fallback 有硬觸發。

**Sync note**:呢份 design note 改完之後,已安裝嘅 `.claude/skills/run-study-session/SKILL.md` 要跟住同步更新,令兩處內容一致——唔可以淨係改咗呢份筆記就當完成。

## 連結

- 系統文件:[[Study Session Protocol]](canonical 教學規則,現存 Phase arc 表待同步新排程)· [[Exam Map]] · [[Fix List]]
- Layer 2 / Layer 3 相關檔案(新增):`00 Agent/Cantrill Index.md`(syllabus-id → lecture → URL)· `00 Agent/Study Triage.md`(Core/Tail/Sacrifice per syllabus-id)
- 服務嘅專案:[[AWS SAA-C03]](Gate 2 of [[SA Presales Transition]])
- 落筆記嘅 agent:[[Agent - SAA Knowledge Manager]]
- 設計證據:[[Run - SAA Obsidian Study Experience (2026-07)]](Phase 1-3 interview log 同 2026-07-21 pilot)
- 相關 skill:[[Skill - Unknowns Navigator]](設計呢套系統用嘅 engine)· [[Skill - Coursera Notes]](課程來源入庫)
- 每日任務:[[SA 04 - AWS SAA Study & Exam]]
