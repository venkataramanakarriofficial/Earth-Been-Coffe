import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, Instagram, MapPin } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to Earth Been Coffee about enquiries, collaborations, partnerships and trading opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <section className="inner-hero contact-hero">
        <div className="page-width">
          <SectionLabel number="01">GOOD THINGS BEGIN HERE</SectionLabel>
          <div className="inner-hero-grid">
            <h1>
              Let&apos;s make
              <br />
              something <em>good.</em>
            </h1>
            <p className="inner-hero-side">Have a question, an idea or just want to say hi? We&apos;re all ears.</p>
          </div>
        </div>
      </section>
      <section className="contact-layout page-width">
        <Reveal className="contact-left">
          <p className="eyebrow">PULL UP A CHAIR</p>
          <h2>{siteContent.contact.heading}</h2>
          <p>{siteContent.contact.intro}</p>
          <div className="contact-mark" aria-hidden="true">✳</div>
          <div className="contact-photo-card">
            <img src="/images/hero-cup.webp" alt="Editorial coffee cup close-up" loading="lazy" />
          </div>
        </Reveal>
        <Reveal className="contact-right">
          <div className="contact-detail">
            <Mail size={20} />
            <div>
              <span>01 / GENERAL & BUSINESS ENQUIRIES</span>
              {siteContent.contact.email ? (
                <a href={`mailto:${siteContent.contact.email}`}>
                  {siteContent.contact.email} <ArrowUpRight size={18} />
                </a>
              ) : (
                <p>Business email to be provided by the client.</p>
              )}
            </div>
          </div>
          <div className="contact-detail">
            <ArrowUpRight size={20} />
            <div>
              <span>02 / PARTNERSHIPS & COLLABORATIONS</span>
              <p>For events, brand partnerships and trading opportunities, please use the approved business email once added.</p>
            </div>
          </div>
          <div className="contact-detail">
            <Instagram size={20} />
            <div>
              <span>03 / SOCIAL</span>
              {siteContent.contact.instagramUrl ? (
                <a href={siteContent.contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {siteContent.contact.instagramHandle || 'Instagram'} <ArrowUpRight size={18} />
                </a>
              ) : (
                <p>Verified social links will be added soon.</p>
              )}
            </div>
          </div>
          <div className="contact-detail">
            <MapPin size={20} />
            <div>
              <span>04 / FIND US</span>
              <Link href="/find-us">
                London, UK · Our locations <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
