import { Navigation2 } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

/** Google Maps destination shared with the existing Find Us and Contact pages. */
export default function DirectionsFloat() {
  return (
    <a
      className="directions-float"
      href={siteContent.address.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get directions to Earth Been Coffee in Google Maps (opens in a new tab)"
      title="Get directions to Earth Been Coffee"
    >
      <span className="directions-float__hint" aria-hidden="true">Get directions</span>
      <Navigation2 aria-hidden="true" strokeWidth={2.2} />
    </a>
  );
}
