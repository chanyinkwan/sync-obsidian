---
type: seed
seed_id: S-001
status: pending
seeded: 2026-07-08
decision_date:
disposition:
tags: [seed]
---
# S-001 - Mentor Agent (persona 教練)

## 一句話 pitch
建一個帶特定人格(直言型導師)的 agent,在交付前用它壓力測試我的 SCQA / 決策 —— 先被 AI 罵,再見真人。

## Why yes
- 原型成本極低:一個 system prompt / 一個 skill 就能開跑,本 hub 已有現成材料(SCQA canvas、每日反思)餵 context。
- 與現有 15 分鐘 SCQA「True or Not / Feasible or Not」驗證閉環天然互補 —— persona 當紅隊,經理見到的是被打磨過的第二版。
- 對 AI Solutions Engineer 目標是**作品證據**:自己設計、自己天天用的 agent,比任何 side project 都有說服力。
- 與 SA Presales Transition sprint 的既有任務直接互補,不是另開分支:`SA 06 - Persona-Based Script Reps` 和 `SA 13 - Fire Drill Interruption Reps` 本來就需要一個會扮演刁鑽角色的對練對象 —— persona mentor agent 剛好是同一套機制的延伸使用。
	- 代表這不是「多做一個項目」,而是把已排進 10 週 sprint 的任務用更好的工具完成。
- 一次建構、多處複用:紅隊 SCQA 的 agent 架構,同樣可以重新配置給 `SA 14 - 48hr Deconstruction Sprint 2 - Challenger` 的 Challenger persona 對練用 —— 邊際成本遞減,報酬遞增。
	- 若成立,代表建置時間攤提到至少兩個已存在的用途上,不是沉沒成本。

## Why no
- Persona 模仿 ≠ 真導師:風險是「穿著馬甲的奉承/自信廢話」,若我把它當真 mentor 反而校準變差(真 mentor = Ziyi / 經理,已在閉環裡)。
- 與 20% strategic blank space 直接搶時間;調 persona 的樂趣容易變成高級拖延。
- 建置與維護這個 agent,會直接跟 AWS SAA 讀書(`SA 04`)、demo 資產製作(`SA 08`、`SA 09`)搶同一個行事曆時段 —— 而後者有硬性外部截止日(考試預約、投遞窗口),機會成本是具體的,不是抽象的。
	- 若真的排擠到這些任務,S-001 反而傷害 SA 轉職本身的進度。
- 有淪為「為了作品而作品」的風險:AI Solutions Engineer 的作品集通常看的是客戶面對面的 demo / 架構產出(`SA 08 Click-to-Value Demo Loom`、`SA 09 Whiteboard Architecture Asset`),而不是內部私用工具 —— 除非額外包裝、對外展示,否則「作品證據」這條 Why-yes 論點站不住腳。
- 增加工具維護表面積:目前已在疊加 gstack、superpowers、plan-daily-ops 等技能組合,再多一個 persona agent 意味著多一份 prompt drift / context 過時的風險,而 10 週 sprint 結束後未必有人力持續維護它。

## 決策準則
原型 > 1 個晚上 → KILL;成功指標 = 一個月內至少 1 次「它改變了我交出去的 SCQA」。

## Decision
_pending_

## 原始種子
[[Build a Mentor that helps building personal skills and career]]

---
回 [[Seed Log]]
