import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { menuCategories } from '@/data/menu';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function FeaturedDrinks() {
  return (
    <section className="drinks-section" id="drinks">
      <div className="page-width">
        <Reveal>
          <div className="section-topline">
            <SectionLabel number="02">A LITTLE SOMETHING FOR EVERY MOOD</SectionLabel>
            <span>TAKE YOUR PICK, FIND YOUR MOMENT</span>
          </div>
          <div className="drinks-heading">
            <h2>
              What&apos;s your <em>usual?</em>
            </h2>
            <p>
              From the first morning pour to an afternoon pick-me-up, find your favourite little ritual.
            </p>
          </div>
        </Reveal>
        <div className="drinks-grid drinks-grid-wide">
          {menuCategories.slice(0, 4).map((item, index) => (
            <Reveal key={item.id} className="drink-reveal" delay={index * 0.08}>
              <Link className={`drink-card drink-${item.tint}`} href={`/menu#${item.id}`}>
                <div className="drink-art">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                  <span className="drink-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="drink-caption">
                  <span>{item.number} / THE COLLECTION</span>
                  <h3>{item.name}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="drinks-bottom">
            <p>DELICIOUSLY DIFFERENT. ALWAYS EARTHY.</p>
            <Link className="text-arrow" href="/menu">
              DISCOVER THE FULL MENU <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
