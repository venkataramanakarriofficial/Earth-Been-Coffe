# EARTH BEEN COFFEE — Immersive 3D Website

A multi-page, frontend-only Next.js website concept for **Earth Been Coffee**, a London speciality beverage brand. It takes inspiration from the interaction *style* of [MotionSites' 3D collection](https://motionsites.ai/3d-websites), but all source code and illustrations here are original.

> **IMPORTANT: PROVISIONAL CLIENT CONCEPT, NOT A PUBLISHED OFFICIAL SITE.** No approved logo, brand deck, product photos, actual menu, prices, exact stall addresses, business email or approved social URLs were supplied with the development prompt. The wordmark, artwork, headlines and broad category descriptions are placeholders for creative approval. We intentionally do **not** invent official items, prices, locations, or contact addresses.

## What's included

- A real React Three Fiber / Three.js **interactive 3D coffee-cup hero**, including textured wraparound sleeve, simulated studio lighting, 3D coffee beans, subtle pointer and scroll-driven movements, and static fallbacks.
- A brief, skippable, once-per-session brand opening animation (disabled for reduced-motion users).
- Five full Next.js routes: **Home**, **Our Story**, **Menu**, **Find Us**, and **Contact**.
- Mobile navigation, responsive editorial sections, simple reveal transitions and reduced-motion support.
- Six editable menu categories, addable location records, seasonals, contact info and site copy through typed local data files.
- Search metadata, Open Graph placeholder, sitemap and robots configuration.
- An offline **five-page static design preview** in `preview/` which does **not** require npm to view. The offline preview intentionally shows a static cup photograph; the Next.js site uses actual WebGL 3D.

## Requirements

- Node.js **20.9+**, preferably Node.js 22 LTS.
- npm and an internet connection to download dependencies on first install.
- A modern desktop or mobile browser; graceful static fallback when WebGL is unavailable or reduced motion is enabled.

## Run the actual 3D website

Unzip, then in a terminal inside the extracted `earth` folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

To check TypeScript and prepare a production build:

```bash
npm run lint:types
npm run build
npm run start
```

Then open http://localhost:3000.

### Fast look without installing Node

Open `preview/index.html` in a browser, then use the links to navigate its companion HTML pages. **This is a static layout preview, not the actual interactive 3D Next.js app.** It also has a banner explaining this distinction.

## Edit approved site content

| Content | File |
|---|---|
| Headlines, introduction, brand story, email, Instagram, production URL | `src/data/siteContent.ts` |
| Menu categories, verified items, prices | `src/data/menu.ts` |
| Stall addresses, schedules, maps links | `src/data/locations.ts` |
| Optional approved seasonal feature | `src/data/seasonal.ts` |
| Extra approved social links | `src/data/socials.ts` |
| Illustrations to replace with real photography | `public/images/` |
| Provisional brand symbol/wordmark | `src/components/layout/Wordmark.tsx` |
| Interactive cup scene & branding | `src/components/3d/CoffeeCupModel.tsx` |
| Typography, spacing, colours | `src/app/globals.css` |

**To add a menu item:** Open `src/data/menu.ts`, find the relevant category, and populate `items` with objects such as `{ name: 'Client-approved name', description: 'Approved description', price: 'Approved UK price' }`. All empty categories currently render an explicit coming-soon notice rather than invented products.

**To add a stall:** Open `src/data/locations.ts` and insert `{ id, name, address, tradingDays, openingHours, mapsUrl, status }`. Confirm the accuracy of the supplied Google Maps directions URL. The Find Us page automatically switches from empty state to cards.

**To enable enquiries:** Update `siteContent.contact.email` with the confirmed business email; the Contact page and footer will automatically create a `mailto:` link. For Instagram, add its approved URL and handle.

**To replace the brand:** The mark shown is a provisional decorative typographic identity. Supply the actual client-approved SVG/PNG logo and replace the Wordmark component and 3D sleeve artwork accordingly. Keep the exact name **EARTH BEEN COFFEE**.

**Photography:** The November 2026 refresh includes locally hosted, optimized WebP concept photography for the featured drinks and hero fallback. Some visuals are AI-generated; they are not evidence of the actual drinks, team, or physical location. Obtain client approval or replace with genuine brand photography before a public launch. No external image-hosting dependency is required.

## 3D implementation

- Built from real Three.js meshes: tapered cup body, materialized paper sleeve, embossed-looking lid, beans, lighting and shadows. The sleeve's provisional print is produced with a `CanvasTexture`.
- Pointer and scroll changes are eased in `useFrame` rather than using scroll hijacking.
- Scene is lazy-loaded and omitted on older memory-constrained devices, when WebGL fails initial capability detection, or when reduced-motion is requested.
- Static fallback: `public/images/hero-fallback-editorial.webp`, displayed while WebGL is unavailable, the 3D bundle loads, or reduced motion is enabled.
- To use a client-supplied Blender/GLB model later, load it with `useGLTF('/models/cup.glb')`, optimize textures, and test for mobile performance.

## Production deployment

### Vercel (recommended for ease of handover)

1. Push the extracted project folder into a repository.
2. In Vercel, **Add New Project** → import repository → framework **Next.js**.
3. Configure deployment root to `earth-been-coffee-3d` if this is a subfolder of your repository.
4. Build command: `npm run build`; output handling: default Next.js setting.
5. Deploy and test all routes, WebGL fallback and mobile screens.
6. Add the client's verified domain under Vercel **Domains** and set DNS as instructed by the host.
7. Add `siteContent.siteUrl` (e.g. verified production https URL), replace all provisional text/assets, update SEO, and remove the draft-stage `noindex` in `src/app/layout.tsx` **only after client review and content approval**.

### Other Node.js hosting

Run `npm install && npm run build && npm run start` behind your HTTPS reverse proxy. Make sure your environment supports Node 20.9+ and correct port routing.

## Scope / exclusions

Frontend only. No backend, database, ordering, cart, checkout, user accounts, customer submissions, analytics or mailing list. Contact links use `mailto:` once the real business email is supplied. No fake confirmation messages or backend submissions are present.

## Validation status

Project source was structurally inspected, TypeScript/TSX parsed with the TypeScript compiler, SVG illustrations XML-validated and converted for manual art review, and all static preview routes/assets checked. **A full Next.js package install and production build were not executed in the creation environment because external npm access was unavailable.** Please run the commands above for final integration verification before showing as production-ready.

## Approval / handover checklist

See [`docs/CLIENT_APPROVAL_CHECKLIST.md`](docs/CLIENT_APPROVAL_CHECKLIST.md).


## 2026 Photography-first visual refresh

The revised frontend now uses **original AI-generated editorial concept photography**, stored locally as WebP images in `public/images/`. These images have **no text, logo, or brand-label overlays**. They are design mockups and should not be represented as photographs of real Earth Been Coffee products, team, stalls, or verified locations.

**Live pages:** Home, Our Story, Menu, Find Us, Contact. Three.js/React Three Fiber cup remains interactive on supported devices; `hero-cup.webp` is the reduced-motion/unsupported-device fallback. The source menu catalog is in `src/data/menu.ts`; approved business details go in `src/data/siteContent.ts` and `src/data/locations.ts`.

**Offline preview:** Open `preview/index.html` after extracting the ZIP. This previews the layout and local images but not WebGL 3D.

**To run:** `npm install`, `npm run dev`, open `http://localhost:3000`. To deploy: `npm run build`, then `npm run start`, or use Vercel with the Next.js preset.

**Client approval required before launch:** official logo/branding, verified product menu and prices, actual stall addresses and trading hours, approved social accounts and business email, and replacement of concept imagery with real product/location photography if the client wishes.


See [VISUAL_REFRESH_NOTES.md](VISUAL_REFRESH_NOTES.md) for the full 3 November 2026 image and 3D hero update.
# Earth-Been-Coffe
