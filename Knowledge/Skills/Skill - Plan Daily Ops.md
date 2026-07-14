---
type: skill-note
status: installed
invocation: model-invoked
leading_word:      # TBD
source: "[[Life @Huawei System]]"
tags:
  - skill
---
# Skill: Plan Daily Ops（開新一日 Daily Ops 筆記 + 由未完成任務生成 to-do）

> 用途:開新一天嘅 Daily Operations 筆記,並由 `Tasks/` 入面未完成嘅任務,自動填好「Today's linked tasks」——按 track(work/hub)→ project 分組。對 `Tasks/` 只讀不寫。
> 觸發:跟側邊欄講「plan my day」「set up today's note」「start my day」「開今日日誌」「計劃今日」。
> 安裝:已安裝為可呼叫 skill(`.claude/skills/plan-daily-ops/SKILL.md`)。本筆記係設計稿與留底,改設計時兩邊要同步 —— restart Claude Code 之後先會喺 `/` slash 選單出現。

## SKILL.md(可直接複製安裝)

```markdown
---
name: plan-daily-ops
description: Use when Chukwan wants to plan the day and set up today's Daily Operations note, populating its linked tasks from open task files. Trigger on "plan my day", "set up today's note", "start my day", "開今日日誌 / 計劃今日 / 幫我開今日 to-do".
---

Generate the new day's Daily Operations note and populate its **"Today's linked tasks"** section from open task files, grouped by track → project. Read-only against `Tasks/` — this skill only ever writes the daily note. Run in order.

## 1. Establish the operation day + note
- Default to **today**: `Operation Note/<D-M-YYYY> Daily Operations.md` (non-padded D-M-YYYY, e.g. `13-7-2026`).
- Compute the ISO date (`YYYY-MM-DD`) — needed for rrule/date filtering in §3.
- If the note doesn't exist, create it from the skeleton of the **most recent existing daily note** in `Operation Note/` — copy frontmatter, the H1 title, the Day-counter dataview line, and all section headers; leave prose sections empty.
- If it already exists, open it and operate in **append-only mode** (§5).
- **Completion:** note path + ISO date known, skeleton present.

## 2. Scan open tasks (READ-ONLY)
- Glob `Tasks/*.md`, read frontmatter only.
- A task is a **candidate** if `status` is `todo` or `doing` (exclude `hold` and `done`).
- Never write to any task file — this skill only writes the daily note.
- **Completion:** candidate list with each task's status/priority/scheduled/due/recurrence/timeEstimate/projects/contexts in hand.

## 3. Decide today-relevant vs backlog
A candidate is **TODAY-RELEVANT** if any:
- `scheduled` ≤ today
- `due` ≤ today
- has a `recurrence` rrule that fires today — parse `FREQ` + `BYDAY` two-letter codes (`MO`/`TU`/`WE`/`TH`/`FR`/`SA`/`SU`) against today's weekday, and today ≤ the `UNTIL` date.

Everything else among candidates is **BACKLOG**.

Also collect **CARRY-OVERS**: unchecked `- [ ]` lines from the previous daily note's "Today's linked tasks" section — preserve inline annotations verbatim (e.g. "2hrs", "double check").

- **Completion:** three buckets sorted — today-relevant, carry-overs, backlog.

## 4. Build the Today's linked tasks section
Structure:
- Two track headings: `#### ⚔️ Work (防守)` and `#### 🚀 Hub (進攻)`, split by `contexts` (`work` → Work, `hub` → Hub; neither → `#### 🗂 Unassigned`).
- Under each track, subheadings per project from the `projects` wikilink, e.g. `**[[SA Presales Transition]]**`; tasks with no project go under `**(no project)**`.
- Each task line: `- [ ] [[Task name]]` plus inline markers — `🔴 overdue` if `due` < today; `🔁 <timeEstimate>m` if recurring (show the `timeEstimate` minutes); nothing extra otherwise.
- A `#### 🔁 Carry-over from <prev date>` block listing carry-over lines verbatim (annotations intact).
- A collapsed backlog at the very bottom: `#### 📥 Backlog (open, not scheduled today)` then a flat `- [ ]` list — keep it out of the track sections.
- **Completion:** section rendered with track → project grouping, markers, carry-over block, backlog.

## 5. Append-only safety
- If today's note already had a populated "Today's linked tasks", do **NOT** rewrite or delete existing lines (they may carry the user's ticks/notes) — only append task lines that are missing.
- Never remove a `- [x]` or annotated line.
- **Completion:** no existing line destroyed; only additions made.

## 6. Drift report (READ-ONLY, ask don't fix)
- Compare the previous daily note's ticked `- [x]` items against those task files' `status`.
- If a note tick disagrees with the file status (e.g. ticked in the note but the file is still `todo`/`doing`), **LIST** the mismatches in chat and ask whether to update — do not edit task files automatically.
- Rationale: a tick often means "worked on it", not "done"; TaskNotes `status` stays authoritative.
- **Completion:** mismatches surfaced (or "none"); no task file written without user confirmation.

## Finish
Report the note path, the counts (today-relevant / carry-over / backlog), and the drift-report result (mismatches or "none"). No task file is ever touched by this skill.
```

## 設計筆記(為何這樣寫)
- 解決的問題:每朝手動由 `Tasks/` 抄未完成任務入日誌好煩,又易漏 recurring 任務(rrule 有無今日觸發要逐個算)同 carry-over(前一日冇 tick 完嘅嘢)。
- Today-relevant + backlog 兩層拆分:當日 5–10 項精選放頭,其餘 open 任務全部收落 `📥 Backlog`,唔會淹沒當日重點——回應「curated 少量」對「全部塞晒」嘅取捨。
- Track → project 分組:對齊 dual-track 防守(work)/進攻(hub)系統,一開個日誌就一眼睇到 20% 留白有冇平衡分配、有冇邊條賽道被漏晒。
- 兩個安全屬性:
  - **READ-ONLY against `Tasks/`**——呢個 skill 由頭到尾只寫日誌,從唔改任務檔;任務狀態(status/scheduled/due/recurrence)永遠以 `Tasks/` 為準。
  - **Append-only**——中途 re-run(例如朝早開一次、下午再問一次)唔會洗走你已經 tick 咗嘅項目或者手打嘅 inline notes,只會補漏。
- Drift report 只報唔改:日誌入面嘅 tick 通常代表「做過」,唔一定係「完成」;TaskNotes 嘅 `status` 先係權威來源。有落差就列出嚟問,唔自動幫你改任務檔。
- Recurrence 判斷靠 rrule 嘅 `BYDAY` 對今日星期幾,加 `UNTIL` 睇個 rrule 仲有無生效——同 [[Agent - SA Transition Advisor]] 入面 SA 系列 recurring task 用嘅係同一套機制。
- 依 Matt writing-great-skills 慣例:每一步都有明確 completion criterion,唔淨係「做咗個動作」就算過。

## 連結
- 系統中樞:[[Life @Huawei System]]
- 姊妹 start-of-day skill:[[Skill - Fill Daily Log]](一個開日、一個填日)
- 賽道/標籤規則:[[Tagging & Metadata Rules]]
- 服務嘅專案:[[SA Presales Transition]]
- 範本:[[Daily Operations Template]]
