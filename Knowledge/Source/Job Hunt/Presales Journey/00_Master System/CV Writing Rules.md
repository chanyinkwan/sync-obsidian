# CV Writing Rules

Standing rules for every CV generated from this folder. Set 2026-07-14. These override any style habit picked up from an older CV in this folder (including the TripBiz one, which predates these rules).

## 1. Every bullet uses the Google XYZ formula

> **Accomplished [X], as measured by [Y], by doing [Z].**

The order can flex for readability, but all three parts must be present and the **result comes before the method**. If a bullet opens with what you did rather than what changed, it is wrong.

- Bad (activity, no result): *"Responsible for running technical workshops with the customer."*
- Bad (method first): *"By running 3 technical workshops, requirements were gathered."*
- Good: *"Surfaced the requirements the bid was built on (X) by running 3 technical workshops and one structured requirements session (Y, Z) with the customer's engineering stakeholders."*

**Y must be a real number.** Hours saved per year, revenue, percent change, headcount, volume, cycle time, error rate. If no number exists, the bullet is not finished. Either go and get the number, or cut the bullet. Never invent one.

## 2. Emphasise impact, not activity

The reader is buying an outcome, not a job description. Load the front of the bullet with the thing that changed for the business: money, time, risk, revenue, adoption, compliance. The tooling is the tail of the sentence, never the head.

Rank bullets within a role by size of impact, not chronology.

## 3. No em dashes or en dashes in prose

Do not use `—` or `–` inside any sentence. They are the loudest tell of machine-written text. Rewrite with a full stop, a comma, a colon, or brackets.

Allowed: hyphens in genuine compounds (`cross-functional`, `Tier-1`, `real-time`, `follow-the-sun`) and the en dash in date ranges (`Apr 2026 – Present`), which is formatting, not writing.

## 4. Write like a person, not a model

- Plain verbs a human would say out loud. Prefer *cut, saved, built, closed, ran, got, ended, brought in*. Avoid *leveraged, spearheaded, orchestrated, utilised, showcased, drove synergies*.
- Vary sentence shape and bullet length. Do not let every bullet land on the same rhythm or the same word count.
- No triads of parallel phrases ("faster, cleaner, smarter"). No "not only X, but Y". No "it's not just A, it's B".
- Contractions are fine in a cover letter, not in a CV bullet.
- Say the number plainly ("50 to 60 percent"), do not dress it up.
- Read it aloud. If you would not say it to a colleague in a pub, rewrite it.

## 5. Truth gating

- Bullets come from `Knowledge/Source/Job Hunt/Presales Journey/00_Master System/MasterExperienceDB.json`. That file is canonical for titles, dates, and claims.
- A bullet marked `"status": "draft"` with a `note` saying *do not use in CV* stays out of the CV until the underlying thing actually ships. No exceptions, no clever rephrasing to sneak it in.
- Ongoing responsibilities may be stated as responsibilities. They may not be dressed up as completed achievements.
- Timeline comes from the canonical LinkedIn-confirmed dates in `MasterExperienceDB.json`, not from `NewProofBank.json` (archived, dates unreliable) and not from `CLAUDE.md` (stale role title).

## 6. Tailoring

- Read the JD, then pick the roles and bullets that answer its stated duties and hard minimums. Do not ship the same bullet set to every employer.
- Name the employer's product or problem once in the profile summary, to prove the CV was written for them.
- Where domain experience is genuinely absent, do not fake it. Bridge with the closest honest analogue and say what it is.

## 7. Pipeline

Never hand-build the .docx. Write a context JSON and render it:

```bash
python "Knowledge/Source/Job Hunt/Presales Journey/00_Master System/Tools/render_cv.py" "Knowledge/Source/Job Hunt/Presales Journey/Companies/<Company — Role>/CV/CV Context — <Company> <Role>.json"
```

Template keys: `profile_summary`, `experience[{company, location, role, dates, bullets[]}]`, `activity_line`, `language_line`, `skills_line`, `interests_line`. Education is hard-coded in `Resume_Template.docx`.

## Pre-send checklist

- [ ] Every bullet has X, Y and Z, with a real number for Y
- [ ] Result appears before method in every bullet
- [ ] Zero `—` and zero `–` outside date ranges
- [ ] No draft-status or unshipped claims
- [ ] Dates match `MasterExperienceDB.json`
- [ ] Read aloud once, start to finish
