---
type: tracker
domain: Sample Management
status: active
date: 2026-07-29
data_asof: 2026-07-29
source:
  - "chat history.pdf（53 頁，2026-04-08 至 2026-07-20）"
  - "EU Wearable GTM Sample Plan.xlsx（PDF p34-p39 截圖）"
  - "GTM 样机需求收集.xlsx（PDF p40-p47 截圖）"
  - "欧洲平板样机计划.xlsx（PDF p48-p53 截圖）"
related:
  - "[[Sample Management Playbook]]"
  - "[[Source Note - Sample Management Knowledge]]"
  - "[[Problem Note - Excel Tracker Automation]]"
tags:
  - sample-management
  - tracker
---

# 樣機申請窗口總表

配套檔案：`sample-application-windows.csv`（同資料夾，Excel 可直接開，46 列）

---

## 0. 這張表怎麼讀（30 秒）

一台樣機從無到有要過**兩道閘**，兩道閘的開關邏輯完全不同，混在一起看就會漏申請：

| 閘 | 名稱 | 誰開 | 怎麼關 |
|---|---|---|---|
| 閘 A | **報量收集**（填 onebox 表） | 機關／GTM 發群公告 | **硬截止**。公告寫明日期，過期「逾期不接受改變」 |
| 閘 B | **系統提單／申請**（TSMP） | 樣機編碼出來後發公告 | **軟關閉**。沒有明文關閉日，靠庫存與催辦壓力收尾 |

所以：
- 錯過閘 A → 這一波沒有你的量，閘 B 開了也申請不到。
- 閘 A 過了、閘 B 開了 → **這就是要立刻動手的狀態**，本表標為「可提單／系統申請中」。

---

## 1. 現在最該處理的 5 件（截至 2026-07-29）

1. **MatePad Pro 12.2" (Dali) VN1** — 2026-07-01 已被點名催辦，原話「請還未申請的國家儘快提交申請，以免影響本地認證節奏」。拖最久、風險最高。
2. **MatePad Pro 12.2" (Dali) VN2** — 2026-07-20 編碼已更新，是整份聊天記錄最新的一則公告。
3. **MatePad Air (Wooki) VN2** — 2026-06-24 編碼已更新，至今超過一個月無後續動作。
4. **WATCH D3 (Riva) VN1** — 2026-07-06 可提單。**提單時要依國家上市情況區分醫療版／非醫療版**（法代全部走醫療版）。
5. **Dolphin VN2** — 2026-07-08 已入庫、四色編碼齊全（55039453／55039457／55039467／55039461）。

---

## 2. 全部「可提單／系統申請中」清單

| 產品 | 代號 | 階段 | 可提單起 | 要注意什麼 |
|---|---|---|---|---|
| MatePad Air | Wooki | VN2 | 2026-06-24 | 依前期報量申請，5 個 offering |
| MatePad Pro 12.2" | Dali | VN1 | 2026-06-03 | 2026-07-01 再催一次 |
| MatePad Pro 12.2" | Dali | VN2 | 2026-07-20 | 最新公告 |
| MatePad Pro | Gellmann | VN2 | 2026-04-14 | **指定用方案1 編碼**申請 |
| GT7 | Atum／Konsu | V4 | 2026-05-06 | 編碼在群公告裡 |
| GT7 | Atum／Konsu | VN1 | 2026-06-11 | 已入庫 |
| GT7 | Atum／Konsu | VN2 | 2026-05-06 | 仍可小幅調整，需私訊 Shengqi Sun |
| WATCH 6 | Leib／Niz | VN1 | 2026-05-21 | 三個 SKU 不上市但報量無法釋放，仍須提單提走 |
| WATCH D3 | Riva | V4 | 2026-06-11 | V4 不分醫療／非醫療版 |
| WATCH D3 | Riva | VN1 | 2026-07-06 | **要分醫療／非醫療版** |
| 超薄FIT | Kita | V4 | 2026-06-11 | 六月下旬入庫 |
| Dolphin | Dolphin-T010 | VN1 | 2026-05-07 | **粉色已取消排產，不要申請粉色** |
| Dolphin | Dolphin-T010 | VN2 | 2026-07-08 | 已入庫 |
| Guitar FB7 | Guitar-T00 | VN1 | 2026-05-12 | 四色都上市 |
| 耳夾藝術款 | — | GTM | 2026-05-06 | 可與 Dolphin、FB7 一次性一起申請 |
| Robin-H | Robin-H | VN2 | 2026-05-18 | 曾被特別點名催辦 |

---

## 3. 已關閉／已截單（報量窗口已過）

| 產品 | 代號 | 階段 | 報量啟動 | 報量截止 | 之後怎麼了 |
|---|---|---|---|---|---|
| MatePad Air | Wooki | VN1 | 2026-04-08 | 2026-04-13 | 編碼已在 Excel，聊天無編碼公告 |
| MatePad Pro 12.2" | Dali | VN1 | 2026-04-13 | 2026-04-16 | 2026-06-03 開放提單 |
| MatePad Pro 12.2" | Dali | VN2 | 2026-05-06 | 2026-05-12 | 2026-07-20 開放提單 |
| Guitar FB7 | Guitar-T00 | VN1／VN2 | 2026-04-14 | 2026-04-17 中午 | VN1 已可提單；VN2 待編碼 |
| Etna 線上專款 | Etna | VN1／VN2 | 2026-07-06 | 2026-07-09 09:39 **截單** | 待編碼，VN1 計劃 8.15 產出 |

---

## 4. 尚未開放（編碼未出／待入庫）

- **平板**：Austen VN2（預計 8月中旬產出，編碼未出，H3G 已報量 1 台）、Salinger VN2（53014MPD／53014MPA，9月中入庫）
- **穿戴**：WATCH 6 VN2（8月初）、WATCH D3 VN2（8月中）、WATCH Buds 2 VN1（9月底）／VN2（11月底）、Ultimate 2 綠色 March-B39 VN1（11月底）／VN2（2月10日）、Ultimate 2 滑雪款 March-B59 VN1（6月底）／VN2（8月初）
- **音頻**：Guitar FB7 VN2、Sax 肖邦款 VN1、Etna VN1／VN2

---

## 5. 未知清單 — 誰能回答

| # | 不確定的事 | 為什麼卡住 | 該問誰 |
|---|---|---|---|
| 1 | `Chitu-B19F／W／FB／D` 對應哪個機型？ | 只在 EU Wearable 表出現，聊天完全沒提過 | Shengqi Sun（84451739） |
| 2 | 「12月初入庫」「1月中下旬」「2月10日」是 2026 還是 2027？ | 表上只寫月日，跨年就會排錯期 | Shengqi Sun／Luxi Zhou |
| 3 | Gellmann 方案1 第二個編碼是 `23014RRS` 還是 `53014RRS`？ | 聊天與 Excel 不一致，提錯單會退 | Yaoting Chen（84446020） |
| 4 | Salinger 第三欄「2025年9月」是舊資料還是真的？ | 與同表 9月中入庫矛盾 | Yaoting Chen |
| 5 | 手機類（Judy／HL／MT／Delphi／MS）還在有效窗口嗎？ | 日期看起來是 1–3 月，疑似上一輪殘留 | Luxi Zhou（84442451） |

**內部另問**：H3G 名下實際能不能申請、掛帳與核銷怎麼走 → 程哥／Ziyi（見 [[Sample Management Playbook]]）。

---

## 6. 各產品線歸口人（發公告的人＝要問的人）

| 產品線 | 歸口人 | 工號 |
|---|---|---|
| 平板全線（Wooki／Dali／Gellmann／Austen／Salinger／Laurent） | Yaoting Chen | 84446020 |
| 穿戴 Q3（GT7／WATCH 6／WATCH D3／超薄FIT） | Shengqi Sun | 84451739 |
| 音頻耳機（Guitar FB7／耳夾藝術款／Dolphin／Etna／肖邦款） | Luxi Zhou | 84442451 |
| Dolphin、Etna 報量與機關上報 | Du Juan | 00678990 |

---

## 7. 下次來一則新公告，怎麼更新

1. 打開 `sample-application-windows.csv`。
2. 判斷這則公告是**閘 A**（出現「報量收集」「填報至下鏈接表」「逾期不接受改變」）還是**閘 B**（出現「樣機編碼已出／已更新」「請儘快在系統中完成申請」「提單」）。
3. 閘 A → 新增一列，填「報量啟動」「報量截止」，狀態寫「報量中」。
4. 閘 B → 找到同產品同階段那一列，填「可提單公告」與「樣機編碼」，狀態改「可提單／系統申請中」。
5. 「狀態」不要當成固定標籤 — 它是「報量截止 vs 今天」算出來的，隨時可以重算。

### 三份來源表的分工

| 檔案 | 涵蓋 | 分頁 |
|---|---|---|
| `欧洲平板样机计划.xlsx` | 平板 | Austen／Dali／Wooki／Gellmann／Salinger／Laurent |
| `EU Wearable GTM Sample Plan.xlsx` | 穿戴 | 文本(March-B59)／高端女表(Chance)／FIT 5&Pro(Niki&NikiPro)／WATCH D3(RIVA)／超薄FIT(Kita)／WATCH 6(Leib&Niz)／GT7(Atum B39 B49 & Konsu B39) 等 |
| `GTM 样机需求收集.xlsx` | 音頻＋手機 | Judy／HL／MT／Delphi／robin／Sax／MS項目／MS VN2／MS VN1 實際領取／dolphin／Guitar／Sax 肖邦款／Etna 線上專款 |

---

## 8. 這份表的邊界（別過度相信的地方）

- **來源只有一份聊天記錄 PDF**（2026-04-08 至 2026-07-20）。2026-04-08 之前的公告、以及 2026-07-20 之後的，都不在裡面。
- **三份 Excel 是截圖，不是活檔**。橫向被裁掉的欄位（部分 BOM、部分國家）讀不到，且是拍照當下的狀態，不是今天的狀態。
- **「可提單／系統申請中」是推論，不是系統事實**。公告開了、沒人宣布關，所以推定仍開。真正的權威是 TSMP／禮品庫顯示的可申請狀態 — 動手前值得先在系統確認一次。
- **手機類五個分頁（Judy／HL／MT／Delphi／MS）沒有任何聊天佐證**，時間看起來是上一輪，先當歷史資料。
