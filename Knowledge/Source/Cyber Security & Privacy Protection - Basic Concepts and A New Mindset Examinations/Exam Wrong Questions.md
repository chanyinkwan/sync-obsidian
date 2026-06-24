# Cyber Security Exam — Wrong Questions Log

## Attempt results
| Attempt | Score | Result |
| --- | --- | --- |
| 1st | 69 / 100 | Failed |
| 2nd | 59 / 100 | Failed |
| 3rd | 69 / 100 | Failed |
| 4th | 78 / 100 | Failed (best yet ↑) |

> Pattern broke at attempt 4 (78) — the targeted bursts are working. Weak spots: Vulnerability Management + GDPR/Privacy + Security Configuration.
> Targeted "answer + why" study aid kept separately → [[Wrong-Answer Bursts (retake fuel)]].
>
> **Format:** every entry = Question → Options → 正確答案 → 答案解析 → 知識點.

---

## First Attempt — 69 / 100

#### Q4（是非題）
- **Question:** E2E integrity means that products delivered to customers by suppliers remain intact, undamaged, and free from contamination or counterfeit throughout their lifecycle.
- **Options:** ○ Correct · ● Incorrect
- **正確答案:** 正確 (True)
- **答案解析:** Lifecycle integrity is part of the standard E2E integrity definition.
- **知識點:** E2E integrity

#### Q8（是非題）
- **Question:** A manager lost a USB drive holding ~100 customers' personal data on a plane. The drive is a corporate asset with IT confidentiality measures and the data table is encrypted, so breach probability is very low. Privacy personnel conclude no customer notification is needed.
- **Options:** ○ Correct · ● Incorrect
- **正確答案:** 正確 (True)
- **答案解析:** Notification is risk-based; strong encryption + low breach probability mitigates the mandatory notification requirement.
- **知識點:** Privacy — breach notification (risk-based)

#### Q15（單選題）
- **Question:** Which of the following principles is NOT included in the top five principles of vulnerability management?
- **Options:**
    - A. Proactive management
    - B. Harm and risk reduction
    - C. Continuous improvement
    - D. Root cause analysis
- **正確答案:** D — Root cause analysis
- **答案解析:** The five principles are Harm and risk reduction, Vulnerability reduction and mitigation, Proactive management, Continuous improvement, Openness and collaboration. Root cause analysis is not one of them.
- **知識點:** Vulnerability management principles

#### Q16（單選題）
- **Question:** For future-oriented cyber security planning, based on the assumption "the cyber environment is insecure and faces constant attacks", we build a product view centering on improving ( ).
- **Options:**
    - A. Privacy protection
    - B. Product competitiveness
    - C. Cyber security
    - D. Cyber resilience
- **正確答案:** D — Cyber resilience
- **答案解析:** When systems move from closed to open and the network is insecure, build a dynamic-response capability centred on improving cyber resilience.
- **知識點:** Cyber resilience

#### Q17（單選題）
- **Question:** Which of the following statements is false?
- **Options:**
    - A. Use children's personal data (e.g. photos) in publicity cases after explicit guardian consent.
    - B. Enable user privacy protection settings by default when processing children's personal data.
    - C. Collect children's data (e.g. height/weight) after explicit guardian consent.
    - D. Collect children's data (e.g. names/ages) without the consent of legal guardians.
- **正確答案:** D — Collecting children's data without guardian consent.
- **答案解析:** Children's personal data always requires the guardian's explicit consent.
- **知識點:** Privacy — children's data

#### Q23（單選題）
- **Question:** Which principle requires controllers to ensure personal data is up to date?
- **Options:**
    - A. Data minimization
    - B. Storage limitation
    - C. Accuracy
    - D. Purpose limitation
- **正確答案:** C — Accuracy
- **答案解析:** 無
- **知識點:** General privacy protection

#### Q25（單選題）
- **Question:** GDPR defines "any freely given, specific, informed and unambiguous indication of the data subject's wishes…signifying agreement to the processing of personal data" as:
- **Options:**
    - A. Consent
    - B. Legal agreement
    - C. Explicit permission
    - D. Pre-authorization
- **正確答案:** A — Consent
- **答案解析:** Per GDPR Art. 4, "consent" is a freely given, specific, informed and unambiguous indication of the data subject's wishes.
- **知識點:** GDPR — typical privacy stages

#### Q26（多選題）
- **Question:** Which are key vulnerability management activities throughout the lifecycle defined by ISO 29147/30111?
- **Options:**
    - A. Vulnerability verification
    - B. Security advisory release
    - C. Vulnerability awareness
    - D. Vulnerability risk mitigation
- **正確答案:** ABC
- **答案解析:** Key activities: awareness, verification, remediation development, security bulletin release, remediation deployment.
- **知識點:** Vulnerability management & operation case

#### Q27（多選題）
- **Question:** Which are the goals of certificate management transformation?
- **Options:**
    - A. Secure communications on customers' live networks
    - B. No new certificate risks
    - C. Risk mitigation of existing certificates on live networks
    - D. Secure and trustworthy PKI system
- **正確答案:** ABCD
- **答案解析:** 無
- **知識點:** Certificate management

---

## Second Attempt — 59 / 100

#### Q8（是非題）
- **Question:** Vulnerability disclosure is a process where vendors and reporters jointly find solutions to reduce risk. It is a thorny issue: there is no "right or wrong", but "good or bad", "better or worse".
- **Options:** ○ 正確 · ● 錯誤
- **正確答案:** 正確 (True)
- **答案解析:** 無
- **知識點:** Vulnerability management — vulnerability case

#### Q12（單選題）
- **Question:** What privacy risk is common during personal data collection?
- **Options:**
    - A. Non-compliant access
    - B. Non-compliant transfer
    - C. Non-compliant use, retention, and disposal
    - D. Personal data breach
- **正確答案:** A — Non-compliant access
- **答案解析:** 無
- **知識點:** Compliance

#### Q19（單選題）
- **Question:** Which of the following statements is false?
- **Options:**
    - A. Use children's data (photos) in publicity after explicit guardian consent.
    - B. Collect children's data (height/weight) after explicit guardian consent.
    - C. Enable privacy protection settings by default when processing children's data.
    - D. Collect children's data (names/ages) without legal guardian consent.
- **正確答案:** D — Collecting children's data without guardian consent.
- **答案解析:** 無
- **知識點:** Privacy protection — children's data

#### Q21（單選題）
- **Question:** Under the GDPR, what is the time frame for a controller to report a data breach to the authority?
- **Options:**
    - A. Only after an appropriate countermeasure is found
    - B. Immediately after the breach is discovered
    - C. Within 24 hours of discovering the breach
    - D. Within 72 hours of discovering the breach
- **正確答案:** D — Within 72 hours
- **答案解析:** GDPR Art. 33(1): notify the competent supervisory authority no later than 72 hours after becoming aware.
- **知識點:** Interpretation of key GDPR articles

#### Q22（單選題）
- **Question:** Regarding the Log4j2 case, which statement about the inspiration for Huawei's vulnerability disclosure is incorrect?
- **Options:**
    - A. Disclose via the professional organization; employees must not self-disclose, but follow the company's processes.
    - B. On discovering (OSS) vulns, report to the professional org (Vulnerability Management Center & domain experts) to investigate, analyze impact, set policy.
    - C. The vuln is disclosed publicly before a remediation is available, and defenders are not yet ready.
    - D. Huawei employees can directly disclose (OSS) vulnerabilities discovered during R&D.
- **正確答案:** D — Employees may directly disclose OSS vulns. (Incorrect statement.)
- **答案解析:** Employees must route disclosure through the Vulnerability Management Center, never self-disclose.
- **知識點:** Vulnerability management — vulnerability case

#### Q23（單選題）
- **Question:** What is the correct sequence of vulnerability-related activities throughout the lifecycle?
- **Options:**
    - A. Verification, awareness, remediation, remediation deployment, security bulletin release
    - B. Awareness, verification, remediation, security bulletin release, remediation deployment
    - C. Awareness, verification, security bulletin release, remediation, remediation deployment
    - D. Awareness, verification, remediation, remediation deployment, security bulletin release
- **正確答案:** B
- **答案解析:** Order: awareness → verification → remediation → security bulletin release → remediation deployment.
- **知識點:** E2E vulnerability management

#### Q24（單選題）
- **Question:** Which method does NOT constitute explicit consent under the GDPR?
- **Options:**
    - A. Electronic forms/emails with e-signatures, or uploaded signed scans
    - B. Double verification (reply email + click confirmation link / enter code)
    - C. Dialog box with the privacy-policy consent box pre-ticked by default
    - D. Dialog box with an "Agree" button for users to give consent
- **正確答案:** C — Pre-ticked box (default consent)
- **答案解析:** Default consent does not constitute explicit consent.
- **知識點:** Interpretation of key GDPR articles

#### Q26（多選題）
- **Question:** Which statements are true about the damage caused by vulnerabilities?
- **Options:**
    - A. If exploited, great harm to asset owners — identity theft, data theft, eavesdropping.
    - B. Vulnerabilities need timely responses from vendors/customers/users; improper responses may breach regulations.
    - C. Vulnerabilities can be exploited to make offensive cyber weapons or launch large-scale attacks.
- **正確答案:** ABC
- **答案解析:** 無
- **知識點:** E2E vulnerability management

#### Q27（多選題）
- **Question:** Which are the objectives of certificate management transformation?
- **Options:**
    - A. Secure and trustworthy PKI system
    - B. Risk mitigation of existing certificates on live networks
    - C. Secure communications on customers' live networks
    - D. No new certificate risks
- **正確答案:** ABCD
- **答案解析:** 無
- **知識點:** Certificate management

#### Q28（多選題）
- **Question:** Which statements are correct about Huawei's vulnerability disclosure and reporting?
- **Options:**
    - A. The purpose is to mitigate risks; the core is to race ahead of threat actors.
    - B. Business departments disclose only to affected stakeholders where possible.
    - C. Huawei Vulnerability Management Center is the only contact to report vulnerabilities to regulators.
    - D. Disclosure is a thorny issue: no "right or wrong", only "good or bad", "better or worse".
- **正確答案:** ABCD
- **答案解析:** 無
- **知識點:** Vulnerability management — vulnerability case

#### Q29（多選題）
- **Question:** Which scenarios involve apps' compulsory, frequent, excessive permission requests that infringe user rights?
- **Options:**
    - A. Applying for excessive permissions
    - B. Applying for irrelevant permissions
    - C. Denying access to services if permission is not granted
    - D. Frequently requesting permissions
- **正確答案:** ABCD
- **答案解析:** 無
- **知識點:** Privacy protection

#### Q30（多選題）
- **Question:** From regulators' perspective, what are the potential doubts about cyber security?
- **Options:**
    - A. Introducing security risks by controlling technical-standard development
    - B. Cooperation with intelligence agencies
    - C. Service penetration, network manipulation, traffic hijacking
    - D. Consistency and fear of tampering
    - E. Fear of backdoors and malicious code
- **正確答案:** ABCDE
- **答案解析:** All options are correct.
- **知識點:** Cyber Security Framework

---

## Third Attempt — 69 / 100

#### Q10（單選題）
- **Question:** A maintenance engineer used an expired customer account/password on a colleague's PC to remotely access the customer network. Which statement is false?
- **Options:**
    - A. Strengthen management of customer authorization (letter, account, password).
    - B. Work with the customer to re-authorize; accounts/passwords used only by authorized personnel and invalid after the validity period, so issues can be traced.
    - C. Customers manage their own access-control vulnerabilities; Huawei need not proactively instruct cleanup.
    - D. Clear expired permissions periodically and remind customers to cancel expired authorization.
- **正確答案:** C
- **答案解析:** Accessing/operating a customer network without or beyond authorization is prohibited; the company also bears responsibility.
- **知識點:** Basic Requirements for Employees

#### Q11（單選題）
- **Question:** What privacy risk is common during personal data collection?
- **Options:**
    - A. Non-compliant access
    - B. Non-compliant transfer
    - C. Personal data breach
    - D. Non-compliant use, retention, and disposal
- **正確答案:** A — Non-compliant access
- **答案解析:** 無
- **知識點:** Compliance

#### Q12（單選題）
- **Question:** Which statement is incorrect about E2E vulnerability management requirements?
- **Options:**
    - A. Comply with the four vulnerability disclosure guidelines when disclosing to external parties.
    - B. Document No. 001 Cyber Security Vulnerability Management Regulations was released in 2021.
    - C. E2E requirements are incorporated into seven processes: IPD, MCR, LTC, CS, SD, ITR, supplier-followed PROC.
    - D. As a product developer I have never handled vulnerabilities; it has nothing to do with me.
- **正確答案:** D
- **答案解析:** Vulnerability management applies to everyone.
- **知識點:** Vulnerability management requirements for employees

#### Q13（單選題）
- **Question:** The draft NIS 2 Directive proposes ENISA establish a vulnerability database for voluntary disclosure. Which key vulnerability management activity relates to this?
- **Options:**
    - A. Vulnerability release
    - B. Vulnerability remediation
    - C. Vulnerability collection
    - D. Vulnerability disclosure
- **正確答案:** D — Vulnerability disclosure
- **答案解析:** 無
- **知識點:** Vulnerability management — laws & regulations

#### Q18（單選題）
- **Question:** Which of the following is NOT a personal data breach under the GDPR?
- **Options:**
    - A. A hospital sends a medical drug package to the wrong address.
    - B. Personal data is compromised by a fire in a data center.
    - C. A company's acquisition plan is disclosed without authorization.
- **正確答案:** C
- **答案解析:** An acquisition plan is corporate confidential information, not personal data.
- **知識點:** General privacy protection

#### Q23（單選題）
- **Question:** What should be preferentially implemented for Huawei software to improve security configuration?
- **Options:**
    - A. Configuration security by default
    - B. Diverse configurations
    - C. Flexible and adjustable configurations
    - D. Visualized configurations
- **正確答案:** A — Configuration security by default
- **答案解析:** 無
- **知識點:** Security configuration (五個端)

#### Q25（單選題）
- **Question:** Huawei adheres to which cyber security & privacy protection values?
- **Options:**
    - A. Openness and transparency
    - B. All of the options are correct
    - C. Integrity and trustworthiness
    - D. Capability and responsibility
- **正確答案:** B — All of the options
- **答案解析:** Values = openness & transparency, integrity & trustworthiness, capability & responsibility.
- **知識點:** Leadership messaging & security values

#### Q29（多選題）
- **Question:** Which are the top 3 high-risk configuration items?
- **Options:**
    - A. Exposure of unnecessary high-risk ports
    - B. Certificate overdue for replacement
    - C. Default passwords
    - D. Insecure protocols/algorithms
- **正確答案:** ACD
- **答案解析:** NOT B (certificate overdue for replacement).
- **知識點:** Security configuration (五個端)

---

## Fourth Attempt — 78 / 100

> Score recorded, but the wrong-question list for this attempt did not save into this file (it was truncated). Re-paste the 4th-attempt wrong questions (here in chat is safest) and I'll format them into this section and fold any new points into [[Wrong-Answer Bursts (retake fuel)]].
