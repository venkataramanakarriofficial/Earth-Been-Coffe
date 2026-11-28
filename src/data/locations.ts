import { siteContent } from './siteContent';

export type CafeLocation = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  embedUrl?: string;
};
export const locations: CafeLocation[] = [
  {
    id: 'ridley-road',
    name: 'Ridley Road',
    address: siteContent.address.full,
    mapsUrl: siteContent.address.mapsUrl,
    embedUrl: 'https://www.google.com/maps?q=69%20Ridley%20Road%2C%20London%20E8%202NP&output=embed',
  },
  {
    id: 'second-location',
    name: 'Our new location',
    address: 'Open Google Maps to see the full address and plan your journey.',
    mapsUrl: 'https://maps.app.goo.gl/taDHxYSRs8XnTaHF6?g_st=ic',
  },
];
