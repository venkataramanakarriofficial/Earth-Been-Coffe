# Earth Been Coffee — Client review notes (18 Nov 2026)

## Targeted issues from the supplied screenshots

| Screenshot issue | Change made in code |
|---|---|
| Repetitive latte/matcha/hot chocolate images looking synthetic | Homepage feature cards now use separate real-source coffee photographs; the generated-looking EBC logo cup is no longer shown in these cards |
| The same coffee-table photo re-used as a cropped iced drink | Two independent photo sources now support the wide coffee moment and the tall iced-drink image |
| Invented AI storefront presented as Earth Been's real shop | Removed fictional shop-front photo from the homepage, Find Us and other live layouts. A neutral photographic coffee-bar view replaces it |
| Menu hero dominated by an artificial paper cup | New photo-led hero featuring a barista plus an editorial sticker and clearer text |
| Menu lacks appeal and rhythm | New high-impact four-category photo navigation, readable drinks and bakes, dedicated iced feature, clear visit CTA, and subtle responsive motion |
| Intro shows an oversized generated cup | Rebuilt as shorter typography-and-real-barista-image animation; skips after first visit in session, respects reduced-motion |

## Deliberately unchanged

- Owner-provided EBC brand mark and menu boards
- Eight original menu categories and every product name in `src/data/menu.ts`
- Business address/phone, Google Maps directions and site navigation routes
- No fabricated prices, opening hours, product descriptions or discount claims

## Review checklist (manual browser QA after dependency installation)

- Home: logo visible; intro runs once per session; Skip intro works; first render doesn't block content
- Home: distinct photos at **Find your happy sip**, **Coffee tastes better**, and **Come say hello**
- Menu: `/menu` opens; photo links jump to coffee, matcha, iced and sweet categories; all menu items present; original drinks & sweets boards open
- Visit: address and maps links correct; no fake physical storefront photo
- Mobile: 390px viewport; no cropped text, horizontal overflow or offscreen nav; sticky menu category links remain clickable
- Type checking and production `npm run build` succeed after `npm ci`

## Environment / image delivery caution

This package was updated and syntax checked in a restricted environment without access to npm registry or external photograph downloads. The photography download step is included in prebuild/predev, but photo downloads and full browser QA must be run in a network-enabled development/CI environment before giving final client sign-off. All photo sources are genuine photographer pages; **they are stock images, not client-supplied venue or product photographs**.
