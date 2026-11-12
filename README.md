# Earth Been Coffee — Website

Next.js 15 / React 19 / TypeScript. This is the updated source of the existing premium Earth Been Coffee website. Its design system, pages, and opening sequence are preserved.

## November 12, 2026 content update

- Incorporated the supplied official EBC logo in the navigation, homepage, and footer.
- Added the supplied branded takeaway-cup artwork as a transparent, web-optimised product cutout in the homepage hero and opening sequence. The original photo is also included for reference.
- Replaced provisional menu categories with the exact drinks and sweets from the provided menu boards.
- Changed **Banana Bar** to **Banana Bread Slices** in both the website's text menu and the displayed sweets menu board.
- Added the supplied drinks and sweets menu board images as viewable full-size files on the Menu page, with menu-board previews after the Contact page details.
- Added the business contact **+44 7763 076666** (click-to-call) and **69 Ridley Road, Dalston, London E8 2NP**, linked to the supplied Google Maps location, in Contact, Find Us, footer and homepage.
- The Find Us page now contains a map and a direct Google Maps link. Opening hours and menu prices are intentionally omitted because they were not supplied.
- Existing layout, animation, colour scheme, photo assets and the remaining pages are retained.

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

The TS/TSX source has been syntax checked and local referenced assets checked. A full production Next.js build needs to run during deployment or in an environment where npm packages can be fetched; dependency installation was unavailable in this environment.


## Header logo revision
- The owner-supplied official EBC monogram is now in `public/images/earth-been-navbar-monogram.png` with a genuinely transparent background (not CSS blending). Cream original ink is changed to dark pine solely for legibility against the cream navigation bar.
- The navbar wordmark uses matching pine/copper colors and is accessible by its home link.
- The redundant homepage logo banner and footer JPEG were removed.
- All existing content, menu, contact details, branded product hero and animations remain unchanged.
