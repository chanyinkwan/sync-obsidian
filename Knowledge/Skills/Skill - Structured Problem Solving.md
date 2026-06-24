---
type: skill-note
status: draft
invocation: user-invoked
leading_word:      # TBD（候選:hypothesis）
source: "[[Fill FWA Roadmap Section 1.3 - Feedback v1 (2026-06-18)]]"
tags:
  - skill
---
# Skill: Structured Problem Solving(McKinsey 五步)

> 用途:接到分析 / 交付任務時,走完五步,別把流程壓成「只蒐集+填」。
> 觸發時機:任務開頭,由你打名字呼叫(user-invoked)。
> 安裝:把下方 `SKILL.md` 整段貼進 Settings > Capabilities。

## SKILL.md(可直接複製安裝)

```markdown
---
name: structured-problem-solving
description: McKinsey 5-step sequence for approaching an analysis or deliverable. Invoke by name at the start of a task.
disable-model-invocation: true
---
<!-- leading word: TBD（候選 hypothesis,累積任務後再定) -->

The two steps people skip are 2 (Design) and 4 (Interpret). Enforce them.

1. Frame — what exact question must this answer, and for whom? State an initial hypothesis.
2. Design — name the 2-3 key drivers and the analyses that would prove the hypothesis. Decide what to look at before gathering. Completion: an analysis list exists and each item ties to the hypothesis.
3. Gather — collect the data those analyses need, with sources.
4. Interpret — for every result, answer "So what?" and run a sanity check. Completion: no figure carries forward without an insight.
5. Present — lead with the answer.

Self-catch: if you jump from a new task straight to gathering or filling cells, stop — skipping step 2 is the failure this skill prevents.
```

## 設計筆記(為何這樣寫)
- 解決的問題:§1.3 時把五步壓成只剩第 3 步(蒐集+填),斷在第 2(Design)與第 4(Interpret)。來源見 source 反思區。
- Invocation 選擇:user-invoked(`disable-model-invocation`)—— 它範圍廣(幾乎所有任務),沒有單一 leading word 撐得起自動觸發,硬設 model-invoked 會亂跳或模糊。改由你開工時手動呼叫,零 context load,代價是你要記得它存在。
- 已套用的 gap 修正(對照 Matt writing-great-skills):
  - 改 user-invoked,description 縮成人讀的一句、砍 trigger 堆疊;
  - 第 2、4 步加 completion criterion;
  - 加 self-catch 防「看到空格就填」。
- 待決:leading word —— 候選 hypothesis(McKinsey 法本質是 hypothesis-driven);也可能要先收窄範圍才配得上一個錨詞。

## 連結
- 來源反思:[[Fill FWA Roadmap Section 1.3 - Feedback v1 (2026-06-18)]]
- 相關 skill:[[Skill - Data Submission Gate]]
