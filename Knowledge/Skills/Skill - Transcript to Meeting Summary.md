---
type: skill-note
status: draft
invocation: model-invoked
leading_word:      # TBD（候選:faithful / [?]）
source: "[[5T Group Handover - Brief, Terminology & Summary Format]]"
tags:
  - skill
---
# Skill: Transcript → Meeting Summary（逐字稿整理 + 出摘要 + 存檔）

> 用途:你在 Obsidian Claude 側邊欄丟一個「第一版逐字稿」的路徑,它就 ① 忠實清理逐字稿 → ② 產出群組格式摘要 → ③ 存進對應會議筆記。
> 觸發:跟側邊欄說「整理這份逐字稿 <路徑>」「turn this transcript into a summary」之類。
> 安裝:把下方 `SKILL.md` 整段貼進 **Settings > Capabilities**(本筆記只是設計稿,不會自動變 skill)。

## SKILL.md(可直接複製安裝)

```markdown
---
name: transcript-to-meeting-summary
description: Use when chukwan gives a path to a raw/first-draft meeting transcript and wants it cleaned and turned into a saved meeting summary. Trigger on a transcript file path, "整理逐字稿", "clean this transcript", or "turn this into a meeting summary".
---
<!-- leading word: TBD（候選 faithful / [?]） -->

The raw transcript is ASR and is often far from what was actually said. Your job is **faithful cleanup, never invention.** Run in order.

1. Read the transcript at the path given. Completion: you have the full text. If the path is wrong or empty, ask before doing anything else.

2. Clean it — fix obvious ASR garbles and restore meaning, preserving every speaker's intent and all numbers/dates/names.
   - **Self-catch:** NEVER invent content to fill a gap. If a word, number, name, term or event is unclear, keep your best guess and mark it `[?]`; do not silently "improve" it. Fabricating to make it read smoothly is the exact failure this skill prevents.
   - Link known people to their CRM note as `[[Name employee_id]]` (check the `Relationship Management/` folder); leave unknown names plain.
   - Gloss/flag unfamiliar jargon, acronyms and event names with `[?]`, using `[[5T Group Handover - Brief, Terminology & Summary Format]]` as the reference where possible.
   - Save the cleaned transcript to `Operation Note/Meeting Transcript/<date> Meeting - <topic> - Transcript.md`. Do NOT overwrite the raw draft unless asked.
   - Completion: cleaned file saved; every uncertain item carries `[?]`.

3. Generate the formatted summary from the cleaned version, in the meeting's own language, using the group's morning-meeting format:
   ```
   <M.D> Morning Meeting Minute (<account> part)
   1. <topic / action> _<owner>
   2. ...
   ```
   Chinese variant: `DD/MM N组晨会内容及待办（<帐户>）：` then `事項 -负责人`.
   One line per decision/action, each with its owner; no narration; nothing beyond what the transcript supports.
   - Completion: every action line has an owner; no invented items.

4. Save the summary into the relevant meeting note under `Operation Note/`.
   - Find an existing meeting note for this meeting (match date + topic). If none exists, create one from `Template/Meeting Note Template.md` (frontmatter: type: meeting-note, date, account_or_project, attendees, hub: "[[Life @Huawei System]]"). Attendees linked to CRM.
   - Put the summary under a `## Summary` heading (or the group-format block). Link the cleaned transcript.
   - Completion: summary saved inside the meeting note.

End by telling chukwan the saved file path and listing **every `[?]` flag** as a short "please confirm" list. He can't reliably verify Mandarin ASR, so surfacing uncertainty is the whole point — do not bury it.
```

## 設計筆記(為何這樣寫)
- 解決的問題:ASR 逐字稿常偏離原話 → 需要忠實清理 + 不臆造 + 把不確定攤出來給你核。
- Invocation:model-invoked,側邊欄聽到「路徑 / 整理逐字稿」就跑。
- 已套用的 gap 修正(對照 Matt writing-great-skills):每步有 completion criterion;self-catch 寫成硬觸發(「fabricating … is the exact failure this skill prevents」);description 一個 branch 一個 trigger;結尾強制列出 `[?]` 清單(避免 premature completion / 把不確定藏起來)。
- 編碼了你 vault 的慣例:逐字稿放 `Operation Note/Meeting Transcript/`、會議筆記放 `Operation Note/`、人名連 CRM、術語查交接筆記、群組摘要格式。
- 待決:leading word(候選 faithful / `[?]`)。

## 連結
- 術語/格式來源: [[5T Group Handover - Brief, Terminology & Summary Format]]
- 會議筆記範本: [[Meeting Note Template]]
- 相關 skill: [[Skill - Data Submission Gate]] · [[Skill - Structured Problem Solving]]
