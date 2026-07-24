---
type: contact
category: customer
name: Joe Parker
employee_id:
aka:
org: Hutchison IOD (base London)
role: IOD 部門 head
location: London
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Joe Parker

> ✅ 2026-07-22 更正：IOD 全稱為 **CK Hutchison Innovations Opportunities Development**（原筆記誤記為「Innovation of Development」），聚焦全球行動創新業務（企業服務／IoT／MVNO／數據分析），不參與終端項目決策。

## At a glance
- **Role:** CEO, CK Hutchison Innovations Opportunities Development（IOD 部門的頭）—— 但**不太管我們、不太管供應商**，不參與終端項目決策。業務上向 **Frank**（Frank John Sixt，集團聯席董事總經理兼集團財務董事）匯報（《MWC接待策劃報告》正式組織圖核實）。
- **What they care about / their stake:** IOD 部門整體——聚焦企業服務、IoT、MVNO、數據分析等創新業務。
- **How to work with them:** 供應商/選型的事實際走 [[Francesco Zampini]]（組織圖上掛在 IOD 之下，但供應商事務實際繞過 Joe Parker 直達 [[Dennis Lui]]）；[[Agostino Ruberto]]、[[Marlene Fantini]] 亦掛在 IOD 組織下。我們基本不需要直接對接 Joe Parker——他也是四人中資料缺口最大的一位，程哥開場第一個問的就是他。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓 + Kess 提供客戶組織圖:Canning Fok → Dennis Lui → **Joe Parker** → Francesco Zampini / Agostino Ruberto（兩人同層，均向 Joe Parker 匯報）→ Marlene Fantini（向 Francesco 匯報）→ Mark Williams。IOD 是和記對接我們的 global team,大部分 base 倫敦(這也是我們團隊在倫敦的原因)。

態度、歷史事件、來和記前經歷、年資、生日、下一次接觸點——全數待補，全部資訊僅來自二手交接對話（Ziyi 7/10、程哥 7/20），零事件出席佐證、零一手來源。

## Last meeting / interaction
```dataview
TABLE WITHOUT ID file.link AS "Note", date AS "Date"
FROM #meeting
WHERE contains(file.outlinks, this.file.link)
SORT date DESC
LIMIT 5
```

## Open action items involving them
```dataview
TASK
FROM "Operation Note"
WHERE !completed AND contains(text, this.file.name)
```

## All linked notes (every mention)
```dataview
LIST
WHERE contains(file.outlinks, this.file.link) AND file.name != this.file.name
SORT file.mtime DESC
```
