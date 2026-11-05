import Hero from '@/components/home/Hero';
import StoryPreview from '@/components/home/StoryPreview';
import FeaturedDrinks from '@/components/home/FeaturedDrinks';
import LocationPreview from '@/components/home/LocationPreview';
import GalleryStrip from '@/components/home/GalleryStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="brand-photo-interlude" aria-label="Coffee and conversation photography">
        <div className="brand-photo-image"><img src="/images/coffee-tasting-table.webp" alt="Speciality latte, iced coffee and matcha photographed in a warm editorial triptych" loading="lazy" /></div>
        <div className="brand-photo-note"><span>THE DRINKS WE LOVE</span><strong>A little pause.<br />A lot to savour.</strong></div>
      </section>
      <StoryPreview />
      <FeaturedDrinks />
      <GalleryStrip />
      <section className="quote-section">
        <div className="page-width">
          <p>SMALL RITUALS. BIG DIFFERENCE.</p>
          <h2>
            There&apos;s always time for <em>one good cup.</em>
          </h2>
          <span>✳</span>
        </div>
      </section>
      <LocationPreview />
    </>
  );
}
