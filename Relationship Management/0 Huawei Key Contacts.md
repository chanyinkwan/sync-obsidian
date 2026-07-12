---
type: contacts-dashboard
status: active
updated: 2026-06-24
hub: "[[Life @Huawei System]]"
tags:
  - dashboard
  - contact
---
# Huawei Key Contacts — CRM Dashboard

> Master view of everyone I work with. Each row is a [[contact]] note. Click in to see their background, last meeting, and open actions.
> Powered by the **Dataview** plugin (Settings → Community plugins → Dataview). If the tables below are blank, Dataview isn't enabled yet.

## Relationship scale(組織關係層級,非親疏度)
| #   | Level                                   | 定義                                |
| --- | --------------------------------------- | --------------------------------- |
| 5   | Inner circle / sponsor                  | 跨職級的信任關係、願意為我背書的人(不限 grade)       |
| 4   | Peers 同級同事                              | 日常協作的同級同事(e.g. Selina、Ziyi、KaiLi) |
| 3   | Direct-manager grade 直屬主管層              | 直接指導/分派工作的一層(e.g. 程哥、明浩)          |
| 2   | Senior leadership 高層                    | 跳級以上、部門負責人(e.g. Tony、Grace)       |
| 1   | External / unknown / C-Level Leadership | 客戶、外部聯絡人、尚未互動或資訊不足                |

## All contacts (by relationship strength)
```dataview
TABLE WITHOUT ID
  link(file.link, default(name, file.name)) AS "Contact",
  category AS "Type",
  role AS "Role",
  relationship AS "Rel (1-5)",
  last_contact AS "Last contact"
FROM #contact
WHERE type = "contact"
SORT relationship DESC
```

## Needs attention (no contact logged yet)
```dataview
TABLE WITHOUT ID link(file.link, default(name, file.name)) AS "Contact", role AS "Role", last_contact AS "Last contact"
FROM #contact
WHERE type = "contact" AND last_contact = null
SORT file.mtime DESC
```

## By segment
```dataview
LIST rows.file.link
FROM #contact
WHERE type = "contact"
GROUP BY category
```

---

