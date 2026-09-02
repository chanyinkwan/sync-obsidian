---
type: mistake
project: "[[Mistakes Log]]"
date: 2026-09-02
domain: Material Prep / Analysis
severity: high
status: solution-agreed
triggered_skill: "[[Decompose First Principle Prompt into First Principle Logic-driven Skill]]"
related: "[[Material Preparation]], [[Material 2]], [[Material Reflection]]"
tags:
  - mistake
---
# 揀咗攞得到嘅 metric 而唔係答到問題嘅 metric (2026-09-02)

## What happened
- 程哥條真問題係**和記有冇擺資源落去邊個品牌**（扶持荣耀？）。呢條問題公開數據原則上答唔到——「和記扶持」同「品牌買位」產生嘅貨架完全一樣。
- 冇喺 build 前將「答唔到」呢件事上枱同 asker 對齊，而係揀咗唯一 sourceable 嘅**純機價（OEM RRP）**做成個 deck 嘅主軸。
- 去到後期先發現：純機價反映唔到消費者實付（補貼/合約可以令實付移動而標價唔郁），亦反映唔到和記資源投放。31-8 下晝出現 `tco_matrix` / `bestseller_pricing` 就係中途轉軚嘅痕跡——但 deck 已經起咗喺錯嘅軸上。

## Why it happened (root cause)
- 裁決②（唔准編數）將成個流程推向「攞得到」而唔係「答得到」——燈柱下搵鎖匙。
- 缺陷其實**早喺 28-8 audit 已寫明**（A1：identical shelf；A7：標價 ≠ 實付），但埋喺 952 行輸出入面冇人讀到；Audit/Recombine/Experiment 三個 phase 自己標明「didnt review manually」。
- 冇一步強制回答：「呢個 metric 係因為答到條問題而揀，定係因為攞得到而揀？」

## Impact
- 成份 deck 嘅中心軸錯咗，後段無論人定 AI 都判斷唔到「和記有冇擺資源」——正正係 asker 想要嘅嗰句。
- 補鑊迭代食埋成個週末。

## ⚠️ Wrong "obvious" fix (to avoid)
- 搵另一個公開 metric 再砌一次——問題唔係 metric 揀錯咗一個，係中心問題本身公開數據答唔到。

## ✅ Right solution
- [x] Discuss with: Claude (2026-09-02 reflection session)
- **Agreed solution:** metric 選擇 gate——揀之前答一句：「答到定攞到？」如果中心問題落喺「要 X 數據先答到／公開數據答唔到」，**第一個 deliverable 係將個 gap 同 asker 對齊**（要咩數據、邊個手上有），唔係焗一個 workaround metric。
- Audit phase 加 answerability verdict（修訂條款見 [[Material Reflection]]）。

## Skill / system change triggered
- First-principle prompt set：Audit 加 ANSWERABILITY VERDICT、每 phase 加 compressed handover block——見 [[Material Reflection]]。
