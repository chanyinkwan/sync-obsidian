---
status: todo
priority: high
scheduled: 2026-09-03
projects:
  - "[[Life @Huawei System]]"
dateCreated: 2026-09-03T09:29:11.954+01:00
dateModified: 2026-09-03T09:29:11.954+01:00
tags:
  - task
eisenhower: q1
---

## Ask as received
>last meeting with cheng, mentioned my role's goal:
[[26-8-2026 Amazon Goal-driven Alignment - Transcript]]
1. **先解決「知不知道」的問題**——每週要能立刻答出：Amazon 上週賣了多少台、每個產品分別多少台、每個國家多少台、是漲是跌、庫存還能撐多少天、下一批貨什麼時候進。程哥明講「你現在都不知道」，這是第一優先、要「盡快盡快去搞定」。（00:00–02:11、12:34–12:58）
2. **從 6 個 million 的全年收入目標由上而下拆解**——拆到每月／每週的收入與台數，再比對實際銷量；沒達標就往庫存不足、價格不夠激進、競爭等方向找原因。（05:08–07:33）
3. **交出一份書面作業**——寫一個 presentation 或 essay：「今年要做到 6 個 million 收入，我要幹什麼」。程哥說拆錯、有不知道的都沒關係，**重點是邏輯能不能支撐**；可以當成面試題來做。（19:35–20:46）
4. **把子怡留下的材料一份一份翻過，並自己重做一份表**——不要原封不動沿用她的表格；若最後發現她的更好再改用，但必須自己走過一遍。（07:03、21:11）
5. **規劃下半年三場大促的促銷方案**——Prime Day、黑五、聖誕；採分批促銷（不再 10 個產品同一週一起打折），每個產品要先確認價格體系能不能促、競品價位、促多少錢合適，以及**有沒有貨**避免促銷後斷貨。（10:05–12:34、23:03）

And the goal for this task is to build a work station that allows me to record and manage the data, in order to achieve the goals mentioned above. #3 (6M essay) and #5 (three promotions) are separate deliverables fed by the workstation.

## Materials
- Source files: `C:\Users\k84450674\Desktop\Amazon GTM Management\Work Station\`（含 `OldWorkStation.xlsx` 子怡原表、`Pricing Relevant\`）
- Handover: `C:\Users\k84450674\Desktop\Amazon Hand over`、`C:\Users\k84450674\Desktop\AMZ MBB Handover`
- [[Scope of Amazon GTM - MBB Product]]｜[[Amazon GTM Org Map.canvas]]｜[[26-8-2026 Amazon Goal-driven Alignment - Transcript]]｜[[Amazon MBB Pricing Meeting Transcript — Kess-Led (8-5-2026)]]
- SQL sales portal（內部網站，只能 screenshot）：`C:\Users\k84450674\Pictures\Screenshots\Screenshot 2026-09-03 095311.png`
- 全部過程紀錄（Gate 0 v1、D-A-R-E v1、v1.1、C1／C3、Audit v2、SI 對數）：[[Build Amazon Work Station — Process Log]]

## Current state（2026-09-08）
- v1.1 workbook 已交：`Work Station\Amazon MBB Workstation.xlsx`（周运营／6M拆解 BP vs Actual／说明·数源）— 首個真實週未跑
- v2 = 三件套：`sources\`（Kess 逢週一人手落檔、固定檔名）→ `db.xlsx`（script 寫、0 visualisation、只我開）→ `dashboard.xlsx`（script 生成）；Operation checklist 沿用 v1.1 打卡格；project tracking 喺 Obsidian
- 帶走一句：逢週一 10 分鐘答到「賣咗幾多／撐幾耐／幾時返貨／目標去到邊」— 四條 source 全部已定（hub INV 月初 = 實數，Kess 9/8 確認）
- 目標跟 2026BP ≈ 7.96M（唔跟口頭 6M，頂部保留 flag）；收入 = 月 SO × NSIP；「幾時返貨」用 AATP 到貨口徑，SC排产 唔入 v2
- **C2 framework 已交（9/8）**：[[Amazon Workstation v2 — Framework]] — Kess 剔 5 個 box 先寫 script
- **MyVersion merged → db.xlsx rebuilt（9/8 17:25）**：`Work Station\v2\db.xlsx` = calendar 105 週／database 17 行（供需 代號優先，51060JRF 剔除，B0CQRT4N37 冇 BOM）／SellOut 2035／SellIn 795（as_of 9/8）／Inventory 144（12 BOM × 12 月；51060HJC、51060KJA、51071URW 供需 冇 block）／RunRate 20 行（W30–W37 半月指引 + V4 階梯；13 個缺口列喺 run_log，主要係 UK 階梯同 H155／H173／E5783 指引冇行）。對數：calendar 1 號／15 號規則 W30–W42 逐週核；H165 8 週 = 7/8/9月 sheet F5/G5；SellOut W36/W37 = portal Total；51060KGE 9 月 = AB10:AB13。Kess 9/8 裁決：半月規則跟 1 號／15 號所在週；V4 划线价／Run rate／Promo／大促 = RRP／Run rate／Small／Big；Aligned price 係標題；51060JRF 停售剔除；供需 代號優先。未決：BP sheet 數源；供需 as_of（暫 mtime）。下一步 = build_dashboard.py Weekly sheet
- **BP sheet + dashboard（9/8 20:53）**：db.xlsx 加 `BP`（Tracker 2026BP，10 label × 12 月，月度 SO／NSIP／rev）、database 加 sip_eur／sip_usd（SI收入对比，17/17 有）、SellOut 加 gv。**Tracker 內部唔一致**：B636 行月度格加總 34,140.8 台／$2,214,390，但佢自己 N4／AD4 寫 33,976.8／$2,203,753 → 全年 Σ 月 = $7,971,859 vs 標題 AD15 $7,961,221（差 $10,637）；dashboard 用月度格，口徑 sheet 註明，要同 tracker owner 講。`scriptsuild_dashboard.py` → `dashboard.xlsx`（Summary／Weekly／BP／口徑）；last_week = 最近完整週（W36），週歸月用週四規則；flags 係證據指針唔係結論。**Dashboard v1 交（9/8 21:07）**：Summary／Weekly／BP／口徑；口徑修正：revenue = SO × Tracker NSIP（唔用 SIP $，之前 121% 係錯口徑）；月度實績只計完整週。數：YTD W01–W36 SO 49,781／rev $3.03M／prorated BP $4.94M → 61.3%；剩 $4.94M 到 7.97M、$2.97M 到 6.0M；上週 W36 1,847 台（WoW +0.4%）。B535 ASIN 唔喺 portal export（YTD 0）。**Dashboard v2 = 報告式（9/8 晚，Kess 批）**：簡體中文；總覽（報告句＋表）／分国家／销量趋势（B2 周月年、C2 指标、8 個產品格）／产品对比（6 個產品做欄、KPI 做行，營運視角）／产品总览（8 週格 N−4..N+3：销量／指引价／要货／活动）／BP对比／口径；數值全部由 script 預先算入 数据_* sheet，報告頁只用 IF／INDEX／MATCH 揀值。db 加 `manual_events`（Kess 填活動）；RunRate 窗口改 N−4..N+3。Dashboard v2 交（9/8 21:5x）：13 個 sheet，公式只喺報告頁（IF／INDEX／MATCH），数据_ 頁 0 公式；預警門檻 4 週均 ≥ 10 台先出比率類預警；H173 冇 BP 標籤 → 收入留空並加註。Excel 開檔未實測（我冇 Excel），Kess 要開一次睇有冇 #N/A。**會議版 workbook（9/8 深夜，Kess 規格）**：`scriptsuild_meeting.py` → `dashboard_meeting.xlsx`，繁體，四張可見頁 會議摘要／週營運／達標與行動／口徑，原頁同 数据_ 全部隱藏保留；公式格淡藍、人手輸入格淡黃，重跑保留輸入；收入標「SO × NSIP估算，不含H173」；600萬做討論基準（待程哥確認），797萬只做次要參考；達標與行動 A 年底基準預測（每週基準銷量由 Kess 填，缺輸入顯示「預測未完整」）／B 三場大促（Prime Day 場次待確認、黑五、聖誕，增量收入計降價影響）／C 下一步五行；用 Excel COM 重算驗證無 #錯誤同截斷。**9/9 Kess 三項修改**：①會議版 frame 以 Kess 手改版為準（備份 `dashboard_meeting.kess-2026-09-09.bak.xlsx`，Haiku diff 後寫入 script）；②實際掛價 = 月度價格指引 F/G（1 號／15 號規則）→ db 加 `Price` 長表，manual_weekly 只做人工覆寫，「未填掛價」flag 取消；③達標與行動 A 區改為「目標拆解：各產品要賣幾多台」= BP forecast 收入 − YTD 收入 = 剩餘收入 ÷ NSIP（同幣）／÷ RRP×匯率（Kess 原要求，匯率輸入格）+ BP 剩餘台數 + 上週銷量 + 每週需賣；術語用英文（BP forecast／YTD／NSIP／RRP），刪 未來基準收入／年底基準預測。**9/9 00:46 dashboard_meeting.xlsx 最終版**（Kess frame + 目標拆解表 + Price 掛價），真檔 Excel COM 重算 0 錯誤 0 截斷；db.xlsx 加 `Price`（347 行，6 月表頭異常跳過）。Kess：script 暫停，先用 workbook。Source gate 未寫。

## Gate 0 v2（Kess 2026-09-07 親手；濃縮版，原文喺 Process Log）
- **A. Ideal Output**：db = 乾淨 Excel workbook（只我開）；report = script 生成嘅 Excel dashboard（自審 + 程哥問時交）；每週落檔一次；depth budget：v2 spec ≤2 頁
- **B. Role Split**：Kess = 落 source 檔、填 plan 數（實際掛價／規劃SO）、裁決｜AI = 驗 source map、設計 db/dashboard、寫 script｜script 自報錯 → Kess flag → AI 修
- **C. Handoff**：C1 驗 source map ✔（下表）｜C2 抽數 script：AI 交 framework → Kess review → AI build → Kess test → AI 修｜C3 BSR 工具 ✔（SellerSprite，out of scope）
- **D. 必懂**：Join key（ASIN 主鍵 + BOM + Model；週號 + 週起始日；UK 同 Pan-EU 分開）｜Source 穩定性（下表 sheet／欄）｜三層庫存 + DOS 口徑

## Source map（2026-09-08 對數後 — 唯一有效版本；檔案全部喺 `Work Station\`）

| KPI               | 粒度        | File                                   | Sheet                           | Column(s)                                                                                                      | Join key             | 狀態                                                                    |
| ----------------- | --------- | -------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------- |
| Sell in actual（週） | 週（週一起始）   | `AMZ开门红供需  202600901.xlsx`             | `要货（SI）`                        | row 1 AF:CF = 53 個週一 yyyymmdd（20251229→20261228），一欄一週；過去週 = 實際 SI，未來週 = 計劃要货；Y 编码 = BOM，V 产品型号 = 產品代號          | BOM                  | **CONFIRMED**（Kess 9/8）— 同 Tracking0 Archive 逐週對數 0 差異；Archive 只做交叉核對 |
| Sell in actual（月） | 月         | 同上                                     | `SP# AATP-PO-delivery`          | AX「Sep Shipped」（當月）；M 欄起每月一欄 Shipped 歷史                                                                        | H Model／I BOM／J ASIN | 月度 69% match                                                          |
| Planned PO／幾時返貨   | 週         | 同上                                     | `SP# AATP-PO-delivery`          | CF:CP = WK34–WK44（滾動，header row 2）                                                                             | H／I／J                | **MATCH**（CH77=551, BE3 Pro W36）                                      |
| Delivery slot（月）  | 月         | 同上                                     | `SP# AATP-PO-delivery`          | AY「Sep Delivery Slot Confirmed」／AZ「Sep Delivery Slot Pending」                                                  | H／I／J                | 送貨預約，唔係 SI                                                            |
| Sell out actual   | 週 W01–W37 | `AmazonDetail (3).xlsx`（portal export） | 唯一 sheet                        | row 2 維度：B Country／F Model／G ASIN／H Color；row 3 起每週 8 個 metric：SO、GMV、C/R、ASP、Shipped、Returns、Sellable Inv、DOS | ASIN + Country       | OK                                                                    |
| Amazon INV        | 週         | 同上                                     | 同上                              | 每週「Sellable Inv」欄                                                                                              | ASIN                 | OK                                                                    |
| Hub inventory     | 月         | `AMZ开门红供需  202600901.xlsx`             | `全年模拟（正常模拟）`                    | R10「HUB库存（月初）」／R11「HUB库存（月底）」，月欄 S:AE；同 block 有 SI／SO／渠道库存／渠道DOS／产出                                            | 编码 = BOM             | **CONFIRMED** — 「月初」係實數（Kess 9/8）                                     |
| 價格階梯（參考）          | 月         | `Pricing Relevant\AMZ MBB量价模拟 V4.xlsx` | 每 SKU 一個 sheet（B530、B535、H153…） | C:F = 划线价/RRP／Run rate／Promo Price／大促价格（header row 2–3；CN + UK 並列）                                             | sheet 名 = 產品代號       | OK（計劃檔）                                                               |
| 實際掛價（舊「Runrate」行） | 週         | Kess 人手                                | —                               | —                                                                                                              | —                    | plan 數，見 Pricing rule                                                 |


**Join key 主表**：`泛欧亚马逊MBB产品基础信息汇总.xlsx`（17 行；A Model／B BOM／D ASIN）。供需有 BOM 欄、portal 有 ASIN 欄 → 直接 join。**產品代號 欄（H）已填 9/8** → 寫喺 `...汇总.WITH-CODE.xlsx`（原檔當時開緊 Excel）：15/17 填到（供需 BOM 對照）；2 個空 = E5783-230a（51071URW）、B535-230（51060HJC）— 供需／價格指引都冇呢個 variant，Kess 填；1 個衝突 = master 寫 E5586-336 但 BOM 51071VHT 喺供需係 **E5586-326**，Kess 裁；唔喺 Tracking0 嘅 = BOM 51060KJA（H153 UK）＋ 3 個 ASIN。9/7 寫嘅「YGJN／B530」係錯標，作廢。

## Pricing rule（Kess 2026-09-08）
- OldWS「Runrate」行其實係**實際掛價**；真正 Run rate = 正常價。四級階梯喺 V4（例 RRP 109.99／Run rate 79.99／Promo 69.99／大促 59.99）
- Amazon 規則：**Deal tag 只畀過去 30 日最低價**；Buy Box 另計。策略：大促必須攞 deal tag → 產品輪流促，每次大促至少部分產品有 tag
- 決定權永遠人手。db 價格 sheet 要令 Kess 一眼決到：每 SKU × 週 = RRP／Run rate／Promo／大促（V4 抽入）＋ 實際掛價（Kess 填）＋ 過去 30 日最低價（script 計）＋ Deal tag Y/N ＋ 活動名

## db 存法（三種紙）
- **週快照**（portal export、stock report）→ 每週 append 一行
- **滾動檔**（Tracking0 同一 sheet 每週覆寫）→ 每週影一份帶 as_of 日期先入 db，舊副本唔刪
- **計劃檔**（供需、BP、V4 階梯）→ 存版本（as_of），永遠唔同實績放同一欄
- Exit test (in English — this is NOT about the order of manual vs script input). It is a comprehension check: for each source file, name which of the three types it is, because the type decides what the script does when you download the same file again next week. Snapshot = each download is a new week, script appends. Rolling = same sheet, this week's numbers overwrite last week's, script keeps a dated copy. Plan = targets/simulation, not actuals, script stores it as a version and never mixes it with actuals. Fill: portal export = weekly capture｜Tracking0 = weekly capture as well｜供需 = depends on when is the update released
  ↳ Claude 批改 9/8：portal = **snapshot** ✓｜Tracking0 = **rolling**（唔止「每週落」— 同一 sheet 被覆寫，所以要留 as_of 副本）｜供需 = **plan**（幾時出新版都係計劃檔，唔同實績混）。cadence ≠ type。

**Decisions（Kess 2026-09-08）**：hub INV 月初 = 實數｜產品代號欄由 AI 填入 `基础信息汇总.xlsx`（原檔備份 `.bak-2026-09-08`）｜C2 framework 今日交 → [[Amazon Workstation v2 — Framework]]

> **HANDOVER BLOCK — Recombine v2 after MyVersion merge（2026-09-08）**
> 1. 週 key = `Y26W37`（ISO 週一起始），全部週表經 `calendar` sheet join（year／week／week_start／week_end／price_period）
> 2. `database` = 供需 MBB rows 做 seed（分类／family／產品代號／BOM，供需 代號優先：B535-232a、E5586-326；51060JRF 已停售，剔除）+ 主表 ASIN／EAN／覆盖国家／上市时间；一 BOM × 一 ASIN 一行
> 3. `SellOut`＝portal 長表（week_id＋country＋asin＋8 metrics）；`SellIn`＝供需!要货（SI） 長表＋as_of；`Inventory`＝供需!MBB越晚越便宜 六行（空运／海运／HUB到货／月初／月底／SI规划）
> 4. `RunRate` = 每 ASIN：RRP／Run rate／Small promo／Big promo（V4）＋ 最近 8 週嘅半月價格指引（1 號／15 號規則：含 1 號嗰週轉上半月，含 15 號嗰週轉下半月）＋ 备注；script 唔准定價，實際掛價喺 `manual_weekly`
> 5. BP 數源 = Tracker `2026BP` sheet（Kess 9/8 揀 B：月度 per family × NSIP，7.96M；6.0M deck 做頂部 flag）；供需 as_of 暫用檔案 mtime
> Outcome：Kess 逢週一落檔 → 跑兩個 script → 10 分鐘答到四條問題。



## Feedback loop

| Submission    | Problem / Question | Solution |
| ------------- | ------------------ | -------- |
| 3/9 version 1 |                    |          |
