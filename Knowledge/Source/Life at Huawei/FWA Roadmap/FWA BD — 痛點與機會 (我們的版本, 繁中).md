---
type: working-doc
status: draft
project: "[[FWA Business Development]]"
task: "[[Account Gap and Opportunity Analysis]]"
tags:
  - fwa
---
# FWA BD — H3G 痛點與 FWA 機會(我們的版本｜繁中工作稿)

> 用途:用一條一致的故事線,把我們 6 篇研究 + §1.3 三年數據,綜合成「客戶痛點 + FWA 機會」,供回填 FWA BD(§1.4 + 機會段)與回覆 Ziyi。
> 範圍:H3G = 3 Group Europe 六國;口徑為 total-telco(非 FWA 專屬,公開源限制)。圖表英文、敘述繁中。
> 來源:CKH Fiscal 2023/2024/2025 + 研究六篇([[H3G 戰略目標分析]]、[[H3G 核心市場競爭分析]]、[[H3G 歐洲市場分析 (客戶)]]、[[H3G 財務與投資分析]]、[[H3G寬頻替代分析]]、[[H3G技術與供應鏈評估]])。

## 一句故事線(executive)

H3G 正處於**「資產輕量化、分拆套現」**轉型:已賣 UK(VodafoneThree)、出售 Ireland(談 Liberty Global)、剩餘市場(義/奧/瑞/丹/港)準備倫敦上市。在**保留市場**裡,它是一個**薄利、有機成長停滯、被價格戰與光纖(FTTH)替代夾擊的挑戰者**。對 Huawei,真正的 FWA 機會集中在「**保留且我們進得去**」的市場(義大利為主、丹麥/瑞典次之),而且切入語氣必須是**降本 / TCO / 省能**,不是大 capex——因為客戶要的是上市前把 margin 做漂亮。

---

## A. 大前提:keep / exit 改寫了整張機會地圖

別把 H3G 當「到處成長的客戶」。先分清它在賣什麼、留什麼,Huawei 的機會只存在於「保留 + 進得去」的交集。

| 市場 | H3G 狀態 | Huawei 現況 | FWA 機會評級 |
|---|---|---|---|
| UK | **已出售**(VodafoneThree→Vodafone, 2026) | 無(網路 Ericsson/Nokia) | 無 |
| Ireland | **出售中**(談 Liberty Global) | RFQ 進行中 | **存疑——勿重押**(客戶要易主) |
| Italy(Wind Tre) | 保留(或與 Iliad 合併談判) | 已供 FWA CPE | **高(主攻)** |
| Denmark | 保留 | 已供 | 中(深耕) |
| Sweden | 保留 | 未進 | 中(待突破) |
| Austria(Drei) | 保留 | 未進、ZTE 獨佔 | 低(門檻高) |
| (Hong Kong) | 保留 | 已供 | 非歐洲範圍 |

---

## B. 痛點(Pain Points)

### B1. 商業/財務:薄利、ARPU 停滯、價格戰

- 薄利是底色:電信是長和最不賺的板塊(營收 21%/利潤 8%);3 Group Europe underlying EBITDA margin 由約 31% 緩降到約 28%,集團淨利率僅約 1.4%。**營收在長、但利潤率在被擠。**
- ARPU 停滯且**各國分化極大**:集團加權混合 €13.08 看似穩,實則被大市場拉平——愛爾蘭僅約 €7、奧地利約 €17。混合值對任一單一市場都沒代表性。
- 價格戰:義大利 Iliad + Fastweb-Vodafone 長期壓價;奧地利 MVNO 割喉。

![[fig4_revenue_margin.png]]

![[fig1_arpu_spread.png]]

### B2. 成長:歐洲有機停滯,+40% 是併購假象

- 帳面 +40% 用戶成長中,約 **94% 來自 UK VodafoneThree 併購**;排除後歐洲有機僅約 **+0.9M(+3%)**,且三年基本持平(40.2M→40.7M→41.6M 有機)。
- 拆到市場:**Ireland(+9%)、Denmark(+8%)、Sweden(+5%)在長,Italy 持平(+1%),Austria 反而在縮(−2%)**。保留市場裡奧地利最弱。

![[fig2_organic_vs_merger.png]]

![[fig3_netadds_by_market.png]]

### B3. 替代威脅:FTTH 正在壓縮 FWA 的生存空間

- 歐洲 FTTH 覆蓋已約 79%,但「高覆蓋、低採用」——義大利覆蓋高、採用僅 2~4 成,留下大量光纖閒置 → 既是 FWA 的空檔,也是隨時被光纖收割的威脅。
- H3G **缺固網資產**,FWA 是它補固網的手段;一旦光纖採用補上,FWA 的低價攪局空間會被 FMC(固網行動融合)綁約侵蝕。FWA 不能正面打光纖,只能卡「光纖未到/overbuild 缺口/偏遠/備援」場景。

### B4. 結構/策略:資產輕量化 + capex 紀律 + 上市前要好看

- H3G 在分拆套現、準備倫敦上市 → 短期決策偏向**省成本、改善 margin、減 capex**,不愛大額網路投資。
- 這直接決定 Huawei 的切入語氣:**用 TCO/省能/省 opex 說服,不是用「更高階、更貴」。**

---

## C. FWA 機會(Opportunity)— 對到 Huawei 的牌

**市場優先序(保留 ∩ 進得去):義大利(主攻,已合作)> 丹麥/瑞典(深耕)> 奧地利(ZTE 卡,難)。Ireland/UK 排除。**

| 客戶痛點        | Huawei 對應的牌                                                                 | 切入語氣          |
| ----------- | --------------------------------------------------------------------------- | ------------- |
| 薄利 / 高 opex | TCO/省能 CPE、8 週彈性交付、低 FRR、本地服務                                               | **降本**(不是堆功能) |
| ARPU 停滯     | 高階 8×8 MIMO CPE 撐高 ARPU 方案;APP Turbo QoS 加值包(歐洲無 5G core,QoS 僅 device 端,有限) | 差異化加值         |
| FTTH 替代     | FWA 定位於光纖未到/缺口/偏遠/備援場景(斷電備援 FWA)                                            | 補位,不正面對打      |
| 成長停滯        | 聚焦在長市場(IE 雖在長但在賣→排除;轉 DK/SE)+ 義大利深耕                                         | 跟著有機成長走       |

**捕捉障礙(務必並陳,別只報喜):** 地緣政治合規、客戶偏好單一 MoC 供應商、ZTE 為 Tier-1(奧地利獨佔)、H3G capex 紀律緊。

---

## D. 與現有 FWA BD(22-6-2026)不一致、需修正的點

1. §1.1「FWA 市佔義 36% / 奧 32%」——疑值(AGCOM:WindTre FWA 僅約 7.6 萬線),應改用 regulator 重算或標明非 FWA 口徑。
2. §1.4「customer base dropped in Italy and Austria」——**Italy 其實 +1%(升)**,只有 Austria 真降。
3. §7「H3G is key player & business very mature」——與「多數 OpCo 挑戰者」「分拆套現」矛盾,過度樂觀。
4. §3「RFQ in process: Ireland」——Ireland 在出售,RFQ 風險高,建議重新評估。
5. 整體故事線缺「資產輕量化/keep-exit」與「FTTH 替代威脅」兩條主線,建議補入。

---

## 待補(下一步)
- **同業對標(Ziyi 新回饋):** user growth / churn / ARPU 對比各國主要對手(A1、TIM、Iliad、Telia 等)——尚未做。
- 各國 regulator 的 FWA 市佔/線數(AGCOM、RTR…)——補實 §1.1 / Market Share。
- 六國分列 churn / EBITDA——目前只有集團層級已驗證。
