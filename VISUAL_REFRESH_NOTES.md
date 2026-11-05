# Earth Been Coffee — Visual & 3D refresh (3 November 2026)

## What changed

- **Hero 3D:** Rebuilt the actual Three.js paper cup. A tapered lathed body replaces the old simplistic straight cylinder. The lid now has multiple molded levels, a rolled edge and drinking aperture. Added tactile paper texture, refined studio lighting, improved floating coffee beans and a calmer pointer/scroll rotation. Repositioned the WebGL camera and hero container for a complete, better-proportioned cup on desktop, tablet and mobile.
- **Sleeve branding:** Replaced the incorrectly wrapped/repeated text texture with a custom single centered Earth Been Coffee wordmark on a deep-forest-green sleeve (with the smaller backside mark for a rotating 3D object). Corrected sleeve radii so the texture appears above the tapered cup instead of intersecting it.
- **New images:** Created locally hosted WebP artwork for speciality latte, ceremonial matcha, whipped hot chocolate and London iced coffee, plus a cinematic three-image editorial band. No remote image URLs or third-party image API are needed at runtime.
- **Fallback cup:** Added a polished locally hosted product image for devices that don't support WebGL, for reduced-motion preferences and during WebGL loading.
- **Homepage:** Updated featured category cards, gallery photography, coffee interlude, story visual and café location image. Removed internal art-direction text from the visible drink-section description.
- **Inner pages:** Updated Menu, Our Story, Find Us and page-cover photos to match the visual direction.
- **Static preview:** Synchronized `preview/*.html` photo references with the updated artwork. The static preview uses a photograph in place of the interactive canvas by design.

## Unchanged

- **Opening animation remains as supplied**: its timing, sequence, session flag and original intro artwork were preserved.
- Existing routes and navigation structure; data-driven menu categories; contact/location placeholders and business content have not been invented or published.

## How to run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To verify the actual WebGL cup, use the live Next.js page rather than the static HTML preview.

## Validation & limits

- Checked the TS/TSX source for syntax errors using the TypeScript 5.8.3 transpiler (27 files; no parsing errors).
- Verified all new local image assets and referenced paths.
- A full `next build` **could not be run** in the authoring environment: npm's required packages were not cached and the external registry could not be accessed. Run `npm install && npm run build` in your normal development environment before deployment.
- This is a **design concept**. Some images are original AI-generated concept photography; the café/cart scene and brand images do not certify real sites or menu items. Before launch, obtain final brand/product approval and official addresses/details.
