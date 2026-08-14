---
type: prep-note
company: Samsara
role: Associate Sales Engineer, UK&I
interviewer: Elmira Maksudova
interview_date: 2026-08-14
interview_stage: first-round screen
cv_submitted: Kessog Chan CV — Presales.pdf
related:
  - "[[Associate Sales Engineer JD]]"
  - "[[What do I want to know]]"
tags:
  - prep-note
  - job-hunt
  - samsara
---

# Screen Call Prep — Samsara Associate Sales Engineer

**v2, rewritten after independent review.** The first draft was built for the wrong interview: it spent most of its length on technical fit and CV arithmetic, and almost nothing on what a first screen actually gates on. A screener reads dates before bullets. This version leads with dates and mechanics.

Talking to **Elmira Maksudova**. She is holding `Kessog Chan CV — Presales.pdf`. Everything here is anchored to what is on that page.

> **Do this first, it takes two minutes.** Check the calendar invite or her LinkedIn to see whether Elmira is recruiting or engineering. If recruiting, the call is mostly §1 and §3. If engineering, weight §5 and §6 instead.

---

## 1. Mechanics: one sentence each, no hedging

These decide more first screens than any story. Have the actual answers, not approximations.

| Question                     | Your line                                                                                                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Notice period and start date | One Month                                                                                                                                                                                                                                            |
| Right to work                | I have full unrestricted right to work in the UK. No sponsorship needed now or at any point in future.                                                                                                                                               |
| Remote UK and travel         | London based, working home setup, and you want to travel to customer sites. Say why: seeing how a business actually runs is the part you like.  IoT customers are depots, yards and fleets, so appetite for site visits is a genuine differentiator. |
| The Dec 2025 to Apr 2026 gap | "Finished the MSc in December, ran a focused search into presales rather than taking the first thing, started at Huawei in April." Four months, ordinary, needs no cover story.                                                                      |

---

## 2. Sixty-second introduction

Rewritten so it matches the order of roles on the CV she is reading, keeps the pipeline and Viu TV figures apart, and lands the level question on your terms.

> I'm Kessog, based in London. Six years across B2B sales, product delivery and technical operations, and now presales.
>
> Right now I'm presales cover on a Tier-1 UK mobile network operator account at Huawei: feasibility, device portfolio, pricing input. Before that, technical product management at Bank of China on e-banking and payments, delivering a regulator's mandates inside a hard 14-day window. Before that I spent two and a half years at Apple as an operations data analyst, and before that in their B2B team, where I built GBP 350,000 of pipeline across a 50-account portfolio.
>
> There is one thread through all four: I find manual work and I remove it. A ticketing queue at Apple, a reporting setup the year after, a Grafana observability layer at Bank of China, and VBA automation running in production on the programme I own at Huawei now. Four employers, one behaviour.
>
> What pulls me to Samsara is that it points that at physical operations, where the device and the data are the product. And to say the obvious one first: I know six years against an Associate title looks odd, and I'm happy to take that head on whenever you want it.

**Why the changes:** the old version skipped Operation Data Analyst, your largest CV block, so the story did not match the page. It also claimed "six years in the front half of technical deals," which one follow-up puncture ("which of those was presales?") turns into a retreat. And it fused the GBP 350,000 pipeline with the Viu TV close, which your database explicitly forbids because the overlap is unresolved.

---

## 3. The questions they actually ask

Every question below is lifted from [[Past Interview Questions]], the cleaned Glassdoor set. These are first drafts, grounded only in `MasterExperienceDB.json`. Nothing here uses a figure marked `needs_grounding`, `blocked` or `cut`.

**How to use this:** say each one out loud once and cut it to 45 seconds. A written answer you have never spoken comes out at double length. Rehearse Q1 to Q4 properly. Q5 to Q8 need one read so you are not assembling them live.

---

### Q1. "Why do you want to work as a sales engineer?" / "What drives you to become one?"

*Reported in every recruiter-screen account. This is the one they always ask.*

> "I have already run the front half of a technical deal end to end, and the part I liked most was when a technical objection was the thing standing in the way. At Apple, a Hong Kong broadcaster walked into the store with no opportunity attached to it. I worked it for three months, did the technical support myself to earn credibility, and built a custom business pricing portal because that was the artifact procurement needed in order to say yes. The last thing blocking it was fleet control, and I cleared that by bringing in device management. It closed at GBP 50,000.
>
> What I do not have yet is one product I know deeply enough to answer on the call instead of coming back with an answer. That is the specific part of the SE job I want, and it is why I am applying at Associate rather than pitching myself into something wider."

- **Do not say** SE is a promotion out of sales, or a softer landing in engineering. Both read as "does not want this job, wants a different one."
- **If she asks why Samsara specifically:** the device and the data are the same product, and the customers are depots, yards and fleets. Physical operations is where your automation instinct actually has somewhere to land.

---

### Q2. "Tell me about a difficult situation at work. What was the outcome?"

*Reported twice, in both the recruiter screen and the behavioural round. Have one answer, not three.*

> "Halfway through migrating six flagship stores off a manual reporting routine, the store leaders wanted to roll back. They were in peak trading, they did not trust the new flow, and they were the ones who would carry it if it broke.
>
> I did not argue the merits. I showed them the original report flow was still running underneath as a fallback, so rolling back was available to them at any point, and I committed to carrying the technical support myself through the whole transition rather than handing them a tool and leaving.
>
> Nobody used the fallback. All six store leaders took ownership of the tool, and the routine it replaced was five hours per store per week, about 1,500 hours a year across the six."

- **Lesson to state out loud:** with operators, what buys trust is a visible way back out, not a better argument.
- **Why this one:** Samsara sells into industries that have run on pen and paper for years, and the JD says so twice. A resistance-to-new-tech story is the closest analogue you own.
- **Reserve:** the Shanghai reversal (Q5). Do not spend it here.

---

### Q3. "What is an API? Have you used them? What is your experience?"

*Reported as the single most common technical question. Answer in two parts and keep them separate.*

**Part one, the definition, 20 seconds. Lead with it, do not lead with your CV.**

> "An API is a defined way for one system to ask another for data, or to make it do something, without needing to know how that other system works inside. In practice it is an endpoint you call, a key or token that says who you are, a request, and a structured response, usually JSON."

**Part two, your experience, honest ladder.**

> "Analytics grade rather than engineering grade. Python with pandas and SQL from the MSc. VBA automation I wrote myself that is running in production on the sample unit programme I own at Huawei. At Bank of China I built a centralised Grafana observability layer pulling from around 20 systems in place of hand-assembled weekly reports, which recovered about eight hours a week, so I have done the integration thinking on where the data comes from and what shape it arrives in."

**The boundary, volunteered before she has to dig for it.**

> "The honest line: I have never owned production code in a professional setting. On the anomaly detection work at Bank of China I wrote the spec and did the validation, and a developer wrote the code. If you need someone fluent in the Samsara API on day one, that is not me on day one. If you need someone running scripts against your sandbox within a few weeks who can explain to a customer what they do, that is what I have been doing in a different toolset for six years."

- **Note the half of the JD line everyone misses:** *"Educate customers on technical aspects of APIs"* comes first, and it is a communication task.
- **If she asks "how would you approach ours cold?"** see §5. Have that answer ready, it costs nothing.

---

### Q4. "What is your experience with hardware? Multimeter, soldering?"

*Reported in the technical round. One account also mentions a hardware installation exercise later in the loop.*

**Do not bluff this.** Order matters: give the boundary first so everything after it is credible.

> "I have not done bench electronics. No soldering, no multimeter work.
>
> What I do have is a device programme. I own the evaluation and demo unit programme for a Tier-1 UK operator account: 60 to 80 live units at any time, around 80 at peak, moving across borders, configured and signed off against launch deadlines. Before that I sold device management into a broadcaster's device fleet, and I ran a POS migration across six retail sites where the hardware and the floor process changed at the same time.
>
> So I am comfortable around devices in the field, and with the deployment and logistics side of a hardware rollout. The bench side I would be learning, and I would want to."

- **Ten minutes before the call:** know what a multimeter actually measures, continuity, DC voltage, resistance. You are not claiming to use one, you are making sure the word is not foreign when she says it.
- **Twenty minutes if you have them:** look up one Samsara vehicle gateway and one dash cam by model number and skim the install guide, enough to say what plugs into what. The JD asks you to explain installs over the phone.

---

### Q5. "Talk about a time you explained a technical concept to a non-technical person."

*This is the JD's stated minimum requirement, so it is being asked as a gate, not as small talk.*

> "Headquarters mandated one centralised training programme for a POS migration across the region. The assumption underneath it was that every store runs the same way. They do not.
>
> Rather than escalate it as a complaint, I brought the evidence: what the workflow actually looked like store by store, and the specific points where the centralised material would break on the floor. The Shanghai development team moved off centralised training onto store-specific delivery.
>
> The part that worked was not disagreeing with the product. It was showing them the assumption sitting underneath it."

- **If she wants a customer-facing version instead:** you got adoption from all six flagship store leaders by demoing the reporting tool yourself, walking each of them through their own use cases and the daily upkeep before handing over ownership. That is closer to the SE demo motion.
- **Quiet second job this story does:** it is a cross-border working relationship, which answers the remote question without you raising it.

---

### Q6. "Give an example of taking initiative to improve a process, or solving something under pressure."

*Reported as one question with two halves. You have a separate answer for each. Listen for which half she wants.*

**Initiative, and this is the stronger of the two:**

> "The demo unit programme I own came with a daily manual check on every live unit against its launch deadline, plus sign-off documents assembled by hand, roughly an hour a week. I wrote VBA and a scheduled task that fires the deadline reminders and generates the sign-off from template. It is running in production now. Nobody asked me to.
>
> That is the pattern in every job I have had: a ticketing queue at Apple, a reporting setup the year after, the Grafana layer at Bank of China, and this. I find the manual work and I remove it."

**Under pressure, 30 seconds, no longer:**

> "At Bank of China the regulator issued mandates with a 14-day window. I translated the regulation into an implementation plan, coordinated internal teams alongside third-party vendors, and we shipped 100% of it inside the window, including Geo-IP fraud detection with impossible-travel logic."

- **Use the pressure half only if she explicitly asks for pressure.** Unprompted, it is a programme-management story and it invites "so why aren't you applying for PM roles?"

---

### Q7. "Give an example of how you demonstrate ROI to a customer."

*Reported in the behavioural set. One director account also lists Challenger mindset, and this is where that shows.*

**State the method first, in one line:** you quantify in the unit the customer already counts in, not in yours.

> "With the broadcaster, procurement was not moved by a discount conversation. What moved them was a pricing portal built for their own purchasing, so they could see the per-device business cost in the form they already used internally. Their last objection was fleet control, and instead of discounting against it I priced device management against the cost they were already carrying to control those devices manually. That is what closed it.
>
> At Huawei I did the same thing in reverse. I made the case across GTM roadmap and pricing reviews that a feature in the device configuration carried no weight in the customer's buying decision, and it came out, taking USD 2 per unit out of product cost."

- **Discipline:** if she asks what the USD 2 was worth in total, say you do not have access to the contract volume, so you quote the per-unit figure. Saying that plainly is worth more here than a guessed number.
- **Samsara translation, have it ready:** cost per vehicle per month, admin hours per driver per week, one avoidable incident. Their whole pitch is that physical operations run on countable units.
- **Never sum** the GBP 50,000 close with the GBP 350,000 pipeline figure.

---

### Q8. "Tell me about a time you received feedback and how you handled it."

*They are testing coachability, which the reports name explicitly as a bar.*

> "During the POS migration I had prepared the Floor Champions with playbooks I wrote myself. In the daily check-ins they kept telling me the material did not match what actually happened on the floor. The instinct is to defend the document.
>
> Instead I treated their check-in notes as the source of truth and rewrote the material against the edge cases they surfaced, in near real time while the migration was still running. The version we finished with was mostly written by them."

- **Gap, and it is worth ten minutes tonight:** the database has no instance of critical feedback from a manager about *you*, as opposed to about your work. If she pushes for that, you will be improvising. Pick one real instance now and write two sentences on it.

---

### Q9. Sales-rep loop questions, lower priority

*Two of the scraped reports describe a sales rep loop, not an SE loop. Do not prepare these properly, just do not be blank.*

- **MEDDICC / prospecting STAR:** you have run the motion without the acronym. Discovery, qualification, positioning, then escalating matured accounts to the corporate sales team to close, across a 50+ account portfolio that generated GBP 350,000 in pipeline. Say that, and say you have not worked to a named methodology.
- **Discovery call role-play:** if one appears later in the loop, research the product from the website first, structure the call, use open questions, and quantify impact in the customer's units. Your existing framework is the 7-question elicitation set you standardised at Bank of China: objective, context, stakeholders, success criteria, scope, constraints, evidence sources. That is a discovery framework with a different name on it.

---

## 4. Four stories

### S1. Viu TV: walk-in to a GBP 50,000 close
*Apple, B2B Solution Expert. On the CV.*

- **Context:** a casual store visit from a Hong Kong broadcaster, no opportunity attached.
- **Decision:** work it as a real opportunity over 3 months, doing the technical support yourself to earn credibility.
- **Outcome:** GBP 50,000 closed. Built a custom pricing portal as the artifact procurement needed, then cleared their last objection, fleet control, by upselling device management.
- **Lesson:** the pricing portal was not a sales tool, it was the artifact that made procurement say yes.
- **Flagship.** Device management is the nearest thing on your record to what Samsara sells. Keep it apart from the GBP 350,000 figure.

### S2. The sample unit programme
*Huawei. On the CV. Promoted out of "spare", where v1 wrongly buried it.*

- **Context:** an evaluation and demo programme running 80 live units at peak, 60 to 80 at any time, across borders and against launch deadlines.
- **Decision:** kill the daily manual check rather than keep staffing it, and write the automation yourself.
- **Outcome:** VBA automation plus a scheduled task, replacing hand-tracked deadlines with reminders and template-generated sign-off. Running in production today.
- **Lesson:** the fastest way to understand a device programme is to own the logistics of it.
- **Why it matters here:** Samsara sells physical devices and the JD asks for installation literacy, basic electronics and hardware tinkering. This is the most Samsara-shaped item on your CV and the only code you genuinely wrote yourself.

### S3. Reversing the Shanghai decision
*Apple, Operation Data Analyst. On the CV. This replaces the Apple Specialist story from v1, which is not on the submitted CV at all.*

- **Context:** headquarters mandated centralised training for a POS migration; store operations actually varied by location.
- **Decision:** bring evidence rather than a complaint.
- **Outcome:** moved the Shanghai development team off centralised training onto store-specific delivery.
- **Lesson:** they were not wrong about the product, they were wrong about the assumption that every site runs the same way.
- **Use for:** "explain something technical to a non-technical audience" and influence without authority. Your database calls this the closest thing you have to the core SE skill. It also happens to be a distributed, cross-border working relationship, which quietly answers the remote question.

### S4. Taking USD 2 out of every unit
*Huawei. On the CV.*

- **Context:** a feature in the device configuration the operator did not value.
- **Decision:** rather than argue price, make the case across GTM roadmap and pricing reviews that it carried no weight in the buying decision.
- **Outcome:** USD 2 per unit removed.
- **Lesson:** when two sides are stuck on opposing positions, the better move is a third option serving what both actually want.
- **Use sparingly.** It is the most senior-sounding thing you have, and you are already managing a level question.

**Reserve, not opening material:** the HKMA 14-day delivery. It is a programme-management story, and in an Associate SE screen it amplifies "why aren't you applying for PM roles?" Use it only if she asks about pressure or deadlines.

**Missing and worth ten minutes:** a "learned something technical cold, fast" story. You have one running right now in the AWS SAA. Every associate-level screen tests ramp rate.

---

## 5. The API answer

**Not disqualifying.** Read the JD structurally: API scripting sits under "In this role, you will," not under "Minimum requirements." The minimums are a BS, preferred 1+ year customer-facing, explain-complex-to-non-technical, basic electronics, and well-versed in **one of** cloud, networking or automation. Nothing in the gate requires scripting. What is disqualifying is bluffing, because the failure mode is a note in her ATS reading "said he was comfortable with APIs, could not describe one."

Note the half of that JD line everyone misses: *"Educate customers on technical aspects of APIs"* comes first, and it is a communication task, which is your actual strength.

**The framing:**

> "Two things sit under that for me. Educating a customer on what an API can and cannot do for their integration is exactly the translation work I already do. Writing and running scripts against one, I do at analytics grade rather than engineering grade: Python with pandas and SQL from the MSc, and VBA automation I wrote myself that is running in production on the sample programme I own at Huawei."

**The boundary, volunteered before she has to dig:**

> "The honest line: I have never owned production code in a professional setting. On the anomaly-detection work at Bank of China I wrote the spec and did the validation, and a developer wrote the code. If you need someone fluent in the Samsara API on day one, that is not me on day one. If you need someone running scripts against your sandbox within a few weeks who can explain what they do to a customer, that is what I have been doing in a different toolset for six years."

**"How would you approach our API cold?"** Prepare this; it costs nothing and you can answer it without ever having seen it:

> Read the docs and the auth model first. Get a key or token, set the auth header, then hit one read-only GET endpoint in Postman before writing any code, so I am looking at real JSON before building on assumptions. Check response shape, pagination and rate limits. Then wrap it in a small Python script with `requests` and error handling, run it against a sandbox or test org, never production. For a customer conversation the script is not the point; showing them their own data coming back is.

The habit that answer demonstrates, read-only first, test environment, never production, is what separates someone safe to put in front of a customer's system from someone who is not.

> **Highest-return hour of your evening:** Samsara's developer documentation is public. Spend 30 to 45 minutes, enough to name **one real endpoint**, say what it returns and what a customer would do with it. That converts your weakest JD line into live evidence of the curiosity the JD names twice. Naming an endpoint is proof; offering to learn is only a promise.

**Two things not to say.** Do not present the personal agent system as coding evidence, the code was not written by you. And "I design systems and direct whoever builds them" is honest but at Associate level reads as "I delegate," which feeds the level problem. Your CV's skills line says "LLM tooling and agent workflow design," so have a design-grade answer ready for it, not an engineering-grade one.

---

## 6. Other likely questions

**"Walk me through your CV."** One spine stated up front, then three stops. The spine is in §2: find manual work, remove it. Never company-by-company chronology, it burns four minutes and surfaces every gap.

**"Why Samsara, and why sales engineering?"** Name the motion you have already run and can point to on the page: discovery, translate into scope, handle the technical objection, hand to close, Viu TV end to end. Then name the part you want and do not have: one product deep enough to answer on the call rather than come back with an answer. Do not describe SE as a promotion out of sales or a softer landing in engineering.

**"The JD asks for cloud, networking or automation. Which one?"** **Lead with cloud**, not networking. v1 said networking first and that was risky: your only networking evidence is a device portfolio and a CV line about "6 of the account's subnets." If that word gets read as IP subnets, you are exposed on a claim your record does not support beyond that one line. Have a 40-second concrete account of what you actually tested there, and if it means operator network segments rather than IP subnets, say so plainly. Cloud is cleaner: AWS SAA in progress plus the Grafana observability build. Position networking as adjacent through telecom, not as a claimed competency. **Never say "I exceed your minimum requirements" out loud in an Associate screen.**

**"Have you worked with physical devices?"** S2, the sample unit programme. Say "80 at peak, 60 to 80 running at any time" so the CV number and your database never contradict each other.

---

## 7. Integrity flags: ten minutes, at the end

The CV stands as sent. These are round-2 and round-3 risks, not screen risks. Pick one answer per item, then stop.

1. **The workshops.** The CV says you ran 3 technical workshops. Your record says you went through the full cycle but did not present or facilitate. If probed, describe what you contributed and what came out of it. Never claim you led the room. **This is the one worth actually rehearsing.**
2. **Pursuit team size.** CV says 8-person, record says 5-person. Pick one.
3. **The Apple hours bullet.** 4 hours saved against a 3-hour burden across 6 sites does not reconcile. Pick one framing and stay in it.
4. **Grafana adoption.** "Answered their technical objections live" was never re-sourced. Describe the session concretely.
5. **Title typo.** The submitted PDF reads "Presales Counsultant." Unfixable now. Thirty seconds so you are not surprised.
6. **Never mention** the `chanyinkwan` repos or any freelance AI role.

---

## 8. Questions to ask her

1. "For an ASE here, how much of the week is live customer calls versus building demo and test environments? I want to know what good looks like in the first six months."
2. "What does the rest of the process look like, and is there a technical or demo stage?"
3. "How is the ASE ramp structured, and what does month three look like?"
4. If comp has not come up: how the package splits across base, variable and equity.

**Dropped from v1:** the question about what happens when an ASE hits an API question they cannot answer. It advertises the exact weakness you are managing, and it is a hiring-manager question wasted on a screener.

---

## 9. If you only have three hours

1. The four-month Huawei answer and the level answer, written and said **aloud** until each is 30 seconds. (45 min)
2. Samsara API docs: one endpoint, one customer-facing sentence. (40 min)
3. Comp: current total number, your floor, the ask-her-range opener. (20 min)
4. The intro, out loud, twice. (30 min)
5. Mechanics one-liners from §1. (20 min)
6. Two stories out loud: Viu TV and the sample unit programme. (25 min)

§7 gets ten minutes at the very end, not before.
