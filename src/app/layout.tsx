import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteContent } from '@/data/siteContent';
export const metadata: Metadata = {
  title: { default: 'Earth Been Coffee — London', template: '%s | Earth Been Coffee' },
  description: 'A London speciality coffee, matcha and premium drinks brand. Explore our story, drinks and locations.',
  openGraph: { title: 'Earth Been Coffee', description: 'A little earth. A lot of soul.', type: 'website', images: ['/og-image.jpg'] },
  robots: { index: false, follow: false }, // Remove noindex only after approved content / production URL.
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
