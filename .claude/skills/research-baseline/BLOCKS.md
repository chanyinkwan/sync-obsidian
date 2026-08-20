# Research Blocks

Routing skeleton for `research-baseline`. Prompt templates and QA descriptions are a
second-pass placeholder — see `<!-- OPUS -->` markers below.

| Block | Baseline tier | Deep tier | Prompt keys (deep) | "Good" looks like |
|---|---|---|---|---|
| A Company | Claude-native | DR, company-scope (deep overwrites baseline note, keeping baseline answers as its top section) | <!-- OPUS: fill per build spec §3.6 --> | <!-- OPUS: fill per build spec §3.6 --> |
| B Market | Claude-native (category summary) | DR, category-scope | <!-- OPUS: fill per build spec §3.6 --> | <!-- OPUS: fill per build spec §3.6 --> |
| C Competitors | Claude-native | DR, company-scope | <!-- OPUS: fill per build spec §3.6 --> | <!-- OPUS: fill per build spec §3.6 --> |
| D Buyer | (second round only) | DR, category-scope | <!-- OPUS: fill per build spec §3.6 --> | <!-- OPUS: fill per build spec §3.6 --> |
| E Disruption | (second round only) | DR, category-scope | <!-- OPUS: fill per build spec §3.6 --> | <!-- OPUS: fill per build spec §3.6 --> |
| F Role | Claude-native | folded into A-deep's prompt, no separate DR run | <!-- OPUS: fill per build spec §3.6 --> | <!-- OPUS: fill per build spec §3.6 --> |
| G Fit | Claude-native, always | never DR | — | <!-- OPUS: fill per build spec §3.6 --> |
