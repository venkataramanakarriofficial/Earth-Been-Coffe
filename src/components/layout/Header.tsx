'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Wordmark from './Wordmark';
const nav = [['Home','/'],['Menu','/menu'],['Visit Us','/find-us']] as const;
export default function Header(){
 const pathname=usePathname();
 return <header className="site-header"><div className="container header-inner"><Wordmark/><nav aria-label="Main navigation" className="main-nav">{nav.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?'page':undefined}>{label}</Link>)}</nav></div></header>;
}
