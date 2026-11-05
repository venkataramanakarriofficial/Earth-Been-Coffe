'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Wordmark from './Wordmark';

const nav = [ ['Home', '/'], ['Our Menu', '/menu'], ['Our Story', '/our-story'], ['Find Us', '/find-us'] ] as const;
export default function Header() {
 const pathname = usePathname();
 const [isOpen, setIsOpen] = useState(false);
 useEffect(() => { setIsOpen(false); }, [pathname]);
 useEffect(() => {
   document.body.classList.toggle('nav-open', isOpen);
   return () => document.body.classList.remove('nav-open');
 }, [isOpen]);
 return <>
  <div className="announcement"><span>GOOD COFFEE. GOOD COMPANY. GOOD DAYS.</span><span className="announcement-star">✳</span><span>YOUR DAILY LITTLE RITUAL</span></div>
  <header className="site-header"><div className="site-header-inner container">
    <Wordmark inverted />
    <nav className="nav-desktop" aria-label="Main navigation">{nav.map(([label,url])=><Link key={url} href={url} className={pathname===url?'is-active':''} aria-current={pathname===url?'page':undefined}>{label}</Link>)}</nav>
    <Link href="/contact" className="header-cta">LET’S TALK <ArrowUpRight size={16}/></Link>
    <button type="button" className="hamburger" onClick={()=>setIsOpen(v=>!v)} aria-label={isOpen?'Close menu':'Open menu'} aria-expanded={isOpen} aria-controls="mobile-menu">{isOpen?<X size={26}/>:<Menu size={26}/>}</button>
  </div></header>
  <nav id="mobile-menu" className={`mobile-panel ${isOpen?'is-open':''}`} aria-label="Mobile navigation" inert={!isOpen}>
    {nav.map(([label,url],i)=><Link href={url} key={url} onClick={()=>setIsOpen(false)}><small>0{i+1}</small>{label}<ArrowUpRight size={21}/></Link>)}
    <Link href="/contact" onClick={()=>setIsOpen(false)}><small>05</small>Contact<ArrowUpRight size={21}/></Link>
    <p>GOOD COFFEE IS ALWAYS A GOOD IDEA.</p>
  </nav>
 </>;
}
