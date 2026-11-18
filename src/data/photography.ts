/**
 * Real photographic sources selected from Unsplash (see docs/REAL_PHOTOGRAPHY_SOURCES.md).
 * Images are illustrative stock photography, NOT photographs of the Earth Been premises.
 * The download script caches them locally for fast production loading; if downloads fail,
 * Photo gracefully tries the source photo and finally an existing local fallback.
 */
export const photography = {
  barista: {
    file: 'barista-serving.jpg',
    remote: 'https://images.unsplash.com/photo-1770123024494-776bc2d3836b?auto=format&fit=crop&w=1500&q=83',
    fallback: '/images/about-latte-moment.png',
  },
  craft: {
    file: 'barista-craft.jpg',
    remote: 'https://images.unsplash.com/photo-1777600714584-8e8452389b9b?auto=format&fit=crop&w=1500&q=83',
    fallback: '/images/cafe-interior.webp',
  },
  latte: {
    file: 'ceramic-latte.jpg',
    remote: 'https://images.unsplash.com/photo-1760687510681-2f0cdd1f1ebb?auto=format&fit=crop&w=1400&q=85',
    fallback: '/images/editorial-latte.webp',
  },
  matcha: {
    file: 'matcha.jpg',
    remote: 'https://images.unsplash.com/photo-1779381637013-30b00a2b7d5e?auto=format&fit=crop&w=1400&q=83',
    fallback: '/images/editorial-matcha.webp',
  },
  chocolate: {
    file: 'hot-chocolate.jpg',
    remote: 'https://images.unsplash.com/photo-1497048363455-6f3e84db1cae?auto=format&fit=crop&w=1400&q=83',
    fallback: '/images/hot-chocolate.webp',
  },
  iced: {
    file: 'iced-coffee.jpg',
    remote: 'https://images.unsplash.com/photo-1527156231393-7023794f363c?auto=format&fit=crop&w=1400&q=83',
    fallback: '/images/iced-coffee.webp',
  },
  coldBrew: {
    file: 'cold-brew.jpg',
    remote: 'https://images.unsplash.com/photo-1765690835487-8da60d318d0f?auto=format&fit=crop&w=1400&q=83',
    fallback: '/images/london-iced-latte.webp',
  },
  cafe: {
    file: 'cafe-interior.jpg',
    remote: 'https://images.unsplash.com/photo-1780248347686-8437db00b375?auto=format&fit=crop&w=1600&q=84',
    fallback: '/images/cafe-interior.webp',
  },
  pastry: {
    file: 'bakery-pastries.jpg',
    remote: 'https://images.unsplash.com/photo-1769259180150-4a4528fcb222?auto=format&fit=crop&w=1400&q=84',
    fallback: '/images/coffee-pastries.webp',
  },
  croissant: {
    file: 'coffee-croissant.jpg',
    remote: 'https://images.unsplash.com/photo-1769138886135-93d1dd8ac06a?auto=format&fit=crop&w=1500&q=84',
    fallback: '/images/coffee-pastries.webp',
  },
  coffeeMoment: {
    file: 'coffee-pastries.jpg',
    remote: 'https://images.unsplash.com/photo-1754147910442-47abda520b0e?auto=format&fit=crop&w=1600&q=83',
    fallback: '/images/coffee-table.webp',
  },
  coffeeBar: {
    file: 'coffee-bar.jpg',
    remote: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=83',
    fallback: '/images/cafe-interior.webp',
  },
} as const;
export type PhotoKey = keyof typeof photography;
