---
type: contact
category: internal
name: Song Jinkun
employee_id: "00731037"
aka: ASR 聽作「宋敬坤」(以系統名 Song Jinkun 為準)
org: Huawei — 奧地利子網
role: 奧地利 GTM
location: Austria
languages: Mandarin
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Song Jinkun · 00731037

## At a glance
- **Role:** 奧地利 GTM。
- **What they care about / their stake:** 奧地利子網業務(和記線目前沒什麼業務)。
- **How to work with them:** 很少很少接觸;先知道有這個人即可。

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
