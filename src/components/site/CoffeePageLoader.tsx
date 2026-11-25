'use client';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import Photo from './Photo';

const INTRO_KEY='earthbeen_intro_editorial_seen_v3';
type Opening='none'|'intro'|'leaving'|'cup';
export default function CoffeePageLoader(){
 const pathname=usePathname();
 const initialPath=useRef(pathname);
 const initialized=useRef(false);
 const [opening,setOpening]=useState<Opening>('none');
 const dialog=useRef<HTMLDialogElement>(null);
 const skipButton=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(initialized.current)return;
  initialized.current=true;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let seen=false;
  try{seen=sessionStorage.getItem(INTRO_KEY)==='1';}catch{}
  if(initialPath.current==='/'&&!seen){
   try{sessionStorage.setItem(INTRO_KEY,'1');}catch{}
   setOpening('intro');
  }else{setOpening('cup');}
 },[]);
 useEffect(()=>{
  if(opening==='none')return;
  const timer=window.setTimeout(()=>setOpening(opening==='intro'?'leaving':'none'),opening==='intro'?2700:opening==='leaving'?700:1000);
  return()=>window.clearTimeout(timer);
 },[opening]);
 const introActive=opening==='intro'||opening==='leaving';
 useEffect(()=>{
  if(!introActive)return;
  const modal=dialog.current;
  if(!modal)return;
  modal.showModal();
  skipButton.current?.focus({preventScroll:true});
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  return()=>{if(modal.open)modal.close();document.body.style.overflow=previousOverflow;};
 },[introActive]);
 useEffect(()=>{if(pathname!==initialPath.current)setOpening('none');},[pathname]);
 if(introActive)return <dialog ref={dialog} className={`eb-intro${opening==='leaving'?' eb-intro--leave':''}`} aria-label="Earth Been Coffee opening" onCancel={event=>{event.preventDefault();setOpening('leaving');}}>
  <div className="eb-intro-photo"><Photo photo="craft" alt="" loading="eager"/></div><div className="eb-intro-shade" aria-hidden="true"/>
  <div className="eb-intro-content"><span className="eb-intro-eyebrow"><span className="eb-intro-line"/>FROM OUR CORNER OF DALSTON</span><div className="eb-intro-title">GOOD<br/><em>COFFEE.</em></div><div className="eb-intro-bottomline"><span>GOOD COMPANY. GOOD DAYS.</span><span className="eb-intro-asterisk">✳</span><span>EARTH BEEN COFFEE</span></div></div>
  <button ref={skipButton} className="eb-intro-skip" type="button" onClick={()=>setOpening('leaving')}>SKIP INTRO <span aria-hidden="true">↗</span></button><div className="eb-intro-progress" aria-hidden="true"/>
 </dialog>;
 if(opening==='cup')return <div className="coffee-transition coffee-transition--active" aria-hidden="true"><div className="coffee-transition__content"><span className="coffee-transition__eyebrow">EARTH BEEN COFFEE</span><div className="coffee-transition__cup"><img src="/images/earth-been-cup-transparent.webp" alt="" width={878} height={1164} fetchPriority="high"/></div><div className="coffee-transition__status">BREWING YOUR NEXT MOMENT</div><div className="coffee-transition__progress"><span/></div></div></div>;
 return null;
}
