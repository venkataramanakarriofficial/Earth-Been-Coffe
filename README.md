# Earth Been Coffee

Next.js App Router website for Earth Been Coffee, Dalston, London.

```sh
npm ci
npm run dev
```

Production: `npm run build` and `npm start`. Node.js 22 recommended. Deploy the project root to Vercel.

Three main pages: Home (`/`), Menu (`/menu`), Visit Us (`/find-us`). Legacy story and contact URLs redirect to the corresponding sections. Menu and contact data are maintained in `src/data/`. Photography is bundled locally; source credits are in `docs/REAL_PHOTOGRAPHY_SOURCES.md`. No prices or opening hours have been invented. Configure the approved production URL in `src/data/siteContent.ts` before enabling search indexing.
