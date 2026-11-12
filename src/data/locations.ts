import { siteContent } from './siteContent';

export type CafeLocation = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
};
export const locations: CafeLocation[] = [{
  id: 'ridley-road',
  name: 'Earth Been Coffee · Ridley Road',
  address: siteContent.address.full,
  mapsUrl: siteContent.address.mapsUrl,
}];
