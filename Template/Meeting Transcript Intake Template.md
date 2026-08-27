<%*
const rawTitle = await tp.system.prompt("會議標題 / Meeting title");
if (!rawTitle) { new Notice("已取消 / Cancelled"); return; }
const title = rawTitle.replace(/[\\/:*?"<>|]/g, "-").trim();

const projectFiles = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("Projects/") && !f.path.includes("/Archive/"))
  .sort((a, b) => a.basename.localeCompare(b.basename));
const project = await tp.system.suggester(
  f => f.basename, projectFiles, false, "哪個專案? / Which project?");

const iso = await tp.system.prompt("日期 YYYY-MM-DD", tp.date.now("YYYY-MM-DD"));
const fileDate = tp.date.now("D-M-YYYY", 0, iso, "YYYY-MM-DD");
const projectLine = project ? `\n  - "[[${project.basename}]]"` : "";
const projectLabel = project ? `[[${project.basename}]]` : "未指定";
-%>
---
type: meeting-transcript
status: untidied
date: <% iso %>
projects:<% projectLine %>
account_or_project: 
host: 
attendees: 
absent: 
tags:
  - meeting
  - meeting-transcript
  - untidied
---
# <% title %>

**日期**:<% iso %> · **專案**:<% projectLabel %> · **狀態**:未整理

> 把原始逐字稿貼在下面 → 存檔 → 執行 `/tidy-meeting-transcript`。
> 整理完成後 `status` 會自動變成 `tidied`,這則就會離開 Home 的 Inbox。

## Raw paste
<% tp.file.cursor() %>
<%*
await tp.file.move(`/Operation Note/Meeting Transcript/${fileDate} ${title} - Transcript`);
-%>
