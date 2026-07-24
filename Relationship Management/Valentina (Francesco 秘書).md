---
type: contact
category: customer
name: Valentina
employee_id:
aka:
org: Hutchison IOD (base London)
role: Francesco Zampini 的秘書
location:
languages: Italian, English
email:
relationship:
status: active
last_contact:
birthday: "10-12"
tags:
  - contact
---
# Valentina（Francesco 秘書）

> 🆕 2026-07-22 首次建卡——先前完全未出現在任何關係卡或關係圖中，是靠 Kess 取得的客戶生日名單才首次浮現。全名、確切職責細節、與客戶關係中的實際角色，以及是否應納入本輪 SCQA 客戶人物檔案範疇，均待 Ziyi／Selina 確認。

## At a glance
- **Role:** [[Francesco Zampini]] 的秘書。義大利籍女性。
- **What they care about / their stake:** 待補——目前完全未知她在客戶互動中的實際角色（純行政窗口，還是也參與安排/協調？）。
- **How to work with them:** 待補。生日 **10 月 12 日**；目前 40 歲，本年度生日後將滿 41 歲。

## Background
除了「Francesco 的秘書、義大利籍女性、現年 40 歲（本年度將滿 41 歲）、生日 10/12」之外，沒有其他已知資訊。全名、任職年資、與客戶關係的實際互動角色，以及是否需要／應該被收錄進 27-7-2026 SCQA 客戶人物檔案交付物的範疇——全數待向 Ziyi（7/23）與 Selina（7/24）確認。

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
