# 18 Nov 2026 — Source verification

## Automated checks completed
- All 22 TypeScript and TSX files were parsed by the TypeScript compiler with zero syntax diagnostics.
- The 664-line stylesheet parsed without top-level CSS errors; opening/closing braces match.
- All 12 real-photo source references and local fallback paths are present in `src/data/photography.ts`; fallback files exist, and the downloader contains all corresponding filenames.
- All eight original menu categories and all item names remain in `src/data/menu.ts`.
- All internal homepage/menu anchor links have corresponding static or dynamically generated category IDs.
- The official navbar monogram and both original menu board files are retained.

## Not verifiable in this restricted environment
- External Unsplash downloads (network DNS is unavailable). Use `npm run photos:download` with internet access and confirm a 12/12 success message.
- `npm ci` / complete Next.js production build (npm package access unavailable).
- Responsive browser screenshots (headless browser launch did not complete in the sandbox).

**Client-approval requirement:** Check real photographs, crop, layout and motion on a network-connected machine before production sign-off. Photos are genuine Unsplash stock images but are **not photographs of the actual Earth Been café**.
