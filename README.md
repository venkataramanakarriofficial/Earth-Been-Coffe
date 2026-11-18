# Earth Been Coffee — Editorial Website Refresh (18 November 2026)

An updated Next.js 15 / React 19 / TypeScript website based on the **existing uploaded project** (not a separate remake). The owner-supplied EBC navigation logo, the original menu-board images, all menu item names, contact information, and site routes are retained.

## What changed

- **Opening animation:** replaced the oversized synthetic takeaway cup with a shorter, typographic reveal over real barista photography. It runs once per browser session on the homepage, supports a Skip intro control, and respects reduced-motion settings.
- **Homepage:** replaced fake-branded imagery and repeated crops with distinct editorial photos of latte art, matcha, hot chocolate, cafés, bakes, and baristas. The hero now uses a photo and an elegant type sticker instead of a floating rendered cup.
- **Menu page (`/menu`):** redesigned with a bold new hero, four photo-led category links, an editorial drinks layout, a separate iced-coffee feature, a warm pastries section, and a Dalston visit CTA. All actual menu categories and menu items are preserved and **no prices are invented**.
- **Our Story, Find Us and Contact:** replaced conspicuously synthetic scene photography with sourced photos. No fake photo is presented as the actual Earth Been storefront.
- **Social preview:** refreshed to a clean graphic based on the actual EBC brand, without synthetic café/storefront images.
- Added photography source and client-approval notes: see `docs/REAL_PHOTOGRAPHY_SOURCES.md` and `docs/CLIENT_HANDOFF_20261118.md`.

## Start locally (Windows, Mac, Linux)

Requires Node.js **22.x** and an internet connection for first-time install / photo downloads.

```bash
npm ci
npm run photos:download
npm run dev
```

Open **http://localhost:3000**. `predev` automatically tries to cache the photo files again if any are missing. Photo downloads are not required to compile the app: live-source and bundled fallbacks are built in.

## Verify and deploy

```bash
npm run lint:types
npm run build
npm start
```

For Vercel, import **this project root**, set framework **Next.js**, and deploy. The `prebuild` script downloads genuine stock photographs and stores them as local files in `public/images/real/` before compilation; this improves page load reliability and performance.

**Network note:** This delivery environment cannot fetch external image assets or install packages from npm. The ZIP contains the revised website code, original owner-provided assets, and an automated source-photography downloader. For the real editorial photos to be physically bundled into the built site, run `npm run photos:download` on a network-enabled machine or deploy on Vercel with normal network access. If a request fails, the site first tries Unsplash directly and finally a legacy bundled placeholder. Do not treat the fallback as a client-approved image.

## Edit content

- Original menu items: `src/data/menu.ts`
- Photo sources, local/remote/fallback: `src/data/photography.ts`
- Image download script: `scripts/download-photos.mjs`
- Business information: `src/data/siteContent.ts` and `src/data/locations.ts`
- Logo: `public/images/earth-been-navbar-monogram.png`
- Owner menu boards: `public/images/earth-been-drinks-menu.jpg` and `public/images/earth-been-sweets-menu.jpg`
- Layout and motion styles: `src/app/globals.css`

**Important:** Stock photographs illustrate the coffee experience; they are not pictures of Earth Been Coffee's actual premises, team, or specific menu products. Use approved onsite photography when the client provides it. See the source list and photography disclosures in `docs/`.
