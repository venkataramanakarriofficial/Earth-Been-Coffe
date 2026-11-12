import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Leaf } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { alternativeMilks, menuSections } from '@/data/menu';

export const metadata: Metadata = {
 title: 'Our Menu',
 description: 'Explore the Earth Been Coffee menu: espresso, lattes, tea, iced drinks, muffins, Danish pastries, croissants, cookies and baked treats.',
};

export default function Menu() {
 return <>
  <section className="subhero subhero-menu">
    <div className="container subhero-layout">
      <div><p className="micro-label">01 / OUR MENU</p><h1>Something good<br/>in <em>every sip.</em></h1>
        <p>Beautiful coffee, refreshing drinks and something sweet for every kind of moment.</p>
      </div>
      <div className="subhero-photo"><img src="/images/coffee-table.webp" alt="Coffee and freshly baked treats arranged on a café table"/></div>
    </div>
  </section>
  <div className="category-tabs-wrap">
    <nav className="container category-tabs" aria-label="Menu sections">
      <a href="#drinks">Drinks</a><a href="#sweets">Sweets</a><a href="#menu-boards">Menu Boards</a>
    </nav>
  </div>
  {menuSections.map((section,index)=><section key={section.id} id={section.id} className={`menu-details menu-details--${section.id} section-pad`}>
    <div className="container">
      <Reveal className="menu-details-heading"><div><p className="micro-label">0{index+1} / THE MENU</p><h2 className="display-title">{section.name === 'Drinks' ? <>Your favourite <em>sips.</em></> : <>Something <em>sweet.</em></>}</h2></div><p>{section.subtitle}</p></Reveal>
      <div className={`menu-group-grid menu-group-grid--${section.id}`}>
        {section.categories.map((category,i)=><Reveal key={category.id} delay={(i%2)*90}>
          <article className="menu-group-card" id={category.id}>
            <div className="menu-group-heading"><span>{category.number}</span><h3>{category.name}</h3></div>
            <ul className="menu-item-list">{category.items.map(item=><li key={item}><span>{item}</span></li>)}</ul>
          </article>
        </Reveal>)}
      </div>
      {section.id==='drinks'&&<div className="milk-options"><Leaf size={20} aria-hidden="true"/><strong>ALTERNATIVE MILKS</strong><span>{alternativeMilks.join('  ·  ')}</span></div>}
    </div>
  </section>)}
  <section className="menu-board-section section-pad" id="menu-boards"><div className="container">
    <Reveal className="menu-board-heading"><p className="micro-label micro-label--light">EARTH BEEN COFFEE</p><h2>Our menu <em>boards.</em></h2></Reveal>
    <div className="menu-board-grid">
      {menuSections.map((section,i)=><Reveal delay={i*100} key={section.id}>
        <a className="menu-board-card" href={section.board} target="_blank" rel="noopener noreferrer" aria-label={`Open ${section.name} menu board at full size`}>
          <img src={section.board} alt={`Official Earth Been Coffee ${section.name.toLowerCase()} menu board`} loading="lazy"/>
          <span>{section.name} <ArrowUpRight size={19}/></span>
        </a>
      </Reveal>)}
    </div>
  </div></section>
  <section className="catalog-outro"><div className="container"><span>✳</span><h2>Whatever the day brings,<br/><em>there&apos;s a cup for that.</em></h2><Link className="button button-cream" href="/find-us">COME FIND US <ArrowUpRight size={17}/></Link></div></section>
 </>;
}
