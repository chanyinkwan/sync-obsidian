---
type: mistake
project: "[[Mistakes Log]]"
date: 2026-09-02
domain: Material Prep / Workflow
severity: medium
status: solution-agreed
triggered_skill: "[[Decompose First Principle Prompt into First Principle Logic-driven Skill]]"
related: "[[Material Preparation]], [[Material 2]], [[Material Reflection]]"
tags:
  - mistake
---
# 冇 ideal output 就落手做 Material (2026-09-02)

## What happened
- 28-8（禮拜五）下晝 scope 縮細後收到 template，腦入面冇任何 ideal output 嘅畫面就順住份 template「冇方向咁」用 AI 排數據填表，mess 咗 2 個鐘以上。當日結果：價錢 definition 唔啱被 turn down；roadmap 逐張圖 remove background 整唔切。
- 30-8（禮拜日）夜先被迫承認「我唔知輸出應該係咩樣」，補寫咗一份好詳細嘅 output spec（[[Material 2]] 兩個 prompt）——份 spec 係災後重建嘅產物，唔係起點。
- 代價可見於 Output folder：`合作全景圖` 兩個版本、`cooperation_panorama`、`page1_roadmap` + backup、四張 render PNG，30-8 夜做到 2-9 朝。

## Why it happened (root cause)
- 冇任何落手前嘅 gate 迫自己先寫低「份嘢出嚟咩樣 + asker 睇完攞走邊一句答案」。
- First-principle 流程做咗大量分析，但成個流程冇一步要求輸出一個 outcome expectation——分析同執行係兩條斷開嘅 pipeline。
- 寫 spec 嘅能力一直都有（事後好快就寫得出詳細 prompt），缺嘅純粹係順序。

## Impact
- 2+ 小時直接浪費，加上成個週末嘅重做迭代。
- 連補救出嚟嘅 spec 都冇經過「asker 攞唔攞到答案」測試，於是仍然揸住錯嘅軸（見另一則 mistake）。

## ⚠️ Wrong "obvious" fix (to avoid)
- 「下次諗清楚啲先做」——靠意志力嘅 gate 唔會發生。
- 再加一層更深嘅分析——深度唔係問題，順序先係。

## ✅ Right solution
- [x] Discuss with: Claude (2026-09-02 reflection session)
- **Agreed solution:** 動工前兩行 hard gate：① 份 artifact 大概咩樣（頁數、版式、軸）；② asker 睇完會攞走邊一句答案。寫唔出第②句 = 唔准開工。
- Gate 由 prompt set 結構性執行（Gate 0 修訂，見 [[Material Reflection]]），唔靠記性同意志力。

## Skill / system change triggered
- First-principle prompt set 加 Phase 0「Ideal Output First」gate——修訂條款已寫入 [[Material Reflection]]。
