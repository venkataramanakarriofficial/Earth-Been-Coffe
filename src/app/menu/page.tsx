import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { menuCategories } from '@/data/menu';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
export const metadata: Metadata = { title: 'The Menu', description: 'Explore speciality coffee, matcha, hot chocolate, chai, iced drinks and seasonal categories at Earth Been Coffee.' };
export default function MenuPage() {
  return <><section className="inner-hero menu-hero"><div className="page-width"><SectionLabel number="01">DRINKS FOR EVERY KIND OF DAY</SectionLabel><div className="inner-hero-grid"><h1>Find your<br/><em>happy sip.</em></h1><p className="inner-hero-side">Whatever your mood, there&apos;s a little something here to make the day feel better. Browse our drink categories below.</p></div><div className="menu-tabs" aria-label="Menu categories">{menuCategories.map(category=><a key={category.id} href={`#${category.id}`}>{category.name}</a>)}</div></div></section>
  <div className="menu-list page-width"><div className="menu-disclosure" role="note"><span>✳</span><p>Menu preview: product categories and illustrative photography. Confirmed drink names, ingredients and prices will be added after client approval.</p></div>
    {menuCategories.map((category,index)=><section key={category.id} id={category.id} className={`menu-row ${index % 2 ? 'menu-row-reverse' : ''}`}><Reveal className="menu-image"><img src={category.image} alt={category.imageAlt} loading="lazy"/></Reveal><Reveal className="menu-row-copy"><span className="menu-index">{category.number} / 06</span><h2>{category.name}</h2><p>{category.subtitle}</p><div className="menu-items">{category.items.length ? category.items.map(item=><div className="menu-item" key={item.name}><div><strong>{item.name}</strong>{item.description && <span>{item.description}</span>}</div>{item.price && <span>{item.price}</span>}</div>) : <div className="menu-soon">THE FULL MENU IS COMING SOON <span>↗</span></div>}</div></Reveal></section>)}
  </div><div className="menu-closing page-width"><p>EVERY GOOD STORY STARTS SOMEWHERE.</p><h2>Shall we make yours<br/>a little <em>warmer?</em></h2><Link href="/find-us" className="btn btn-forest">FIND US <ArrowUpRight size={18}/></Link></div></>;
}
