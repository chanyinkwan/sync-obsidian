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
