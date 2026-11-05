import type { Metadata } from 'next';
import { siteContent } from '@/data/siteContent';
export function makeMetadata(title: string, description: string): Metadata {
  const base: Metadata = {
    title: `${title} | Earth Been Coffee`, description,
    openGraph: { title: `${title} | Earth Been Coffee`, description, type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Earth Been Coffee' }] },
  };
  if (siteContent.siteUrl) base.metadataBase = new URL(siteContent.siteUrl);
  return base;
}
