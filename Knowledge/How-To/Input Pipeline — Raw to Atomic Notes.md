---
type: reference
status: active
date: 2026-07-03
hub: "[[Life @Huawei System]]"
tags:
  - reference
  - system
related:
  - "[[Tagging & Metadata Rules]]"
---
# 輸入處理管線(Raw → Synced → Atomic)

> 目的:社群影片、文章、Podcast 這類**非同步輸入**,從「刷到」走到「可複用原子筆記」只有三站。每站用一個生活場景說明我該做什麼、做到什麼程度就停手。
> 核心紀律:**捕捉便宜,整理貴,原子化最貴——閘門一站比一站嚴。**

---

## 站 0 · 捕捉 —「我剛刷到一個好東西」

**30 秒內結束,只做兩件事:**

1. 把內容(逐字稿/連結/截圖文字)貼進 `Inbox/` 新筆記,命名 `YYYY-MM-DD SRC — 一句話標題`。
2. 補三行 frontmatter,然後**立刻關掉,回去做原本的事**:

```yaml
type: reference
status: raw
source_platform: YouTube   # 或小紅書 / LinkedIn / 文章
source_link:               # 有就貼
captured: 2026-07-03
```

❌ 不整理、不分類、不思考它有沒有用——那是站 1 的事。捕捉當下唯一的任務是清空腦子。

## 站 1 · 整理 —「每週回顧時,我打開收件匣」

**批次處理,一篇上限 10 分鐘。** 每篇來源筆記固定三段:

> **① 論點提煉** — 值得留的 3–5 條,用自己的話寫。
> **② 與我何干 / 何時取用**(必填)— 2–3 行:這對我的哪條賽道有用?我在什麼場景會回來翻它?
> **③ 原文** — 摺疊收好,不再看。

**②就是閘門:寫不出來 = 這篇與我無關,整篇刪除,不准進下一步。**
寫得出來的,搬進 `Knowledge/Source/<賽道>/`,`status` 改 `synced`。

## 站 2 · 原子化 —「②裡提到的場景真的發生之前」

只有通過②的論點才值得拆原子。按原子性質分家(2026-07-10 起):

- **程序型**(可執行的 playbook / SKILL.md)→ `Knowledge/Skills/`,`Skill - …` 命名 + `#skill`
- **原則型**(跨情境耐用的決策常數)→ `Knowledge/Constants/`,`常數 - …` 命名 + `#constant`

每顆原子三要素:

1. **論點本身**(一則筆記只講一個可複用論點)
2. **觸發場景**(什麼時候取用)
3. **`[[出處來源筆記]]`**(雙向連結;來源筆記 `status` 改 `atomized`)

## 節流紀律 —「收件匣不是倉庫」

- **兩週法則:**`Inbox/` 裡 `captured` 超過 14 天沒動的一律刪除。當初沒動它,代表閘門其實已經給出答案。
- 一場只捕捉、從不整理 = 系統在說「站 1 沒綁進週回顧」,修時段,不是修筆記。

## 資料夾規則 —「這篇該放哪?」

- **資料夾 = 活躍賽道/專案**(如 `Job Hunt`、`FWA Roadmap`、`Sample Management`),不是抽象主題。判別力測試:資料夾名字若無法幫我排除任何東西(例如 "Career Development" ≈ 整個 vault 的同義詞),它就是垃圾抽屜,不准開。
- 想要跨賽道的橫向視角 → 用主題標籤 + MOC/Dataview 聚合,不開實體資料夾。
- 賽道資料夾內滿 **5 檔**聚類才分拆子資料夾,不足就靠 wikilink(呼應 [[Tagging & Metadata Rules]] 規則 3 的「滿 3 才開標籤」)。

---

## 機器合約(待補)

- [ ] 在 Home 儀表板 / [[Life @Huawei System]] 建「📥 待處理收件匣」Dataview:讀 `type = reference AND status = raw`,顯示 `captured` 天數、超期排最上。建好後到 [[Tagging & Metadata Rules]] 註冊表補登 `status: raw` 這條合約。
