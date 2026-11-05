'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import CoffeeCupModel from './CoffeeCupModel';
export default function CoffeeScene() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const m = matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(m.matches);
    const canvas = document.createElement('canvas');
    let ok = false;
    try { ok = !!(canvas.getContext('webgl2') || canvas.getContext('webgl')); } catch { /* fallback */ }
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    setSupported(ok && (memory === undefined || memory >= 2));
    const update = () => setScrollProgress(Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 1.4))));
    window.addEventListener('scroll', update, { passive: true }); update();
    const onChange = () => setReducedMotion(m.matches);
    m.addEventListener('change', onChange);
    return () => { window.removeEventListener('scroll', update); m.removeEventListener('change', onChange); };
  }, []);
  if (supported !== true || reducedMotion) return <div className="cup-fallback"><img src="/images/hero-fallback-editorial.webp" alt="Real takeaway coffee cup with roasted coffee beans" width="530" height="660"/></div>;
  return <div className="coffee-canvas" role="img" aria-label="Interactive realistic three-dimensional Earth Been Coffee cup with roasted coffee beans">
    <Suspense fallback={<div className="cup-fallback"><img src="/images/hero-fallback-editorial.webp" alt="Coffee cup photograph"/></div>}>
      <Canvas camera={{ position: [0,0,6.9], fov: 38 }} dpr={[1,1.6]} gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }} shadows performance={{ min: .5 }}>
        <CoffeeCupModel scrollProgress={scrollProgress} reducedMotion={reducedMotion}/>
      </Canvas>
    </Suspense>
  </div>;
}
