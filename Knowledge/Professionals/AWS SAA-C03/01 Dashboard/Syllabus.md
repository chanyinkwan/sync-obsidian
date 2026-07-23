---
type: saa-syllabus
frozen: true
generated: 2026-07-22
amended: 2026-07-23
source: AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf via NotebookLM, notebook aws-saa-c03-architectural-prob
---

# AWS SAA-C03 Syllabus

Frozen denominator for the readiness dashboard. Adding notes can never add topics here; this file only changes by an explicit, user-approved edit.

Amendment 2026-07-23 (user approved): added sec-15, sec-16, cost-13 after a domain comprehensiveness review found three exam-guide topics missing (secrets management, VPC endpoints, compute purchasing options).

## Design Secure Architectures (30%)

| id | topic |
| --- | --- |
| sec-01 | Design an IAM authorization model using users, groups, roles, and policies |
| sec-02 | Apply least-privilege and MFA best practices to root and IAM users |
| sec-03 | Design cross-account access and identity federation with role-based access control |
| sec-04 | Choose when to use a resource policy instead of an identity policy |
| sec-05 | Design a multi-account security strategy with centralized governance |
| sec-06 | Segment a VPC into public and private subnets for a given workload |
| sec-07 | Design VPC security controls using security groups, route tables, and NACLs |
| sec-08 | Secure external network connections into and out of the cloud environment |
| sec-09 | Defend an application against external threats like DDoS and SQL injection |
| sec-10 | Map compliance and governance requirements to the right AWS controls |
| sec-11 | Choose a key management approach to encrypt data at rest |
| sec-12 | Encrypt data in transit and manage certificate renewal |
| sec-13 | Set access policies and rotation schedules for encryption keys |
| sec-14 | Design backup and replication strategies that meet retention requirements |
| sec-15 | Protect application secrets and credentials with rotation (Secrets Manager vs Parameter Store) |
| sec-16 | Use VPC endpoints for private access to AWS services without traversing the internet |

## Design Resilient Architectures (26%)

| id | topic |
| --- | --- |
| res-01 | Choose between event-driven, microservice, and multi-tier architectures for a workload |
| res-02 | Pick a scaling strategy for each component in an architecture |
| res-03 | Use queuing and messaging to loosely couple application components |
| res-04 | Decide when to containerize a workload versus go serverless |
| res-05 | Match compute, storage, network, and database choices to resilience needs |
| res-06 | Automate infrastructure provisioning to keep environments consistent |
| res-07 | Design a multi-AZ or multi-Region architecture for high availability |
| res-08 | Pick the metrics that prove a solution is actually highly available |
| res-09 | Eliminate single points of failure in an architecture design |
| res-10 | Design for data durability and continuous availability |
| res-11 | Choose a DR strategy (pilot light, warm standby, etc) to hit RTO/RPO targets |
| res-12 | Improve reliability of a legacy application without rebuilding it for the cloud |

## Design High-Performing Architectures (24%)

| id | topic |
| --- | --- |
| perf-01 | Pick a storage configuration that meets a performance requirement |
| perf-02 | Choose a storage service that scales with future growth |
| perf-03 | Decouple workload components so each scales independently |
| perf-04 | Pick the metrics and conditions that should trigger auto scaling |
| perf-05 | Right-size compute options and instance families for a workload |
| perf-06 | Use read replicas to offload a read-heavy access pattern |
| perf-07 | Choose between relational, non-relational, and in-memory database types |
| perf-08 | Add a caching layer to cut database load and latency |
| perf-09 | Design a network topology for global, hybrid, or multi-tier workloads |
| perf-10 | Design network configuration and routing that scales with demand |
| perf-11 | Place resources to minimize latency and meet performance needs |
| perf-12 | Choose the right load balancing strategy for a traffic pattern |
| perf-13 | Design a data lake or streaming pipeline for high-volume analytics |
| perf-14 | Choose ingestion and transformation options for a data pipeline |

## Design Cost-Optimized Architectures (20%)

| id | topic |
| --- | --- |
| cost-01 | Choose a batch versus individual upload strategy to cut storage cost |
| cost-02 | Right-size storage and pick the cheapest storage class for a workload |
| cost-03 | Pick the lowest-cost path to move data into cloud storage |
| cost-04 | Set lifecycle policies to move objects to cheaper storage tiers |
| cost-05 | Choose a load balancer type based on cost as well as function |
| cost-06 | Pick a scaling method that minimizes cost for an elastic workload |
| cost-07 | Choose the cheapest compute service and instance size for a workload class |
| cost-08 | Design backup and retention policies that avoid unnecessary storage cost |
| cost-09 | Choose a database engine or type based on cost, licensing, and usage |
| cost-10 | Configure routing and peering to cut data transfer cost |
| cost-11 | Decide when a CDN or edge cache is worth the cost |
| cost-12 | Choose a bandwidth or throttling strategy to control network cost |
| cost-13 | Choose a compute purchasing option (On-Demand, Spot, Reserved, Savings Plans) for a workload's usage pattern |
