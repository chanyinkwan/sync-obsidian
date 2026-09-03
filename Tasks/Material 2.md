---
status: done
priority: high
scheduled: 2026-08-28
projects:
  - "[[Materials]]"
dateCreated: 2026-08-28T16:44:12.859+01:00
dateModified: 2026-09-03T09:37:35.377+01:00
tags:
  - task
eisenhower: q1
completedDate: 2026-09-03
---

## Ask as received
> verbatim, including who said it, where, and when


"Story" = the reason why hutchison select this product in their platform

### Final Solution
**和記歐洲終端品牌合作全景——基於公開在售與價格數據**
Price listed in Windtre vs First day launch price
![[Pasted image 20260828191946.png]]
## Final Solution prompt


## Who holds what
| Who | What they hold on THIS task | Delta from usual stance |
|-----|-----------------------------|-------------------------|
**兩個 prompt 已按「官方公開數據 → 可追溯清洗 → editable PPT」倒推。** Page 1 先建立在售路標；Page 2 再沿用同一 dataset 分析 Hutchison 售價相對 OEM RRP 嘅偏離。

## Prompt 1 — Page 1：CKH 歐洲在售手機路標

```text
Act as a rigorous market-intelligence analyst, web-scraping engineer, data auditor, and executive PowerPoint designer.

Your task is to autonomously research, structure, validate, and visualise Page 1 of a CK Hutchison European smartphone portfolio briefing.

FINAL SUBMISSION ARTIFACT
Create one fully editable 16:9 PowerPoint slide (.pptx). Supporting data and evidence files are internal working files and will not be submitted, but must be retained so the slide can be revised without repeating the research.

OBJECTIVE
Show the current smartphone assortment across CK Hutchison’s European OpCos, excluding the UK, as a Brand × OEM Price Position roadmap.

The slide must let an executive identify within 10 seconds:
1. Which models are currently ranged by CKH European OpCos.
2. Which price positions each brand covers.
3. Whether Xiaomi is concentrated in lower price positions.
4. Whether Honor reaches higher price positions than other challenger brands.

Do not force these conclusions. Report only what the collected data demonstrates.

FIXED SCOPE
Markets and official operator domains:
- Austria — Drei: https://www.drei.at/
- Denmark — 3: https://www.3.dk/
- Ireland — Three: https://www.three.ie/
- Italy — WINDTRE: https://www.windtre.it/
- Sweden — Tre: https://www.tre.se/

Exclude the UK.

Brands:
Apple, Samsung, Google, Honor, Xiaomi, OPPO, vivo.

SOURCE POLICY
Use only:
- Official CKH operator product pages, offer pages, PDFs and legal terms.
- Official OEM product pages, launch announcements and price pages.
- Official ECB exchange rates when currency conversion is required.

Search engines may be used only to discover official pages. Search snippets are not evidence.

Do not use retailers, comparison sites, news reports, blogs, marketplaces, Wikipedia, cached prices or AI-generated summaries.

SCRAPING RULES
Capture a dated snapshot of every currently purchasable consumer smartphone from the five operator websites.

Include:
- Live smartphones available for purchase or contract selection.
- Brand, canonical model, series, generation and storage.
- Market and operator.
- Operator listing URL and capture timestamp.
- Official OEM launch RRP for the exact model and storage.
- OEM RRP URL and launch date.
- Official product-image URL.

Exclude:
- UK listings.
- Tablets, watches, routers, accessories and feature phones.
- Refurbished or used products.
- Enterprise-only devices unless also publicly available to consumers.
- Legacy product pages with no current purchase path.
- Search-result entries that cannot be confirmed on the live official page.

Do not silently remove missing data. Use N/A and record the reason.

NORMALISATION
Create one canonical record per:
market × operator × brand × model × storage.

Keep all storage variants in the source data.

For the slide:
- Represent each distinct model once.
- Use the OEM base-storage launch RRP where available.
- If base storage differs by market, use the most widely available common storage.
- Convert local RRP into EUR using the ECB reference rate on the capture date.
- Calculate the median EUR-equivalent OEM RRP across the CKH markets where that model is currently listed.
- Preserve original currencies and values in the source table.

Do not mix OEM RRP with operator monthly contract prices on Page 1.

REQUIRED INTERNAL FILES
Create:
1. page1_raw_listings.csv
2. page1_normalised_models.xlsx
3. page1_source_ledger.csv
4. page1_validation_report.md
5. page1_roadmap.pptx

The workbook must contain:
market, operator, brand, model_raw, model_canonical, series,
generation, storage, current_listing_status, operator_url,
oem_launch_rrp_local, currency, oem_rrp_eur,
display_rrp_eur, oem_rrp_url, launch_date,
product_image_url, capture_timestamp, evidence_status,
missing_reason, notes.

VISUAL DESIGN
Build an editable 16:9 slide.

Suggested Chinese title:
「CKH欧洲在售手机路标：品牌覆盖与官方价格定位」

Layout:
- Horizontal columns: Apple, Samsung, Google, Honor, Xiaomi, OPPO, vivo.
- Vertical axis: OEM launch RRP in EUR.
- Use a continuous price scale, not subjective low/mid/high scoring.
- Place the official product image and short model name at its EUR price.
- Add a small factual badge showing market coverage, such as “3/5”.
- Use subtle alternating brand-column backgrounds.
- Use consistent product-image sizing.
- Avoid overlapping labels through deterministic spacing or limited horizontal jitter.
- Do not use bubble scores, resource scores or unsupported strategic labels.

Add a compact evidence-based takeaway strip at the bottom containing no more than two observations.

Examples of acceptable observations:
- “Xiaomi’s highest currently ranged model is €X, compared with Honor at €Y.”
- “Honor is ranged across X price positions and Y of five CKH OpCos.”

Do not write “Xiaomi is declining” or “CKH is backing Honor” unless the visual evidence directly supports that wording.

QUALITY GATES
Before completing:
- Confirm every plotted model has a live operator listing.
- Confirm every plotted price has an official OEM source.
- Check exact model and storage matching.
- Check currency conversion and median calculations.
- Render the PowerPoint and visually inspect it for clipping, overlap and unreadable text.
- Ensure the slide remains editable; do not flatten the full slide into an image.
- Put full source URLs and methodology in speaker notes or a small appendix note.

FINAL RESPONSE
Report:
- Path to the editable PowerPoint.
- Path to the supporting workbook.
- Number of live listings collected by market.
- Number of models plotted and excluded.
- Any evidence gaps that could change the executive takeaway.
```

## Prompt 2 — Page 2：Hutchison 售價相對 OEM RRP

```text
Act as a rigorous pricing analyst, web-scraping engineer, data auditor, and executive PowerPoint designer.

Your task is to autonomously research, calculate, validate, and visualise Page 2 of a CK Hutchison European smartphone portfolio briefing.

FINAL SUBMISSION ARTIFACT
Create one fully editable 16:9 PowerPoint slide (.pptx). Retain all working data, formulas, source evidence and scraping outputs internally so the slide can be regenerated after feedback.

OBJECTIVE
Compare current consumer-facing smartphone prices across CK Hutchison’s European OpCos with the corresponding official OEM recommended retail prices.

The slide must answer:
1. Which current CKH offers are below, at or above OEM RRP?
2. Are price deviations concentrated in entry, middle or premium products?
3. How differently is the same brand or model priced across CKH OpCos?
4. Which observed results are direct and which are derived from bundles?

This page measures consumer price position only.

It must NOT infer:
- Who funded a discount.
- Hutchison resource allocation.
- OEM rebates, MDF or volume incentives.
- Operator subsidy or internal margin.
- Sales performance.

FIXED SCOPE
Markets and official operator domains:
- Austria — Drei: https://www.drei.at/
- Denmark — 3: https://www.3.dk/
- Ireland — Three: https://www.three.ie/
- Italy — WINDTRE: https://www.windtre.it/
- Sweden — Tre: https://www.tre.se/

Exclude the UK.

Brands:
Apple, Samsung, Google, Honor, Xiaomi, OPPO, vivo.

Use the validated live-product population from Page 1.

SOURCE POLICY
Use only:
- Official operator product pages, offer pages, legal terms and PDFs.
- Official OEM RRP or launch-price pages.
- Official equivalent SIM-only tariff pages when bundle separation is required.
- Official ECB exchange rates.

Do not use third-party retailers, comparison sites, news reports, cached prices or search snippets as final evidence.

PRICE EXTRACTION
For every matched market × model × storage record, capture:

OEM fields:
- Official OEM RRP.
- Currency.
- Exact model and storage.
- RRP source URL.
- Launch date.

Operator fields:
- Cash device price, if explicitly available.
- Upfront device payment.
- Monthly device instalment.
- Number of device instalments.
- Mandatory device fees.
- Financing interest or total credit cost.
- Service-plan monthly fee.
- Contract duration.
- Minimum total commitment.
- Included gift or bundle.
- Conditional trade-in.
- Offer-validity dates.
- Operator URL and capture timestamp.

PRICE CLASSIFICATION
Classify each observation as:

DIRECT
An explicit device-only cash price or total device repayment is publicly available and separable from the service plan.

DERIVED
A bundle price can be separated using an exactly equivalent official SIM-only plan with the same service content, term and conditions.

UNCOMPARABLE
The device and service components cannot be separated reliably.

Never treat a headline monthly bundle price as the handset price.

CALCULATIONS
For DIRECT observations:

effective_device_price =
upfront_device_payment
+ total_device_instalments
+ mandatory_device_fees
+ financing_cost

For DERIVED observations:

implied_device_price =
total_bundle_commitment
− like_for_like_SIM_only_commitment
+ device_specific_upfront_fees

Only calculate a derived price when the SIM-only comparator is genuinely equivalent. Otherwise classify the row as UNCOMPARABLE.

Calculate:

price_gap_local =
effective_or_implied_device_price − OEM_RRP

price_variance_pct =
(effective_or_implied_device_price ÷ OEM_RRP − 1) × 100

Interpretation:
- Below 0%: consumer price is below OEM RRP.
- At 0%: consumer price matches OEM RRP.
- Above 0%: consumer price is above OEM RRP.

Do not label below-RRP prices as “Hutchison support”.
Do not label above-RRP prices as “price increase” until financing and mandatory costs have been separated.

Record gifts and trade-in offers separately. Do not subtract their value from the effective price unless the benefit is unconditional and its official value is explicit.

REQUIRED INTERNAL FILES
Create:
1. page2_raw_offers.csv
2. page2_price_model.xlsx
3. page2_source_ledger.csv
4. page2_exclusion_log.csv
5. page2_validation_report.md
6. page2_price_position.pptx

The workbook must retain all raw inputs, formulas and classifications.

Also reserve these internal-only fields for possible future B2B evidence:
funding_source, oem_rebate, operator_subsidy,
volume_rebate, mdf_or_joint_marketing,
programme_type, evidence_confidence.

Set them to “Unknown” unless direct internal evidence is supplied. Never infer them from public prices.

VISUAL DESIGN
Create an editable scatter plot.

Suggested Chinese title:
「CKH欧洲子网当前终端售价相对OEM RRP的偏离」

Chart:
- X-axis: OEM RRP converted to EUR using the capture-date ECB rate.
- Y-axis: current operator price variance versus OEM RRP (%).
- Horizontal reference line at 0%.
- Each point: one model × market observation.
- Colour: brand.
- Shape or short label: market.
- Solid point: DIRECT.
- Hollow point: DERIVED.
- Exclude UNCOMPARABLE observations from the plot but report their count.

Keep original local prices in the embedded chart data.

Label only:
- Largest below-RRP deviations.
- Largest above-RRP deviations.
- Strategically relevant outliers.
- Observations required to explain the pattern.

Do not label every point.

Add a factual completeness box:
- Direct observations: n
- Derived observations: n
- Uncomparable observations: n
- Capture date

Add this mandatory footer:
「价格偏离仅反映消费者端价格结果；资金来源可能为OEM、运营商或联合项目，公开资料无法归因。」

EXECUTIVE TAKEAWAY
Generate no more than two evidence-based observations.

Acceptable examples:
- “Below-RRP pricing is concentrated in products above €X.”
- “The same model varies from −X% to +Y% across CKH OpCos.”

Do not mention resource allocation, strategic backing or funding responsibility.

QUALITY GATES
Before completing:
- Match exact model, generation and storage.
- Separate device price from tariff cost.
- Verify every calculation against the source page.
- Reject non-equivalent SIM-only comparisons.
- Confirm conditional offers and validity dates.
- Audit currency conversion.
- Render the PowerPoint and inspect labels, legend, reference line and footnotes.
- Keep the chart and all text editable.
- Place source URLs and methodology in speaker notes or an appendix note.

FINAL RESPONSE
Report:
- Path to the editable PowerPoint.
- Path to the pricing workbook.
- Direct, derived and excluded observation counts.
- Markets and brands covered.
- Data limitations that could alter the conclusion.
```

先執行 **Page 1 prompt**；完成並驗證 product population 後，再用同一份清單執行 Page 2。
## Next move
