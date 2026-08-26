# DUAL — dimadisaputra.com

Portfolio for Dimas Adi Saputra. One codebase, two faces:

| | |
|---|---|
| `de.dimadisaputra.com` | Data Engineer — "The Pipeline". Ink black, signal lime, mono only. |
| `se.dimadisaputra.com` | Software Engineer — "The Workshop". Bone, molten orange, serif display. |
| `dimadisaputra.com` | Gateway. Pick a door; the choice is remembered. |

Both faces render from the same components. Every visual difference comes from
design tokens swapped by `data-face` on `<html>` — see the top of
`src/styles/global.css`. Effort once, two sites.

Each face is available in English and Indonesian.

## Commands

```sh
bun install
bun dev            # localhost:4321
bun run build
bun preview
bunx astro check   # types, and it is what catches a missing i18n key
```

## Layout

```
src/
  site-config.ts        FACE_DOMAIN — the one switch that flips path mode → subdomain mode
  i18n/                 en.ts is the source of truth for the dictionary shape; id.ts must match
  data/                 site, stack, experience — the facts, kept out of the markup
  lib/projects.ts       collection queries, face filtering, language fallback
  scripts/motion.ts     all GSAP: ScrollSmoother, ScrollTrigger, SplitText, cursor
  content/projects/
    en/*.md  id/*.md    entry id is `<lang>/<slug>`; language comes from the directory
  pages/
    index.astro         gateway
    [face]/[lang]/…     everything else, generated over the face × language cross product
    og/[face]/[lang].png.ts   social cards, rendered at build with satori + resvg
```

### Adding a project

Drop a markdown file in `src/content/projects/en/`. Two fields matter beyond
the obvious ones:

```yaml
faces: ["de", "se"]   # which side(s) it appears on
angle:                # one sentence of framing per face — same project, different story
  de: "Bronze to gold in Snowflake, with sentiment scored inside the warehouse."
  se: "A full product: scraper, warehouse, orchestrator and dashboard."
```

An Indonesian version goes in `id/` under the same filename. If it is missing,
the English entry is shown instead rather than the project disappearing.

## Going live on the domain

`FACE_DOMAIN` in `src/site-config.ts` is `null` until `dimadisaputra.com` is
bought. Setting it changes three things at once: internal links drop the `/de`
prefix (the host rewrite adds it back), the face switch becomes an absolute
cross-host link, and canonicals, hreflang and the sitemap move to the
subdomains.

It must be set **together with** the rewrites in `vercel.json`, never alone.
After deploying, check the two things that break silently:

```sh
curl -H "Host: de.dimadisaputra.com" https://<preview>/en        # DE home
curl -I -H "Host: de.dimadisaputra.com" https://<preview>/_astro/…css   # must be 200
```

If the second one 404s, the rewrite's exclusion pattern is eating the assets.

## Notes

- Motion is GSAP throughout. `prefers-reduced-motion` is handled by
  `gsap.matchMedia()` in one place, and reveals default to *visible* — a page
  can never be left blank if the bundle fails to load.
- `position: fixed` inside `#smooth-content` does not work; ScrollSmoother
  transforms that element. `unstick()` in `motion.ts` lifts such nodes to
  `<body>`.
- The contact form posts to the same Formspree endpoint the previous site used.
- The CV is a page (`/cv`), print-styled to A4. There is no PDF in the repo —
  print to PDF from the browser.
