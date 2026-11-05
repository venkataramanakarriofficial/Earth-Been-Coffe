import type { MetadataRoute } from 'next';
import { siteContent } from '@/data/siteContent';
export default function robots(): MetadataRoute.Robots {
  return siteContent.siteUrl ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteContent.siteUrl}/sitemap.xml` } : { rules: { userAgent: '*', disallow: '/' } };
}
