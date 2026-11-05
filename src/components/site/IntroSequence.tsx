'use client';
import { useEffect, useState } from 'react';

/** Full-screen, accessible, one-per-session branded opening. Never blocks navigation if motion is disabled. */
export default function IntroSequence(){
 const [visible,setVisible] = useState(true);
 const [leaving,setLeaving] = useState(false);
 useEffect(()=>{
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce || sessionStorage.getItem('earthbeen_intro_seen')) { setVisible(false); return; }
  setVisible(true);
  document.body.classList.add('intro-lock');
  const timer = window.setTimeout(()=>{setLeaving(true);sessionStorage.setItem('earthbeen_intro_seen','1');},3300);
  return ()=>{window.clearTimeout(timer); document.body.classList.remove('intro-lock');};
 },[]);
 useEffect(()=>{
  if(!leaving) return;
  document.body.classList.remove('intro-lock');
  const timer = window.setTimeout(()=>setVisible(false),690);
  return ()=>window.clearTimeout(timer);
 },[leaving]);
 const skip=()=>{sessionStorage.setItem('earthbeen_intro_seen','1');setLeaving(true);};
 if(!visible) return null;
 return <div className={`intro-screen ${leaving?'intro-screen--out':''}`} role="presentation">
   <div className="intro-top"><span>EARTH BEEN</span><span className="intro-mini-star">✳</span><span>COFFEE</span></div>
   <img className="intro-floating-cup" src="/images/floating-cup.webp" alt="" fetchPriority="high" />
   <div className="intro-bottom"><span>GOOD THINGS ARE BREWING</span><div className="intro-progress" aria-hidden="true"><i/></div><span>EST. FOR THE EVERYDAY</span></div>
   <button className="intro-skip" onClick={skip} type="button">SKIP INTRO <span aria-hidden="true">↗</span></button>
 </div>;
}
