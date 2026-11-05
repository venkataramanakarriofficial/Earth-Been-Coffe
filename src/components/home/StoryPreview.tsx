import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { siteContent } from '@/data/siteContent';

export default function StoryPreview() {
  return (
    <section className="story-section" id="story">
      <div className="page-width">
        <SectionLabel number="01">THIS IS OUR KIND OF EVERYDAY</SectionLabel>
        <div className="story-layout story-layout-photo">
          <Reveal className="story-art-wrap">
            <div className="story-art story-art-photo">
              <img
                src="/images/slow-morning.webp"
                alt="Editorial coffee table with journal and pastry"
                loading="lazy"
              />
              
            </div>
            <p className="story-art-caption">01 — SLOWER MOMENTS, BETTER SIPS</p>
          </Reveal>
          <div className="story-left story-copy-panel">
            <Reveal>
              <p className="eyebrow">A MOMENT OF EVERYDAY JOY</p>
              <h2>
                Some things just <em>feel</em> right.
              </h2>
              <p className="story-body">{siteContent.story.body}</p>
              
              <Link href="/our-story" className="round-link">
                <span>GET TO KNOW US</span>
                <ArrowUpRight size={20} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
