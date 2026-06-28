---
type: meeting-note
meeting_type: internal-xfn
date: 2026-06-24
account_or_project: "[[Sample Management Ops]]"
attendees: "[[Ziyi Zhang 84434577]], Kessog"
status: done
hub: "[[Life @Huawei System]]"
tags:
  - meeting
  - sample
---

# Pura 90 樣機跨境調撥（緊急）— 2026-06-24

> One-line purpose: 為歐洲一號核心客戶在赴港前(約 10 號)試用,緊急跨境調撥一台 Pura 90 樣機;Ziyi 帶 Kessog 走完整條挪貨升級路徑並交接後續跟進。

## 1. Attendees & Roles
| Name | Org / Role | Stake |
|---|---|---|
| [[Ziyi Zhang 84434577]] | 大T(義大利)AM / 我的 mentor | 發起、打通各路資源、交接 |
| Kessog(我) | 大T 商務 | 接手後續對接與填單 |
| [[Charco Chan]] | Vodafone 帳戶樣機管理 | 已成功機關挪貨,提供路徑 |
| [[huangyasi 84110636]] | 總部機關(HQ)樣機挪貨 | 掌庫存與審批(關鍵) |
| [[Luxi Zhou 84442451]] | 歐洲地區部 樣機 | 歐版測試樣機(本批無庫存) |
| [[Zhang Ziyi 84271109]] | Orange 帳戶樣機管理 | 可跨帳戶借大貨(備援) |

## 2. Agenda / Topics
- 為核心客戶緊急調撥 Pura 90 樣機(赴港前試用)
- 盤點可挪資源:Vodafone / 機關 / 歐洲地區部 / Orange
- 走「委託發貨」公單找人肉帶貨
- 交接後續給 Kessog

## 3. Discussion Notes
- **庫存現況:** Pura 90 **歐盟版已無庫存**(額度已分各國);**海外通用版剩 1 台現貨**,但只能人肉帶、不能 PO 直寄。
- **我方限制:** 大T(義大利)**之前沒報 Forecast** → 無法直接挪,得跨國/跨帳戶調。
- **技術風險:** 國內版 vs 歐版 5G/4G 頻段、硬體有差異,樣機可用性需留意(之前申請就出過問題)。
- **時效:** 客戶現在義大利,約 10 號赴港;**今天就要確認有貨**,赴港前試用完。
- 完整逐字稿:[[24-6-2026 Meeting - Pura 90 樣機跨境調撥 - Transcript]]

## 4. Decisions
| Decision | Rationale | Decided by |
|---|---|---|
| **優先歐洲版**,不行才用海外通用版 | 頻段/相容性風險低 | Ziyi |
| 走**人肉帶貨** | 海外通用版不能 PO 直寄 | Ziyi |
| 跨帳戶向 **Orange 借大貨**(事後還一台)當備援 | 自家庫存已罄、爭取時效 | Ziyi |
| 表單主管填 **程哥**([[Ding Cheng 00611102 (程哥)]]) | 帳戶掛賬人/審批 | Ziyi |

## 5. Action Items
| #   | Action                                                                                                               | Owner  | Due | Status            |
| --- | -------------------------------------------------------------------------------------------------------------------- | ------ | --- | ----------------- |
| 1   | 打 [[Luxi Zhou 84442451]] 要歐洲版                                                                                        | Kessog | 今天  | [x] 已做→無庫存,轉機關挪貨群 |
| 2   | 問 [[Zhang Ziyi 84271109]](Orange)能否先借一台大貨,承諾事後還一台                                                                    | Kessog | 今天  | [x]已做→無庫存         |
| 3   | 進機關/大T 挪貨群跟進,接手協調                                                                                                    | Kessog | 今天起 | [x]已做             |
| 4   | 填「**委託發貨**」公單:主管=程哥;相關部門全選;期望反饋截止=明天;主題=找同事將樣機從國內帶到義大利;詳情=**26 號–下月 1 號**從國內任一城市赴義大利的同事(指導說明見「5T」群「群文件」內「大T以及指導說明書」) | Kessog | 明天前 | [x]已做             |
| 5   | 若歐版終究無貨 → 改申請**海外通用版**(找 [[huangyasi 84110636]])                                                                     | Kessog | 視情況 | [x]已做             |

## 6. Stakeholder Intel（樣機資源人脈圖）
| Person | 掌管的樣機資源 | 怎麼用 | Link |
|---|---|---|---|
| [[Charco Chan]] | Vodafone 帳戶樣機;已成功機關挪貨 | 問挪貨群與流程 | [[Charco Chan]] |
| [[huangyasi 84110636]] | 總部機關庫存/審批 | 最終可挪到貨的窗口 | [[huangyasi 84110636]] |
| [[Luxi Zhou 84442451]] | 歐洲地區部歐版測試樣機 | 本批無庫存→轉機關 | [[Luxi Zhou 84442451]] |
| [[Zhang Ziyi 84271109]] | Orange 帳戶大貨 | 跨帳戶借調(注意:**非** mentor [[Ziyi Zhang 84434577]]) | [[Zhang Ziyi 84271109]] |

## 7. Pain Points & Solution Seeds  `#scqa-feed`
- **Observed pain point:** ① 我方**沒報 Forecast** → 每次緊急都要跨國/跨帳戶挪、極限操作(根因);② **人肉帶貨**脆弱,依賴剛好有人出差;③ 國內版 vs 歐版**頻段/硬體差異**→ 樣機可用性風險。
- **Possible solution seed:** 之後**記得按時報 Forecast**(治本);把這條「樣機資源人脈圖 + 挪貨升級路徑」固化備查(治標,降友善)。
- **Worth raising with manager?** [x] yes  →  carry to [[Weekly SCQA Reflection Template]]

## 8. Operations Training Log
- **學到的流程（樣機調撥升級路徑）:** 帳戶樣機管理([[Charco Chan]] / [[Zhang Ziyi 84271109]]) → 歐洲地區部([[Luxi Zhou 84442451]]) → 總部機關([[huangyasi 84110636]]) → 跨帳戶借調(Orange) → 人肉帶貨「委託發貨」公單。歐版不行就退海外通用版(需人肉帶)。
- **下次會不同做的:** 提早報 Forecast,就不必每次極限操作;對外電話前先把「要問的庫存/時效/能否人肉帶」列好。

## 9. Links
- Hub: [[Life @Huawei System]]
- Project: [[Sample Management Ops]]
- 今日日記: [[24-6-2026 Daily Operations Day 13]]
- 逐字稿: [[24-6-2026 Meeting - Pura 90 樣機跨境調撥 - Transcript]]
- 主管(掛賬/審批): [[Ding Cheng 00611102 (程哥)]]
