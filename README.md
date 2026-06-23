# BETOPLAST AG

Corporate website for BETOPLAST AG — a Swiss energy and infrastructure company
(power projects, hydrocarbon resources, industrial construction and energy trading).

Built with [Astro](https://astro.build) — static, no backend. Bilingual (EN / DE).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  data/site.ts        # company info (UID, email, phone), Formsubmit endpoint
  data/partners.ts    # partner / client names
  i18n/ui.ts          # all page copy, EN + DE
  i18n/utils.ts       # language helpers, navigation
  layouts/Base.astro  # shared layout (head, header, footer)
  components/          # Header, Footer, CtaBand
  components/pages/    # Home, About, Services, Partners, Contact
  pages/               # EN routes (/) and DE routes (/de/…)
public/                # CNAME, .nojekyll, favicon
```

## Editing content

- **Page copy** — edit `src/i18n/ui.ts` (one block per language: `en`, `de`).
- **Services** — `services.items` in `src/i18n/ui.ts`.
- **Company details** — `src/data/site.ts`.
- **Partners** — `src/data/partners.ts`.

## Languages

English is the default locale and serves at the root (`/`). German serves under
`/de/`. Add or change languages in `astro.config.mjs` and `src/i18n/ui.ts`.

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co) (no signup) and
mails `info@betoplast.ch`. The first submission triggers a one-time activation
email to that inbox. Change the target in `src/data/site.ts` (`formEndpoint`).

## Hosting (GitHub Pages)

Static build deploys to GitHub Pages. `public/CNAME` sets the custom domain
`betoplast.ch`; `public/.nojekyll` disables Jekyll processing. Build with
`npm run build` and publish `dist/`.
