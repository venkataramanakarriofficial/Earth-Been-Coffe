'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import Photo from './Photo';

const INTRO_KEY='earthbeen_intro_editorial_seen_v3';
export default function IntroSequence(){
 const pathname=usePathname();
 const [visible,setVisible]=useState(false);
 const [leaving,setLeaving]=useState(false);
 useEffect(()=>{
  if(pathname!=='/')return;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced||sessionStorage.getItem(INTRO_KEY))return;
  setVisible(true);
  document.body.classList.add('intro-lock');
  const timer=window.setTimeout(()=>{sessionStorage.setItem(INTRO_KEY,'1');setLeaving(true);},2700);
  return ()=>{window.clearTimeout(timer);document.body.classList.remove('intro-lock');};
 },[pathname]);
 useEffect(()=>{
  if(!leaving)return;
  document.body.classList.remove('intro-lock');
  const timer=window.setTimeout(()=>setVisible(false),720);
  return ()=>window.clearTimeout(timer);
 },[leaving]);
 const skip=()=>{sessionStorage.setItem(INTRO_KEY,'1');setLeaving(true)};
 if(!visible||pathname!=='/')return null;
 return <div className={`eb-intro ${leaving?'eb-intro--leave':''}`} aria-label="Earth Been Coffee opening" role="dialog" aria-modal="true">
  <div className="eb-intro-photo"><Photo photo="craft" alt="" loading="eager" /></div>
  <div className="eb-intro-shade" aria-hidden="true"/>
  <div className="eb-intro-content">
   <span className="eb-intro-eyebrow"><span className="eb-intro-line"/>FROM OUR CORNER OF DALSTON</span>
   <div className="eb-intro-title">GOOD<br/><em>COFFEE.</em></div>
   <div className="eb-intro-bottomline"><span>GOOD COMPANY. GOOD DAYS.</span><span className="eb-intro-asterisk">✳</span><span>EARTH BEEN COFFEE</span></div>
  </div>
  <button className="eb-intro-skip" type="button" onClick={skip}>SKIP INTRO <span aria-hidden="true">↗</span></button>
  <div className="eb-intro-progress" aria-hidden="true"/>
 </div>;
}
