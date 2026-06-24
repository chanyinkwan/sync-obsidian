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

## Needs attention (no contact logged / weak ties)
```dataview
TABLE WITHOUT ID link(file.link, default(name, file.name)) AS "Contact", last_contact AS "Last contact"
FROM #contact
WHERE type = "contact" AND (last_contact = null OR relationship <= 2)
SORT last_contact ASC
```

## By segment
```dataview
LIST rows.file.link
FROM #contact
WHERE type = "contact"
GROUP BY category
```

---

