---
type: research-block
block: F
scope: company
company: Cogna
role: Solutions Analyst
tier: baseline
tool: claude-native
generated: 2026-08-21
quality: n/a
unanswered: []
tags: [job-hunt, research]
---
# Block F — The Role

## 1. What does the Solutions function do day to day?

- **Verified (JD, workable.com posting, read 2026-08-21):** the role is explicitly framed as a blend of Forward Deployed Engineering, Deployment Strategist, Customer Success, and Value Engineering — "the most interesting, and challenging, parts" of each. Cogna states the role's shape may change in 12 months; it's still being defined.
- **Verified (LinkedIn, Cogna company page, "A day in the life of our Solution Strategists"):**
  - Discover: deep-dives into a customer's operating model using Cogna's platform, including an "AI-powered whiteboard" to map workflows live with customers — and explicitly working across organisational levels, not just with the C-suite.
  - Define: refining requirements found in Discover into a detailed spec the AI platform can build against; translating workflow into the platform's application framework.
  - Deliver: overseeing final build/deployment, presenting the finished app to the client, and supporting iteration as needs evolve.
  - Pay model is stated as a forcing function: "we don't get paid by the hour... only once the customer is satisfied" — so the Solutions person's day-to-day work is tied to provable customer value, not billable hours or a hand-off deck.
- **Verified (Cogna case studies, cogna.co/blog and cogna.co/customers):** the pattern across live accounts (Cadent Gas, Network Plus, OCU) is short cycles — a working app inside weeks, not months, with the Solutions side doing hands-on data unification, workflow mapping, and post-launch adoption push (e.g. Cadent hit "100% completion of review items" in pilot).
- **Inference (from Palantir FDE comparables — blog.palantir.com "A Day in the Life of a Palantir FDE", Activated Thinker/Medium analysis, Perspective AI's "Forward-Deployed Engineering Playbook"):** given Cogna's own JD draws the FDE comparison directly, day-to-day likely mixes customer workshops, reviewing/correcting what the AI "software factory" has generated (rather than writing code from scratch), pairing with customer domain experts and IT, and training end users — closer to Palantir's "ship on day one" ethos (reject the "discover for 90 days, deliver a deck" consultant pattern) than to a classic enterprise SE cycle.
- **Not found:** no hour-by-hour breakdown or internal doc describing an Analyst's typical week.

## 2. What qualification / discovery method does the function use?

- **Verified (JD + two Cogna LinkedIn pulse articles: "Discover, Define, Deliver: Building solutions with Cogna" and "A day in the life of our Solution Strategists"):** Cogna uses its own named methodology, **Discover, Define, Deliver** — not MEDDPICC, SPIN, or BANT. No public Cogna material references any standard enterprise-sales qualification framework.
  - **Discover:** a ~90-minute initial call where a Solutions Strategist helps the customer articulate challenges in plain language, plus high-level identification of data sources (spreadsheets, SQL databases, tacit team knowledge). Session ends with a skeleton prototype / detailed "app description" the customer sees **before any contract is signed**.
  - **Define:** a deeper dive into the identified data — structure, daily usage patterns — done with customer domain experts and uploaded example files. Cogna returns a detailed proposal and collects async feedback. Phase ends when "the AI software factory has all the raw data needed to determine what software it needs to build."
  - **Deliver:** the AI factory builds the app, a human engineer reviews it, it's hosted as SaaS, and the Solutions Strategist runs guided onboarding. Notably, the customer is **not invoiced for the licence fee until the app proves operationally useful** — the qualification-to-revenue gate is functional adoption, not a signature.
- **Inference:** because pre-contract Discover already produces a tangible prototype, Discover/Define/Deliver functions as *both* the qualification vehicle and the delivery methodology at once — qualification here is closer to technical/data feasibility triage than classic economic-buyer/champion stakeholder mapping. Formal deal-qualification frameworks (MEDDPICC-style) more plausibly sit with the separate GTM/sales function (see Q4) than with the Solutions Analyst seat itself. This is inference — not confirmed by any source.

## 3. What are the KPIs for this seat? What would a Solutions Analyst be measured on at 6 months?

- **Unanswered directly.** No job posting, blog post, or LinkedIn material found states explicit KPIs, quotas, or a scorecard for the Solutions Analyst role.
- **Inference, grounded in verified facts about the business model:** Cogna's own stated model gates its revenue on delivered value ("you won't be invoiced... until the application proves operationally useful" — LinkedIn "Discover, Define, Deliver" pulse article). That structurally implies the company measures **time-to-value and post-deployment adoption/usage** as first-order metrics, since they are literally tied to when Cogna gets paid. Plausible (unverified) 6-month markers for an Analyst, extrapolated from this plus the case-study cadence (Network Plus: 6 weeks concept-to-live; OCU delivered ahead of schedule; Cadent "within weeks"):
  - Number and speed of Discover→Deliver cycles contributed to or led.
  - Conversion rate of Discover calls into signed/active engagements.
  - Post-launch adoption/usage of delivered apps on their accounts (analogous to Cadent's "100% completion of review items" framing).
  - Qualitative account-health input from the senior Solutions Strategists/Director they work alongside.
- Treat all of the above as reasoned inference, not fact — flag explicitly in interview prep as a question to ask directly (e.g. "what does success look like for this seat at 6 months, concretely").

## 4. Who does the seat sit between, and what does each side need?

- **Verified (JD):** "Build strong internal relationships across the solutions team and with engineering, and understand when (and when not) to involve others" is a listed responsibility — confirming Solutions and Engineering are distinct groups the Analyst must actively broker between, using judgment on when to escalate.
- **Verified (itbrief.co.uk, "Cogna appoints senior leaders to drive growth in UK & EMEA," and cogna.co/blog leadership announcement):** the Solutions function ("UK Solution Strategy"/"SolStrat") is led by **James Dickinson**, an early Palantir London FDE-team member and former NHS AI Director, appointed UK Solution Strategy Director. Solutions Analyst → Strategist → Director are tiers within this one function (Cogna is separately hiring Solutions Director and Solutions Strategist per the JD itself), not separate departments. The same announcement names **Luke Rogers** as a GTM Advisor whose remit includes "sales execution" — evidence of a distinct sales/GTM function sitting apart from Solutions.
- **Verified (LinkedIn, Andy Gordon engineering piece "On the edge of possible: Why Cogna is the perfect challenge for an engineer"):** engineers explicitly value direct customer exposure and iterate based on real usage feedback rather than theoretical specs — i.e., engineering depends on the Solutions function as its primary channel for ground-truth customer signal.
- **Inference — the seat's position and each side's need:**
  - **Sales/GTM** (Luke Rogers' remit): needs Discover-stage conversations converted into signed, correctly-scoped engagements, and needs expansion opportunities surfaced from accounts the Analyst is already embedded in.
  - **Engineering / the AI "factory"**: needs precise, validated requirements and clean data out of Define, plus a competent filter on when a human engineer actually needs to get involved versus when the factory can run unassisted.
  - **Customer operational/domain teams (not just IT or the C-suite)**: need a translator who speaks their operational language, maps real workflow (not an idealised one), and ensures training/adoption actually happens post-Deliver.
  - **Customer IT**: needs integration cooperation and assurance on data handling during Discover/Define.
- **Not found:** no org chart or reporting-line diagram; unclear whether Solutions Analysts report to Dickinson directly or to a Strategist/account lead.

## 5. What does the first 90 days plausibly look like?

- **Unanswered directly.** No Cogna source (job posting, blog, LinkedIn) describes an onboarding or ramp plan for the Solutions Analyst seat specifically — this is pure inference below, and should be asked about directly in the interview process.
- **Inference, built from three verified data points:**
  1. The JD frames the Analyst as working "alongside more senior members of the Solutions team ... on some of our biggest enterprise accounts," implying paired/shadowed work rather than solo ownership from day one.
  2. Cogna's own Discover→Deliver cycles run on a multi-week cadence (Network Plus: 6 weeks concept-to-live; Cadent and OCU: "within weeks" / "ahead of schedule") — meaning a new hire could plausibly observe or contribute to one to two full cycles inside a 90-day window.
  3. The Palantir FDE comparable Cogna's own JD invites ("ship on day one," reject "discover for 90 days, deliver a deck") suggests Cogna would want new hires touching real customer work early, not sitting through a long pure-training period.
- **Plausible shape (inference, unverified):**
  - **Days 1–30 — learning:** platform fluency, shadowing senior Solutions Strategists on live Discover/Define calls, building sector context (utilities, energy, manufacturing, construction), and learning the AI factory's real capabilities and limits.
  - **Days 30–60 — co-piloting:** taking a support/co-lead role in a Define or Deliver phase on an existing account (training, data structuring, proposal drafting), running smaller discovery threads with a senior strategist as backstop.
  - **Days 60–90 — owning:** running a Discover→Deliver cycle end-to-end, most plausibly on a smaller sub-workstream inside a larger enterprise account, matching the JD's own framing that Analysts "identify key opportunities" and carry them through Discover, Define, and Deliver.
- Label this whole answer as a reasoned construct, not a confirmed onboarding plan.

## Sources

- [Cogna Solutions Analyst JD (workable.com)](https://apply.workable.com/cogna/j/7D12637D61/) — local copy: `Solutions Analyst JD.md`
- [Discover, Define, Deliver: Building solutions with Cogna (LinkedIn, Cogna company page)](https://www.linkedin.com/pulse/discover-define-deliver-building-solutions-cogna-wearecogna-lcwye)
- [A day in the life of our Solution Strategists (LinkedIn, Cogna company page)](https://www.linkedin.com/pulse/day-life-our-solution-strategists-wearecogna-qukte)
- [On the edge of possible: Why Cogna is the perfect challenge for an engineer (LinkedIn, Andy Gordon)](https://www.linkedin.com/pulse/edge-possible-why-cogna-perfect-challenge-engineer-andy-gordon-orxse/)
- [Cogna appoints senior leaders to drive growth in UK & EMEA (itbrief.co.uk)](https://itbrief.co.uk/story/cogna-appoints-senior-leaders-to-drive-growth-in-uk-emea)
- [Cogna strengthens leadership team... (cogna.co/blog)](https://cogna.co/blog/cogna-strengthens-leadership-team-with-key-appointments-to-support-next-phase-of-growth/)
- [From manual to high-efficiency in record time with Cogna (cogna.co/blog)](https://cogna.co/blog/from-manual-to-high-efficiency-in-record-time-with-cogna/)
- [Cogna customer case studies (cogna.co/customers)](https://www.cogna.co/customers)
- [From self-driving cars to AI that writes enterprise software (TechCrunch, Nov 2024)](https://techcrunch.com/2024/11/11/from-self-driving-cars-to-ai-that-writes-enterprise-software-cogna-founder-raises-15m/)
- [A Day in the Life of a Palantir Forward Deployed Software Engineer (Palantir blog)](https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1)
- [A Comprehensive Analysis of Palantir's Forward Deployed Engineering Model (Medium, Activated Thinker)](https://medium.com/activated-thinker/a-comprehensive-analysis-of-palantirs-forward-deployed-engineering-model-4502a036b5e4)
- [Palantir's Forward-Deployed Engineering Playbook (Perspective AI blog)](https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying)
