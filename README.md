# Mavuno Maize Flour — Corporate Website

A production-ready React + TypeScript + Vite + Tailwind CSS website for Mavuno Maize Flour.

## Getting started

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
  assets/       brand image assets (logo, product photo)
  components/   reusable UI components
  data/         all editable business content (see below)
  pages/        one file per route
```

## Editing content

All business content lives in `src/data/*.ts` — no content is hardcoded inside
JSX. Update these files as the client supplies verified information:

- `siteConfig.ts` – brand name, slogan, nav links, site URL
- `productInfo.ts` – product facts, manufacturer details, "Why Mavuno" cards
- `nutritionInfo.ts` – nutrition table values (per 100 g)
- `certifications.ts` – KEBS and other certification details
- `manufacturingProcess.ts` – the 10 manufacturing process stages
- `companyInfo.ts` – About Us copy and the manufacturing overview
- `contactInfo.ts` – phone, WhatsApp, emails, address, social links
- `locations.ts` – retailer/distributor locations (currently empty)
- `recipes.ts` – the three official Mavuno recipes. `ingredients`,
  `instructions`, `cookingTime` and `servings` are optional: fill them in and
  the recipe detail view renders them automatically, no code changes needed
- `news.ts` – news/event articles: long-form features (`body`, `gallery`,
  `closing`) and video items (`video`, `videoPoster`, `learnMoreLink`)

- `legal.ts` – Privacy Policy and Terms & Conditions content

Any remaining field marked `[CLIENT TO PROVIDE]` or `[CLIENT VERIFICATION
REQUIRED]` should be replaced once the client confirms the real information. No
company history, certifications, statistics, or contact details have been
invented.

## Still required before launch

- Verified certification numbers/validity and supporting documents (the KEBS
  and quality marks on the pack are shown but not yet confirmed)
- A Google Maps share/embed link for the Njiru premises
  (`contactInfo.googleMapsUrl` is currently empty and the map block is hidden)
- Confirmation that all six social accounts (@mavunomaizeflour) are live — the
  links are wired up and will 404 on any platform where the account is not yet
  created
- A connected form/email service for the contact form (currently a stub that
  correctly reports it is not yet connected to a backend)
- Full ingredients and preparation steps for the three official recipes
- Retailer/distributor locations, and further news/events content
- Specific facility details and production figures, which are deliberately
  omitted from the About page until the company confirms them
- Higher-resolution product photography if available
- The advertisement video in `public/videos/` is ~28 MB. Consider compressing
  it or serving it from a video host before launch for faster page loads
# mavuno
