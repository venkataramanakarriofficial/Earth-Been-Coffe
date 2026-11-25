'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Wordmark from './Wordmark';
import { siteContent } from '@/data/siteContent';

const nav = [['Home', '/'], ['Our Menu', '/menu'], ['Visit Us', '/find-us']] as const;
const whatsapp = `https://wa.me/${siteContent.contact.phoneHref.replace(/\D/g, '')}`;

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setIsOpen(false); }, [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    closeOnDesktop();
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('nav-open');
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);
  return <>
    <div className="announcement"><span>GOOD COFFEE. GOOD COMPANY. GOOD DAYS.</span><span className="announcement-star" aria-hidden="true">✳</span><span>YOUR DAILY LITTLE RITUAL</span></div>
    <header className="site-header">
      <div className="site-header-inner container">
        <Wordmark />
        <nav className="nav-desktop" aria-label="Main navigation">
          {nav.map(([label, url]) => <Link key={url} href={url} className={pathname === url ? 'is-active' : ''} aria-current={pathname === url ? 'page' : undefined}>{label}</Link>)}
        </nav>
        <a href={whatsapp} className="header-cta" target="_blank" rel="noopener noreferrer" aria-label="Let's talk on WhatsApp (opens in a new tab)">LET’S TALK <ArrowUpRight size={16}/></a>
        <button ref={menuButton} type="button" className="hamburger" onClick={() => setIsOpen(v => !v)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-menu">{isOpen ? <X size={26}/> : <Menu size={26}/>}</button>
      </div>
    </header>
    <nav id="mobile-menu" className={`mobile-panel ${isOpen ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!isOpen}>
      {nav.map(([label, url], i) => <Link href={url} key={url} onClick={() => setIsOpen(false)} aria-current={pathname === url ? 'page' : undefined}><small>0{i + 1}</small>{label}<ArrowUpRight size={21}/></Link>)}
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} aria-label="Contact us on WhatsApp (opens in a new tab)"><small>04</small>Let’s Talk<ArrowUpRight size={21}/></a>
      <p>GOOD COFFEE IS ALWAYS A GOOD IDEA.</p>
    </nav>
  </>;
}
