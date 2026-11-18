# Earth Been Coffee — WhatsApp and customer cup transition

## New
- Floating WhatsApp action on every page, bottom-right, with an official green treatment, screen-reader label, visible focus state, hover label on desktop, and safe area spacing on phones.
- Number is read from `src/data/siteContent.ts` (the same telephone as the Contact page), formatted for WhatsApp `wa.me`. No duplicate contact number is stored in the floating component.
- Customer-supplied coffee cup used as centered branded loader on the initial document load/refresh and when following internal page links. The checkerboard background in the supplied JPEG has been removed; original cup/logo artwork is not redrawn or generated.
- Loader appears briefly, uses reduced-motion settings, and has a fallback timeout so an interrupted navigation does not leave the view obstructed.

## Test
1. `npm ci` then `npm run dev` and open the site at localhost:3000.
2. Reload Home, Menu, Story, Find Us and Contact to confirm the centered cup loader.
3. Tap internal navigation links to see the transition.
4. Tap WhatsApp and verify the destination is `https://wa.me/447763076666` with the preset greeting.
5. Test 360–430px phone widths and the mobile menu.

## Assets
`public/images/earth-been-cup-transparent.webp` is produced from the uploaded customer JPG. It keeps the original branding and avoids loading the JPG's baked-in checkerboard background.
