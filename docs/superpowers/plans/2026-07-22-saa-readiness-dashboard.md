# SAA Readiness Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Live Dataview JS readiness dashboard for AWS SAA-C03 inside the Obsidian vault, syllabus-anchored, two-tier touched/proven credit.

**Architecture:** One shared `view.js` loaded via `dv.view()` with pure computation functions (Node-testable) and a thin Dataview runtime layer with two render modes (full, compact). A frozen Syllabus.md is the denominator; notes/questions map to topic ids via `topics:` frontmatter; Progress Log.md anchors pace and session deltas.

**Tech Stack:** Obsidian Dataview (dataviewjs, dv.view), Node v26 built-in test runner (node:test) for pure functions, markdown/YAML frontmatter as data store.

## Global Constraints

- Vault base path: `Knowledge/Professionals/AWS SAA-C03/`
- Exam date constant: 2026-08-23. Phase targets: touched 100% by 2026-08-03, proven 100% by 2026-08-21.
- Domain weights: secure-architectures 30, resilient-architectures 26, high-performing-architectures 24, cost-optimized-architectures 20.
- No em dashes in any file content written.
- The dashboard never writes anything; read-only over all vault data.
- Mastery is never computed by the dashboard; it only reads `status:` and `mastered:` frontmatter.
- All new/modified vault notes keep the user's 繁中 + English mixed voice where applicable.
- Windows environment; test commands run from repo root `C:\Users\k84450674\Desktop\Career Journey`.

---

## File map (final state)

- Create: `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`
- Create: `scripts/test-readiness-view.js`
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Readiness.md`
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md`
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md`
- Modify: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS SAA-C03 Home.md`
- Modify: `Knowledge/Professionals/AWS SAA-C03/00 Agent/Agent Instructions.md`
- Modify: `Template/SAA Knowledge Note Template.md`, `Template/SAA Question Note Template.md`
- Modify (backfill `topics:`): the 6 notes in `02 Notes/` and 6 questions in `03 Questions/` listed in Task 6

All code in this plan has been executed against the exact fixtures shown, with `node --test`, and the numbers asserted below are the real numbers node printed back, not estimates.

---

### Task 1: Parsing core

**Files:**
- Create: `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`
- Create: `scripts/test-readiness-view.js`

**Interfaces:**
- Produces: `parseSyllabus(text: string) -> {domains: [{name: string, slug: string, weight: number, topics: [{id: string, title: string}]}]}`
- Produces: `parseProgressLog(text: string) -> [{date: string, touched: number, proven: number, notes: number, questions: number}]`
- Produces: the `module.exports` guard pattern that every later task extends.
- Consumes: nothing (first task).

- [ ] **Step 1: Write the failing test file**

Create `scripts/test-readiness-view.js`:

```js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const {
  parseSyllabus,
  parseProgressLog,
  computeTopicStates,
  computeHeadline,
  computeStreak,
  computePace,
  nextBestAction,
  sessionDelta,
} = require("../Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js");

const SYLLABUS_TEXT = `
## Design Secure Architectures (60%)

| id | topic |
| --- | --- |
| sec-01 | Topic A |
| sec-02 | Topic B |
| sec-03 | Topic C |

## Design Resilient Architectures (40%)

| id | topic |
| --- | --- |
| res-01 | Topic D |
| res-02 | Topic E |
| res-03 | Topic F |
`;

const PROGRESS_LOG_TEXT = `
| date | touched | proven | notes | questions |
| --- | --- | --- | --- | --- |
| 2026-07-15 | 10 | 0 | 1 | 0 |
| 2026-07-20 | 10 | 0 | 4 | 2 |
| 2026-07-22 | 15.5 | 2 | 6 | 6 |
`;

test("parseSyllabus reads two domains with three topics each, skipping header and divider rows", () => {
  const syllabus = parseSyllabus(SYLLABUS_TEXT);
  assert.equal(syllabus.domains.length, 2);
  assert.equal(syllabus.domains[0].slug, "secure-architectures");
  assert.equal(syllabus.domains[0].weight, 60);
  assert.deepEqual(syllabus.domains[0].topics.map((t) => t.id), ["sec-01", "sec-02", "sec-03"]);
  assert.equal(syllabus.domains[1].slug, "resilient-architectures");
  assert.equal(syllabus.domains[1].weight, 40);
  assert.deepEqual(syllabus.domains[1].topics.map((t) => t.id), ["res-01", "res-02", "res-03"]);
  assert.equal(syllabus.domains[0].topics[0].title, "Topic A");
});

test("parseProgressLog reads rows oldest first and skips header and divider rows", () => {
  const rows = parseProgressLog(PROGRESS_LOG_TEXT);
  assert.equal(rows.length, 3);
  assert.deepEqual(rows[0], { date: "2026-07-15", touched: 10, proven: 0, notes: 1, questions: 0 });
  assert.deepEqual(rows[2], { date: "2026-07-22", touched: 15.5, proven: 2, notes: 6, questions: 6 });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test scripts/test-readiness-view.js`
Expected: fails to resolve the module, for example `Cannot find module '../Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js'`.

- [ ] **Step 3: Create `view.js` with the parsing core**

Create `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`:

```js
// AWS SAA-C03 Readiness Dashboard
// Shared implementation loaded via dv.view(). Pure functions are Node-testable
// (see scripts/test-readiness-view.js); main() and its helpers below it are the
// thin Dataview runtime layer and only run inside Obsidian.
//
// Data shapes:
// Syllabus: {domains: [{name: string, slug: string, weight: number, topics: [{id: string, title: string}]}]}
// NoteMeta: {file: string, status: string, date: string|null, mastered: string|null, topics: string[], domain: string|null}
// QuestionMeta: {file: string, result: string, date: string|null, topics: string[], domain: string|null, services: string[]}
// SessionMeta: {date: string, duration: number|null}
// TopicState: "untouched" | "touched" | "proven" | "contested"
// ProgressRow: {date: string, touched: number, proven: number, notes: number, questions: number}

const DOMAIN_SLUGS = {
  "Design Secure Architectures": "secure-architectures",
  "Design Resilient Architectures": "resilient-architectures",
  "Design High-Performing Architectures": "high-performing-architectures",
  "Design Cost-Optimized Architectures": "cost-optimized-architectures",
};

const TOPIC_ID_RE = /^(sec|res|perf|cost)-\d{2}$/;

// ---- Task 1: parsing core ----

function parseSyllabus(text) {
  const lines = String(text).split(/\r?\n/);
  const domains = [];
  let current = null;
  const headingRe = /^##\s+(.+?)\s*\((\d+)%\)\s*$/;
  const rowRe = /^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/;

  for (const line of lines) {
    const h = line.match(headingRe);
    if (h) {
      const name = h[1].trim();
      const slug = DOMAIN_SLUGS[name];
      if (!slug) {
        current = null;
        continue;
      }
      current = { name, slug, weight: Number(h[2]), topics: [] };
      domains.push(current);
      continue;
    }
    if (!current) continue;
    const r = line.match(rowRe);
    if (!r) continue;
    const id = r[1].trim();
    if (!TOPIC_ID_RE.test(id)) continue; // skips the "| id | topic |" header and "| --- | --- |" divider
    current.topics.push({ id, title: r[2].trim() });
  }

  return { domains };
}

function parseProgressLog(text) {
  const lines = String(text).split(/\r?\n/);
  const rowRe = /^\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|/;
  const rows = [];
  for (const line of lines) {
    const m = line.match(rowRe);
    if (!m) continue;
    rows.push({
      date: m[1],
      touched: Number(m[2]),
      proven: Number(m[3]),
      notes: Number(m[4]),
      questions: Number(m[5]),
    });
  }
  return rows;
}

if (typeof dv !== "undefined") {
  main(dv, input);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog };
}
```

Note: the top guard line calls `main(dv, input)`, which is not defined until Task 4. This is safe: in Node, `typeof dv !== "undefined"` is always false, so that block never executes and the unresolved `main` identifier is never evaluated. The bottom `module.exports` block does execute in Node, so its object literal must only name functions that already exist in the file at each task boundary; this task's guard names only the two functions defined above.

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test scripts/test-readiness-view.js`
Expected:
```
ℹ tests 2
ℹ pass 2
ℹ fail 0
```

- [ ] **Step 5: Commit**

```bash
git add "Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js" "scripts/test-readiness-view.js"
git commit -m "$(cat <<'EOF'
Add readiness dashboard parsing core (Syllabus.md and Progress Log.md readers)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Topic state machine

**Files:**
- Modify: `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`
- Modify: `scripts/test-readiness-view.js`

**Interfaces:**
- Consumes: `parseSyllabus`, `parseProgressLog` (Task 1, unchanged).
- Produces: `computeTopicStates(syllabus, notes: NoteMeta[], questions: QuestionMeta[]) -> {states: Map<string, TopicState>, unmapped: {notes: NoteMeta[], questions: QuestionMeta[]}}`
- Produces: `computeHeadline(syllabus, states: Map<string, TopicState>) -> {touched: number, proven: number, perDomain: [{slug: string, weight: number, touchedFrac: number, provenFrac: number, touchedCount: number, provenCount: number, total: number}]}`

- [ ] **Step 1: Write the failing tests**

Add to `scripts/test-readiness-view.js`, after the Task 1 tests:

```js
const NOTES_FIXTURE = [
  { file: "02 Notes/Note Mixed.md", status: "capture", date: "2026-07-19", mastered: null, topics: ["sec-01", "bogus-99b"], domain: "secure-architectures" },
  { file: "02 Notes/Note Touched.md", status: "capture", date: "2026-07-18", mastered: null, topics: ["sec-02"], domain: "secure-architectures" },
  { file: "02 Notes/Note Proven.md", status: "mastered", date: "2026-07-10", mastered: "2026-07-12", topics: ["sec-03"], domain: "secure-architectures" },
  { file: "02 Notes/Note Contested.md", status: "mastered", date: "2026-07-08", mastered: "2026-07-10", topics: ["res-01"], domain: "resilient-architectures" },
  { file: "02 Notes/Note Connected.md", status: "connected", date: "2026-07-05", mastered: null, topics: ["res-02"], domain: "resilient-architectures" },
  { file: "02 Notes/Note Unmapped.md", status: "capture", date: "2026-07-20", mastered: null, topics: ["bogus-99"], domain: null },
];

const QUESTIONS_FIXTURE = [
  { file: "03 Questions/Q Contest.md", result: "wrong", date: "2026-07-15", topics: ["res-01"], domain: "resilient-architectures", services: ["EC2"] },
];

test("computeTopicStates classifies untouched, touched, proven, and contested topics", () => {
  const syllabus = parseSyllabus(SYLLABUS_TEXT);
  const { states } = computeTopicStates(syllabus, NOTES_FIXTURE, QUESTIONS_FIXTURE);
  assert.equal(states.get("sec-01"), "touched"); // credited via Note Mixed despite one invalid id
  assert.equal(states.get("sec-02"), "touched");
  assert.equal(states.get("sec-03"), "proven"); // mastered 2026-07-12, no later wrong/guessed question
  assert.equal(states.get("res-01"), "contested"); // mastered 2026-07-10, wrong question 2026-07-15 postdates it
  assert.equal(states.get("res-02"), "touched"); // connected only, never proven
  assert.equal(states.get("res-03"), "untouched"); // no mapped note
});

test("computeTopicStates puts notes with any invalid topic id in the unmapped pile, crediting the valid id too", () => {
  const syllabus = parseSyllabus(SYLLABUS_TEXT);
  const { unmapped } = computeTopicStates(syllabus, NOTES_FIXTURE, QUESTIONS_FIXTURE);
  const unmappedFiles = unmapped.notes.map((n) => n.file);
  assert.ok(unmappedFiles.includes("02 Notes/Note Mixed.md"));
  assert.ok(unmappedFiles.includes("02 Notes/Note Unmapped.md"));
  assert.equal(unmapped.notes.length, 2);
  assert.equal(unmapped.questions.length, 0);
});

test("computeHeadline weights touched and proven percentages by domain weight", () => {
  const syllabus = parseSyllabus(SYLLABUS_TEXT);
  const { states } = computeTopicStates(syllabus, NOTES_FIXTURE, QUESTIONS_FIXTURE);
  const headline = computeHeadline(syllabus, states);
  // secure: 3/3 touched -> 60 * 1 = 60; 1/3 proven -> 60 * (1/3) = 20
  // resilient: 2/3 touched (res-01 contested + res-02 touched) -> 40 * (2/3) = 26.6667; 0/3 proven
  // touched = 60 + 26.6667 = 86.6667 -> rounds to 86.7
  // proven = 20 + 0 = 20
  assert.equal(headline.touched, 86.7);
  assert.equal(headline.proven, 20);
  const secure = headline.perDomain.find((d) => d.slug === "secure-architectures");
  assert.equal(secure.touchedCount, 3);
  assert.equal(secure.provenCount, 1);
  const resilient = headline.perDomain.find((d) => d.slug === "resilient-architectures");
  assert.equal(resilient.touchedCount, 2);
  assert.equal(resilient.provenCount, 0);
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `node --test scripts/test-readiness-view.js`
Expected: the 3 new tests fail with `computeTopicStates is not a function` (or `undefined is not a function`), because `view.js` does not export it yet.

- [ ] **Step 3: Add the state machine to `view.js`**

Edit `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`. Replace:

```js
if (typeof dv !== "undefined") {
  main(dv, input);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog };
}
```

with:

```js
// ---- Task 2: topic state machine ----

function computeTopicStates(syllabus, notes, questions) {
  const allIds = new Set();
  for (const d of syllabus.domains) for (const t of d.topics) allIds.add(t.id);

  const states = new Map();
  for (const id of allIds) states.set(id, "untouched");

  const notesByTopic = new Map();
  const unmappedNotes = [];
  for (const n of notes) {
    const topics = Array.isArray(n.topics) ? n.topics : [];
    let hasValid = false;
    let hasInvalid = topics.length === 0;
    for (const id of topics) {
      if (allIds.has(id)) {
        hasValid = true;
        if (!notesByTopic.has(id)) notesByTopic.set(id, []);
        notesByTopic.get(id).push(n);
      } else {
        hasInvalid = true;
      }
    }
    if (!hasValid || hasInvalid) unmappedNotes.push(n);
  }

  const questionsByTopic = new Map();
  const unmappedQuestions = [];
  for (const q of questions) {
    const topics = Array.isArray(q.topics) ? q.topics : [];
    let hasValid = false;
    let hasInvalid = topics.length === 0;
    for (const id of topics) {
      if (allIds.has(id)) {
        hasValid = true;
        if (!questionsByTopic.has(id)) questionsByTopic.set(id, []);
        questionsByTopic.get(id).push(q);
      } else {
        hasInvalid = true;
      }
    }
    if (!hasValid || hasInvalid) unmappedQuestions.push(q);
  }

  for (const id of allIds) {
    const mappedNotes = notesByTopic.get(id) || [];
    if (mappedNotes.length === 0) {
      states.set(id, "untouched");
      continue;
    }
    const masteredNotes = mappedNotes.filter((n) => n.status === "mastered" && n.mastered);
    if (masteredNotes.length === 0) {
      states.set(id, "touched"); // includes "connected", which never counts as proven
      continue;
    }
    const latestMastered = masteredNotes.map((n) => n.mastered).sort().slice(-1)[0];
    const mappedQuestions = questionsByTopic.get(id) || [];
    const contests = mappedQuestions.filter(
      (q) => (q.result === "wrong" || q.result === "guessed") && q.date && q.date > latestMastered
    );
    states.set(id, contests.length > 0 ? "contested" : "proven");
  }

  return { states, unmapped: { notes: unmappedNotes, questions: unmappedQuestions } };
}

function computeHeadline(syllabus, states) {
  let touchedPercent = 0;
  let provenPercent = 0;
  const perDomain = [];

  for (const d of syllabus.domains) {
    const total = d.topics.length;
    let touchedCount = 0;
    let provenCount = 0;
    for (const t of d.topics) {
      const s = states.get(t.id);
      if (s === "touched" || s === "proven" || s === "contested") touchedCount++;
      if (s === "proven") provenCount++;
    }
    const touchedFrac = total > 0 ? touchedCount / total : 0;
    const provenFrac = total > 0 ? provenCount / total : 0;
    touchedPercent += d.weight * touchedFrac;
    provenPercent += d.weight * provenFrac;
    perDomain.push({ slug: d.slug, weight: d.weight, touchedFrac, provenFrac, touchedCount, provenCount, total });
  }

  return {
    touched: Math.round(touchedPercent * 10) / 10,
    proven: Math.round(provenPercent * 10) / 10,
    perDomain,
  };
}

if (typeof dv !== "undefined") {
  main(dv, input);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog, computeTopicStates, computeHeadline };
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `node --test scripts/test-readiness-view.js`
Expected:
```
ℹ tests 5
ℹ pass 5
ℹ fail 0
```

- [ ] **Step 5: Commit**

```bash
git add "Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js" "scripts/test-readiness-view.js"
git commit -m "$(cat <<'EOF'
Add topic state machine and weighted headline computation

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Time panels

**Files:**
- Modify: `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`
- Modify: `scripts/test-readiness-view.js`

**Interfaces:**
- Consumes: `computeHeadline`'s `perDomain` shape (Task 2, for `computePace`'s domain lookup).
- Produces: `computeStreak(sessions: SessionMeta[], todayISO: string) -> {hits: number, window: number, run: number, days: [{date: string, hit: boolean, isWeekday: boolean, duration: number|null}]}`
- Produces: `sessionDelta(rows: ProgressRow[]) -> {dTouched: number, dProven: number, dNotes: number, dQuestions: number} | null`
- Produces: `computePace(headline, rows: ProgressRow[], todayISO: string) -> {status: "AHEAD"|"ON LINE"|"BEHIND", sentence: string}`
- Produces: `nextBestAction(syllabus, states: Map<string, TopicState>, notes: NoteMeta[], activeUnknownsText: string, todayISO: string) -> {text: string, domainSlug: string|null}`

- [ ] **Step 1: Write the failing tests**

Add to `scripts/test-readiness-view.js`, after the Task 2 tests:

```js
const SESSIONS_FIXTURE = [
  { date: "2026-07-21", duration: 45 },
  { date: "2026-07-22", duration: 60 },
];

test("computeStreak counts 2 of the last 10 weekday slots with a run of 2, for sessions on the last two weekdays", () => {
  const streak = computeStreak(SESSIONS_FIXTURE, "2026-07-22");
  assert.equal(streak.window, 10);
  assert.equal(streak.hits, 2);
  assert.equal(streak.run, 2);
});

test("computeStreak does not break the run for today before a session is logged", () => {
  // Today 2026-07-22 (Tue) has no session yet; the run must survive on yesterday's session.
  const streak = computeStreak([{ date: "2026-07-21", duration: 45 }], "2026-07-22");
  assert.equal(streak.hits, 1);
  assert.equal(streak.run, 1);
});

test("computeStreak returns a 28-day heat strip, oldest first, with hit and duration per day", () => {
  const streak = computeStreak(SESSIONS_FIXTURE, "2026-07-22");
  assert.equal(streak.days.length, 28);
  assert.equal(streak.days[27].date, "2026-07-22");
  assert.equal(streak.days[27].hit, true);
  assert.equal(streak.days[27].duration, 60);
  assert.equal(streak.days[0].date, "2026-06-25");
  assert.equal(streak.days[0].hit, false);
  assert.equal(streak.days[0].duration, null);
});

test("sessionDelta computes the diff between the latest two Progress Log rows", () => {
  const rows = [
    { date: "2026-07-20", touched: 10, proven: 0, notes: 4, questions: 2 },
    { date: "2026-07-22", touched: 15.5, proven: 2, notes: 6, questions: 6 },
  ];
  const delta = sessionDelta(rows);
  assert.deepEqual(delta, { dTouched: 5.5, dProven: 2, dNotes: 2, dQuestions: 4 });
});

test("sessionDelta returns null with fewer than two rows", () => {
  assert.equal(sessionDelta([]), null);
  assert.equal(sessionDelta([{ date: "2026-07-22", touched: 10, proven: 0, notes: 1, questions: 0 }]), null);
});

test("computePace returns the baseline-not-logged sentence before any Progress Log row exists", () => {
  const headline = { touched: 0, proven: 0, perDomain: [] };
  const pace = computePace(headline, [], "2026-07-22");
  assert.deepEqual(pace, { status: "ON LINE", sentence: "baseline not yet logged: run one session to anchor the pace line" });
});

test("computePace reports BEHIND with a same-day topic count against the tighter (touched) line", () => {
  const headline = {
    touched: 20,
    proven: 0,
    perDomain: [
      { slug: "resilient-architectures", weight: 26, touchedFrac: 0.5, provenFrac: 0, touchedCount: 1, provenCount: 0, total: 2 },
      { slug: "secure-architectures", weight: 30, touchedFrac: 0.75, provenFrac: 0, touchedCount: 3, provenCount: 0, total: 4 },
    ],
  };
  const rows = [{ date: "2026-07-15", touched: 10, proven: 0, notes: 1, questions: 0 }];
  const pace = computePace(headline, rows, "2026-07-22");
  // expectedTouched = 10 + 90 * (7/19) = 43.157894...; deficit = 43.157894... - 20 = 23.157894...
  // slopeTouched = 90/19 = 4.7368...; deficit > slope -> BEHIND, touched line is tighter
  // avgTopicPercent = 100/6 = 16.6667; n = ceil(23.157894 / 16.6667) = ceil(1.3895) = 2
  // heaviest-weight domain with an untouched topic: secure-architectures (30 > 26)
  assert.equal(pace.status, "BEHIND");
  assert.equal(pace.sentence, "BEHIND · today: touch 2 topics in Secure to get back on line");
});

test("computePace reports AHEAD against the tighter (proven) line", () => {
  const headline = {
    touched: 70,
    proven: 36,
    perDomain: [
      { slug: "secure-architectures", weight: 60, touchedFrac: 1, provenFrac: 0.6, touchedCount: 3, provenCount: 2, total: 3 },
      { slug: "resilient-architectures", weight: 40, touchedFrac: 1, provenFrac: 0.5, touchedCount: 3, provenCount: 1, total: 3 },
    ],
  };
  const rows = [{ date: "2026-07-08", touched: 5, proven: 0, notes: 1, questions: 0 }];
  const pace = computePace(headline, rows, "2026-07-22");
  // expectedProven = 0 + 100 * (14/44) = 31.818...; deficit = 31.818... - 36 = -4.1818...
  // slopeProven = 100/44 = 2.2727...; deficit < -slope -> AHEAD, proven line is tighter
  assert.equal(pace.status, "AHEAD");
  assert.equal(pace.sentence, "AHEAD · keep the current pace, proven line has slack");
});

test("nextBestAction picks the first untouched topic in the heaviest-weighted domain with an untouched topic", () => {
  const syllabus = {
    domains: [
      { name: "Design Secure Architectures", slug: "secure-architectures", weight: 60, topics: [{ id: "sec-01", title: "KMS envelope encryption" }, { id: "sec-02", title: "Bucket policies" }] },
      { name: "Design Resilient Architectures", slug: "resilient-architectures", weight: 40, topics: [{ id: "res-01", title: "Multi-AZ RDS" }] },
    ],
  };
  const states = new Map([["sec-01", "untouched"], ["sec-02", "touched"], ["res-01", "untouched"]]);
  const action = nextBestAction(syllabus, states, [], "", "2026-07-22");
  assert.equal(action.domainSlug, "secure-architectures");
  assert.equal(action.text, "touch: KMS envelope encryption (Secure)");
});

test("nextBestAction retests the closest-to-mastered note, connected before distilled, only if 3+ days old", () => {
  const syllabus = {
    domains: [{ name: "Design Secure Architectures", slug: "secure-architectures", weight: 100, topics: [{ id: "sec-01", title: "Topic A" }, { id: "sec-02", title: "Topic B" }, { id: "sec-03", title: "Topic C" }] }],
  };
  const states = new Map([["sec-01", "touched"], ["sec-02", "touched"], ["sec-03", "touched"]]);
  const notes = [
    { file: "02 Notes/Note One.md", status: "connected", date: "2026-07-17", mastered: null, topics: ["sec-01"], domain: "secure-architectures" },
    { file: "02 Notes/Note Two.md", status: "distilled", date: "2026-07-10", mastered: null, topics: ["sec-02"], domain: "secure-architectures" },
    { file: "02 Notes/Note Three.md", status: "connected", date: "2026-07-21", mastered: null, topics: ["sec-03"], domain: "secure-architectures" },
  ];
  const action = nextBestAction(syllabus, states, notes, "", "2026-07-22");
  assert.equal(action.text, "retest [[Note One]]");
  assert.equal(action.domainSlug, null);
});

test("nextBestAction falls back to the first Active Unknowns item when nothing is untouched or retest-eligible", () => {
  const syllabus = {
    domains: [{ name: "Design Secure Architectures", slug: "secure-architectures", weight: 100, topics: [{ id: "sec-01", title: "Topic A" }] }],
  };
  const states = new Map([["sec-01", "proven"]]);
  const activeUnknownsText = "1. First unknown about policy evaluation order.\n2. Second unknown.";
  const action = nextBestAction(syllabus, states, [], activeUnknownsText, "2026-07-22");
  assert.equal(action.text, "close unknown: First unknown about policy evaluation order.");
  assert.equal(action.domainSlug, null);
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `node --test scripts/test-readiness-view.js`
Expected: the 11 new tests fail because `computeStreak`, `sessionDelta`, `computePace`, `nextBestAction` are not exported yet.

- [ ] **Step 3: Add the time panels to `view.js`**

Edit `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`. Replace:

```js
if (typeof dv !== "undefined") {
  main(dv, input);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog, computeTopicStates, computeHeadline };
}
```

with:

```js
// ---- Task 3: time panels ----

const DOMAIN_DISPLAY_NAMES = {
  "secure-architectures": "Secure",
  "resilient-architectures": "Resilient",
  "high-performing-architectures": "High-Performing",
  "cost-optimized-architectures": "Cost-Optimized",
};

const TOUCHED_TARGET_DATE = "2026-08-03";
const PROVEN_TARGET_DATE = "2026-08-21";

// Dates are "YYYY-MM-DD" strings, always compared/walked as UTC calendar days.
function isoToDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function dateToISO(date) {
  return date.toISOString().slice(0, 10);
}

function isWeekdayISO(iso) {
  const day = isoToDate(iso).getUTCDay();
  return day >= 1 && day <= 5;
}

function addDaysISO(iso, delta) {
  const dt = isoToDate(iso);
  dt.setUTCDate(dt.getUTCDate() + delta);
  return dateToISO(dt);
}

function daysBetweenISO(fromISO, toISO) {
  return Math.round((isoToDate(toISO).getTime() - isoToDate(fromISO).getTime()) / 86400000);
}

function noteBasename(filePath) {
  const parts = String(filePath).split(/[\\/]/);
  const last = parts[parts.length - 1];
  return last.replace(/\.md$/i, "");
}

function computeStreak(sessions, todayISO) {
  const sessionDates = new Set(sessions.map((s) => s.date));
  const durationByDate = new Map(sessions.map((s) => [s.date, s.duration]));

  const weekdaySlots = [];
  let cursor = todayISO;
  while (weekdaySlots.length < 10) {
    if (isWeekdayISO(cursor)) weekdaySlots.push(cursor);
    cursor = addDaysISO(cursor, -1);
  }
  const oldestWindowDate = weekdaySlots[weekdaySlots.length - 1];

  let hits = 0;
  for (const d of sessionDates) {
    if (d >= oldestWindowDate && d <= todayISO) hits++;
  }
  hits = Math.min(hits, 10);

  // Today's slot only breaks the run once the day is over: if today is a weekday slot with
  // no session logged yet, skip it rather than reading run 0 all morning.
  let runSlots = weekdaySlots;
  if (runSlots.length > 0 && runSlots[0] === todayISO && !sessionDates.has(todayISO)) {
    runSlots = runSlots.slice(1);
  }
  let run = 0;
  for (const slot of runSlots) {
    if (sessionDates.has(slot)) run++;
    else break;
  }

  const days = [];
  for (let i = 27; i >= 0; i--) {
    const date = addDaysISO(todayISO, -i);
    days.push({
      date,
      hit: sessionDates.has(date),
      isWeekday: isWeekdayISO(date),
      duration: durationByDate.has(date) ? durationByDate.get(date) : null,
    });
  }

  return { hits, window: 10, run, days };
}

function sessionDelta(rows) {
  if (!Array.isArray(rows) || rows.length < 2) return null;
  const prev = rows[rows.length - 2];
  const latest = rows[rows.length - 1];
  return {
    dTouched: Math.round((latest.touched - prev.touched) * 10) / 10,
    dProven: Math.round((latest.proven - prev.proven) * 10) / 10,
    dNotes: latest.notes - prev.notes,
    dQuestions: latest.questions - prev.questions,
  };
}

function computePace(headline, rows, todayISO) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { status: "ON LINE", sentence: "baseline not yet logged: run one session to anchor the pace line" };
  }

  const baseline = rows[0];
  const totalTopicCount = headline.perDomain.reduce((sum, d) => sum + d.total, 0);
  // Average topic weight is used only to turn a percent deficit into a topic count for the
  // sentence; it is an unweighted average (100 / total topic count), stated here explicitly
  // because the headline percent itself is weighted by domain.
  const avgTopicPercent = totalTopicCount > 0 ? 100 / totalTopicCount : 0;

  function expectedValue(baselineValue, targetDate) {
    const totalDays = Math.max(1, daysBetweenISO(baseline.date, targetDate));
    const elapsed = daysBetweenISO(baseline.date, todayISO);
    const frac = Math.max(0, Math.min(1, elapsed / totalDays));
    return baselineValue + (100 - baselineValue) * frac;
  }

  function slopeOf(baselineValue, targetDate) {
    const totalDays = Math.max(1, daysBetweenISO(baseline.date, targetDate));
    return (100 - baselineValue) / totalDays;
  }

  const expectedTouched = expectedValue(baseline.touched, TOUCHED_TARGET_DATE);
  const slopeTouched = slopeOf(baseline.touched, TOUCHED_TARGET_DATE);
  const deficitTouched = expectedTouched - headline.touched;

  const expectedProven = expectedValue(baseline.proven, PROVEN_TARGET_DATE);
  const slopeProven = slopeOf(baseline.proven, PROVEN_TARGET_DATE);
  const deficitProven = expectedProven - headline.proven;

  const provenIsTighter = deficitProven >= deficitTouched;
  const tighter = provenIsTighter ? "proven" : "touched";
  const deficit = provenIsTighter ? deficitProven : deficitTouched;
  const slope = provenIsTighter ? slopeProven : slopeTouched;
  const label = provenIsTighter ? "prove" : "touch";

  let status;
  if (deficit > slope) status = "BEHIND";
  else if (deficit < -slope) status = "AHEAD";
  else status = "ON LINE";

  // Domain of the next best action, mirroring nextBestAction rule (a): the heaviest-weighted
  // domain that still has an untouched topic. computePace only receives `headline`, not the
  // full syllabus/states/notes, so it re-derives this from headline.perDomain rather than
  // calling nextBestAction directly.
  const candidateDomains = headline.perDomain
    .filter((d) => d.touchedCount < d.total)
    .sort((a, b) => b.weight - a.weight);
  const domain = candidateDomains.length > 0 ? candidateDomains[0] : null;
  const domainLabel = domain ? DOMAIN_DISPLAY_NAMES[domain.slug] || domain.slug : "the current domain";

  let sentence;
  if (status === "BEHIND") {
    const n = Math.max(1, Math.ceil(deficit / avgTopicPercent));
    sentence = `BEHIND · today: ${label} ${n} topic${n === 1 ? "" : "s"} in ${domainLabel} to get back on line`;
  } else if (status === "AHEAD") {
    sentence = `AHEAD · keep the current pace, ${tighter} line has slack`;
  } else {
    sentence = `ON LINE · keep the current pace on the ${tighter} line`;
  }

  return { status, sentence };
}

function nextBestAction(syllabus, states, notes, activeUnknownsText, todayISO) {
  const allIds = new Set();
  for (const d of syllabus.domains) for (const t of d.topics) allIds.add(t.id);

  const domainsByWeight = [...syllabus.domains].sort((a, b) => b.weight - a.weight);
  for (const domain of domainsByWeight) {
    for (const topic of domain.topics) {
      if (states.get(topic.id) === "untouched") {
        return {
          text: `touch: ${topic.title} (${DOMAIN_DISPLAY_NAMES[domain.slug] || domain.slug})`,
          domainSlug: domain.slug,
        };
      }
    }
  }

  const STATUS_RANK = { connected: 0, distilled: 1 };
  const eligible = notes.filter((n) => {
    if (STATUS_RANK[n.status] === undefined) return false;
    if (!n.date) return false;
    const topics = Array.isArray(n.topics) ? n.topics : [];
    if (!topics.some((id) => allIds.has(id))) return false;
    return daysBetweenISO(n.date, todayISO) >= 3;
  });
  if (eligible.length > 0) {
    eligible.sort((a, b) => {
      const rankDiff = STATUS_RANK[a.status] - STATUS_RANK[b.status];
      if (rankDiff !== 0) return rankDiff;
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    });
    return { text: `retest [[${noteBasename(eligible[0].file)}]]`, domainSlug: null };
  }

  const match = String(activeUnknownsText).match(/^\d+\.\s*(.+)$/m);
  if (match) {
    return { text: `close unknown: ${match[1].trim().slice(0, 80)}`, domainSlug: null };
  }

  return { text: "no open action: all topics touched, nothing retest-eligible, no active unknowns", domainSlug: null };
}

if (typeof dv !== "undefined") {
  main(dv, input);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog, computeTopicStates, computeHeadline, computeStreak, computePace, nextBestAction, sessionDelta };
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `node --test scripts/test-readiness-view.js`
Expected:
```
ℹ tests 16
ℹ pass 16
ℹ fail 0
```

- [ ] **Step 5: Commit**

```bash
git add "Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js" "scripts/test-readiness-view.js"
git commit -m "$(cat <<'EOF'
Add streak, session delta, pace, and next-best-action computations

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Dataview runtime and render

**Files:**
- Modify: `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Readiness.md`
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md`

**Interfaces:**
- Consumes: every pure function from Tasks 1 to 3, called from `main(dv, input)`.
- Produces: `toISO(value) -> string|null`, `main(dv, input) -> Promise<void>`, `renderCompact`, `renderFull`. Not exported and not Node-testable; this task's only verification is manual, in Obsidian.

This task is the one place where `dv` and `input` (the Dataview runtime globals) are used. There is no Node test for it: `main`, `renderCompact`, and `renderFull` are the "thin Dataview runtime layer" the architecture section refers to, and they are exercised only by opening the note in Obsidian.

- [ ] **Step 1: Add the runtime layer to `view.js`**

Edit `Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js`. Replace:

```js
if (typeof dv !== "undefined") {
  main(dv, input);
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog, computeTopicStates, computeHeadline, computeStreak, computePace, nextBestAction, sessionDelta };
}
```

with:

```js
// ---- Task 4: Dataview runtime ----

const BASE = "Knowledge/Professionals/AWS SAA-C03";

function toISO(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "string") {
    const m = value.match(/^\d{4}-\d{2}-\d{2}/);
    return m ? m[0] : null;
  }
  if (typeof value.toISODate === "function") return value.toISODate();
  if (typeof value.toFormat === "function") return value.toFormat("yyyy-MM-dd");
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const s = String(value);
  const m = s.match(/^\d{4}-\d{2}-\d{2}/);
  return m ? m[0] : null;
}

function toArray(value) {
  if (Array.isArray(value)) return value.map(String);
  if (value === null || value === undefined || value === "") return [];
  return [String(value)];
}

function pageToNoteMeta(p) {
  return {
    file: String(p.file.path),
    status: p.status ?? null,
    date: toISO(p.date),
    mastered: toISO(p.mastered),
    topics: toArray(p.topics),
    domain: p.domain ?? null,
  };
}

function pageToQuestionMeta(p) {
  return {
    file: String(p.file.path),
    result: p.result ?? null,
    date: toISO(p.date),
    topics: toArray(p.topics),
    domain: p.domain ?? null,
    services: toArray(p.services),
  };
}

function pageToSessionMeta(p) {
  return {
    date: toISO(p.date),
    duration: typeof p.duration === "number" ? p.duration : p.duration ? Number(p.duration) : null,
  };
}

function renderCompact(dv, ctx) {
  const { headline, delta, pace, action } = ctx;
  dv.paragraph(`**TOUCHED ${headline.touched}% · PROVEN ${headline.proven}%**`);
  if (delta) {
    dv.paragraph(
      `This session: +${delta.dTouched}% touched, +${delta.dProven}% proven, +${delta.dNotes} notes, +${delta.dQuestions} questions`
    );
  }
  dv.paragraph(pace.sentence);
  dv.paragraph(`Next: ${action.text}`);
}

function renderFull(dv, ctx) {
  const { syllabus, states, headline, delta, pace, action, streak, mockLine, questions, unmapped, todayISO } = ctx;

  // 1. Dual headline
  dv.el(
    "div",
    `<span style="font-size:1.6em">TOUCHED ${headline.touched}%</span> &middot; <span style="font-size:1.6em">PROVEN ${headline.proven}%</span>`
  );
  const examDaysLeft = daysBetweenISO(todayISO, "2026-08-23");
  let slotsLeft = 0;
  for (let d = todayISO; d < "2026-08-23"; d = addDaysISO(d, 1)) {
    if (isWeekdayISO(d)) slotsLeft++;
  }
  dv.paragraph(`${examDaysLeft} days · ${slotsLeft} study slots to exam`);

  // 2. Session-close delta
  if (delta) {
    dv.paragraph(
      `This session: +${delta.dTouched}% touched, +${delta.dProven}% proven, +${delta.dNotes} notes, +${delta.dQuestions} questions`
    );
  } else {
    dv.paragraph("This session: no prior Progress Log row yet");
  }

  // 3. Domain bars
  dv.header(3, "Domains");
  for (const d of headline.perDomain) {
    const name = DOMAIN_DISPLAY_NAMES[d.slug] || d.slug;
    const touchedPct = Math.round(d.touchedFrac * 1000) / 10;
    const provenPct = Math.round(d.provenFrac * 1000) / 10;
    dv.el(
      "div",
      `<div style="margin-bottom:0.6em">
        <div>${name} (${d.weight}%) &middot; ${d.touchedCount}/${d.total} touched, ${d.provenCount}/${d.total} proven</div>
        <div style="background:var(--background-modifier-border);height:8px;width:100%;position:relative">
          <div style="background:var(--interactive-accent);opacity:0.35;height:8px;width:${touchedPct}%"></div>
          <div style="background:var(--interactive-accent);height:8px;width:${provenPct}%;position:absolute;top:0;left:0"></div>
        </div>
      </div>`
    );
  }

  // 4. Pace
  dv.paragraph(`**Pace:** ${pace.sentence}`);

  // 5. Next best action
  dv.paragraph(`**Next best action:** ${action.text}`);

  // 6. Streak + 28-day heat strip
  dv.header(3, "Streak");
  dv.paragraph(`${streak.hits} of last ${streak.window} slots, current run ${streak.run}`);
  const squares = streak.days
    .map((d) => {
      const bucket = !d.hit ? 0 : d.duration === null ? 1 : d.duration < 30 ? 1 : d.duration < 60 ? 2 : 3;
      const opacity = [0.12, 0.35, 0.65, 1][bucket];
      const title = d.date + (d.duration ? ` (${d.duration}m)` : "");
      return `<span title="${title}" style="display:inline-block;width:10px;height:10px;margin:1px;background:var(--interactive-accent);opacity:${opacity}"></span>`;
    })
    .join("");
  dv.el("div", squares);

  // 7. Mock evidence line
  dv.paragraph(mockLine ? `**Latest mock:** ${mockLine}` : "**Latest mock:** none yet");

  // 8. Error clustering (gated)
  dv.header(3, "Error clustering");
  if (questions.length < 20) {
    dv.paragraph(`not enough data yet (${questions.length}/20 questions)`);
  } else {
    const bad = questions.filter((q) => q.result === "wrong" || q.result === "guessed");
    const byDomain = new Map();
    for (const q of bad) {
      const domain = q.domain || "unmapped";
      if (!byDomain.has(domain)) byDomain.set(domain, new Map());
      const byService = byDomain.get(domain);
      const services = q.services.length > 0 ? q.services : ["unspecified"];
      for (const svc of services) byService.set(svc, (byService.get(svc) || 0) + 1);
    }
    for (const [domain, byService] of byDomain) {
      const parts = [...byService.entries()].map(([svc, count]) => `${svc}: ${count}`).join(", ");
      dv.paragraph(`${DOMAIN_DISPLAY_NAMES[domain] || domain}: ${parts}`);
    }
  }

  // 9. Collapsed syllabus checklist
  dv.header(3, "Syllabus");
  const topicListHTML = (topics) =>
    topics
      .map((t) => {
        const s = states.get(t.id);
        const icon = s === "proven" ? "[proven]" : s === "contested" ? "[contested]" : s === "touched" ? "[touched]" : "[ ]";
        return `<li>${icon} ${t.id} ${t.title}</li>`;
      })
      .join("");
  const currentDomainSlug = action.domainSlug || (headline.perDomain[0] && headline.perDomain[0].slug);
  for (const d of syllabus.domains) {
    const name = DOMAIN_DISPLAY_NAMES[d.slug] || d.slug;
    if (d.slug === currentDomainSlug) {
      dv.el("div", `<strong>${name} (${d.weight}%)</strong><ul>${topicListHTML(d.topics)}</ul>`);
    } else {
      const per = headline.perDomain.find((p) => p.slug === d.slug);
      dv.el(
        "details",
        `<summary>${name} (${d.weight}%) &middot; ${per.touchedCount}/${per.total} touched, ${per.provenCount}/${per.total} proven</summary><ul>${topicListHTML(d.topics)}</ul>`
      );
    }
  }

  // 10. Unmapped pile (only if nonempty)
  if (unmapped.notes.length > 0 || unmapped.questions.length > 0) {
    dv.header(3, "Unmapped");
    for (const n of unmapped.notes) dv.paragraph(`Note: [[${noteBasename(n.file)}]]`);
    for (const q of unmapped.questions) dv.paragraph(`Question: [[${noteBasename(q.file)}]]`);
  }
}

async function main(dv, input) {
  const mode = input && input.mode === "compact" ? "compact" : "full";
  // Local calendar date, NOT toISO(new Date()): toISOString() is UTC, and on UK time
  // (BST, UTC+1) that would compute yesterday's date between midnight and 1am, breaking
  // the streak and pace panels for late-evening use.
  const now = new Date();
  const todayISO = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const syllabusText = await dv.io.load(BASE + "/01 Dashboard/Syllabus.md");
  const syllabus = syllabusText ? parseSyllabus(syllabusText) : { domains: [] };
  const totalTopics = syllabus.domains.reduce((sum, d) => sum + d.topics.length, 0);
  if (totalTopics === 0) {
    dv.paragraph("Syllabus not found or empty: generate and freeze 01 Dashboard/Syllabus.md first");
    return;
  }

  const progressLogText = (await dv.io.load(BASE + "/01 Dashboard/Progress Log.md")) || "";
  const rows = parseProgressLog(progressLogText);

  const activeUnknownsText = (await dv.io.load(BASE + "/01 Dashboard/Active Unknowns.md")) || "";

  const notes = dv.pages('"' + BASE + '/02 Notes"').map(pageToNoteMeta).array();
  const questions = dv.pages('"' + BASE + '/03 Questions"').map(pageToQuestionMeta).array();

  const { states, unmapped } = computeTopicStates(syllabus, notes, questions);
  const headline = computeHeadline(syllabus, states);
  const delta = sessionDelta(rows);
  const pace = computePace(headline, rows, todayISO);
  const action = nextBestAction(syllabus, states, notes, activeUnknownsText, todayISO);

  if (mode === "compact") {
    renderCompact(dv, { headline, delta, pace, action });
    return;
  }

  const sessions = dv.pages('"' + BASE + '/04 Journey"').map(pageToSessionMeta).array();
  const streak = computeStreak(sessions, todayISO);

  const homeText = (await dv.io.load(BASE + "/01 Dashboard/AWS SAA-C03 Home.md")) || "";
  const mockMatch = homeText.match(/Latest mock score:\s*(.+)/);
  const mockLine = mockMatch && mockMatch[1].trim() !== "Not yet" ? mockMatch[1].trim() : null;

  renderFull(dv, { syllabus, states, headline, delta, pace, action, streak, mockLine, questions, notes, unmapped, todayISO });
}

if (typeof dv !== "undefined") {
  // Catch instead of await: this file is also parsed by Node as CommonJS, where top-level
  // await is a syntax error. The catch keeps any runtime failure on the page instead of
  // throwing to the Obsidian developer console (spec rule: never throw to the console).
  main(dv, input).catch((e) => dv.paragraph("Dashboard error: " + e.message));
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseSyllabus, parseProgressLog, computeTopicStates, computeHeadline, computeStreak, computePace, nextBestAction, sessionDelta };
}
```

- [ ] **Step 2: Run the full Node test suite once more, to prove Task 4 changed nothing pure**

Run: `node --test scripts/test-readiness-view.js`
Expected:
```
ℹ tests 16
ℹ pass 16
ℹ fail 0
```

- [ ] **Step 3: Create `Progress Log.md`**

Create `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md`:

````markdown
---
type: saa-progress-log
---

# Progress Log

Append one row per session, oldest first. Touched % and Proven % are the dashboard headline values at session close, read off `Readiness.md` after the dashboard update step. This file is read-only for the dashboard; only the saa-knowledge-manager agent appends to it.

| date | touched | proven | notes | questions |
| --- | --- | --- | --- | --- |
````

- [ ] **Step 4: Create `Readiness.md`**

Create `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Readiness.md`:

````markdown
---
type: saa-readiness-dashboard
---

# AWS SAA-C03 Readiness

```dataviewjs
await dv.view("Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness", {mode: "full"});
```
````

- [ ] **Step 5: Verify in Obsidian (manual, no automated test)**

Open `Readiness.md` in Obsidian. `Syllabus.md` does not exist yet at this point in the plan (Task 5 creates it), so the dashboard must render exactly one line:

```
Syllabus not found or empty: generate and freeze 01 Dashboard/Syllabus.md first
```

Confirm no error is thrown to the Obsidian developer console (Ctrl+Shift+I). If anything other than that one line renders, or an error appears, stop and fix `main()` before continuing to Task 5.

- [ ] **Step 6: Commit**

```bash
git add "Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js" "Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Readiness.md" "Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md"
git commit -m "$(cat <<'EOF'
Add Dataview runtime layer, full and compact render modes, dashboard note

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: Syllabus generation (USER GATE)

**Files:**
- Create: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md`

**Interfaces:**
- Consumes: `parseSyllabus`'s exact format contract from Task 1 (`## <Domain Name> (<weight>%)` headings, `| id | topic |` table rows, ids matching `/^(sec|res|perf|cost)-\d{2}$/`).
- Produces: the frozen `Syllabus.md` that Tasks 6 and 7 depend on.

This task is executed by, or as, the saa-knowledge-manager agent (see `00 Agent/Agent Instructions.md`), because syllabus generation is explicitly reserved to that agent per the design spec.

- [ ] **Step 1: Locate the NotebookLM notebook**

Call `mcp__notebooklm__search_notebooks` with query `"aws-saa-c03-architectural-prob"` (fall back to `mcp__notebooklm__list_notebooks` and match by name if search returns nothing). Record the returned notebook `id`.

- [ ] **Step 2: Select the notebook**

Call `mcp__notebooklm__select_notebook` with the `id` from Step 1.

- [ ] **Step 3: Ask for the topic breakdown**

Call `mcp__notebooklm__ask_question` with a prompt equivalent to:

> "Using only the official AWS Certified Solutions Architect - Associate (SAA-C03) exam guide in your sources, produce a topic checklist for each of the four exam domains: Design Secure Architectures, Design Resilient Architectures, Design High-Performing Architectures, Design Cost-Optimized Architectures. Aim for 10 to 14 topics per domain, 45 to 55 total. Each topic should be a short, testable capability (for example 'Choose the right S3 storage class for an access pattern'), not a service name. Cite the exam guide section for each domain."

Save the returned `session_id` in case follow-up questions are needed (for example, asking it to split an overly broad topic, or merge two overlapping ones).

- [ ] **Step 4: Draft `Syllabus.md` with `frozen: false`**

Create `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md` using this skeleton. The id prefix per domain must match `parseSyllabus`'s regex: `sec-` for Secure, `res-` for Resilient, `perf-` for High-Performing, `cost-` for Cost-Optimized, each followed by a two-digit, zero-padded, per-domain sequence number (`sec-01`, `sec-02`, ... `sec-12`, and so on). Fill each domain's table with the topics NotebookLM returned in Step 3, one row per topic, title in the implementer's own words (not pasted verbatim from the exam guide, matching the vault's no-bulk-import rule):

````markdown
---
type: saa-syllabus
frozen: false
generated: 2026-07-22
source: AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf via NotebookLM, notebook aws-saa-c03-architectural-prob
---

# AWS SAA-C03 Syllabus

Frozen denominator for the readiness dashboard. Adding notes can never add topics here; this file only changes by an explicit, user-approved edit.

## Design Secure Architectures (30%)

| id | topic |
| --- | --- |
| sec-01 | <topic> |
| sec-02 | <topic> |

## Design Resilient Architectures (26%)

| id | topic |
| --- | --- |
| res-01 | <topic> |

## Design High-Performing Architectures (24%)

| id | topic |
| --- | --- |
| perf-01 | <topic> |

## Design Cost-Optimized Architectures (20%)

| id | topic |
| --- | --- |
| cost-01 | <topic> |
````

- [ ] **Step 5: STOP: user must approve topic list before freeze**

Present the full topic list (all four domains, every row) to Chukwan for a sanity check, per the design spec's open question. Do not proceed to Step 6 without explicit approval. Apply any edits he asks for (split, merge, reword, reorder) directly in the draft file.

- [ ] **Step 6: Freeze**

Once approved, edit the frontmatter: `frozen: false` becomes `frozen: true`. Do not change `frozen: true` back to `false` afterward; a new topic list becomes a new generation, not a silent edit.

- [ ] **Step 7: Verify parsing**

Run this from repo root to confirm the frozen file parses cleanly and count the topics:

```bash
node -e "const fs=require('fs'); const {parseSyllabus}=require('./Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js'); const s=parseSyllabus(fs.readFileSync('./Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md','utf8')); console.log(s.domains.map(d=>({slug:d.slug, weight:d.weight, topics:d.topics.length})));"
```

Expected: an array of 4 objects, one per domain, each with the correct weight (30, 26, 24, 20) and a topic count between 10 and 14. If any domain is missing or a weight is wrong, the heading text did not match one of the four exact strings in `DOMAIN_SLUGS`; fix the heading and rerun.

- [ ] **Step 8: Verify in Obsidian**

Open `Readiness.md`. The "Syllabus not found" guard line from Task 4 must be gone, replaced by the real dashboard: TOUCHED 0% and PROVEN 0% (no notes are mapped yet), the domain bars for all four domains, and the collapsed syllabus checklist showing every topic as `[ ]`.

- [ ] **Step 9: Commit**

```bash
git add "Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md"
git commit -m "$(cat <<'EOF'
Freeze AWS SAA-C03 syllabus as the readiness dashboard denominator

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: Wiring the writers

**Files:**
- Modify: `Template/SAA Knowledge Note Template.md`
- Modify: `Template/SAA Question Note Template.md`
- Modify: `Knowledge/Professionals/AWS SAA-C03/00 Agent/Agent Instructions.md`
- Modify (backfill `topics:`): the 6 files in `02 Notes/` and 6 files in `03 Questions/` listed in Step 3
- Modify: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md`

**Interfaces:**
- Consumes: the frozen `Syllabus.md` from Task 5 (the implementer reads its topic ids to pick backfill values).
- Produces: nothing new for later tasks; this task makes the existing vault content compatible with Tasks 1 to 4's `topics:` contract.

Per the design spec, template edits are pre-approved by this spec, and vault-content edits in this task must preserve existing content exactly, editing only the specified regions.

- [ ] **Step 1: Add `topics:` to the Knowledge Note template**

Edit `Template/SAA Knowledge Note Template.md`. Replace:

```yaml
---
type: saa-note
domain: # secure-architectures / resilient-architectures / high-performing-architectures / cost-optimized-architectures
services: # 涉及的 AWS 服務,e.g. S3, EC2
status: # capture / distilled / connected
date:
tags:
---
```

with:

```yaml
---
type: saa-note
domain: # secure-architectures / resilient-architectures / high-performing-architectures / cost-optimized-architectures
topics: # id(s) from 01 Dashboard/Syllabus.md,例如 [sec-04]
services: # 涉及的 AWS 服務,e.g. S3, EC2
status: # capture / distilled / connected
date:
tags:
---
```

- [ ] **Step 2: Add `topics:` to the Question Note template**

Edit `Template/SAA Question Note Template.md`. Replace:

```yaml
---
type: saa-question
source: # e.g. Tutorials Dojo / Cantrill / AWS official
domain: # secure-architectures / resilient-architectures / high-performing-architectures / cost-optimized-architectures
services:
result: # wrong / guessed / slow(只記值得回顧的題目)
date:
tags:
---
```

with:

```yaml
---
type: saa-question
source: # e.g. Tutorials Dojo / Cantrill / AWS official
domain: # secure-architectures / resilient-architectures / high-performing-architectures / cost-optimized-architectures
topics: # id(s) from 01 Dashboard/Syllabus.md,例如 [sec-04]
services:
result: # wrong / guessed / slow(只記值得回顧的題目)
date:
tags:
---
```

- [ ] **Step 3: Backfill `topics:` on the 12 existing notes and questions**

All 12 files are currently `domain: secure-architectures` and untouched by any `topics:` field. Open the frozen `01 Dashboard/Syllabus.md` from Task 5 and, for each file below, pick the one (or two, if the note genuinely spans two testable capabilities) topic id under Secure whose title is the closest match to the file's claim, then insert a `topics:` line directly after the existing `domain:` line, in the same bracket-array style as the template (`topics: [sec-04]`). Do not alter any other line.

Notes in `02 Notes/` (insert after `domain: secure-architectures`):

| File | Claim, for id matching |
| --- | --- |
| `A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away.md` | SCP as an org-level guardrail above account identity policies |
| `A session token exists because STS does not persist temporary credentials in IAM.md` | why the session token exists; STS does not persist temporary credentials |
| `A temporary credential leak has a smaller blast radius than a leaked long-term IAM user key.md` | blast radius of temporary vs long-term credential leaks |
| `An EC2 workload should use an IAM Role to obtain temporary credentials.md` | EC2 workload identity via IAM Role, not long-term keys |
| `An applicable Explicit Deny overrides every Allow during AWS policy evaluation.md` | Explicit Deny overriding Allow in policy evaluation |
| `SigV4 signs each request using credentials that STS separately issues.md` | SigV4 request signing, separate from STS credential issuance |

Questions in `03 Questions/` (insert after `domain: secure-architectures`), each mapped to the same topic id as its linked Knowledge Note:

| File | Linked Knowledge Note (for id matching) |
| --- | --- |
| `A session token exists because temporary credentials are never persisted in IAM.md` | A session token exists because STS does not persist temporary credentials in IAM |
| `Authorization happens on AWS's side, not inside the requesting application.md` | An EC2 workload should use an IAM Role to obtain temporary credentials |
| `Choose an IAM Role when an EC2 application needs S3 access.md` | An EC2 workload should use an IAM Role to obtain temporary credentials |
| `Explicit Deny blocks an otherwise allowed S3 request.md` | An applicable Explicit Deny overrides every Allow during AWS policy evaluation |
| `Explicit Deny is checked before any Allow, not evaluated after it.md` | An applicable Explicit Deny overrides every Allow during AWS policy evaluation |
| `Only an SCP-level Explicit Deny reliably blocks a newly added regional Allow.md` | A Service Control Policy sets an organization-level permission ceiling that no identity policy inside the account can grant away |

After all 12 edits, verify none of the 12 files land in the unmapped pile:

```bash
node -e "
const fs = require('fs');
const { parseSyllabus, computeTopicStates } = require('./Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness/view.js');
const path = require('path');
const yaml = (text) => {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = {};
  if (!m) return fm;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    let [, k, v] = kv;
    v = v.trim();
    if (v.startsWith('[') && v.endsWith(']')) v = v.slice(1, -1).split(',').map((s) => s.trim());
    fm[k] = v;
  }
  return fm;
};
const dir = (sub) => path.join('Knowledge', 'Professionals', 'AWS SAA-C03', sub);
const readAll = (sub) => fs.readdirSync(dir(sub)).map((f) => {
  const fm = yaml(fs.readFileSync(path.join(dir(sub), f), 'utf8'));
  return { file: sub + '/' + f, ...fm, topics: Array.isArray(fm.topics) ? fm.topics : (fm.topics ? [fm.topics] : []) };
});
const notes = readAll('02 Notes').map((n) => ({ file: n.file, status: n.status, date: n.date, mastered: n.mastered || null, topics: n.topics, domain: n.domain }));
const questions = readAll('03 Questions').map((q) => ({ file: q.file, result: q.result, date: q.date, topics: q.topics, domain: q.domain, services: [] }));
const syllabus = parseSyllabus(fs.readFileSync('./Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Syllabus.md', 'utf8'));
const { unmapped } = computeTopicStates(syllabus, notes, questions);
console.log('unmapped notes:', unmapped.notes.map((n) => n.file));
console.log('unmapped questions:', unmapped.questions.map((q) => q.file));
"
```

Expected: both arrays print empty (`[]`). If any file appears, its `topics:` line is missing or its id is misspelled against `Syllabus.md`; fix and rerun.

- [ ] **Step 4: Add the 4 knowledge-manager additions to Agent Instructions**

Edit `Knowledge/Professionals/AWS SAA-C03/00 Agent/Agent Instructions.md`.

4a. Replace:

```markdown
1. **Atomic notes** → `02 Notes/`, using SAA Knowledge Note Template. Title is a one-sentence claim, never a topic. One idea per note. Status walks capture → distilled → connected. The title-is-a-claim rule applies to Knowledge Notes only; Question Notes, Study Sessions, and Content Ideas may use descriptive titles.
```

with:

```markdown
1. **Atomic notes** → `02 Notes/`, using SAA Knowledge Note Template. Title is a one-sentence claim, never a topic. One idea per note. Status walks capture → distilled → connected. The title-is-a-claim rule applies to Knowledge Notes only; Question Notes, Study Sessions, and Content Ideas may use descriptive titles. At creation, assign `topics:` (one or more ids from `01 Dashboard/Syllabus.md`) in frontmatter; a note with no valid topic id renders in the readiness dashboard's unmapped pile.
```

4b. Replace:

```markdown
2. **Question log** → `03 Questions/`, using SAA Question Note Template. Only wrong / guessed / slow questions. Paraphrase the gist; never paste a full question. Every question note must link to (or spawn) exactly one knowledge note, or be flagged for archive.
```

with:

```markdown
2. **Question log** → `03 Questions/`, using SAA Question Note Template. Only wrong / guessed / slow questions. Paraphrase the gist; never paste a full question. Every question note must link to (or spawn) exactly one knowledge note, or be flagged for archive. At creation, assign the same `topics:` id(s) as its linked knowledge note.
```

4c. Replace:

```markdown
- **Mastery needs evidence.** A knowledge note may be marked mastered only when ALL four hold, with the evidence cited in the note:
  1. Chukwan can explain it without notes.
  2. He has answered at least two different scenario questions on it correctly.
  3. At least one of those successful tests happened 3+ days after the note reached distilled.
  4. He can explain why the main distractor is wrong.
  "Connected" is a linking state, not mastery.
```

with:

```markdown
- **Mastery needs evidence.** A knowledge note may be marked mastered only when ALL four hold, with the evidence cited in the note:
  1. Chukwan can explain it without notes.
  2. He has answered at least two different scenario questions on it correctly.
  3. At least one of those successful tests happened 3+ days after the note reached distilled.
  4. He can explain why the main distractor is wrong.
  "Connected" is a linking state, not mastery. When promoting a note to mastered, add `mastered: YYYY-MM-DD` to frontmatter the same day; the readiness dashboard uses this date to detect a contested topic if a later wrong or guessed question postdates it.
```

4d. Replace:

```markdown
5. **Dashboard** → `01 Dashboard/`. After every session note, update [[AWS SAA-C03 Home]]: days remaining, Current Focus (= the session's next-action), Recent Study, latest mock score if any.
```

with:

```markdown
5. **Dashboard** → `01 Dashboard/`. After every session note, update [[AWS SAA-C03 Home]]: days remaining, Current Focus (= the session's next-action), Recent Study, latest mock score if any. Syllabus generation (`01 Dashboard/Syllabus.md`) is a one-time task, performed once via the NotebookLM notebook `aws-saa-c03-architectural-prob` and frozen with the user's sanity-check approval; do not regenerate it.
```

4e. Replace:

```markdown
## Session cadence
When invoked with raw study output (messy notes, a list of missed questions, a session recap), process in this order: session note → question notes → knowledge notes → unknowns triage → dashboard update. Report what was created, extended, and archived, in one short list.
```

with:

```markdown
## Session cadence
When invoked with raw study output (messy notes, a list of missed questions, a session recap), process in this order: session note → question notes → knowledge notes → unknowns triage → dashboard update → Progress Log row. Report what was created, extended, and archived, in one short list.

The final step, Progress Log row, is: after the dashboard update, open [[Readiness]], read the current TOUCHED and PROVEN percentages from the rendered headline, and append one row to `01 Dashboard/Progress Log.md`: `| YYYY-MM-DD | <touched%> | <proven%> | <notes count> | <questions count> |`, where notes count and questions count are the total file counts in `02 Notes/` and `03 Questions/` at that moment.
```

- [ ] **Step 5: Append the first real Progress Log baseline row**

With the backfill from Step 3 and the frozen syllabus from Task 5 both in place, open `Readiness.md` in Obsidian and read the rendered TOUCHED and PROVEN percentages from the headline. Append one row to `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md`, below the header and divider row, using the actual date this step is executed (this row is the pace-line baseline anchor, so a stale date would tilt both pace lines):

```
| <actual execution date YYYY-MM-DD> | <touched% read from Readiness.md> | 0 | 6 | 6 |
```

Proven is known to be exactly `0` without opening Obsidian: all 6 notes backfilled in Step 3 are `status: capture`, so no topic can be `mastered` yet (`computeTopicStates` only sets `proven` when a mapped note has `status: mastered`). Touched must be read from the live render because it depends on how many distinct topic ids the 6 notes collectively cover, which depends on the frozen syllabus's actual wording, not knowable until Task 5 completes.

- [ ] **Step 6: Commit**

```bash
git add "Template/SAA Knowledge Note Template.md" "Template/SAA Question Note Template.md" "Knowledge/Professionals/AWS SAA-C03/00 Agent/Agent Instructions.md" "Knowledge/Professionals/AWS SAA-C03/02 Notes" "Knowledge/Professionals/AWS SAA-C03/03 Questions" "Knowledge/Professionals/AWS SAA-C03/01 Dashboard/Progress Log.md"
git commit -m "$(cat <<'EOF'
Wire topics: into templates and agent cadence, backfill existing notes, log baseline

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: Home embed and live acceptance

**Files:**
- Modify: `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS SAA-C03 Home.md`

**Interfaces:**
- Consumes: the compact render mode from Task 4, the fully wired vault from Task 6.
- Produces: nothing further; this is the last task.

- [ ] **Step 1: Add the compact embed to Home**

Edit `Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS SAA-C03 Home.md`. Replace:

````markdown
## Exam
- Exam date: 2026-08-23 12:00 BST
- Days remaining: 32
- Latest mock score: Not yet

## Current Focus
````

with:

````markdown
## Exam
- Exam date: 2026-08-23 12:00 BST
- Days remaining: 32
- Latest mock score: Not yet

## Readiness

```dataviewjs
await dv.view("Knowledge/Professionals/AWS SAA-C03/00 Agent/readiness", {mode: "compact"});
```

## Current Focus
````

- [ ] **Step 2: Live acceptance checklist (manual, in Obsidian)**

Open both `Readiness.md` and `AWS SAA-C03 Home.md`. Confirm every item against the real vault:

- [ ] `AWS SAA-C03 Home.md` renders the compact block: a `TOUCHED x% · PROVEN y%` line, the pace sentence, and a `Next:` line, with no console error.
- [ ] Touched % for the Secure domain (in `Readiness.md`'s domain bars) is greater than 0, and Proven is exactly 0, matching the live acceptance criteria in the design spec.
- [ ] Streak panel reads `2 of last 10 slots, current run 2`, from the two real session notes dated 2026-07-21 and 2026-07-22. This expected reading assumes execution on 2026-07-22; if executing on a later date, recompute the expectation from whatever session notes exist in `04 Journey/` by then and verify against that instead.
- [ ] Error clustering panel reads `not enough data yet (6/20 questions)`, since `03 Questions/` has exactly 6 files.
- [ ] All 12 backfilled files are absent from the Unmapped panel (rerun the Step 3 verification script from Task 6 if in doubt); the Unmapped panel section does not render at all when both lists are empty.

If any check fails, fix the underlying cause (not the check) before committing: a touched% of 0 means the backfill in Task 6 did not take; a streak other than 2 of 10 means `computeStreak` or the session note dates are wrong; a wrong error-gate count means a stray file exists in `03 Questions/`; a nonempty Unmapped panel means a `topics:` id does not match the frozen `Syllabus.md`.

- [ ] **Step 3: Commit**

```bash
git add "Knowledge/Professionals/AWS SAA-C03/01 Dashboard/AWS SAA-C03 Home.md"
git commit -m "$(cat <<'EOF'
Embed compact readiness block in AWS SAA-C03 Home

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
EOF
)"
```
