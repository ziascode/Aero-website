# Aero Cleaning Services — Next.js

Homepage converted from the design export into a Next.js App Router project.

## Run locally (VS Code)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/page.jsx` — the whole homepage as one client component (hero tab rotator, service rows, review marquees, footer)
- `app/globals.css` — body reset, marquee keyframes, hover states
- `public/ds/styles.css` — the Industry design-system stylesheet (all `--color-*`, `--font-*`, `--space-*` tokens plus `.btn`, `.tag`, `.blueprint`, `.duotone`)
- `public/google.png`, `public/review6.png` — local images

## Content to edit

Data arrays live at the top of `app/page.jsx`: `LABELS`, `HERO_IMAGES`, `SERVICE_ROWS`, `REVIEWS`, `LOGOS`.

## Note on media

Hero photos, client logos and the service videos are hot-linked to external URLs. For production, download them into `public/` and swap the paths so the site doesn't depend on those hosts.

## Deploy static (GitHub Pages)

Add `output: 'export'` to `next.config.mjs`, then `npm run build` — the static site lands in `out/`.
