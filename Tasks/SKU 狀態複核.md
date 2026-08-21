---
status: todo
priority: mid
scheduled: 2026-09-01
recurrence: DTSTART:20260901;FREQ=MONTHLY;BYMONTHDAY=1
recurrence_anchor: scheduled
projects: ["[[Amazon GTM Operation]]"]
contexts:
  - "@pricing"
timeEstimate: 30
tags:
  - task
eisenhower: q2
---

## 完成標準

`Products/` 內十三筆 SKU 筆記的生命週期與盯點與地區部當前說法一致，且每筆的 `lifecycle_reviewed` 推進至本次複核日。

## 檢查清單

> 本清單只供每次發生事項閱讀；請勿編輯 ☐ 標記，只完成 TaskNotes 發生事項。

- ☐ 對齊月度定價視窗執行；地區部策略最常在該時點浮現。
- ☐ 開啟 `TaskNotes/Views/Products.base` 的「需要複核」檢視，先處理逾 45 天未複核的 SKU。
- ☐ 逐筆確認 `lifecycle` 是否仍成立；值只能取 [[SKU Lifecycle Profiles]] 的五個封閉值。
- ☐ 生命週期有變更時，同時更新 `## 現況`、`## 控制輪廓` 與 `## 變更日誌`。
- ☐ 盯點已解決的，在 `## 盯點` 表把狀態改為已關閉並記入 `## 變更日誌`；不刪除歷史列。
- ☐ 盯點仍在途但無主體任務的，在 [[Amazon GTM Operation]] 下建立後續 TaskNote，並把該 SKU 筆記加入該任務的 `projects:`。
- ☐ 所有十三筆的 `lifecycle_reviewed` 推進至本次複核日，無論是否有變更。
- ☐ 執行 `powershell -ExecutionPolicy Bypass -File scripts/validate-product-notes.ps1 -RequireComplete`，確認通過。
- ☐ 不把 SO／DOS／價格讀數寫進任何 SKU 筆記。
