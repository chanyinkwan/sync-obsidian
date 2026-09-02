---
status: todo
priority: high
scheduled: 2026-09-02
projects:
  - "[[Life @Huawei System]]"
dateCreated: 2026-09-02T09:20:30.306+01:00
dateModified: 2026-09-02T09:20:30.306+01:00
tags:
  - task
eisenhower: q1
---

## Ask as received
> Kess，2026-09-02，Claude session：「我想你 guide 我做一個 reflection——① first principle 出嚟嘅嘢同我真係要落手做嘅嘢對唔上；② 我哋搵『純機價』係錯嘅，反映唔到消費者實付同和記資源投放；③ 我落手時腦入面冇 ideal output，花咗好多冤枉時間。」

## 物料側結論：三個發現全部指向同一個 prompt set 缺陷

**First-principle prompt set（D-A-R-E）產出深度失控、冇壓縮交接、冇 outcome 錨——所以分析同執行係兩條斷開嘅 pipeline。**

| #   | 發現                                                                                                                | 證據                                                                                                                                                                                            |
| --- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Insight 唔係冇，係冇人讀到。** Audit A1/A7 早喺 28-8 已寫明純機價嘅兩個致命缺陷，但埋喺 952 行輸出，人同下游 build session 都冇讀                       | [[Material Preparation]] audit A1（identical shelf）/ A7（標價≠實付）；prompt set task 三個 phase 自標「didnt review manually」；Kess 自己已寫低「depth is out of control… A 2 page work should not dive that deep」 |
| 2   | **Ideal output 唔會自然出現。** 詳細 output spec（[[Material 2]]）係 mess 咗 2 個鐘後嘅災後重建，唔係起點；而且連佢都冇過「asker 攞唔攞到答案」測試，先會繼續揸住純機價 | Output folder 多版本重做；[[Material 2]] prompt 明文 fence「must NOT infer resource allocation」——即係封印咗 asker 條真問題                                                                                      |
| 3   | **Sourceable ≠ 答到問題。** 裁決②推成個流程向「攞得到」傾斜，中心問題「和記擺咗幾多資源」公開數據原則上答唔到，但冇喺 build 前上枱                                    | 31-8 下晝 `tco_matrix` / `bestseller_pricing` 係中途轉軚痕跡                                                                                                                                           |
| 4   | **人機分工從冇被識別。** 開工時冇答三條問題：我喺呢個 task 嘅角色係咩？幾時用 AI？我 assign 畀 AI 嘅 task 到底係咩？結果分工倒轉——AI 做咗人讀唔晒嘅分析，人手做咗本應寫好 spec assign 出去嘅 build | Kess 2026-09-02 自述「我唔清楚咩係我嘅 task、咩係我 assign 畀 AI 嘅 task」；Gate 1 裁決②「guessing is the human's job」有講判斷歸人，但從冇擴展成全 task 嘅 role split                                                              |

## Prompt set 修訂（即刻套用，貼入 [[Decompose First Principle Prompt into First Principle Logic-driven Skill]]）

**修訂① — Gate 0：Ideal Output First**（加喺 Decomposition prompt 最前）
> Phase 0 — Before any intake or decomposition, require ME to state in ≤3 lines: (1) what the final artifact physically looks like (page count, layout, axes); (2) the single sentence the asker will walk away with; (3) the depth budget this deliverable justifies. Refuse to proceed until I write these myself. Decompose backwards from this artifact only.

**修訂② — Compressed Handover Block**（四個 phase prompt 結尾通用）
> End every phase output with a HANDOVER BLOCK: at most 5 binding constraints (hard gates the next phase / build must obey) + 1 line restating the outcome expectation from Phase 0. Downstream phases and build sessions read ONLY this block by default. Analysis that does not surface in the block is treated as nonexistent.

**修訂③ — Depth Budget**（Decomposition prompt 內）
> Total analysis output must not exceed the depth budget declared in Phase 0. Overflow goes to a collapsed appendix the human is not expected to read. A 2-page deliverable never justifies a 900-line blueprint.

**修訂④ — Answerability Verdict**（Audit prompt 內）
> For the asker's central question, output a one-line verdict in the HANDOVER BLOCK: ANSWERABLE from data we hold / ANSWERABLE ONLY WITH [data] held by [who] / UNANSWERABLE from public data. If the verdict is not the first, Recombine must open with the escalation (align the gap with the asker) before any workaround metric may structure the deliverable.

**修訂⑤ — Role Split**（Gate 0 內，同 Phase 0 三行一齊寫）
> Phase 0 also requires ME to write a ROLE SPLIT in ≤3 lines: (1) what I do myself — judgement, guessing, asker alignment, final assembly; (2) what I assign to AI, stated as an explicit task with its own deliverable and one acceptance line; (3) the points where AI output must return to me for a decision. Refuse to proceed while any workstream has no named owner. AI must not silently absorb work I have not assigned, and must flag any workstream left ownerless.

## 行為側（已入 Mistakes Log，唔喺呢度重複）
- [[2026-09-02 Mistake — 冇 ideal output 就落手做 Material]]
- [[2026-09-02 Mistake — 揀咗攞得到嘅 metric 而唔係答到問題嘅 metric]]

## Who holds what
| Who | What they hold on THIS task | Delta from usual stance |
|-----|-----------------------------|-------------------------|
| Kess | Gate 0 嘅兩行由自己寫（AI 唔准代寫 outcome expectation） | Gate 執行由意志力轉為 prompt 結構 |
| Claude | 每 phase 輸出必須以 handover block 收尾 | 長分析唔再直接交人 |

## Next move
- [ ] 將修訂①–⑤ 貼入 [[Decompose First Principle Prompt into First Principle Logic-driven Skill]] 嘅四個 prompt（Stage 1「Fine tune the given prompt」）
