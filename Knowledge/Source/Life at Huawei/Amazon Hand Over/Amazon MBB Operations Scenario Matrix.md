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

> 用途：我在哪裡 → 是否安全 → Where do I look → What do I do → When can I close.

本矩陣是靜態決策指引；線上來源仍是唯一真源，正常 KPI 數據不得複製到 Obsidian。營運粒度固定為 `SKU × EU Aggregate` 與 `SKU × UK`；只有月度價格工作流在來源內檢查 DE／FR／IT／ES，並僅在該 SKU 的 EU 紀錄中註明國家異常。

## 健康狀態模型

- Business Green：KPI 在參考範圍內，沒有需要處理的風險；不建立 action 或 record。
- Business Amber：風險正在形成，但可在下一次 scheduled review 前處理。
- Business Red：已影響或即將影響 sales、stock、delivery、price 或 margin；同一工作日處理。
- Control Red：尚未通知正確 stakeholder，或尚未確認 Decision Owner。
- Control Amber：Owner 已知情，但下一步或期限仍缺失。
- Control Green：Decision Owner、下一步及期限全部確認。

Business Health 與 Control Health 必須獨立判斷。訊息已發出或對方已讀不等於 handoff 完成；即使 Control Health 為綠燈，Business Health 仍可維持紅燈。Decision 已作出但尚未執行或尚未驗證時，事項仍然開啟。

## Zero-Drop-Ball 流程

1. 開啟 scenario 指定的 Source IDs。
2. 套用 EU Aggregate 或 UK filter。
3. 把線上數據與參考門檻比較。
4. Green：完成 recurring occurrence，不建立其他記錄。
5. Amber／Red：截圖並加入 Monthly Operations Log entry。
6. 寫明影響及建議，拉入正確 stakeholders。
7. 在 [[Amazon GTM Operation]] 下建立 Action／Follow-up TaskNote。
8. 確認 Decision Owner、下一步及期限。
9. 驗證結果後才關閉。

## 9.1 SO 與 Forecast 偏差

### 我在哪裡

Actual SO 明顯高於或低於 Forecast。優先以 rolling four-week view 判斷，避免單週 Amazon 波動立即改變判斷。

### 去哪裡查看

[[Amazon MBB Source Index#S01 — FineBI]] 的 Actual SO，以及 [[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]] 的 Forecast；按 `SKU × EU Aggregate` 與 `SKU × UK` 分別檢查。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | Rolling four-week variance 在 ±10% 內 `Experience` |
| Amber | 偏離 10–20%，但未造成 stock 風險 `Experience` |
| Red | 偏離 >20% `Experience`，或較小偏離已令庫存無法覆蓋下一次 confirmed inbound `Derived` |

### 要做甚麼

1. 確認是否由 promotion、price 或一次性波動造成。
2. 查看 DOS 及 confirmed inbound。
3. Amber／Red 保存截圖及建立 Monthly Operations Log entry。
4. 通知相關 stakeholder，建議修正 forecast／volume。
5. 建立 follow-up TaskNote，寫明 Decision Owner、下一步及期限。

### 何時可以關閉

Stakeholder 已確認下一版 forecast／volume 的處理方式，並在下一週重新驗證結果。

## 9.2 Forecast 更新狀態

### 我在哪裡

上週 SO 未補入，或 rolling 3+3／six-month forecast 未向後刷新。

### 去哪裡查看

[[Amazon MBB Source Index#S01 — FineBI]] 與 [[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查上週 SO 及未來六個月 forecast。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | 上週 SO 已更新，未來六個月 forecast 完整 `Confirmed` |
| Amber | 延遲一個 review cycle，但未影響 supply decision `Experience` |
| Red | Forecast 缺失／過期，已阻礙 production、PO 或 delivery 判斷 |

### 要做甚麼

確認缺失範圍 → 找 source owner → 說明受影響 SKU 與 decision → 建立有期限的 TaskNote，並確認 Decision Owner、下一步及期限。

### 何時可以關閉

Forecast 已更新，並可用於本週判斷。

## 9.3 低 DOS／缺貨風險

### 我在哪裡

Coverage Buffer = Current DOS − Weeks until next Confirmed Inbound。以最新 SO run rate 及 confirmed inbound 為準。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]、[[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]] 與 [[Amazon MBB Source Index#S05 — Inventory online table]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | Coverage Buffer ≥2 weeks `Derived` |
| Amber | Coverage Buffer 介於 0–2 weeks `Derived` |
| Red | Coverage Buffer <0；預計 inbound 前已斷貨 `Derived` |

### 要做甚麼

1. 確認 Amazon 可售庫存、NL hub 及 inbound。
2. 排除 tentative shipment 被誤當 confirmed。
3. 檢查近期 promotion uplift。
4. Red 同日拉入 channel／delivery stakeholder。
5. 提供 expedite、forecast adjustment、promotion hold 或 volume adjustment 建議，並建立含 Decision Owner、下一步及期限的 follow-up TaskNote。

### 何時可以關閉

Inbound、調整方案及下一次驗證日期全部確認，且重新計算後風險解除。

## 9.4 高 DOS／滯銷風險

### 我在哪裡

DOS 過高，或在沒有 demand／promotion 計劃下持續上升。13／26 weeks 對應 rolling 3+3 視角，只是初始經驗值。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]、[[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]]、[[Amazon MBB Source Index#S05 — Inventory online table]] 與 [[Amazon MBB Source Index#S09 — Promotion Tracker]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | DOS ≤13 weeks `Experience` |
| Amber | DOS >13 且 ≤26 weeks `Experience` |
| Red | DOS >26 weeks `Experience`，或未來四週持續上升且沒有 demand／promotion 計劃 `Experience` |

### 要做甚麼

確認庫存所在位置 → 排除 PO／SI timing → 查看 promotion 與 price plan → 建議降低 forecast／後續 supply 或調整價格節奏 → 拉入 channel、delivery 及 pricing stakeholder，並建立含 Decision Owner、下一步及期限的 TaskNote。

### 何時可以關閉

Stakeholder 已確認處理方向，且 DOS 在後續 review 不再惡化。

## 9.5 PO 預計日期／數量偏差

### 我在哪裡

PO 的 expected date 未確認或 quantity 與預期不符。Amazon PO 到 sell-in 約兩週是已知運作規則，但 PO 不是固定季度節奏。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]] 與 [[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查 expected PO date、quantity 與 DOS 影響。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | PO 在預期日期確認，quantity variance ≤10% `Experience` |
| Amber | PO 預期日期在三個工作日內但未確認，或 variance 10–20% `Experience` |
| Red | 預期日期已過，或 variance >20% 並影響 DOS／delivery `Experience` |

### 要做甚麼

確認 expected PO date 及 quantity → 計算 DOS 影響 → 拉入 Amazon channel PO 窗口 → 說明最遲日期及缺口 → 提供 quantity adjustment 建議，並確認 Decision Owner、下一步及期限。

### 何時可以關閉

PO 或替代方案已確認，並已反映在 delivery／DOS 判斷。

## 9.6 交付／inbound ETA 延誤

### 我在哪裡

Delivery Buffer = Required Available Date − Current Confirmed ETA。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]] 與 [[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]]；由 S03 檢查 ETA，並以 S02 判斷 `SKU × EU Aggregate` 與 `SKU × UK` 的 DOS 影響。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | ETA 比 required date 早 ≥14 days `Derived` |
| Amber | ETA 在 required date 前 0–14 days `Derived` |
| Red | ETA 晚於 required date，或沒有 confirmed ETA `Derived` |

### 要做甚麼

定位 production／departure／customs／NL hub／Amazon warehouse milestone → 確認 forecast 已反映延誤 → 找 Tony 取得執行排期 → 必要時拉 Eric 確認方向 → 建議 expedite、reallocation 或 promotion adjustment，並確認 Decision Owner、下一步及期限。

### 何時可以關閉

新 ETA、Owner 及處理方式已確認，並完成結果驗證。

## 9.7 SI 與 Plan 偏差

### 我在哪裡

Actual SI 與 plan 出現顯著差異，或令 SO／inventory 判斷失真。

### 去哪裡查看

[[Amazon MBB Source Index#S03 — AMZ Delivery Plan／Delivery Tracker]] 與 [[Amazon MBB Source Index#S04 — MBB SI volume&Rev Tracker.xlsx]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 檢查 actual SI、plan 與差異。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | Actual SI 與 plan 差異 ≤10% `Experience` |
| Amber | 差異 10–20% `Experience` |
| Red | 差異 >20% `Experience`，或令 SO／inventory 判斷失真 |

### 要做甚麼

排除 timing difference → 確認 PO／receipt → 更新受影響的 DOS 判斷 → 通知 delivery／finance stakeholder → 追蹤修正，並確認 Decision Owner、下一步及期限。

### 何時可以關閉

Actual 與 plan 差異已被解釋或修正，且後續 decision 使用正確基數。

## 9.8 月度價格指引／審批漂移

### 我在哪裡

Guidance、final approval 或商務授權不一致。營運紀錄仍維持 `SKU × EU Aggregate`，但在來源內按 DE／FR／IT／ES 檢查 country price；只有國家價格異常時，才在該 SKU 的 EU log entry 註明國家。

### 去哪裡查看

[[Amazon MBB Source Index#S06 — 2026年 亚马逊MBB价格及销毛 v3.xlsx]]、[[Amazon MBB Source Index#S07 — 泛欧亚马逊月度价格指引.xlsx]]、[[Amazon MBB Source Index#S08 — Amazon GTM final email]] 與 [[Amazon MBB Source Index#S11 — iPrice]]；在來源內按 DE／FR／IT／ES 比對 price、margin、final approval 與授權下限。

### 是否安全

| Business Health | 參考門檻 |
|---|---|
| Green | Guidance、final approval 及商務授權一致 |
| Amber | Country on-top request 待批准，或價格理由待確認 |
| Red | 價格低於授權底線、margin 不合要求，或未批准便執行 |

### 要做甚麼

找出差異來源 → 確認 margin 及底線 → 拉入 Amazon GTM／李清華 → 突破授權時加入俞碧斐 → 提供接受、駁回或調整建議，並確認 Decision Owner、下一步及期限。

### 何時可以關閉

Final approved decision 已收到並可追溯。

## 9.9 促銷價格與 DOS 準備度風險

### 我在哪裡

Promotion price 或 promotion-driven DOS 可能不符合核准、deal-tag logic、margin 或供貨準備度。

### 去哪裡查看

[[Amazon MBB Source Index#S02 — AMZ泛欧 路由&MBB上市进展.xlsx]]、[[Amazon MBB Source Index#S05 — Inventory online table]]、[[Amazon MBB Source Index#S06 — 2026年 亚马逊MBB价格及销毛 v3.xlsx]]、[[Amazon MBB Source Index#S08 — Amazon GTM final email]]、[[Amazon MBB Source Index#S09 — Promotion Tracker]] 與 [[Amazon MBB Source Index#S11 — iPrice]]；按 `SKU × EU Aggregate` 與 `SKU × UK` 重算 promotion DOS buffer。

### 是否安全

Confirmed Amazon 規則：run price 約需 30 日 `Confirmed`；offer 最多約兩週 `Confirmed`；deal tag 相對過去 30 日最低價，DE／UK 約 15% `Confirmed`，FR／IT／ES 約 5% `Confirmed`；斷貨 SKU 不應安排低價 promotion `Confirmed`。

| Business Health | 參考門檻 |
|---|---|
| Green | 價格符合 approval、deal-tag logic 及 margin；promotion DOS buffer ≥2 weeks `Derived` |
| Amber | 價格可執行但可能沒有 deal tag，或 buffer 為 0–2 weeks `Derived` |
| Red | 未批准突破底線、promotion 會令 inbound 前斷貨，或斷貨 SKU 仍安排低價 |

### 要做甚麼

確認活動日期及 final price → 以 promotion forecast 重算 DOS buffer → 價格風險拉入 Amazon GTM／approver → DOS 風險拉入 channel／delivery → 建議改價、縮短活動、hold promotion 或調整 volume，並確認 Decision Owner、下一步及期限。

### 何時可以關閉

價格及 DOS 處理已確認，並在活動後的 weekly review 重新驗證。

## 邊界與錯誤規則

- Source URL 無效：在 [[Amazon MBB Source Index]] 更新 link status；不建立獨立 data-quality scenario。
- Source owner 未知：Owner 欄留空，不能自行填入猜測姓名。
- Sources 互相衝突：Business Health 至少為 Amber；記錄兩個來源及差異，找 owner 確認。
- Confirmed inbound 變成 tentative：立即重算 Coverage Buffer。
- Threshold 被 stakeholder 覆寫：保存新值、理由、日期及適用 SKU／scenario。
- Handoff 只有「收到」：Control Health 維持 Amber。
- Decision 已作出但未執行：Control Health 維持 Amber；TaskNote 不可關閉。
- 結果完成但未驗證：建立或保留 verification TaskNote。
