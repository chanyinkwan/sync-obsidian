---
type: contact
category: internal
name: 明浩
employee_id: "z00591534"
aka: Minghao
aliases: [Minghao, 明浩]
org: Huawei CBG — 大T · Telefonica 系統部
role: Telefonica Account Holder
location:
languages:
email:
relationship: 3
status: active
last_contact:
tags:
  - contact
---
# 明浩 (Minghao)

## At a glance
- **Role:** Telefonica Account Holder
- **What they care about / their stake:** Phone customization alignment across networks.
- **How to work with them:** Fill in remit as I learn it.

## Background
Team member referenced in the 17-Jun download — raised the need to confirm with each network whether **custom phone versions** are required and what group special-support follows. Limited info so far.

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓補充:他是 **Telefonica 系統部主管**,同時嚴格來講是意大利國家的 GTM —— 但**和記意大利的項目他不參與**(與程哥 responsibility overlap + 個人關係上有點 conflict),這部分不用找他;和記意大利有事找 [[Michele Cappabianca 00473733|Michele]],再不行找程哥。

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
