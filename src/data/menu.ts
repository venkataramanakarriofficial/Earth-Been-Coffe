/** The supplied Earth Been Coffee menu boards are the source of truth.
 * No prices are published because the supplied boards do not show prices.
 */
export type MenuCategory = {
  id: string;
  number: string;
  name: string;
  items: string[];
};
export type MenuSection = {
  id: 'drinks' | 'sweets';
  name: string;
  subtitle: string;
  categories: MenuCategory[];
  board: string;
};

export const menuSections: MenuSection[] = [
  {
    id: 'drinks',
    name: 'Drinks',
    subtitle: 'From the first espresso to the last iced sip.',
    board: '/images/earth-been-drinks-menu.jpg',
    categories: [
      {id:'hot-coffee',number:'01',name:'Hot Coffee',items:[
        'Espresso','Cortado','Macchiato','Americano','Latte','Cappuccino',
        'Flat White','Mocha','Hot Chocolate','Chai Latte','Matcha Latte',
        'Pistachio Latte','Pumpkin Spice Latte'
      ]},
      {id:'tea',number:'02',name:'Tea',items:[
        'English Breakfast Tea','Earl Grey Tea','Peppermint Tea','Camomile Tea','Berry Tea'
      ]},
      {id:'iced-drinks',number:'03',name:'Iced Drinks',items:[
        'Iced Latte','Iced Matcha Latte','Iced Strawberry Matcha',
        'Iced Chocolate','Iced Chai Latte','Iced Vanilla Chai',
        'Iced Pumpkin Spice Latte'
      ]},
    ],
  },
  {
    id: 'sweets',
    name: 'Sweets',
    subtitle: 'A little something sweet to enjoy with your cup.',
    board: '/images/earth-been-sweets-menu.jpg',
    categories: [
      {id:'muffins',number:'01',name:'Muffins',items:[
        'Blueberry Muffin','Raspberry Muffin','Chocolate Muffin','Raisin Muffin','Signature Muffin'
      ]},
      {id:'danish-pastries',number:'02',name:'Danish Pastries',items:[
        'Cinnamon Danish','Raisin Danish','Cherry Crown Danish'
      ]},
      {id:'croissants',number:'03',name:'Croissants',items:[
        'Croissant','Chocolate Croissant','Almond Croissant'
      ]},
      {id:'cookies',number:'04',name:'Cookies',items:[
        'Chocolate Chip Cookie','Double Chocolate Cookie'
      ]},
      {id:'baked-treats',number:'05',name:'Baked Treats',items:[
        'Pecan Pie','Banana Bread Slices','Chocolate & Vanilla Marble'
      ]},
    ],
  },
];
export const alternativeMilks = ['Oat','Almond','Coconut'] as const;
