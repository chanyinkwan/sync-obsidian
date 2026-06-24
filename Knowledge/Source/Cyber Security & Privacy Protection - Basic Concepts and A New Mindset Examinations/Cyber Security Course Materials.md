
# Huawei Global Cybersecurity & Privacy Protection Course
## Complete Technical Reference Manual & Core Training Transcript

---

## 1.1 Huawei Cybersecurity Values

Huawei explicitly defines cybersecurity and privacy protection as top corporate priorities. These mandates are absolute red lines aligned with our foundational core values: staying structurally customer-centric and creating sustainable value for our customers. It is a shared corporate responsibility to increase the awareness and capabilities of our global workforce regarding cybersecurity and data privacy protection, ensuring that we continuously adhere to our long-term commitment to safeguarding customer security.

This technical training course is systematically divided into three main operational parts:
* **Part One:** Definition of cybersecurity, analysis of typical case studies, and a deep architectural dive into Huawei's revised cybersecurity framework.
* **Part Two:** The historical evolution and current global state of privacy protection, followed by an exploration of Huawei's privacy protection actions across typical industry scenarios.
* **Part Three:** Clear, binding requirements, compliance expectations, and operational responsibilities placed on every corporate employee.

```

                ┌──────────────────────────────┐
                │  CYBERSECURITY STAKEHOLDERS  │
                └──────────────┬───────────────┘
                               │
     ┌─────────────────────────┼─────────────────────────┐
     ▼                         ▼                         ▼

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐

│ Customers and   │ │ Governments and │ │ Industry and    │

│ Consumers       │ │ Regulators      │ │ Supply Partners │

└─────────────────┘ └─────────────────┘ └─────────────────┘

	│                         │                         │
	└─────────────────────────┼─────────────────────────┘
   
                              ▼

                    ┌───────────────────┐

                    │ Corporate Media   │

                    │ & General Public │

                    └───────────────────┘

```
*(Word Design Hint: Replicate the Stakeholder Matrix above using **Insert > SmartArt > Hierarchy > Organization Chart**).*

Cybersecurity is not an isolated IT issue; it is a complex, multi-stakeholder ecosystem requiring active, day-to-day engagement. Every internal department must proactively foster an organizational culture where cybersecurity is recognized as a shared, individual responsibility.

### Defining Cyberspace Security
There is persistent industry disagreement regarding the exact definition of cybersecurity. Certain groups narrow the definition to computer information security, while others erroneously conflate it entirely with cryptography. In reality, neither interpretation is accurate. While cybersecurity originated as a sub-discipline of traditional information security—relying heavily on cryptographic deployments to protect computers and early internet architectures—the domain has fundamentally shifted. 

Modern security introduces advanced methodologies across risk management, security by design, software design lifecycle (SDL) tracking, and resilience engineering. Today, it is recognized as a specialized subject known as **Cyberspace Security**, requiring distinct technological tools and governance models.

```

```
                ┌──────────────────────────────┐
                │    INFORMATION SECURITY      │
                │   Preservation of: C-I-A     │
                └──────────────┬───────────────┘
                               │ (Evolved into)
                               ▼
                ┌──────────────────────────────┐
                │     CYBERSPACE SECURITY      │
                │ Risk Management, SDL, & Spec │
                │   Resilience Technologies    │
                └──────────────────────────────┘
```

```

### Global Standard Frameworks
The International Organization for Standardization (ISO) systematically defines the concepts and applications of information security and cyberspace protection. The primary authoritative baselines accepted across the ICT industry are the **ISO/IEC 27000 series**, published jointly by the ISO and the International Electrotechnical Commission (IEC). These standards govern information security, cloud-based data tracking, privacy protection, and operational risk management. 

Within this framework, traditional information security is anchored tightly on three pillars, known as the **CIA Triad**:
1. **Confidentiality:** Ensuring data is accessible only to authorized entities.
2. **Integrity:** Safeguarding data against unauthorized alteration or tampering.
3. **Availability:** Guaranteeing systems and data are accessible when required by users.

Cyberspace security expands on the CIA Triad. Officially defined in **ISO/IEC 27032 (2012)** and updated in subsequent **ISO/IEC TS 27100** drafts, modern cybersecurity extends beyond the data container to safeguard society, individuals, critical organizations, and nations from pervasive systemic cyber risks.

### Geopolitical & Industry Challenges
Because communications networks form the core backbone of a nation's critical information infrastructure, network stability directly dictates economic growth and national stability. Consequently, telecommunications security is a matter of national security. 

During the 3G market era, Huawei shifted its primary strategic focus toward global expansion. This footprint expansion raised geopolitical concerns among certain Western nations regarding potential information extraction and supply chain vulnerabilities. To systematically counter these doubts, Huawei initiated a transparent, compliance-first approach, establishing the Global Cybersecurity Committee and the specialized **Huawei Cybersecurity Evaluation Centre (HCSEC)** in 2010. 

In 2011, Mr. Ren Zhengfei issued a binding corporate statement mandating the creation of a comprehensive, global end-to-end cybersecurity assurance system. This system successfully managed the company's compliance, operational continuity, and global reputation throughout the 4G and early cloud deployment eras. Concurrently, the disclosures of whistleblower Edward Snowden shifted the focus of global intelligence scrutiny, establishing a more balanced, objective operational environment for multinational infrastructure vendors.

```

```
 3G Market Era (Pre-2010)       ► Global Expansion & Geopolitical Scrutiny
           │
           ▼
   4G / Early Cloud Era         ► Formalization of End-to-End Security
           │                      Systems & Launch of HCSEC (2010)
           ▼
   5G / Modern AI Era           ► Launch of Cybersecurity 2.0 &
                                  Trustworthiness Transformation (2019)
```

```

The emergence of 5G topologies and artificial intelligence in 2017 and 2018 introduced a more complex threat matrix. Assessments from the UK Oversight Board highlighted specific software engineering quality defects and legacy architecture risks. Because 5G introduces decoupled architectures and distributed network edges, traditional peripheral defenses are obsolete. 

To address these findings, Huawei launched its **Cybersecurity 2.0 Program** alongside a long-term **Software Engineering Capability Enhancement Transformation**. This transformation requires all product lines to shift away from static compliance check-lists toward a dynamic mindset centered on product trustworthiness and cyber resilience.

### Systemic Threats to Critical Infrastructure
Industrial cybersecurity case studies highlight the immense damage caused by targeted infrastructure compromises:
* **Stuxnet Worm (Iran):** Demonstrated the real-world destruction of industrial hardware via automated code manipulation.
* **WannaCry Ransomware:** Stressed the speed of unpatched vulnerability weaponization across public health and transport logistics.
* **US Power Grid Attacks:** Proved that modern state-sponsored groups prioritize the disruption of critical national utilities.

In response, global regulators have implemented aggressive defense policies. The European Union's **5G Security Toolbox**, along with similar state frameworks, imposes strict supply chain restrictions and vendor validation standards. Increased digitization—driven by cloud architectures, software-defined networking (SDN), and automated artificial intelligence—continues to widen the available network attack surface. 

```

┌──────────────────┬──────────────────────────────────┐

│ PORTFOLIO DOMAIN │ CORE CYBERSECURITY THREAT MATRIX │

├──────────────────┼──────────────────────────────────┤

│ 5G & Intelligent Telecom │ Edge compute boundary leaks; complex scenarios.│

│ Industrial IoT (IIoT) │ Vulnerable endpoints; weak access controls. │

│ Enterprise Cloud Services │ Multi-tenant data breaches; persistent attacks.│

│ Autonomous AI Systems │ Model poisoning; black-box explainability gaps.│

└───────────────────────────┴────────────────────────────────────────────────┘

```

To counter this environment, Huawei treats cybersecurity as a multi-layered engineering discipline. True cybersecurity means ensuring product availability, integrity, confidentiality, traceability, and resilience under verified legal compliance. Operationally, it requires building robust networks capable of carrying data, preserving user privacy, and surviving sophisticated, persistent attacks. 

We systematically eliminate skepticism regarding alleged "backdoors" by opening our underlying source code to verified legal, political, and technical reviews. We approach product security from two distinct angles: enhancing technical engineering capabilities (such as the Security Development Lifecycle, or SDL) and building verifiable institutional trust. Security is a primary, non-negotiable product attribute that forms the base pillar of our corporate operational continuity.

---

## 1.2 Typical Cybersecurity Cases

### 1.2.1 Case Studies Overview
To clarify accountability boundaries and set clear engineering priorities across every business domain, we analyze real-world failures spanning strategic planning, R&D, sales control, and technical service delivery.

### 1.2.2 Case Analysis Breakdown

#### Case 1: Cybersecurity in Business Planning and Strategy
In 2012, "Company A" launched a Linux-based, open-source operating system designated as "OS T," designed to power smartphones, tablets, smart TVs, laptops, and in-vehicle infotainment networks. By 2016, mobile devices incorporating OS T were exported to the European market on a massive scale. 

At a major Security Analyst Summit in 2017, external researchers published a devastating critique of OS T's source code, stating that it lacked fundamental security architecture, contained poor engineering layout, and featured over forty zero-day vulnerabilities. These structural flaws allowed malicious actors to execute remote code attacks and take full control of client devices via the application store. 

```

[ OS T System Launch (2012) ] ──► Scaled Into European Markets (2016)

│

▼

[ Vendor Forced to Abandon OS ] ◄── [ 40 Zero-Day Vulnerabilities Exposed ]

```

As a direct consequence, Company A was forced to completely abandon OS T for its smartphone lines due to its insufficient security. Security capability is the primary deciding factor for product survival. New services will always face targeted external attacks and Advanced Persistent Threats (APTs). A platform can only scale successfully if it is structurally designed to withstand rigorous external penetration testing. This requires all business domains to embed cybersecurity directly into the earliest phases of planning and product strategy.

#### Case 2: R&D and Vulnerability Management
During a routine annual security review, the audit department of "Customer B" in "Country K" discovered a severe, unpatched vulnerability affecting internet-facing network ports on a platform delivered by "Company A." The audit team escalated the finding directly to the client's CEO. Customer B immediately suspended all procurement talks, frozen contract expansions, and officially rated Company A's product line as unsatisfactory.

Company A received a formal complaint demanding immediate remediation of the live network risk. Because the R&D team had not decoupled patch development from major system upgrades, they were forced to execute a complex, risky backporting maneuver, extracting code blocks from a newer system version to create an emergency patch for the legacy live network. While the emergency upgrade closed the vulnerability, the incident severely fractured the customer relationship and disrupted normal corporate operations.

```

[ Vulnerability Found in Audit ] ───► Procurement Frozen / CEO Escalation

│

▼

[ Complex Patch Backporting ] ───► Operational Disruption & Brand Damage

```

This case highlights three mandatory engineering rules:
* **Proactive Transparency:** Teams must immediately notify clients of identified high-risk vulnerabilities and provide regular installation recommendations.
* **Systemic Lifecycles:** Security patches must be released predictably and regularly throughout the entire active lifecycle of a product.
* **Patch Decoupling:** Security patches must be completely decoupled from functional version upgrades, allowing customers to mitigate live network risks without overhauling their entire system.

#### Case 3: Third-Party Testing and Public Trust
"Company A" conducted a technical reverse-analysis of multiple production platforms built by "Company B" using an automated firmware binary static analysis tool. Company A published an unverified report claiming Company B's hardware contained hidden backdoors, unpatched third-party open-source vulnerabilities, disabled compiler security controls, and unsafe API functions. 

Mainstream media outlets in Company A's home nation amplified the report, dealing a massive blow to Company B's global market standing and brand equity. Although Company B issued immediate public counters demonstrating that no backdoors existed, the reputational damage had already occurred.

```

[ Static Binary Analysis Tool ] ──► Unverified Third-Party Report Published

│

▼

[ Continuous Engineering Auditing ] ◄── [ Media Amplification & Brand Crisis ]

```

This case proves that in an increasingly hostile global environment, any security flaw or engineering gap will be picked up and amplified by external competitors. Continuous risk monitoring across the full version lifecycle is mandatory. We must document and prove the security and trustworthiness of our software during the R&D process by aligning with best-in-class software engineering practices.

#### Case 4: Sales Control and Sensitive Regions
A politician in "Country K" issued a formal letter to their government alleging that telecom equipment provided by "Company A" posed a structural national defense risk. The letter was picked up by the press in neighboring "Country J," escalating the issue into a regional geopolitical dispute. The Vice President of Country K executed an official visit to Country J, demanding that a shared wireless network project between Company B and Company A be scrutinized due to its proximity to sensitive military bases. 

As a direct result of the political pressure, Country J terminated Company A's multi-year government contracts, dealing a heavy blow to the company's regional market access. 

```

[ Sensitive Border Deployment ] ──► Geopolitical Escalation & Press Scrutiny

│

▼

[ Costly Security Isolations ] ───► Government Project Cancellations

```

Ultimately, Company B deployed the equipment, but only after implementing complete physical isolation from Country K's military sites. Company A was forced to assemble an emergency response team, execute exhaustive network security testing alongside Company B, and invest heavily in specialized international security certifications to retain its remaining commercial footings. 

Sales initiatives touching sensitive geopolitical sectors or critical defense assets must be subject to rigorous internal risk controls from inception. Organizations must assess project profiles, secure formal approvals, and maintain pre-packaged media contingency plans to manage regional communication crises effectively.

#### Case 5: Technical Service Delivery and Authorization
During a routine network optimization operation, "Engineer X" from "Company A" failed to submit a formal customer authorization request. Instead, the engineer utilized a batch-processing script obtained via unverified, informal communication channels to execute configurations on a live carrier network. 

Because the script ran on default configuration parameters, it triggered a critical system error, plunging "Customer B's" core data network into a ten-minute outage. During the emergency troubleshooting process, Customer B's operations team discovered that Engineer X had logged into the production core using an unauthorized engineering delivery credential, triggering an executive escalation.

```

[ Unauthorized Script Run ] ───► Core Access Device Failure

│

▼

[ 10-Minute Network Outage ] ───► Customer Complaint & Financial Penalty

```

Customer B filed a formal letter of complaint, demanded direct financial compensation for the service outage, and suspended Company A's team access. 

This operational failure reinforces three clear boundaries:
* **Explicit Customer Consent:** Any modification, access, or operation on customer production networks requires formal, written customer authorization. Operations must never exceed the agreed scope.
* **Credential Discipline:** Engineers must never access customer infrastructure using unassigned, shared, or unauthorized accounts.
* **Sanctioned Tooling:** All versions, software packages, patches, licenses, and technical tools must be sourced exclusively from official corporate delivery channels. Sourcing third-party software from informal channels is strictly prohibited.

#### Case 6: Unauthorized Data Disclosure in External Communications
During a major international industry exhibition, an external reviewer reviewing a live product demonstration noticed detailed operator information on a terminal and asked the presenter: *"Where was this dataset sourced from, and does it contain live user metrics?"* The corporate presenter confirmed that the system was running real, historical user metrics extracted from a tier-one telecom provider in "Country K." 

The reviewer immediately flagged the display as a major compliance risk, noting that utilizing live subscriber information in a public exhibition hall demonstrated weak corporate data governance and exposed systematic vulnerabilities. The company representatives were forced to terminate the display and launch an internal containment review.

```

[ Live Subscriber Data Disclosed ] ──► Public Compliance Flag at Exhibition

│

▼

[ Masking & Anonymization Audit ] ◄─── [ Brand Exposure & Reviewer Escalation ]

```

This event underscores that all employees managing external marketing, sales presentations, or public demonstrations must verify the origin and authorization status of any data shown. Even with customer consent, live production data must be structurally masked, obfuscated, or fully anonymized before public display. All marketing materials and demo environments must undergo formal privacy reviews.

#### Case 7: Supply Chain Security and Malware Contamination
"Operator B" inserted a software installation CD-ROM provided by an authorized hardware vendor into a core network management computer. The system crashed immediately. A forensic digital analysis revealed that the master setup disc was contaminated with a malicious Trojan virus. 

The primary equipment provider, "Company A," traced the master disk back to a secondary sub-supplier, "Supplier C." An investigation revealed that an R&D engineer at Supplier C had downloaded an unverified utility from an untrusted internet repository, infecting his local workstation. The malware spread directly onto the product's gold master build disk, bypassing Supplier C's legacy antivirus definitions. Because Company A lacked incoming binary integrity verification for third-party additions, the infected software was distributed straight to the end customer.

```

[ Sub-vendor Utility Infected ] ──► Virus Injected into Master Build Disk

│

▼

[ Multi-party Contract Cancellations ] ◄── [ Core Customer System Crash ]

```

This failure caused Operator B to terminate its multi-year partnership with Company A and cancel ongoing contracts. Company A severed all ties with Supplier C, and both entities suffered substantial market damage. 

Under corporate compliance rules, connecting an unverified storage medium or infected terminal to a customer production network without performing standard malware scans is a **Level 3 Security Violation**. This violation triggers severe disciplinary action, including the suspension of promotions, salary freezes, and potential termination of employment.

#### Case 8: Fulfilling Public Commitments and Avoiding "Hack-Back" Activities
Building global market trust requires companies to match internal engineering standards with public commitments. Our company strictly forbids employees from initiating, participating in, or supporting any form of retaliatory cyberattack—commonly referred to as "hacking back"—even if our own infrastructure is actively targeted by threat actors. Employees are prohibited from exploiting system positioning to alter, delete, or steal external data, or engaging in any behavior that threatens regional national security or public interests. 

In 2019, the company formally joined the **Paris Call for Trust and Security in Cyberspace**, contractually committing to its nine core principles. One of these central principles mandates that private enterprises must maintain a purely defensive posture and never engage in offensive cyber actions. 

```

[ Paris Call Commits (2019) ] ──► Anti-Retaliation Policy Mandated (No Hack-Back)

│

▼

[ Verifiable Public Trust ] ◄── [ Global Workplace Directives Enforced ]

```

To implement this commitment, our Cybersecurity Governance Department launched binding operational directives across all global business units. These directives define explicit boundaries, clarify tracking mechanisms, and ensure all technical teams can identify and reject any requests that lean toward offensive network manipulation.

#### Case 9: Risk Management and Regulatory Compliance
Operational risks are distributed across every business layer, requiring all organizational departments to embed risk control mechanisms into their daily workflows. Over the past decade, global data sovereignty and digital infrastructure protection frameworks have tightened significantly.

```

┌─────────────────────────────────┬──────────────────────────────────────────┐

│ REGULATORY FRAMEWORK │ TARGET COMPLIANCE REQUIREMENT │

├─────────────────────────────────┼──────────────────────────────────────────┤

│ UK Computer Misuse Act │ Anti-unauthorized access protocols. │

│ European Union NIS 2 Directive │ Supply chain testing; incident mandates. │

│ Australian Security of Critical │ Real-time reporting for core utilities. │

│ Infrastructure Act │ │

│ French Penal Code │ Criminal liability for system breaches. │

└─────────────────────────────────┴──────────────────────────────────────────┘

```

The company's annual key tasks mandate that all product teams implement proactive measures to eliminate data leaks, confirm legal non-compliance vectors, and verify network run-time stability. To operationalize these goals, we have integrated international risk management frameworks—specifically **ISO 31000** and standard **GRC (Governance, Risk, and Compliance)** architectures—directly into our internal workflows. 

Because our global footprint crosses complex regional boundaries, every business domain must execute an exhaustive, annual risk assessment. By verifying code compliance, deploying deterministic operational boundaries, and cooperating with targeted investigations run by our independent internal Audit Department, we ensure that systemic business risks remain fully mitigated.

---

## 1.3 Huawei Cybersecurity Framework

### The Evolution of Cybersecurity 1.0
Huawei released its foundational Cybersecurity 1.0 framework in 2011, establishing the structural basis for our global end-to-end security assurance system. Over the following years, the corporation drafted more than 170 policies, baseline standards, and engineering requirement documents, integrating security gates into all core operational pipelines:

```

[ IPD: Integrated Product Dev ] ──► Security requirements & threat modeling.

[ SD: Software Development ] ──► Secure coding baselines & static analysis.

[ ITR: Issue to Resolution ] ──► Coordinated patching & vulnerability SLAs.

[ LTC: Lead to Cash ] ──► Verified deployment & secure handovers.

```

The Cybersecurity 1.0 blueprint was anchored on nine strategic pillars:
1. **Open and Transparent Cooperation:** Engaging with international standards bodies and independent testing labs.
2. **Proactive Communication:** Consistently providing risk updates to external stakeholders.
3. **Legal Compliance:** Aligning operations with regional security and data sovereignty mandates.
4. **Independent Verification:** Subjecting source code and binary builds to independent third-party evaluations.
5. **Vulnerability Response:** Establishing structural windows to ingest, log, and remediate product bugs.
6. **Workforce Capability:** Providing mandatory, continuous secure-engineering training to all staff layers.
7. **Security by Design:** Ensuring threat modeling occurs before a single line of production code is written.
8. **Secure Delivery:** Enforcing field deployment rules to ensure live systems are hardened upon installation.
9. **Absolute Integrity Mandate:** Contractually guaranteeing no backdoors, zero data tampering, and full software build traceability.

While version 1.0 successfully formalized our baseline compliance culture, a comprehensive review in 2018 exposed specific structural limitations. The initial framework leaned too heavily on static compliance management and checklist validation. This structural focus resulted in an insufficient emphasis on deep software engineering quality, fundamental code architecture safety, and base platform security. 

Concurrently, requirements from international regulators shifted rapidly, revealing that the static compliance gates of version 1.0 could not adapt fast enough to dynamic threat landscapes. This mismatch necessitated a complete transformation of our R&D workflows, configuration controls, and product portfolio management.

### The Shift to Cyber Resilience
As traditional telecom platforms converged with open IT infrastructures, the underlying assumptions governing system defense had to change. In legacy environments, systems operated in the relatively isolated CT (Communications Technology) domain. Networks were closed, access vectors were tightly controlled, and the overall probability of a sophisticated external threat actor penetrating core nodes was low.

Modern open environments—driven by 4G, 5G standalone networks, cloud computing, and widespread artificial intelligence deployments—have erased these perimeter boundaries. Modern networks are decentralized and accessible, exposing them to continuous attack attempts. 

```

┌─────────────────────────────────┐ ┌─────────────────────────────────┐

│ LEGACY CT PARADIGM (1.0) │ │ MODERN RESILIENCE PARADIGM │

├─────────────────────────────────┤ ├─────────────────────────────────┤

│ • Closed, isolated boundaries. │ ─────────► │ • Open, interconnected edges. │

│ • Perimeter-only defense gates. │ │ • Assumption of active breach. │

│ • Threat seen as an exception. │ │ • Continuous adaptive response. │

└─────────────────────────────────┘ └─────────────────────────────────┘

```

Consequently, perimeter defense methods—such as basic firewalls, static access controls, and system hardening—are no longer sufficient to guarantee safety. Modern engineering requires the deployment of advanced controls that allow network operators to rapidly isolate breaches, locate compromises, minimize operational impacts, and maintain service continuity during an active compromise. 

This requirement drove the development of **Cyber Resilience**. Guided by international frameworks from bodies like ENISA (European Union Agency for Cybersecurity) and NIST (National Institute of Standards and Technology), cyber resilience represents a paradigm shift. It discards the assumption that network penetration can be completely prevented, replacing it with the realistic assumption that systems operate under a state of continuous attack.

```

```
   [ IDENTIFY ] ───► Mapping critical assets and vulnerabilities.
        │
        ▼
    [ PROTECT ] ───► Hardening code, encryption, and access boundaries.
        │
        ▼
    [ DETECT ]  ───► Real-time anomaly tracing and telemetry logging.
        │
        ▼
    [ RESPOND ] ───► Rapid isolation of compromised nodes.
        │
        ▼
     [ RECOVER ] ───► Automated state restoration and service continuity.
```

```
*(Word Design Hint: Replicate this NIST Lifecycle layout using **Insert > SmartArt > Cycle > Block Cycle**).*

NIST’s core framework—*Identify, Protect, Detect, Respond, and Recover*—serves as our baseline blueprint. This lifecycle dictates the run-time operation of network infrastructure, which implicitly demands absolute process quality, verifiable build tracking, and code integrity from the equipment vendor across the entire R&D lifecycle.

### Cybersecurity 2.0 Architectural Framework
To operationalize these resilience requirements, Huawei formalized its **Cybersecurity 2.0 Framework**. While version 1.0 enforced compliance red lines, version 2.0 treats security as a dynamic, evolving engineering discipline. The main objective of Cybersecurity 2.0 is to ensure customer network survival and service continuity within an inherently insecure environment. 

```

```
                 ┌──────────────────────────────┐
                 │    CYBERSECURITY 2.0 CORE    │
                 │  Active Network Resilience   │
                 └──────────────┬───────────────┘
                                │
     ┌──────────────────────────┴──────────────────────────┐
     ▼                                                     ▼
```

┌──────────────────────────────┐ ┌──────────────────────────────┐

│ PROCESS QUALITY CORES │ │ INTELLIGENT RUN-TIME PILLARS│

├──────────────────────────────┤ ├──────────────────────────────┤

│ • Secure Coding & SDL │ │ • Sec Measurement Platform │

│ • Trustworthy Code Builds │ │ • Sec Analysis Platform │

│ • Bottom-Line Compliance │ │ • Sec Control Platform │

└──────────────────────────────┘ └──────────────────────────────┘

```
*(Word Design Hint: Replicate this dual-pillar framework using **Insert > SmartArt > Relationship > Converging Radial** or a basic table layout).*

The framework operates on a top-down model, placing compliant operations as our absolute baseline. Network stability and customer service continuity take strict precedence over short-term commercial interests. 

To support live operations, the framework deploys three interconnected run-time pillars:
* **Security Measurement Platform:** Delivers real-time cryptographic verification of system state integrity.
* **Security Analysis Platform:** Implements continuous telemetry logging and automated anomaly ingestion.
* **Security Control Platform:** Enables rapid, policy-driven isolation of affected subsystems during a live security event.

Formally authorized by the Global Cybersecurity and User Privacy Protection Committee (GSPC) and ratified by the Board of Directors, Cybersecurity 2.0 embeds security requirements directly into every internal workflow, establishing an immutable framework designed to protect our customers' digital assets.

---

## 1.4 Specialized Security Domains

### 1.4.1 Compliance and Risk

#### 1. Compliance and Risk Management Overview
* **Compliance Management:** The structural systems, internal audits, and governance processes deployed to ensure the enterprise aligns with regional laws, national standards, and binding corporate directives.
* **Risk Management:** The systematic coordination of activities designed to identify, analyze, evaluate, mitigate, and monitor operational vulnerabilities. Cybersecurity and privacy non-compliance are designated as top corporate risks.

#### 2. Leadership Directives on Compliance Governance
Corporate executives treat compliance as a prerequisite for global market access. Executives mandate that all products and solutions deliver verifiable trust and engineering clarity. External regional regulations must be thoroughly internalized into our internal processes, moving away from reactive patches toward professional compliance management models.

#### 3. The Compliance Risk Management Framework
The framework utilizes a seven-element structure aligned with international GRC best practices:

```

[ 1. Objective Setting ] ───► Establishing clear performance parameters.

│

▼

[ 2. Risk Assessment ] ───► Systematically identifying threat vectors.

│

▼

[ 3. Responsibility ] ───► Assigning ownership across business units.

│

▼

[ 4. Integrity Culture ] ───► Fostering an internal culture of transparency.

│

▼

[ 5. Strong Controls ] ───► Implementing deterministic and non-deterministic rules.

│

▼

[ 6. Oversight Systems ] ───► Running real-time pipeline monitoring.

│

▼

[ 7. External Auditing ] ───► Validating controls via independent groups.

```

These elements support the company's four core supervision objectives:
1. **Mission Realization:** Ensuring operations protect our core values.
2. **Strategic Safeguarding:** Defending corporate vision and long-term roadmap developments.
3. **Sound Operations:** Maintaining structural reliability and system uptime across all portfolios.
4. **Regulatory Adherence:** Ensuring complete compliance with regional and global legal frameworks.

#### 4. The Compliance Risk Landscape
Compliance vulnerabilities are broadly divided into two main risk landscapes:
* **Cybersecurity Vulnerabilities:** Focuses on mitigating insider threats, unverified supply chain integrations, and multi-tenant cloud service access leaks that threaten customer infrastructure stability.
* **Privacy Vulnerabilities:** Focuses on enforcing compliance controls across the full personal data lifecycle, eliminating non-compliant collection, unencrypted retention, unsafe data disposal, and unauthorized cross-border transfers.

### 1.4.2 Cybersecurity Vulnerability

#### 1. Global Legal and Regulatory Frameworks
Vulnerability tracking is tightly governed by distinct regional legal mandates:
* **China Network Product Vulnerability Provisions (2021):** Mandates that network product providers log, verify, and report any discovered security flaws to state authorities within **two days**.
* **European Union NIS 2 Directive & Cybersecurity Act:** Implements strict risk-mitigation rules requiring equipment vendors to maintain transparent, open vulnerability reporting channels and adhere to Coordinated Vulnerability Disclosure (CVD) timelines.

#### 2. Vulnerability Management Framework
The company deploys a structured, three-layer framework:

```

┌─────────────────────────────────────────────────────────────┐

│ VULNERABILITY CORE GOVERNANCE STACK │

├─────────────────────────────────────────────────────────────┤

│ Layer 1: Core Principles (Harm Reduction, Collaboration) │

├─────────────────────────────────────────────────────────────┤

│ Layer 2: Binding Internal Conduct Policies │

├─────────────────────────────────────────────────────────────┤

│ Layer 3: Technical Ingestion and Patching Rules │

└─────────────────────────────────────────────────────────────┘

```

This stack is driven by five core engineering principles:
1. **Harm and Risk Reduction:** Prioritizing immediate containment to minimize live network risk.
2. **Mitigation Focus:** Developing clean, stable security patches that resolve root bugs without degrading system performance.
3. **Protective Management:** Ensuring vulnerability details are handled securely during patch development.
4. **Continuous Improvement:** Analyzing post-incident data to strengthen our upstream R&D coding baselines.
5. **Open Collaboration:** Actively engaging with customers, white-hat researchers, and emergency response teams (CERTs).

#### 3. Vulnerability Best Practices
Product teams must manage security disclosures through dedicated, corporate professional organizations (such as the Product Security Incident Response Team, or PSIRT). Individual employees are strictly prohibited from publicly disclosing product vulnerabilities independently. 

Disclosures must follow strict Coordinated Vulnerability Disclosure (CVD) methods, ensuring that verified patches are finalized, tested, and distributed to customers before the underlying security flaw is made public, thereby preventing exploitation by malicious actors.

---

## 2.1 Evolution of Privacy Protection

Data privacy has transitioned from a theoretical concept into a strictly enforced, legally binding global mandate. This evolution is structurally categorized into five distinct development historical milestones:

```

1890: THE FOUNDATIONAL CONCEPT

► Scholars Warren and Brandeis publish "The Right to Privacy" in the Harvard

Law Review, establishing privacy as an explicit, legally recognized right.

│

▼

1948 - 1970: POST-WAR REGULATORY BIRTH

► Universal Declaration of Human Rights (1948) codifies personal privacy.

► Germany enacts the Federal Data Protection Act (1970), creating the first

structural data protection statute to manage early computer databases.

│

▼

1981: INTERNATIONAL CODIFICATION (CONVENTION 108)

► The Council of Europe opens "Convention 108," establishing the first

legally binding international treaty governing automated data processing.

│

▼

2016 - 2021: THE MODERN MATURING ERA

► The European Union implements the General Data Protection Regulation (GDPR)

in 2016, introducing massive administrative fines and extra-territorial reach.

► China enforces the Personal Information Protection Law (PIPL) in 2021.

│

▼

2022 - PRESENT: ADVANCED SOVEREIGNTY AND AI Topologies

► Launch of the EU-US Data Privacy Framework alongside strict global localization

rules designed to manage generative AI, biometric tracking, and edge computing.

```
*(Word Design Hint: Replicate this historical progression using **Insert > SmartArt > Process > Alternating Time Line**).*

Modern privacy frameworks reject passive data compliance, forcing organizations to balance operational data utility with verified, active user data protection.

---

## 2.2 Huawei Privacy Protection Framework

Data privacy management is a core competitive requirement essential for protecting corporate reputation, preventing severe legal penalties, and maintaining global market access.

### 1. Foundational Privacy Principles and Definitions
Our operational framework maps directly to the core tenets of international data protection laws:
* **Lawfulness, Fairness, and Transparency:** Processing data under a valid legal basis while maintaining open, clear notifications for the user.
* **Purpose Limitation:** Collecting data for explicit, defined business goals and rejecting unauthorized secondary processing.
* **Data Minimization:** Restricting collection pipelines exclusively to the datasets required to fulfill the primary task.
* **Storage Limitation:** Deleting or anonymizing records the moment the primary processing objective is achieved.
* **Accuracy and Integrity:** Enforcing automated validation to maintain data precision and deploying robust encryption to defend records against tampering.
* **Accountability:** Documenting and retaining end-to-end processing logs to actively demonstrate compliance to external auditors.

```

┌────────────────────┬───────────────────────────────────────────────────────┐

│ PRINCIPLE ROLE │ STRUCTURAL LEGAL DEFINITION │

├────────────────────┼───────────────────────────────────────────────────────┤

│ Data Subject │ The identified or identifiable living natural person. │

│ Personal Data │ Any information tied to an identified Data Subject. │

│ Data Controller │ The entity that dictates the purpose of data use. │

│ Data Processor │ The entity handling data _only_ for the Controller. │

└────────────────────┴───────────────────────────────────────────────────────┘

```

### 2. Implementation of Privacy Measures
Huawei embeds these principles into every phase of our global business portfolio:
* **Consumer BG Ecosystems:** We provide plain-language privacy statements, enforce strict data minimization, and run automated systems to fulfill Data Subject Requests (DSRs) within statutory limits.
* **Carrier & Enterprise Partnerships:** We handle subscriber data purely under the explicit, written authorization of the corporate client, utilizing clear contracts to define response paths for security incidents.
* **Internal HR Management:** We manage workforce data under specific, appropriate statutory workflows, deploying clear privacy notices and restricting file access exclusively to authorized HR teams.
* **Operational Gates:** Mandatory **Privacy Impact Assessments (PIAs)** are integrated into our core product lifecycles, requiring formal validation before any data collection, cross-border transfer, or third-party disclosure can proceed.

---

## 2.3 Sector-Specific Privacy Practices

### 1. Consumer Business Group (BG)
* **Explicit Consent Architecture:** Product lines must display a concise privacy statement and secure explicit, granular user consent before executing any data collection, behavioral tracking, or profiling operations for digital marketing.
* **System Notifications:** The system must push a formal privacy notification before a customer accesses helpline voice systems, consumer cloud platforms, or remote device diagnostic portals.
* **Localization and Transfers:** Consumer information must be securely processed and stored in strict compliance with local data localization laws, utilizing our audited **"three plus X" deployment architecture** to govern cross-border data routing safely.

### 2. Carrier Business Group (BG)
* **Core Tri-Strategy Compliance:** Technical field teams must execute data operations under our verified three-part strategy: confirm a valid legal basis, align with the local privacy risk baseline, and comply with state telecom data regulations.
* **NCR Data Governance:** Customer information and account metrics must be logged legally within the official **Network Customer Record (NCR)** tracking architecture. The collection or tracking of subscriber metrics involving minors without explicit parental consent is strictly prohibited.
* **B2B Marketing Controls:** Sales teams must secure explicit, prior written authorization from corporate carriers before utilizing operational network metrics for targeted marketing or product updates.

### 3. Enterprise Business Group (BG)
* **Global Domain Alignment:** Teams must apply the corporate global privacy management framework across all marketing channels, direct sales pipelines, and external channel partner networks.
* **Event Data Governance:** Marketing teams must perform complete Privacy Impact Assessments (PIAs) before hosting public corporate events, ensuring digital outreach utilizes verified opt-in verification models.
* **Survey Operations:** Customer satisfaction surveys and product evaluation initiatives require written client consent before launch, and all participant data must remain securely protected during processing.

### 4. Human Resources & Workforce Management
* **Recruitment Transparency:** HR platforms must display a dedicated applicant privacy notice during recruitment, detailing the exact categories of personal data collected and the defined processing parameters.
* **Verification Ingestion Boundaries:** In alignment with data minimization rules, HR teams may collect only essential applicant data, verifying that any background validation or third-party sourcing complies with local labor laws.
* **Operational HR Processing:** The corporation processes internal employee data for payroll management, local tax accounting, benefits administration, and legal compliance under clear statutory obligations, optimizing processing workflows without placing unnecessary consent burdens on routine operations.

---

## 2.4.0 Seven Privacy Requirements

Huawei incorporates privacy protection directly into its business operations by aligning its practices with the seven stages of the personal data processing lifecycle. Specific privacy requirements have been established for each stage:

```

┌─────────────────────────────────────────────────────────────┐

│ PERSONAL DATA PROCESSING LIFECYCLE │

├───────┬─────────────────────────────────────────────────────┤

│ STAGE │ REQUIREMENT SNAPSHOT │

├───────┼─────────────────────────────────────────────────────┤

│ 1 │ Notification to Data Subject │

│ 2 │ Data Subject's Choice and Consent │

│ 3 │ Collection Minimization │

│ 4 │ Use, Retention, and Disposal │

│ 5 │ Disclosure to Third Parties │

│ 6 │ Cross-Border Transfer of Personal Data │

│ 7 │ Securing the Rights of the Data Subject │

└───────┴─────────────────────────────────────────────────────┘

```

* **Stage 1: Notification to Data Subject** – Data collection must trigger a clear notice outlining the data type, purpose, and processing methods.
* **Stage 2: Choice and Consent** – Data subjects must have the right to refuse processing or withdraw their consent at any time without penalty.
* **Stage 3: Collection** – Data collection must be lawful, relevant, strictly necessary, and minimized.
* **Stage 4: Use, Retention, and Disposal** – Data lifecycle operations must be secure, preventing unauthorized processing and data breaches.
* **Stage 5: Disclosure to Third Parties** – Security responsibilities must be explicitly defined in contracts with business partners and suppliers.
* **Stage 6: Cross-Border Transfer** – International transfers must be controlled through Data Transfer Agreements (DTAs) or explicit user consent.
* **Stage 7: Securing Data Subject Rights** – The eight core rights of the data subject must be protected, with formal requests handled within one month.

---

## 2.4.1 Stage 1: Notification to Data Subject

When or before collecting personal data through products, services, or marketing activities, Huawei utilizes reasonable endeavors to notify data subjects of the types of personal data collected, the purposes of processing, the processing methods, their statutory rights, and the security measures implemented to protect their information.

Under regulations like the GDPR, data subjects have a strict right to transparent information. Whether data is collected directly from the individual or sourced via a third party, the data controller must provide a concise, transparent, easily accessible notice written in clear and plain language. This requirement is especially strict for data collected from children. If data is repurposed for an objective other than the original intent, a fresh notification must be issued before further processing begins.

### Simulated Case 1: Cashback Marketing Campaign
In June 2018, a mobile phone retailer launched an online marketing campaign in Germany. Users were eligible for a device cashback offer by submitting their personal details—including names, phone numbers, bank accounts, and residential addresses—on the campaign's webpage. After applying, a user named Tom noticed that the page lacked any information detailing the processing purposes, storage methods, or his data subject rights. Tom filed a formal complaint with the local data protection supervisory authority, triggering an investigation and subsequent administrative penalties against the retailer.

* **Corrective Action and Compliance Analysis:** Performing a Privacy Impact Assessment (PIA) before an activity is a necessary practice, but a PIA should be used to manage risk, not to outright block standard business initiatives. The most appropriate remedy for the retailer is to embed a comprehensive privacy notice directly on the campaign webpage. This notice must be conspicuously displayed on the login or registration interface, such as via an interactive pop-up.

### Simulated Case 2: Recruitment and HR Processing
During a corporate recruitment process, Human Resources (HR) needs to process candidate personal information extracted from resumes, such as names, contact details, and employment histories. 

To maintain legal transparency, HR must provide candidates with a dedicated privacy notice outlining the data types collected, processing purposes, storage durations, and security safeguards. Depending on the local jurisdiction, explicit candidate consent may also be required. Additionally, organizations must establish accessible channels—such as a designated HR mailbox or a professional contact portal—allowing candidates to review, modify, or request the deletion of their resume data, with corporate responses delivered within statutory timeframes.

---

## 2.4.2 Stage 2: Data Subject's Choice and Consent

Personal data collection must be anchored on the data subject's consent, explicit written authorization from customers, or alternative legitimate grounds. A verifiable record of this consent or authorization must be securely retained, and individuals must be provided with functional mechanisms to withdraw their consent at any time.

Valid consent requires a clear affirmative act establishing a freely given, specific, informed, and unambiguous indication of agreement. Consent is legally invalid under the following conditions:
* **Clear Imbalance:** There is a significant power imbalance between the data subject and the controller (e.g., employer-employee relationships or certain public utility dependencies).
* **Bundled Contracts:** Consent is bundled into generic terms of service or mixed-purpose contracts, forcing a "take-it-or-leave-it" choice.
* **Obscure Language:** Professional legal jargon is intentionally mingled into user agreements to obscure processing scopes.
* **Pre-Ticked Boxes:** Passive agreement methods, such as pre-checked "I agree" checkboxes, are utilized.

If sensitive personal data (such as biometric data, health records, or financial identifiers) is collected, controllers must secure explicit consent. Furthermore, data processors acting on behalf of corporate clients must verify that the controller has obtained valid user consent before handling the underlying data. For data involving children, parental responsibility verification is required, and the data controller carries the legal burden of proof.

### Regulatory Reference: The CNIL Fine Against Google
The French data protection authority (CNIL) issued a 50 million euro fine against Google LLC, explicitly ruling that user consent obtained for ad personalization was invalid. CNIL highlighted two critical structural violations:
1. **Vague Descriptions:** The processing details were fragmented and vague, failing to clearly articulate the extensive scope of services, websites, and applications involved (e.g., Google Search, YouTube, Google Maps, Play Store, and targeted ad ecosystems).
2. **Passive Mechanisms:** The consent options for ad personalization utilized pre-checked boxes, and creating an account required a blanket, non-granular agreement to all data processing activities.

### Simulated Case 3: Default Options in Credit Promotion
In May 2018, a third-party payment platform operating in Europe rolled out an updated privacy notice to its existing user base to promote its newly launched credit services. When the updated notice popped up, the checkbox stating *"I agree that my personal data will be used to open credit services"* was checked by default. Many users subsequently discovered that credit services had been activated on their accounts without their conscious awareness, and the platform lacked a clear configuration menu to cancel or opt out of the service.

* **Compliance Takeaway:** Consent must never be obtained via default settings, passive silence, or economic compulsion. If the fundamental purpose of data processing changes (e.g., shifting from standard payment processing to credit evaluation), user consent must be explicitly re-obtained, and a seamless withdrawal mechanism must be provided.

### Simulated Case 4: Client Reception and Unauthorized Third-Party Disclosure
A technology company's corporate administrative system manages employee and visitor travel services, collecting passenger names and phone numbers during the booking application. For safety and logistics, the system securely synchronizes this passenger data with an authorized third-party ride-hailing vendor. Both companies operate under a strict Data Processing Agreement (DPA) specifying that passenger data may only be utilized for pickup and drop-off logistics.

Following a corporate exchange conference, an external industry expert (Kate) and a company employee (Alice) shared a ride arranged by the system. They had a productive business conversation but did not exchange personal contact details. After exiting the vehicle, Kate requested Alice's phone number directly from the driver. Believing it was helpful, the driver provided the contact information. Alice subsequently discovered the leak and filed a formal complaint.

* **Compliance Analysis:** The driver's behavior violated fundamental privacy protection regulations. Despite the existence of a corporate DPA between the primary company and the vehicle vendor, personal data cannot be disclosed to third parties without securing the data subject's explicit, informed consent.

---

## 2.4.3 Stage 3: Collection

Huawei restricts the collection of personal data to the minimum amount necessary to fulfill specific, legitimate business purposes. If data is collected indirectly via third-party partners, rigorous compliance controls must be implemented to verify its legal origin.

* **Purpose Limitation:** Personal data must be collected for specified, explicit, and legitimate purposes. It cannot be processed in any manner incompatible with those original objectives. Any secondary processing for an unrelated purpose requires fresh consent or complete, irreversible data anonymization.
* **Data Minimization:** Personal data must be adequate, relevant, and strictly limited to what is necessary in relation to the defined processing purposes.

### Simulated Case 5: Third-Party Big Data Sourcing
In August 2018, a big data analytics firm imported a large batch of untested user datasets from a strategic business partner for a non-profit analysis initiative. Prior to the transfer, the partner provided verbal assurances that all user information had been collected via legitimate, compliant channels. 

One month later, the data protection authority penalized the partner organization for systematically collecting massive volumes of consumer data without obtaining proper user consent. As a downstream recipient of this illicitly sourced data, the big data company suffered significant reputational damage and was exposed to severe regulatory penalties.

* **Compliance Takeaway:** When sourcing personal data from third-party partners, vendors, or public brokers, organizations must perform exhaustive privacy due diligence. Relying on unverified verbal or contractual assertions is insufficient; the data ingestion process must actively verify the legitimacy, consent trails, and regulatory compliance of the original data source.

---

## 2.4.4 Stage 4: Use, Retention, and Disposal

The processing purposes, methods, and retention periods applied to personal data must remain strictly consistent with the parameters established in the initial notice to data subjects or the authorizations provided by customers. Huawei maintains the ongoing accuracy, integrity, and relevance of personal data relative to its specified processing objectives.

```

```
              ┌──────────────────────────────┐
              │   DATA MINIMIZATION TACTICS  │
              └──────────────┬───────────────┘
                             │
     ┌───────────────────────┴───────────────────────┐
     ▼                                               ▼
```

┌─────────────────────────────────┐ ┌─────────────────────────────────┐

│ ANONYMIZATION │ │ PSEUDONYMIZATION │

├─────────────────────────────────┤ ├─────────────────────────────────┤

│ • Complete PII structural │ │ • Reversible de-identification │

│ removal. │ │ • Data remains personal data │

│ • Irreversible processing. │ │ • Full privacy principles │

│ • No longer personal data. │ │ still apply contextually. │

└─────────────────────────────────┘ └─────────────────────────────────┘

```

### Access and Security Operations
Access to and processing of personal data must be strictly controlled through granular authorization mechanisms. Technical controls, such as encryption, must be implemented to ensure the continuous confidentiality, integrity, availability, and resilience of data processing systems. In the event of a physical or technical security incident, systems must possess the capability to restore the availability of personal data in a timely manner. Security measures and operational controls must be regularly tested, assessed, and evaluated for effectiveness.

### Data Breach Incident Management
Under regulatory frameworks like the GDPR, a data controller must notify the competent supervisory authority of a personal data breach within 72 hours of becoming aware of it, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons. 

Huawei enforces structured, internal timeframes within its personal data breach management requirements to ensure compliance:

```

[Incident Occurs] ──(Within 1 Hour)──> [Line Manager Notification] ──(Within 24 Hours)──> [HQ/Regional Cyber & Privacy Office Notification]

```
*(Word Design Hint: Replicate this incident pipeline layout using **Insert > SmartArt > Process > Chevron Process**).*

* **Immediate Escalation:** Any employee identifying a potential or confirmed personal data breach must notify their competent business leader within **one hour**.
* **Corporate Reporting:** Upon validation, the responsible business leader must initiate immediate containment procedures and report the incident to the Executive Office and the corresponding regional Cybersecurity and Privacy Protection Office or Director within **24 hours** (for Severity Level 1 and Level 2 events).
* **External Notification Handling:** If local laws, regulations, or contractual obligations necessitate external notifications to supervisory authorities, clients, or affected data subjects, the Group Leader of the Personal Data Breach Incident Workgroup appoints specific personnel. Within the European Union, formal notifications to data protection authorities are managed exclusively by the regional Data Protection Officer (DPO).

### Simulated Case 6: Insider Data Leakage
An employee at a European aerospace manufacturer extracted a spreadsheet containing the personal data of 36,000 corporate employees and transmitted it to his spouse, an insurance sales manager at an external firm. The spreadsheet contained sensitive personal data, including names, dates of birth, employee identification codes, bank account details, religious beliefs, and medical records. The spouse subsequently utilized this dataset to target employees with commercial insurance products, causing significant reputational damage and legal exposure to the manufacturer.

* **Compliance Analysis:** The data controller failed to enforce sufficient access controls. Controllers must implement robust technical safeguards, such as granular access authorization baselines and mandatory encryption for special categories of personal data, to defend against insider threats, prevent misuse, and systematically reduce breach risks.

### Simulated Case 7: Scope Expansion and Function Creep
An equipment manufacturer collected the real-time geographic location coordinates of its frontline engineers in Europe, stating explicitly in its privacy notice that the collection was strictly for logistics and resource allocation. However, the company repurposed this tracking data to conduct tests for a new, unrelated business line without obtaining the engineers' prior consent. This unauthorized change in processing purpose triggered severe pushback from frontline staff and caused adverse internal complications.

* **Compliance Takeaway:** If an organization expands its data processing scope beyond the original intended purpose, it must secure fresh consent from the data subjects. Alternatively, the historical data must undergo complete, irreversible anonymization before the new testing begins. Because anonymized data cannot be used to identify a specific natural person, it falls outside the legal definition of personal data.

---

## 2.4.5 Stage 5: Disclosure to Third Parties

When Huawei authorizes a supplier, vendor, or business partner to process personal data on its behalf, it must ensure that the third party implements technical and organizational security measures tailored to the specific risks associated with the processing operations. 

```

┌─────────────────────────────────────────────────────────────┐

│ THIRD-PARTY COMPLIANCE BOUNDARIES │

├───────────────────────────┬─────────────────────────────────┤

│ SUPPLIER ROLE │ CORE OBLIGATION REQUIREMENT │

├───────────────────────────┼─────────────────────────────────┤

│ Data Processor │ Process data _only_ under the │

│ (On behalf of Huawei) │ explicit instruction of Huawei. │

├───────────────────────────┼─────────────────────────────────┤

│ Joint Data Controller │ Explicitly define respective │

│ (Independent Third Party) │ liabilities within the contract.│

└───────────────────────────┴─────────────────────────────────┘

```

To maintain end-to-end integrity, the company must perform formal due diligence assessments and regular privacy audits of downstream suppliers.

### Simulated Case 8: Regulatory HR Data Verification
A delivery manager at a primary equipment vendor received an urgent request from a client organization during a regulatory compliance inspection. The client demanded immediate copies of employment contracts, social welfare enrollment records, insurance payments, payroll sheets, national ID copies, and criminal background checks for key project personnel. 

The delivery manager contacted the internal HR data protection team for asset release. Upon formal evaluation, the team determined that while the client's compliance purpose was legitimate, the data could not be shared raw. A formal Data Processing Agreement (DPA) containing explicit, contractually binding privacy safeguards had to be executed before any employee records could be transferred.

### Simulated Case 9: Shared Data Ecosystems with Partners
An enterprise internet company hosted a product design seminar and requested attending industry experts to register via their official portal, collecting names, telephone numbers, emails, and corporate affiliations. Following the event, the company handed the complete registration database over to an external event organizer to manage future logistics. 

However, the event organizer leaked the file to a commercial marketing broker, resulting in the experts being targeted with unsolicited advertising calls. The experts subsequently filed formal complaints with the primary internet company.

* **Compliance Takeaway:** To prevent downstream leaks, a primary data controller must contractually bind all partners and third-party event organizers via structured DPAs. Organizations cannot rely on verbal assurances; they must execute vendor audits and active due diligence to verify that external processors maintain security baselines equivalent to their own.

---

## 2.4.6 Stage 6: Cross-Border Transfer of Personal Data

Huawei coordinates data transfers and global processing operations in compliance with international data localization mandates, conditional transfer restrictions, and outright cross-border prohibitions enforced by individual nations.

```

[ Data Exporter (Inside EU/EEA) ]

│

▼ (Cross-Border Ingestion / Remote Access)

┌────────────────────────────────┐

│ DATA TRANSFER AGREEMENT │

│ OR │

│ EXPLICIT USER CONSENT │

└───────────────┬────────────────┘

│

▼

[ Data Importer (Outside EU/EEA) ]

```

Before initiating any international transfer of personal data, every corporate entity must consult its corresponding Data Protection Officer (DPO) or Corporate Legal Affairs Department. For data exported out of the European Economic Area (EEA), a formal Data Transfer Agreement (DTA) incorporating EU Standard Contractual Clauses (SCCs) must be executed, or explicit, informed consent must be obtained from the data subject. The recipient entity is contractually bound to deliver an adequate level of privacy protection by adhering to the core processing principles.

### Simulated Case 10: Cross-Border Remote Access Boundaries
The German subsidiary of a multinational corporation collected local customer data to fulfill routine business operations. The underlying database was physically hosted within a localized data center owned by the corporation's Indian subsidiary. Technicians based at the Indian entity maintained continuous, direct remote access to the European servers to execute performance optimization and database management.

* **Compliance Analysis:** Under international privacy frameworks like the GDPR, remote electronic access from an external jurisdiction constitutes a cross-border data transfer, regardless of where the data is physically stored. To legally validate this architecture, the data exporter within the EU and the data receiver outside the union must execute a formal Data Transfer Agreement to guarantee compliance with statutory data security and sovereignty requirements.

---

## 2.4.7 Stage 7: Securing the Rights of the Data Subject

When acting as a data controller, Huawei provides data subjects with reasonable and accessible mechanisms to exercise their statutory rights. These mechanisms enable individuals to access, update, rectify, erase, or transmit their personal data as required by international data protection laws.

### Statutory Timeline and Request Management
Under regulatory frameworks such as the GDPR, data controllers must respond to Data Subject Right (DSR) requests without undue delay and, at a minimum, **within one month** of receipt. This standard processing timeline can be extended by an additional two months when strictly necessary, depending on the operational complexity and the total volume of incoming requests. 

```

[DSR Request Received] ───> Must Respond Within 1 Month ───> [If Complex: Inform of 2-Month Extension Before Day 30]

```

If an extension is required, the controller must formally notify the data subject within the initial one-month window and provide explicit justification for the delay.

### Simulated Case 11: Delays in Processing Erasure Requests
In January 2018, a fast-moving consumer goods (FMCG) company with a large consumer base in Europe received a formal data erasure request from a customer named Jessica, who demanded the deletion of her historical service records. The company failed to log, process, or respond to her request within the statutory one-month timeframe. 

Jessica filed a formal complaint with her local data protection supervisory authority. The authority issued an official warning to the company's regional president, stating that the organization would face a 50,000 euro administrative fine if it failed to resolve the erasure request immediately.

* **Compliance Analysis and Takeaway:** Organizations must maintain clear, functional, and monitored channels for users to submit data erasure and rectification requests. Ignoring data subject communications or failing to take action within 30 days constitutes a direct regulatory violation, exposing the corporation to immediate enforcement actions and severe financial penalties.

---

## 2.5 Lifecycle Summary

By embedding these seven specific privacy controls across our business operations, Huawei ensures that personal data is continually protected from the moment of initial notification through to its ultimate disposal.

```

┌────────────────────────────────────────────────────────────────────────┐

│ COMPLIANT DATA LIFECYCLE PIPELINE │

└───────────────────────────────────┬────────────────────────────────────┘

│

┌──────────────────────────────┼──────────────────────────────┐

▼ ▼ ▼

┌──────────────┐ ┌──────────────┐ ┌──────────────┐

│ NOTIFICATION │ ────────────> │ CONSENT │ ────────────> │ COLLECTION │

│ Clear terms, │ │ Affirmative, │ │ Minimized, │

│ plain text │ │ granular choice │ lawful scope│

└──────────────┘ └──────────────┘ └──────────────┘

│ │ │

└──────────────────────────────┼──────────────────────────────┘

│

┌──────────────────────────────┴──────────────────────────────┐

▼ ▼ ▼

┌──────────────┐ ┌──────────────┐ ┌──────────────┐

│ RETENTION │ ────────────> │ TRANSFERS / │ ────────────> │ SUBJECTS' │

│ Secure silo, │ │ DISCLOSURES │ │ RIGHTS │

│ accurate data│ │ DTAs & regular│ │ 1-month max │

│ │ │ vendor audits│ │ response time│

└──────────────┘ └──────────────┘ └──────────────┘

│

▼

┌──────────────┐

│ DISPOSAL │

│ Irreversible │

│ erasure │

└──────────────┘

```
*(Word Design Hint: Replicate this comprehensive Pipeline grid in Microsoft Word using **Insert > SmartArt > Relationship > Radial List** or by sketching standard interconnected cell blocks).*

1. **Notification:** Deliver transparent, plain-language notices before or during data intake.
2. **Choice & Consent:** Establish affirmative, granular opt-in controls with simplified withdrawal menus.
3. **Collection:** Enforce strict data minimization, keeping pipelines lean and verifying third-party compliance.
4. **Retention & Disposal:** Restrict access permissions, deploy encryption, and handle security incidents inside accelerated SLA boundaries.
5. **Disclosures:** Control downstream partners via formal Data Processing Agreements and vendor risk management reviews.
6. **Cross-Border Transfers:** Address sovereignty mandates through Standard Contractual Clauses, treating remote infrastructure access as an active export pipeline.
7. **Subject Rights:** Guarantee frictionless infrastructure to fulfill user access, rectification, and deletion requests within a strict 30-day window.

## 3.1 Cybersecurity and Privacy Requirements for Huawei Employees

Huawei establishes precise, non-negotiable requirements regarding cybersecurity and privacy protection, defines common violations, and mandates strict adherence to the company's business conduct guidelines. As a leading global ICT solutions provider that delivers critical infrastructure products and services, our primary responsibility is to ensure that global networks remain shphtable, secure, and operational at all times.

This operational commitment applies across all circumstances, including periods of natural disasters (such as earthquakes and tsunamis) and critical state emergencies (such as geopolitical conflicts and wars). Employees must comply with foundational cybersecurity principles, placing our core responsibility to safeguard secure network operations for our customers strictly above Huawei's short-term commercial interests.

### Zero-Tolerance Operational Prohibitions

To uphold this commitment, Huawei maintains a strict policy of non-tolerance toward any behavior that compromises customer systems or network integrity. The following conduct is strictly prohibited:

- **Unauthorized Access:** Accessing customer systems or equipment without explicit, written customer authorization to collect, possess, process, or modify live network data, or to disclose and disseminate confidential customer information.
    
- **Malicious Injections:** Embedding malicious code, malware, or unauthorized backdoors into products, or developing and distributing software viruses during the design, testing, or field delivery of products and services.
    
- **Infrastructure Sabotage:** Launching network attacks, damaging customer communication infrastructure, or exploiting customer networks to steal, alter, or destroy information.
    
- **National Security Violations:** Engaging in any activity that endangers national security, compromises the public interest, or violates the legal rights of external parties.
    
- **Third-Party Facilitation:** Soliciting, assisting, or helping any third party to execute any of the aforementioned prohibited actions.
    

### Protecting User Privacy and Communication Freedoms

In alignment with the Universal Declaration of Human Rights, which states that no individual shall be subjected to arbitrary interference with their privacy or correspondence, Huawei mandates complete compliance with global data privacy and personal data protection statutes.

```
┌─────────────────────────────────────────────────────────────┐
│              ZERO-TOLERANCE PRIVACY PROHIBITIONS            │
├─────────────────────────────────────────────────────────────┤
│ • Illegal collection, disclosure, distortion, or sale of    │
│   end-user personal data.                                   │
├─────────────────────────────────────────────────────────────┤
│ • Utilizing ICT tools to block, hijack, or disrupt normal   │
│   communication traffic.                                    │
├─────────────────────────────────────────────────────────────┤
│ • Participating in or facilitating illegal surveillance of  │
│   end-user movements or communications.                     │
├─────────────────────────────────────────────────────────────┤
│ • Restricting or artificially throttling the free flow of   │
│   unbiased data.                                            │
└─────────────────────────────────────────────────────────────┘
```

## 3.2 Accountability for Violations and Changing Mindsets

To protect customer assets and maintain global compliance, Huawei enforces strict accountability mechanisms to address policy breaches, supported by a structured classification model to evaluate individual violations.

### 1. Rating Principles and Common Violations

The severity of an internal security violation is determined by evaluating the structural risk and real-world damage caused by the employee's misconduct. The accountability framework applies three main rating principles to classify a breach:

- **Basic Rating:** Establishes the foundational level of a violation based on the specific laws breached and the direct engineering or operational impact caused on the live network.
    
- **Aggravated Rating:** Increases the severity level and disciplinary actions if the violation results in external lawsuits, formal customer complaints, data subject escalations, or severe economic losses for the corporation.
    
- **Unusual/Uncovered Breaches:** Violations that are complex or not explicitly documented in standard text baselines are mapped against similar common violations and baseline criteria to determine their ultimate enforcement tier.
    

### 2. Preventive Measures and Mindset Transformations

Preventing security incidents requires a definitive change in mindset across all personnel layers. Employees must proactively study corporate compliance policies, take absolute personal ownership of their configuration decisions, and recognize the legal liabilities tied to their operational behavior. Every network product, software build, and technical service delivered by Huawei must be engineered to withstand intensive legal and forensic scrutiny.

```
  [ Learn the Standard ] ───► Commit to BCG Guidelines & Process Standards
            │
            ▼
  [ Pass Certification ] ───► Complete Core Courses & Mandatory Exams
            │
            ▼
  [ Execute Securely ]   ───► Follow Active Work Rules & Reject Informal Tools
            │
            ▼
  [ Report Anomalies ]   ───► Immediately Escalate Issues via Official Channels
```

_(Word Design Hint: Replicate this Compliance Mindset lifecycle using **Insert > SmartArt > Process > Continuous Block Process**)._

To operationalize this preventive mindset, all global personnel must complete four mandatory requirements:

1. **BCG Commitment:** Review, understand, and formally sign the Business Conduct Guidelines (BCG) commitment letter annually.
    
2. **Process Standardization:** Strictly adhere to the explicit cybersecurity and privacy protection gates embedded directly within our business processes (IPD, SD, ITR, and LTC).
    
3. **Work Certification:** Take all related security courses and pass the corresponding technical exams to secure a valid work certificate before being granted access to production codebases or customer networks.
    
4. **Immediate Incident Escalation:** Actively monitor systems and promptly report any identified configuration issues, software bugs, or suspected data breaches through official corporate security channels.