---
type: saa-study-triage
status: approved
generated: 2026-07-26
approved: 2026-07-26
exam-date: 2026-08-23
days-remaining: 28
source-of-truth: 01 Dashboard/Syllabus.md (frozen, 55 IDs)
net-deep-hours: 32
buckets: { core: 17, tail: 28, sacrifice: 10 }
note: The syllabus contains 55 topic IDs, not 56. sec(16)+res(12)+perf(14)+cost(13)=55. Untouched = 50 (not 51). Figures below use 55/50.
---

# AWS SAA-C03 Study Triage

> **APPROVED 2026-07-26.** The **Sacrifice** list below is a ratified decision to *not* deeply learn certain topics before 08-23. Two borderline calls were adjudicated on approval: cost-02 promoted Tail → Core, and res-04 confirmed Tail. The topic IDs and titles are copied verbatim from the frozen syllabus.

## 0. The hard truth this plan is built on

- 28 days to exam. ~**32 net hours** of actual learning after mocks + taper are carved out.
- **50 untouched topics** (5 partially touched, 0 proven). Full "Proven" mastery on all 55 is **impossible** in 32 hours (~38 min/topic average; a real Socratic Proven pass costs far more).
- So we spend the deep hours on a small **Core** that both passes the exam and *is* the SA job, hold the **Tail** at recognise-and-discriminate, and **Sacrifice** the low-yield tail until after the exam.

---

## 1. Closed-form time budget

### 1a. Gross → net

| Line | Calc | Hours |
| --- | --- | ---: |
| Weekday capacity | 20 days × (60 min session + 30 min priming) | +30.0 |
| Weekend capacity | 8 days × ~2.5 hr usable block | +20.0 |
| **Gross usable** | | **50.0** |
| 4 full mocks | 4 × (2.2 hr sit + 1.5 hr autopsy = 3.7) | −14.8 |
| Final taper (2–3 days) | light review, no new topics | −3.0 |
| **Net deep-learning hours** | | **≈ 32.0** |

### 1b. Hours allocated per domain (weight × gap)

Secure is partially pre-covered (sec-01..05 cluster), so its *gap* is smaller than its raw 30% weight implies — effective gap ≈ 0.75. The other three domains are 100% untouched (gap = 1.0).

| Domain | Exam weight | Eff. gap | Priority (w×gap) | Share | **Deep hrs** |
| --- | ---: | ---: | ---: | ---: | ---: |
| Secure | 30% | 0.75 | 22.5 | 24% | **7.8** |
| Resilient | 26% | 1.00 | 26.0 | 28% | **9.0** |
| High-Performing | 24% | 1.00 | 24.0 | 26% | **8.3** |
| Cost | 20% | 1.00 | 20.0 | 22% | **6.9** |
| **Total** | 100% | | 92.5 | 100% | **32.0** |

### 1c. Does the Core fit the budget? (the constraint)

| Bucket | Topics | Realistic hr each | Subtotal |
| --- | ---: | ---: | ---: |
| Core → Proven | 17 | ~1.35 (clustered + partial pre-cover) | 23.0 |
| Tail → Functional | 28 | ~0.32 (prime + light drill) | 8.9 |
| Sacrifice → Primed/skip | 10 | ~0.05 (name-recognition only) | 0.5 |
| **Total** | **55** | | **≈ 32.4** |

Core-to-Proven cost is amortised because Core topics cluster (IAM sec-01/03/04; VPC sec-06/07; ASG res-02+perf-04; data res-03+perf-06/07) and sec-01..04 are already partially covered. 16 was the original ceiling; on approval, **cost-02 was ratified Tail → Core (now 17)** — see §4. sec-02 remains Tail; a further promotion (18-topic Core) would overrun to ~35.5 hr and was not adopted.

**Budget note:** Promoting cost-02 to Core pushes the closed-form total from ≈32.2 to ≈32.4–32.6 hr — a ~0.6–0.8 hr overrun. This is absorbed by weekend flex capacity (§1a), not by cutting Tail coverage.

---

## 2. Per-topic triage (all 55 IDs)

### Design Secure Architectures (30%)

| id | title | bucket | rationale (≤12 words) |
| --- | --- | --- | --- |
| sec-01 | IAM authorization model (users/groups/roles/policies) | **Core** | Foundation of everything; partially covered, cheap to finish. |
| sec-02 | Least-privilege + MFA for root/IAM | Tail | Best-practice recall; recognition-level, not deep drill. |
| sec-03 | Cross-account access + identity federation | **Core** | Very high exam + SA recurrence; role assumption everywhere. |
| sec-04 | Resource policy vs identity policy | **Core** | Load-bearing for policy-evaluation questions. |
| sec-05 | Multi-account strategy / centralized governance | Tail | Organizations/SCP; recognise pattern, enterprise-governance flavour. |
| sec-06 | Segment VPC into public/private subnets | **Core** | Networking bedrock; underlies half the exam. |
| sec-07 | SG / route tables / NACLs | **Core** | Extremely high recurrence; classic distractor territory. |
| sec-08 | Secure external connections (VPN/DX/NAT) | Tail | Hybrid connectivity; recognise IGW/NAT/VPN roles. |
| sec-09 | Defend vs DDoS / SQLi (Shield/WAF) | Tail | Recognise Shield vs WAF; discrimination question. |
| sec-10 | Map compliance/governance to controls | Sacrifice | Niche recall (Artifact/Config); low yield pre-exam. |
| sec-11 | Key management to encrypt at rest (KMS) | **Core** | KMS appears constantly; genuinely load-bearing. |
| sec-12 | Encrypt in transit + cert renewal (ACM/TLS) | Tail | Recognise ACM auto-renew; light discrimination. |
| sec-13 | Key policies + rotation schedules | Tail | Extends sec-11; recognition-level detail. |
| sec-14 | Backup + replication for retention | Tail | Overlaps res-10/cost-08; recognise cross-region/backup patterns. |
| sec-15 | Secrets Manager vs Parameter Store | Tail | Pure discrimination question; prime the split. |
| sec-16 | VPC endpoints (gateway vs interface) | Tail | Common but discrete; recognise endpoint types. |

### Design Resilient Architectures (26%)

| id | title | bucket | rationale (≤12 words) |
| --- | --- | --- | --- |
| res-01 | Event-driven vs microservice vs multi-tier | Tail | Conceptual discrimination; recognise the fit. |
| res-02 | Scaling strategy per component | **Core** | Auto Scaling is a central exam + SA pillar. |
| res-03 | Queuing/messaging to decouple (SQS/SNS) | **Core** | Highest-recurrence decoupling pattern; load-bearing everywhere. |
| res-04 | Containerize vs serverless | Tail | ECS/Fargate/Lambda discrimination; common scenario discriminator. |
| res-05 | Match compute/storage/net/db to resilience | Tail | Broad synthesis; emerges from Core topics. |
| res-06 | Automate provisioning (IaC/CloudFormation) | Tail | Recognise CFN/IaC value; light coverage. |
| res-07 | Multi-AZ / multi-Region HA | **Core** | Central exam theme; defines resilient design. |
| res-08 | Metrics that prove HA | Sacrifice | Soft, low-yield; picked up post-exam. |
| res-09 | Eliminate single points of failure | Tail | Conceptual; overlaps res-07 Core coverage. |
| res-10 | Data durability + continuous availability | Tail | Emerges from S3/RDS Core; recognition-level. |
| res-11 | DR strategy (pilot light/warm standby, RTO/RPO) | **Core** | Classic, high-yield exam topic; SA-critical. |
| res-12 | Improve legacy reliability without rebuild | Sacrifice | Niche scenario; low exam frequency. |

### Design High-Performing Architectures (24%)

| id | title | bucket | rationale (≤12 words) |
| --- | --- | --- | --- |
| perf-01 | Storage config for performance (EBS/IOPS) | **Core** | EBS types/IOPS appear frequently; discrete and learnable. |
| perf-02 | Storage that scales (S3/EFS) | Tail | Recognise S3/EFS scaling; discrimination-level. |
| perf-03 | Decouple components to scale independently | Tail | Overlaps res-03 Core; recognition. |
| perf-04 | Auto scaling metrics/triggers | **Core** | Pairs with res-02; core ELB+ASG mechanics. |
| perf-05 | Right-size compute / instance families | Tail | Recognise family fit; light drill. |
| perf-06 | Read replicas for read-heavy patterns | **Core** | RDS read replicas: very high recurrence. |
| perf-07 | Relational vs non-relational vs in-memory DB | **Core** | RDS/DynamoDB/ElastiCache discrimination is exam-central. |
| perf-08 | Caching layer (ElastiCache/CloudFront) | Tail | Recognise cache placement; overlaps perf-11. |
| perf-09 | Network topology (global/hybrid/multi-tier) | Tail | Recognise topology patterns; recognition-level. |
| perf-10 | Network config/routing that scales | Sacrifice | Vague, overlaps others; low incremental yield. |
| perf-11 | Placement to minimize latency (CloudFront/GA) | Tail | Recognise edge/Global Accelerator; discrimination. |
| perf-12 | Load balancing strategy (ALB/NLB) | **Core** | ELB type choice: extremely high recurrence. |
| perf-13 | Data lake / streaming pipeline (Kinesis) | Sacrifice | Niche for SAA; low yield, deep tail. |
| perf-14 | Ingestion/transformation pipeline (Glue/Kinesis) | Sacrifice | Niche analytics; post-exam pickup. |

### Design Cost-Optimized Architectures (20%)

| id | title | bucket | rationale (≤12 words) |
| --- | --- | --- | --- |
| cost-01 | Batch vs individual upload to cut cost | Sacrifice | Niche S3 request-cost detail; low yield. |
| cost-02 | Right-size storage + cheapest class | **Core** | Shores up Cost's thin floor; S3 storage-class selection heavily tested. |
| cost-03 | Lowest-cost data ingress (Snowball/DataSync) | Tail | Recognise transfer options; discrimination. |
| cost-04 | Lifecycle policies to cheaper tiers | Tail | Recognise lifecycle rules; overlaps cost-02. |
| cost-05 | Load balancer type by cost | Sacrifice | Low-yield; overlaps perf-12 mechanics. |
| cost-06 | Scaling method to minimize cost | Tail | Overlaps cost-13/ASG; recognition. |
| cost-07 | Cheapest compute service + size | Tail | Recognise compute cost tiers; light drill. |
| cost-08 | Backup/retention avoiding cost | Tail | Overlaps sec-14; recognition-level. |
| cost-09 | DB engine by cost/licensing | Tail | Recognise Aurora/licensing angle; discrimination. |
| cost-10 | Routing/peering to cut transfer cost | Sacrifice | Niche data-transfer optimization; low yield. |
| cost-11 | CDN/edge worth the cost | Tail | Overlaps perf-11; recognise CDN trade-off. |
| cost-12 | Bandwidth/throttling for network cost | Sacrifice | Niche; low exam frequency. |
| cost-13 | Compute purchasing (On-Demand/Spot/Reserved/SP) | **Core** | Single highest-yield cost lever on the exam. |

---

## 3. Bucket counts + readiness-floor check

| Domain | Core | Tail | Sacrifice | Total | Covered (Core+Tail) | Floor 70–75%? |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Secure | 6 | 9 | 1 | 16 | 15 / 16 (94%) | ✓ comfortable |
| Resilient | 4 | 6 | 2 | 12 | 10 / 12 (83%) | ✓ clears |
| High-Performing | 5 | 6 | 3 | 14 | 11 / 14 (79%) | ✓ clears |
| Cost | 2 | 7 | 4 | 13 | 9 / 13 (69%) | ⚠ tightest, but strengthened — see below |
| **Total** | **17** | **28** | **10** | **55** | 45 / 55 (82%) | |

**Floor note:** Cost was the thinnest domain (1 Core). On approval, cost-02 was ratified Tail → Core, bringing it to 2 Core and comfortably shoring up its floor — S3 storage-class selection is heavily tested and this closes the gap. cost-13 (purchasing options) remains the single biggest cost lever.

---

## 4. Adjudicated calls (ratified 2026-07-26)

These were the topics where Core/Tail or Tail/Sacrifice was genuinely close. Final calls:

1. **cost-02 (right-size storage + cheapest class)** — **PROMOTED Tail → Core.** Shores up Cost's thin floor; S3 storage-class selection is heavily tested. Costs ~0.6–0.8 hr, absorbed by weekend flex (§1c).
2. **sec-02 (least-privilege + MFA)** — **Confirmed Tail.** Foundational to security thinking but recall-level on the exam.
3. **sec-14 (backup + replication for retention)** — **Confirmed Tail.** Cross-domain (touches res-10, cost-08, DR); res-11 (DR) carries the Core weight.
4. **res-04 (containerize vs serverless)** — **Confirmed Tail.** ECS/Fargate/Lambda discrimination is a common scenario discriminator; kept at recognition-level deliberately.
5. **perf-13 / perf-14 (data lake / streaming pipelines)** — **Confirmed Sacrifice.** Real SA skills long-term, but low SAA-C03 yield; sacrificed pre-exam, resumed after.

The 10-topic Sacrifice list is **ratified as-is**.

---

## 5. Data discrepancy flagged

The brief states **56** topics / **51** untouched. The frozen syllabus actually lists **55** IDs (sec 16 + res 12 + perf 14 + cost 13 = 55), so untouched = **50**. This plan uses the syllabus (the source of truth). If a 56th topic was intended, the syllabus needs an approved amendment — not this file.
