---
type: contact
category: hq
name: Kong Fanggui
english_name: Colin
employee_id: "00860023"
aka: Colin, 孔方貴
org: Huawei HQ(機關)— IoT
role: HQ IoT head([[Chen Jun 00917572|陳軍]] 之上)
location: 深圳
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Kong Fanggui (Colin 孔方貴) · 00860023

## At a glance
- **Role:** HQ IoT 的頭(K-O-N-G,方貴),在 [[Chen Jun 00917572|陳軍]] 之上。
- **What they care about / their stake:** HQ IoT 產品線整體。
- **How to work with them:** 比較忙,項目分析會不一定來(陳軍基本都會來);我們平常最多接觸到 [[Liu Zhou 00542940|劉晝]] 那層,Colin 知道是誰即可。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓首次提及。

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
