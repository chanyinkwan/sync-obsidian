# Amazon GTM Cockpit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the daily Operation Note into a single Amazon GTM cockpit — untriaged inbox, drag-and-drop Eisenhower board, ball-in-their-court strip, and the fixed operational cadence — with stakeholder reads living on contact cards.

**Architecture:** No code and no new plugins. Everything is Obsidian configuration: four new TaskNotes `userFields`, one `.base` file holding five views, two template rewrites, and a set of seeded recurring task notes. The daily note embeds the base views by reference, so one view definition renders in every day's note without duplication.

**Tech Stack:** Obsidian 1.12.2+ · Bases (core) · TaskNotes 4.11.1 · Dataview · Templater

## Global Constraints

- **Obsidian must be fully closed before editing any file under `.obsidian/`.** TaskNotes holds `data.json` in memory and rewrites it on exit, silently discarding hand edits. Every task that touches `.obsidian/` says so again in its steps.
- Corporate data never enters the vault. `Handover book.xlsx`, `2026年 亚马逊MBB价格及销毛 v3.xlsx`, `AMZ MBB量价模拟 V4.xlsx`, and the roadmap 產品包 are linked, never copied.
- No new community plugins.
- `Projects/🏠 Home.md` is not modified. It stays the strategic layer above the daily note.
- Field keys are exactly: `eisenhower`, `waiting_on`, `nudged`, `stakeholders`. Existing keys `assigned_by` and `source` are kept unchanged.
- Quadrant values are exactly `q1` `q2` `q3` `q4`. No other spellings.
- Context values are exactly `@roadmap` `@pricing` `@launch` `@competitor` `@ops` `@sample` `@logistics`.
- Every task ends with a verification performed in Obsidian with the app open, and a git commit.
- Back up before the first `.obsidian/` edit: `git add -A && git commit` so any bad JSON edit is one `git checkout` away.

## File Structure

| File | Responsibility |
|---|---|
| `.obsidian/plugins/tasknotes/data.json` | field definitions, priority weights, NLP triggers, body-template switch |
| `.obsidian/hotkeys.json` | Instant Convert binding |
| `TaskNotes/Views/*.base` (7 existing) | priority formula fix only |
| `TaskNotes/Views/Operation.base` | **new** — the five cockpit views, single source of truth |
| `Template/Task Body Template.md` | **new** — enrichment prompts injected into every new task |
| `Template/Contact Template.md` | gains the stakeholder read section and owes-me query |
| `Template/Daily Operations Template.md` | gains the embedded cockpit above the reflection questions |
| `Relationship Management/*.md` | 3 new cards, 5 cards gain reads |
| `Tasks/*.md` | 7 recurring cadence tasks, 1 parent + 3 children for E6898 |

---

### Task 1: Fix the broken priority sort

The `priorityWeight` formula in every base tests for `none`/`low`/`normal`/`high`, but `customPriorities` actually uses `high`/`mid`/`low`. `mid` matches nothing and falls through to the `999` catch-all, so mid-priority tasks currently sort **above** high-priority ones in every view sorted by `formula.urgencyScore`. The board is worthless until this is right.

**Files:**
- Modify: `TaskNotes/Views/agenda-default.base`, `calendar-default.base`, `kanban-default.base`, `mini-calendar-default.base`, `pomodoro-stats.base`, `relationships.base`, `tasks-default.base` (line 1 of the `formulas:` block in each)
- Modify: `.obsidian/plugins/tasknotes/data.json` (`customPriorities` weights)

**Interfaces:**
- Consumes: nothing
- Produces: `formula.priorityWeight` returning 3/2/1 for high/mid/low across all bases. Task 3 sorts by `formula.urgencyScore`, which depends on this.

- [ ] **Step 1: Commit a clean baseline**

```bash
cd "C:/Users/k84450674/Desktop/Career Journey"
git add -A && git commit -m "chore: baseline before cockpit build"
```

- [ ] **Step 2: Observe the bug before fixing it**

With Obsidian open, open `TaskNotes/Views/tasks-default.base` → the "Not Blocked" view (it sorts by `formula.urgencyScore` descending). Note the order of the top five tasks and whether any `mid` priority task sits above a `high` one. Write down what you see — this is the before state.

- [ ] **Step 3: Close Obsidian completely**

Quit the app, do not just close the window. Confirm no `Obsidian.exe` remains in Task Manager.

- [ ] **Step 4: Replace the formula in all seven base files**

```bash
cd "C:/Users/k84450674/Desktop/Career Journey"
python - <<'PY'
import io, glob
old = 'priorityWeight: if(priority=="none",0,if(priority=="low",1,if(priority=="normal",2,if(priority=="high",3,999))))'
new = 'priorityWeight: if(priority=="low",1,if(priority=="mid",2,if(priority=="high",3,0)))'
for p in glob.glob("TaskNotes/Views/*.base"):
    t = io.open(p, encoding="utf-8").read()
    if old in t:
        io.open(p, "w", encoding="utf-8", newline="\n").write(t.replace(old, new))
        print("fixed", p)
    else:
        print("SKIP (formula absent)", p)
PY
```

Expected: seven `fixed` lines. Any `SKIP` means that file's formula differs — open it and fix by hand rather than guessing.

- [ ] **Step 5: Correct the priority weights**

Reopen Obsidian, go to Settings → TaskNotes → Task Properties → Priorities. Sort any view by priority and observe whether higher weight sorts first. `customPriorities` currently has `high` at weight 0 and `low` at weight 2, which reads inverted. If the observation confirms higher weight means higher priority, set high=2, mid=1, low=0 **through the settings UI, not by editing JSON**, so the plugin writes it itself. If the observation shows the opposite, leave the weights alone and record why in the commit message.

- [ ] **Step 6: Verify the fix**

Reopen the same "Not Blocked" view from Step 2. Expected: no `mid` task appears above a `high` task with a comparable date. Compare against the before state you wrote down.

- [ ] **Step 7: Commit**

```bash
git add TaskNotes/Views/ .obsidian/plugins/tasknotes/data.json
git commit -m "fix: priorityWeight tested values customPriorities never uses

Formula tested for none/low/normal/high; actual values are high/mid/low,
so mid fell through to the 999 catch-all and outranked high everywhere
urgencyScore was the sort key."
```

---

### Task 2: Add the four user fields

**Files:**
- Modify: `.obsidian/plugins/tasknotes/data.json` — `userFields` array and `nlpTriggers`

**Interfaces:**
- Consumes: nothing
- Produces: frontmatter keys `eisenhower` (text), `waiting_on` (list), `nudged` (date), `stakeholders` (list), available to every filter and view built in Task 3 and to the dataview query in Task 5.

- [ ] **Step 1: Confirm the two existing fields survive**

Open Settings → TaskNotes → Task Properties → User Fields. Expected to see exactly two: **Assigned by** (`assigned_by`, text) and **Source** (`source`, text). These are kept. If they are missing, stop — something has already overwritten the config, and Task 1's baseline commit needs restoring first.

- [ ] **Step 2: Add the four fields through the settings UI**

Add each with **Add user field**, using these exact display names, keys, and types:

| Display name | Key | Type |
|---|---|---|
| Quadrant | `eisenhower` | text |
| Waiting on | `waiting_on` | list |
| Last nudged | `nudged` | date |
| Stakeholders | `stakeholders` | list |

Use the UI rather than editing JSON — TaskNotes generates an internal `field_<timestamp>` id for each, and a hand-written field without one is ignored.

- [ ] **Step 3: Enable the priority NLP trigger**

Settings → TaskNotes → Natural Language Input. The `!` trigger for priority is currently `enabled: false`. Turn it on. This makes `!high` work in quick-add alongside the already-enabled `#` tags, `@` contexts, `+` projects, `*` status.

- [ ] **Step 4: Verify by creating a throwaway task**

Quick-add: `zzz test task tomorrow +Amazon take over @pricing !high`

Open the created note in `Tasks/`. Expected frontmatter: `projects` contains `[[Amazon take over]]`, `contexts` contains `pricing`, `priority: high`, `due` or `scheduled` set to tomorrow. Then open it in the TaskNotes edit modal and confirm all four new fields appear and accept values. Set `eisenhower: q1` and `waiting_on: [[Ziyi Zhang 84434577]]`, save, and confirm both persisted to frontmatter.

- [ ] **Step 5: Delete the throwaway task and commit**

```bash
rm Tasks/*zzz*test*task*.md
git add .obsidian/plugins/tasknotes/data.json
git commit -m "feat: add eisenhower, waiting_on, nudged, stakeholders task fields"
```

---

### Task 3: Build the cockpit base

The riskiest task, so it starts with a five-minute spike. TaskNotes' Kanban `groupBy` is confirmed to work on `status` (the existing `kanban-default.base` proves it). Whether it accepts a **user field** is unverified. Everything else in the plan works either way; only the drag axis depends on the answer.

**Files:**
- Create: `TaskNotes/Views/Operation.base`

**Interfaces:**
- Consumes: `eisenhower`, `waiting_on`, `nudged`, `contexts`, `projects` from Task 2; `formula.priorityWeight` from Task 1.
- Produces: five named views embedded by Task 6 as `![[Operation.base#<View name>]]`. The exact view names other tasks depend on: `Inbox`, `Board`, `Ball in their court`, `This week`, `This month`.

- [ ] **Step 1: Spike — can Kanban group by a user field?**

Create a scratch file `TaskNotes/Views/spike.base`:

```yaml
filters:
  and:
    - file.hasTag("task")
views:
  - type: tasknotesKanban
    name: Spike
    groupBy:
      property: eisenhower
      direction: ASC
```

Open it in Obsidian. Set `eisenhower: q1` on one task and `q2` on another via the edit modal.

**Expected if supported:** two columns appear, and dragging a card from one to the other rewrites its `eisenhower` frontmatter. Verify by reopening the task file after the drag.

**If unsupported** (no columns, or drag does not persist): the board falls back to four stacked `tasknotesTaskList` views, one per quadrant, filtered on `eisenhower == "q1"` and so on. Reclassification then happens in the edit modal instead of by dragging, and drag-to-reorder still works within a quadrant. Record which path you took at the top of the base file as a comment — Task 6 embeds either shape identically.

Delete `spike.base` before continuing.

- [ ] **Step 2: Write the base file**

Create `TaskNotes/Views/Operation.base`. Copy the entire `formulas:` block verbatim from `TaskNotes/Views/tasks-default.base` (it is long and shared by every base in this vault; retyping it invites divergence), then add these two formulas to the end of that block:

```yaml
  daysSinceNudged: if((nudged.isEmpty() == false), ((number(today()) - number(date(nudged))) / 86400000).floor(), null)
  isStale: (nudged.isEmpty() == false) && date(nudged) < (today() - "3 days")
```

Then use this top-level filter and these five views:

```yaml
filters:
  and:
    - file.hasTag("task")
views:
  - type: tasknotesTaskList
    name: Inbox
    filters:
      and:
        - status != "done"
        - eisenhower.isEmpty()
    sort:
      - property: file.ctime
        direction: DESC

  - type: tasknotesKanban
    name: Board
    filters:
      and:
        - status != "done"
        - eisenhower.isEmpty() == false
    groupBy:
      property: eisenhower
      direction: ASC
    sort:
      - property: tasknotes_manual_order
        direction: DESC
    options:
      columnWidth: 280
      hideEmptyColumns: false

  - type: tasknotesTaskList
    name: Ball in their court
    filters:
      and:
        - status != "done"
        - waiting_on.isEmpty() == false
    groupBy:
      property: waiting_on
      direction: ASC
    sort:
      - property: nudged
        direction: ASC

  - type: tasknotesTaskList
    name: This week
    filters:
      and:
        - or:
            - and:
                - recurrence.isEmpty()
                - status != "done"
            - and:
                - recurrence.isEmpty() == false
                - complete_instances.map(date(value).format("YYYY-MM-DD")).contains(today().format("YYYY-MM-DD")) != true
        - or:
            - and:
                - due.isEmpty() == false
                - date(due).format("YYYY-MM-DD") <= (today() + "7 days").format("YYYY-MM-DD")
            - and:
                - scheduled.isEmpty() == false
                - date(scheduled).format("YYYY-MM-DD") <= (today() + "7 days").format("YYYY-MM-DD")
    sort:
      - property: formula.urgencyScore
        direction: DESC

  - type: tasknotesTaskList
    name: This month
    filters:
      and:
        - status != "done"
        - or:
            - and:
                - due.isEmpty() == false
                - date(due).format("YYYY-MM") == today().format("YYYY-MM")
            - and:
                - scheduled.isEmpty() == false
                - date(scheduled).format("YYYY-MM") == today().format("YYYY-MM")
    sort:
      - property: due
        direction: ASC
```

Note `q1`–`q4` sort ascending as plain strings, which puts urgent+important leftmost. That is why the values are `q1`..`q4` and not `urgent-important` and friends.

- [ ] **Step 3: Verify each view renders**

Open `Operation.base` in Obsidian and click through all five view tabs.

Expected: no error banner on any tab. `Inbox` shows the tasks you have with no quadrant set. `Board` shows one column per distinct `eisenhower` value in use. `Ball in their court` is empty for now (nothing has `waiting_on` yet) — that is correct, and Task 8 fills it.

If a view errors, the cause is almost always a property name typo or a filter referencing a field Task 2 did not create. Check the field key spelling against Settings → TaskNotes → User Fields.

- [ ] **Step 4: Verify the base is vault-wide, not Amazon-only**

There is deliberately no project filter at the top level. This is the operations cockpit for everything, not an Amazon dashboard — Amazon MBB, Sample Ops, SA Presales Transition, and AWS study all surface in one place, which is the whole point of not having two homes.

Confirm that tasks from at least two different projects appear across the five views. Then confirm scoping still works when you want it: add `projects.contains(link("Projects/Amazon take over"))` to the Board view's filter temporarily, verify only Amazon tasks remain, then remove it again.

- [ ] **Step 5: Commit**

```bash
git add "TaskNotes/Views/Operation.base"
git commit -m "feat: add Amazon GTM base with inbox, board, waiting-on, week and month views"
```

---

### Task 4: Turn on the enrichment body template

**Files:**
- Create: `Template/Task Body Template.md`
- Modify: `.obsidian/plugins/tasknotes/data.json` — `taskCreationDefaults.useBodyTemplate` and `.bodyTemplate`

**Interfaces:**
- Consumes: nothing
- Produces: every new task note opens with the four enrichment headings. Task 8 fills them for E6898.

- [ ] **Step 1: Create the template file**

Create `Template/Task Body Template.md` with exactly this content:

```markdown
## Ask as received
> verbatim, including who said it, where, and when

## Missing detail
- [ ]

## Who holds what
| Who | What they hold on THIS task | Delta from usual stance |
|-----|-----------------------------|-------------------------|

## Next move
```

There is deliberately no stakeholder analysis table here. Per the spec, the durable read lives on the contact card (Task 5) and is never retyped per task. The right-hand column is filled only when someone behaves off-pattern.

- [ ] **Step 2: Point TaskNotes at it**

Settings → TaskNotes → Task Creation Defaults. Enable **Use body template** and set the path to `Template/Task Body Template.md`. Use the settings UI, not a JSON edit.

- [ ] **Step 3: Verify**

Quick-add a throwaway task: `zzz template check +Amazon take over @ops`

Open it. Expected: all four headings present in the body, the three-column table intact, and the frontmatter still carrying `projects` and `contexts`.

- [ ] **Step 4: Delete the throwaway and commit**

```bash
rm Tasks/*zzz*template*check*.md
git add "Template/Task Body Template.md" .obsidian/plugins/tasknotes/data.json
git commit -m "feat: enrichment body template on every new task"
```

---

### Task 5: Put the stakeholder read on contact cards

**Files:**
- Modify: `Template/Contact Template.md`
- Modify: `Relationship Management/Liu Zhou 00542940.md`, `Huang Yi 84411269 (Selina).md`, `Ding Cheng 00611102 (程哥or 丁程).md`, `yubeifei y00663235.md`, `Li Qinghua 00861267.md`, `Zhang Xuan 00942107.md`
- Create: `Relationship Management/Zhang Cheng 00500696.md`, `Meng Qingping 84291389.md`, `Jin Zhe 00837646.md`

**Interfaces:**
- Consumes: `waiting_on` and `nudged` from Task 2.
- Produces: contact cards carrying `decision_rights`, `incentive`, `default_stance`, `unlocks`, `escalation` frontmatter plus a `## Stakeholder read` body section. Task 8's E6898 tasks link to these cards instead of restating them.

- [ ] **Step 1: Extend the contact template frontmatter**

In `Template/Contact Template.md`, add these five keys after `relationship:` (line 12):

```yaml
decision_rights:  # what they can actually decide, vs only influence
incentive:        # what they are measured on
default_stance:   # where they start before you say anything
unlocks:          # what gets a yes out of them
escalation:       # who overrides them
```

- [ ] **Step 2: Add the read section to the template body**

In the same file, insert this directly after the `## At a glance` block (after line 23, before `## Background`):

````markdown
## Stakeholder read
- **Decides:** 
- **Only influences:** 
- **Measured on:** 
- **Default stance:** 
- **What gets a yes:** 
- **Escalates to:** 
- **Observed pattern:** <!-- append-only, dated one-liners from real interactions -->

### Balls currently in their court
```dataview
TABLE WITHOUT ID file.link AS "Task", due AS "Due", nudged AS "Last nudged"
FROM #task
WHERE contains(waiting_on, this.file.link) AND status != "done"
SORT nudged ASC
```
````

This query is the exact reverse of the cockpit's Ball-in-their-court view. The cockpit asks "who owes me things"; the card asks "what does this one person owe me". Same data, both directions, written once.

- [ ] **Step 3: Create the three missing cards**

Create each from the updated template. Fill only what is actually known from the E6898 email — leave the rest blank rather than inventing it. Guessing a stance you have not observed is worse than an empty field, because you will act on it.

`Relationship Management/Zhang Cheng 00500696.md`:
```yaml
type: contact
category: internal
name: Zhang Cheng
employee_id: "00500696"
aka: 张程
org: 交付
role: 交付評估
decision_rights: whether Plan A (air freight to a non-EU destination) is feasible
default_stance: unknown — first interaction
```
Body, under Stakeholder read → **Observed pattern:** `2026-08-06 first contact, via 程哥's E6898 sample task. No pattern yet.`

`Relationship Management/Meng Qingping 84291389.md`:
```yaml
type: contact
category: internal
name: Meng Qingping
employee_id: "84291389"
aka: 蒙清萍
role: 樣機發貨安排
decision_rights: none — executes shipping once given an address and a date
unlocks: a confirmed destination city and date
```

`Relationship Management/Jin Zhe 00837646.md`:
```yaml
type: contact
category: internal
name: Jin Zhe
employee_id: "00837646"
aka: 金哲
org: 地區部
role: Plan C 評估(歐盟內轉運)
decision_rights: whether the Italy routing is viable
default_stance: unknown; 地區部統一跟進 means low urgency by default
```

- [ ] **Step 4: Backfill the reads that are already written**

Amazon Operations Glossary §1 already contains the durable read for the core cast. This step is transcription, not analysis. Fill the `## Stakeholder read` section on each existing card:

**`yubeifei y00663235.md` (俞碧斐, 歐洲 MBB 產品 GTM)**
- Decides: which products go on next year's roadmap, and how supply is allocated
- Only influences: MOQ floors and marketing budget — she can go and get them, she does not hold them
- Measured on: moving the full European MBB portfolio, including products that are hard to sell
- Default stance: at year-end planning, pushing products Kess may not want to sell
- What gets a yes: an evidenced "I cannot sell this at MOQ 500" paired with a specific ask (drop MOQ to 100, or fund marketing)
- Escalates to: 地區部

**`Li Qinghua 00861267.md` (李清華)**
- Decides: approve or reject every on-top price request from the countries
- Default stance: gatekeeping — she sees the requests directly, and as of now Kess is not in that loop
- What gets a yes: agreement from her or 碧斐 *before* the request is raised, when breaking the 大促 floor
- Observed pattern: `2026-08-06 Kess is not currently in steps 4–6 of the pricing chain; joining requires asking.`

**`Zhang Xuan 00942107.md` (張炫)**
- Decides: router pricing and new-SKU questions; took router directly after 齊軒 left
- Only influences: MBB — not his category
- Escalates to: 地區部
- Observed pattern: `2026-08-06 confirmed as both 齊軒's manager and the router owner. Do not confuse with 張銉 (機關, router/XG materials) — different person.`

**`Ding Cheng 00611102 (程哥or 丁程).md` (程哥)**
- Decides: what lands on Kess's desk; account-level priorities
- Default stance: assigns by email or verbally with the deliverable shape left unstated
- What gets a yes: proposing the output format yourself rather than asking what he wants
- Observed pattern: `2026-08-06 asked for "familiarise with Huawei's in-market products + output materials" without specifying the artefact. Ziyi's read: start from the MBB category roadmap 產品包 and the 和記 competitor material.`

**`Liu Zhou 00542940.md` (劉晝)**
- Decides: whether Plan B's international leg can board
- Only influences: the domestic leg, which is blocked outright by the missing 3C certification
- What gets a yes: he is the most reachable person in 機關 — small questions can go to him directly
- Observed pattern: `2026-07-10 (Ziyi handover) responsibilities overlap with others; if one person is unreachable, go to the next.`

**`Huang Yi 84411269 (Selina).md`**
- Decides: nothing on E6898 — she would be doing a favour, not a duty
- What gets a yes: asking early, and asking politely; she needs her flight city and date requested well before 8.18

- [ ] **Step 5: Verify the reverse query**

Open any of the six cards. The **Balls currently in their court** table renders empty for now — correct, since no task has `waiting_on` set yet. Confirm it renders as an empty table rather than a Dataview error. A red error box means the query is malformed; an empty table means it works.

- [ ] **Step 6: Commit**

```bash
git add "Template/Contact Template.md" "Relationship Management/"
git commit -m "feat: stakeholder read lives on contact cards, not tasks

Adds decision_rights/incentive/default_stance/unlocks/escalation to the
contact template plus a reverse dataview showing what each person owes.
Backfills the six-person Amazon cast from Amazon Operations Glossary S1
and creates cards for the three people on the E6898 sample task."
```

---

### Task 6: Rewrite the daily note into the cockpit

**Files:**
- Modify: `Template/Daily Operations Template.md`

**Interfaces:**
- Consumes: the five view names from Task 3 — `Inbox`, `Board`, `Ball in their court`, `This week`, `This month`.
- Produces: the single daily surface. Nothing consumes it.

- [ ] **Step 1: Confirm base embeds work at all**

In any scratch note, type `![[Operation.base#Inbox]]` and switch to reading view. Expected: the Inbox view renders inline.

If it renders as a broken link, this Obsidian build wants the fenced form instead:

````
```base
file: TaskNotes/Views/Operation.base
view: Inbox
```
````

Establish which of the two works **before** writing the template, and use that form consistently in Step 2. Delete the scratch note.

- [ ] **Step 2: Rewrite the template**

Replace lines 11–23 of `Template/Daily Operations Template.md` — the whole `### Today's linked tasks` block from `<!-- daily-plan:start -->` through the `---` on line 23 — with the cockpit. Keep the frontmatter (lines 1–7), the title and Day-counter line (lines 8–9), and every reflection heading from line 24 down, unchanged.

```markdown
## 📥 Inbox — untriaged
![[Operation.base#Inbox]]

## 🎯 Board
![[Operation.base#Board]]

> 🔴 q1 urgent+important · 🟠 q2 important · 🟡 q3 urgent · ⚪ q4 neither
> Drag a card between columns to reclassify it.

## ⏳ Ball in their court
![[Operation.base#Ball in their court]]

## 🗓 Cadence
![[Operation.base#This week]]
![[Operation.base#This month]]

---

### Today's linked tasks
<!-- daily-plan:start -->
#### ⚔️ Work (防守) — max 5
- 

#### 🚀 Hub (進攻) — max 5
- 

> ⏳ Preserve ≥20% strategic blank space.
<!-- daily-plan:end -->

---
```

Inbox sits above the board deliberately: untriaged items are the failure mode this system exists to fix, so they are the first thing seen.

The `daily-plan` block is kept and moved below the cockpit. The `fill-daily-log` and `plan-daily-ops` skills both write into those markers, and removing them would break both.

- [ ] **Step 3: Verify against a real day**

Create tomorrow's daily note (command palette → "Open next day's daily note", or the calendar ribbon). Expected in reading view: five embedded views render, the legend line shows, the `daily-plan` markers are intact below them, and all six reflection headings survive at the bottom.

- [ ] **Step 4: Verify nothing downstream broke**

Open `Operation Note/5-8-2026 Daily Operations.md` — an existing note written against the old template. It must be unaffected; templates apply at creation only. Then confirm `Projects/🏠 Home.md` still renders its four dataview blocks.

- [ ] **Step 5: Commit**

```bash
git add "Template/Daily Operations Template.md"
git commit -m "feat: daily Operation Note becomes the Amazon GTM cockpit"
```

---

### Task 7: Seed the recurring cadence

This is what makes the project/operation boundary disappear. Anything with `recurrence` set is an operation and surfaces on its own date; anything else with an end state is a project. No third bucket, nothing reclassified later.

**Files:**
- Create: seven task notes in `Tasks/`

**Interfaces:**
- Consumes: contexts from Task 2, the `This week` / `This month` views from Task 3.
- Produces: recurring instances that populate the cadence strip.

- [ ] **Step 1: Create the seven recurring tasks**

Create each via the TaskNotes modal so `recurrence` is written in the plugin's own format. All seven get `projects: [[Amazon take over]]` — that is how they stay identifiable as Amazon cadence inside a vault-wide board. Content is from Amazon Operations Glossary §8.

| Title | Recurrence | Context | Priority |
|---|---|---|---|
| 巡店 — 5 國逐產品檢查 | daily, weekdays | `@ops` | high |
| 補上週實際 SO + 更新週度價格/銷量預測/days of stock (CPFR 3+3) | weekly, Monday | `@ops` | high |
| Delivery Tracker 實際運輸/SI 同步到品類預測表 | every 2 weeks | `@ops` | mid |
| 對下個月 offer 計劃 + 出各國價格指引 | monthly, day 10 | `@pricing` | high |
| 上月競品數據整理 + competitor list 交 traffic manager | monthly, day 1 | `@competitor` | mid |
| Review launch plan + 與 Amazon 團隊鎖資源 | quarterly | `@launch` | mid |
| 明年路標 + SKU 級收入/發貨量預測 + 通知 EOL 型號 + 自己那版 BP | yearly, 1 November | `@roadmap` | high |

- [ ] **Step 2: Write the body of the two that carry real rules**

For **巡店**, replace the body's `## Missing detail` section with the checklist, since this one runs every day and the detail is already known:

```markdown
## Per country (UK / 德 / 法 / 意 / 西 — 荷蘭量小可略)
- [ ] 是否下架
- [ ] Buy Box 是否被搶
- [ ] 實際價格 vs 設計價
- [ ] deal 小標籤有沒有出
- [ ] 划線價劃了多少
```

For **competitor list**, record the rule that stops needless work:

```markdown
## Rule
沒有變化就不用交。有變化只告訴 traffic manager 新增或減少了哪個產品。

## Method (Ziyi's flow)
1. SellerSprite 匯出上月各國 BSR 前 100
2. VLOOKUP 對回既有檔位對應表,補新型號
3. 篩出目標檔位在售清單,排除二手
4. 交 traffic manager
```

- [ ] **Step 3: Verify they land in the cadence strip**

Open today's daily note. Expected: 巡店 appears under `This week`; the monthly items appear under `This month` when their date falls in the current month. Complete 巡店 for today and confirm it disappears from today's view but still exists as a task — recurring completion writes to `complete_instances` rather than setting `status: done`.

- [ ] **Step 4: Commit**

```bash
git add Tasks/
git commit -m "feat: seed the seven recurring Amazon cadence tasks"
```

---

### Task 8: Load E6898 as the first real work

The first genuine load, and the test of whether the multi-plan pattern holds. Three mutually exclusive plans, three owners, three deadlines, and an automatic fallback chain.

**Files:**
- Create: `Tasks/E6898 樣機運抵英國.md` and three child task notes

**Interfaces:**
- Consumes: everything from Tasks 2–7.
- Produces: the first non-empty `Ball in their court` view and the first populated card queries from Task 5.

- [ ] **Step 1: Create the parent**

```yaml
title: E6898 樣機運抵英國 (2台)
status: doing
priority: high
eisenhower: q1
projects: ["[[Sample Management Ops]]", "[[Amazon take over]]"]
contexts: ["sample", "logistics"]
assigned_by: "[[Ding Cheng 00611102 (程哥or 丁程)]]"
source: email
due: 2026-08-18
stakeholders: ["[[Zhang Cheng 00500696]]", "[[Liu Zhou 00542940]]", "[[Meng Qingping 84291389]]", "[[Jin Zhe 00837646]]", "[[Huang Yi 84411269 (Selina)]]", "[[Ding Cheng 00611102 (程哥or 丁程)]]"]
```

Body: paste the request verbatim under `## Ask as received`, including 單號 `A010202606110024` and the three-plan table.

- [ ] **Step 2: Fill the parent's Missing detail section**

These three gaps are the reason enrichment is worth ninety seconds. None of them is assigned to anyone in the original email:

```markdown
## Missing detail
- [ ] **Plan B has an unowned critical path.** It needs Selina's and 程哥's international departure city and date before 蒙清萍 can ship anything. Nobody in the plan table owns getting that. If it arrives on 8.15 the plan is dead. → mine to chase, this week.
- [ ] **The 8.18 deadline has no stated cause.** E6898 launch is already pushed to ~2027 Q1 (battery spec failed, requires re-initiation — Amazon Operations Glossary §6), so 8.18 is driven by something else. Without knowing what, Plan C's cost cannot be argued for or against. → ask 程哥.
- [ ] **Plan A and Plan B are being evaluated by two people who are not talking.** 张程 on air freight, 刘宙 on carry-on. Risk is one idling while waiting on the other's answer. → tell each that the other is running in parallel.
```

- [ ] **Step 3: Create the three children**

Each with `projects: [[Sample Management Ops]]` and the parent as its project or parent task, per whichever linking TaskNotes offers in the modal.

| Title | `waiting_on` | `due` | `eisenhower` | `status` |
|---|---|---|---|---|
| Plan A · 空運寄到英國 (非歐盟) | `[[Zhang Cheng 00500696]]` | 2026-08-14 | q1 | doing |
| Plan B · 人工登機行李攜帶 | `[[Liu Zhou 00542940]]`, `[[Meng Qingping 84291389]]` | 2026-08-18 | q1 | doing |
| Plan C · 歐盟內發意大利再帶到英國 | `[[Jin Zhe 00837646]]` | *(none)* | q4 | hold |

Set `nudged: 2026-08-06` on Plan A and Plan B. Leave it empty on Plan C.

Plan B's body notes: domestic leg blocked outright (no 3C certification); only the international leg is under evaluation; latest ship date 2026-08-19.

Plan C's body notes: activates automatically only if A and B are both confirmed impossible; highest cost, longest evaluation cycle; 地區部統一跟進, no DDL given.

- [ ] **Step 4: Verify the whole cockpit end to end**

Open today's daily note:

1. **Inbox** — empty, or contains only genuinely untriaged items. The four E6898 tasks must *not* appear here; they all have quadrants.
2. **Board** — Plan A and Plan B in the q1 column, parent in q1, Plan C **absent** (it is `hold`, so `status != "done"` still admits it — if Plan C shows up, add `status != "hold"` to the Board filter and re-verify).
3. **Ball in their court** — three groups: 张程, 刘宙 + 蒙清萍, 金哲. Sorted with the stalest first.
4. **Contact cards** — open `Zhang Cheng 00500696.md`. Its "Balls currently in their court" table now lists Plan A. This is the round trip working: one fact, queried from both ends.

- [ ] **Step 5: Commit**

```bash
git add Tasks/
git commit -m "feat: load E6898 sample logistics as the first cockpit task

Multi-plan pattern: one parent, one child per plan, fallback plan parked
at hold so it surfaces only when the plans above it fail."
```

---

## Self-Review

**Spec coverage.** §1.1 contexts → Task 2 Step 4, Task 7. §1.2 four fields → Task 2. §1.3 priority fix → Task 1. §2 three capture paths → Task 2 Step 4 (NLP), Task 3 (`+` on views), Task 6 Step 1 (Instant Convert path). §3.1 body template → Task 4. §3.2 contact template → Task 5 Steps 1–2. §3.3 backfill → Task 5 Step 4. §4 cockpit layout → Task 6. §4 views table → Task 3. §5 boundary rule and cadence → Task 7. §6 multi-plan pattern and E6898 → Task 8. §8 verification → distributed across each task's verify step and consolidated in Task 8 Step 4.

**Gap found and closed.** The spec's §2 mentions the Instant Convert hotkey may not be bound. It is checked in Task 6 Step 1 alongside the embed check, since both are "does this Obsidian build do the thing" questions answered in the same sitting. If the hotkey is unbound, bind it in Settings → Hotkeys → "TaskNotes: Convert to task note".

**Type consistency.** Field keys `eisenhower`, `waiting_on`, `nudged`, `stakeholders` are identical in Tasks 2, 3, 5, and 8. View names `Inbox`, `Board`, `Ball in their court`, `This week`, `This month` are identical in Tasks 3 and 6. Quadrant values are `q1`–`q4` throughout. Contact file names created in Task 5 Step 3 match the wikilinks used in Task 8 Steps 1 and 3 exactly.

**Known risk, mitigated.** Kanban `groupBy` on a user field is unverified against TaskNotes 4.11.1. Task 3 Step 1 spikes it in five minutes and specifies the fallback. Nothing downstream depends on which path is taken.
