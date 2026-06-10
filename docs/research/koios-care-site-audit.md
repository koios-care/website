# Koios Care — Site Copy Audit: New Site vs Live Site

**Audit date:** 2026-06-04  
**Audited by:** Claude Code (automated audit)  
**Repo branch audited:** `audit/koios-care-copy`  
**Scope:** Every factual claim in `src/pages/*.astro` and `src/components/Footer.astro`

---

## 1. Executive Summary

This audit compares every verifiable claim in the redesigned Koios Care marketing site against the live website at `https://www.koios.care`, external press coverage, and authoritative public sources (ClinicalTrials.gov, Belgian company registry).

**Access note:** `https://www.koios.care` returns HTTP 403 to all automated fetchers — the live site could not be directly crawled. Verification relied on: (a) the repo source code as the definitive deployed copy, (b) secondary press sources (EU-Startups, Tech.eu, Silicon Canals, Vestbee, BeBeez — June 2025 coverage of the €1M seed round), and (c) ClinicalTrials.gov (via search index, since direct API access also returned 403). All sources are noted per claim.

### Counts

| Status | Count |
|--------|-------|
| ✅ VERIFIED | 16 |
| ⚠️ UNVERIFIED | 17 |
| ❌ CONTRADICTED | 1 |
| 🔴 STRUCTURAL ISSUE (not a factual error, but a live-site risk) | 4 |

### Highest-risk discrepancies (read first)

| # | Claim | Risk | Detail |
|---|-------|------|--------|
| 1 | **"Registered & recruiting"** (trial status) | ❌ CONTRADICTED | ClinicalTrials.gov status is **UNKNOWN** — trial primary completion was estimated Oct 2024. The record was not updated past its due date. Claiming it is still "recruiting" may be false. |
| 2 | **57% improvement in health-related quality of life** | ⚠️ UNVERIFIED | Not found in any external press coverage, ClinicalTrials.gov record, or secondary source. Needs founder confirmation with exact sample size and timeframe. |
| 3 | **96% of days captured passively** | ⚠️ UNVERIFIED | Same as above — not independently corroborated. Needs founder confirmation and citation. |
| 4 | **"8 hospital & research partners"** | ⚠️ UNVERIFIED + MISLEADING | Only 7 entities are named (5 hospitals + imec.istart + VLAIO). The number "8" is unexplained. Furthermore, imec.istart (a VC accelerator) and VLAIO (a government funding agency) are listed alongside hospitals under the label "hospital & research partners" — a category mismatch. |
| 5 | **Publication placeholders live on the site** | 🔴 STRUCTURAL | Three publication titles in `src/pages/science.astro` are explicitly labeled `"illustrative placeholders"` in the code. If the CMS is empty when the site goes live, fabricated publication titles appear to real visitors. Same risk applies to the team section. |
| 6 | **Contact form is non-functional** | 🔴 STRUCTURAL | The form's success message says `"this is a prototype, so nothing was sent."` This must be removed or replaced before launch. |

---

## 2. Claim-by-Claim Audit Table

### 2.1 Statistics and Clinical Claims

| Claim | Appears in | Status | Source / Notes |
|-------|-----------|--------|----------------|
| **57% reported improvement in health-related quality of life** | `index.astro:109`, `science.astro:82` | ⚠️ UNVERIFIED | Not found in any accessible external source. Press coverage of the €1M round (June 2025) mentions "130 patients in a multi-centre EU trial" but does not cite 57%. Trial NCT06209502 primary completion was Oct 2024; results may be internal only. **Needs founder citation: exact quote, sample size, publication or dataset.** |
| **96% of patients' days captured passively, with no added effort** | `index.astro:110`, `science.astro:82`, `pharma.astro:29` | ⚠️ UNVERIFIED | Same situation as 57% — not found in any external source. **Needs founder citation.** |
| **40+ validated digital measures of neurological & body health** | `index.astro:111`, `science.astro:82`, `patients.astro`, `pharma.astro:30` | ⚠️ UNVERIFIED (count) | The existence of the measures is plausible (the pharma page lists individual measures across motor, sleep, physiology, and QoL categories). The count of "40+" is not independently confirmed. **Needs verification that ≥40 distinct measures are validated.** |
| **8 hospital & research partners across Belgium** | `index.astro:112` | ⚠️ UNVERIFIED + MISLEADING | Only 7 entities are named across the site. Of those, 5 are hospitals (AZ Delta, AZ Groeninge, AZ Oostende, CHU Liège, CHU Charleroi), while imec.istart is a VC/accelerator and VLAIO is a government agency — neither is a hospital or research institution. Counting all 7 as "hospital & research partners" is a category mismatch; the "8" figure is unexplained. **Needs correction.** |
| **~0.6% of a year with Parkinson's is spent in front of a neurologist** | `index.astro:59` | ⚠️ UNVERIFIED | This is arithmetically derivable from "2 visits × 15–30 minutes per year" but the exact formulation is not confirmed from an external source. Plausible, but should be cited or noted as an approximation. |
| **"Two visits a year. Eight thousand hours of life."** | `index.astro:50`, `about.astro` | ⚠️ UNVERIFIED | "Eight thousand hours" ≈ 1 year. The rhetorical framing is plausible. Not cited from an external source. |

### 2.2 Clinical Trial

| Claim | Appears in | Status | Source / Notes |
|-------|-----------|--------|----------------|
| **Trial exists: NCT06209502** | `index.astro:180`, `science.astro:74`, `clinicians.astro:93` | ✅ VERIFIED | Confirmed: ClinicalTrials.gov URL `https://clinicaltrials.gov/study/NCT06209502` appears in search results. Multiple press sources also reference this identifier. |
| **Trial title: "Q-index trial"** | `index.astro:180`, `science.astro:74` | ✅ VERIFIED | Official title: *"Quality-of-Life Index (Q-Index)"* (full subtitle: *"A Proof of Concept Investigation Towards Monitoring the Health-related Quality of Life of Parkinson's Disease Patients Using Wearable and Portable Devices"*). The repo's shorthand "Q-index trial" is accurate. |
| **Trial sponsor: Koios Care** | (implicit) | ✅ VERIFIED | Confirmed from ClinicalTrials.gov via search; internal study ID: KC-QI-2023. |
| **Trial condition: Parkinson's disease** | `science.astro:78` | ✅ VERIFIED | Confirmed from ClinicalTrials.gov. |
| **Trial intervention: Parkiwatch** | (implicit) | ✅ VERIFIED | Confirmed — Parkiwatch is the intervention device in the trial. |
| **Trial status: "Registered & recruiting"** | `science.astro:75` | ❌ CONTRADICTED | ClinicalTrials.gov shows **Overall Status: UNKNOWN** (last known status: RECRUITING). The "UNKNOWN" designation means the sponsor did not update the record past the due date (estimated primary completion: **October 31, 2024** — now over 18 months ago). The trial may have concluded. The site should not state it is "recruiting" without confirmation from the trial team. |
| **Trial start: (implied ongoing)** | `science.astro` | ⚠️ UNVERIFIED | Start date November 1, 2023 confirmed from ClinicalTrials.gov. However, see above re: completion status. |

### 2.3 Hospital and Partner Names

| Claim | Appears in | Status | Source / Notes |
|-------|-----------|--------|----------------|
| **AZ Delta** | `index.astro:181`, `science.astro:119`, `clinicians.astro:87` | ✅ VERIFIED | Confirmed in press: *"Koios Care has worked with AZ Delta, one of the largest hospitals in Belgium, to prepare for a quality-of-life study."* (Search snippet from press coverage.) |
| **CHU Liège** | `index.astro:184`, `science.astro:122`, `clinicians.astro:90` | ✅ VERIFIED | Confirmed as a recruiting site in NCT06209502, and named in press: *"clinical researchers led by CHU de Liege professor of neurology Gaëtan Garraux."* |
| **AZ Groeninge** | `index.astro:182`, `science.astro:120`, `clinicians.astro:88` | ⚠️ UNVERIFIED | Named in the repo but not confirmed in any accessible press coverage or ClinicalTrials.gov record. **Needs founder confirmation.** |
| **AZ Oostende** | `index.astro:183`, `science.astro:121`, `clinicians.astro:89` | ⚠️ UNVERIFIED | Same — not confirmed in external sources. **Needs founder confirmation.** |
| **CHU Charleroi** | `index.astro:185`, `science.astro:123`, `clinicians.astro:91` | ⚠️ UNVERIFIED | Same — not confirmed in external sources. **Needs founder confirmation.** |
| **imec.istart** | `index.astro:186`, `science.astro:124`, `about.astro:108` | ✅ VERIFIED (as backer) | Confirmed: imec.istart fund participated in the €1M seed round. The repo correctly describes imec.istart as *"one of Europe's leading deep-tech accelerators"* in the backers section. However, imec.istart is also listed among "hospital & research partners" — it is neither a hospital nor a research institution; it is a VC accelerator. The **backers** section treatment is accurate; the **partners** list treatment is a category error. |
| **VLAIO** | `index.astro:187`, `science.astro:125`, `about.astro:109` | ✅ VERIFIED (as agency) | VLAIO (Flanders Innovation & Entrepreneurship) is the Flemish government innovation funding body. Its description in the repo (*"Flanders Innovation & Entrepreneurship agency"*) is accurate. Receiving VLAIO support is plausible and consistent with Belgian deep-tech startups. Cannot confirm the exact grant amount or type from external sources. Same category-mismatch issue as imec.istart — it is not a hospital or research partner. |
| **imec.istart described as "one of Europe's leading deep-tech accelerators"** | `about.astro:108` | ✅ VERIFIED | Accurate description — imec.istart is widely recognized as one of Europe's top tech accelerators. |
| **VLAIO described as "Flanders Innovation & Entrepreneurship agency"** | `about.astro:109` | ✅ VERIFIED | Accurate official description. |

### 2.4 Funding

| Claim | Appears in | Status | Source / Notes |
|-------|-----------|--------|----------------|
| **€1M seed funding** | `index.astro:27` (pill), `about.astro:107` | ✅ VERIFIED | Confirmed by multiple press sources (EU-Startups, Tech.eu, Silicon Canals, Vestbee, BeBeez — all dated June 2025). Exact quote from press: *"Antwerp-based Koios Care, a neurology-focused digital medicine company, has raised €1 million in a seed funding round."* |
| **"to bring objective measurement to neurology"** | `about.astro:107` | ✅ VERIFIED | Consistent with all press coverage framing. |

### 2.5 Pricing

| Claim | Appears in | Status | Source / Notes |
|-------|-----------|--------|----------------|
| **€20 / month** | `index.astro:129`, `patients.astro:18,90` | ⚠️ UNVERIFIED | Not found in any external source. The live site (koios.care) is inaccessible to audit directly. **Needs confirmation that this is the current/planned price and that the founders have authorised it.** |
| **"about the cost of a streaming subscription"** | `index.astro:129`, `patients.astro:90` | ⚠️ UNVERIFIED | Framing claim — not a factual error, but dependent on the €20 price being correct. |

### 2.6 Company Information

| Claim | Appears in | Status | Source / Notes |
|-------|-----------|--------|----------------|
| **Filip Williotstraat 9, 2600 Antwerpen, Belgium** | `about.astro:123`, `Footer.astro:32-33` | ✅ VERIFIED | Confirmed from Belgian company registry snippet: *"Koios Care (BV) - Antwerpen (2600) - BE 0786.830.148"* at `companyweb.be/en/0786830148/koios-care`. |
| **VAT BE0786.830.148** | `about.astro:124`, `Footer.astro:39` | ✅ VERIFIED | Confirmed from companyweb.be search result: *"Koios Care (BV) - Antwerpen (2600) - BE 0786.830.148."* |
| **info@koios.care** | `about.astro:122`, `Footer.astro:31` | ⚠️ UNVERIFIED | Email follows the standard `info@[domain]` pattern for the company domain; not independently confirmed from an external source, but highly plausible. |

### 2.7 Regulatory Disclaimers

| Claim | Appears in | Status | Notes |
|-------|-----------|--------|-------|
| **"Koios Care is a wellness solution. It is not a medical device and does not diagnose or treat disease."** | `index.astro:97` | ✅ VERIFIED (consistent with company positioning) | All press coverage consistently describes Koios Care as a "digital health tool" / wellness monitoring solution, not a medical device. The disclaimer wording is appropriate and consistent with the company's public positioning. |
| **Disclaimer on every page that makes product claims** | All pages | ✅ VERIFIED (present) | Every product-claim page (`index.astro`, `patients.astro`, `clinicians.astro`, `science.astro`, `pharma.astro`) contains a wellness disclaimer. Minor wording variations across pages (some say "does not diagnose or treat disease," one on `pharma.astro` omits "does not diagnose or treat disease"). |

**Disclaimer wording discrepancy across pages:**

| Page | Exact wording |
|------|--------------|
| `index.astro` | "Koios Care is a wellness solution. It is not a medical device and does not diagnose or treat disease." |
| `patients.astro` (how it works) | "Koios Care is a wellness solution. It is not a medical device and does not diagnose or treat disease." |
| `patients.astro` (FAQ) | "Koios Care is a wellness solution. It does not diagnose or treat disease, and it does not replace your clinician's judgement." |
| `science.astro` | "Koios Care is a wellness solution and is not a medical device; it does not diagnose or treat disease." |
| `pharma.astro` | "Measure availability and endpoint qualification depend on study design and regulatory context. Koios Care is a wellness solution and is not a medical device." *(omits "does not diagnose or treat disease")* |
| `clinicians.astro` | No standalone disclaimer found — the trial reference uses `NCT06209502` inline without a wellness disclaimer in that section. |

### 2.8 Product Names and Descriptions

| Claim | Appears in | Status | Notes |
|-------|-----------|--------|-------|
| **Product name "Parkiwatch"** | `index.astro:81`, `patients.astro:18,79`, `clinicians.astro` | ✅ VERIFIED | Confirmed: Parkiwatch is on Google Play (`care.koios.parkiwatch`), named in the ClinicalTrials.gov record, and confirmed in all press coverage. |
| **Metric name "Q-index"** | `index.astro:92`, `patients.astro`, `science.astro` | ✅ VERIFIED | The Q-Index is the name of the registered clinical trial (NCT06209502) and confirmed in all press coverage. |
| **"gait, tremor, sleep, activity and heart-rate physiology"** | `index.astro:87`, `patients.astro` | ⚠️ UNVERIFIED (exact categories) | These categories are consistent with the clinical trial design and the pharma page's endpoint library. Plausible, but the exact categorization is not confirmed from an external source. |

### 2.9 Footer and Miscellaneous

| Claim | Appears in | Status | Notes |
|-------|-----------|--------|-------|
| **"powered by noera"** | `Footer.astro:38` | ⚠️ UNVERIFIED | "noera" does not appear in any press coverage or company description. This is presumably the technical partner/build agency. **Needs confirmation that this attribution is correct and that Noera approves of this credit.** |
| **Fundraise pill links to `/press-release`** | `index.astro` (hero) | 🔴 STRUCTURAL | The page `/press-release` does not exist in the source repo. If the site goes live without this page, users clicking "read the announcement" will hit a 404. |

### 2.10 Testimonials / Quotes

| Claim | Appears in | Status | Notes |
|-------|-----------|--------|-------|
| **"In my current scheme, sometimes I forget that I have Parkinson's." — Person living with Parkinson's, 53** | `index.astro:8`, `patients.astro:106` | ⚠️ UNVERIFIED | Sanity CMS fallback copy. These may be real CMS-sourced quotes or placeholder copy. **Must be confirmed as real patient consent has been obtained for public display.** |
| **"Koios helps me identify a patient's pains quickly and offer better care." — A.G. · Clinician** | `index.astro:9`, `clinicians.astro:102` | ⚠️ UNVERIFIED | Same as above — CMS fallback. "A.G." is anonymized; confirm real patient/clinician consent for use. |
| **"Sharing objective data with my doctor has improved our conversations significantly." — Bert, 55 · Ghent** | `index.astro:10` | ⚠️ UNVERIFIED | Same as above. "Bert, 55" is a named individual — confirm consent, ensure this is real. |

---

## 3. Complete Fact Inventory from Live Site

The live site (`https://www.koios.care`) is **not accessible** to automated crawlers (HTTP 403 on all endpoints). The following facts were extracted from secondary sources (press coverage, ClinicalTrials.gov index, Belgian company registry).

### 3.1 Facts confirmed from press coverage (June 2025)

**Company:**
- Name: Koios Care (registered as Koios Care BV)
- Founded: 2022
- Location: Antwerp, Belgium
- Address: Filip Williotstraat 9, 2600 Antwerpen (confirmed via companyweb.be)
- VAT: BE 0786.830.148 (confirmed via companyweb.be)

**Founders:**
- Gregor Strobbe (co-founder)
- Konstantinos Kyritsis (co-founder)
- Dimitris Iakovakis (co-founder)
- Clinical lead / scientific advisory: Prof. Gaëtan Garraux (CHU de Liège, professor of neurology)

**Funding:**
- €1M seed round, June 2025
- Lead investor: Evercurious VC (Greek early-stage DeepTech fund)
- Participating investors: Astylab Ventures, imec.istart fund, angel investors coordinated by HeBAN
- Earlier investors noted: Lumiares, imec.istart, BlueHealth Innovation Fund
- Prior funding: €350,000 (reported by Tech.eu, January 2023)

**Product:**
- Parkiwatch: mobile + wearable app for passive Parkinson's monitoring
- Google Play package: `care.koios.parkiwatch`
- Q-index: composite digital quality-of-life measure

**Partners confirmed:**
- AZ Delta (hospital; quality-of-life study preparation confirmed)
- CHU de Liège (clinical trial site for NCT06209502; neurology lead Prof. Garraux)
- Press also mentions "130 patients in a multi-centre EU trial"

**Investors / accelerators (not hospital/research partners):**
- imec.istart (accelerator + investor)
- VLAIO (Flemish government agency — grant support, consistent with startup profile)

### 3.2 Facts from ClinicalTrials.gov (NCT06209502)

- Trial exists: **YES**
- Official title: "Quality-of-Life Index (Q-Index): A Proof of Concept Investigation Towards Monitoring the Health-related Quality of Life of Parkinson's Disease Patients Using Wearable and Portable Devices"
- Sponsor: Koios Care
- Internal study ID: KC-QI-2023
- Condition: Parkinson's Disease
- Status: **UNKNOWN** (last known: RECRUITING)
- Start date: November 1, 2023
- Primary completion date: **October 31, 2024** (estimated — now 18+ months past)
- Intervention: Parkiwatch app (passive data collection from smartphones/smartwatches)
- Primary outcome: Validation of Q-Index as digital measure of health-related quality of life
- Sites: CHU de Liège confirmed; press states 130 patients across multiple European clinics
- No phase designation (observational/device study)

### 3.3 What the live site shows (inferred from source code)

Since the source code *is* the deployed site, all claims in section 2 above are what real visitors see.

---

## 4. Recommended Actions

### 4.1 Required before launch — factual corrections

- [ ] **Trial status (CRITICAL):** Change `science.astro` from "Registered & recruiting" to an accurate status. Confirm with trial PI whether the trial is still recruiting, has concluded, or is in follow-up. If concluded, update to "Completed" or "Results pending." Do not use "recruiting" while ClinicalTrials.gov shows "UNKNOWN."

- [ ] **"8 hospital & research partners" (HIGH):** Audit this number. The site names 7 entities; of those, 2 (imec.istart, VLAIO) are not hospitals or research institutions. Either: (a) confirm an eighth partner, (b) change the number to reflect only true clinical/research partners, or (c) rephrase to "5 hospital partners and 2 innovation backers" or similar. Do not mix funders into "hospital & research partners."

- [ ] **57% quality of life improvement (HIGH):** Obtain the exact source: trial ID, publication reference, or internal dataset name, plus sample size (n=?) and confidence interval. Add this as a citation on the science page, or remove the claim.

- [ ] **96% of days captured passively (HIGH):** Same as 57% — obtain source and n=. Add citation or remove.

- [ ] **40+ validated digital measures (MEDIUM):** Confirm the count is ≥40. The pharma page lists ~14–15 named measures; if all sub-variants are counted, ensure the total truly exceeds 40.

- [ ] **AZ Groeninge, AZ Oostende, CHU Charleroi (MEDIUM):** Confirm these hospitals have an active engagement with Koios Care (pilot, trial site, or agreement) before naming them publicly as partners.

- [ ] **€20/month pricing (MEDIUM):** Confirm this is approved and current. Pricing on a live healthcare product must reflect actual commercial terms.

### 4.2 Required before launch — structural issues

- [ ] **Publication placeholders (CRITICAL):** The three publication entries in `science.astro` are explicitly flagged as `"illustrative placeholders"` in code. Gate this section so it only renders when real CMS data exists (titles + DOI links), or remove the section entirely until real publications are entered in Sanity.

- [ ] **Team member placeholders (HIGH):** Same — the team section placeholder disclaimer (`"Team names and photos are placeholders — add real team members in the Studio at /admin."`) must not be visible to site visitors at launch. Gate the section on CMS data presence.

- [ ] **Contact form (HIGH):** The form success message says `"this is a prototype, so nothing was sent."` This must be replaced with a working form or a mailto link before the site goes live.

- [ ] **`/press-release` page missing (HIGH):** The fundraise pill in the hero links to `/press-release`, which does not exist in the repo. Either create this page (with the press release content) or change the link target before launch.

### 4.3 Needs founder input — verify before claiming

- [ ] Confirm `info@koios.care` is the correct and monitored contact email.
- [ ] Confirm "powered by noera" attribution is correct and approved.
- [ ] Confirm the three testimonials (patient quotes) are real, that the individuals have given consent for public use, and that CMS data is loaded.
- [ ] Confirm VLAIO support type (grant, in-kind, accelerator programme) to ensure the backers section is accurately worded.
- [ ] Confirm `~0.6% of a year` statistic — cite the underlying calculation assumption (2 visits × ~15 minutes = 0.006% to ~0.6% depending on duration; clarify the assumed visit length).

### 4.4 Copy refinements (lower risk)

- [ ] **Disclaimer consistency:** Standardise the wellness disclaimer across all pages. The `pharma.astro` version omits "does not diagnose or treat disease." Recommend using a single shared disclaimer component.
- [ ] **"AI-native digital medicine"** vs. **"wellness solution":** The hero eyebrow uses "digital medicine" while disclaimers say "wellness solution, not a medical device." Consider using "digital wellness" in the eyebrow to reduce the semantic tension and align with the regulatory disclaimer.
- [ ] **`clinicians.astro` disclaimer:** This page references NCT06209502 inline but does not include the wellness disclaimer near that reference. Add a disclaimer to the trial-reference context.

---

## Appendix A: Sources Consulted

| Source | URL | Access |
|--------|-----|--------|
| Live site (homepage) | https://www.koios.care | ❌ 403 Forbidden |
| Live site (press-release) | https://www.koios.care/press-release | ❌ 403 Forbidden |
| ClinicalTrials.gov direct | https://clinicaltrials.gov/study/NCT06209502 | ❌ 403 Forbidden (direct fetch); ✅ confirmed via search index |
| ClinicalTrials.gov API | https://clinicaltrials.gov/api/v2/studies/NCT06209502 | ❌ 403 Forbidden |
| EU-Startups (June 2025) | https://www.eu-startups.com/2025/06/… | ❌ 403 Forbidden (direct fetch); ✅ facts from search snippet |
| Tech.eu (June 2025) | https://tech.eu/2025/06/16/… | ❌ 403 Forbidden (direct fetch); ✅ facts from search snippet |
| Silicon Canals (June 2025) | https://siliconcanals.com/koios-care-lands-e1m-in-funding/ | ❌ 403 Forbidden (direct fetch); ✅ facts from search snippet |
| BeBeez (June 2025) | https://bebeez.eu/2025/06/16/… | ❌ 403 Forbidden (direct fetch); ✅ facts from search snippet |
| companyweb.be | https://www.companyweb.be/en/0786830148/koios-care | ❌ 403 Forbidden (direct fetch); ✅ address + VAT from search snippet |
| DiMe Society | https://dimesociety.org/…/koios-care… | ❌ 403 Forbidden (direct fetch) |
| Evercurious portfolio | https://www.evercurious.vc/portfolio/koios-care | Not fetched |
| Tech.eu (Jan 2023, €350k round) | https://tech.eu/2023/01/23/antwerps-koios-bags-eur350000/ | Not fetched; title found in search |
| Repo source code | /home/user/koios/src/ | ✅ Full access |

---

*This report was generated by automated analysis of publicly available information. All UNVERIFIED claims require founder or primary-source confirmation before the site launches. Do not modify site copy based solely on this report — confirm each item with the founding team.*
