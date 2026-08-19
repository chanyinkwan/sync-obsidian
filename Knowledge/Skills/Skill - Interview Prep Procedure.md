---
type: skill-note
status: installed
invocation: user-invoked
leading_word:      # TBD（候選:prep / interview / gate）
source: "[[Look for another job]]"
tags:
  - skill
---
# Skill: Interview Prep Procedure（把「準備好了」變成可驗證的事）

> 用途:收到 interview invite 開始,到走進面試前 15 分鐘為止,一套固定 3 小時、五個 stage 的流程。核心不是「多讀資料」,是 **readiness 要被外部打分,不是靠感覺**。
> 觸發:`Ctrl+Shift+I`(建立 tracker note)、`/interview-prep`、「幫我 prep 這個 interview」、「run the gate」。
> 安裝:`.claude/skills/interview-prep/SKILL.md`,`/interview-prep` 可見。這是**一個 skill 對應一整套流程**,不是每個 stage 一個 skill——Chukwan 明確要求一份 note、一個 skill 管到底。
> 建立:2026-08-19,起因是 2026-08-17 SureCloud interview 的 post-mortem。

## 這系統在防什麼(SureCloud post-mortem 的 5 個 failure mode)

| Failure mode | 哪個 stage 擋 |
|---|---|
| 1. 沒有時間估計 → invite 拖了好幾天不動 | **T0 Commit** — 15 分鐘、當晚就要 book slot,把「不確定要花多久」變成已知成本 |
| 2. Research 做了但沒被消化(一堆 PDF ≠ interview input) | **B1 Brief** — Kess 只讀一頁 HM 視角的 brief,從不打開 block notes |
| 3. 幾乎零口說練習,delivery 和臨場反應才是真正的弱點 | **B2 Reps** — anchors + 5 個 story 全部要大聲說出來,60 秒計時,還有 selector drill |
| 4. Readiness 靠感覺決定,私下的規則("閉眼講得出框架")從沒被打分過 | **B3 Gate** — 4 軸打分,4/5 題 ≥3/4 才算 READY,結果寫進 tracker,是「已打分的證據」 |
| 5. 沒有環境協議(錄影錄到一半伴侶進來) | **Pre-flight** — 面試前 15 分鐘的 checklist,包含 do-not-enter window |

## 端到端流程表(每一步對應哪個工具)

| Step | 觸發 | 工具 | 產出 |
|---|---|---|---|
| Invite 到手 | `Ctrl+Shift+I` | Templater hotkey → `Template/Interview Prep Tracker Template.md` | Tracker note(`type: interview-prep-tracker`),含 stage checklist + 空的 `## Gate Log` |
| T0 Commit | `/interview-prep start <company>` | `.claude/skills/interview-prep/` | Slot booked ≤48h、伴侶已告知、`research-baseline` 已觸發。**當晚不讀任何東西。** |
| （背景執行) | 由 `start` 自動叫用,不用手動打 | `/research-baseline` | Job folder 裡的 `Research - Index.md` + block notes(machine layer,Kess 不讀) |
| B1 Brief | `/interview-prep brief` | 同上 | `<Job Folder>/Interview Brief - <Company>.md`,三段式、HM 第一人稱、≤400 字、無破折號 |
| B2 Reps | `/interview-prep reps` | 同上,讀 `Master Story Bank.md` | 口說練習完成,drift 被抓出來 |
| B3 Gate | `/interview-prep gate` | 同上,讀 `Question Bank - *.md` + `Readiness Rubric.md` | `## Gate Log` 裡一筆打分紀錄,verdict READY / NOT YET |
| Pre-flight | `/interview-prep preflight` | 同上,讀 `Pre-flight Checklist.md` | Checklist 全綠,才進面試 |
| （上游,CV 已投遞後不會再跑) | — | `/craft-cv` | 這個 application 的 CV,truth-gated,是 brief 和 story bank 引用真實數字的來源之一 |

## Gate 才是 readiness 的證明

不是花了多少小時、不是 research 做了多厚、不是「感覺準備好了」。`/interview-prep gate` 抽 5 題(2 題 anchor + 3 題 stage 對應的 question bank,依 JD keyword 加權,排除 `#logistics` 標籤的題目),Kess 材料闔上、計時、大聲講,再打字寫下實際講了什麼,依 `Readiness Rubric.md` 的 4 軸(Structure、Timing、Specificity、Company link)打分。**4 題以上 ≥3/4 才是 READY。** 沒過,只重做弱的那幾題,不用整套重來。這筆打分紀錄連日期一起寫進 tracker note 的 `## Gate Log`,是唯一算數的證據——這就是 commitment mechanism 要的「external scored」。

## 設計筆記(為何這樣寫)

- **一個 skill,不是五個。** 五個 stage 共用同一份 tracker note 當狀態面,拆成五個 skill 會讓「下一步是哪個 stage」變成要手動記的東西。單一 skill 讀 tracker 的 checkbox 就知道接下來要跑哪段。
- **Machine layer / human layer 分離,沿用 `research-baseline` 的設計。** Block notes 是機器讀的原始資料,Kess 只讀 brief。這條線在 `research-baseline` 已經驗證過,這裡直接沿用,不重造。
- **問題庫、rubric、story bank 都是 runtime 讀取,skill 裡不寫死一題。** 跟 `craft-cv` 的 `MasterExperienceDB.json` 是 read-only canonical source 同一個邏輯——內容會改,skill 邏輯不該跟著漂移。
- **T0 的 book slot / 告知伴侶是人類步驟,skill 只負責問「確認了嗎」,不能替 Kess 做。** 對齊 spec §11:interview-slot booking 的自動化明確排除在 scope 外。

## 連結
- [[Interview Prep SOP]]
- [[Master Story Bank]]
- [[Pre-flight Checklist]]
- 相關 skill:[[Skill - Craft CV]](上游,CV 先送出)· research-baseline 沒有獨立 vault note,規則以 `.claude/skills/research-baseline/SKILL.md` 為準
- Spec:`docs/superpowers/specs/2026-08-19-interview-prep-system-design.md`
