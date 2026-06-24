---
type: skill-note
status: draft
invocation: model-invoked
leading_word:      # TBD（候選:interrogate / gate）
source: "[[Fill FWA Roadmap Section 1.3 - Feedback v1 (2026-06-18)]]"
tags:
  - skill
---
# Skill: Data Submission Gate(數據送出前四問)

> 用途:任何「數據交付」離手前,逐個數字過四問,把已知風險量化而不是塞註腳。
> 觸發時機:你正要送出 / 分享一張表、一組數字、一張圖或一份分析。
> 安裝:把下方 `SKILL.md` 整段貼進 Settings > Capabilities。

## SKILL.md(可直接複製安裝)

```markdown
---
name: data-submission-gate
description: Use before any data deliverable (numbers, table, chart, analysis)
  leaves chukwan's hands. Runs a four-question integrity check on every figure so
  flagged risks get quantified, not footnoted.
---
<!-- leading word: TBD（候選 interrogate / gate,累積任務後再定) -->

A draft stays a draft until every figure has passed all four questions.

Self-catch: if chukwan is moving to submit a table and any figure has an
unanswered question — or a caveat he raised in conversation is sitting as a
footnote instead of a quantified number — stop. Shipping a flagged-but-
unquantified number is the exact failure this skill prevents.

For EACH figure, answer:
1. Clean? — any external force (M&A, promo, one-off)? Output the figure with the distortion removed.
2. How computed? — numerator/denominator, weighted vs simple, and is it the right entity (group vs the target)? Output the formula and the correct cut.
3. Direction? — pull at least 3 points over time. Output the shape ("flat after a dip"), not a bare arrow.
4. So what? — one-line insight for the decision/audience.

Completion criterion: every figure in the deliverable has all four answered, listed figure by figure. "Looks done" is not done.
```

## 設計筆記(為何這樣寫)
- 解決的問題:§1.3 交付時把「+40% 是併購」這類已知警示放成星號註腳就送出(過早閉合)。來源見 source 反思區。
- Invocation 選擇:model-invoked —— 它必須在「我正要送出」那一刻自動跳出來攔我,不能靠我記得呼叫。
- 已套用的 gap 修正(對照 Matt writing-great-skills):
  - description 砍同義詞(submits/sends/finalizes/shares → 一個 branch);
  - 加可勾選且窮盡的 completion criterion(每個數字逐一列、無遺漏);
  - 把 self-catch 寫成 Matt 式硬觸發("the exact failure this skill prevents");
  - 砍 no-op。
- 待決:leading word —— 候選 interrogate(姿態)/ gate(機制),等跑過幾個真實任務看自己慣用哪個再定。

## 連結
- 來源反思:[[Fill FWA Roadmap Section 1.3 - Feedback v1 (2026-06-18)]]
- 相關 skill:[[Skill - Structured Problem Solving]]
