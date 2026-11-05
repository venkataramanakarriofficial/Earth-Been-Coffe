# Earth Been Coffee — Premium Café Website

A complete, responsive visual redesign for **Earth Been Coffee**, inspired by the supplied forest-green / cream / café-brown palette and floating coffee-cup reference. Built with Next.js 15, React 19, TypeScript, and custom CSS.

## Start locally

```bash
npm ci
npm run dev
```

Visit http://localhost:3000. For production run `npm run build && npm start`.

## What's included

- Full-screen branded **opening animation** with the supplied floating coffee cup and beans, animated reveal, and Skip intro button. It plays once per browser tab session; respects Reduced Motion.
- Fully redesigned **Home, Menu, Our Story, Find Us, Contact**, and 404 pages.
- Coordinated photographic and type styling using forest green `#18463B`, parchment `#FAEBD8`, and coffee brown `#6D4D40`.
- Responsive navigation, working internal pages and category anchors, animated editorial sections, accessible skip link and mobile navigation.
- Optimised static WebP images. No heavy 3D/WebGL download required to view the opening.

## Important before publishing

**No fake addresses, prices, deals or social handles were invented.** The reference poster is a design reference, not a verified Earth Been Coffee promotion. To publish real contact details, edit `src/data/siteContent.ts`. To publish confirmed venues and hours, edit `src/data/locations.ts`; to add verified menu items and prices, edit `src/data/menu.ts` and the menu display accordingly.

Until the actual domain is configured, `src/app/robots.ts` excludes indexing and the sitemap is empty. Once approved, configure `siteUrl` in `src/data/siteContent.ts` and change `robots` in `src/app/layout.tsx` to `{ index: true, follow: true }`. The current `/public/og-image.jpg` is retained from the supplied project and can be replaced with an approved social card.

Images included in the original project are retained as brand-consistent editorial photography. The transparent floating cup asset was cut from the reference supplied by the user to provide a light, smooth opening animation.
