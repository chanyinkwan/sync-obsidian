---
type: study-aid
status: active
hub: "[[Life @Huawei System]]"
tags: [learning, cyber-security]
---
# 錯題爆破 — 重考燃料

> Exam-First 的 Step 4。每條 = **正確答案 + 一句為什麼**。讀完一個主題就去重考。
> 三次成績:**69 → 59 → 69**。弱點集中在三塊:**Vulnerability Management、GDPR / Privacy、Security Configuration(新)**。重考前主攻這三塊。
> (knowledge terms 保留英文,方便你在考卷上認出來。)

---

## A. Vulnerability Management(最弱)
- 5 大原則 of Vulnerability Management -> 1. Harm and risk reduction, 2. Vulnerability reduction and mitigation, 3. Proactive management, 4. Continuous Improvement, 5. Openness and collaboration

- **5 大原則 (five principles):** ① Harm and risk reduction ② Vulnerability reduction and mitigation ③ Proactive management ④ Continuous improvement ⑤ Openness and collaboration。**陷阱答案 = Root cause analysis(不是原則之一)。**
- **生命週期順序(背):** awareness → verification → remediation → **security bulletin release** → remediation deployment。(bulletin release 在 deployment 之前。)
- **Disclosure 理念:** 沒有 "right/wrong",只有 "good/bad"、"better/worse" → **正確 (True)**。核心 = 搶在 threat actors 之前 mitigate risk。
- **員工不可自行揭露漏洞**(連 open source 也是),一律走 **Huawei Vulnerability Management Center**(對監管機構的唯一窗口)。「員工可直接揭露」= 錯誤選項。
- **E2E vulnerability management requirements 與每個人相關。** 「我沒處理過漏洞、與我無關」= 錯誤敘述。(Document No. 001 於 2021 發布;納入 7 流程:IPD、MCR、LTC、CS、SD、ITR、供應商 PROC。)
- **NIS 2 / ENISA 自願漏洞資料庫** → 對應活動 = **Vulnerability disclosure**。
- **漏洞造成的危害**(identity / data theft、eavesdropping、監管違規、被武器化)→ 全部正確。

## B. GDPR / Privacy
- **72 小時** — controller 須在發現 breach 後 72h 內通報主管機關(GDPR Art. 33)。記死這個數字。
- **Accuracy** = 要求資料保持 up-to-date 的原則。
- **"Consent"** = GDPR 對「自由給出、具體、知情、明確」同意的定義詞。
- **預勾選框 (pre-ticked box) = default consent ≠ explicit consent。** 這就是「非明確同意」的答案。
- **收集階段最常見的 privacy risk = Non-compliant access。**
- **遺失 USB 但已加密 + 低洩漏機率 → 不需通知客戶 → 正確 (True)。**(通知是 risk-based。)
- **App 權限濫用** = excessive + irrelevant + frequent requests + 不給權限就拒絕服務 → 全部。
- **不算 personal data breach 的情況 = 公司「收購計畫 (acquisition plan)」外洩。** 那是商業機密,不是 personal data。

## C. Children's Data
- **一律需 guardian's explicit consent。** 錯誤 (false) 敘述 = 「未經監護人同意就收集兒童資料」。

## D. Security Configuration(新弱點,五個端)
- **Huawei software 優先實作 = Configuration security by default(預設安全配置)。**
- **Top 3 high-risk config items = ACD:** unnecessary high-risk ports、default passwords、insecure protocols/algorithms。**不是** certificate overdue (B)。

## E. Authorization / Employee Responsibility
- **未經授權或超出授權存取客戶網路 = 禁止,公司同樣要負責。** 過期權限要定期清理並提醒客戶取消。錯誤敘述 = 「客戶自負責、Huawei 無需主動提醒清理」。

## F. Cyber Resilience / Framework / Values
- 面向未來的規劃以提升 **Cyber Resilience** 為核心(假設環境不安全 → dynamic response)。
- **監管機構的疑慮** = standards control + intelligence cooperation + penetration/manipulation/hijacking + consistency/tampering + backdoors/malicious code → **全部 (ABCDE)**。
- **Huawei 的 cyber security & privacy values = 全部:** Openness & transparency、Integrity & trustworthiness、Capability & responsibility。

## G. Certificate Management
- **Certificate management transformation 目標 = 四個全選:** secure comms on live networks、no new certificate risks、risk mitigation of existing certificates、secure & trustworthy PKI。

## H. E2E Integrity
- **E2E integrity = 正確 (True):** 產品在整個 lifecycle 保持 intact、undamaged、uncontaminated、non-counterfeit。

---
### 下一步
1. 讀 **A、B、D** 三段(你的弱點),各 2 分鐘。
2. **重考** → 把成績/次數填進 [[Learning Method Lab]]。
3. Cyber 是 *mine* 考試 → 產出一則 [[Atomic Note Template]](建議論點:「Resilie