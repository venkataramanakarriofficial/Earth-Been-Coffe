import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'A thoughtful introduction to Earth Been Coffee, a London speciality beverage brand.',
};

export default function StoryPage() {
  return (
    <>
      <section className="inner-hero story-inner-hero">
        <div className="page-width">
          <SectionLabel number="01">THE STORY SO FAR</SectionLabel>
          <div className="inner-hero-grid">
            <div>
              <h1>
                More than
                <br />
                a coffee <em>break.</em>
              </h1>
            </div>
            <p className="inner-hero-side">
              The little everyday rituals have a way of making the biggest difference. This is a
              space for ours.
            </p>
          </div>
        </div>
      </section>
      <section className="story-feature page-width">
        <Reveal className="story-feature-art">
          <img src="/images/slow-morning.webp" alt="Editorial coffee moment with pastry and journal" />
        </Reveal>
        <Reveal className="story-feature-copy">
          <span className="eyebrow">THE FEELING BEHIND THE CUP</span>
          <h2>{siteContent.story.headline}</h2>
          <p>{siteContent.story.body}</p>
          <p>{siteContent.story.second}</p>
          <Link href="/menu" className="text-arrow">
            EXPLORE OUR DRINKS <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>
      <section className="manifesto">
        <div className="page-width">
          <SectionLabel number="02" light>
            WHAT WE WANT TO FEEL LIKE
          </SectionLabel>
          <Reveal>
            <h2>
              Warm welcomes.
              <br />
              <em>Slow moments.</em>
              <br />
              Something good in every day.
            </h2>
          </Reveal>
          <p>
            Provisional brand language — final origin, sourcing and values copy to be supplied from
            the approved brand deck.
          </p>
        </div>
      </section>
    </>
  );
}
