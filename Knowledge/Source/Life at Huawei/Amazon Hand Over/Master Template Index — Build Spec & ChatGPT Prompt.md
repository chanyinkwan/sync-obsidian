---
type: reference
status: active
date: 2026-08-06
account_or_project: "[[Amazon take over]]"
source:
  - "[[Amazon MBB GTM Annual Calendar]]"
  - "[[Amazon Operations Glossary]]"
  - "Handover book.xlsx"
tags:
  - reference
  - amazon
  - handover
---
# Master Template Index — 建構規格與 ChatGPT Prompt

> **目的:**產出一份 master Excel,把 MBB GTM 全流程會用到的**每一份模板 / 文件 / 系統**各佔一個分頁,作為 **Ziyi 離職前最後一次對齊會的議程**。
> **設計原則:空格就是議程。**已知的先填滿,不知道的用固定標記留白,再由 INDEX 分頁自動彙整成「要問 Ziyi 的清單」——這樣會議時間只花在真正缺的東西上,而不是重講你已經懂的部分。

---

## ⚠ 先讀:資料外流風險

`Handover book.xlsx`、`2026年 亚马逊MBB价格及销毛 v3.xlsx`、[[Amazon MBB GTM Annual Calendar]] 這些檔案含有**對客價格、銷毛率、NSIP、員工工號、客戶組織與離職資訊**。**上傳到 ChatGPT 等於把這些送出公司環境**,即使之後刪除也可能已被快取。

三個選項,你自己決定:
1. **本機建**——不上傳任何東西,由我直接產出 .xlsx。內容一致,零外流。
2. **去敏後上傳**——移除價格數字、銷毛率、工號、人名(用代號),只保留結構與流程描述。下面的 prompt 已設計成**不需要真實數字也能運作**。
3. **知情後照常上傳**——你評估風險可接受。

**下面的 prompt 依選項 2 撰寫**(不要求你貼真實價格),但仍會帶入流程、角色與節奏。若選 1,直接跟我說即可。

---

## 1. Scope(範圍界定)

### In scope
- 一個 `.xlsx` 檔,包含 **2 個管理分頁 + 約 34 個材料分頁**。
- 每個材料分頁最上方是**固定格式的識別區塊**(你指定的五個欄位 + 三個建議欄位)。
- 識別區塊下方保留**該材料自身的結構說明**(欄位、分頁、關鍵欄位),不是複製資料本身。
- `00_INDEX`:全部材料一覽 + 分層 + 狀態。
- `01_ASK_ZIYI`:自動彙整所有留白,即會議議程。

### Out of scope(明確不做)
- **不複製任何實際資料**(價格、銷量、客戶名單)。這是「材料的目錄與說明書」,不是資料倉庫。
- **不建公式模型**、不做 dashboard、不做圖表。
- **不由 ChatGPT 生成任何連結** —— 內部 SharePoint / W3 / 網盤連結它不可能知道,生成出來一定是假的。

### 成功標準
- [ ] 打開任一分頁,五個問題(是什麼 / 為什麼 / 多久一次 / 誰給 / 連結)三秒內看得到答案
- [ ] `01_ASK_ZIYI` 能直接當會議議程用,不用另外整理
- [ ] Ziyi 看完能說「對,就是這樣」或「不對,這裡錯了」——**兩種反應都算成功**,因為都關閉了一個缺口
- [ ] 沒有任何一格是 ChatGPT 編的

---

## 2. 分頁識別區塊規格

每個材料分頁 **A1:B12** 固定為:

| 列 | A 欄(標籤) | B 欄(內容) |
|---|---|---|
| 1 | **Material / 材料名稱** | 檔名或系統名(原文,不翻譯) |
| 2 | **Tier / 層級** | `T1 必備` / `T2 節奏` / `T3 事件驅動` |
| 3 | **1. What is this / 這是什麼** | 一到兩句 |
| 4 | **2. Why we use it / 為什麼要用** | **要能解釋清楚頻率與關係人**,不是重述用途 |
| 5 | **3. Frequency / 使用頻率** | 每日 / 每週 / 每兩週 / 每月 / 每季 / 每年 / 事件驅動 |
| 6 | **4. Owner — who shares it / 誰提供** | 姓名 + 角色;若是我自己產出就寫「我(產出者)」 |
| 7 | **5. Link / 線上連結** | `【TBC-LINK】` 或實際 URL |
| 8 | **Counterpart / 使用時要找誰談** | 用這份材料時的對話對象(可與 Owner 不同) |
| 9 | **Upstream → Downstream** | 輸入從哪來 → 輸出去哪裡(串起流程鏈) |
| 10 | **If missing or stale / 缺了會怎樣** | 具體後果,不是「會有影響」 |
| 11 | **Status / 交接狀態** | `已取得` / `待取得` / `待確認` / `未交接` |
| 12 | **Ask Ziyi / 要問的問題** | 空白或具體問題 |

> 第 8–10 列是我的建議增補,理由:你說這份材料的目的是「展示我理解怎麼用」以及「釐清我會跟誰討論」。第 8 列直接服務第二個目的(Owner 與實際對談對象常常不同人),第 9、10 列服務第一個目的——能講出「缺了會怎樣」才是真的懂。**不需要就從 prompt 裡刪掉這三列。**

第 14 列起是自由區,放該材料自身的結構(有哪些分頁、關鍵欄位、怎麼讀)。

---

## 3. 材料清單(共 34 項,依層級)

**T1 必備(沒有它就跑不完月度循環)**
1. Handover book.xlsx(主索引,4 分頁)
2. 泛欧亚马逊月度价格指引.xlsx(月度定價產出)
3. 2026年 亚马逊MBB价格及销毛 v3.xlsx(三段價 + 銷毛 + 按月成本)
4. by SKU progress(型號現況,Handover book 分頁)
5. AMZ泛欧 路由&MBB上市进展.xlsx(CPFR / 3+3 預測)
6. MBB SI volume&Rev Tracker.xlsx(BP + SI 收入對比)
7. AMZ MBB量价模拟 V4.xlsx(量價模擬 / BP 推導)
8. ⚠ 庫存線上表格(Ziyi 稱「work station」,**正式名稱未知**)
9. FineBI(SO 數據系統)
10. iPrice(定價 / 商務授權系統)
11. Business Org Map & PoC(Handover book 分頁)
12. 泛欧亚马逊MBB产品基础信息汇总.xlsx(EAN / ASIN / BOM 主檔)

**T2 節奏(月度 / 季度)**
13. Product Launch Checklist.xlsx
14. MBB category roadmap / 產品包(輸入,碧斐提供)
15. AMZ MBB category roadmap(輸出,我產出)
16. Competitor List
17. Monthly Market Monitor
18. SellerSprite / 賣家精靈(工具)
19. 月度 BSR 銷量檔(Market Size 資料夾)
20. 靈熙 Lingxing 流量報表 / Traffic Report
21. 巡店問題表(我自己維護的每週表)
22. ⚠ 各國店長線上問題追蹤連結
23. Promotion Tracker
24. AMZ delivery plan
25. Finance data system(收入 / 利潤)
26. Ongoing Projects(Handover book 分頁)

**T3 事件驅動 / 參考**
27. 荷蘭 hub 導入審批 & 流通加工方案(Delivery 資料夾)
28. 欧洲物流成本基础模型-权限版26.xlsx
29. Return Rate Report
30. VOC / Review
31. AMZ MBB竞品摆位.pptx
32. Historic Report Materials(復盤範本)
33. 大促復盤(PD / BTS 復盤郵件與簡報)
34. Andon Cord / 合規回覆材料

---

## 4. ChatGPT Prompt(整段複製)

> **使用方式:**開一個新對話,**開啟 Data Analysis / Code Interpreter**(要能執行 Python 產檔),把下面整段貼進去。若選擇上傳附件,把 `Amazon MBB GTM Annual Calendar.md` 一併附上(**先確認你接受第 0 節的外流風險**);不附也能跑,prompt 本身已自帶足夠脈絡。

```
You are helping me build a master Excel workbook. Use Python (openpyxl) and give me a downloadable .xlsx file. Do not output the content as markdown tables — I need the actual file.

=== WHO I AM AND WHY THIS EXISTS ===

I am the Amazon Mobile Broadband (MBB) category GTM owner at Huawei CBG Europe, covering five Western European countries (Germany, France, Italy, Spain, UK; plus a very small Netherlands volume). I took this role over on 2026-08-03.

The handover is compressed and unusual. The original plan was that I would take the router category and a colleague would take MBB. That colleague resigned, so I took MBB instead — which means the MBB handover material was written for a different person and is thinner than it should be. My predecessor leaves this month. My counterpart on the Amazon channel side is also leaving.

So this workbook is not documentation. It is the AGENDA for my final alignment meeting with my predecessor before she goes. Its value is in making visible exactly what I still don't have. Design every choice around that.

My role, precisely: I am accountable for the category's sales results but I personally execute nothing. The entire job is coordination and persuasion across departments. So for every material, the question "who do I talk to when I use this" matters as much as "what is it".

=== WHAT TO BUILD ===

One .xlsx workbook. Two management sheets plus one sheet per material (34 materials, listed at the end).

--- Every material sheet ---

Cells A1:B12 are a FIXED identification block. Column A holds the label, column B holds the content. Use exactly these labels, in this order:

A1  Material / 材料名稱
A2  Tier / 層級
A3  1. What is this / 這是什麼
A4  2. Why we use it / 為什麼要用
A5  3. Frequency / 使用頻率
A6  4. Owner — who shares it / 誰提供
A7  5. Link / 線上連結
A8  Counterpart / 使用時要找誰談
A9  Upstream → Downstream
A10 If missing or stale / 缺了會怎樣
A11 Status / 交接狀態
A12 Ask Ziyi / 要問的問題

Row 14 onward is a free area titled "Structure & how to read it" for notes on that material's own tabs, key columns, and how to read it. Leave it mostly empty for me to fill in — put a few prompting sub-headers, not invented content.

Formatting: column A width 34, column B width 95, B column wrap text on, rows 3/4/9/10 taller (about 60px), A1:A12 bold with a light grey fill, a border under row 12 to separate the block from the free area. Freeze panes at A14. No merged cells anywhere — I need to be able to filter and copy.

--- Content rules (IMPORTANT) ---

1. NEVER invent a URL. Every Link cell must contain exactly: 【TBC-LINK】
   These are internal Huawei systems and network drives. You cannot know them and a plausible-looking fake URL is worse than a blank.
2. NEVER invent a person's name, employee ID, system name, or file name. If I have not given it to you below, write exactly: 【TBC】
3. Where I HAVE given you the what/why/frequency/owner below, use it — do not paraphrase it into something vaguer. My wording carries specifics that matter.
4. The "Why" field must explain WHY THE FREQUENCY IS WHAT IT IS and WHY THOSE PEOPLE ARE INVOLVED. "To track sales performance" is a failure. "Amazon buys outright and PO-to-warehouse is only two weeks, so we must produce and stock in the Netherlands hub before the PO exists — which makes this forecast a production instruction, not a report" is correct. Where I have given you the reasoning, keep it.
5. "If missing or stale" must name a concrete consequence, not a vague risk.
6. Language: labels bilingual as written above. Content in Traditional Chinese, EXCEPT proper nouns — file names, system names, and industry terms (deal tag, Buy Box, run rate, CPFR, ASIN, EAN, SKU, PO, sell-in, sell-out, hub, ATP, MOQ, NSIP) stay in their original form. Do not translate file names.

--- Sheet 00_INDEX ---

A table, one row per material, with columns:
No. | Tier | Material | Frequency | Owner | Counterpart | Status | Link | Ask Ziyi?

- Hyperlink the Material cell to its own sheet.
- Status uses data validation with a dropdown: 已取得 / 待取得 / 待確認 / 未交接
- Conditional formatting on Status: 已取得 green, 待取得 amber, 待確認 amber, 未交接 red.
- Add an autofilter across the header row and freeze the header.

--- Sheet 01_ASK_ZIYI ---

This is the meeting agenda. Columns:
Priority | Material | What I need | Type | Asked? | Answer | Date

- "Type" dropdown: 連結/權限 / 人與工號 / 流程節奏 / 檔案本身 / 判斷邏輯
- Pre-populate one row for every material where Link, Owner, or Counterpart is 【TBC-LINK】/【TBC】, and one row for each open question I list below.
- Sort so Tier 1 materials come first.
- Put a note in the top rows: this sheet is the agenda; anything unanswered when she leaves becomes a permanent gap.

=== CONTEXT YOU NEED SO THE "WHY" FIELDS ARE RIGHT ===

These are the mechanics of the business. Use them to write accurate Why fields.

PRICING. Each product has three prices: run rate (平銷價), promo price (小促價), and 大促價 which is only used at Black Friday and Prime Day. There is also an inflated launch price whose only job is to establish a strike-through reference (划線價). Amazon awards a "deal tag" (a red discount badge that heavily affects conversion) only if the price is 5% below the lowest price of the past 30 days — 15% in Germany and the UK. This single rule generates the whole rhythm: run rate must hold for 30 clear days, and an offer loses its deal tag after two weeks. That is why pricing is a MONTHLY cycle, and why the split between run rate and offer is roughly 2/3 to 1/3.

Critically, our price is only a GUIDANCE — we have no decision right. After I align it with the channel, Amazon's GTM pushes it to each country, and each country has its own revenue KPI, so they will push to go lower ("even if I can't get the deal tag I need to sell now"). Those requests route back through a single approver. Without that gatekeeping, core models I am saving for January would get discounted away in December by a country that is short on revenue this month.

SUPPLY. Amazon buys outright. From customer PO to sell-in landing in their warehouse is only two weeks, far shorter than production, so we must produce and stock into a Netherlands hub in advance. Air freight from HQ to hub is about 10 days; sea freight about 8 weeks; hub to Amazon warehouse normally goes on Tuesdays. This makes weekly forecasting a production instruction, and it creates a permanent tension with the delivery team: I need stock to avoid stockouts, they watch inventory levels and warehousing cost.

SEASONALITY. Promo nodes across the year: January general sales, February Valentine's, March spring sales, July Prime Day, September back-to-school, October Prime Day 2, November Black Friday, December Christmas. But actual dates move — in 2026 the customer pulled Prime Day forward to June and back-to-school landed in late August. MBB specifically peaks every January for reasons nobody has explained; it is simply what the historical data shows. Because Black Friday and Christmas are less than 30 days apart, we usually go all-in on Black Friday and deliberately hold price through Christmas so that January can qualify for a deal tag.

ANNUAL PLANNING. Every November-December the Amazon team asks what new products are coming next year and which existing ones are going end-of-life. I am the ONLY person who tells them this — there is no other channel. Getting it wrong means their entire business plan is built on the wrong product list. Separately I must produce my own BP: revenue and volume by SKU by month.

NEW PRODUCT LAUNCH. Starts about three months ahead. I act as project manager: not one step is mine to execute, but every step is mine to chase, across GTM/delivery, operations (listing, page, localisation), and marketing (ad budget, banners, slots).

MARKET ANALYSIS. Monthly, I export the top 100 best-sellers per country, match each to a tier using an accumulated model-to-tier mapping built over the years, and produce a competitor list. That list goes to each country's traffic manager — because I don't run ads, they do, and they don't know new products or which competitors to target. I only submit it when it has changed; an unchanged list is just noise to them.

=== THE 34 MATERIALS ===

For each, I give: name | tier | frequency | owner | and a note. Where I write 【TBC】 leave it as 【TBC】 and raise it on 01_ASK_ZIYI.

TIER 1 — cannot run the monthly cycle without it
1. Handover book.xlsx | T1 | 持續參照 | 前任 | Master index; four tabs: Task & Template, by SKU progress, Business Org Map & PoC, Ongoing Projects. Everything else supports this file.
2. 泛欧亚马逊月度价格指引.xlsx | T1 | 每月 | 我(產出) | The monthly output: per-SKU, per-country, first-half and second-half prices for next month.
3. 2026年 亚马逊MBB价格及销毛 v3.xlsx | T1 | 每月參照 | 【TBC】 | Three-tier prices plus gross margin per SKU, plus a by-month cost-increase tab. April is the worst month for cost increases.
4. by SKU progress | T1 | 每月參照 | 前任 | Current state of every SKU and why its live price deviates from the price table. Read this BEFORE the price table.
5. AMZ泛欧 路由&MBB上市进展.xlsx | T1 | 每週 | 【TBC】 | CPFR: weekly promo and sell-out forecast, actual sell-out, 3+3 forecast, days of stock.
6. MBB SI volume&Rev Tracker.xlsx | T1 | 每月 | 【TBC】 | Annual BP by SKU by month, and sell-in revenue comparison.
7. AMZ MBB量价模拟 V4.xlsx | T1 | 每年 + 事件驅動 | 前任 | Volume-price simulation behind the BP: positioning, competitive strategy, and price-to-volume relationships per SKU.
8. 【TBC】庫存線上表格 | T1 | 每週 | 【TBC】 | Live inventory. My predecessor referred to it only as "work station" and said to reach it from the handover Excel. Its real name is unknown. ASK.
9. FineBI | T1 | 每週 | 【TBC】 | Sell-out data system.
10. iPrice | T1 | 事件驅動 | 【TBC】 | Pricing and commercial authorisation system. Authorisations currently need restructuring — finance has given inconsistent guidance on whether they read PO price, street-price-derived NSIP, or lifecycle price.
11. Business Org Map & PoC | T1 | 持續參照 | 前任 | Names and employee IDs across regional GTM, rep office GTM, HQ, R&D, marketing, service. Poland rep office GTM is listed as TBD.
12. 泛欧亚马逊MBB产品基础信息汇总.xlsx | T1 | 事件驅動 | 【TBC】 | Master product data: model, BOM code, EAN, pan-European ASIN, countries covered, launch quarter.

TIER 2 — monthly and quarterly rhythm
13. Product Launch Checklist.xlsx | T2 | 事件驅動 | 前任 | Three parallel workstreams (GTM & delivery, operations, marketing) plus a worked example of a dated back-schedule from first-sale date. Shared template used by all products.
14. MBB category roadmap / 產品包 | T2 | 持續參照 | 歐洲 MBB 產品 GTM | The FULL European roadmap — carrier and open market both pick products from it. Also holds every product's specs, selling points, certification reports, and competitor comparisons for key models. Actively maintained by someone else.
15. AMZ MBB category roadmap | T2 | 每年 + 不定期刷新 | 我(產出) | The Amazon-channel subset I commit to the customer.
16. Competitor List | T2 | 每月(有變化才交) | 我(產出) | Goes to each country's traffic manager.
17. Monthly Market Monitor | T2 | 每月 | 我(產出) | Market size, competitive landscape, consumer trend; flags threats such as competitor price moves or share loss.
18. SellerSprite 賣家精靈 | T2 | 每月 | 【TBC】 | Tool for exporting best-seller rank data. Predecessor described the export and matching work as very tedious and promised to teach it separately. ASK whether that training happened.
19. 月度 BSR 銷量檔 | T2 | 每月 | 我(產出) | Monthly best-seller-rank exports, accumulated since 2025-01.
20. 靈熙 Lingxing 流量報表 | T2 | 每月 | 【TBC】 | Traffic and advertising performance: impressions, CTR, CVR, ROAS, ACOS.
21. 巡店問題表 | T2 | 每週 | 我(產出) | My own log of issues found during store visits.
22. 【TBC】各國店長線上問題追蹤連結 | T2 | 每日/每週 | 各國店長 | Country store managers log issues here daily and delete them when resolved. Check here before chasing — Amazon-side resolution is reportedly slow. Link unknown. ASK.
23. Promotion Tracker | T2 | 每週 | 【TBC】 | 
24. AMZ delivery plan | T2 | 每週 | 交付團隊 | Delivery decisions sit with one person and execution with another.
25. Finance data system | T2 | 每月(3 號後,1 月延至 10 號) | Amazon Finance | Revenue and margin. The timing is dictated by the finance calendar, not by me.
26. Ongoing Projects | T2 | 每週檢視 | 前任 | Eight live projects with background, situation, next step and priority.

TIER 3 — event-driven and reference
27. 荷蘭 hub 導入審批 & 流通加工方案 | T3 | 事件驅動 | 交付團隊 | Requires regional email approval plus HQ committee approval.
28. 欧洲物流成本基础模型-权限版26.xlsx | T3 | 事件驅動 | 【TBC】 | Sea and air freight unit cost per model per country.
29. Return Rate Report | T3 | 事件驅動 | 【TBC】 | Amazon delists on high RETURN RATE, not on individual returns. Operations must reply with an official letter explaining the cause is not product quality.
30. VOC / Review | T3 | 事件驅動 | 【TBC】 | 
31. AMZ MBB竞品摆位.pptx | T3 | 事件驅動 | 前任 | Competitive positioning deck.
32. Historic Report Materials | T3 | 每季/每半年/每年 | 前任 | Review deck templates going back to 2024. Leadership asks the category GTM directly — I am the interface.
33. 大促復盤 | T3 | 每次大促後 | 我(產出) | Post-mortem after each major promotion.
34. Andon Cord / 合規回覆材料 | T3 | 事件驅動 | 運營團隊 | Supporting material for compliance and delisting issues.

=== OPEN QUESTIONS TO SEED INTO 01_ASK_ZIYI ===

Add these as rows even though they are not tied to a single material:
- Monthly pricing meeting: the SOP says "around the 10th" but September pricing was actually drafted on the 4th and aligned on the 5th. Which is real?
- Store visits: daily or weekly? The SOP says daily; my colleague said weekly per product per country.
- BP submission deadline and template location for next year.
- Who tells me each year's actual promotion dates, and when?
- New product launch checklist was never walked through — it was written for the colleague who resigned. Needs a full session.
- The BP / sell-in section was deferred in the handover meeting and never covered.
- No escalation path was defined. Predecessor said there is no less-busy person to ask.
- Who is replacing my Amazon channel counterpart, and can I get a handover from him before he leaves?
- Names and employee IDs for each country's traffic manager and store manager.
- Whether stock can be produced and held at the hub WITHOUT a customer PO — this blocks a volume lock-in that must complete by November.
- Commercial authorisation: which price basis does finance actually use?
- The minimum lifecycle volume commitment required to add a new colour.

=== FINALLY ===

After you generate the file, give me a short list of every cell where you wrote 【TBC】 or 【TBC-LINK】, grouped by material, so I can see the size of the gap at a glance. Do not pad the workbook to look complete — an honest blank is the point.
```

---

## 5. 拿到檔案之後

1. **先自己填一輪** —— 凡是你已經知道答案的,在會前填掉。Ziyi 的時間只該花在你填不出來的格子上。
2. **按 `01_ASK_ZIYI` 的順序問** —— T1 的連結與權限先問完,那些是你下個月就要用的。
3. **當場填答案欄**,不要事後憑記憶補。
4. **會後把仍空著的格子標紅**,那就是永久缺口清單,轉給 [[Ding Cheng 00611102 (程哥or 丁程)|程哥]] 或自己排期補。
5. 把最終檔存進 `C:\Users\k84450674\Desktop\Amazon Hand over\`,並在 [[Amazon MBB GTM Annual Calendar]] 加連結。

## 6. ChatGPT 大概會出錯的地方

- **編連結** —— prompt 已明令,但仍要逐格檢查 Link 欄是不是全都是 `【TBC-LINK】`。
- **把 Why 寫成用途** —— 「用來追蹤銷售表現」這種就是失敗,要退回重寫。
- **簡繁混用** —— 內容要求繁體,但它常吐簡體;檔名與系統名則必須保持原文。
- **合併儲存格** —— 會破壞篩選,prompt 已禁止,收到後確認一次。
- **分頁名過長** —— Excel 上限 31 字元,中文檔名容易超,可能被截斷或報錯。若失敗,叫它分頁用編號(`T1_01` … `T3_34`),完整名稱放 B1。
