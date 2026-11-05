'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import Intro from './Intro';

const CoffeeScene = dynamic(() => import('@/components/3d/CoffeeScene'), {
  ssr: false,
  loading: () => (
    <div className="cup-fallback">
      <img src="/images/hero-fallback-editorial.webp" alt="Earth Been Coffee premium takeaway cup" />
    </div>
  ),
});

export default function Hero() {
  return (
    <>
      <Intro />
      <section className="hero" aria-labelledby="hero-heading">
        
        <div className="hero-shell page-width">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="tiny-star">✳</span>
              {siteContent.hero.eyebrow}
            </p>
            <h1 id="hero-heading">
              <span>{siteContent.hero.headlineTop}</span>
              <em>{siteContent.hero.headlineAccent}</em>
              <span>{siteContent.hero.headlineBottom}</span>
            </h1>
            <p className="hero-description">{siteContent.hero.description}</p>
            <div className="hero-actions">
              <Link href="/menu" className="btn btn-cream">
                EXPLORE THE MENU <ArrowUpRight size={17} />
              </Link>
              <Link href="/our-story" className="hero-text-link">
                OUR STORY <span>↗</span>
              </Link>
            </div>
            <div className="hero-note-card">
              <img src="/images/slow-morning.webp" alt="A warm morning coffee scene" />
              <div>
                <span>THE EVERYDAY RITUAL</span>
                <p>A good moment can begin with something as simple as a cup of coffee.</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-ring" aria-hidden="true" />
            <CoffeeScene />
            <div className="hero-cup-kicker" aria-hidden="true"><span>01 / THE SIGNATURE CUP</span><i/>A little pause, beautifully made.</div>
          </div>
          <a href="#story" className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={17} />
          </a>
          <div className="hero-side-note">
            MADE WITH INTENTION <span>✳</span> LONDON
          </div>
        </div>
      </section>
    </>
  );
}
