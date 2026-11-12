import type { Metadata } from 'next';
import { ArrowUpRight, MapPin, Coffee, Phone } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { locations } from '@/data/locations';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
 title: 'Find Us',
 description: 'Find Earth Been Coffee at 69 Ridley Road, Dalston, London E8 2NP. Open our Google Maps directions or call +44 7763 076666.',
};

export default function FindUs(){return <>
 <section className="subhero subhero-visit"><div className="container subhero-layout">
  <div><p className="micro-label">03 / FIND US</p><h1>Good coffee.<br/>Good <em>company.</em></h1><p>Come and find your new favourite coffee stop in Dalston.</p></div>
  <div className="subhero-photo"><img src="/images/cafe-exterior.webp" alt="Welcoming café storefront"/></div>
 </div></section>
 <section className="locations-body section-pad"><div className="container">
  <div className="find-location-grid">
   <Reveal className="find-location-details"><p className="micro-label">COME SAY HELLO</p><h2 className="display-title">Find us in <em>Dalston.</em></h2>
    {locations.map(location=><div className="find-location-info" key={location.id}>
      <div className="find-location-info-row"><MapPin size={24}/><div><h3>{location.name}</h3><p>{siteContent.address.street}<br/>{siteContent.address.locality}<br/>United Kingdom</p></div></div>
      <div className="find-location-info-row"><Phone size={24}/><div><h3>Call us</h3><a href={siteContent.contact.phoneHref}>{siteContent.contact.phoneDisplay}</a></div></div>
      <a className="button button-green" href={location.mapsUrl} target="_blank" rel="noopener noreferrer">OPEN GOOGLE MAPS <ArrowUpRight size={18}/></a>
    </div>)}
   </Reveal>
   <Reveal className="find-map-card" delay={100}>
    <iframe title="Map showing Earth Been Coffee, 69 Ridley Road, London" src="https://www.google.com/maps?q=69%20Ridley%20Road%2C%20London%20E8%202NP&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
    <div className="find-map-caption"><MapPin size={20}/><span>69 RIDLEY ROAD, LONDON E8 2NP</span><a href={siteContent.address.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Earth Been Coffee in Google Maps"><ArrowUpRight size={21}/></a></div>
   </Reveal>
  </div>
 </div></section>
 <section className="find-us-signoff"><Coffee size={30}/><p>Wherever we meet, <em>let&apos;s make it a good one.</em></p></section>
 </>}
