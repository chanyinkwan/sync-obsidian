---
type: skill-note
status: installed
invocation: model-invoked
leading_word:      # TBD
source: "[[Fable Field Guide]]"
tags:
  - skill
---
# Skill: Unknowns Navigator（將 Map-vs-Territory / 4 Unknowns 哲學變成 strict interactive navigator）

> 用途:帶住一個 engagement(work 或 hub track 都得)行完 Map-vs-Territory 嘅 4 Unknowns 流程 —— 由 Blind Spot Pass 掃盲點,到 Interview / Brainstorm / References / Action Plan 落 Stage 1,Implementation Notes 追 Stage 2,再到 Pitch / Quiz / Ledger Distillation 收 Stage 3。全程一次淨係問一條問題,唔准一次過 dump 晒啲嘢畀你揀。
> 觸發:同側邊欄講「start an unknowns run」「unknowns run on X」「blind spot pass」「run the playbook on X」「resume the run」,或者「開 unknowns run」「盲點掃描」「走 playbook」。
> 安裝:已安裝為可呼叫 skill(`.claude/skills/unknowns-navigator/SKILL.md`)。本筆記係設計稿與留底,改設計時兩邊要同步 —— restart Claude Code 之後先會喺 `/` slash 選單出現。呢個 engine 本身零 domain content,實際嘅步驟同案例全部住喺 `Knowledge/Playbook - Finding Unknowns/` 入面嘅 playbook cards。

## SKILL.md(可直接複製安裝)

```markdown
---
name: unknowns-navigator
description: Use when Chukwan wants to run a strict, one-question-at-a-time engagement that turns Map-vs-Territory / 4-Unknowns philosophy into guided work across both the Work (防守) and Hub (進攻) tracks. Trigger on "start an unknowns run", "unknowns run on X", "blind spot pass", "run the playbook on X", "resume the run", "開 unknowns run / 盲點掃描 / 走 playbook".
---

Run a single Unknowns Navigator session: resolve which run note is active, then act as a **strict navigator** — one question per message, never a dump — driven entirely by the playbook cards in `Knowledge/Playbook - Finding Unknowns/`. This engine holds zero domain content; every axis, protocol step, and lesson lives in the cards it loads on demand. Run §0–§1 at session start, then exactly one of §2 or §3 for the rest of the session; §4–§6 govern every step throughout.

## 0. Load order
- Read only what the current step needs, in this order: the run note → the current stage map (`Stage 1/2/3 - ...md`) → the current technique card (`Technique - ...md`) → `Ledger - Lessons Learned.md` (filtered per §4) → `Dictionary - Ubiquitous Language.md` (only if a term the user or a card uses is ambiguous).
- **Never load all cards at once.** A full playbook read defeats the "amend one card, effective next session" design — stale context from an unrelated technique is worse than no context.
- The Hub card (`Playbook - Finding Unknowns (Hub).md`) is for the user's own browsing, not a dependency of any step — do not load it unless the user asks about the system itself.
- Once a card is loaded for the current step, don't re-read it on every question within the same technique — reload only when the step changes.
- **Completion:** you can name the exact file each fact came from; no unrelated card was opened.

## 1. Resolve the run
- Engagement named → glob `Operation Note/Unknowns Runs/` for a matching `Run - <engagement> (<YYYY-MM>).md`.
  - Exactly one match → open it.
  - Several matches → ask the user which one (one question, list the candidates).
  - None → create a new run note from `Template/Unknowns Run Template.md`, name it `Run - <engagement> (<YYYY-MM>).md` using the current year-month, then run a 4-question setup — **one question per message**: `contexts`, `project` wikilink, `domains`, `deadline`. Do **not** ask for the Brief here — that is Blind Spot Pass step 1, inside Stage 1.
- No engagement named → glob `Operation Note/Unknowns Runs/` for `status: open` run notes, list them by engagement name and current `stage`/`step`, and ask "resume which, or start new?" (one question).
- Setup questions run in the fixed order `contexts` → `project` → `domains` → `deadline`; `deadline` is optional in the run note contract, so accept "none".
- **Completion:** exactly one run note is open and its frontmatter is loaded before any technique executes.

## 2. Fast-Pass check
- If the open run note's frontmatter has `priority: urgent`: take this path instead of §3. **Ask no questions.**
- Rank blind-spot candidates in this order: (a) Ledger lines whose tags match the run's `domains` — paid-for knowledge, weighted first; (b) empty or thin quadrants of the run's 4 Unknowns Matrix; (c) the Blind Spot Pass card's six standard axes.
- Output **exactly one** markdown checklist, top 5 items only, each line shaped `- [ ] <blind spot> — verify before shipping: <cue>`.
- Append it as a nested `### Fast-Pass — <YYYY-MM-DD HH:mm>` heading inside the run note's `## ⚡ Fast-Pass` section — do not overwrite or remove prior Fast-Pass entries; each Fast-Pass call adds one more nested block.
- In that **same write**, reset the frontmatter `priority` back to `normal`. Leave `stage` and `step` untouched — Fast-Pass is a detour, not a stage transition.
- Report the checklist and **stop** — do not fall through into §3 this session, even if items remain unresolved.
- **Completion:** checklist appended under a fresh timestamped heading, `priority` reset in the same write, session ends without opening §3.

## 3. Strict navigator (guided mode)
- Runs whenever the Fast-Pass check (§2) did not fire — this is the default mode for Stage 1, Stage 2, and Stage 3 work alike.
- **Exactly one question per message, never multi-part.** This is a hard gate, not a style preference — do not append a second question "while we're at it".
- After every answer: reflect it back in ≤2 lines, write it into the run note section named in the current technique's Output contract, **then** proceed to the next question. Never batch the write, never ask ahead of the write.
- Never pre-fill an answer or generate content the protocol assigns to the user. Recognition lists (Blind Spot Pass's candidate list, Quiz's questions) are the only sanctioned model-generated dumps — everything else in this mode is elicited one item at a time from the user.
- Offer "skip" only when the current technique card's "When to run / skip" section explicitly allows a skip for this situation; otherwise the technique is mandatory.
- If the user volunteers more than the question asked (e.g. answers two facts at once), reflect both back but still ask only the next single question — never retroactively split their over-answer into two of your own turns.
- At every technique boundary, announce position before continuing: `Stage S · step k/n · <next technique>` — do this even when resuming a session mid-technique.
- Before advancing `stage`, check the current stage map's Exit gate. If any condition is unmet, name the missing condition to the user instead of advancing — do not advance "provisionally".
- **Completion:** one open question at a time throughout the session; every technique boundary announced; no stage advanced past an unmet exit gate.

## 4. Ledger injection
- At the start of each technique, parse `Ledger - Lessons Learned.md`. A line matches when its tags intersect the run's `domains` union the technique card's `ledger-tags`.
- **Wildcard:** if a technique's `ledger-tags` is `[any]` (Blind Spot Pass, Quiz), every Ledger line is a candidate — rank lines matching the run's `domains` first, then the rest, newest first within each rank.
- Inject matched lines newest first, capped at 5, as a "Lessons in play" block, one Ledger line per bullet, before the technique's protocol runs. If zero lines match, say so explicitly — do not skip the announcement or run the technique silently.
- Treat injected lessons as inputs to weight the technique's own protocol (e.g. they go first in Blind Spot Pass's candidate list) — never as a substitute for running the protocol.
- **Completion:** every technique start shows either a ranked, capped "Lessons in play" block or an explicit "no lessons match" line.

## 5. Amendment loop
- Fires only inside the Ledger Distillation technique (Stage 3), never elsewhere.
- Count tag recurrence across the whole Ledger. Any tag appearing **3 or more times** → propose a concrete edit, as a quoted diff, to the technique card whose `ledger-tags` it matches.
- **The engine never edits a playbook card itself.** Present the diff; the user applies it in Obsidian, or explicitly asks you to make the edit in this session.
- If multiple tags cross the threshold in the same Distillation, propose one diff per tag, in the order the tags were counted.
- **Completion:** every tag at or above the ≥3 threshold has a proposed diff shown to the user; no card file was written by this rule alone.

## 6. Safety
- The run note **body is append-only for user content** — mirror the plan-daily-ops discipline: never rewrite or delete an existing line the user or a prior session wrote; only add to it.
- The engine may modify **only** these frontmatter keys: `stage`, `step`, `priority`, `status`. Every other frontmatter key (`contexts`, `project`, `domains`, `deadline`, `started`) and the entire body is user territory — never edit them on the engine's own initiative.
- `Ledger - Lessons Learned.md` is append-only — new lines only, never edited or removed lines, and only ever appended via §5's user-confirmed flow.
- If a stage map or technique card referenced by the current step is missing or renamed, **halt** and name the exact missing file to the user. Never improvise a protocol from memory or from a similarly-named card — that reintroduces the domain content this engine is deliberately built without.
- **Self-catch:** if you notice yourself about to rewrite or delete existing body text rather than appending after it, stop — that is the exact failure this rule exists to prevent.
- **Completion:** no body line destroyed, no frontmatter key touched outside the four listed, no protocol improvised past a missing file.

## Finish
Every session — whether it took the Fast-Pass path or the guided path — ends by reporting: the run name, current `stage`/`step`, the next checkpoint (next technique, or the exit-gate condition still open), and any pending Ledger promotion proposals from §5. If nothing is pending, say so.
```

## 設計筆記(為何這樣寫)

- **兩層拆分:engine vs playbook,點解要分開。** `SKILL.md` 淨係管 state machine 同互動規則(問幾多條問題、幾時 load 邊個檔、frontmatter 邊啲欄位由邊個寫),完全冇任何 domain content(冇「六個 blind spot axes 係啲乜」呢啲實際內容)。實際嘅步驟、案例、seed lessons 全部住喺 `Knowledge/Playbook - Finding Unknowns/` 入面嘅 cards。呢個分法係抄返 Chukwan 原本 dual-track 系統嘅精神:engine 好少改,改一次要 restart Claude Code 先生效;playbook cards 就隨時開 Obsidian 改,即時生效,唔使 restart。即係「改行為 = 重裝機器」對「改知識 = 換彈藥」嘅分工,呢個亦解釋咗點解 §5(amendment loop)特登寫到「engine 永遠唔會自己改 playbook card」—— engine 淨係識提議,唔識落手,落手嗰下一定要人喺 Obsidian 度做,保持成個系統嘅「可審計」性質。

- **Fast-Pass 嘅 detour 語義 + auto-reset 嘅理由。** Fast-Pass 唔係一個新嘅 stage,係一條逃生門——當個 run note frontmatter 寫咗 `priority: urgent`,engine 完全唔問問題,直接由 Ledger + Matrix 嘅弱項 + 六大軸,計出嚟一個 top 5 checklist 就交畀你,然後即刻停。所以 §2 特登要求「`stage`/`step` untouched」——因為呢個唔係你行緊嗰條 stage 1→2→3 嘅正常路線,只係借個 run note 嚟做一次快速嘅風險掃描,唔應該當佢係一個 technique 行完咗。而 `priority` 一定要喺**同一次 write** 入面 reset 返做 `normal`,原因係如果分開兩次寫,萬一中途斷咗線,個 flag 就會卡住喺 `urgent`,下次入嚟又即刻走一次 Fast-Pass,永遠都行唔返正常嘅 guided mode——呢個係 idempotency 嘅考慮,同 atomic write 嘅概念一樣。另外嗰個 nested `### Fast-Pass — <timestamp>` heading 都係刻意——因為同一個 run 可能會叫好幾次 Fast-Pass(唔同時間、唔同焦慮位),所以呢個 section 要 append-only 咁儲低歷史,唔可以每次覆蓋番舊嗰個。

- **Ledger 文法 + promotion rule。** Ledger 入面每條 lesson 一行,帶 hashtag 做 tag(例如 `#h3g #spectrum`),呢個文法夠簡單就可以俾 engine 用純文字 parse。`ledger-tags: [any]` 呢個 wildcard 淨係俾咗兩張卡(Blind Spot Pass、Quiz)——因為呢兩個 technique 嘅性質係「乜都要睇一次」,唔應該局限喺某幾個 tag 先注入,所以佢哋見到成本 Ledger 嘅所有行,但排序上會將撞中今次 run `domains` 嗰啲排前面。Promotion rule(同一個 tag 出現 ≥3 次就提議改 technique card)係成個學習迴圈嘅核心——即係話單一次教訓唔會即刻改流程(避免一次性嘅雜訊污染咗個 playbook),但累積夠三次先算係「真係會重複出現嘅 pattern」,先值得將佢由「一行 Ledger」升級做「卡入面嘅一條 protocol」。同一時間 promotion 永遠淨係「提議」,唔會自動套用,呼應返成個系統對「知識可審計、可拒絕」嘅堅持。

- **vault-wide、雙賽道(dual-track)嘅 scope。** 呢個 engine 冇假設個 engagement 一定係 work track(deals、RFP、workshop、sample ops)定係 hub track(SA transition、job hunt、個人項目)——run note frontmatter 入面嘅 `contexts` 欄本身就同 TaskNotes 用緊嗰套 `work`/`hub` 詞彙對齊,兩條賽道用同一套 4 Unknowns 邏輯,唔會為咗其中一條賽道加特殊分支。原本嘅 telecom 案例(H3G、band mismatch 呢啲)淨係當 seed examples 出現喺 Ledger,唔會寫死喺 protocol 度,即係話成套嘢隨時可以攞去用喺一個完全同電訊業無關嘅 hub 項目上。

- **安全規則點解要咁死。** Run note 嘅 body 對用戶內容係 append-only,直接抄 [[Skill - Plan Daily Ops]] 嗰套紀律——因為個 body 入面全部係用戶親手打嘅答案、決定、reflection,呢啲嘢一旦俾 engine 手滑覆蓋咗就冇得補救。所以 engine 淨係俾佢改四個 frontmatter 欄(`stage`/`step`/`priority`/`status`)——呢四個先係「機器狀態」,其餘全部係「用戶資產」。仲有一條「halt-on-missing-card」——如果某張 stage map 或 technique card 唔見咗或者改咗名,engine 一定要停低同你講邊個檔案搵唔到,唔准憑記憶「砌返個大概流程出嚟」——因為呢個 engine 本身就係設計成「冇 domain content」,一旦佢自己估返個 protocol,就即刻違反咗成個「engine/playbook 分離」嘅原則,亦都會令你完全唔知道你而家行緊嘅步驟係咪真係嗰張卡度寫嘅嘢。

## 連結
- Hub / 系統地圖:[[Playbook - Finding Unknowns (Hub)]]
- 教訓存放處:[[Ledger - Lessons Learned]]
- Run note 範本:[[Unknowns Run Template]]
- 系統中樞:[[Life @Huawei System]]
- 原文出處:[[Fable Field Guide]]
