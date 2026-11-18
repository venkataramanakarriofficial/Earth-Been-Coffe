import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Coffee } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import Reveal from '@/components/site/Reveal';
import Photo from '@/components/site/Photo';

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Call Earth Been Coffee on +44 7763 076666 or visit us at 69 Ridley Road, London E8 2NP.',
};

export default function Contact() {return <>
 <section className="subhero subhero-contact"><div className="container subhero-layout">
  <div><p className="micro-label">04 / SAY HELLO</p><h1>Let&apos;s make<br/>something <em>good.</em></h1><p>For a coffee, a conversation or a friendly hello, we&apos;d love to hear from you.</p></div>
  <div className="subhero-photo"><Photo photo="craft" alt="Espresso being carefully prepared on a coffee machine"/></div>
 </div></section>
 <section className="contact-body section-pad"><div className="container contact-grid">
  <Reveal><p className="micro-label">WE&apos;RE ALL EARS</p><h2 className="display-title">Every great<br/>conversation<br/>starts <em>somewhere.</em></h2><p>We&apos;re just a call or a coffee away.</p><div className="contact-flower" aria-hidden="true">✳</div></Reveal>
  <Reveal delay={90}>
   <div className="contact-tile"><Phone size={24}/><span>01 / GIVE US A CALL</span><h3>Say hello.</h3><a href={siteContent.contact.phoneHref} className="inline-arrow">{siteContent.contact.phoneDisplay}<ArrowUpRight size={18}/></a></div>
   <div className="contact-tile"><Coffee size={24}/><span>02 / GET IN TOUCH</span><h3>Let&apos;s talk coffee.</h3><p>Questions, catering enquiries or collaborations? We&apos;d be happy to chat.</p><a href={siteContent.contact.phoneHref} className="inline-arrow">CALL EARTH BEEN COFFEE <ArrowUpRight size={18}/></a></div>
   <div className="contact-tile"><MapPin size={24}/><span>03 / COME VISIT</span><h3>Find your coffee moment.</h3><p>{siteContent.address.street}<br/>{siteContent.address.locality}</p><a href={siteContent.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-arrow">GET DIRECTIONS <ArrowUpRight size={18}/></a></div>
  </Reveal>
 </div></section>
 <section className="contact-menu-preview section-pad"><div className="container contact-menu-simple">
  <div><p className="micro-label">BEFORE YOU VISIT</p><h2 className="display-title">See what&apos;s <em>brewing.</em></h2><p>Explore our coffee, iced drinks and baked treats before you visit.</p></div>
  <Link className="button button-green" href="/menu">VIEW THE MENU <ArrowUpRight size={18}/></Link>
 </div></section>
 </>}
