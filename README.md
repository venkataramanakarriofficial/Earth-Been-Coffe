# Earth Been Coffee — Premium Café Website (Complete Redesign)

This is the **complete website source**, updated directly from the latest Earth Been Coffee project ZIP. Built with **Next.js 15, React 19, TypeScript and CSS**.

## What changed in this version

- The desktop and mobile navbar is **warm cream** with dark forest-green branding, links, and a contrasting green contact button.
- The homepage hero was rebuilt around a **new high-resolution branded cup with floating coffee beans**, constrained inside the right-side composition so it no longer crowds the typography or crops awkwardly. The old hero image is not used.
- **12 cohesive new photo / product assets** are now included in `public/images`, all served as compressed WebP files. Existing photos were removed from this project rather than leaving orphaned originals.
- Homepage imagery, three drink cards, the café-story sections, editorial lifestyle photography, and Find Us are updated. The **Menu, Our Story, Find Us, and Contact** pages now use the new asset set too.
- The **opening animation is deliberately preserved**. It continues to use the supplied `public/images/floating-cup.webp`, exactly as before. It plays once per browser session and includes Skip Intro.
- Removed unused React Three Fiber / Drei / Three packages from package.json and refreshed package-lock.json. The animation is lightweight CSS and images, not WebGL.
- The old Next.js build output and all node_modules are excluded from the distributable ZIP.

## Getting started

Requires **Node.js 22**.

```bash
npm ci
npm run dev
```

Visit `http://localhost:3000` to view the site.

Production validation:

```bash
npm run build
npm start
```

## Deploying to GitHub / Vercel

1. Extract the ZIP. The app lives in the `earth-been-coffee` folder.
2. Replace the previous app source with the extracted files, **including deleting obsolete files**. Do not just add new files over an old repository, because that leaves tracked legacy files in Git.
3. From the repository root, commit file deletions too:

```bash
git add -A
git commit -m "Premium café redesign: new imagery, cream navbar, responsive hero"
git push origin main
```

If the earlier repository still contains old `src/components/3d`, `src/components/home` or `src/components/ui` directories that are not part of this ZIP, remove them before committing; they are no longer used.

## Where to edit future content

- Business contact: `src/data/siteContent.ts`
- Location details: `src/data/locations.ts`
- Menu category data: `src/data/menu.ts`
- Navigation: `src/components/layout/Header.tsx`
- Homepage content: `src/app/page.tsx`
- Photography: `public/images/`

The example visuals are concept imagery and should not be treated as documentary photos of an actual shop. Prices, addresses, hours, deals and order URLs are not invented. Confirm business details before publishing them.

## Verification

The image references, WebP assets, JavaScript/TypeScript/JSX syntax, CSS syntax, and lockfile consistency were checked. Full `next build` could not run in the offline project environment because npm dependencies could not be fetched. Run `npm ci && npm run build` locally or let Vercel validate the final deployment.
