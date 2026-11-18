'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * A short branded transition on the initial document load and between internal
 * pages. It uses the customer's own cup artwork and never blocks navigation.
 */
export default function CoffeePageLoader() {
  const pathname = usePathname();
  const [active, setActive] = useState(true);
  const firstRender = useRef(true);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigationFallback = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (settleTimer.current) clearTimeout(settleTimer.current);
    if (navigationFallback.current) clearTimeout(navigationFallback.current);
    navigationFallback.current = null;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(false);
      return;
    }

    setActive(true);
    // Let users notice the cup, but do not keep them waiting on a fast site.
    settleTimer.current = setTimeout(() => setActive(false), firstRender.current ? 1000 : 650);
    firstRender.current = false;
    return () => {
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, [pathname]);

  useEffect(() => {
    const beginNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

      let destination: URL;
      try { destination = new URL(link.href, window.location.href); }
      catch { return; }
      // Only show the cup for a real in-app page change, not external links,
      // telephone numbers, WhatsApp, or same-page hash links.
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      setActive(true);
      if (navigationFallback.current) clearTimeout(navigationFallback.current);
      // If navigation is cancelled or fails, restore the current page.
      navigationFallback.current = setTimeout(() => setActive(false), 2200);
    };

    document.addEventListener('click', beginNavigation, { capture: true });
    return () => {
      document.removeEventListener('click', beginNavigation, { capture: true });
      if (navigationFallback.current) clearTimeout(navigationFallback.current);
    };
  }, []);

  return (
    <div className={`coffee-transition${active ? ' coffee-transition--active' : ''}`} aria-hidden="true">
      <div className="coffee-transition__content">
        <span className="coffee-transition__eyebrow">EARTH BEEN COFFEE</span>
        <div className="coffee-transition__cup">
          <Image
            src="/images/earth-been-cup-transparent.webp"
            alt=""
            width={878}
            height={1164}
            priority
            unoptimized
          />
        </div>
        <div className="coffee-transition__status">BREWING YOUR NEXT MOMENT</div>
        <div className="coffee-transition__progress"><span /></div>
      </div>
    </div>
  );
}
