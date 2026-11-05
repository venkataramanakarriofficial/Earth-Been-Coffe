'use client';
import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('earth-intro-seen')) return;
    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('earth-intro-seen', '1');
    }, 1750);
    return () => window.clearTimeout(timer);
  }, []);
  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem('earth-intro-seen', '1');
  };
  if (!visible) return null;
  return (
    <div className="intro-overlay intro-photo-opening" aria-label="Earth Been Coffee welcome animation">
      <div className="intro-photography" aria-hidden="true">
        <img src="/images/hero-cup.webp" alt="" />
      </div>
      <div className="intro-opening-lockup">
        <span>A BETTER EVERYDAY RITUAL</span>
        <strong>EARTH BEEN <em>COFFEE</em></strong>
        <small>LONDON · SPECIALITY DRINKS</small>
      </div>
      <button className="intro-close" onClick={dismiss}>SKIP INTRO ↗</button>
    </div>
  );
}
