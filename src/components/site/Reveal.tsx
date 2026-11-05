'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
export default function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);const [show,setShow]=useState(false);
 useEffect(()=>{
  if(!ref.current)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setShow(true);return;}
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setShow(true);observer.disconnect();}},{threshold:.08,rootMargin:'0px 0px -32px 0px'});
  observer.observe(ref.current);return ()=>observer.disconnect();
 },[]);
 return <div ref={ref} className={`reveal-view ${show?'is-visible':''} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>;
}
