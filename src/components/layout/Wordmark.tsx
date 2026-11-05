import Link from 'next/link';

export default function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return <Link href="/" className={`brand-lockup ${inverted ? 'brand-lockup--light' : ''}`} aria-label="Earth Been Coffee — home">
    <span className="brand-icon" aria-hidden="true"><svg viewBox="0 0 52 52" fill="none"><path d="M13 26c0 12 7 19 17 19s18-7 18-19V19H13v7Z" stroke="currentColor" strokeWidth="2.2"/><path d="M48 23h2c5 0 5 12-4 12M13 22h35M9 47h36M26 2c-7 5 7 7 0 14M35 4c-5 4 5 6 0 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg></span>
    <span className="brand-name">EARTH BEEN <span>COFFEE</span></span>
  </Link>;
}
