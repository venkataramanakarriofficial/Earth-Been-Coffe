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
  { id: 'coffee', number: '01', name: 'Speciality Coffee', subtitle: 'Smooth, comforting, beautifully made.', image: '/images/latte-closeup.webp', imageAlt: 'Signature latte with delicate latte art in an Earth Been Coffee cup', tint: 'sand', items: [] },
  { id: 'matcha', number: '02', name: 'Signature Matcha', subtitle: 'A vibrant moment worth slowing down for.', image: '/images/matcha-closeup.webp', imageAlt: 'Matcha latte in a ceramic Earth Been Coffee cup', tint: 'sage', items: [] },
  { id: 'chocolate', number: '03', name: 'Luxury Hot Chocolate', subtitle: 'Rich cocoa and a little extra indulgence.', image: '/images/hot-chocolate-closeup.webp', imageAlt: 'Luxurious whipped hot chocolate in a branded takeaway cup', tint: 'cocoa', items: [] },
  { id: 'iced', number: '04', name: 'Iced Coffee', subtitle: 'Bright, chilled sips for sunlit afternoons.', image: '/images/iced-coffee.webp', imageAlt: 'Ice-filled caramel coffee drink on a café table', tint: 'sage', items: [] },
  { id: 'espresso', number: '05', name: 'Espresso Bar', subtitle: 'Bold flavour in every beautifully balanced shot.', image: '/images/espresso-closeup.webp', imageAlt: 'Rich espresso with crema served in a dark green cup', tint: 'cocoa', items: [] },
  { id: 'pastries', number: '06', name: 'Coffee & Pastries', subtitle: 'The perfect something to go with your cup.', image: '/images/pastry-closeup.webp', imageAlt: 'Fresh golden croissant and coffee on a rustic table', tint: 'sand', items: [] },
];
