---
name: sync-takeaways
description: Use when Chukwan wants the "What is your take away from today's work (What to sync?)" section of a Daily Operations note filled, or asks what from a day's work is worth syncing into atomic notes. Trigger on "what to sync", "take away of the day", "sync my takeaways", "幫我填今天的 take away / 今天有什麼值得同步".
---

A takeaway is a **claim that survives gate ②(與我何干/何時取用)** from [[Input Pipeline — Raw to Atomic Notes]] — not a summary of the day. The section is a **staging list with routes**, not a license to create notes. Run in order.

## 1. Establish the day + note
- Named date or note → use it; otherwise today: `Operation Note/<D-M-YYYY> Daily Operations.md`. If the note doesn't exist, ask before creating.
- **Completion:** note path known.

## 2. Gather candidates (evidence only)
- Primary: the note's **"What actually happened today"** bullets — open every `[[note]]` they link.
- Also mine: "most challenging part" and "win today" sections (they hold the day's paid-for lesson), and anything the user says in the request.
- If "What actually happened" is empty: offer to run **/fill-daily-log** first; don't reconstruct the day from imagination.
- A candidate = anything today **taught, decided, or produced** that might be needed again.
- **Completion:** candidate list, each pointing at its evidence.

## 3. The gate(閘門 — kill list)
For each candidate try to write ONE line: **論點(自己的話)· 何時取用(具體場景)· [[出處]]**.
- 寫不出「何時取用」= it's a summary line, not a takeaway → **kill it**. Killing most candidates is normal; an empty section beats a padded one.
- **Decided ≠ proposed.** Only distill what actually happened or got decided. A proposal still awaiting sign-off is labelled `待拍板` and phrased as an open question — syncing an unvalidated conclusion as a proven pattern is the exact failure this gate prevents.
- **No invention.** Every tool, number, and name in the line must appear in the day's evidence. If the evidence says "Excel VBA + Outlook", the takeaway does not grow a scheduler, a script, or a percentage.
- **Completion:** every surviving line has 論點 + 何時取用 + [[出處]].

## 4. Route each survivor(行尾標路由)
| 這條是什麼 | Route |
|---|---|
| 可複用論點/做法(常數) | `→ 候選 Skill - <名>` — **不要現在建檔**;站2 紀律:②的場景第二次真的出現才拆進 `Knowledge/Skills/` |
| 事實型 domain knowledge | `→ 留在 [[來源筆記]]`(查詢型,不拆原子) |
| 新想法 / 未驗證 idea | `→ [[Seed Log]]`(格式 `D/M/YYYY -> idea`) |
| 人 / 組織新事實 | `→ 更新 [[聯絡人卡]]`(Relationship Management/) |
| 犯過的錯 + 教訓 | `→ [[Mistakes Log]]` |
| 下週 SCQA 素材 | `→ #scqa-feed`(標在來源筆記) |

## 5. Write the section — and only it
- Fill **only** "What is your take away from today's work (What to sync?)". Keep the user's bilingual voice. ≤6 bullets, grouped: **值得同步 / 留在原地 / Seed**.
- Do NOT edit Seed Log, contact cards, `Knowledge/Skills/`, or any other file — routes are instructions for a follow-up ask, not writes to perform now.
- **Self-catch:** a bullet missing any of 論點 / 何時取用 / [[出處]] / route does not ship.

## Finish
Report in one line: N candidates → M shipped; name what the gate killed and why; flag any route whose target note doesn't exist.
