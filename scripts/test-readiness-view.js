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
