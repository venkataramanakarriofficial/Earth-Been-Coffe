import { Navigation2 } from 'lucide-react';
import Link from 'next/link';

/** Google Maps destination shared with the existing Find Us and Contact pages. */
export default function DirectionsFloat() {
  return (
    <Link
      className="directions-float"
      href="/find-us"
      aria-label="Choose an Earth Been Coffee location"
      title="Choose a location"
    >
      <span className="directions-float__hint" aria-hidden="true">Get directions</span>
      <Navigation2 aria-hidden="true" strokeWidth={2.2} />
    </Link>
  );
}
