import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Wordmark from './Wordmark';
import { siteContent } from '@/data/siteContent';
const links = [['Our Story', '/our-story'], ['The Menu', '/menu'], ['Find Us', '/find-us'], ['Contact', '/contact']];
export default function Footer() {
  return <footer className="footer"><div className="page-width">
    <div className="footer-top"><p className="eyebrow">STAY A LITTLE LONGER</p><Link href="/contact" className="footer-headline">Let’s make something <em>good.</em><ArrowUpRight size={38} strokeWidth={1}/></Link></div>
    <div className="footer-grid">
      <div><Wordmark inverted/><p className="footer-note">A good day starts with a little pause.<br/>London · United Kingdom</p></div>
      <div><span className="footer-label">EXPLORE</span>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div><span className="footer-label">SAY HELLO</span>{siteContent.contact.email ? <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a> : <Link href="/contact">Enquiries & partnerships</Link>}{siteContent.contact.instagramUrl && <a href={siteContent.contact.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>}</div>
      <div className="footer-orbit" aria-hidden="true"><span>EB</span><span>★</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} EARTH BEEN COFFEE. ALL RIGHTS RESERVED.</span><span>DESIGNED WITH INTENTION · MADE TO FEEL GOOD.</span></div>
  </div></footer>;
}
