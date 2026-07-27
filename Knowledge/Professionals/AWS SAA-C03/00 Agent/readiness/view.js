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
// Ladder (canonical def in 00 Agent/Agent Instructions.md): Untouched < Touched < Proven.
//   touched = at least one engaged note (status capture/distilled/connected) maps to the topic.
//             Backward-compat: any leftover note with status:"primed" (from the retired priming
//             design) does not count as engaged; a topic with only such notes reads as untouched.
//   proven  = a mastered note exists (status:"mastered" + mastered date) and no later wrong/guessed
//             question contests it; contested if one does.
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
    // Backward-compat: any leftover note with status:"primed" (from the retired priming design)
    // does not count as engaged, so a topic with only such notes reads as untouched.
    const engagedNotes = mappedNotes.filter((n) => n.status !== "primed");
    if (engagedNotes.length === 0) {
      states.set(id, "untouched");
      continue;
    }
    const masteredNotes = engagedNotes.filter((n) => n.status === "mastered" && n.mastered);
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

  // 1. State-ladder headline (Untouched < Touched < Proven)
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
          <div style="background:var(--interactive-accent);opacity:0.35;height:8px;width:${touchedPct}%;position:absolute;top:0;left:0"></div>
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
