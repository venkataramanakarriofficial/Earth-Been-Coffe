export type StallLocation = {
  id: string;
  name: string;
  address: string;
  tradingDays: string;
  openingHours: string;
  image?: string;
  mapsUrl: string;
  status: 'open' | 'coming-soon';
};
// No verified site addresses or trading times supplied. Do not invent them.
export const locations: StallLocation[] = [];
