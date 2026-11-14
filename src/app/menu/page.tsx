import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Leaf } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { alternativeMilks, menuSections } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Our Menu',
  description: 'Explore Earth Been Coffee favourites, from espresso and matcha to iced drinks, pastries, cookies and baked treats.',
};

export default function Menu() {
  const drinks = menuSections.find(section => section.id === 'drinks')!;
  const sweets = menuSections.find(section => section.id === 'sweets')!;

  return <>
    <section className="menu-hero-clean" aria-labelledby="menu-page-heading">
      <div className="container menu-hero-clean-inner">
        <div className="menu-hero-clean-copy">
          <p className="micro-label">01 / OUR MENU</p>
          <h1 id="menu-page-heading">Good coffee.<br/><em>Great moments.</em></h1>
          <p>Whether it&apos;s your usual coffee, a refreshing iced drink or a little something sweet, find your next favourite here.</p>
          <a href="#drinks" className="inline-arrow">EXPLORE THE MENU <ArrowUpRight size={19}/></a>
        </div>
        <figure className="menu-hero-clean-image">
          <img src="/images/editorial-hot-chocolate.webp" alt="Hot chocolate in a paper takeaway cup displaying the Earth Been Coffee logo" fetchPriority="high" />
          <figcaption>THE GOOD CUP / EVERY DAY</figcaption>
        </figure>
      </div>
    </section>

    <div className="category-tabs-wrap">
      <nav className="container category-tabs" aria-label="Menu categories">
        <a href="#drinks">Coffee &amp; drinks</a>
        <a href="#sweets">Sweet treats</a>
        <a href="#visit">Come visit</a>
      </nav>
    </div>

    <section id="drinks" className="menu-book menu-book--drinks section-pad" aria-labelledby="drinks-title">
      <div className="container">
        <Reveal className="menu-book-heading">
          <div><p className="micro-label">01 / MADE TO SIP</p><h2 id="drinks-title" className="display-title">Your favourite <em>sips.</em></h2></div>
          <p>{drinks.subtitle} Pick the one that feels right today.</p>
        </Reveal>
        <div className="menu-book-layout">
          <Reveal className="menu-book-visual">
            <img src="/images/editorial-coffee-detail.webp" alt="Fresh latte with delicate foam art on a café table" loading="lazy" />
            <span>ONE GOOD CUP AT A TIME</span>
          </Reveal>
          <div className="menu-book-category-grid menu-book-category-grid--drinks">
            {drinks.categories.map((category,index) =>
              <Reveal key={category.id} delay={(index%2)*80}>
                <section className="menu-book-category" id={category.id} aria-labelledby={`${category.id}-title`}>
                  <div className="menu-book-category-title"><span>{category.number}</span><h3 id={`${category.id}-title`}>{category.name}</h3></div>
                  <ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul>
                </section>
              </Reveal>
            )}
          </div>
        </div>
        <div className="menu-book-milk"><Leaf size={21} aria-hidden="true"/><strong>ALTERNATIVE MILKS</strong><span>{alternativeMilks.join('  ·  ')}</span></div>
      </div>
    </section>

    <section id="sweets" className="menu-book menu-book--sweets section-pad" aria-labelledby="sweets-title">
      <div className="container">
        <Reveal className="menu-book-heading">
          <div><p className="micro-label">02 / BAKED &amp; BEAUTIFUL</p><h2 id="sweets-title" className="display-title">Something <em>sweet.</em></h2></div>
          <p>{sweets.subtitle} Choose your treat, then stay for a while.</p>
        </Reveal>
        <div className="menu-book-category-grid menu-book-category-grid--sweets">
          {sweets.categories.map((category,index) =>
            <Reveal key={category.id} delay={(index%3)*60}>
              <section className="menu-book-category" id={category.id} aria-labelledby={`${category.id}-title`}>
                <div className="menu-book-category-title"><span>{category.number}</span><h3 id={`${category.id}-title`}>{category.name}</h3></div>
                <ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul>
              </section>
            </Reveal>
          )}
        </div>
        <div className="menu-board-links" aria-label="Original menu boards">
          <span>Want to see the original café menu boards?</span>
          <a href={drinks.board} target="_blank" rel="noopener noreferrer">Drinks board <ArrowUpRight size={15}/></a>
          <a href={sweets.board} target="_blank" rel="noopener noreferrer">Sweets board <ArrowUpRight size={15}/></a>
        </div>
      </div>
    </section>

    <section className="menu-ending" id="visit">
      <div className="menu-ending-photo"><img src="/images/editorial-matcha-detail.webp" alt="Matcha latte with green foam art in a café setting" loading="lazy" /></div>
      <div className="menu-ending-content">
        <p className="micro-label micro-label--light">A LITTLE SOMETHING FOR EVERY MOOD</p>
        <h2>Made for the<br/><em>good part of your day.</em></h2>
        <p>Find us on Ridley Road, Dalston. We&apos;ll take care of the coffee.</p>
        <Link className="button button-cream" href="/find-us">FIND US <ArrowUpRight size={18}/></Link>
      </div>
    </section>
  </>;
}
