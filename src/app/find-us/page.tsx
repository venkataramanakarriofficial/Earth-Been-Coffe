import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Clock3 } from 'lucide-react';
import { locations } from '@/data/locations';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Find Us',
  description: 'Find Earth Been Coffee stalls in London. Verified addresses and trading hours will be available here.',
};

export default function FindUsPage() {
  return (
    <>
      <section className="inner-hero location-hero">
        <div className="page-width">
          <SectionLabel number="01">COME SAY HELLO</SectionLabel>
          <div className="inner-hero-grid">
            <h1>
              A little closer
              <br />
              than you <em>think.</em>
            </h1>
            <p className="inner-hero-side">
              Good cups, warm welcomes and a good reason to take the scenic route.
            </p>
          </div>
        </div>
      </section>
      <div className="page-width find-us-content">
        {locations.length ? (
          <div className="location-cards">
            {locations.map((loc) => (
              <article key={loc.id} className="location-card">
                <p className="eyebrow">{loc.status === 'open' ? 'NOW POURING' : 'COMING SOON'}</p>
                <h2>{loc.name}</h2>
                <p>
                  <MapPin size={18} />
                  {loc.address}
                </p>
                <p>
                  <Clock3 size={18} />
                  {loc.tradingDays} · {loc.openingHours}
                </p>
                {loc.status === 'open' && (
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-arrow">
                    GET DIRECTIONS <ArrowUpRight size={18} />
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-locations">
            <Reveal className="empty-locations-art">
              <img src="/images/london-coffee-cart.webp" alt="Premium London coffee stall scene" />
            </Reveal>
            <Reveal className="empty-locations-copy">
              <span className="eyebrow">LONDON · UNITED KINGDOM</span>
              <h2>
                See you <em>soon,</em> London.
              </h2>
              <p>
                We&apos;re getting our locations ready for you. Confirmed stall addresses, opening days
                and trading hours will appear here as soon as they&apos;re available.
              </p>
              <div className="location-mini">
                <MapPin size={18} />
                <span>VERIFIED ADDRESSES COMING SOON</span>
              </div>
              <Link href="/contact" className="text-arrow">
                GET IN TOUCH <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        )}
      </div>
    </>
  );
}
