# Authentic photography sources — 18 November 2026

The imagery in this refresh comes from **real photographers' Unsplash photo pages**, chosen instead of generative AI scene imagery. The originals are marked free to use under the [Unsplash License](https://unsplash.com/license). Attribution is not mandatory under the standard Unsplash License but is recorded here as good practice.

These are **illustrative licensed stock photos only**, not photographs of Earth Been Coffee's real café, products, customers or employees. Do not use them as evidence of the actual venue's appearance or of specific menu-product appearance. The original EBC logo and original menu board images are preserved as genuine owner-provided assets.

| File downloaded into `public/images/real/` | Subject | Photographer / original image |
|---|---|---|
| `barista-serving.jpg` | Barista offering a latte | Yasin Onus — https://unsplash.com/photos/veteUUqkLhg |
| `barista-craft.jpg` | Barista preparing espresso | wenbin sia — https://unsplash.com/photos/QJlRAfWND2Y |
| `ceramic-latte.jpg` | Latte art in ceramic cup | Raymond Petrik — https://unsplash.com/photos/rhgVuPbOZOc |
| `matcha.jpg` | Hot and iced matcha | Phil Hearing — https://unsplash.com/photos/PHfkkpes3uQ |
| `hot-chocolate.jpg` | Hot chocolate cup | Rachael Gorjestani — https://unsplash.com/photos/RqBoo_uHIl4 |
| `iced-coffee.jpg` | Iced latte | Eiliv Aceron — https://unsplash.com/photos/_tSgUmeYMm8 |
| `cold-brew.jpg` | Iced cold brew | Yazid N — https://unsplash.com/photos/MxVNVFI_q2A |
| `cafe-interior.jpg` | Café interior | Adrien Olichon — https://unsplash.com/photos/NSntnP6lJuc |
| `bakery-pastries.jpg` | Cinnamon buns and pastries | Phil Hearing — https://unsplash.com/photos/dhGTYNrZTEA |
| `coffee-croissant.jpg` | Croissant with coffee | Unsplash contributor — https://unsplash.com/photos/iZMC8UlNg4Y |
| `coffee-pastries.jpg` | Coffee and pastries | Katja Ano — https://unsplash.com/photos/aA4ylcBwNmE |
| `coffee-bar.jpg` | Café atmosphere | Unsplash — https://unsplash.com/photos/coffee-shop-interior (corresponding photo ID in `src/data/photography.ts`) |

The local cache runs via `npm run photos:download`, and automatically during `npm run dev` and `npm run build`. If the image host denies a download, the app displays a live CDN URL or a packaged placeholder, so the content stays usable even with image-network problems.

## Recommended before client approval

1. Run `npm run photos:download` from an internet-enabled machine and verify that **all 12** photo files are downloaded (with zero failures). Open each local file and approve its subject and crop.
2. Check hero and menu photo crops on desktop/tablet/mobile, including the once-per-session opening animation.
3. Replace stock photographs with approved Earth Been Coffee photography when available, especially for the business/visit experience. No photography in this ZIP should be described as the actual shop exterior.
