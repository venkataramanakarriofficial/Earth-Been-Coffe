# Earth Been Coffee — Mobile Layout Refinement (19 November 2026)

Updated from the **latest supplied `earth-been-coffee-3d (4).zip`**. This is a focused responsive design update: the desktop appearance and main functionality were intentionally preserved.

## Mobile changes

- Removed the brown promotional slogan strip above the navigation **at screen widths of 900px and below only**. It remains visible on desktop.
- Kept the real Earth Been Coffee logo in the cream navigation bar and adjusted the mobile menu overlay to start immediately below the navbar (76px tablet / 68px phone), with no stale 28px gap.
- Rebuilt the homepage **About / Not just coffee** section for phones and tablets: full-width, readable content first; one clean, large café photograph below. Removed the crowded sticker, overlapping secondary photograph, and narrow two-column layout on mobile.
- Rebuilt the homepage **Visit / There's always room for one more** section: full-width title, description, address and Find Us button followed by a wide café photograph. Removed the floating brown circular note **on mobile only**.
- Corrected the cascade conflict where late desktop grid rules were overriding mobile single-column rules.
- Adjusted mobile headings, section spacing, photographs, and location text. Improved narrow screen widths while keeping all navigation, routes, images, menu data and copy intact.

## Validation

- Representative HTML layout using the **actual project stylesheet and bundled images** checked in headless Chromium at widths **320, 360, 390, 430, 500, 650, 768, 820, 900, 1024 and 1440px**.
- At all tested widths, document width was equal to viewport width (no page-level horizontal overflow).
- Up to 900px: top strip hidden; About and Visit sections were full-width stacked layouts with text above images.
- At 1024px and above: announcement strip and original side-by-side desktop layouts remained intact.
- CSS stylesheet parsed without errors; TS/TSX source syntax validated.
- **Full Next.js build and site-wide runtime testing were not run here.** Please run `npm ci`, `npm run build`, `npm run dev` and verify the actual deployed website before client sign-off.

## Local startup

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`. Deploy the updated source to Vercel when ready.
