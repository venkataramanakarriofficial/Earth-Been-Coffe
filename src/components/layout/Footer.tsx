import Link from 'next/link';
import { ArrowUpRight, Coffee } from 'lucide-react';
import Wordmark from './Wordmark';
import { siteContent } from '@/data/siteContent';
const nav = [['Home','/'],['Our Menu','/menu'],['Our Story','/our-story'],['Find Us','/find-us'],['Contact','/contact']] as const;
export default function Footer(){return <footer className="site-footer">
 <div className="container footer-main">
  <div className="footer-topline"><span>THE LAST SIP IS NEVER REALLY THE LAST.</span><Coffee size={24}/></div>
  <div className="footer-feature"><p>COME FOR THE COFFEE.<br/>STAY FOR THE <em>FEELING.</em></p><Link href="/menu" className="footer-round-link" aria-label="Explore our menu"><ArrowUpRight size={32}/></Link></div>
  <div className="footer-columns">
   <div className="footer-brand"><Wordmark inverted/><p>A daily ritual, made a little more beautiful.<br/>Warm cups. Good company. Your moment.</p></div>
   <div><span className="footer-column-label">EXPLORE</span>{nav.map(([label,url])=><Link key={url} href={url}>{label}</Link>)}</div>
   <div><span className="footer-column-label">SAY HELLO</span>{siteContent.contact.email?<a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>:<Link href="/contact">Enquiries & collaborations</Link>}{siteContent.contact.instagramUrl&&<a href={siteContent.contact.instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>}<span className="footer-location">London, United Kingdom</span></div>
  </div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} EARTH BEEN COFFEE</span><span>CRAFTED FOR YOUR DAILY COFFEE BREAK</span><a href="#top">BACK TO TOP ↑</a></div>
 </div>
 </footer>}
