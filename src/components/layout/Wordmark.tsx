import Link from 'next/link';

/** Compact, transparent version of the owner's EBC brand mark for the cream navigation. */
export default function Wordmark() {
  return (
    <Link href="/" className="brand-lockup brand-lockup--official" aria-label="Earth Been Coffee — Home">
      <img
        className="brand-mark-image"
        src="/images/earth-been-navbar-monogram.png"
        alt=""
        width={737}
        height={224}
        decoding="async"
      />
      <span className="brand-word-lines" aria-hidden="true">
        <span className="brand-line-primary">EARTH BEEN</span>
        <span className="brand-line-secondary">COFFEE</span>
      </span>
    </Link>
  );
}
