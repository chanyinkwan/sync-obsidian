---
type: seed
seed_id: S-002
status: Declined
seeded: 2026-07-08
decision_date: 2026-07-13
disposition: 不做軟體,改用 Obsidian canvas
tags:
  - seed
source: "[[8-7-2026 SCQA Meeting]]"
---
# S-002 - 新環境關係管理工具 (drag & drop)

## 一句話 pitch
給「空降新環境的人」的關係圖工具 —— 把認人、認座位、認組織鏈做成 drag & drop 的 onboarding 系統。

## Why yes
- 痛點親歷且剛驗證完:O1–O3 canvas + 聯絡人卡 + tidy-meeting-transcript 管線就是它的**手工原型**,7/10 培訓實戰跑通(90 分鐘吸收 30+ 人的組織圖)。需求探索已經做完了。
- 真實 niche:CRM 管客戶、org-chart 管彙報線,但「新人 90 天認人系統」市場上沒有好答案。
- 對外敘事強:可包裝成 portfolio piece(Onboarding Relationship Mapping system),對準 Deal Desk / AI SE 求職故事。
- 與已存在的任務彼此驗證:`Tasks/SCQA O2 - Org-to-Customer Relationship Map` 已經是一個活著的任務,證明底層資料模型(誰對誰彙報、誰管哪個客戶)有實際需求在跑,不是憑空假設 —— 做工具只是把已驗證的需求再往前一步。
	- 代表 Why-yes 的「niche 存在」不是猜測,已有內部使用案例佐證。
- 與 SA 轉職技能雙重掛勾:整理 stakeholder / org 關係圖的練習,本身就是 `SA 07 - Discovery-to-Demo Bridge Reps` 需要的 presales 核心能力(discovery 階段畫出客戶決策鏈)—— 即使工具本身最後沒有上線,建置過程本身就是可轉移的 SA 技能練習,時間不算浪費。

## Why no
- Obsidian 已經給了 80%:canvas 本身就是 drag & drop,再做軟體是重造輪子,時間成本與求職 ROI 不成比例。
- 資料敏感:這套圖裝的正是「不能拍照」級的客戶關係(7/10 紀律),做成工具 = 合規風險,公司場景幾乎不可用。
- 更便宜的替代下注:不做軟體,**把工作流打包**(skill + template + 方法論寫成文章/LinkedIn 資產),證據同樣成立。
- 與 SA sprint 已排定的資產任務搶同一段 20% strategic blank space:`SA 08` demo Loom、`SA 09` whiteboard asset 都已經佔用同一個時段,10 週 sprint(2026-07-13 → 2026-09-20)有硬截止日,再開一個軟體項目會稀釋焦點。
	- 若真的分心,反而讓兩邊(SA 轉職 + S-002)都做不完整。
- 即使做「去敏感化 / 泛用化」版本,匿名化本身無法完全消除合規暴露:因為資料的價值正好來自具體的組織拓撲(誰彙報給誰、誰管哪個客戶),過度泛化就失去 niche 賣點,不泛化就仍是 7/10 等級的敏感資料 —— 代表任何原型從第一天就必須用假資料設計,這在還沒驗證真實可用性前就先增加了設計成本。

## 決策準則
若目的是求職敘事 → 打包工作流即可(1–2 個晚上);只有出現第二個真實用戶(不是我)才考慮做成工具。

## Decision
No, use canvas

---

