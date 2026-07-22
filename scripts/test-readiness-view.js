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
