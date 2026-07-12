---
type: contact
category: customer
name: Marlene Fantini
employee_id:
aka: 馬蘭妮(舊記 Melanie;ASR 馬來尼/馬蘭妮)
org: Hutchison IOD (base London)
role: Negotiation / pricing lead (under Francesco Zampini)
location:
languages:
email:
relationship: 1
status: active
last_contact: 2026-06-16
tags:
  - contact
---
# Marlene Fantini (馬蘭妮)

## At a glance
- **Role:** Hutchison IOD 談判/壓價窗口 —— 無選型決策權,但負責講價、談判、壓價;匯報 Francesco Zampini(核心選型 decision maker)。下面帶 Mark Williams(home broadband)與 Agostino Ruberto(手機/手錶)。由丁程(程哥)對接(2026-07-10 Ziyi 交接培訓確認)。
- **What they care about / their stake:** Pricing and committed volume — currently weighing the post-increase price.
- **How to work with them:** Awaiting her feedback to ring-fence this-year→next-year volume; watch for room to move on price.

## Background
Customer contact met ~15-16 Jun. Ding Cheng communicated this year's plan and the new (post-increase) pricing; we are waiting on her feedback to lock a this-year→next-year volume commitment. Identify her org and decision role as the relationship develops.

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
