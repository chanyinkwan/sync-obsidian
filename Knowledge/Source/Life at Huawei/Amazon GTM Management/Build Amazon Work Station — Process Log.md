# Build Amazon Work Station — Process Log (Appendix)

Moved verbatim from [[Build Amazon Work Station]] on 2026-09-08. History only — Gate 0 v1, D-A-R-E v1, v1.1, C1/C3 results, Audit v2, SI source check. Binding constraints and open decisions live in the task note, not here.

## First Principle


### GATE 0 — 開工閘（未過閘唔做 intake）

**A. Ideal Output（Kess 親手寫，≤3 行）**
- 物理形態（個 work station 係乜：Obsidian note？Excel？幾多版面／幾多個週期檢查）：
It will include a sheet for communication / delivery, so it will be an excel folder
For how many sheets, dont have an accurate number in mind right now, but I can state the sheet mapping with the goal stated above:
1. 知不知道的問題 - "Amazon 上週賣了多少台、每個產品分別多少台、每個國家多少台、是漲是跌、庫存還能撐多少天、下一批貨什麼時候進"
-> this will take 1 sheet, to state the SI/SO, delivery, DOS
-> I dont have a full KPI list right now but what ziyi has included in her workstation was: 
{Runrate， SC排产， SI， 规划SO， SO， 亚马逊INV， 机关INV， 全渠道INV， AMZ DOS， 全渠道DOS}， these are the number that has to fill in {Runrate， SC排产， SI， 规划SO， SO}, the others are calculated within the excel review "C:\Users\k84450674\Desktop\Amazon Hand over\Handover Book Doc\AMZ泛欧 路由&MBB上市进展 (1).xlsx" referencing the formula and definition of each number
2. 從 6 個 million 的全年收入目標由上而下拆解
-> this will take another sheet, probably similar to this excel:
"C:\Users\k84450674\Desktop\Amazon Hand over\Handover Book Doc\MBB SI volume&Rev Tracker.xlsx"
I dont have a very clear understanding over this workbook, but what I see is there is a business plan that has predicted / set a goal for the sell out and revenue; I have no involvement in this goal plan, but I think this is the goal that I ned to try to achieve (handed off by ziyi)
-> I assume what matters here would be these KPIs:
Actual Sell Out: Jan 2026 - August 2026 -> to indentify where are we, how much of the revenue goal we have achieved
Business Plan Sell Out -> to identify how much of revenue we should achieve in the remaining months of the year
this sheet might have some ties with the first sheet mentioned above, since there are a lot of reasons that caused not being able to achieve the goal, and the diagnosis should happen in daily operations, which is the workstation sheet above; the tie might happened like setting a KPI for those numbers in the workstation along with the weekly sales, so it helps identifying the correlation between the KPIs and the result (delivery / traffic / competition (no KPI for competition right now in my mind at least))
3. stakeholders: delivery (dengzhichong), channel GTM(xuxingling?), product GTM (liuzhou?)
- delivery would reference predicted sell out in my workstation
- channel GTM would reference my pricing listing (meeting like this [[Amazon MBB Pricing Meeting Transcript — Kess-Led (8-5-2026)]]  and this is the material I use in this meeting "C:\Users\k84450674\Desktop\Sept Amz Price.xlsx") 
- Product GTM would care about product launching to channels
-> there might be a sheet that is clean and customised for each of these stakeholders (sheet 3-5)

Style of sheets:
I might expect clean and simple dashboards, visualise would be nice, if its not very complicated graph would be the ideal scene
- 用佢答到嘅一句話（例：逢週一 5 分鐘內答到程哥條「上週賣咗幾多」）：what I sell, how much I have sold, what are we expecting to sell, how are we going to achieve this expectations
- Depth budget：(? dont know what is depth budget) -> bare minimum of the listed goal under the ask as received section
  ↳ 2026-09-03 default applied (skill caps): Decompose ≤15行 / Audit ≤15行 / build spec ≤2頁；超出入 appendix。Kess 可隨時改。
- there is something more, which is about the market and product knowledge, there is too much to read about the product, so i am hoping to have some key introduction about the product such as in the channel amazon, who are the key competitors for the product that I am selling, how are the pricing categories identified, what are the competitiveness among the product I am selling etc (well this might be another task that needs to go through the first principle gate, identify the needs for me, if necessary I will start one on my own)

**B. Role Split（Kess 親手寫，≤3 行）**
- 我自己做：look up source of data, able to deliver the results and plans and goals by reading the final workstation
- Assign 畀 AI：identifying where we are, what we need to build this workstation and how are we going to build this workstation, how to identify whether its a success or not
- AI 要交返嚟畀我決定嘅位：should align the source of data, the given hand over doc could be something outdated as most of the data we use here are time sensitive

**C. Handoff 合約**（每個 assign 出去嘅 task 一行：交出乜 → expect 返乜 → acceptance 準則 → 點解係 AI 做）
- intake all handover mateirlas -> identify the key KPIs from those messy handover document -> expect your assistance for my 認知提升 -> expecting you to tell me where should my cognitive be to manage this as you manage what you record (?) -> i cant read all materials and connect the point on my own
- Intake my expected outcome -> use first principle to decompose, audit, and recombine, check if theres something missing from my shared expected outcome, point out the missing part and give a solution, use unknown navigator to raise my cognition
- audit my understanding, identify the key KPIs / data, then I have to point it out clearly where to find that certain data
- the goal here is to 1. align the expected output, that can help achieving sales goal in amazon

**D. 必懂清單 — Claude 提名，Kess 揀：**
1. **數據鏈路同口徑** — 「上週賣幾多台」個數由邊個系統出（VC／內部 BI／子怡張表）、sell-in 定 sell-out、幾耐 refresh 一次。呢個決定成個站嘅數字信唔信得過。
2. **6M 拆解算式** — 用邊個價（出貨價定零售價）、邊啲產品×國家孭幾多。決定書面作業條邏輯撐唔撐得住。
3. **庫存→補貨 pipeline** — DOS 點計、下一批貨幾時到邊個知（PO／SI）。決定「庫存撐幾耐」同促銷「有冇貨」兩條問題。
-> try to identify for me when in taking the materials
**⚠️ 冇主 workstream（要 named owner 先開工）：**
- 程哥 5 條 goal 入面，#3 書面作業（6M essay）同 #5 三場大促方案係獨立交付物 — 個 work station 只係餵佢哋數據。呢兩樣入唔入呢個 task 嘅 scope？
6M essay will be an extended delivery, whats important in this essay is the insights of where are we and how we are going to achive this 6M goal, so whats really important is that am I able to identify the performance so this will be a separate goal after the workstation is done, and the framework of the essay will be using the flow of data/insight from the workstation
#5 三場大促方案係獨立交付物 will also be an extend delivery from the workstation, only when the workstation is done, when the performance is clearly visualised, we can plan what to do in the promotion that could help achieving the 6M goal

### DECOMPOSE（2026-09-03，≤15行）

**必答問題（工作站要答到嘅）**
1. 上週賣咗幾多（分 SKU×國家、漲定跌）｜2. 庫存撐幾耐（DOS）｜3. 下一批貨幾時到｜4. 6M 達成進度 vs BP、gap 喺邊個 SKU/月

**手上有乜**
- SQL 平台（Online sales operation）：SO / GMV / C/R / ASP / Sellable Inv / DOS / Returns，週粒度×國家×ASIN，有 Export → 問題 1、2 嘅數源
- 子怡公式鏈（AMZ泛欧上市进展.xlsx）：亚马逊INV = 上週INV + SI − SO｜机关INV = 累計排产 − SI｜AMZ DOS = INV ÷ 過去4週平均SO × 7 → Sheet 1 骨架現成
- 6M 拆解（MBB SI volume&Rev Tracker.xlsx → 2026BP sheet）：逐 SKU 逐月 SO 目標 × NSIP = 收入，SO SUM 已拆好 → Sheet 2 骨架現成
- SKU 現狀（Handover book.xlsx by SKU progress）+ 月度價格表（Sept Amz Price.xlsx）

**缺乜、邊個有**
- SI 實際數＋下一批到貨日期（排产→HUB→上架 pipeline）：SQL 平台 screenshot 見唔到 → 估係 delivery（dengzhichong）or 內部供應鏈表 — **Kess 指路** -> I think he update this in the group either this one"C:\Users\k84450674\Downloads\AMZ开门红供需  202600803.xlsx" or this one which is a shared doc in internal drive "C:\Users\k84450674\Desktop\AMZ MBB Handover\EU Amazon Weekly AATP-PO-delivery Tracking (1).xlsx"
- 2026BP 個 6M 目標係咪仲係現行版本（子怡留低，你冇參與）→ **要同程哥對齊一次** -> no one knows, but should be the same, if the BP is 6M then yes, it should be the right one

> **HANDOVER BLOCK — Decompose**
> 1. Sheet 1 直接沿用子怡公式鏈（INV/DOS 三條公式），唔重新發明
> 2. Sheet 2 直接沿用 2026BP 結構（SKU×月 SO×NSIP），只加 Actual vs BP 對比列
> 3. 週度 SO/INV 數源鎖定 SQL 平台 Export；人手只填 SI／排产／到貨日
> 4. SI pipeline 數源未指路前，Sheet 1「下一批貨」列留空，唔准估
> 5. 6M=BP 總數呢個假設未同程哥確認前，Sheet 2 標「BP 未驗證」
> Outcome：一個 Excel workbook，令 Kess 逢週一答到「賣咗幾多、撐幾耐、幾時返貨、6M 去到邊」。

### AUDIT（2026-09-03，≤15行）

**假設1：程哥個 6M ＝ 2026BP 總數** → **反轉咗**。實算 2026BP = SO 111,457 台 × NSIP ≈ **7.96M**，唔係 6M（超 33%）。Top 3：H153+H155 (2.27M)、B636 (2.20M)、E6888 (0.85M)。
- 點驗：同程哥對一句「6M 係咩口徑」（幣種？SO×NSIP 定 SI 收入？全 SKU 定子集？定係新目標取代咗 BP？）
- 驗唔到點寫：Sheet 2 沿用 BP 結構，目標行做成可改參數，頂部標「目標未對齊：BP=7.96M vs 程哥口頭=6M」

**假設2：SI/到貨數源** → **證實**。`EU Amazon Weekly AATP-PO-delivery Tracking (1).xlsx`（File B）有 PO/delivery/AATP 欄，數據去到 2026-09-08，係 live tracker。開門红供需（File A）冇到貨日期。剩一樣未驗：邊個幾耐更新一次（問 dengzhichong）。

**假設3：SQL 平台 SO 口徑 ＝ 子怡表 SO** → 未驗。點驗：export 一週、揀 1 個 SKU 對返子怡表同週數。驗唔到點寫：Sheet 1 口徑以平台 Export 為準並註明。


**Kess 裁決（2026-09-03，蓋過 Audit block 第 2 條）**
1. 目標跟 **2026BP（≈7.96M）**，唔跟口頭 6M — 程哥唔深入項目，BP 更可靠。Sheet 2 目標行仍做參數，頂部保留一行「口頭 6M vs BP 7.96M 未對齊」備查。
2. 收入公式跟 2025BP 實證：**收入 = 月 SO × NSIP**；口徑 SO 優先於 SI。
3. File B 更新頻率唔重要 — 有專屬羣組可以問 plan/PO 細節，需要先問。
4. 新數源：SQL 平台 Export（AmazonDetail (2).xlsx，可以去到日粒度）→ Sheet 1 數據餵入口以此設計。

### RECOMBINE（2026-09-03）— 交付物已產出
`C:\Users\k84450674\Desktop\Amazon MBB Workstation.xlsx`（v1，3 sheets）
- **周运营**：12 個 SKU 塊 × W36–W53，每塊 7 行（Runrate价/SI/规划SO/SO/亚马逊INV/AMZ DOS/下批PO到货）。黃格=人手填，灰格=公式（子怡鏈：INV=上週+SI−SO；DOS=INV÷4週平均SO×7）
- **6M拆解 BP vs Actual**：10 SKU × 12 月，BP SO 行照抄 Tracker（逐格核對 0 錯），Actual 行黃格，收入=SO×NSIP，底部 BP合計/Actual合計/達成率
- **说明·数源**：周一5步 routine、數源表、v2 擴展清單（机关INV、stakeholder 視圖、大促 sheet）

> **HANDOVER BLOCK — Recombine**
> 1. 工作簿冇任何虛構數字：BP 數逐格核對源檔 0 mismatch；SO/INV/價格全部留黃格等真數
> 2. 週 export 必須勾 Model dimension，否則冇 SKU 粒度
> 3. 期初 INV（紅字黃格）要用平台 Sellable Inv 填一次先行得起條 INV 鏈
> 4. H173/E6898 唔喺 2026BP 內 — Actual 照填，BP 行空缺（已標注）
> 5. 目標=BP 7.96M 做參數；口頭 6M 未對齊 flag 在 Sheet 2 頂部
> Outcome：逢週一 10 分鐘答到「賣咗幾多、撐幾耐、幾時返貨、目標去到邊」。

### v1.1（2026-09-04）— 修訂已落地
檔已搬去 `C:\Users\k84450674\Desktop\Amazon GTM Management\Work Station\Amazon MBB Workstation.xlsx`（以後都寫呢個路徑）。五項修訂：
1. **NSIP 已解答**：價格階梯 RRP（貨架價）→ SIP = RRP÷1.2×0.93（開票 sell-in 價）→ NSIP = 扣 rebate/費用後淨 sell-in 價（逐 SKU 50–66% of SIP；例 B636：RRP 149.99 vs NSIP 64.86）。GMV ≠ 收入。
2. **BP sheet 加 H173 + E6898 行**：月度目標黃格留空等填；NSIP 橙格（118.7 / 296.77，源「价格及销毛 v3 Q2销毛演算」，USD＋促銷價口徑 — 紅字標「用前同財經核實」）。合計公式改 P5:P28。
3. **SI 實際 Jan–Jul 參考塊**：15 SKU 真數（源 SI收入对比），標明 SI≠SO；Actual SO 行仍要 Kess 一次 Month export 先填到。
4. **说明页加打卡格**：W36–W53 × 週一5步，做完填 x。
5. **说明页加 KPI 詞彙表**：14 條。Kess 猜錯兩條已糾正 — C/R = 轉化率 SO÷G/V（screenshot 實證 453÷16,461=2.8%），G/V = page views；最尾一條係價格階梯。

> **HANDOVER BLOCK — v1.1**
> 1. H173/E6898 NSIP 係橙色暫定值（USD/促銷價口徑）— 用前必須同財經或程哥核實
> 2. H173/E6898 月度 BP 目標黃格由 Kess 填（BP 檔冇呢兩隻）
> 3. Jan–Jul 塊只有 SI 實數；Actual SO 要 Kess 做一次 Month-view export 填入（唔准估）
> 4. 週 export 記住勾 Model dimension 先有 SKU 粒度
> 5. C/R=轉化率、G/V=瀏覽量 — 同程哥講數時唔好用錯口徑
> Outcome：工作站 v1.1 齊料可以行第一個真實週；等 Experiment（下週一）。

**期初INV 數源（2026-09-04 查證中）**：Ziyi 表 `AMZ泛欧 路由&MBB上市进展 (1).xlsx` sheet「MBB操盘模拟」係 rolling plan — 過去週=實績、未來週=推演（推演欄見負數庫存，唔可以當期初用）。要攞 2026-08-31 當週對應欄嘅 亚马逊INV。INV 公式：週度 = 上週INV + SI − SO；累計版 = 累計SI − 累計SO（上市起計）— 會因退貨/盤損 drift，隔幾週用平台 Sellable Inv 對數。

**期初INV 查證結論（2026-09-04）**：Ziyi 表「MBB操盘模拟」當週（8/30 欄）只有 B636白 有實數（INV=77，cell K15，當週SO=153）；其餘 SKU 亚马逊INV/SO 全空，未來欄全係推演負數 — 張表已經冇人填實績。⇒ 期初INV 唯一可靠源 = SQL 平台 Sellable Inv（週一 export 勾 Model，一次過抄入 12 個紅字黃格）。B636白 可先用 77 開鏈，export 到手再對一次。

### What is the problem with the current version of workstation

1. I have went through all the numbers in the old workstation and mapped where are the source of each numbers and i found the current workstation is not comprehensive enough, then i would like you to verify for me using the old work station number to check on the mapped source, to see whether the source I mapped is correct or not

**Final source map（2026-09-08 對數後版本；檔案全部喺 `Work Station\`）**

| KPI                | 粒度        | File                                                                                                                | Sheet                  | Column(s)                                                                                                         | Join key                    | 狀態                                                             |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------- |
| Sell in actual（週）  | 週（週一起始）   | `EU Amazon Weekly AATP-PO-delivery Tracking0.xlsx`                                                                  | `SP# Archive`          | AN:IC — 一欄一個出貨日 2024-07-02→2026-08-25，script 按週聚合；每行一個 Product Model                                              | Product Model（內部料號）         | **PARTIAL** vs OldWS：2024 100%／2025 53%／2026 69% exact；±1週 69% |
| Sell in actual（月）  | 月         | 同上                                                                                                                  | `SP# AATP-PO-delivery` | AX「Sep Shipped」（當月）；M 欄起每月一欄 Shipped 歷史                                                                           | H Model／I BOM／J ASIN        | 月度 69% match                                                   |
| Planned PO／幾時返貨（週） | 週         | 同上                                                                                                                  | `SP# AATP-PO-delivery` | CF:CP = WK34–WK44（滾動，header row 2）                                                                                | H／I／J                       | **MATCH**（CH77=551, BE3 Pro W36）                               |
| Delivery slot（月）   | 月         | 同上                                                                                                                  | `SP# AATP-PO-delivery` | AY「Sep Delivery Slot Confirmed」／AZ「Sep Delivery Slot Pending」                                                     | H／I／J                       | 你原本標 AY=sell in — **唔係**，係送貨預約                                 |
| Sell out actual    | 週 W01–W37 | `AmazonDetail (3).xlsx`（portal export）                                                                              | 唯一 sheet               | row 2 維度：B Country／F Model／G ASIN／H Color；row 3 起每週 8 個 metric 重複：SO、GMV、C/R、ASP、Shipped、Returns、Sellable Inv、DOS | ASIN（+Country 分 UK／Pan-EU）  | OK                                                             |
| Amazon INV（期初／週）   | 週         | 同上                                                                                                                  | 同上                     | 每週「Sellable Inv」欄                                                                                                 | ASIN                        | OK（9/4 已定）                                                     |
| Run rate           | 月         | **兩個候選，你揀**：① 你定價會輸出（`Sept Amz Price.xlsx` 類）＝人手 plan 數；② `AMZ开门红供需  202600901.xlsx`!`MBB越晚越便宜+路由器越早越便宜`!G「Runrate」 | —                      | —                                                                                                                 | 你定義「我哋喺 Amazon 設嘅價」→ 要裁 ①定② | **DECIDE**                                                     |
| Planned SO         | 週         | 你自己預測                                                                                                               | —                      | 人手 plan 數                                                                                                         | —                           | n/a                                                            |
| Hub inventory      | 月？        | **未搵到**：供需 sheet 兩次掃描冇 库存／HUB／INV 欄；`Huawei+stock+report` 冇 MBB SKU                                                 | —                      | —                                                                                                                 | —                           | **NOT FOUND** — 你話「每月第一週」見過，請畀 cell 位；否則問 dengzhichong         |

reference online sales portal available data:
Online Sales Portal Available Data
- GV = Gross value
- SO = Sell Out = Actual Customer Purchase on Amazon
- GMV = Gross Merchandise Value = Product Price + Shipping Fees + Taxes
- C/R = Cost to Revenue = this helps calculating the sales margin (pending to validate)
1 - sales margin = cost/revenue
- ASP = average selling price
- sales radio% = 销售费用占销售收入的比例 (sales expenses /sales revenue) 
- GMV radio % (dunno what 7 is this)
- shipped
- returns
return rate
sellable inv
open order
dos

2. I don't like the process of inserting number manually, given that the constraints are the source of numbers are mostly saved under the internal drive which I think what I can do is to save the report / source in a specific file name, so I could write a python script to extract needed numbers instead of inserting numbers manually; the ideal state is that the data extraction base, and the reports (answering high level questions using visualised data) should be separated and this preference would push back the design we have right now, since the current workstation is not allowing script interferer. the other thing we should consider is the size of the excel, along times, the workstation in this current design would lead to a huge size and long wait time for generation, so what is the expected new outcome would be a system including the component of database, weekly report with up-to-date monthly and yearly insight report; 
3. we didnt extend our scope on the market research, referencing the hand over doc, take this as an example,"C:\Users\k84450674\Desktop\AMZ MBB Handover\Handover Book Doc\Market Size\2026年6月BSR销量.xlsx", I think ziyi has used some tools to assist the understanding of the amazon market division on differen brands, to understand how is our brand performing comparing to other brands, lets investigate this as well, we might not need to include this in the system at this moment, but we could keep this in mind and see whether my understanding is correct, and keep it considered when designing the architecture of the system

### GATE 0 v2 — 重設計（2026-09-07，未過閘唔做 intake）

**Claude 讀完上面 §1–3 嘅回應（≤5 行）**
- 你已寫咗半個 A（「database + weekly report + monthly/yearly insight」）；**B／C／D 未寫**。
- 同你 8/20 [[Optimise Amazon Final Workstation]] 有衝突要你裁：嗰度你寫「唔需要第二個 database」「stakeholder 只開得到 Excel」。
- v1.1 首個真實週（今日 9/7）**未跑過**。v2 係咪 = 喺 v1.1 之上加一層「抽數」，v1.1 嘅公式鏈同 report 版面照用？（層層長，唔推倒重來）
- 機上有 Python 3.14，但**冇 openpyxl／pandas**。§1 六個 source 檔全部喺 `Work Station\` 搵到。


**A. Ideal Output（Kess 親手，≤3 行）** — 要答到：
- 「database」物理形態：一個 SQLite 檔？一個資料夾 CSV？一個 Excel data workbook？**邊個開得到？**
ideally a very clean excel workbook, only me needed to read or open it
- 「report」物理形態：週報＝Excel dashboard sheet？月／年 insight＝一頁 Obsidian／PPT？**畀邊個睇？**
excel dashboard sheet it is expected to output through running a script, so the ideal workflow would be user (me) -> download all the necessary data, we will have to identify how long to update the download once, probably once a week, if there are report that includes the whole quarter data, how should we handle this (brainstorm this with your expertise on what are the solutions that could avoid duplicating a lot of data, maybe replacing the old one and how to snapshot the old data) -> run script (to update the data in the database) -> data base updated -> run script to generate excel dashboard (weekly) this report will serves as an understanding for myself on which of the numbers has to be adjusted in order to achive the goal as well as delivery for dingcheng, when he asked
- 帶走嘅一句話仲係唔係「逢週一 10 分鐘答到賣咗幾多／撐幾耐／幾時返貨／目標去到邊」？
yes,, and also a self review for me whether the current arrangement are aligned with my expectations
- Depth budget：v2 design spec ≤ ？頁
what do you mean?

**B. Role Split（Kess 親手，≤3 行）**
- 我自己做：I have done my part sourcing where the data are from
- Assign 畀 AI：you identify whether my mapping of sources are correct and brainstorm the new system together that could last and accurate
- **邊個維護條 Python？**（source 檔改咗版面、script 靜靜哋抽錯數 — 邊個發現、邊個修？） we

**C. Handoff 合約**（每條一行：交出乜 → expect 返乜 → acceptance → 點解係 AI 做）
- C1 驗 source map（你 §1 張表）：交 v1.1 workbook + 6 個 source 檔 → 返 6 行 match／mismatch 表（每 KPI 揀 1 SKU × 1 週對數）→ acceptance：i dont want to read through all the data again
- C2 抽數 script：→ acceptance：you deliver the framework, I review, you build I test you ammend
- C3 市場研究（BSR）：→ acceptance：review what are the tool that she has been using so i can research on that as well, just see if you could find which is the tool she used, if not, leave it for later

**D. 必懂清單 — Claude 提名，Kess 揀（揀完 Claude 用一個比喻＋一個實例教，然後你 3 行講返出嚟先出閘）**
1. **Join key** — 6 個 source 用邊條鎖匙拼埋（SKU 名／ASIN／型號代碼？週號定日期？國家碼？）。呢條唔統一，database 拼出嚟嘅每個數都錯。the key should be ASIN, but along please also include the SKU and model nam, both week number and the start of that week date, UK is separated from other Pan EU countries (Spain, Italy, Germany, France)
2. **Source 檔嘅穩定性合約** — 每個 source 邊個 sheet／邊欄係「抽數位」；同事改一格版面，script 就靜靜哋抽錯。你要識得認出「抽錯咗」。i have included in the above table
3. **三層庫存 + DOS 口徑**（v1.1 教過一半）— Hub INV（Huawei stock report）／亚马逊INV／机关INV 邊個係邊個；DOS 用邊個 INV 除邊個 SO。
i have included my understanding in the table above

**⚠️ 冇主 workstream（要 named owner／decision 先開工）**
- §3 市場研究（BSR）：in scope 定 separate task？just see if you can name the tool if no just leave it out of scope this time
- 每週「落 source 檔到指定檔名」係人手步驟 — owner = Kess？你 OK 用「人手落檔」換「人手填數」？i will download the source, and the script will extract the number and fill in the database
- 公司機可唔可以 `pip install openpyxl pandas`？（可以＝1 分鐘；唔可以＝成個 script 方案要轉）i can
- `Work Station\OldWorkStation.xlsx`（13 MB）係咪你 §1 講嘅「old workstation」本體？yes

> **Claude 讀完你填嘅 Gate 0 v2（2026-09-07）— 三個 default 已套，你可以改**
> - Depth budget = 交付物同分析嘅**長度上限**，超過嘅寫落 appendix、你默認唔讀。Default：v2 spec ≤2 頁；C1 結果表 ≤1 頁。
> - Python 維護「we」→ 拆做：script 每次 run **自報**（抽咗幾多行、邊格抽唔到）→ Kess 見到報錯就 flag → AI 修。
> - C1 acceptance「唔想再讀晒啲數」→ 改寫做：每 KPI 一行，`old workstation 值 = source 檔 sheet!cell 值`，MATCH／MISMATCH／NOT FOUND，附 cell 位，你每行 30 秒抽查得到。
> - D2／D3 你話「喺表入面」，但表嘅 sheet 欄只填咗 1／4 —— C1 順手補齊，你確認嗰步就係 D 嘅出閘測試。

### DECOMPOSE v2（2026-09-07，≤15行）

**必答問題（v2 要答到）**
1. 六個 KPI 每個由邊個檔＋邊個 sheet＋邊欄抽？（＝C1）
2. 邊啲 source 係「週快照」、邊啲係「累計／滾動」？決定 DB 點 snapshot 先唔重複（你 A 入面要 brainstorm 嗰條）
3. Dashboard 四條問題不變：賣咗幾多／撐幾耐／幾時返貨／目標去到邊

**手上有乜**
- `OldWorkStation.xlsx`（子怡原表，含已填數 ＝ C1 嘅答案卷）；5 個 source 檔已喺 `Work Station\`
- v1.1 公式鏈（INV／DOS／收入=SO×NSIP）照用；Join key 已定（D1：ASIN 主鍵＋SKU＋型號；週號＋週起始日；UK 同 Pan-EU 分開）

**缺乜、邊個有**
- Run rate／PO tracking／Hub stock 三個 source 嘅 sheet＋欄位未填 → C1 補
- SO actual 唯一源 = portal export（AmazonDetail.xlsx），冇 API → Kess 每週人手落一次
- 季度級 report 點 snapshot：未定 → Audit 假設 2

> **HANDOVER BLOCK — Decompose v2**
> 1. v2 = 三件套：`sources\`（Kess 人手落檔、固定檔名）→ `db.xlsx`（script 寫、只有 Kess 開）→ `dashboard.xlsx`（script 生成）。v1.1 公式鏈唔重寫
> 2. C1 未出結果前，**唔准寫任何抽數 script**
> 3. Join key 鎖定 D1；任何 source 冇 ASIN 就要一張人手 mapping 表（ASIN↔SKU↔型號）
> 4. Depth budget：v2 spec ≤2 頁；C1 表 ≤1 頁；超出入 appendix
> 5. Script 錯數責任：script 自報 → Kess flag → AI 修
> Outcome：Kess 逢週一落檔 → 跑兩個 script → 10 分鐘答到四條問題。

**C3 結果（2026-09-07）— BSR 工具已認出，依你裁決：out of scope 今次**
- 工具 = **SellerSprite（卖家精灵）**。證據：`2026年5月BSR销量 DE.xlsx` sheet「Note」row 1 寫住 `Website: https://www.SellerSprite.com`
- 檔案粒度：每月一檔、一行一個 ASIN（Brand／Category BSR／Monthly Sales／Avg Price／ParentASIN）；「Brands」sheet 直接有 **Market Share %**，唔使自己聚合
- 架構預留：有 ASIN 欄 → 將來可以直接用 D1 主鍵拼入 db；月度檔 = 月快照，同週度 source 分開存

**C1 結果（2026-09-07）— 你 §1 嘅 source map 對數（答案卷 = `OldWorkStation.xlsx` sheet `路由器操盘  202602`，1140 個 tab 入面唯一仲有人填嘅一個；~700 個係無日期嘅自動複本）**

| KPI           | OldWS 值（SKU／週）                      | Source 值                                                       | 裁決                 | 點解                                                                                 |
| ------------- | ----------------------------------- | -------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------- |
| Run rate      | `DM146`=89.99（BE3 Pro 53030CXN，W32） | `泛欧亚马逊月度价格指引`!`8月价格指引-AMZ平板IoT`!F26=**69.99**                  | **MISMATCH**       | 69.99 = OldWS **促销价** 行（DM147）。個 guide 係促銷價源，唔係 Runrate 源；guide 冇 runrate 行        |
| SC planned PO | `BQ152`=492（BE3 Pro，W36 SC排产-产出）    | `EU…Tracking0`!`SP# AATP-PO-delivery`!CH77=**551**（WK36）       | **MISMATCH（唔同階段）** | OldWS = 工廠排產產出；source = AATP／open-PO 到貨額。你個 KPI 名叫 planned PO → source 啱，但佢唔係 SC排产 |
| Hub inventory | `DM14`=200（X3 Pro Suite，W32 HUBATA） | `Huawei+stock+report_Wk32/Wk36`!`Inventory report-EU`          | **NOT FOUND**      | 兩個 stock report 212／224 行**全部係手錶／耳機／手機，零 MBB SKU**                                 |
| Sell in       | `DM95`=50（Mesh 3+ 53030DRG，W32 週）   | `AMZ开门红供需`!`MBB越晚越便宜+路由器越早越便宜`!AA342=**500**（8月 产出）            | **MISMATCH（粒度）**   | source 係全年沙盤（逐月 产出／要货 計劃），冇週欄、唔係實績                                                 |
| Planned SO    | `规划SO` 行（每 SKU 一行）                  | 你自己預測                                                          | n/a                | —                                                                                  |
| SO actual     | `SO` 行                              | portal export `AmazonDetail (1).xlsx`（Model×Color×週，冇 ASIN／國家） | n/a                | 8/13 起冇再 export                                                                    |
|               |                                     |                                                                |                    |                                                                                    |

**Join key 現況**：ASIN 只喺 `EU…Tracking0`（H Product Model／I BOM=530xxxxx／J ASIN 三個都有）→ 佢係 cross-reference 表嘅種子。其餘：價格指引用 YGJN 碼、供需用 B530-xxx 碼、portal 用 Model+Color、OldWS 用 530xxxxx。**四套碼，冇一個 source 通晒。**
**檔案形態**：價格指引 = 月（半月欄）快照｜Tracking0 = 一個 sheet 滾動累計（每週覆寫）｜stock report = 週快照（每週新檔）｜供需 = 年度計劃｜portal export = 週欄。
**OldWS 有、v1.1 冇嘅 12 行**：RRP／促销价／折扣率／销毛／NSIP／收入／SC排产-产出／运输方式／HubINV／全渠道INV／AMZ+HUB DOS／HUB DOS。

### AUDIT v2（2026-09-07，≤15行）

**假設1：你 map 嘅 4 個檔就係 4 個 KPI 嘅源** → **反轉 3／4**。只有 planned PO 對上（而且係 AATP 口徑）。Runrate 源未知（最似係你自己月度定價會嘅輸出）；MBB hub 庫存源未知（stock report 唔覆蓋 MBB）；週度實際 SI 源未知（供需表係計劃）。
- 點驗：你答落面 4 條裁決。驗唔到點寫：dashboard 該格留空標「source 未定」，唔准估。

**假設2：ASIN 一條 key 通晒** → **反轉**。四套碼。點驗：由 `Tracking0` H/I/J 三欄起一張 `sku_map`（ASIN↔BOM↔Model），再人手補 YGJN 碼、B530 碼、portal Model+Color。驗唔到點寫：冇 map 到嘅 SKU 唔入 db。

**假設3：source 都係週粒度，db 用週做主軸** → **半反轉**。三種形態要三種存法：週快照檔 → 照 file 週號 append；滾動檔（Tracking0）→ 每週影一份帶日期副本再 upsert (key, period)；計劃檔（供需／BP）→ 存做「plan 版本」帶 as-of 日期，唔同 actual 混。呢個就係你 A 入面問嘅「點 snapshot 唔重複」嘅答案。

> **HANDOVER BLOCK — Audit v2**
> **Answerability：ANSWERABLE ONLY WITH [MBB hub 庫存週數 ＋ 週度實際 SI ＋ Runrate 定義] @ [交付 dengzhichong／MBB 專屬 stock report／Kess 定價會輸出]。** 
> 
> 「賣咗幾多」「目標去到邊」而家答到；「撐幾耐」「幾時返貨」未答到。
> 
> 1. Recombine 必須由「同 Kess 對齊 3 個未定 source」開頭，未對齊唔准起 script
> 
> 2. `sku_map` 係 v2 第一張表，種子 = Tracking0 H/I/J；四套碼人手補齊先有 join
> 3. . db 三種存法（週快照 append／滾動檔帶日期副本 upsert／計劃檔存版本）— 唔准將計劃數同實績數放同一欄
> 4. 價格指引 = 促销价源；Runrate 另找源
> 5. Stock report 唔係 MBB 源，唔准再用
> Outcome：Kess 逢週一落檔 → 跑兩個 script → 10 分鐘答到四條問題（而家只答到兩條）。

**Kess 要裁（答喺下面，每條一行）**
1. Runrate 嘅源係咪你自己月度定價會嘅輸出（`Sept Amz Price.xlsx` 類）？係 → 佢變成你人手入嘅「plan」數，唔係抽出嚟嘅。
2. MBB hub 庫存邊個有？（dengzhichong？Tracking0 入面某欄？另一份 MBB stock report？）
3. 週度實際 SI 邊個有？（dengzhichong 週更？Tracking0 嘅 Shipped 只有月）
4. Dashboard 要「SC排产」定「planned PO／AATP 到貨」？（兩個唔同階段，揀一個做「幾時返貨」嘅源）


**SI source 驗證（2026-09-08）— 答 Audit v2 Q3；修正 §1 表同 C1 表嘅「Sell in」行**
- 掃晒 13 份 Amazon transcript／handover note：**冇一份寫明 SI 源檔**。唯一線索 = `Amazon MBB Source Index`（8/20）S03「AMZ Delivery Plan／Delivery Tracker」（實際 SI，雙週更）＋ S04 `MBB SI volume&Rev Tracker.xlsx`（月）。26-8 程哥提「沖哥」畀 delivery 數（估 = dengzhichong，未證）。
- 用 `OldWorkStation.xlsx`!`MBB操盘模拟` 14 個 SKU 嘅 SI 行（W31/2024 起，週起始 = 週一，逐年對）對 `Tracking0.xlsx`：
  - `SP# AATP-PO-delivery` WK34–44 欄：**0% match（35 格）** → 前瞻 AATP／PO 計劃欄，唔係 SI 實績
  - `SP# Archive` 逐日「Shipped」欄（~198 個出貨日 2024-07→2026-08，按 Product Model 行）聚合成週一起始週：**358 格，exact 60%，±1 週 69%**；2024 = 100%，2025 = 53%／64%，2026 = 69%／75%
  - `SP# AATP-PO-delivery` Shipped 欄按月聚合：171 格 69% exact（月粒度先對到）
  - `AMZ开门红供需 202600901`!`供需`：SI 只有「9月／10月」兩欄月總，冇週欄 → 唔係源
- Top mismatch：51060JRG 2025-01-20 Old=1560 Trk=0｜51060JRG 2026-06-29 2499 vs 1248｜51071VHT 2026-06-15 789 vs 0｜51060KFW 2026-08-10 800 vs 12｜51060KFW 2025-02-10 774 vs 0
- SKU key：兩邊都用內部料號（51060KFW 類），直接對到，唔使 fuzzy
- 明細：`Work Station\SI_vs_Tracker_check_2026-09-08.csv`（405 行：sku／week_start／old_si／archive_weekly／diff）

> **HANDOVER BLOCK — SI source**
> 1. 週度 SI 實績源 = `Tracking0`!`SP# Archive` Shipped 逐日欄 → 週一起始週聚合。**唔係** `SP# AATP-PO-delivery` 嘅 WK 欄（嗰啲係計劃）
> 2. Old WS 嘅 SI 係子怡人手抄／調整，唔係 formula link：2025 三分之一格對唔上 → v2 db 以 Archive 為準，Old WS SI 只做參考，唔准當 ground truth
> 3. §1 表「column AY 確認 sell in」要你再核一次：AY 係月度 Shipped 欄 → 月報可用；週報必須用 `SP# Archive`
> 4. 「幾時返貨」用 `SP# AATP-PO-delivery` WK 欄（計劃）；「入咗幾多貨」用 `SP# Archive`（實績）— 兩個 sheet 兩個角色，唔准放同一欄
> 5. 三個「Old=1560／774／789 vs Trk=0」要問 dengzhichong：Archive 漏記定子怡填錯？未答前呢幾週 db 留空標「待核」
> Outcome：SI 源由「猜」變「有數證」— Audit v2 四個未定 source 剩三個（Runrate／MBB hub INV／SC排产 vs AATP）。

**Claude 回應你嘅 V2 Hard Gate ＋ Audit v2 三個答案（2026-09-08）**

Hard Gate 五個 component 收到，對返 Gate 0 v2：①db（0 visualisation）＝`db.xlsx`｜②Operation checklist＝v1.1 说明页打卡格升級｜③④ script 出 dashboard＝`dashboard.xlsx`｜⑤Obsidian 做 project tracking。同 Decompose v2 三件套一致，冇 drift。「Runrate＝我哋喺 Amazon 設嘅價」→ 佢係你人手入嘅 plan 數，唔係抽出嚟；剩一個問題：係 RRP／貨架價定當週實際售價（有促銷時兩者唔同，OldWS W32 BE3 Pro Runrate 89.99 vs 促銷 69.99）。

Audit 2（join key）：**可以用，加兩欄**。`基础信息汇总` 15 SKU，14 個 BOM/ASIN 喺 Tracking0 對到；portal export 本身有 ASIN 欄。要人手加 YGJN 碼同 B530 碼兩欄（15 行，約 15 分鐘）。

Audit 3（點 snapshot 唔重複）— 一個比喻一個實例：
- 比喻：三種 source 係三種紙。**週快照**＝每週一張新相（portal export、stock report）→ db 直接 append 一行「W36」。**滾動檔**＝一本會被人擦改嘅簿（Tracking0 成個 sheet 每週覆寫）→ 每週影印一份、印上日期先入 db。**計劃檔**＝預算書（供需、BP）→ 存做「版本 as-of 9/1」，永遠唔同實績放同一欄。
- 實例：B636 W36 SI。Tracking0 9/1 影印本話 1248，9/8 影印本改咗做 1300。db 兩行都留（key＝B636＋W36，as_of＝9/1／9/8），dashboard 用最新 as_of。如果只得一欄，9/8 覆寫咗 9/1，你永遠唔知個數改過、亦追唔到邊個改。
- 出閘測試（你 3 行講返）：portal export 係邊種紙？Tracking0 係邊種？供需係邊種？

> **HANDOVER BLOCK — Audit v2 close-out**
> 1. 週度 SI 實績 = `SP# Archive` AN:IC 逐日欄聚合；`SP# AATP-PO-delivery` AY/AZ 係送貨預約（月），唔准當 SI
> 2. Join key 主表 = `基础信息汇总`（Model／BOM／ASIN）＋ Kess 人手加 YGJN、B530 兩欄；未加齊前 script 唔准 join 價格指引同供需
> 3. Runrate = Kess 人手 plan 數；Kess 要裁 RRP 定實際售價，未裁前 dashboard 該行標「口徑未定」
> 4. Hub inventory 未有源：Kess 畀 cell 位或問 dengzhichong；未有前「撐幾耐」只用 Amazon INV 計 DOS，標「不含 hub」
> 5. db 存法鎖定三種紙：週快照 append／滾動檔帶 as_of 副本／計劃檔存版本
> Outcome：Kess 逢週一落檔 → 跑兩個 script → 10 分鐘答到四條問題（而家答到三條：賣咗幾多／幾時返貨／目標去到邊；「撐幾耐」缺 hub INV）。


