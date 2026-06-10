# Sanity content import

Pre-populated NDJSON for the Koios Care Sanity dataset.

## Import command

```bash
npx sanity dataset import sanity-content/content.ndjson production --replace
```

Run this from the repo root. The `--replace` flag means re-running the command is safe — it overwrites documents with the same `_id` rather than duplicating them.

You must be authenticated with the Sanity CLI (`npx sanity login`) and have write access to project `lw88pa2w`.

## What is in this file

| Type | Count | Notes |
|------|-------|-------|
| `quote` | 3 | The three homepage testimonials (`featured: true`). **Unverified** — confirm real consent before launch. See audit report. |
| `faqItem` | 5 | The five FAQ questions from `patients.astro`. |
| `stat` | 4 | The four evidence-grid numbers from `index.astro`. **Unverified from external sources** — see audit report for detail on each. No `sourceUrl` / `sourceQuote` populated because no external citation was confirmed. |
| `partner` | 7 | All seven entities named on the live site. See verification notes below. |

## Partner verification status

| `_id` | Name | Kind | External verification |
|-------|------|------|----------------------|
| `partner-az-delta` | AZ Delta | hospital | ✅ Confirmed in press ("Koios Care has worked with AZ Delta, one of the largest hospitals in Belgium, to prepare for a quality-of-life study.") |
| `partner-chu-liege` | CHU Liège | hospital | ✅ Confirmed as NCT06209502 recruiting site and in press (Prof. Gaëtan Garraux, CHU de Liège). |
| `partner-az-groeninge` | AZ Groeninge | hospital | ⚠️ Present on live site — needs founder confirmation before launch. |
| `partner-az-oostende` | AZ Oostende | hospital | ⚠️ Present on live site — needs founder confirmation before launch. |
| `partner-chu-charleroi` | CHU Charleroi | hospital | ⚠️ Present on live site — needs founder confirmation before launch. |
| `partner-imec-istart` | imec.istart | backer | ✅ Confirmed as seed-round participant (June 2025 press coverage). |
| `partner-vlaio` | VLAIO | backer | ✅ Confirmed — Flanders Innovation & Entrepreneurship agency. |

Note: the `kind` field distinguishes hospitals (`hospital`) from backers (`backer`). The schema also supports `institution` for future use. The "8 hospital & research partners" stat may need updating — only 7 entities are named and two of those (imec.istart, VLAIO) are not hospitals or research institutions; see the audit report.

## What was intentionally omitted

- **`teamMember` documents**: The live site displays placeholder team data only. Founder names (Gregor Strobbe, Konstantinos Kyritsis, Dimitris Iakovakis) were found in press coverage but their official roles, headshots, and consent to be listed have not been confirmed. No `teamMember` documents were created. Add real team data via the Studio at `/admin`.

- **`publication` documents**: All three publication entries in `science.astro` are explicitly marked as illustrative placeholders in the source code. No real publications have been confirmed from external sources. The build shows a disclaimer when the CMS is empty. Add real citations via the Studio once they are available.

- **`stat` sourceUrl / sourceQuote**: The four evidence-grid statistics (57%, 96%, 40+, 8 partners) were not independently corroborated by any accessible external source during the audit. The `sourceUrl` and `sourceQuote` fields were left blank. Once the founding team can provide a citation (trial data, internal dataset, or publication), add it in the Studio.
