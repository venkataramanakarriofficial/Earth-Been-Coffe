import type {Metadata} from 'next';
import {ArrowUpRight, MapPin, Phone, MessageCircle, Navigation} from 'lucide-react';
import {siteContent} from '@/data/siteContent';
import {locations} from '@/data/locations';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Locations',
  description: 'Find both Earth Been Coffee locations and get directions in Google Maps.',
};

export default function FindUs() {
  const whatsapp = `https://wa.me/${siteContent.contact.phoneHref.replace(/\D/g, '')}`;

  return (
    <section className="visit-page section" id="contact">
      <div className="container">
        <p className="eyebrow">COME SAY HELLO</p>
        <h1>Find your <em>nearest coffee.</em></h1>
        <p className="visit-intro">Choose the location that works for you and open it directly in Google Maps.</p>

        <div className="locations-grid">
          {locations.map((location, index) => (
            <article className="location-card" key={location.id}>
              {location.embedUrl ? (
                <iframe
                  title={`Map of Earth Been Coffee at ${location.name}`}
                  src={location.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="location-card__visual" aria-hidden="true">
                  <span><Navigation size={34}/></span>
                  <p>Open the map for the exact location</p>
                </div>
              )}
              <div className="location-card__content">
                <p className="location-card__label">{index === 0 ? 'DALSTON' : 'NEW LOCATION'}</p>
                <h2>{location.name}</h2>
                <p>{location.address}</p>
                <a className="button green" href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin size={18}/> View on Google Maps <ArrowUpRight size={17}/>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="visit-contact-strip">
          <div><Phone size={21}/><span><strong>Call us</strong><a href={siteContent.contact.phoneHref}>{siteContent.contact.phoneDisplay}</a></span></div>
          <div><MessageCircle size={21}/><span><strong>Questions?</strong><a href={whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></span></div>
          <Link href="/menu" className="text-link">Browse our menu <ArrowUpRight size={16}/></Link>
        </div>
      </div>
    </section>
  );
}
