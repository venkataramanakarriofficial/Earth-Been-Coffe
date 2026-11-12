import Link from 'next/link';
import { ArrowUpRight, Coffee } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
const nav = [['Home','/'],['Our Menu','/menu'],['Our Story','/our-story'],['Find Us','/find-us'],['Contact','/contact']] as const;
export default function Footer(){return <footer className="site-footer">
 <div className="container footer-main">
  <div className="footer-topline"><span>THE LAST SIP IS NEVER REALLY THE LAST.</span><Coffee size={24}/></div>
  <div className="footer-feature"><p>COME FOR THE COFFEE.<br/>STAY FOR THE <em>FEELING.</em></p><Link href="/menu" className="footer-round-link" aria-label="Explore our menu"><ArrowUpRight size={32}/></Link></div>
  <div className="footer-columns">
   <div className="footer-brand"><p className="footer-brand-message">Savor the world, <em>one cup at a time.</em></p></div>
   <div><span className="footer-column-label">EXPLORE</span>{nav.map(([label,url])=><Link key={url} href={url}>{label}</Link>)}</div>
   <div><span className="footer-column-label">SAY HELLO</span><a href={siteContent.contact.phoneHref}>{siteContent.contact.phoneDisplay}</a><a href={siteContent.address.mapsUrl} target="_blank" rel="noopener noreferrer">69 Ridley Road, London E8 2NP ↗</a></div>
  </div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} EARTH BEEN COFFEE</span><span>CRAFTED FOR YOUR DAILY COFFEE BREAK</span><a href="#top">BACK TO TOP ↑</a></div>
 </div>
 </footer>}
