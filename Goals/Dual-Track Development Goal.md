---
type: goal
status: active
project: "[[Career Hub Management]]"
hub: "[[Life @Huawei System]]"
owner: me
updated: 2026-06-25
review_cycle: weekly
tags:
  - goal
---
# Dual-Track Development Goal — 雙軌平衡

> **核心一句：** 唔好再讓防守端（Huawei）吃光所有時間。**目標係保住 barbell 兩邊都有重量** — Track B 守住現金流同情報，Track A 真係 ship 到可展示、可變現嘅資產。

關聯：[[Career Hub Management]] · Hub：[[Life @Huawei System]]
設定日：2026-06-25 ｜ Review：每週（寫入 Weekly SCQA）

---

## 0. 點解要寫呢個 Goal（The diagnosis 先講清楚）
唔係意志力問題，係**結構問題**：

> **防守端有無限 input，進攻端冇 deadline。**
> - Track B（Huawei）：每日 ops、會議、FWA roadmap、sample mgmt — 全部有人幫你定 deadline，所以一定會膨脹到佔 100% 時間。
> - Track A（求職自動化 SaaS / Build-in-Public）：冇老闆、冇 deadline，所以永遠被 defer 去「遲啲先」。
> - 結果：barbell 塌成單槓，全部重量喺防守端。**而家就係呢個狀態。**

**所以呢個 goal 嘅作用 = 幫 Track A 補返 Track B 自動有嘅嘢：ring-fenced 時間、ship cadence、睇得到嘅記分板。** 呢個就係 lever。

---

## 1. North Star（12 個月方向）
把 Career Hub 由「單軌（全防守）」拉返「雙軌平衡」：
- **Track A（進攻 / Offensive Lever）** → 通往 **AI Solutions Engineer**（可展示嘅 build-in-public 作品 + 真實用戶）。
- **Track B（防守 / Defensive Anchor）** → 通往 **Deal Desk Manager / Large Customer Sales Analyst**（把 Huawei 商務經驗轉成 portable 戰功）。
- 原則：**防守端用最低能量做到足夠 ROI，把省返嘅能量輸送去進攻端。** 禁止被動消耗。

---

## 2. 90 日 Milestone（Track A — 唯一焦點）
**🎯 Ship CV Generator M2 引擎（working prototype）**
- **Due：2026-09-23**（設定日 +90 天）
- **「做到」嘅定義（Definition of Done）：** 自己 input 一份 JD + 一份 base CV → M2「客製化」prompt chain → 輸出一份 tailored CV，過程 end-to-end 跑得通（唔使靚，要 work）。
- 核心筆記：[[CV-Generator-MVP-Schema]]
- 對應 task：[[Track A — Ship CV Generator M2 Engine]]

> 一個 milestone 就夠。其他（Build-in-Public、第一個 user）係 M2 ship 咗之後嘅下一回合。

---

## 3. 時間配置（The real lever）
| 軌 | 承諾 | 規則 |
|---|---|---|
| **Track A** | **4–5 hrs / 週（2 個 block）** | 當成**唔可以 cancel 嘅 appointment**，同對待客戶會議一樣神聖。建議：週中一晚 + 週末一個朝早。 |
| **Track B** | 封頂 | Ops 做到 **80 分就收手，唔再 gold-plate**。省返嘅能量 → Track A。 |

對應 task：[[Track A — Weekly Deep-Work Block]]（每週 recurring）

---

## 4. 記分板 R/Y/G（每週，寫入 Weekly SCQA）
| 燈 | 定義 |
|---|---|
| 🟢 Green | 今週**有 ship 到嘢**喺 Track A（M2 有可見進度 / 一個模組完成）。 |
| 🟡 Yellow | 有掂過 Track A（坐低做咗 block）但未 ship。 |
| 🔴 Red | 今週 Track A **完全 0**。← 警號：barbell 塌緊。 |

**TaskNotes 整合：**
- Track A 兩個 block + M2 milestone 都係 task 並 link 去 [[Career Hub Management]] → 喺 TaskNotes 嘅 Kanban / Agenda 一眼睇到本週進攻端有冇郁。
- 每週 review 時，數 Track A task 嘅完成情況 → 直接定當週 R/Y/G。

```dataview
TABLE WITHOUT ID file.link AS "Track A Task", status AS "Status", scheduled AS "Scheduled", due AS "Due"
FROM #task
WHERE contains(projects, [[Career Hub Management]]) AND status != "done"
SORT scheduled ASC
```

---

## 5. 平衡原則（防守 ↔ 進攻 點樣餵養）
- 防守端唔係敵人，係**燃料同彈藥**：免費內訓 → 原子知識 → 可變成 Track A 嘅 content / 面試彈藥。
- 但**燃料唔可以變成黑洞**。一旦某週 Red，下週第一件事就係還返 Track A 嘅時間債。
- 連動 [[Life @Huawei System]] 嘅雙軌作戰圖（決策時間軸 A / B）。

---

## 6. Review 機制
- **每週：** 喺 Weekly SCQA 入面填當週 R/Y/G + Track A 實際 hrs，append 落下面 log。
- **每月：** 對住 90 日 milestone check 一次進度，需要就調 block 數量 / 範圍。

---

## 7. Weekly Scoreboard Log（每週 append 一行）
| 週次 | 日期 | Track A 實際 hrs | 有 Ship? | 燈 | 一句備註 |
|---|---|---|---|---|---|
| W0 | 2026-06-25 | — | 設定中 | ⚪ | Goal 設定，barbell 確認塌咗，今回合開始補進攻端 |
