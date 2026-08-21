# Amazon MBB SKU Note Layer — 設計規格

Date: 2026-08-21
Status: implemented; structural verification passed; live Obsidian acceptance pending
Owner: Kess Chan
Parent scope: `[[Amazon GTM Management]]`
Operational project: `[[Amazon GTM Operation]]`
Knowledge consumer: `[[Product Baseline]]`

> 本規格新增一個 **SKU 物件層**，補上現有結構缺失的第三條軸。它不改動 `2026-08-20-amazon-mbb-zero-drop-ball-control-tower-design.md` 的任何流程、門檻或紀錄規則；控制塔仍然是唯一的 BAU 執行機制。

## 1. Problem

現有 vault 有兩條軸：

- **流程軸** — `[[Amazon MBB Operations Scenario Matrix]]`：SO 偏差、DOS、交付、月度定價等情境。
- **專案軸** — TaskNotes：`E6888圈量`、`H173首銷`、`德國 B636 流量優化` 等有終點的工作。

沒有 **物件軸**。地區部給出的 SKU 逐條情況（生命週期、盯點、策略意圖）無處可放，只能貼進會議紀錄，六週後失效。後果有三：

1. 同一 SKU 的判斷散落在多份 TaskNote，無法一眼看全。
2. 週期檢查對所有 SKU 一視同仁，斷貨與日落中的 SKU 仍在跑 SO 偏差檢查，浪費時間。
3. `[[Product Baseline]]` 口試所需的產品本體材料沒有固定住所，與營運知識各自為政。

## 2. Outcome

建立 `Products/` 一 SKU 一筆記，使每個 SKU 成為可連結、可查詢的物件，同時服務：

- **防守（營運）** — 生命週期決定適用哪些週期檢查；盯點指向對應的情境矩陣章節。
- **進攻（知識）** — 產品本體章節holding spec/KSP，供 `[[Product Baseline]]` Gates 取用。

成功標準：任一 SKU 筆記可在三十秒內回答「這台機現在是甚麼狀態、要盯甚麼、誰在決策、有哪些未結事項」。

## 3. Design principles

1. **State and judgement only, no KPI.** 沿用控制塔規則：不把 SO／DOS／價格讀數搬進 Obsidian。筆記保存狀態、門檻與判斷，不保存數值。
2. **One manual link direction.** 只有 Task → Product 需要手動維護；Product → Task 由 dataview 自動產生。
3. **Subject, not mention.** 只有以該 SKU 為主體的 TaskNote 才建立連結。
4. **Operations only in Open items.** 學習類任務（帶 `gate:` 欄位的 Gates、SCQA Preps）不進 SKU 筆記。
5. **Profiles over repetition.** 五個生命週期輪廓集中定義一次，十三筆筆記引用，不各自複述。
6. **No second dashboard.** 每日入口仍是 Daily Operations／TaskNotes。本層不建立新的每日儀表板。

## 4. Scope

### 4.1 Included

- 十三筆 SKU 筆記（`Products/`）。
- 一筆生命週期輪廓參考（`Products/SKU Lifecycle Profiles.md`）。
- 一個 Bases 檢視（`TaskNotes/Views/Products.base`）。
- 四筆現有 TaskNote 的 `projects:` 連結補寫。
- 一筆月度複核 recurring TaskNote。
- 三筆現有筆記的接線修改（見 §9）。

### 4.2 Excluded

- Router SKU（本層僅 MBB）。
- 廣告、店面健康、即時 KPI 鏡像。
- 對情境矩陣門檻或零遺漏流程的任何修改。
- 自動化同步、腳本或外部整合。

## 5. Note schema

### 5.1 Frontmatter

```yaml
type: product
model: H173-383
family: FWA CPE          # FWA CPE | MiFi | Router-form MBB
markets: [EU, UK]
lifecycle: ramp          # EU Aggregate 的狀態，必填。封閉詞彙，見 §6
# lifecycle_uk: <值>     # 選填，僅 B320-323 與 E5785-320b 使用，見下文
lifecycle_reviewed: 2026-08-21
priority_tier: core      # core | maintain | drain | watch
watch: [挺價紀律, 竄貨-livewire]
strategy: BTS 泛歐重點；英國 livewire 代理，竄貨即取消
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
```

`lifecycle` 取 EU Aggregate 值，與控制塔的 `SKU × EU Aggregate` 粒度一致。兩個欄位共用 §6 的五個封閉值，不得出現其他字串。

`lifecycle_uk` 只在 UK 狀態與 EU 明確分歧時填寫，實際僅兩筆：`B320-323`（EU live-core／UK ramp）與 `E5785-320b`（EU hold／UK live-core）。其餘兩筆雙市場 SKU 不填此欄，理由寫進 `## 現況`：

- `H153-381` — 來源表 UK 列為空白，屬資料缺口，不臆測值。
- `H173-383` — 英國不走直營，由 livewire 代理，不在本層的營運粒度內；代理與竄貨條件記於 `## 現況` 與 `strategy`。

渠道模式（直營／代理）不是生命週期，不進 `lifecycle` 欄位，避免詞彙被稀釋。

### 5.2 Body sections

| # | Section | 內容 | 更新頻率 |
|---|---------|------|----------|
| 1 | `## 現況` | 地區部原話逐字 + 日期。EU／UK 分歧時分小節 | 月度複核 |
| 2 | `## 控制輪廓` | 引用生命週期輪廓 + 本 SKU 的門檻覆寫 | 狀態變更時 |
| 3 | `## 盯點` | 每個盯點連到對應的情境矩陣章節 | 盯點解決時 |
| 4 | `## Open items` | dataview，自動 | 自動 |
| 5 | `## 產品本體` | spec／KSP／競爭擺位，供 Gates 取用 | 讀書時 |
| 6 | `## 變更日誌` | 帶日期的單行紀錄 | 事件發生時 |

### 5.3 Open items query

```dataview
TABLE WITHOUT ID file.link AS "任務", status AS "狀態", due AS "期限"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

與現有專案筆記完全相同的模式，不引入新機制。

## 6. Lifecycle profiles

定義於 `Products/SKU Lifecycle Profiles.md`，由 `[[Amazon GTM Operation]]` 的控制筆記章節連入。

| Profile | 定義 | 要做 | 不做 |
|---------|------|------|------|
| `prelaunch` | 未上市，準備中 | 准入／物料適配／首批備貨／上架配置 | DOS 週檢、SO 偏差、forecast 增量 |
| `ramp` | 預售或剛上市，價格紀律期 | 挺價紀律、竄貨監控、buybox、首銷追蹤 | 清庫、促銷降價 |
| `live-core` | 正常在售 | 全套週期檢查、劃線價／DT、促銷節奏 | — |
| `drain` | 日落中，清庫至下架 | 清庫速度、價格下探、下架時點 | forecast 增量、廣告投入、新促銷 |
| `hold` | 斷貨或無分貨，策略保留 | 3P buybox、供應恢復時點 | SO 偏差、DOS、forecast |

輪廓決定**跳過**哪些檢查，這是本層對日常工時的直接貢獻。任何覆寫（例如 E5783-230b 的週銷區間）寫在該 SKU 的 `## 控制輪廓`，不改輪廓本身。

## 7. SKU inventory

十三筆筆記。地區部原表十六列中，H153-381、B320-323、E5785-320b 各出現兩次（泛歐 + UK），合併為單筆雙市場筆記；B636-336（黑）作為 `B636-336` 的變體小節。

| # | Note | lifecycle | lifecycle_uk | 盯點 |
|---|------|-----------|--------------|------|
| 1 | `H153-381` | hold | — | 3P 抢 buybox、產能恢復時點 |
| 2 | `E6888-982` | live-core | — | 圈量規則、EU 電池法規斷點（27/2） |
| 3 | `B320-323` | live-core | ramp | UK 上市推遲、BTS 英國重點 |
| 4 | `B636-336` | live-core | — | 廣告分配偏移、德國 YoY、變體（黑）爬坡 |
| 5 | `E5586-336` | live-core | — | 德國 buybox、國家 GTM 拒絕跟價 |
| 6 | `B530-336` | live-core | — | 劃線價維護、DT 獲取、脈衝節奏 |
| 7 | `B535-230` | drain | — | AMZ 側庫存清完即截止 |
| 8 | `E5783-230b` | drain | — | 週銷 100-150pcs 至年底、突破價格體系以指引為準 |
| 9 | `E5785-320b` | hold | live-core | 泛歐維持高價導流至 E5783、UK 後台配置問題 |
| 10 | `H155-383` | drain | — | 清庫後下架時點 |
| 11 | `H165-383` | live-core | — | 輿情／差評與退貨分析、PD 後 buybox |
| 12 | `H173-383` | ramp | — | 8.3 挺價、livewire 竄貨監控（英國非直營） |
| 13 | `E6898` | prelaunch | — | 危險品准入、地區部取消上市決策、MOQ 小訂單 |

`H153-381` 的 UK 狀態在來源表中為空白：`lifecycle_uk` 留空，並在 `## 現況` 明確標示為資料缺口，下次與地區部對齊時補上。

## 8. Task linking

### 8.1 Rule

在 TaskNote 的 `projects:` 陣列加入 SKU 筆記連結，且僅當該 SKU 是任務主體。帶 `gate:` 欄位的學習任務永不連結。

### 8.2 Wire map

| Product note | TaskNotes to link |
|--------------|-------------------|
| `H173-383` | `H173首銷`、`H173 Sales Monitoring` |
| `E6898` | `Super MiFi (E6898) 上市`、`E6898 樣機運抵英國` |
| `E6888-982` | `E6888圈量` |
| `B636-336` | `德國 B636 流量優化` |

其餘九筆 SKU 目前無主體任務。此缺口本身是輸出：`E5586-336`（德國佔銷量 50%，國家 GTM 拒絕跟價）與 `H165-383`（輿情不理想，需差評／退貨分析）皆有在途問題而無任何追蹤。

### 8.3 Excluded from linking

`Gate G1`–`Gate G5`、`Map On-going Project in Task Note`、`SCQA Prep 21-8-2026`、`8-7-2026 SCQA Prep`、`SCQA O7 - Portfolio Battlecard and Comparison Tool`、`Develop Product Knowledge Baseline Journey`。這些是 portfolio 級或學習類任務，連結後會令每筆 SKU 的 Open items 出現同一列而失去意義。

## 9. Integration with existing notes

| File | Change |
|------|--------|
| `Projects/Amazon GTM Management.md` | 新增 `## SKU 狀態` 章節，連入 `Products.base` |
| `Projects/Amazon GTM Operation.md` | 控制筆記章節加入 `[[SKU Lifecycle Profiles]]` |
| `Tasks/H173首銷.md` 等四筆 | `projects:` 加入對應 SKU 連結 |
| `Tasks/Amazon MBB Product Categorising.md` | 指向本次建置；完成後關閉 |
| `Tasks/Amazon Product Level Category Identification.md` | 指向本次建置；完成後關閉 |

後兩筆為空白模板、high priority、已逾期（分別為 2026-08-17 due 與 2026-08-07 scheduled），其標題所述工作即本規格範圍。

## 10. Products.base view

`TaskNotes/Views/Products.base`，沿用 `Operation.base` 的 formula 寫法。

- Filter: `file.hasTag("product")`
- Group by: `lifecycle`
- Columns: `model`、`markets`、`priority_tier`、`watch`、`lifecycle_reviewed`、`formula.isStale`
- Formula `isStale`: `lifecycle_reviewed` 早於 `today() - "45 days"`

## 11. Refresh cadence

新增 recurring TaskNote「SKU 狀態複核」，掛在 `[[Amazon GTM Operation]]` 之下，月度，對齊月度定價視窗（該時點地區部策略最常浮現）。

複核動作：走一次 `Products.base`，只更新有變化的 SKU 的 `lifecycle`、`watch`、`現況` 與 `變更日誌`，並將 `lifecycle_reviewed` 推進至當日。SKU 狀態每年通常僅變動兩至三次，故複核成本低。

## 12. Risks

| Risk | Mitigation |
|------|------------|
| 十三筆筆記各自失效 | `isStale` formula + 月度複核任務，逾 45 天未複核即在檢視中標示 |
| 盯點與情境矩陣重複描述 | 盯點僅連結矩陣章節，不複述門檻 |
| 產品本體章節被當成 Gate 追蹤器 | Gates 保留在 `Projects/Product Baseline.md`；知識單向流出，任務不流入 |
| 演變為第二個每日儀表板 | §3 原則 6；`Products.base` 為月度視圖，不進 Daily Operations |

## 13. Out of scope for v1

- Router SKU 納入。
- 依生命週期自動生成週期檢查任務。
- 競品 SKU 對照筆記。
- 與 `Product_Master.xlsx` 的任何同步。
