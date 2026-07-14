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
- Seed log [[Seed Log]]
- ▶ 今日操作筆記:
```dataviewjs
const t = dv.luxon.DateTime.now();
const fname = `${t.day}-${t.month}-${t.year} Daily Operations`;
const exists = app.vault.getAbstractFileByPath(`Operation Note/${fname}.md`);
dv.paragraph(exists
  ? `▶ [[${fname}|開啟今日操作筆記]]`
  : `今日筆記尚未建立 → 點左側 ribbon 日曆 icon,或命令面板輸入「Open today's daily note」`);
```
```dataviewjs
const now = dv.luxon.DateTime.now();
const exam = dv.luxon.DateTime.fromISO("2026-08-23T12:00:00");
const today = now.startOf("day");
const examDay = exam.startOf("day");
const diff = Math.floor(examDay.diff(today, "days").days);
let line;
if (diff < 0) {
  line = "🎯 AWS SAA-C03 · 2026-08-23 12:00 BST · 已考完";
} else if (diff === 0) {
  line = "🎯 AWS SAA-C03 · 2026-08-23 12:00 BST · EXAM TODAY";
} else {
  line = "🎯 AWS SAA-C03 · 2026-08-23 12:00 BST · T-" + diff + " 天";
}
dv.paragraph(line);
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
