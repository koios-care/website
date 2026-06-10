# Koios — marketing site

Marketing website for [Koios Care](https://koios.care) — AI-native digital medicine for Parkinson's. Koios turns the phone and watch people already wear into clinically meaningful measures of life with Parkinson's (Parkiwatch, the Q-index).

Built with [Astro](https://astro.build): component-based, ships zero JavaScript by default (the only client JS is the interactive hero, the clinician-dashboard demo, tabs and small UI behaviors).

## Development

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static build to dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  layouts/BaseLayout.astro   # <head>, header/footer, scroll-reveal script
  components/                # Header, Footer, KoiosLogo
  styles/global.css          # the full design system (tokens + shared components)
  pages/                     # one .astro file per route
    index.astro              # home — animated tremor-line hero
    patients.astro           # /patients
    clinicians.astro         # /clinicians (interactive dashboard demo)
    pharma.astro             # /pharma (endpoint library tabs)
    science.astro            # /science (trial, publications)
    about.astro              # /about (story, team, contact form)
    palette.astro            # /palette — design-system reference
public/                      # static assets (logo, favicon)
design/                      # original Claude Design handoff (prototypes + screenshots) — reference only
```

## Design system

Warm clinical paper: cream canvas (`#F3EFE9`), hairline rules, Fraunces serif headlines, IBM Plex Mono data labels, and the locked brand maroon `#5B112F` with a rose secondary accent (`#AE6275`). See `/palette` on the running site, or `src/styles/global.css` for all tokens.

The `design/` folder contains the original HTML prototypes from Claude Design, including a runtime "Tweaks" panel used to explore font/accent/density options. The chosen defaults are baked into `global.css`; revisit the prototypes if you want to re-explore alternatives.

## Content management (Sanity)

The Studio is embedded at **`/admin`** (Sanity project `lw88pa2w`, dataset `production`). Editors sign in with their sanity.io account.

- Schemas live in `src/sanity/schemaTypes/` — currently **team members**, **publications**, and **quotes** (homepage testimonials are the first 3 marked "featured").
- Pages fetch at **build time** via `src/sanity/lib/content.ts`. If the dataset is empty or unreachable, pages fall back to the labeled placeholder copy — the build never breaks on missing content. Re-deploy to pick up new content.
- CORS origins are registered for `localhost:3002`, `localhost:4321`, `koios.care`, `www.koios.care` (`npx sanity cors add <origin> --credentials` for more).
- `sanity.config.ts` = Studio config; `sanity.cli.ts` = CLI project binding.

## Pre-launch TODO

- [ ] Enter real team members, publications and quotes in the Studio (`/admin`)
- [ ] Wire the contact form to a real backend (currently a front-end demo)
- [ ] Privacy & Terms pages (footer links are inert)
- [ ] Decide hosting + domain (koios.care), set up deploys
- [ ] OG/social meta images
