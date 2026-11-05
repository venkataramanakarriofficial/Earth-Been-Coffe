import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { locations } from '@/data/locations';

export default function LocationPreview() {
  return (
    <section className="location-preview">
      <div className="page-width location-layout">
        <Reveal className="location-copy">
          <p className="eyebrow">03 / COME FIND YOUR MOMENT</p>
          <h2>
            Good coffee.
            <br />
            <em>Great company.</em>
            <br />
            Right here.
          </h2>
          <p>
            {locations.length
              ? 'Find us around London. Check where we are pouring next.'
              : 'We’re a London coffee brand. Our confirmed stall locations and trading times will be added here soon.'}
          </p>
          <Link className="btn btn-forest" href="/find-us">
            FIND US <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <Reveal className="location-visual location-visual-photo">
          <img
            src="/images/london-coffee-cart.webp"
            alt="Premium London coffee stall scene"
            loading="lazy"
          />
          
        </Reveal>
      </div>
    </section>
  );
}
