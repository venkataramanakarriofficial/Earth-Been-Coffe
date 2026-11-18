import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowDownRight,ArrowRight,ArrowUpRight,Leaf,MapPin} from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import Photo from '@/components/site/Photo';
import {alternativeMilks,menuSections} from '@/data/menu';

export const metadata:Metadata={
 title:'Our Menu',
 description:'Browse the actual Earth Been Coffee drinks and sweet treats menu: espresso, matcha, iced drinks, croissants and bakes. No invented prices.',
};
const highlights=[
 {no:'01',title:'Coffee classics',note:'THE DAILY RITUAL',photo:'latte' as const,to:'#hot-coffee'},
 {no:'02',title:'Matcha moments',note:'A LITTLE SLOWER',photo:'matcha' as const,to:'#hot-coffee'},
 {no:'03',title:'Iced favourites',note:'CHILLED & LOVELY',photo:'iced' as const,to:'#iced-drinks'},
 {no:'04',title:'Something sweet',note:'ONE MORE BITE',photo:'pastry' as const,to:'#sweets'},
];

export default function Menu(){
 const drinks=menuSections.find(s=>s.id==='drinks')!;
 const sweets=menuSections.find(s=>s.id==='sweets')!;
 return <>
  <section className="menu-2026-hero" aria-labelledby="menu-page-heading">
   <div className="container menu-2026-hero-grid">
    <Reveal className="menu-2026-hero-copy">
     <p className="micro-label">01 / THE EARTH BEEN MENU</p>
     <h1 id="menu-page-heading">A cup for<br/><em>every mood.</em></h1>
     <p>First-coffee-of-the-day people. Iced-coffee-all-year people. Just-here-for-a-croissant people. You&apos;re all welcome.</p>
     <a className="button button-green" href="#menu-explore">FIND YOUR FAVOURITE <ArrowDownRight size={18}/></a>
     <div className="menu-2026-hero-signoff"><span>GOOD COFFEE</span><span className="menu-2026-star">✳</span><span>GOOD MOMENTS</span></div>
    </Reveal>
    <div className="menu-2026-hero-photo image-hover">
     <Photo photo="barista" alt="Barista offering a freshly made latte with delicate foam art" loading="eager" fetchPriority="high" />
     <div className="menu-2026-photo-sticker"><span>MADE WITH</span><strong>care.</strong><span>EVERY DAY ✳</span></div>
     <span className="menu-2026-photo-caption">THE GOOD PART OF YOUR DAY / NO. 01</span>
    </div>
   </div>
  </section>

  <section id="menu-explore" className="menu-2026-discover" aria-label="Explore the menu categories">
   <div className="container">
    <div className="menu-2026-discover-head"><p className="micro-label">PICK YOUR LITTLE RITUAL</p><span>WHAT ARE YOU IN THE MOOD FOR? <ArrowDownRight size={17}/></span></div>
    <div className="menu-2026-highlights">{highlights.map(item=><a key={item.no} href={item.to} className="menu-2026-highlight">
     <div className="menu-2026-highlight-photo"><Photo photo={item.photo} alt={`${item.title} photography`} loading="lazy" /></div>
     <div className="menu-2026-highlight-info"><span>{item.no} / {item.note}</span><div><strong>{item.title}</strong><ArrowUpRight size={21}/></div></div>
    </a>)}</div>
   </div>
  </section>

  <div className="menu-2026-anchor-wrap"><nav className="container menu-2026-anchor-nav" aria-label="Jump to menu sections">
   <a href="#drinks">COFFEE &amp; DRINKS <ArrowUpRight size={14}/></a><a href="#sweets">BAKED &amp; SWEET <ArrowUpRight size={14}/></a><a href="#visit">FIND US <ArrowUpRight size={14}/></a>
  </nav></div>

  <section id="drinks" className="menu-2026-section menu-2026-drinks section-pad" aria-labelledby="drinks-title">
   <div className="container">
    <Reveal className="menu-2026-section-head"><div><p className="micro-label">02 / SOMETHING TO SIP</p><h2 id="drinks-title" className="display-title">The good <em>stuff.</em></h2></div><p>Warm, iced, familiar or a little adventurous. There&apos;s a drink for whatever the day feels like.</p></Reveal>
    <div className="menu-2026-drinks-grid">
     <Reveal className="menu-2026-drinks-photo">
      <Photo photo="craft" alt="Barista at work preparing fresh espresso on a café coffee machine" loading="lazy" />
      <span className="menu-2026-vertical">THE LITTLE DAILY RITUAL — EARTH BEEN COFFEE</span>
      <div className="menu-2026-photo-note">A good day starts<br/><em>somewhere.</em></div>
     </Reveal>
     <div className="menu-2026-drinks-list">
      {drinks.categories.map((category,index)=><Reveal key={category.id} delay={index*60}>
       <section id={category.id} className="menu-2026-category" aria-labelledby={`${category.id}-title`}>
        <header className="menu-2026-category-heading"><span>{category.number.padStart(2,'0')}</span><h3 id={`${category.id}-title`}>{category.name}</h3><span className="menu-2026-category-asterisk">✳</span></header>
        <ul>{category.items.map(item=><li key={item}><span>{item}</span><span aria-hidden="true" className="menu-2026-item-dash"/></li>)}</ul>
       </section>
      </Reveal>)}
     </div>
    </div>
    <div className="menu-2026-milks"><Leaf size={22}/><div><strong>YOUR COFFEE, YOUR WAY</strong><span>Alternative milks: {alternativeMilks.join(' · ')}</span></div><span>JUST ASK AT THE COUNTER</span></div>
   </div>
  </section>

  <section className="menu-2026-visual-break" aria-label="A little coffee inspiration">
   <div className="menu-2026-visual-break-photo"><Photo photo="iced" alt="Real photograph of a refreshing iced latte in a glass" loading="lazy" /></div>
   <div className="menu-2026-visual-break-copy"><p className="micro-label micro-label--light">SLOW DOWN. SIP UP.</p><h2>Some days call<br/>for <em>something iced.</em></h2><a href="#iced-drinks" className="inline-arrow">SEE OUR ICED DRINKS <ArrowUpRight size={18}/></a></div>
  </section>

  <section id="sweets" className="menu-2026-section menu-2026-sweets section-pad" aria-labelledby="sweets-title">
   <div className="container">
    <Reveal className="menu-2026-section-head"><div><p className="micro-label">03 / THE SWEET SIDE</p><h2 id="sweets-title" className="display-title">One more <em>bite.</em></h2></div><p>Something warm and buttery. Something chocolatey. Something you&apos;ll wish you&apos;d ordered two of.</p></Reveal>
    <div className="menu-2026-sweets-body">
     <div className="menu-2026-sweets-categories">{sweets.categories.map((category,index)=><Reveal key={category.id} delay={(index%2)*65}>
      <section id={category.id} className="menu-2026-category menu-2026-sweet-category" aria-labelledby={`${category.id}-title`}>
       <header className="menu-2026-category-heading"><span>{category.number.padStart(2,'0')}</span><h3 id={`${category.id}-title`}>{category.name}</h3></header>
       <ul>{category.items.map(item=><li key={item}><span>{item}</span><span aria-hidden="true" className="menu-2026-item-dash"/></li>)}</ul>
      </section>
     </Reveal>)}</div>
     <Reveal className="menu-2026-sweets-photo image-hover"><Photo photo="croissant" alt="A fresh croissant alongside a cup of coffee on a café table" loading="lazy"/><span>BEST PAIRED WITH YOUR FAVOURITE CUP ✳</span></Reveal>
    </div>
    <div className="menu-2026-boards"><p>Prefer the café&apos;s original menu boards?</p><div><a href={drinks.board} target="_blank" rel="noopener noreferrer">VIEW THE DRINKS BOARD <ArrowUpRight size={16}/></a><a href={sweets.board} target="_blank" rel="noopener noreferrer">VIEW THE SWEETS BOARD <ArrowUpRight size={16}/></a></div></div>
    <p className="menu-2026-disclaimer">Items and availability may change. Please ask in store for current prices and allergen information.</p>
   </div>
  </section>

  <section className="menu-2026-visit" id="visit">
   <div className="menu-2026-visit-photo"><Photo photo="coffeeMoment" alt="Coffee and sweet treats on a café table" loading="lazy"/></div>
   <div className="container menu-2026-visit-content"><p className="micro-label micro-label--light">04 / COME SAY HELLO</p><h2>Your favourite<br/>cup is <em>waiting.</em></h2><p><MapPin size={18}/> 69 Ridley Road, Dalston, London E8 2NP</p><Link href="/find-us" className="button button-cream">FIND YOUR WAY HERE <ArrowUpRight size={19}/></Link></div>
  </section>
 </>;
}
