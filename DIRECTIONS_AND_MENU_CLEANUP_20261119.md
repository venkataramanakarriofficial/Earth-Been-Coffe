# Earth Been Coffee — Menu cleanup and floating directions (19 Nov 2026)

Updated from the latest user-uploaded `earth-been-coffee-3d (3)(1).zip`.

- Removed the **GOOD COFFEE ✳ GOOD MOMENTS** signoff beneath the main Menu hero CTA.
- Removed the vertical **THE LITTLE DAILY RITUAL — EARTH BEEN COFFEE** overlay from the coffee-machine photograph.
- Added an accessible **Directions** floating icon above the existing WhatsApp button on every page, linking to the same Google Maps URL used by Contact and Find Us.
- Kept the existing WhatsApp button, coffee-cup loading transition, website content, desktop/mobile layout, photographs, and navigation unchanged.
- Directions uses a deep-green icon button with a Google Maps-related navigation arrow, a desktop hover label, a mobile-friendly 52 px tap area, safe-area offsets, keyboard focus, and reduced-motion support.

## Local verification

```bash
npm ci
npm run lint:types
npm run build
```

Inspect home and `/menu` at a mobile screen width after installation, and test the floating directions link on both desktop and mobile.
