---
type: reference
status: active
date: 2026-08-20
account_or_project: "[[Amazon GTM Operation]]"
tags:
  - reference
  - amazon
  - mbb
  - operations
---
# Amazon MBB 營運情境矩陣

> 用途：我在哪裡 → 是否安全 → 去哪裡查看 → 要做甚麼 → 何時可以關閉。

本矩陣是靜態決策指引；線上來源仍是唯一真源，正常 KPI 數據不得複製到 Obsidian。營運粒度固定為 `SKU × EU Aggregate` 與 `SKU × UK`；只有月度價格工作流在來源內檢查 DE／FR／IT／ES，並僅在該 SKU 的 EU 紀錄中註明國家異常。

## 健康狀態模型

- 業務綠燈：KPI 在參考範圍內，沒有需要處理的風險；不建立行動或紀錄。
- 業務黃燈：風險正在形成，但可在下一次排定檢查前處理。
- 業務紅燈：已影響或即將影響銷售、庫存、交付、價格或毛利；同一工作日處理。
- 管控紅燈：尚未通知正確相關人員，或尚未確認決策負責人。
- 管控黃燈：負責人已知情，但下一步或期限仍缺失。
- 管控綠燈：決策負責人、下一步及期限全部確認。

業務健康狀態與管控健康狀態必須獨立判斷。訊息已發出或對方已讀不等於交接完成；即使管控健康狀態為綠燈，業務健康狀態仍可維持紅燈。決定已作出但尚未執行或尚未驗證時，事項仍然開啟。

實際情境與已確認入庫優先於固定參考門檻。若相關人員覆寫門檻，必須保存新值、理由、日期及適用 SKU／情境。

## 零遺漏流程

1. 開啟情境指定的來源 ID。
2. 套用 EU Aggregate 或 UK 篩選條件。
3. 把線上數據與參考門檻比較。
4. 綠燈：完成週期任務項目，不建立其他紀錄。
5. 黃燈／紅燈：截圖並加入月度營運紀錄項目。
6. 寫明影響及建議，拉入正確相關人員。
7. 在 [[Amazon GTM Operation]] 下建立行動／跟進 TaskNote。
8. 確認決策負責人、下一步及期限。
9. 驗證結果後才關閉。

## 9.1 SO 與預測偏差

### 我在哪裡

實際 SO 明顯高於或低於預測。優先以滾動四週檢視判斷，避免單週 Amazon 波動立即改變判斷。

### 去哪裡查看

[[Amazon MBB Source Index#S01 — FineBI]] 的實際 SO，以及 [[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]] 的預測；按 `SKU × EU Aggregate` 與 `SKU × UK` 分別檢查。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | 滾動四週差異在 ±10% 內 `Experience` |
| 黃燈 | 偏離 10–20%，但未造成庫存風險 `Experience` |
| 紅燈 | 偏離 >20% `Experience`，或較小偏離已令庫存無法覆蓋下一次已確認入庫 `Derived` |

### 要做甚麼

1. 確認是否由促銷、價格或一次性波動造成。
2. 查看 DOS 及已確認入庫。
3. 黃燈／紅燈保存截圖及建立月度營運紀錄項目。
4. 通知相關人員，建議修正預測／數量。
5. 建立跟進 TaskNote，寫明決策負責人、下一步及期限。

### 何時可以關閉

相關人員已確認下一版預測／數量的處理方式，並在下一週重新驗證結果。

## 9.2 預測更新狀態

### 我在哪裡

上週 SO 未補入，或滾動 3+3／六個月預測未向後刷新。

### 去哪裡查看

[[Amazon MBB Source Index#S01 — FineBI]] 與 [[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查上週 SO 及未來六個月預測。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | 上週 SO 已更新，未來六個月預測完整 `Confirmed` |
| 黃燈 | 延遲一個檢查週期，但未影響供應決策 `Experience` |
| 紅燈 | 預測缺失／過期，已阻礙生產、PO 或交付判斷 |

### 要做甚麼

確認缺失範圍 → 找來源負責人 → 說明受影響 SKU 與決策 → 建立有期限的 TaskNote，並確認決策負責人、下一步及期限。

### 何時可以關閉

預測已更新，並可用於本週判斷。

## 9.3 低 DOS／缺貨風險

### 我在哪裡

庫存覆蓋緩衝 = 當前 DOS − 距離下一個已確認入庫的週數。以最新 SO 銷售速度及已確認入庫為準。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]、[[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]] 與 [[Amazon MBB Source Index#S05 — Inventory online table]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | 庫存覆蓋緩衝 ≥2 週 `Derived` |
| 黃燈 | 庫存覆蓋緩衝介於 0–2 週 `Derived` |
| 紅燈 | 庫存覆蓋緩衝 <0；預計入庫前已斷貨 `Derived` |

### 要做甚麼

1. 確認 Amazon 可售庫存、NL 樞紐及入庫。
2. 排除暫定出貨被誤當已確認。
3. 檢查近期促銷拉升。
4. 紅燈同日拉入渠道／交付相關人員。
5. 提供加急、預測調整、暫停促銷或數量調整建議，並建立含決策負責人、下一步及期限的跟進 TaskNote。

### 何時可以關閉

入庫、調整方案及下一次驗證日期全部確認，且重新計算後風險解除。

## 9.4 高 DOS／滯銷風險

### 我在哪裡

DOS 過高，或在沒有需求／促銷計劃下持續上升。13／26 週對應滾動 3+3 視角，只是初始經驗值。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]、[[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]]、[[Amazon MBB Source Index#S05 — Inventory online table]] 與 [[Amazon MBB Source Index#S09 — Promotion Tracker]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | DOS ≤13 週 `Experience` |
| 黃燈 | DOS >13 且 ≤26 週 `Experience` |
| 紅燈 | DOS >26 週 `Experience`，或未來四週持續上升且沒有需求／促銷計劃 `Experience` |

### 要做甚麼

確認庫存所在位置 → 排除 PO／SI 時點 → 查看促銷與價格計劃 → 建議降低預測／後續供應或調整價格節奏 → 拉入渠道、交付及定價相關人員，並建立含決策負責人、下一步及期限的 TaskNote。

### 何時可以關閉

相關人員已確認處理方向，且 DOS 在後續檢查不再惡化。

## 9.5 PO 預計日期／數量偏差

### 我在哪裡

PO 的預計日期未確認或數量與預期不符。Amazon PO 到銷入約兩週是已知運作規則，但 PO 不是固定季度節奏。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]] 與 [[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查預計 PO 日期、數量與 DOS 影響。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | PO 在預期日期確認，數量差異 ≤10% `Experience` |
| 黃燈 | PO 預期日期在三個工作日內但未確認，或差異 10–20% `Experience` |
| 紅燈 | 預期日期已過，或差異 >20% 並影響 DOS／交付 `Experience` |

### 要做甚麼

確認預計 PO 日期及數量 → 計算 DOS 影響 → 拉入 Amazon 渠道 PO 窗口 → 說明最遲日期及缺口 → 提供數量調整建議，並確認決策負責人、下一步及期限。

### 何時可以關閉

PO 或替代方案已確認，並已反映在交付／DOS 判斷。

## 9.6 交付／入庫 ETA 延誤

### 我在哪裡

交付緩衝 = 所需可售日期 − 當前已確認 ETA。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]] 與 [[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]]；由 S03 檢查 ETA，並以 S02 判斷 `SKU × EU Aggregate` 與 `SKU × UK` 的 DOS 影響。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | ETA 比所需日期早 ≥14 日 `Derived` |
| 黃燈 | ETA 在所需日期前 0–14 日 `Derived` |
| 紅燈 | ETA 晚於所需日期，或沒有已確認 ETA `Derived` |

### 要做甚麼

定位生產／出貨／清關／NL 樞紐／Amazon 倉庫里程碑 → 確認預測已反映延誤 → 找 Tony 取得執行排期 → 必要時拉 Eric 確認方向 → 建議加急、重新分配或促銷調整，並確認決策負責人、下一步及期限。

### 何時可以關閉

新 ETA、負責人及處理方式已確認，並完成結果驗證。

## 9.7 SI 與計劃偏差

### 我在哪裡

實際 SI 與計劃出現顯著差異，或令 SO／庫存判斷失真。

### 去哪裡查看

[[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]] 與 [[Amazon MBB Source Index#S04 — MBB SI volume&Rev Tracker.xlsx]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查實際 SI、計劃與差異。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | 實際 SI 與計劃差異 ≤10% `Experience` |
| 黃燈 | 差異 10–20% `Experience` |
| 紅燈 | 差異 >20% `Experience`，或令 SO／庫存判斷失真 |

### 要做甚麼

排除時點差異 → 確認 PO／收貨 → 更新受影響的 DOS 判斷 → 通知交付／財務相關人員 → 追蹤修正，並確認決策負責人、下一步及期限。

### 何時可以關閉

實際 SI 與計劃差異已被解釋或修正，且後續決策使用正確基數。

## 9.8 月度價格指引／審批漂移

### 我在哪裡

價格指引、最終核准或商務授權不一致。營運紀錄仍維持 `SKU × EU Aggregate`，但在來源內按 DE／FR／IT／ES 檢查各國價格；只有國家價格異常時，才在該 SKU 的 EU 紀錄項目註明國家。

### 去哪裡查看

[[Amazon MBB Source Index#S06 — 2026年 亚马逊MBB价格及销毛 v3.xlsx]]、[[Amazon MBB Source Index#S07 — 泛欧亚马逊月度价格指引.xlsx]]、[[Amazon MBB Source Index#S08 — Amazon GTM final email]] 與 [[Amazon MBB Source Index#S11 — iPrice]]；在來源內按 DE／FR／IT／ES 比對價格、毛利、最終核准與授權下限。

### 是否安全

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | 價格指引、最終核准及商務授權一致 |
| 黃燈 | 各國加碼要求待批准，或價格理由待確認 |
| 紅燈 | 價格低於授權底線、毛利不合要求，或未批准便執行 |

### 要做甚麼

找出差異來源 → 確認毛利及底線 → 拉入 Amazon GTM／李清華 → 突破授權時加入俞碧斐 → 提供接受、駁回或調整建議，並確認決策負責人、下一步及期限。

### 何時可以關閉

最終核准的價格決定已收到並可追溯，且已完成執行及結果驗證。

## 9.9 促銷價格與 DOS 準備度風險

### 我在哪裡

促銷價格或促銷帶動的 DOS 可能不符合核准、優惠標籤規則、毛利或供貨準備度。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]、[[Amazon MBB Source Index#S05 — Inventory online table]]、[[Amazon MBB Source Index#S06 — 2026年 亚马逊MBB价格及销毛 v3.xlsx]]、[[Amazon MBB Source Index#S08 — Amazon GTM final email]]、[[Amazon MBB Source Index#S09 — Promotion Tracker]] 與 [[Amazon MBB Source Index#S11 — iPrice]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 重算促銷 DOS 緩衝。

### 是否安全

已確認的 Amazon 規則：平銷價約需 30 日 `Confirmed`；促銷檔期最多約兩週 `Confirmed`；優惠標籤相對過去 30 日最低價，DE／UK 約 15% `Confirmed`，FR／IT／ES 約 5% `Confirmed`；斷貨 SKU 不應安排低價促銷 `Confirmed`。

| 業務健康狀態 | 參考門檻 |
|---|---|
| 綠燈 | 價格符合核准、優惠標籤規則及毛利；促銷 DOS 緩衝 ≥2 週 `Derived` |
| 黃燈 | 價格可執行但可能沒有優惠標籤，或緩衝為 0–2 週 `Derived` |
| 紅燈 | 未批准突破底線、促銷會令入庫前斷貨，或斷貨 SKU 仍安排低價 |

### 要做甚麼

確認活動日期及最終價格 → 以促銷預測重算 DOS 緩衝 → 價格風險拉入 Amazon GTM／核准人 → DOS 風險拉入渠道／交付 → 建議改價、縮短活動、暫停促銷或調整數量，並確認決策負責人、下一步及期限。

### 何時可以關閉

價格及 DOS 處理已確認，並在活動後的每週檢查重新驗證。

## 邊界與錯誤規則

- 來源 URL 無效：在 [[Amazon MBB Source Index]] 更新連結狀態；不建立獨立資料品質情境。
- 來源負責人未知：負責人欄留空，不能自行填入猜測姓名。
- 來源互相衝突：業務健康狀態至少為黃燈；記錄兩個來源及差異，找負責人確認。
- 已確認入庫變成暫定：立即重算庫存覆蓋緩衝。
- 門檻被相關人員覆寫：保存新值、理由、日期及適用 SKU／情境；實際情境與已確認入庫優先於固定參考門檻。
- 交接只有「收到」：管控健康狀態維持黃燈。
- 決定已作出但未執行：管控健康狀態維持黃燈；TaskNote 不可關閉。
- 結果完成但未驗證：建立或保留驗證 TaskNote。
