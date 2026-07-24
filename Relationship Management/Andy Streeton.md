---
type: contact
category: customer
name: Andy Streeton
employee_id:
aka:
org: VodafoneThree UK（原 3UK 團隊）
role: Commercial Vendor Managers – challenging Brands
location: UK
languages: English
email:
relationship:
status: active
last_contact:
birthday: "5-1"
tags:
  - contact
---
# Andy Streeton

> ✅ 2026-07-22 身份已確認。Selina 在對話中提到的「子網」層級聯絡人「Andy」（先前只知生日 5/1，身份完全未知，曾在 27-7-2026 SCQA 客戶人物檔案草稿中列為最大新缺口），經比對《和記集團＆VDF3 客戶權利地圖 2026.07》確認即為此人——**Commercial Vendor Managers – challenging Brands**，[[Daniel Halsey]] 之下，屬 VodafoneThree（原 3UK 團隊）。原本的佔位卡片已刪除，資料併入本卡。

## At a glance
- **Role:** Commercial Vendor Managers – challenging Brands，向 [[Daniel Halsey]]（Head of Vendor Management and Commercial Strategy，目前商務談判決策人）匯報。「challenging Brands」暗示他可能負責處理較邊緣／有挑戰性的品牌供應商關係——若華為在 VodafoneThree 被歸類於此類別，他可能是實際對接窗口，值得確認。
- **What they care about / their stake:** 待補——需向 Ziyi／Selina 確認是否已有直接接觸，以及「challenging Brands」是否包含華為。
- **How to work with them:** 待補。生日 **5 月 1 日**。

## Background
2026-07-22 首次建卡（前身為身份不明的「Andy」佔位卡）。除職稱、匯報線與生日外，對華為態度、歷史事件、年資——全數待補。來源：[[0 VodafoneThree UK Org Map]]（《和記集團＆VDF3 客戶權利地圖 2026.07》）。

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
