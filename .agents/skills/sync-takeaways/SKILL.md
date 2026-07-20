---
name: sync-takeaways
description: Use when Chukwan asks what from a workday is worth syncing, wants the Daily Operations takeaway section filled, or wants evidence-backed lessons routed to Skills, Constants, source notes, Seed Log, contacts, Mistakes Log, or the next SCQA.
---

# Sync Takeaways

## Core principle

A takeaway is a reusable claim with a concrete future retrieval situation—not a summary of the day. Empty is better than padded. **User-facing output defaults to Traditional Chinese** while preserving wikilinks and English industry terms.

## 1. Reuse evidence

Target the named Daily Operations note, otherwise today. If `fill-daily-log` already produced an evidence register, consume it directly using `../fill-daily-log/EVIDENCE-REGISTER.md`: history scans = 0 and do not reopen linked notes wholesale.

Without a register, start from “What actually happened today”, the challenge/win sections, and the user's message. Open a linked source only when a candidate's claim, status, or evidence cannot otherwise be verified. If the day is empty, offer `fill-daily-log` or return an empty result; never reconstruct from imagination.

## 2. Gate each candidate

Write: `claim in your own words · when to reuse it · [[existing source]]`.

Kill a candidate when the reuse situation is missing, the source does not support it, or it merely says what happened. Decided/observed facts may ship. A proposal remains `待拍板` and is phrased as an open question, never a proven pattern. Do not add tools, numbers, people, or causality absent from evidence.

Select a maximum three survivors. Rank explicit decisions, repeated/expensive lessons, and near-term reuse highest. Zero is valid.

## 3. Route—do not create targets

| Kind | Route |
|---|---|
| Repeatable procedure/playbook | `→ candidate Skill (Knowledge/Skills/)` |
| Durable decision principle | `→ candidate Constant (Knowledge/Constants/)` |
| Domain fact | `→ keep in [[source]]` |
| New idea or proposal | `→ [[Seed Log]]` (`待拍板` when proposed) |
| Person/organisation fact | `→ update [[contact card]]` |
| Mistake + lesson | `→ [[Mistakes Log]]` |
| Manager-alignment material | `→ SCQA candidate` (plain route) |

Do not emit a routing tag unless Tagging & Metadata Rules shows a live consumer. In particular, SCQA stays a plain candidate until its query exists.

## 4. Write safely

Edit only “What is your take away from today's work (What to sync?)”. Each bullet must contain claim + reuse situation + source + route. Preserve the user's bilingual voice. Do not create or update route targets in this run.

Report `N candidates → M shipped`, killed reasons, and missing targets in one line.
