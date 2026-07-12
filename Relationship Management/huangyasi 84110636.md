---
type: contact
category: hq
name: huangyasi
employee_id: "84110636"
aka:
org: Huawei 總部機關(GTM / 樣機挪貨)
role: 樣機挪貨負責人(HQ)
location:
languages: Mandarin
email:
relationship: 3
status: active
last_contact: 2026-06-24
tags:
  - contact
  - sample-resource
---
# huangyasi · 84110636

## At a glance
- **Role:** 總部機關負責 Pura 90 樣機挪貨/審批;掌握歐盟版與海外通用版的庫存。
- **What they care about / their stake:** 各國額度分配、庫存控管、挪貨合規。
- **How to work with them:** 先確認庫存與口徑(歐盟版 vs 海外通用版);海外通用版只能人肉帶、不能 PO 直寄。

## Background
2026-06-24 通話:Pura 90 **歐盟版已無庫存**(額度已分各國);**海外通用版剩 1 台現貨**,但需從國內人肉帶過來。為最終可挪到貨的關鍵窗口。

2026-07-10 [[Ziyi Zhang 84434577|Ziyi]] 交接培訓更新:她是本單 Pura 90 的「**備貨接口人確認**」節點處理人(每個產品的接口人不同 —— 她之前好像管耳機;CPE 大概率是 [[Li Jin 00592466|李靜]])。現況:**有貨但她主管不放行** —— 主管要等 **7/14(下週二)發布會**後看輿情(尤其歐洲法規風險)再決定發貨。待辦:① 請她把庫存那台**留住不要分給別人**;② 7/14 後找她主管確認能否發;特別急則問主管走什麼特殊審批(可能到曾黎甚至更上)。她批完後流程到**東莞庫房**(非深圳)→ 物流,單號可在「物流查詢系統」查。

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
