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
