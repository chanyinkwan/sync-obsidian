# Amazon MBB Zero-Drop-Ball Operating Control Tower — 設計規格

Date: 2026-08-20
Status: implemented; structural verification passed; live Obsidian acceptance pending after integration
Owner: Kess Chan
Parent scope: `[[Amazon GTM Management]]`
Operational project: `[[Amazon GTM Operation]]`

> 本規格取代 `2026-08-06-amazon-gtm-cockpit-design.md` 中與 Amazon MBB recurring operations 有關的範圍、節奏與分類。舊規格的其他通用 TaskNotes／Daily Operations 設計不在本次範圍內。

## 1. Outcome

建立一個離線、個人使用、以例外為核心的 Amazon MBB BAU 決策導航系統。它不複製線上資料，而是確保使用者：

1. 在正確時間前往正確的線上來源。
2. 清楚知道要查看哪個 sheet、filter、欄位與 KPI。
3. 能以參考門檻判斷正常、關注或需要即時升級。
4. 把 insight 轉化為 recommendation、handoff 與 TaskNote。
5. 在 Decision Owner、下一步、期限及結果驗證完成前不讓事項失聯。

控制塔的成功不是「擁有全部資料」，而是能在五分鐘內回答：

- 現在有甚麼需要我注意？
- 業務是否安全？
- 我應查看哪個來源及甚麼欄位？
- 我需要通知誰、建議甚麼、何時再追蹤？
- 此事是否真正被承接及完成？

## 2. Design principles

1. **Personal control only.** 只有 Kess 使用，不是團隊共同主檔。
2. **Online sources remain authoritative.** Excel、FineBI、Delivery Tracker、iPrice及郵件仍是 source of truth。
3. **No routine data dragging.** 可以在線上判斷就在線上判斷，不手動搬運 KPI。
4. **Evidence at decision time.** 正式 decision／recommendation 保存截圖；正常檢查不保存數值或截圖。
5. **Exception-first.** 沒有 insight、decision或 follow-up 時，不寫 Operations Log。
6. **TaskNotes owns execution.** 控制塔保存 context與判斷；所有下一步、等待及驗證由 TaskNotes管理。
7. **Reference thresholds, not false precision.** 經驗門檻用來觸發判斷，不假裝是絕對政策。
8. **Bare minimum scope.** 不把一次性 Project、廣告、店面健康或自動化整合重新帶入第一版。

## 3. Scope

### 3.1 Included

- Amazon MBB only。
- 每個 SKU 的 `EU Aggregate` 與 `UK` 兩個營運視角。
- Demand／SO vs Forecast。
- Inventory／DOS。
- PO／Delivery／SI。
- Monthly price guidance、approval與商務授權。
- Promotion pricing與 promotion-driven DOS fine-tuning。
- Recurring checks、recommendations、stakeholder awareness、handoff及follow-up。

### 3.2 Explicitly excluded

- Router。
- DE／FR／IT／ES的長期獨立營運記錄。
- Amazon live-price巡查。
- Buy Box、listing、availability及一般店面健康。
- Advertising／traffic monitoring。
- Data quality作為獨立業務情境。
- 新品上市、EOL／圈量、選品及其他有自然終點的 Project。
- 自動讀取、同步或複製線上資料。
- 新的 Excel control tower。
- 要求其他 stakeholder進入或更新此系統。

### 3.3 Country-price exception

營運記錄維持 `SKU × EU Aggregate`，但月度定價時仍在來源內查看 DE／FR／IT／ES各國價格，因 deal-tag規則不同。只有國家價格異常時，才在該 SKU 的 EU log entry內寫明國家，不建立永久 country-level record。

## 4. User role and decision boundary

Kess 的角色是 **Monitor + Advisor + Coordinator**，不是最終 Decision Owner。

Kess 負責：

1. 發現 KPI偏離。
2. 判斷影響與緊急程度。
3. 找到並拉入正確 stakeholder。
4. 提供 forecast、volume、delivery、pricing或promotion調整建議。
5. 追蹤對方的決定及執行情況。
6. 驗證風險是否解除。

Kess 不直接：

- 代表 Amazon下 PO。
- 決定 production或transport。
- 批准突破價格底線。
- 代替 country／channel／delivery team執行。

## 5. Information architecture

```text
Amazon GTM Management
│
└─ Amazon GTM Operation
   ├─ Daily入口 → 現有 Daily Operations／TaskNotes
   ├─ MBB Scenario Matrix
   ├─ Amazon MBB Source Index
   ├─ Monthly Operations Log
   └─ Decision Evidence／Screenshots
```

### 5.1 `Amazon GTM Management`

- 保持為父級業務範圍。
- 提供 `Amazon GTM Operation` 入口。
- 不承載 BAU action tasks。

### 5.2 `Amazon GTM Operation`

- 是獨立 TaskNotes Project。
- 提供 Scenario Matrix、Source Index及當月 Log入口。
- 說明使用規則與 recurring cadence。
- 不保存完整 KPI table。

### 5.3 Daily Operations／TaskNotes

- 是每日唯一入口。
- Amazon recurring checks及 follow-up與其他日常任務一起出現。
- 使用者不需要每天另開 Amazon dashboard。

## 6. Source Index

每個來源只登記一次。Scenario Card引用 Source ID，不重複 URL。

### 6.1 Source entry schema

| Field | Meaning |
|---|---|
| Source ID | 穩定識別碼，例如 `S01` |
| Source name | 正式檔案／系統名稱 |
| URL | 線上連結；未知時刻意留空 |
| Business question | 此來源回答甚麼問題 |
| Exact location | Sheet、filter、column、report或mail folder |
| Scope | EU、UK或兩者 |
| Owner | 維護／確認人；未知時留空 |
| Refresh cadence | Daily、weekly、biweekly、monthly或event-driven |
| Last link verification | 最後確認連結可用的日期 |

### 6.2 Initial source inventory

| ID | Source | What to inspect | Known cadence／location |
|---|---|---|---|
| S01 | FineBI | 上週 Actual SO，按 SKU／週 | 每週，一般週一 |
| S02 | `AMZ泛欧 路由&MBB上市进展.xlsx` | Forecast、3+3、DOS、SKU營運狀態 | 每週；rolling six months |
| S03 | AMZ Delivery Plan／Delivery Tracker | PO、production、in-transit、ETA、actual SI | 每兩週同步 |
| S04 | `MBB SI volume&Rev Tracker.xlsx` | SI量、收入、BP及actual差異 | Monthly／BP review |
| S05 | 庫存線上表 | Amazon inventory、NL hub、confirmed inbound | 正式名稱及位置未確認 |
| S06 | `2026年 亚马逊MBB价格及销毛 v3.xlsx` | Run／small promo／major promo價、margin、cost | Monthly pricing |
| S07 | `泛欧亚马逊月度价格指引.xlsx` | 下月上／下半月建議價格 | Monthly |
| S08 | Amazon GTM final email | Final approved price及country on-top | Monthly／event-driven |
| S09 | Promotion Tracker | 活動日期、促銷窗口及forecast | Before promotion |
| S10 | `AMZ MBB量价模拟 V4.xlsx` | SO模擬、量價方案、BSR及運費 | Forecast／pricing judgment |
| S11 | iPrice | 商務授權、margin及價格底線 | When authorization is relevant |

所有 URL、S05正式名稱及尚未確認的 Owner 在第一版留空；系統不得自行推測。

## 7. Health model

每個 active exception同時有兩個獨立燈號。

### 7.1 Business Health

| State | Meaning | Response time |
|---|---|---|
| Green | KPI在參考範圍內，沒有需要處理的風險 | 不建立 log或task |
| Amber | 風險正在形成，但可在下一次排定 review前處理 | 下一次 scheduled review前 |
| Red | 已影響或即將影響 sales、stock、delivery、price或margin | 同一工作日 |

### 7.2 Control Health

| State | Meaning |
|---|---|
| Red | 尚未通知正確 stakeholder，或沒有明確 Decision Owner |
| Amber | 已通知／已確認收到，但下一步或期限未確定 |
| Green | Decision Owner、下一步及回覆／完成期限全部明確 |

訊息已發出或對方已讀不等於 handoff完成。Business Health仍可保持紅燈，即使 Control Health已轉綠。

## 8. Threshold governance

每個 threshold必須標示來源類型：

- `Confirmed`：材料、正式政策或 stakeholder已明確確認。
- `Derived`：由 confirmed lead time、required date或confirmed inbound推算。
- `Experience`：初始參考值，並非公司政策。

每個 SKU／scenario可覆寫預設門檻，但覆寫必須記錄理由及日期。實際 context及confirmed inbound優先於固定數字。

## 9. Scenario Decision Matrix

### 9.1 SO vs Forecast variance

**Where am I:** Actual SO明顯高於或低於 Forecast。

**Where to look:** S01 Actual SO + S02 Forecast。優先使用 rolling four-week view，避免因單週Amazon波動立即改判斷。

| Health | Reference threshold |
|---|---|
| Green | Rolling four-week variance在 ±10%內 `Experience` |
| Amber | 偏離 10–20%，但未造成stock風險 `Experience` |
| Red | 偏離 >20%，或較小偏離已令庫存無法覆蓋下一次 inbound `Experience/Derived` |

**Micro-actions:**

1. 確認是否由 promotion、price或一次性波動造成。
2. 查看 DOS及confirmed inbound。
3. 黃／紅燈保存截圖及log entry。
4. 通知相關 stakeholder並建議修正 forecast／volume。
5. 建立 follow-up TaskNote。

**Close when:** Stakeholder確認下一版 forecast／volume處理方式，並在下一週重新驗證。

### 9.2 Forecast freshness

**Where am I:** 上週 SO未補入，或 rolling 3+3／six-month forecast未向後刷新。

**Where to look:** S01 + S02。

| Health | Reference threshold |
|---|---|
| Green | 上週 SO已更新，未來六個月forecast完整 `Confirmed` |
| Amber | 延遲一個 review cycle，但未影響 supply decision `Experience` |
| Red | Forecast缺失／過期，已阻礙production、PO或delivery判斷 |

**Micro-actions:** 確認缺失範圍 → 找 source owner → 說明受影響 SKU與decision → 建立有期限的TaskNote。

**Close when:** Forecast已更新並可用於本週判斷。

### 9.3 Low DOS／stockout risk

```text
Coverage Buffer
= Current DOS
− Weeks until next Confirmed Inbound
```

| Health | Reference threshold |
|---|---|
| Green | Coverage Buffer ≥2 weeks `Derived` |
| Amber | Coverage Buffer介於0–2 weeks |
| Red | Coverage Buffer <0；預計inbound前已斷貨 |

**Where to look:** S02 + S03 + S05；以最新 SO run rate及confirmed inbound為準。

**Micro-actions:**

1. 確認Amazon可售庫存、NL hub及inbound。
2. 排除tentative shipment被誤當confirmed。
3. 檢查近期promotion uplift。
4. 紅燈同日拉入channel／delivery stakeholder。
5. 提供expedite、forecast adjustment、promotion hold或volume adjustment建議。

**Close when:** Inbound、調整方案及下一次驗證日期全部確認，且重新計算後風險解除。

### 9.4 High DOS／overstock risk

| Health | Reference threshold |
|---|---|
| Green | DOS ≤13 weeks `Experience` |
| Amber | DOS >13且≤26 weeks |
| Red | DOS >26 weeks，或未來四週持續上升且沒有需求／promotion計劃 |

13／26 weeks對應 rolling 3+3視角，只是初始經驗值。

**Where to look:** S02 + S03 + S05 + S09。

**Micro-actions:** 確認庫存所在位置 → 排除PO／SI timing → 查看promotion與price plan → 建議降低forecast／後續supply或調整價格節奏 → 拉入channel、delivery及pricing stakeholder。

**Close when:** Stakeholder確認處理方向，且DOS在後續review不再惡化。

### 9.5 PO timing／quantity variance

| Health | Reference threshold |
|---|---|
| Green | PO在預期日期確認，quantity variance ≤10% `Experience` |
| Amber | PO預期日期在三個工作日內但未確認，或variance 10–20% |
| Red | 預期日期已過，或variance >20%並影響DOS／delivery |

Amazon PO到sell-in約兩週是已知運作規則，但PO不是固定季度節奏。

**Where to look:** S02 + S03。

**Micro-actions:** 確認expected PO date及quantity → 計算DOS影響 → 拉入Amazon channel PO窗口 → 說明最遲日期及缺口 → 提供quantity adjustment建議。

**Close when:** PO或替代方案被確認，並已反映在delivery／DOS判斷。

### 9.6 Delivery／inbound ETA delay

```text
Delivery Buffer
= Required Available Date
− Current Confirmed ETA
```

| Health | Reference threshold |
|---|---|
| Green | ETA比required date早≥14 days `Derived` |
| Amber | ETA在required date前0–14 days |
| Red | ETA晚於required date，或沒有confirmed ETA |

**Where to look:** S03，並以S02判斷DOS影響。

**Micro-actions:** 定位production／departure／customs／NL hub／Amazon warehouse milestone → 確認forecast已反映延誤 → 找Tony取得執行排期 → 必要時拉Eric確認方向 → 建議expedite、reallocation或promotion adjustment。

**Close when:** 新ETA、Owner及處理方式已確認，並完成結果驗證。

### 9.7 SI vs Plan variance

| Health | Reference threshold |
|---|---|
| Green | Actual SI與plan差異≤10% `Experience` |
| Amber | 差異10–20% |
| Red | 差異>20%，或令SO／inventory判斷失真 |

**Where to look:** S03 + S04。

**Micro-actions:** 排除timing difference → 確認PO／receipt → 更新受影響的DOS判斷 → 通知delivery／finance stakeholder → 追蹤修正。

**Close when:** Actual與plan差異已被解釋或修正，且後續decision使用正確基數。

### 9.8 Monthly price guidance variance

| Health | Reference threshold |
|---|---|
| Green | Guidance、final approval及商務授權一致 |
| Amber | Country on-top request待批准，或價格理由待確認 |
| Red | 價格低於授權底線、margin不合要求，或未批准便執行 |

**Where to look:** S06 + S07 + S08 + S11。EU record內仍按DE／FR／IT／ES檢查country price。

**Micro-actions:** 找出差異來源 → 確認margin及底線 → 拉入Amazon GTM／李清華 → 突破授權時加入俞碧斐 → 提供接受、駁回或調整建議。

**Close when:** Final approved decision收到並可追溯。

### 9.9 Promotion pricing＋DOS readiness

Confirmed Amazon rules：

- Run price約需30日。
- Offer最多約兩週。
- Deal tag相對過去30日最低價：DE／UK約15%，FR／IT／ES約5%。
- 斷貨SKU不應安排低價promotion。

| Health | Reference threshold |
|---|---|
| Green | 價格符合approval、deal-tag logic及margin；promotion DOS buffer ≥2 weeks |
| Amber | 價格可執行但可能沒有deal tag，或buffer為0–2 weeks |
| Red | 未批准突破底線、promotion會令inbound前斷貨，或斷貨SKU仍安排低價 |

**Where to look:** S02 + S05 + S06 + S08 + S09 + S11。

**Micro-actions:** 確認活動日期及final price → 以promotion forecast重算DOS buffer → 價格風險拉入Amazon GTM／approver → DOS風險拉入channel／delivery → 建議改價、縮短活動、hold promotion或調整volume。

**Close when:** 價格及DOS處理已確認，並在活動後的weekly review重新驗證。

## 10. Recurring TaskNotes

第一版只建立四個 recurring controls。

| TaskNote | Frequency | Normal completion condition |
|---|---|---|
| Amazon MBB Daily Control Check | 每工作日，≤10分鐘 | 沒有到期／逾期Amazon follow-up；不打開所有source |
| Amazon MBB Weekly CPFR Review | 每週一 | SO、forecast、DOS、PO及inbound已判斷 |
| Amazon MBB Delivery & SI Review | 每兩週 | Delivery Tracker／SI差異已判斷 |
| Amazon MBB Monthly Price & Promo Review | 月度價格會前 | Guidance、margin、promotion DOS及pending approvals已判斷 |

固定日期不寫死為每月10日；月度 TaskNote以實際price meeting為錨點，避免handover SOP與實際節奏差異造成錯誤提醒。

## 11. Normal and exception flows

### 11.1 Normal

```text
Recurring TaskNote due
→ Open specified source links
→ Apply scenario threshold
→ All green
→ Complete recurring TaskNote
→ No log, screenshot or new task
```

### 11.2 Insight／exception

```text
Recurring TaskNote due
→ Amber／Red insight
→ Capture screenshot
→ Add Monthly Operations Log entry
→ State recommendation
→ Create Action／Follow-up TaskNote
→ Pull stakeholder
→ Confirm Decision Owner + next action + deadline
→ Verify result
→ Close TaskNote and log entry
```

### 11.3 Escalate to a Project

BAU exception只有在形成明確的獨立結果、期限及多步跨團隊工作時，才建立新的 Project。Launch、EOL／圈量等從一開始就是 Project，不進入本控制塔。

## 12. Monthly Operations Log

每月一份；只有 insight、recommendation或decision時追加。

```markdown
### YYYY-MM-DD — [Scenario] [SKU] [EU/UK]

- Source:
- Screenshot:
- Insight:
- Business health: 🟡 / 🔴
- Control health: 🔴 / 🟡 / 🟢
- Recommendation:
- Stakeholders pulled:
- Decision owner:
- Agreed next action:
- Deadline:
- Follow-up TaskNote:
- Result / closure:
```

如果問題跨月，下一個月的entry連回前一個月的原始heading；不另外建立永久SKU note。

## 13. TaskNote rules

### 13.1 Create a TaskNote when

- Kess需要修正、通知、取得回覆或再次檢查。
- Stakeholder需要作出decision。
- 已有handoff但尚未到結果驗證。

### 13.2 Do not create a TaskNote when

- 所有指標為green。
- 只有一般觀察，沒有下一步或期限。
- 資訊屬於一次性Project的既有工作流。

### 13.3 Project assignment

所有BAU action及follow-up TaskNotes的Project固定為 `[[Amazon GTM Operation]]`，並連回當月Operations Log entry。它們不直接放在 `[[Amazon GTM Management]]`。

## 14. Error and edge-case behavior

- Source URL無效：在 Source Index更新link status；不建立獨立data-quality scenario。
- Source owner未知：Owner欄留空，不能自行填入猜測姓名。
- Sources互相衝突：Business Health至少為amber；log兩個來源及差異，找owner確認。
- Confirmed inbound變成tentative：立即重算Coverage Buffer。
- Threshold被stakeholder覆寫：保存新值、理由、日期及適用SKU／scenario。
- Handoff只有「收到」：Control Health維持amber。
- Decision已作出但未執行：Control Health維持amber；TaskNote不可關閉。
- 結果完成但未驗證：建立或保留verification TaskNote。

## 15. First-version known unknowns

這些缺口不阻止第一版建立，但必須在 Source Index中顯示為未確認：

- S05庫存線上表的正式名稱、URL及exact location。
- 各線上shared file的正式URL。
- Amazon channel GTM在董淼離開後的接任者。
- PO source中的expected PO date及quantity欄位位置。
- EU Aggregate與UK DOS是否已在source中直接提供。
- 公司正式的DOS、forecast variance及SI variance門檻。
- Monthly price meeting的穩定日期；第一版以meeting-relative reminder處理。

## 16. Acceptance criteria

第一版只有在以下全部成立時才算完成：

1. Daily Operations是唯一每日入口。
2. 正常日的Amazon control review可在10分鐘內完成。
3. Weekly reviewer能從TaskNote一鍵前往每個需要的source。
4. 每張Scenario Card都寫明where to look、what to inspect、threshold、micro-actions及close condition。
5. 所有source link只在Source Index維護一次。
6. 正常檢查不產生log、screenshot或額外task。
7. 每個正式recommendation／decision都有source link及screenshot。
8. 每個open handoff都有Decision Owner、next action及deadline。
9. Red business risk在同一工作日處理；amber在下一個scheduled review前處理。
10. TaskNote只有在結果驗證後關閉。
11. 系統沒有Router、advertising、store health、launch、EOL或selection內容。
12. 系統沒有手動維護的KPI database或新的Excel control tower。

## 17. Build boundary

本規格批准後的實作只建立上述Obsidian notes、templates、links及四個recurring TaskNotes。任何自動化、Dataview database、Excel integration、API、store-monitoring tool或擴大工作範圍，都需要新的設計批准。
