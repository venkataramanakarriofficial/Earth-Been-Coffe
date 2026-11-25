'use client';
import {useEffect,useState} from 'react';
export default function CoffeePageLoader(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;setVisible(true);const timer=window.setTimeout(()=>setVisible(false),750);return()=>window.clearTimeout(timer)},[]);
 return visible?<div className="coffee-welcome" aria-hidden="true"><img src="/images/earth-been-cup-transparent.webp" alt="" width="64" height="85"/></div>:null;
}
