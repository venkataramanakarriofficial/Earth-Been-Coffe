import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export default function NotFound(){return <section className="not-found"><h1>We spilled <em>the beans.</em></h1><p>This page isn&apos;t on the menu.</p><Link href="/" className="button green">Back home <ArrowUpRight size={18}/></Link></section>}
