---
type: product
model:
family:
markets: [EU]
lifecycle:
lifecycle_reviewed:
priority_tier:
watch: []
strategy:
decision_owner: "[[Zhang Xuan 00942107]]"
projects: ["[[Amazon GTM Management]]"]
tags: [product, amazon, mbb]
---
# <model>

## 現況

> 地區部原話逐字，附日期。EU 與 UK 分歧時分小節。

## 控制輪廓

依 [[SKU Lifecycle Profiles]] 的 `<lifecycle>` 輪廓執行。本 SKU 的覆寫：

- 無

## 盯點

| 盯點 | 適用情境 | 狀態 |
|---|---|---|
|  |  |  |

## Open items

```dataview
TABLE WITHOUT ID file.link AS "任務", status AS "狀態", due AS "期限"
FROM #task
WHERE contains(projects, this.file.link) AND status != "done"
SORT due ASC
```

## 產品本體

> spec／KSP／競爭擺位。供 [[Product Baseline]] Gates 取用；Gate 任務不連結至本筆記。

## 變更日誌

- YYYY-MM-DD — 事件
