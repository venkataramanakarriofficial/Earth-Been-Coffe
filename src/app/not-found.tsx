import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export default function NotFound(){return <section className="not-found"><p className="micro-label">404 / A LITTLE DETOUR</p><h1>We spilled <em>the beans.</em></h1><p>This page isn&apos;t on the menu. Let&apos;s get you back to something good.</p><Link href="/" className="button button-green">BACK HOME <ArrowUpRight size={18}/></Link></section>}
