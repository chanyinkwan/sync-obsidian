---
type: skill-note
status: installed
invocation: model-invoked
leading_word:      # TBD（候選:pull / drag / scrape）
source: "[[SA Presales Transition]]"
tags:
  - skill
---
# Skill: Coursera Notes（將已報讀課程嘅 transcript + reading 拉落嚟做本地 markdown 筆記）

> 用途:將一個**已 enroll** 嘅 Coursera 課程,成個抽落嚟變成一個 flat folder 嘅 markdown 檔 —— 每個 video transcript / reading 一個檔,transcript 會 reflow 做可讀段落。跟住就可以喺 Obsidian 度慢慢消化、切 atomic notes。Graded 嘢(quiz / exam / lab)刻意唔落。
> 觸發:同側邊欄講「pull the transcripts」「download this Coursera course」「drag the course into notes」「atomic notes from Coursera」,俾埋 cookies 檔路徑 + 課程 URL。
> 安裝:已安裝為可呼叫 skill(`~/.claude/skills/coursera-notes/`)。**呢個 skill 唔係淨係一個 SKILL.md** —— 真正引擎係 `scripts/coursera_notes.py`(Python,需要 `requests`);SKILL.md 只係操作手冊。搬去第二部機要兩樣一齊搬。本筆記係設計稿與留底,改設計時兩邊要同步。

## SKILL.md(留底;完整安裝需連同 `scripts/coursera_notes.py`）

```markdown
---
name: coursera-notes
description: Use when the user wants to download or scrape a Coursera course's video transcripts and readings into local markdown files for note-taking, given a path to their exported session cookies and one or more course URLs. Triggers include "pull the transcripts", "download this Coursera course", "drag the course into notes", "atomic notes from Coursera".
---

# Coursera Notes

## Overview

Downloads an **enrolled** Coursera course's video transcripts and readings into a flat
folder of markdown files, one file per item, with transcripts reflowed into readable
paragraphs. Graded assessments (quizzes/exams) are intentionally skipped.

Personal-use only: it uses the learner's own exported session cookies to save materials
of a course they are enrolled in, for private note-taking. Files are written locally;
nothing is uploaded.

## When to Use

- User wants Coursera lecture transcripts and/or readings saved as local `.md` notes
- User has (or will export) their Coursera cookies and gives a course URL
- User asks to "pull", "drag", "scrape", or "download" a course for atomic notes

Not for: YouTube (use a YouTube transcript tool), graded quiz answers, or courses the
user is not enrolled in.

## Inputs you need from the user

1. **Cookie file path** — a Netscape `cookies.txt` for `coursera.org`. If the user
   doesn't have one, tell them to export it with the browser extension
   **"Get cookies.txt LOCALLY"** while logged into coursera.org (auto-extraction via
   yt-dlp fails on Chrome/Edge 127+ due to App-Bound Encryption — the extension is the
   reliable path).
2. **One or more course URLs**, e.g.
   `https://www.coursera.org/learn/<slug>/home/module/1`. Bare slugs also work.

## Workflow

1. Confirm the cookie path exists and you have the course URL(s).
2. Run the bundled script with the user's Python (needs the `requests` package):

```bash
python "$HOME/.claude/skills/coursera-notes/scripts/coursera_notes.py" \
  --cookies "/path/to/coursera.org_cookies.txt" \
  "https://www.coursera.org/learn/<slug>/home/module/1"
```

3. Report the per-course counts the script prints (transcripts, readings, skipped).
4. Multiple courses: pass several URLs in one call — they process sequentially.

Output: `<outdir>/<Course_Name>/` (default `outdir` = `~/Desktop`), flat, with
`M#_##_title.md` (videos) and `M#_R##_title.md` (readings). Sorting by filename gives
true course order — a module's videos, then its readings.

## Options

Run `coursera_notes.py --help` for all flags. Common ones:

| Flag | Effect |
|------|--------|
| `--outdir DIR` | Base output directory (default `~/Desktop`) |
| `--no-reflow` | Keep transcripts hard-wrapped as downloaded |
| `--subfolders` | Split into `Transcripts/` and `Readings/` instead of flat |

## What gets skipped (by design)

`staffGraded` (graded quizzes/exams), `gradedLti` (interactive labs), `coach`,
`ungradedWidget`/surveys, `discussionPrompt`. The script prints a count of these.
Do not attempt to bulk-download graded assessment questions/answers.

## Common Mistakes

- **`not authorized (401/403)`** → cookies expired or user not enrolled. Have them
  re-export `cookies.txt` while logged into coursera.org.
- **`no CAUTH cookie found` warning** → the export missed the auth cookie; re-export
  while actually logged in.
- **`requests` missing** → install into the Python being used: `pip install requests`.
- **Wrong slug** → the slug is the segment after `/learn/` in the URL.

## Requirements

Python 3.8+ with the `requests` package. No other dependencies.
```

## 設計筆記(為何這樣寫)

- **Script-backed skill,唔係 prompt-only。** 呢個 skill 同 [[Skill - Fill Daily Log]] 嗰類唔同 —— 佢嘅核心邏輯(登入、行 Coursera API、抽 transcript、reflow、命名)全部落咗喺 `scripts/coursera_notes.py`,SKILL.md 淨係教 model 幾時用、要問用戶攞乜嘢 input、點樣讀 error。咁分嘅原因:抓網站呢種嘢係 deterministic 機械工,俾 script 做又快又穩,唔應該浪費 token 叫 model 逐頁行;model 嘅角色只係 operator —— 收 input、跑 script、翻譯 error message。副作用係「複製 SKILL.md 就裝到」唔再成立,搬機要成個 folder 搬。

- **Cookies 一定要人手 export,唔係偷懶。** 本來想用 yt-dlp 嘅 `--cookies-from-browser` 自動抽,但 Chrome/Edge 127+ 引入咗 App-Bound Encryption,第三方程式解唔到 cookie 加密,自動路線直接死咗。所以 SKILL.md 寫死叫用戶用 **"Get cookies.txt LOCALLY"** extension 手動 export —— 呢句唔係隨便揀嘅建議,係試過先知嘅唯一可靠路線,唔好改返做自動抽。

- **Graded 內容 skip 係原則,唔係做唔到。** `staffGraded` / `gradedLti` / quiz 呢啲唔落,一半係 academic integrity(唔應該 bulk-download 考核題目答案),一半係「呢個 skill 嘅目的係做筆記,唔係做題庫」。SKILL.md 特登寫明 "Do not attempt" —— 將界線寫入 skill 本身,免得將來邊個(包括 model 自己)覺得「順手加埋」。

- **Flat folder + `M#_##` / `M#_R##` 命名 = 檔名排序即係課程次序。** 唔跟 Coursera 嘅 module 樹狀結構開一堆 subfolder,係因為下游用途係「排住隊逐個消化做 atomic notes」—— flat + 檔名自然排序,喺 Obsidian file explorer 度一眼就見到成條 backlog,清一個剷一個。`R` prefix 令同一個 module 嘅 reading 排喺 video 後面,啱返課程本身「睇完片先讀 reading」嘅節奏。想要傳統分類先用 `--subfolders`。

- **Transcript 預設 reflow。** Coursera 俾嘅 transcript 係逐句 hard-wrap,直接睇好散。Script 預設 reflow 做段落,因為呢啲檔嘅用途係「畀人讀完抽 constants」,唔係字幕檔。要保留原始斷行(例如想對返 timestamp)先用 `--no-reflow`。

- **Common Mistakes 段 = error message → 動作對照表。** 401/403、`no CAUTH`、`requests` missing 呢幾個係實際跑過先撞到嘅故障模式,每一個都對應一個明確動作(re-export / pip install / 檢查 slug),等 model 唔使就住 error 亂猜。

## 連結
- 主要用場:[[SA Presales Transition]](AWS SAA 課程消化)
- 參考輸出:[[10 Mental Model of AWS]](`Knowledge/Source/AWS SAA - C03/`)
- 系統中樞:[[Life @Huawei System]]
- 相關 skill:[[Skill - Transcript to Meeting Summary]]（同為「原始 dump → 可讀筆記」型)
