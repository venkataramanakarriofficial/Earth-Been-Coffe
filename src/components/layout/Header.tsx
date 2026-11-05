'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import Wordmark from './Wordmark';
const nav = [ ['Our Story', '/our-story'], ['The Menu', '/menu'], ['Find Us', '/find-us'] ] as const;
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return <>
    <header className="site-header"><div className="nav-container">
      <Wordmark/>
      <nav aria-label="Primary" className="desktop-nav">
        {nav.map(([label,url]) => <Link key={url} href={url} aria-current={path === url ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <Link className="nav-contact" href="/contact">Say hello <ArrowUpRight size={16}/></Link>
      <button className="mobile-menu-button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)}>{open ? <X size={24}/> : <MenuIcon size={24}/>}</button>
    </div></header>
    <nav id="mobile-nav" aria-label="Mobile navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} inert={!open}>
      {[...nav, ['Contact', '/contact'] as const].map(([label,url], i) => <Link key={url} href={url} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}<ArrowUpRight size={22}/></Link>)}
      <small>GOOD COFFEE. GOOD COMPANY. LONDON.</small>
    </nav>
  </>;
}
