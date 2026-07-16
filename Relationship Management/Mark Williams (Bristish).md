---
type: contact
category: customer
name: Mark Williams
employee_id:
aka:
org: Hutchison IOD (base London)
role: Home broadband 選型(under Marlene Fantini)
location: London
languages: English
email:
relationship:
status: active
last_contact:
tags:
  - contact
---
# Mark Williams

## At a glance
- **Role:** 英國人,[[Melanie Fantini 馬蘭妮|Marlene Fantini]] 之下,管所有 **home broadband** 這塊的選型。
- **What they care about / their stake:** Home broadband 品類選型。
- **How to work with them:** **[[Huang Yi 84411269 (Selina)|Selina]] 對接**(Agostino 和 Mark 都是 Selina 負責)。

## Background
2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓:客戶鏈 Canning Fok → Dennis Lui → Joe Parker → Francesco Zampini → Marlene Fantini → **Mark Williams** / Agostino Ruberto。

## Strategic account intel (Relationship Map · 15-7-2026)
> Source: [[Huawei_Strategic_Key_Account_Relationship_Mapping_v1 (15-7-2026)]] (§1.4 / §2.1.4).
- **Position:** Sr. Vendor Manager (MBB), CKH-IOD.
- **Influence level:** Medium. · **Huawei relationship status:** Medium. · **Huawei sponsor:** [[Huang Yi 84411269 (Selina)]].
- **Role in decision chain (L4):** RFI process management, quotation review (Influencer, Champion).

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
