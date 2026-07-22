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
