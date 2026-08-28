---
status: todo
priority: high
scheduled: 2026-08-28
dateCreated: 2026-08-28T09:26:48.055+01:00
dateModified: 2026-08-28T09:26:48.055+01:00
tags:
  - task
eisenhower: q1
---

## Ask as received
> Main Logic Flow to use in first-principle for your stance in a problem

Core Logic Flow:
- Decompose
- Audit
- Recombine
- Experiment
## Given Prompts
-**D: Decompose**

_“Act as a world-class first-principles analyst. Your job in this step is decomposition my requirement into several sections: What I need to know, What I should process on, and What I should deliver. You are penalized for introducing advice, solutions, assumptions, or standard playbooks. Be my thought partner. Do not suck up to me._

_I want to understand exactly what this problem is made of. My problem is: [INSERT PROBLEM]. If the stated problem appears to contain a hidden objective or a deeper question, identify it in one sentence before decomposing. Ask whether I want you to decompose the original problem or the deeper one. Do not continue until I choose. Do not silently replace or reframe my problem._

_Break the problem into its smallest useful constituent parts. Show the hierarchy clearly: the overall problem, its major components, and the smaller elements inside each component. Use only dimensions that are relevant, such as people, process steps, time, resources, costs, etc. For each component, briefly explain what it contains and how it connects to the larger problem. Stop decomposing when breaking a component down further would no longer improve understanding or make it easier to examine. Do not evaluate the components. Do not classify them as facts or assumptions. Do not recommend solutions. Only show me what parts the problem is made of.”_

**A: Audit**  
  
_“Act as a skeptical red team analyst whose only job is to uncover and question inherited assumptions. Assume that every "obvious" part of the problem may be hiding a convention until evidence proves otherwise._

_I want to know which of the building blocks above are load-bearing assumptions, not facts, and what becomes possible if they're wrong._

_Review the blocks from the previous step. Give me a numbered list of the assumptions hiding in them. For each one, on its own line, name the assumption. Classify whether it's a fact, convention, or unknown based on the evidence available. Verify the evidence. State what breaks, or what opens up, if I eliminate it; and state what changes if I invert it. Order the list from most load-bearing assumption to least.”

**R: Recombine**  
_  
“Act as an architect designing with no memory of how this problem has been solved before. The standard playbook is unavailable to you. Your only materials are the verified building blocks that survived the audit._

_I want new solutions assembled from those building blocks — not fresh ideas pulled from how it's normally done, and not variations on the standard answer._

_Take the building blocks that survived the audit. Recombine them — rearrange, connect, and stack these same elements into new configurations, the way the same musical notes can be arranged into different songs. Produce 3 solutions that each use only these verified blocks and differ from each other in their underlying structure, not just their details. For each solution: name which building blocks it's built from, which discarded convention it refuses to obey, and its single biggest point of failure. Do not introduce any new building block unless you label it clearly as a new assumption.”_

**E: Experiment**

_“Act as a skeptical experimenter. Your job is to help me design the cheapest, fastest way to find out whether this holds up BEFORE it costs me anything real in time, money, effort, or reputation. Don't try to sell me the idea. Give me a test I could actually run, and the pass/fail lines to read it by._

_I want the smallest real-world test that helps me understand what parts work and what parts don't, as early and as cheaply as possible._

_Take the 3 solutions from the previous step and design experiments to test whether they'll work in the real world. Design the smallest concrete test for each. For instance, what to actually do, who to talk to, or what to build, using the least time, money, effort, or social risk the problem allows. For each test, tell me what result would rule that solution out, what result would keep it alive, and what I'd learn about the problem either way. Give me your view on which building block to revisit if all of the tests fail.”_  
  
These prompts are for you to get you started. This is just one way to prompt, not the **_only_** way. Please use your judgement, your taste, and your AI model itself to improve upon these prompts and make them your own.

## Refined Prompts:
Step 1: decomposition
the logic in the given prompt to decompose a problem is: 1. Diagnostic Focus = find where is the broken part, 2. Dissects (解剖) friction/causes 3. Analyzes what is.
but what I wanted to do is to decompose a task and pre-structure what i have to deliver before stating the task, so to map with the logic, it should goes like this: 1. Operational focus = reverse engineer from the final deliverable, 2. Clean up input identify which of those are insight relevant, which of those are noise, which of those are context, 3. Structure what is the expected deliverable 

## Decomposition Prompt:
Act as a world-class first-principles operational analyst and task architect. Your job is task decomposition only. You are penalized for introducing generic advice, jumping straight into final solutions, making unstated assumptions, or sucking up. Be an uncompromising, rigorous thought partner.

You will operate using a strict **Phase-Gated Protocol**. Do not proceed to subsequent phases without explicit user confirmation.
Phase 1: Intake, Triage & Scope Calibration

When I provide the task materials in Markdown format, analyze them across three input types:

1. **Transcripts / Raw Text:** Scan for explicit directives, stakeholder expectations, and timeline constraints.
    
2. **Excel Column Headers:** Identify available data fields, analytical boundaries, and schema limitations.
    
3. **PPT Paths / Reference Mentions:** Treat exclusively as contextual background, narrative flow benchmarks, or styling templates—not direct operational mandates.
    

**Your Output for Phase 1:**

- **Explicit Objective:** State the direct operational goal in 1–2 sentences.
    
- **Hidden / Deeper Objective:** Identify any unstated stakeholder motivation or strategic goal (if present) in 1 sentence.
    
- **Input Triage Matrix:** Group the provided inputs into three clear categories: `Core Directives`, `Context / Reference Only`, and `Distractions / Out-of-Scope`.
    
- **Clarifying Questions:** Ask up to 3 targeted questions to resolve ambiguous constraints or critical missing data.
    

> **GATE 1:** Stop here. Do not decompose the task until I confirm the scope and answer your clarifying questions.

Phase 2: Operational Task Decomposition

Once Phase 1 is approved, decompose the operational workflow into a structured blueprint across four distinct tracks:

1. **What I Need to Know (Targeted Ingestion):**
    
    - High-signal data points, business rules, and constraints that must be verified before work begins. Exclude all peripheral noise.
        
2. **What I Need to Process (Cognitive Synthesis & Modeling):**
    
    - The behind-the-scenes reasoning: data manipulations, trade-off evaluations, risk stress-testing, and logic deductions.
        
    - _Rule:_ Only develop processing steps that directly yield insights required for the structured delivery.
        
3. **Core Questions to Answer:**
    
    - The essential, non-negotiable business questions that must be resolved to fulfill the task objective.
        
4. **Structured Deliverable Architecture (Audience-Scaped):**
    
    - **Primary Deliverable (Concise):** The minimum viable, high-impact artifact required by the audience (executive summary, decision memo, or briefing). No analytical fluff.
        
    - **Supporting Appendix (On-Demand):** The underlying calculations, raw insights, and methodology staged strictly for follow-up questions or pushback.
        

> **GATE 2:** Stop here. Present the blueprint and wait for my approval or adjustments before moving into execution.

How do you find this prompt:
The depth of the work is a little bit out of control, so the depth it dive into is not compatible with the required output. A 2 page work should not dive that deep. Thinking of may be an ubiquitous language could help, or a framed delivery template could help？


## What do you feel about the output
It is imbalance when comparing the depth of the required output (2 page ppt) and the depth of the first decomposition output 
## Audit Prompt (didnt review manually)
Act as a skeptical red team analyst whose only job is to uncover and question inherited assumptions. Assume that every "obvious" conclusion, proxy, or operational link establishein the Phase 1 Output is hiding a convention, cognitive bias, or convenient narrative until hard evidence proves otherwise. Your mission is to stress-test the Phase 1 Task Blueprint (Track 1 to Track 4) before we write a single word of the 2-page deliverable for 程哥 / 朱總. Focus your interrogation specifically on the most critical operational and strategic assumptions in the blueprint, including but not limited to: 1. Proxy Validity: Does shelf allocation (and offline display) truly prove "和記 is structurally backing 榮耀", or could it just be vendor-funded MDF / listing fees / OpCo margin arbitrage? 2. Capital Narrative: Is CKH's asset disposal genuinely tied to an "AI pivot", or are we retrofitting our own narrative onto general balance sheet deleveraging? 3. Sourcing & Scope: Does treating VodafoneThree as representative of group-wide ranging hold up despite CKH's minority stake and key personnel departures? 4. Pricing & Inflation Logic: Does the distinction between same-SKU repricing and launch-RRP inflation capture real consumer/operator reality, or miss tariff/subsidy shifts? 5. Strategic Implication: Does Huawei's "route back" actually depend on an AI-partnership wedge as assumed in Track 3? Review the Phase 1 blueprint and provide a numbered list of the assumptions hiding inside it, ordered strictly from MOST load-bearing (if wrong, the entire 2-page deck collapses in front of 朱總) to LEAST load-bearing. For each assumption, strictly follow this format on its own lines: - [Number]. Assumption Name: [Explicit statement of the hidden assumption] - Found in: [Track 1/2/3/4 and specific item] - Classification: [Fact / Industry Convention / Unverified Assumption / Unknown] - Evidence Verification: [What the Phase 1 sources actually prove vs. what is purely inferential leap] - What Breaks (Risk): [What falls apart in Page 1 / Page 2 deliverable if this assumption is falsified] - What Opens Up (Opportunity): [What new analytical angle or alternative explanation emerges if we drop it] - Inversion Test: [State what the opposite conclusion would be, and what 和記's real strategy looks like if the exact d reverse is true]


## Recombine Prompt (didnt review manually) 
Act as a master strategic synthesizer and executive communications architect. 

Your objective is RECOMBINE: take the operational task blueprint from Phase 1 and the critical vulnerabilities identified by the Red Team in Phase 2, and synthesize them into an airtight, defensible 2-page briefing architecture for 程哥 and 朱總.

You must rebuild the core narrative by either reinforcing fragile assumptions with indisputable proxies, or demoting unverified inferential leaps into clearly labelled "Strategic Judgement / Hypothesis" slots.

---

### Execution Framework

1. Assumption Triage & Narrative Patching:
   - Identify the top 3 most fatal assumptions flagged in Phase 2.
   - For each, state how we neutralize the risk in the final deck: (a) Replace with an unassailable hard fact, (b) Reframe as an empirical observation rather than a motive, or (c) Move into the Appendix as an open gap.

2. Recombined 2-Page Executive Blueprint:

   Page 1 — 和記's Evidenced Device Strategy & Capital Posture
   - Top Executive Headline: One falsifiable, high-signal takeaway that survives Red Team scrutiny.
   - The Shelf Matrix: Structure the Price Tier (縱軸) × Brand (橫軸) layout, incorporating the offline display proxy without overclaiming operator intent.
   - Capital Reallocation Ledger: Present CKH's divestment facts strictly using CKH's stated language, clearly separating balance sheet reality from our AI strategic inference.
   - Sourcing & Judgement Markers: Explicitly flag which numbers are audited facts vs. which require 程哥's account validation (e.g., VodafoneThree data availability, JP report).

   Page 2 — 漲價 Mechanics, AI Realities & Strategic Implication
   - Price-Delta Synthesis: Side-by-side presentation of existing-SKU repricing vs. generation-on-generation RRP inflation.
   - Vendor AI / Innovation Audit: Merchandised AI reality vs. token features across the 5 brands.
   - Closing Strategic Takeaway: The defensible route back for Huawei, framed as a conditional hypothesis rather than an unsubstantiated leap.

3. Red Team Appendix Staging (Pre-empting Pushback):
   - Map out the exact supporting data points, Wayback snapshots, and FX normalization notes to stage in the appendix to answer predictable follow-up challenges from 朱總.

---

Output the recombined architecture in a clear, executive-ready Markdown outline. Do not write filler prose. Keep the structure concise, rigorous, and completely bulletproof.




## Experiment （didnt review manually)
Act as a ruthless pre-flight verification architect and intelligence experimenter. Your job is to help me stress-test the core claims of our recombined 2-page briefing BEFORE it reaches 程哥 and 朱總, protecting our credibility with zero social or political risk.

Do not treat this as testing hypothetical business products. Treat this as designing the fastest, lowest-cost empirical probes to validate the 3 core pillars of our 2-page executive narrative:
1. The Shelf & Pricing Signal: (Existing-SKU repricing vs. generation launch RRP delta across key OpCos).
2. The Strategic Backing Tell: (Evidencing structural advantage for 榮耀 / 谷歌 via shelf allocation, offline display, or MDF vs. organic market performance).
3. The Capital & AI Narrative: (CKH disposal proceeds reality vs. our AI strategic pivot inference).

---

### Verification Protocol

For each of the 3 pillars above, design the smallest, fastest "Pre-Flight Probe" (a 10-minute desk test, targeted data sample, or zero-risk internal sanity-check):

1. Probe Architecture:
   - Target Claim: The exact headline or data point being verified.
   - The Minimum Test: What exact action to take (e.g., specific Wayback URL sample, HKEX filing keyword search, or exact low-friction question to the account team).
   - Cost & Time: Bound the test to under 30 minutes of effort with zero political exposure.

2. Pass / Fail Thresholds:
   - Green Light (Keeps Claim in Primary Deliverable): What precise evidence confirms the claim and allows it to lead Page 1 or Page 2.
   - Red Light (Rules Claim Out): What result instantly kills the claim or exposes it as confirmation bias.
   - Pivot / Fallback Action: If the claim fails, how do we immediately reframe that section of the 2-page deck to remain 100% defensible?

3. Structural Fallback Verdict:
   - If all three empirical probes fail to support our narrative, which specific Track from the Phase 1 Blueprint must be reconstructed, and what becomes the new baseline story?

---

Output the verification plan in a sharp, actionable Markdown table or structured outline.
## Stages

| Stage | Action                     | Result | What to keep | What to dump |
| ----- | -------------------------- | ------ | ------------ | ------------ |
| 1     | Fine tune the given prompt |        |              |              |

## Next move
