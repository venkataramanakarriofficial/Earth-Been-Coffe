export type MenuCategory = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  tint: string;
  items: MenuItem[];
};
export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
};
/**
 * MENU CONTENT PENDING CLIENT APPROVAL.
 * Do not publish illustrative category descriptions as an official product list.
 * Supply name/description/price only from approved menu. Empty items show a clear notice.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    number: '01',
    name: 'Speciality Coffee',
    subtitle: 'The comforting classics, with room to explore.',
    image: '/images/signature-latte.webp',
    imageAlt: 'Barista-made latte with rosetta art in handcrafted ceramic beside a croissant',
    tint: 'sand',
    items: [],
  },
  {
    id: 'matcha',
    number: '02',
    name: 'Signature Matcha',
    subtitle: 'Vibrant greens and quietly joyful rituals.',
    image: '/images/ceremonial-matcha.webp',
    imageAlt: 'Ceremonial green matcha latte with bamboo whisk and delicate leaf art',
    tint: 'sage',
    items: [],
  },
  {
    id: 'chocolate',
    number: '03',
    name: 'Luxury Hot Chocolate',
    subtitle: 'A little moment of indulgence.',
    image: '/images/chocolate-ritual.webp',
    imageAlt: 'Velvety hot chocolate with whipped cream and dark chocolate shavings',
    tint: 'cocoa',
    items: [],
  },
  {
    id: 'tea',
    number: '04',
    name: 'Premium Teas & Chai',
    subtitle: 'A gentler way to take your time.',
    image: '/images/chai.webp',
    imageAlt: 'Spiced chai in a ceramic cup',
    tint: 'sand',
    items: [],
  },
  {
    id: 'iced',
    number: '05',
    name: 'Iced Drinks',
    subtitle: 'Refreshingly easy to fall for.',
    image: '/images/london-iced-latte.webp',
    imageAlt: 'Iced latte with flowing milk in a sunlit London café setting',
    tint: 'sage',
    items: [],
  },
  {
    id: 'seasonal',
    number: '06',
    name: 'Seasonal Specials',
    subtitle: 'Something new for the moment.',
    image: '/images/espresso-detail.webp',
    imageAlt: 'Freshly prepared espresso in a ceramic cup',
    tint: 'cocoa',
    items: [],
  },
];
