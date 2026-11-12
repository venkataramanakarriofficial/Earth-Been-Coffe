import Link from 'next/link';

/** The logo supplied by Earth Been Coffee is used across the website. */
export default function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return <Link href="/" className={`brand-lockup brand-lockup--official ${inverted ? 'brand-lockup--light' : ''}`} aria-label="Earth Been Coffee — home">
    <img className="brand-logo-image" src="/images/earth-been-official-logo.jpg" alt="EBC Earth Been Coffee" width={220} height={92} />
  </Link>;
}
