---
type: skill-note
status: installed
invocation: model-invoked
leading_word:      # TBD（候選:allocate / 留白 / log）
source: "[[Life @Huawei System]]"
tags:
  - skill
---
# Skill: Fill Daily Log（用番茄鐘 + 聊天紀錄回填每日日誌兩題）

> 用途:回填某天 Daily Operations 的兩題 —— **"What actually happened today"**(每則 `[[筆記]] — ≤10 字描述`,當索引)與 **"How is your time allocated today?"**(`lane / category · 時長`,量化)。兩題共用同一次「番茄鐘(量)× 聊天紀錄(質)」證據蒐集。
> 觸發:跟側邊欄說「幫我填今天的日誌 / what happened today / 時間分配」,或直接貼當天的番茄鐘 log。
> 安裝:已安裝為可呼叫 skill(`.claude/skills/fill-daily-log/SKILL.md`)。本筆記是設計稿與留底;改設計時兩邊要同步。
> 沿革:前身為 `fill-time-allocation`(只填時間分配),2026-07-06 擴充為兩題並改名。

## SKILL.md(可直接複製安裝)

```markdown
---
name: fill-daily-log
description: Use when Chukwan wants a Daily Operations note's "What actually happened today" and/or "How is your time allocated today" filled from that day. Trigger on "fill in my daily log", "what happened today", "how was my time allocated", "幫我填今天的日誌/時間分配", or a pomodoro log pasted for a given operation day.
---
<!-- leading word: TBD（候選:allocate / 留白 / log） -->

Fill two sections of a Daily Operations note — "What actually happened today" and "How is your time allocated today?" — by reconciling that day's Claude chat history with the user's pomodoro log. Ground truth only. Run in order.

1. Establish the operation day + note. Default to today's Operation Note/<D-M-YYYY> Daily Operations.md; note the ISO date. Completion: path + ISO date; ask before creating a missing note.

2. Collect evidence (shared by both sections).
   A. Pomodoro record (quantitative) — read TaskNotes' log: .obsidian/plugins/tasknotes/data.json → pomodoroHistory (array of {startTime, endTime, plannedDuration, type, taskPath, completed}); filter startTime date == target date. startTime/endTime are LOCAL (ISO +offset, unlike chat UTC). Count type:work; sum per taskPath — taskPath maps a block to its note (§3) and its contexts→lane (§4). No sessions that day → say so, fall back to chat timestamps; ask only if both empty. User may paste extra/offline 🍅 — merge. Never invent durations.
   B. Chat history (qualitative — what + which notes) — read C:\Users\k84450674\.claude\projects\C--Users-k84450674-Desktop-Career-Journey\*.jsonl; each line has "timestamp" (ISO/UTC, UK +1), "type", "message". Shortlist by mtime, filter to the date, extract the ordered timeline (requests, files/tasks/meetings touched, tool actions) + each activity's note. Skim linked tasks/meetings for offline context. Completion: durations per activity + activity→note map.

3. Write "What actually happened today". One bullet per activity: [[relevant note]] — <description ≤10 words>. Quote the note the work lives in; if none, description alone. Index, not narrative — deep detail stays in the linked note. Self-catch: link only notes that exist and were touched; verify links resolve; never pad. Completion: every activity = one [[note]] — ≤10-word line.

4. Write "How is your time allocated today?". Two axes: lane = contexts (work / hub; see Tagging & Metadata Rules); category = admin / build (internal·system) / delivery (core commercial) / maintenance / reflection / meeting. Output terse, quantitative only (narrative is in §3): one line per block [lane] / [category] · [duration], aggregate same lane+category, lead with a lane total (e.g. hub ~1h55m · work ~1h41m). Only extra text = ⚠ (… confirm) on offline blocks. Self-catch: every minute traces to a 🍅 block or chat event; unaccounted time gets a ⚠ line — never pad the day or inflate hub to hit ~20%. Completion: lane total + every block lane/category·duration + offline ⚠.

5. Write into the note — only the two sections; leave the rest untouched.

Finish: one-line lane split; flag unaccounted time, 🍅-without-chat (offline — confirm), chat-without-🍅 (untimed — confirm), and any activity with no note.
```

## 設計筆記(為何這樣寫)
- 解決的問題:每日日誌兩題("What actually happened" + "time allocated")最煩、最常空著;憑記憶填不準也會膨脹「感覺很忙」。改為 **番茄鐘(量)× 聊天紀錄(質)** 兩來源一次蒐集、餵兩題。
- 兩題分工:§3「what happened」= 質性索引(`[[筆記]] + ≤10 字`,細節留在被連的筆記);§4「time allocated」= 量化(lane/category·時長)。兩者都不寫長敘述,互補不重複。
- Invocation:model-invoked;側邊欄聽到「填日誌 / 貼番茄鐘」就跑。
- 兩來源互補:番茄鐘只知「多久」;`.jsonl` 有 timestamp + 內容但只涵蓋線上、且 UTC。線下(會議/樣機)靠連結筆記補。
- lane = TaskNotes `contexts`(work / hub),對齊「可按賽道加總番茄鐘」的設計;category 6 類 2026-07-06 定案。
- 番茄鐘來源(2026-07-06 定案):自動讀 `.obsidian/plugins/tasknotes/data.json` 的 `pomodoroHistory`,不再要你手貼。每筆有 `taskPath`,直接對到筆記與該任務的 `contexts`(賽道)。當天沒跑番茄鐘就退回用 chat timestamp 估時。
- 已套用的 gap 修正(對照 Matt writing-great-skills):每步 completion criterion;self-catch 寫成硬觸發(「manufacturing allocation … is the exact failure」+「never invent an activity to pad」);description 一個 branch 一個 trigger;結尾強制列對帳缺口。
- category 清單(2026-07-06,6 類):admin / build(內部·系統) / delivery(核心商業交付) / maintenance / reflection / meeting。build vs delivery 以「內部系統 vs 對客商業」分。
- 待決:①leading word(候選 allocate / 留白 / log);②UTC↔UK 跨午夜邊界偶爾要人工核(chat log 是 UTC,pomodoro 是本地時間);③category `delivery` 是否要 lane-aware(work=商業、hub=求職交付)——待用戶決定。

## 連結
- 系統中樞:[[Life @Huawei System]]
- 範本:[[Daily Operations Template]] · 反思四問:[[Daily Reflection Template]]
- 賽道/標籤規則:[[Tagging & Metadata Rules]]
- 相關 skill:[[Skill - Transcript to Meeting Summary]]（同為「讀來源→回填/存檔」型)· [[Skill - Structured Problem Solving]]
- 參考輸出:[[29-6-2026 Daily Operations]] · [[2-7-2026 Daily Operations]]
