---
status: doing
priority: high
due: 2026-08-23
scheduled: 2026-07-17
dateCreated: 2026-07-17T13:37:22.645+01:00
dateModified: 2026-07-17T14:20:32.871+01:00
tags:
  - task
---

[[chain of thought - SAA C03 Exam]]

Strategy:
### Stage 1
Define -> understanding a concept
The goal in this exam prep is to able to master the concept that would highly and frequently impacting your decision; for the other concepts aim to master to a certain level based on their impact size and frequency

here is the explanation of the different level

|等級|狀態|你能做甚麼|
|---|---|---|
|0|完全陌生|第一次看見|
|1|認得名稱|知道它大概是甚麼|
|2|可以解釋|不看資料，用自己的話說明|
|3|可以比較|知道它與相似服務的分別|
|4|可以決策|在情境題中選擇它，並排除其他選項|

> How do I determine which of those need to reach which level (through past questions?)

### Stage 2
Identify the 4 categories with Notebooklm:
1. Known knowns
2. Known unknowns
3. Unknown knowns
4. Unknown unknowns

### Stage 3

3 use cases with notebooklm
1. Build a course map of the certificate
Example Prompt:
"先建立高層次地圖，不要深入列出所有服務和設定細節。 如果來源之間存在層級差異，優先使用官方 exam guide 和官方文件 來界定考試範圍。"
-> the goal of this use case is to align the knowledge scope with NotebookLM
2. Identify a Concept
Example Prompt:
"只根據已選來源，解釋 NAT Gateway、Internet Gateway 和 private subnet 的關係。
先建立 prerequisite chain，再比較它們。不要引入其他目前不必要的 networking services。"
-> the goal of this prompt is to focus on the targeted concept
3. Analysis a wrong question
Example Prompt:
"請分析這道題，但不要立即告訴我答案。
先指出：
4. 題目正在測試哪個架構決策
5. 哪些概念真正決定答案
6. 哪些只是 distractors
7. 我需要先理解的最短 prerequisite chain
8. 我應該從哪一個概念開始"