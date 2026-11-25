'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import Wordmark from './Wordmark';
import {siteContent} from '@/data/siteContent';

const nav = [['Home','/'],['Our Menu','/menu'],['Visit Us','/find-us']] as const;
export default function Header(){
 const pathname=usePathname();
 const whatsapp=`https://wa.me/${siteContent.contact.phoneHref.replace(/\D/g,'')}`;
 return <>
  <div className="announcement"><span>GOOD COFFEE. GOOD COMPANY. GOOD DAYS.</span><span className="announcement-star" aria-hidden="true">✳</span><span>YOUR DAILY LITTLE RITUAL</span></div>
  <header className="site-header"><div className="container header-inner"><Wordmark/><nav aria-label="Main navigation" className="main-nav">{nav.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?'page':undefined}>{label}</Link>)}</nav><a className="header-cta" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Let's talk on WhatsApp (opens in a new tab)">LET’S TALK <ArrowUpRight size={16}/></a></div></header>
 </>;
}
