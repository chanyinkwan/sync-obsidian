	# Amazon GTM Cockpit — Design
	
	Date: 2026-08-06
	Status: approved, not yet built
	Owner: Kess Chan
	Related: [[Amazon take over]], [[Amazon Operations Glossary]], [[Sample Management Ops]]
	
	## Problem
	
	Kess took over Amazon MBB category GTM on 2026-08-03 (scope changed from router after 齊軒 resigned; Ziyi leaves shortly). The role owns the sales outcome for the category but executes nothing — all work is coordinating other functions. Three properties of that work break normal task management:
	
	1. **Ad-hoc arrival.** Tasks arrive verbally, by WeLink, or buried in email, with details missing. There is no capture step today, so items are held in the head or scattered.
		1. **Multi-stakeholder.** Every task involves several functions with different incentives and decision rights. Stakeholder positions must be mapped before outreach, or the outreach wastes a turn.
	2. **Project/operation boundary is fluid.** A fixed recurring cadence (daily 巡店, weekly SO, monthly offer plan, annual roadmap) runs alongside bounded projects, and the same item can look like either.
	
	The existing vault has the raw material — `Projects/🏠 Home.md`, TaskNotes 4.11.1, Bases, Templater, `Relationship Management/` person notes — but Home and the daily Operation Note are separate surfaces, and neither shows urgency at a glance.
	
	## Goal
	
	One surface, opened once a day, that answers in a single glance:
	
	- What is untriaged.
	- What is urgent and important, rearrangeable by dragging.
	- Who owes me something, and for how long.
	- What the fixed cadence requires this week and this month.
	
	Capture must take under ten seconds. Enrichment happens later, at triage.
	
	## Non-goals
	
	- Numbers do not move into the vault. `Handover book.xlsx`, `2026年 亚马逊MBB价格及销毛 v3.xlsx`, `AMZ MBB量价模拟 V4.xlsx` and the roadmap 產品包 stay in corporate systems and are linked from task notes. The cockpit tracks coordination, not data.
	- No new plugin is installed. Everything uses Bases, TaskNotes, and Templater, all already present.
	- 🏠 Home is not replaced. It remains the strategic layer above the daily note (SA transition, AWS exam, career).
	
	---
	
	## 1. Data model
	
	### 1.1 Categorisation splits in two
	
	Capture stays one keystroke because only two fields are required at capture time.
	
	| Field | NLP trigger | Values | Purpose |
	|---|---|---|---|
	| `projects` | `+` | `[[Amazon take over]]`, `[[Sample Management Ops]]` | which stream; drives which views the task appears in |
	| `contexts` | `@` | `@roadmap` `@pricing` `@launch` `@competitor` `@ops` `@sample` `@logistics` | which work area (from Amazon Operations Glossary §8) |
	
	The five work-area contexts map to the glossary's fixed cadence. `@sample` and `@logistics` cover the sample-ops overlap.
	
	NLP triggers already configured in `.obsidian/plugins/tasknotes/data.json`: `#` tags, `@` contexts, `+` projects, `*` status. The `!` priority trigger is currently disabled and should be enabled.
	
	### 1.2 New user fields
	
	Two `userFields` already exist and are kept: `assigned_by` (text), `source` (text).
	
	Four are added:
	
	| Key | Type | Values | Purpose |
	|---|---|---|---|
	| `eisenhower` | text | `q1` `q2` `q3` `q4` | the Kanban drag axis |
	| `waiting_on` | **list** | `[[person]]` links | who currently holds the ball; list, not single value |
	| `nudged` | date | ISO date | when they were last chased; drives the staleness warning |
	| `stakeholders` | list | `[[person]]` links | everyone situationally involved |
	
	`waiting_on` is a list because a single task routinely has several people evaluating in parallel (see §6).
	
	### 1.3 Priority values are currently broken — fix required
	
	`customPriorities` in TaskNotes uses values `high` / `mid` / `low`. Every `.base` file in `TaskNotes/Views/` defines:
	
	```
	priorityWeight: if(priority=="none",0,if(priority=="low",1,if(priority=="normal",2,if(priority=="high",3,999))))
	```
	
	`mid` matches none of the tested strings and falls through to the `999` catch-all, so mid-priority tasks sort **above** high-priority ones in every view that sorts by `formula.urgencyScore`. Replace with:
	
	```
	priorityWeight: if(priority=="low",1,if(priority=="mid",2,if(priority=="high",3,0)))
	```
	
	Apply to all seven files in `TaskNotes/Views/`.
	
	Separately, `customPriorities` assigns weight 0 to `high` and weight 2 to `low`, which appears to invert TaskNotes' own native sorting. Before changing anything, confirm the weight direction in the TaskNotes settings UI by sorting a view by priority and observing the order; if higher weight does mean higher priority, correct to high=2, mid=1, low=0.
	
	---
	
	## 2. Capture — three paths, all under ten seconds
	
	1. **Mid-conversation.** Type a raw line anywhere in today's Operation Note, hit the Instant Convert hotkey. It becomes a task note in `/Tasks` with Amazon defaults. `enableInstantTaskConvert` is already `true`; the hotkey binding is not yet confirmed and is bound in step 1 of the build if missing.
	2. **`+` on any embedded view.** Opens the TaskNotes creation modal pre-filled from that view's filters, so `+` on the Amazon board arrives with `+[[Amazon take over]]` already set.
	3. **NLP quick-add from anywhere.** `Chase Ziyi 量價模擬 link tomorrow +Amazon take over @pricing`
	
	Only title and one `@context` are required. Anything captured without an `eisenhower` value lands in the Inbox, which is what forces triage.
	
	---
	
	## 3. Enrichment — the stakeholder read
	
	**The stakeholder read lives on the person, not on the task.** A stance written once for 张程 serves every future task that involves him. Tasks link to people; they never restate who those people are.
	
	### 3.1 Task body template
	
	`useBodyTemplate` is currently `false`. Turn it on with this `bodyTemplate`. There is deliberately no stakeholder table here — only links and the situational delta:
	
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
	
	The middle column is a person link plus their role in this specific ask. The right column is usually empty. It is filled only when someone behaves off-pattern — which is itself the signal worth keeping, and which then gets folded back into their contact card.
	
	### 3.2 Contact card template
	
	Contact notes already carry **What they care about / their stake** and **How to work with them** under "At a glance" (see `Relationship Management/Liu Zhou 00542940.md`). The read formalises what is already there rather than inventing a parallel structure.
	
	Add to contact frontmatter:
	
	```yaml
	decision_rights: <what they can actually decide, vs only influence>
	incentive: <what they are measured on>
	default_stance: <where they start before you say anything>
	unlocks: <what gets a yes out of them>
	escalation: <who overrides them>
	```
	
	Add one section to the contact body, directly after "At a glance":
	
	```markdown
	## Stakeholder read
	- **Decides:**
	- **Only influences:**
	- **Measured on:**
	- **Default stance:**
	- **What gets a yes:**
	- **Escalates to:**
	- **Observed pattern:** (append-only, dated one-liners from real interactions)
	```
	
	Then a live block on the same card, listing what this person currently owes:
	
	    ```dataview
	    TABLE WITHOUT ID file.link AS "Task", due AS "Due", nudged AS "Last nudged"
	    FROM #task
	    WHERE contains(waiting_on, this.file.link) AND status != "done"
	    SORT nudged ASC
	    ```
	
	This is the exact reverse of the cockpit's Ball-in-their-court strip. The cockpit asks "who owes me things"; the contact card asks "what does this one person owe me". Same data, queried from both ends, written once.
	
	### 3.3 Reads already written, waiting to be moved
	
	Amazon Operations Glossary §1 already holds the durable read for the core cast. Moving it into contact cards is transcription, not analysis:
	
	- **各國子網** — measured on their own revenue KPI, so they want the price cut now even without a deal tag. Standing conflict: Kess's priority is not going out of stock; theirs is hitting this month's number.
	- **[[yubeifei y00663235|俞碧斐]]** — holds no resources directly but can go and get them (MOQ reduction, marketing budget). Supply allocation is the real lever. Default stance at year-end planning: pushing products Kess may not want to sell.
	- **[[Li Qinghua 00861267|李清華]]** — approval gate for on-top price requests. Breaking the 大促 floor needs her or 碧斐 to agree first.
	- **[[Zhang Xuan 00942107|張炫]]** — 地區部 GTM for router, and 齊軒's manager; took router directly after 齊軒 left. All router matters route to him.
	- **Eric** — decides on Amazon-side delivery. **Tony** — executes. Not to be confused with 榮濤.
	
	Contact cards that do not exist yet are created at triage, with the read written at the same moment. That is the only point at which the read costs anything.
	
	---
	
	## 4. The cockpit — daily Operation Note template
	
	All views are live embedded Bases from a single `Operation.base`, so one definition renders in every day's note. Embeds are references, so no duplication accumulates across daily files.
	
	Layout, top to bottom:
	
	```
	6-8-2026 Daily Operations
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	📥 INBOX · 2 untriaged                    [+]
	   eisenhower is empty — empty this daily
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	🔴 URGENT+IMP   🟠 IMPORTANT   🟡 URGENT   ⚪ NEITHER
	 Aug guidance    5G tiering     Comp list   Tidy
	 ⏰2d @pricing   @competitor    ⏰-1d       glossary
	 ← drag between columns to reclassify →
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	⏳ BALL IN THEIR COURT     grouped by person
	   张程 00500696   · Plan A 可行性     ⚠ 3d
	   刘宙 00542940   · Plan B 登機評估      1d
	   Ziyi           · 量價模擬 link      ⚠ 4d
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	🗓 CADENCE      this week ▸ this month ▸
	   recurring tasks seeded from glossary §8
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	### What actually happened today
	### Industry translation
	### Time allocation
	### Most challenging part
	### Win / do better
	### Takeaway (what to sync)
	```
	
	Design decisions:
	
	- **Inbox sits above the board.** Untriaged items are the failure mode, so they are the first thing seen, and the section disappears when empty.
	- **The board groups by `eisenhower`**, which is a real editable property, so dragging a card between columns rewrites it. A formula column cannot be dragged into, which is why urgency is not computed.
	- **Quadrants lose the "parked on someone else" lane.** The Ball-in-their-court strip recovers it. It groups by `waiting_on` person rather than by task, so the glance answers "who owes me something" instead of "which task is stuck".
	- **Staleness warning** fires when `today - nudged > 3d`.
	- **Card face** shows: due badge, `@context`, `waiting_on`, priority colour.
	
	### Views in `Operation.base`
	
	The base carries no project filter. It is the operations cockpit for every stream — Amazon MBB, Sample Ops, SA Presales Transition, AWS study — because the requirement was one surface, not two. Views scope by date, quadrant, and who holds the ball, never by project.
	
	| View | Type | Filter |
	|---|---|---|
	| Inbox | `tasknotesTaskList` | `eisenhower.isEmpty()` and not done |
	| Board | `tasknotesKanban` | not done, `groupBy: eisenhower` |
	| Ball in their court | `tasknotesTaskList` | `waiting_on.isEmpty() == false`, sort `nudged` ASC |
	| This week | `tasknotesTaskList` | recurring or dated within 7 days |
	| This month | `tasknotesTaskList` | dated within the calendar month |
	
	---
	
	## 5. Boundary rule — project vs operation
	
	The user does not decide. The data does:
	
	- **Recurring** (`recurrence` set) = operation. Appears in the cadence strip on its date. Covers 巡店, weekly SO update, monthly offer plan, monthly competitor list.
	- **Has an end state** = project. Gets a `Projects/*.md` note only when it outlives roughly two weeks *or* involves three or more stakeholders. Below that threshold it stays a plain task.
	
	No third bucket. Nothing is reclassified later.
	
	### Recurring cadence to seed (from Amazon Operations Glossary §8)
	
	| Frequency | Task | Context |
	|---|---|---|
	| Daily | 巡店 — 下架 / Buy Box / 價格異常 / deal 標籤 / 划線價, 5 countries | `@ops` |
	| Weekly | 補上週實際 SO; 更新週度價格、銷量預測、days of stock; CPFR 3+3 | `@ops` |
	| Fortnightly | Delivery Tracker 實際運輸/SI 同步到品類預測表 | `@ops` |
	| Monthly (~10th) | 對下個月 offer 計劃, 出各國價格指引 | `@pricing` |
	| Monthly (start) | 上月競品數據整理, competitor list → traffic manager (只在有變化時交) | `@competitor` |
	| Quarterly | Review launch plan; 與 Amazon 團隊鎖資源 | `@launch` |
	| Annual (Nov–Dec) | 明年路標 + SKU 級收入/發貨量預測; 通知 EOL 型號; 自己那版 BP | `@roadmap` |
	
	---
	
	## 6. Multi-plan tasks
	
	Some coordination work arrives as several mutually exclusive plans with a fallback chain, each with its own owner and deadline. This is common enough in the role to be a template, not an exception.
	
	**Structure:** one parent task, one child per plan.
	
	- Parent holds the verbatim ask, the tracking number, the plan comparison table, and the union of stakeholders.
	- Each child gets its own `waiting_on`, `due`, and `eisenhower`.
	- Fallback plans sit at `status: hold` so they never clutter the board, and surface when the plans above them fail.
	
	### Worked example — E6898 樣機運抵英國 (received 2026-08-06)
	
	Two E6898 units requested under 單號 `A010202606110024`; sample logistics blocked, 地區部 handling. Three plans given.
	
	Parent: `Tasks/E6898 樣機運抵英國.md`
	
	```yaml
	title: E6898 樣機運抵英國 (2台)
	status: doing
	priority: high
	eisenhower: q1
	projects: ["[[Sample Management Ops]]", "[[Amazon take over]]"]
	contexts: ["@sample", "@logistics"]
	assigned_by: "[[Ding Cheng 00611102 (程哥or 丁程)]]"
	source: email
	due: 2026-08-18
	```
	
	| Child | Owner | Due | Quadrant | Status |
	|---|---|---|---|---|
	| Plan A · 空運寄到英國 (非歐盟) | 张程 00500696 (交付評估) | 2026-08-14 | q1 | doing |
	| Plan B · 人工登機行李攜帶 | 刘宙 00542940 (組織評估) → 蒙清萍 84291389 (安排發貨) | 2026-08-18, ship by 08-19 latest | q1 | doing |
	| Plan C · 歐盟內發意大利再帶英國 | 金哲 00837646 (評估) → 蒙清萍 84291389 | — | q4 | hold |
	
	Plan B's domestic leg is blocked outright (no 3C certification); only the international leg is under evaluation. If it proceeds, Selina and 程哥 carry the units, and 蒙清萍 ships to their international departure city.
	
	### Gaps the enrichment form surfaces on this task
	
	These are the output of the "Missing detail" section and are the reason enrichment is worth ninety seconds.
	
	1. **Plan B has an unowned critical path.** It requires Selina's and 程哥's international departure **city and date** before 蒙清萍 can ship anything. Nobody in the plan table owns obtaining that. The source gives no lead time for shipping to a departure city, so how late those details can arrive before Plan B becomes unworkable is itself unknown. This is Kess's to chase, this week.
	2. **The deadline has no stated cause.** Why 8.18, and what breaks if the units land late? E6898 launch is already pushed to roughly 2027 Q1 (battery spec failed, requires re-initiation — Amazon Operations Glossary §6), so 8.18 is being driven by something else. Without knowing what, Plan C's cost cannot be argued for or against.
	3. **Plan A and Plan B are assigned to two evaluators separately, with nothing in the request indicating they are coordinated.** 张程 on air freight, 刘宙 on carry-on. Nothing states whether they are in contact, so whether one is idling on the other's answer is unknown — worth checking, not assumed.
	
	### Stakeholder reads to write into the contact cards
	
	Per §3, these go onto each person's own card, not into the task. The task links to them. Written once here, they serve every future sample, pricing, or launch task involving the same people.
	
	| Who | Decision right | Incentive | Likely stance |
	|---|---|---|---|
	| 张程 00500696 (交付) | whether Plan A can fly | avoid non-standard shipping exposure | cautious; default is no |
	| [[Liu Zhou 00542940]] (組織) | whether Plan B can board | missing 3C on the domestic leg is a hard block | will confirm international leg only |
	| 蒙清萍 84291389 (發貨) | executes only | needs an address and a date | fast once told; no opinion |
	| 金哲 00837646 (地區部) | Plan C | 地區部統一跟進, lowest urgency | will not move without escalation |
	| [[Huang Yi 84411269 (Selina)]] + [[Ding Cheng 00611102 (程哥or 丁程)]] | physically carry | favour, not duty | need asking early and politely |
	
	Person notes to create: 张程 00500696, 蒙清萍 84291389, 金哲 00837646. Already present: [[Liu Zhou 00542940]], [[Huang Yi 84411269 (Selina)]], [[Ding Cheng 00611102 (程哥or 丁程)]].
	
	---
	
	## 7. Build order
	
	| Step | Work | Estimate |
	|---|---|---|
	| 1 | Add four `userFields`; enable `!` priority trigger; fix `priorityWeight` in all seven `TaskNotes/Views/*.base`; correct `customPriorities` weights | 20 min |
	| 2 | Write `Operation.base` with the five views | 40 min |
	| 3 | Turn on `useBodyTemplate` with the enrichment template; rewrite the Daily Operations template to embed the five views above the reflection questions | 20 min |
	| 4 | Seed the recurring cadence tasks from §5 | 30 min |
	| 5 | Create the three missing contact cards (张程 00500696, 蒙清萍 84291389, 金哲 00837646) and write the stakeholder read onto each, plus onto [[Liu Zhou 00542940]] and [[Huang Yi 84411269 (Selina)]]; add the read section and the owes-me dataview to the contact template | 30 min |
	| 6 | Create the E6898 parent and three children as the first real load | 20 min |
	
	Roughly two and a half hours.
	
	## 8. Verification
	
	The design is working when all of the following hold on a normal morning:
	
	- Opening today's Operation Note shows an empty Inbox section, or one that can be emptied in under two minutes.
	- Every card on the board carries a due badge and a context, and dragging one between quadrants persists.
	- The Ball-in-their-court strip lists every person who owes something, with a staleness figure, and the oldest is at the top.
	- No task exists that required deciding whether it was a project or an operation.
	- A task captured mid-conversation reached the vault without opening a second app.
