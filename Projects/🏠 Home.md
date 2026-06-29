---
type: dashboard
status: active
hub: "[[Life @Huawei System]]"
tags:
  - dashboard
  - home
---
# 🏠 Home — 指揮儀表板

## ⚡ Quick Access
- 📋 任務主控台(已釘選):[[kanban-default.base]]
- 🧭 戰略地圖:[[Life @Huawei System]]
- 🆕 新會議筆記:[[Meeting Note Template]]
- ▶ 今日操作筆記:
```dataviewjs
const t = dv.luxon.DateTime.now();
const fname = `${t.day}-${t.month}-${t.year} Daily Operations`;
const exists = app.vault.getAbstractFileByPath(`Operation Note/${fname}.md`);
dv.paragraph(exists
  ? `▶ [[${fname}|開啟今日操作筆記]]`
  : `今日筆記尚未建立 → 點左側 ribbon 日曆 icon,或命令面板輸入「Open today's daily note」`);
```

---

## 🔥 On Going Projects
```dataview
TABLE WITHOUT ID file.link AS "專案", domain AS "領域", status AS "狀態", due AS "截止"
FROM "Projects"
WHERE type = "project" AND status = "active"
SORT due ASC
```

## 🗓 Recent Acticities
```dataview
TABLE WITHOUT ID file.link AS "筆記", file.mtime AS "最近編輯"
FROM "Operation Note"
WHERE !contains(file.folder, "Meeting Transcript") AND file.name != "Untitled"
SORT file.mtime DESC
LIMIT 7
```

## ⏸ 暫停 / 已完成專案
```dataview
TABLE WITHOUT ID file.link AS "專案", status AS "狀態"
FROM "Projects"
WHERE type = "project" AND status != "active"
SORT status ASC
```

---
### 純文字 fallback(Dataview 萬一失效時的保險)
- [[FWA Business Development]]
- [[Sample Management Ops]]
- [[Career Hub Management]]
- [[Mistakes Log]]
