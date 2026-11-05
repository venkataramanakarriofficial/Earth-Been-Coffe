import Reveal from '@/components/ui/Reveal';

const gallery = [
  {
    src: '/images/london-iced-latte.webp',
    alt: 'Sunlit iced latte overlooking the city',
    title: 'A little afternoon magic',
  },
  {
    src: '/images/slow-morning.webp',
    alt: 'Coffee and croissant with journal in a calm café setting',
    title: 'The slower morning',
  },
  {
    src: '/images/london-coffee-cart.webp',
    alt: 'London coffee stall in a premium street setting',
    title: 'Find us around town',
  },
];

export default function GalleryStrip() {
  return (
    <section className="gallery-strip">
      <div className="page-width">
        <Reveal>
          <div className="gallery-strip-head">
            <p className="eyebrow">04 / A FEELING IN THREE FRAMES</p>
            <h2>Made to feel <em>warm</em>, easy and memorable.</h2>
          </div>
        </Reveal>
        <div className="gallery-strip-grid">
          {gallery.map((item, index) => (
            <Reveal key={item.src} className="gallery-strip-card" delay={index * 0.08}>
              <div className="gallery-strip-media">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="gallery-strip-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.title}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
