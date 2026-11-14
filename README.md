# Earth Been Coffee — Website

Next.js 15 / React 19 / TypeScript. This is the updated source of the existing premium Earth Been Coffee website. Its design system, pages, and opening sequence are preserved.

## November 12, 2026 content update

- Incorporated the supplied official EBC logo in the navigation, homepage, and footer.
- Added the supplied branded takeaway-cup artwork as a transparent, web-optimised product cutout in the homepage hero and opening sequence. The original photo is also included for reference.
- Replaced provisional menu categories with the exact drinks and sweets from the provided menu boards.
- Changed **Banana Bar** to **Banana Bread Slices** in both the website's text menu and the displayed sweets menu board.
- Retained the supplied drinks and sweets menu boards as viewable full-size links on the Menu page.
- Added the business contact **+44 7763 076666** (click-to-call) and **69 Ridley Road, Dalston, London E8 2NP**, linked to the supplied Google Maps location, in Contact, Find Us, footer and homepage.
- The Find Us page now contains a map and a direct Google Maps link. Opening hours and menu prices are intentionally omitted because they were not supplied.
- Existing layout, animation, colour scheme and remaining site pages are retained except for the November 14 menu presentation and featured-image changes.

## November 14, 2026 menu quality update

- Replaced all three synthetic-looking homepage feature images with revised, locally bundled editorial visuals. A paper hot-chocolate cup now includes the genuine owner-supplied Earth Been Coffee logo artwork.
- Redesigned `/menu` as a clean editorial menu with **unboxed text lists**, grouped into all eight original categories and displaying all 41 original items without invented prices.
- Removed menu-board visual cards on the Menu page and menu-preview cards on the Contact page; preserved the original menu board files as plain text links on `/menu`.
- Removed unused superseded product-photo files from the source archive.
- Added `preview/menu.html`, `preview/menu-review.html`, and `preview/home-menu-review.html` as local style/layout references, and screenshot reviews in `docs/`.
- **Photo authenticity:** New imagery is AI-assisted illustrative artwork, not verified photographs of actual café products. For a client who requires non-AI photography, swap in client-supplied original product photos after approval.

## Start locally

Requires Node.js 22.

```bash
npm ci
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm ci
npm run build
npm start
```

For Vercel, import the project root and use the standard Next.js framework preset. The distribution ZIP excludes temporary Next.js output, Git history and `node_modules`.

## Content editing

- Menu item names: `src/data/menu.ts`
- Phone, address and official Google Maps URL: `src/data/siteContent.ts`
- Display location: `src/data/locations.ts`
- Menu board images and branding assets: `public/images/earth-been-*`

## Validation

The TS/TSX source has been syntax checked and local referenced assets checked. Static browser layout previews were reviewed at 1440px desktop and 390px mobile with no broken images or horizontal overflow. A full production Next.js build could not be completed here because npm package installation was unavailable; run `npm ci && npm run build` locally or via Vercel before deployment.


## Header logo revision
- The owner-supplied official EBC monogram is now in `public/images/earth-been-navbar-monogram.png` with a genuinely transparent background (not CSS blending). Cream original ink is changed to dark pine solely for legibility against the cream navigation bar.
- The navbar wordmark uses matching pine/copper colors and is accessible by its home link.
- The redundant homepage logo banner and footer JPEG were removed.
- All existing content, menu, contact details, branded product hero and animations remain unchanged.
