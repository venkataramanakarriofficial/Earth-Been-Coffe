import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IntroSequence from '@/components/site/IntroSequence';
import './globals.css';
export const metadata: Metadata = {
 title: { default:'Earth Been Coffee | The Good in Every Cup',template:'%s | Earth Been Coffee' },
 description:'Beautiful coffee, slow moments and something good in every cup. Explore the menu and the feeling behind Earth Been Coffee.',
 openGraph:{title:'Earth Been Coffee',description:'Come for the coffee. Stay for the feeling.',type:'website',images:['/og-image.jpg']},
 robots:{index:false,follow:false},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to main content</a><IntroSequence/><Header/><main id="main">{children}</main><Footer/></body></html>}
