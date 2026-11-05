import Link from 'next/link';
export default function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return <Link href="/" aria-label="Earth Been Coffee, go to homepage" className={`wordmark ${inverted ? 'wordmark-light' : ''}`}>
    <span className="wordmark-symbol" aria-hidden="true"><i></i><i></i><i></i></span>
    <span className="wordmark-text">EARTH BEEN<span>COFFEE</span></span>
  </Link>;
}
