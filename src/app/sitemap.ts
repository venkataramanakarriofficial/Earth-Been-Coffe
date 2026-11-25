import type { MetadataRoute } from 'next';
import { siteContent } from '@/data/siteContent';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteContent.siteUrl) return [];
  return ['/', '/menu', '/find-us'].map(route => ({ url: new URL(route, siteContent.siteUrl).toString(), changeFrequency: 'monthly' as const, priority: route === '/' ? 1 : 0.7 }));
}
