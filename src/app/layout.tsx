import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoffeePageLoader from '@/components/site/CoffeePageLoader';
import WhatsAppFloat from '@/components/site/WhatsAppFloat';
import DirectionsFloat from '@/components/site/DirectionsFloat';
import {siteContent} from '@/data/siteContent';
import './globals.css';
export const metadata:Metadata={title:{default:'Earth Been Coffee | Your Local Coffee Stop in Dalston',template:'%s | Earth Been Coffee'},description:'Coffee, matcha, iced drinks and sweet treats at Earth Been Coffee, 69 Ridley Road, Dalston, London.',openGraph:{title:'Earth Been Coffee',description:'Good coffee. Better days. Find us on Ridley Road in Dalston.',type:'website',images:['/images/earth-been-cup-original.jpg']},robots:{index:!!siteContent.siteUrl,follow:!!siteContent.siteUrl}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-GB"><body><a className="skip-link" href="#main">Skip to main content</a><CoffeePageLoader/><Header/><main id="main">{children}</main><Footer/><DirectionsFloat/><WhatsAppFloat/></body></html>}
