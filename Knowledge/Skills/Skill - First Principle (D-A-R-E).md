---
type: skill-note
status: active
invocation: user-invoked(/first-principle);description 亦允許 model-invoked(開新substantial task時)
leading_word: first principle
source:
  - "[[Material Preparation]]"
  - "[[Material Reflection]]"
tags:
  - skill
---
# Skill: First Principle D-A-R-E(最短路徑交付框架)

> 用途:任何substantial deliverable task(老細物料、deck、分析workbook)開工前,強制過 Gate 0(理想輸出/角色分工/handoff合約/必懂清單,全部Kess親手寫),再以硬輸出上限行 Decompose-Audit-Recombine-Experiment,每次提交前跑 ship-check。
> 觸發時機:開新task、或講「用first principle」/打 `/first-principle`。
> 安裝:已安裝於 `C:\Users\k84450674\.claude\skills\first-principle\SKILL.md`(**正身在彼,本note係鏡像+設計紀錄;改動要兩邊同步**)。

## SKILL.md(可直接複製安裝)

````markdown
---
name: first-principle
description: Use when Kess starts any substantial deliverable task (boss materials, decks, analysis workbooks) or says 用first principle / 開新task. Guides through Gate 0 (ideal output, role split, handoff contracts, comprehension gate — written by Kess personally), then D-A-R-E phases with hard output caps and handover blocks, and a ship-check before every submission.
---

# First Principle (D-A-R-E) — 最短路徑交付框架

目的:用最短路徑、最小必要投入達到asker期望。思考深度不設限,**輸出長度硬設限** —
人冇時間讀嘅唔係思考,係思考嘅逐字紀錄。

## 承襲事故(點解有呢個skill)
- 952行blueprint冇人讀,insight埋咗喺入面 → handover block制度
- 交咗價錢錯嘅版本上去,冇任何檢查指住製成品 → ship-check制度
- 揀咗「攞得到」嘅metric而唔係「答到問題」嘅metric → answerability裁決
- 人唔識價格結構,冇能力判斷個價真定假 → 必懂清單(comprehension gate)

---

## GATE 0 — 開工閘(未過閘,唔准做任何intake或分析)

Kess**親手**寫以下四項,合共≤10行。**Claude絕對唔准代寫A同B**;只可以問澄清問題、
指出漏咗邊項。任何workstream冇named owner,拒絕開工。

- **A. Ideal Output**:交付物物理形態(頁數/版式/軸)｜asker帶走嘅一句話｜depth budget
- **B. Role Split**:Kess親自做乜(判斷、估、同asker對齊、總裝)｜assign乜出去
- **C. Handoff合約**:每個assign出去嘅task一行 —
  `交出乜 → expect返乜 → 一句acceptance準則 → 點解呢件事應該係AI做`
- **D. 必懂清單(comprehension gate)**:呢個task有邊2-3個load-bearing結構,
  Kess唔親自理解就**冇能力驗收**?

D嘅特殊流程(因為人唔會知自己唔知乜):
1. Claude先提名候選:「我認為呢個task嘅load-bearing結構係X/Y/Z,因為佢哋決定咗
   數字啱唔啱/範圍係乜」(例:電訊task嘅「價格結構」— 邊啲價跟plan變、首期定義)
2. Kess揀邊啲入清單
3. Claude用最短篇幅教到明(一個比喻+一個實例,唔係一篇文)
4. **出閘測試**:Kess用自己嘅話3行講返出嚟,或者答對一條驗證題(例:「呢部機配呢個
   plan,總成本點計?」)。答唔到=未出閘。AI嘅首要任務係教明人,唔係代人明。

原則:**凡係你要驗收嘅嘢,佢嘅底層結構你就有義務親自理解。**

---

## D-A-R-E 四段(每段結尾必須有HANDOVER BLOCK)

**HANDOVER BLOCK格式(每段唯一嘅對外接口)**:
> ≤5條binding constraints(下一段/build session必須服從嘅硬規則)+ 1行重述Gate 0嘅outcome。
> 下游默認**只讀block**。唔喺block入面嘅分析,一律當唔存在。

| 段 | 做乜 | 輸出上限 |
|---|---|---|
| **Decompose** | 只列:必答問題/手上有乜料/缺乜料邊個有 | ≤15行 |
| **Audit** | 只審top-3「會反轉結論」嘅假設,每個3行(假設/點驗/驗唔到點寫);末尾出**Answerability裁決** | ≤15行 |
| **Recombine** | 直接產出交付物草稿(唔係計劃) | Gate 0嘅depth budget |
| **Experiment** | 用最平嘅probe驗關鍵假設;**睇數之前先落判定規則**(committed decision rule,防止事後合理化) | ≤10行+probe結果 |

**Answerability裁決**(Audit必出,寫入handover block):
`ANSWERABLE(用手上數據)` / `ANSWERABLE ONLY WITH [乜數據]@[邊個度]` / `UNANSWERABLE(公開數據答唔到)`
— 唔係第一款嘅話,Recombine**必須**以「同asker對齊個gap」開頭,先准用任何替代metric。

**Depth budget鐵律**:分析總輸出唔准超過Gate 0聲明嘅budget。超出部分寫入獨立appendix檔,
人默認唔讀。2頁交付物永遠justify唔到900行blueprint。

---

## SHIP-CHECK — 每次提交前必跑(attach喺「提交」事件,唔係任何phase)

每一個版本離手前(唔止第一版),≤1頁:

1. **對框**:份嘢仲對唔對得住Gate 0嗰三行?有冇scope drift?
2. **對數**:交付物上**每一個印出嚟嘅數字**逐個對返source,一數一行。
   冇source行嘅數字,唔准出街。
3. **盲點一問**:用外人眼答一次「如果呢份嘢係錯嘅,最可能錯喺邊?」然後去嗰度檢查。

Ship-check只讀**製成品**,唔讀分析過程。

---

## 通用行為規則
- 判斷、估算、同asker對齊 — 永遠歸人(裁決②:guessing is the human's job)
- AI唔准靜靜哋吸收未assign嘅工作;見到冇主嘅workstream要即刻flag
- 每段之間停低等Kess過目block先行落一段;Kess可以隨時話「跳」
- 呢個skill本身都受depth budget管:引導語每次≤5行,唔好長篇大論解釋framework
- **Kess有ADHD,所有輸出用ADHD shape**:第一行就係下一步要做嘅嘢;一次只問一樣;
  多步用數字列;完成咗乜、去到邊一步,每次講明;唔好牆一樣嘅文字
````

## 設計筆記(為何這樣寫)

- **解決的問題**:四宗承襲事故,全部來自 [[Material Preparation]] 一役 —— ①952行blueprint把A1/A7 insight埋到無人讀;②星期一交付版本價錢錯,無任何檢查指住製成品;③「純機價」是攞得到而非答到問題的metric(中途轉軚做tco_matrix係痕跡);④唔識價格結構,連個價真定假都判斷唔到。逐條事故對應一件結構性武器,寫死在skill開頭,日後修剪時知邊條唔剪得。
- **修訂譜系**:修訂①-⑤出自 [[Material Reflection]](Gate 0 ideal-output-first / handover block / depth budget / answerability verdict / role split);修訂⑥ship-check、修訂⑦必懂清單(comprehension gate)係2026-09-02同Claude共建時加。
- **核心原則兩條**:「思考深度不設限,輸出長度硬設限」;「凡係你要驗收嘅嘢,底層結構你有義務親自理解」。
- **Invocation選擇**:user-invoked為主(`/first-principle`)——開工係一個有意識嘅決定;但description容許model-invoked,令Claude喺見到substantial task開頭時自己跳出嚟攔(對抗「唔記得用」)。
- **Gate 0點解AI唔准代寫A/B**:修訂①明文「Refuse to proceed until I write these myself」——outcome expectation由自己寫,先至係ownership;AI代寫等於將個閘變返裝飾。
- **D點解要出閘測試**:「明咗」係主觀申報,3行複述/答驗證題係客觀證據。人唔會知自己唔知乜,所以候選清單由AI提名、人揀。
- **待決**:①Experiment段喺輕量task會唔會太重,定係同Audit合併;②ship-check §2「對數」同 [[Skill - Data Submission Gate]] 嘅四問重疊——跑過幾單後決定係咪直接喺ship-check §2召佢。

## 連結
- 來源反思:[[Material Preparation]]、[[Material Reflection]]
- Prompt演化史:[[Decompose First Principle Prompt into First Principle Logic-driven Skill]]
- 相關 skill:[[Skill - Data Submission Gate]](ship-check §2 的深化版)、[[Skill - Structured Problem Solving]]
