# Earth Been Coffee — Homepage / scrolling refinement (19 November 2026)

This update is based on the supplied `earth-been-coffee-3d (3).zip` project. All site routes, contact details, menu items, photographs, and branding have been retained.

## Changes

- **Homepage hero:** Removed the angled cream floating label with “THE GOOD CUP / Made for your moment”. Removed the “MADE FOR THE MOMENTS THAT MATTER” signature, plus the extra floating handmade-moments badge.
- **Photo treatment:** Kept the barista photograph fully visible inside a refined, upright rounded-arch frame with gentle loading animation and subtle image shading.
- **Scrolling:** Corrected desktop column sizes in About, Visit, Find Us and inner-page heroes to account for grid gaps; removed marquee transforms that could extend beyond the viewport. Prevented horizontal page scrolling while preserving vertical mouse-wheel, touch, and keyboard scrolling. Native page scrollbar tracks are visually hidden; the mobile menu's category tabs still support horizontal swipe.
- **Responsiveness:** Added dedicated refinements for desktop, tablet, and mobile viewports. Kept the opening sequence, navigation, photo sources, menu and other content intact.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Build for Vercel with `npm run build`.

## Validation

- TypeScript and TSX parser: all project source files passed syntax parsing.
- CSS: stylesheet parsed without errors.
- Visual layout preview (representative HTML using the project stylesheet and supplied photos): checked at 360, 390, 430, 820, 1024, 1280, and 1680px widths; no page-level horizontal overflow observed.
- 12/12 real photography files are bundled in `public/images/real`, so the normal build does not need to download them again.
- A full Next.js production build and end-to-end browser run could not be completed in this environment because the npm registry was unavailable. Please perform those checks before publishing.
