import { Fish, Utensils, Beef, Wine, GlassWater, Coffee } from 'lucide-react';

export const HERO_BG =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80';

export const RESTAURANT_INTERIOR =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80';

export const CHEF_IMAGE =
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80';

// Espinho interior photography. Drop the original PNG files into
// public/images/ with these exact names and they'll render automatically.
// See public/images/README.md for instructions.
export const INTERIORS = {
  diningRoom:   '/images/export const INTERIORS = {
  diningRoom:   '/images/your-filename.jpg',
  banquette:    '/images/your-filename.jpg',
  tableSetting: '/images/your-filename.jpg',
  bar:          '/images/your-filename.jpg',
};.jpg
  banquette:    '/images/your-filename.jpg',
  tableSetting: '/images/your-filename.jpg',
  bar:          '/images/your-filename.jpg',
};
};

// Brand palette pulled from the dining room — dark slatted walls, emerald and
// ruby velvet chairs, brass-trimmed oak tabletops.
export const BRAND_PALETTE = [
  { name: 'Charcoal Slat', hex: '#16181C', usage: 'Walls, primary surfaces' },
  { name: 'Espinho Emerald', hex: '#1F4D3A', usage: 'Velvet accents, depth' },
  { name: 'Velvet Ruby', hex: '#7A1E2B', usage: 'Hero accents, hover states' },
  { name: 'Brass', hex: '#C8A24C', usage: 'Table trim, dividers' },
  { name: 'Soft Cream', hex: '#F4EFE6', usage: 'Light sections, contrast' },
  { name: 'Sage Velvet', hex: '#7E8C73', usage: 'Banquettes, soft tones' },
];

export const PHONE = '+26876796708';
export const WHATSAPP = '26876796708';
export const EMAIL = 'info.espinho@swazi.net';
export const INSTAGRAM = 'https://www.instagram.com/espinho_restaurant_bar/';
export const ADDRESS_LINES = ['Plot 136/180, Flame Tree Park', 'Behind Lubombo Mall', 'Siteki, Eswatini'];

export const HOURS = [
  { label: 'Mon – Wed', value: '08:00 – 22:00' },
  { label: 'Thursday', value: '09:00 – 22:00' },
  { label: 'Friday', value: '08:00 – 22:00' },
  { label: 'Saturday', value: '09:00 – 22:00' },
];

export const TODAYS_SPECIAL = [
  {
    name: 'Nikasha Signature',
    price: 'E350',
    blurb: '200g prime fillet, lobster tail, garlic-lemon butter, cauliflower puree.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80',
    rating: 5,
  },
  {
    name: 'Italian Salmon Risotto',
    price: 'E255',
    blurb: 'Scottish salmon, saffron-parmesan arborio, tempura prawns.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    rating: 5,
  },
  {
    name: 'Espinho Signature',
    price: 'E165',
    blurb: 'Gin, rose syrup, sour mix, camomile, Graham Beck bliss nectar.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    rating: 5,
  },
];

export const SPECIALTY_TABS = [
  {
    key: 'seafood',
    label: 'Seafood',
    icon: Fish,
    eyebrow: 'From the Ocean',
    dish: 'Italian Salmon Risotto',
    price: 'E255',
    description:
      'Pan-fried Scottish salmon with creamed horseradish, arborio rice and white wine, finished with a saffron-parmesan cream sauce and tempura prawns.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=80',
  },
  {
    key: 'meat',
    label: 'Steak',
    icon: Beef,
    eyebrow: 'Aged 21 Days',
    dish: 'Tomahawk 500g',
    price: 'E395',
    description:
      'Wet-aged beef fore-rib served with truffle potato, asparagus and baby carrots — finished with a port-wine jus.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1100&q=80',
  },
  {
    key: 'pasta',
    label: 'Pasta',
    icon: Utensils,
    eyebrow: 'House Made',
    dish: 'Wild Mushroom Risotto',
    price: 'E260',
    description:
      'Grilled exotic mushrooms, arborio rice and white wine finished with truffle oil, parmesan tuile and basil pesto.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1100&q=80',
  },
  {
    key: 'wines',
    label: 'Wine',
    icon: Wine,
    eyebrow: 'Cellar Pick',
    dish: 'Eagles Nest Sauv Blanc',
    price: 'E750',
    description:
      'A crisp Cape Sauvignon Blanc — bright citrus, gooseberry, a clean mineral finish. Pairs beautifully with shellfish.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1100&q=80',
  },
  {
    key: 'cocktails',
    label: 'Cocktails',
    icon: GlassWater,
    eyebrow: 'House Mix',
    dish: 'Hennessy Autograph',
    price: 'E210',
    description:
      'Hennessy VS shaken with cherry syrup, lime, fresh cherries and orange zest — a smooth pour for a quiet evening.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1100&q=80',
  },
  {
    key: 'whiskey',
    label: 'Whiskey',
    icon: Coffee,
    eyebrow: 'Premium Pour',
    dish: 'Macallan 18yrs',
    price: 'E470',
    description:
      'Single malt, full-bodied and complex — dried fruit, wood smoke, a soft spice finish. Available by the tot or bottle.',
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1100&q=80',
  },
];

export const CATEGORIES = {
  seafood: {
    title: 'Seafood & Shellfish',
    icon: Fish,
    gradient: 'from-blue-900/20 to-cyan-900/20',
    items: [
      { name: 'Italian Salmon Risotto', price: 'E255', description: 'Pan fried Scottish salmon with creamed horseradish, garlic, onions, arborio rice and white wine, finished with a saffron-parmesan cream sauce and tempura prawns.' },
      { name: 'Italian Asian Salmon', price: 'E210', description: 'Seared salmon fillet on a teriyaki stir-fry with charred exotic mushrooms, wasabi beurre blanc and a squid wafer.' },
      { name: 'Italian Basil Salmon', price: 'E270', description: 'Grilled Scottish salmon served with pickled cucumber, basil pesto sweet potato rounds and a teriyaki reduction.' },
      { name: 'Shellfish', price: 'Market Price', description: 'Prepared the traditional Mozambican way and served with seasonal vegetables and a choice of rice or chips.' },
      { name: 'Queen Prawns', price: 'E345' },
      { name: 'King Prawns', price: 'E365' },
      { name: 'Langoustines', price: 'E410' },
      { name: 'Baby Lobster', price: 'E415' },
      { name: 'Lobster Thermidor', price: 'E480' },
      { name: 'Prawn on Pan', price: 'E110' },
      { name: 'Prawn and Calamari', price: 'E320', description: 'A platter of six tiger prawns with squid heads, grilled calamari on basmati rice and seasonal vegetables.' },
      { name: 'Prawn Platter', price: 'E230', description: 'A dozen tiger prawns sautéed in lemon, garlic & peri-peri on basmati rice with seasonal vegetables.' },
      { name: "Ladies' Platter", price: 'E680', description: 'Four queen and tiger medium prawns served with seasonal vegetables and savoury rice.' },
      { name: 'Shellfish Platter', price: 'E855', description: 'Baby lobster, queen and tiger medium prawns served with seasonal vegetables and savoury rice.' },
      { name: 'Seafood Platter for Two', price: 'E1400', description: 'Baby lobster, queen and tiger medium prawns, calamari, mussels and line fish served with seasonal vegetables and rice (Langoustine option available).' },
    ],
  },
  pasta: {
    title: 'Pastas & Curry',
    icon: Utensils,
    gradient: 'from-orange-900/20 to-red-900/20',
    items: [
      { name: 'Italian Vegetable Stack', price: 'E225', description: 'Tian of sweet potato rosti, field mushroom, roasted peppers & tofu served with tomato beurre blanc.' },
      { name: 'Vegetarian Pasta (V)', price: 'E225', description: 'Grilled baby corn and peas, cumin and garlic infused olive oil, with penne, linguini or tagliatelle.' },
      { name: 'Wild Mushroom Risotto (V)', price: 'E260', description: 'Grilled exotic mushrooms, arborio rice and white wine finished with truffle oil, parmesan tuile, basil pesto and micro herbs.' },
      { name: 'Italian Pallastro', price: 'E220', description: 'Poached chicken thighs, truffle and parmesan infused cream sauce, rocket, lemon pepper pearls and crispy crackling.' },
      { name: 'Italian Prawn Pasta', price: 'E240', description: 'Spiced prawn tails in sundried tomato, creamy fresh basil, asparagus, with penne or linguini & parmesan gratinée.' },
      { name: 'Chicken Curry', price: 'E255', description: 'Chicken thighs and breast braised in a coconut-infused mild blend of spices with toasted almonds, dehydrated vine tomatoes, roti and sambals.' },
      { name: 'Prawn Curry', price: 'E310', description: 'Simmered in traditional Durban spices and tamarind served with basmati rice, sambals and poppadum.' },
      { name: 'Lamb Curry', price: 'E360', description: 'Hot or mild lamb cubes braised & slow cooked the South African way.' },
      { name: 'Beef Curry', price: 'E340', description: 'Hot or mild beef cubes braised & slow cooked the South African way.' },
    ],
  },
  meat: {
    title: 'Meat & Poultry',
    icon: Beef,
    gradient: 'from-red-900/20 to-orange-900/20',
    items: [
      { name: 'Traditional Rump 300g', price: 'E245', description: 'Wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces.' },
      { name: 'Traditional Fillet 300g', price: 'E255', description: 'Wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces.' },
      { name: 'Rib Eye 300g', price: 'E325', description: 'Wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces.' },
      { name: 'Buffalo Wings', price: 'E125' },
      { name: 'Oxtail', price: 'E365', description: 'Served on the bone with rice and saffron new potatoes.' },
      { name: 'Tomahawk 500g', price: 'E395', description: 'Beef fore-rib with truffle potato, asparagus and baby carrots.' },
      { name: 'Lamb Shank', price: 'E405', description: 'Slow roasted curry infused lamb shank with garam masala, cinnamon and coriander, served with mash and seasonal vegetables.' },
      { name: 'Nikasha Signature', price: 'E350', description: '200g prime cut beef fillet, garlic lemon butter, south coast lobster tail, maraschino cherries, cauliflower puree, seasonal vegetables and potato mash.', featured: true },
      { name: 'African Fillet', price: 'E440', description: 'Beef fillet grilled to perfection served with garlic snails and prawns, muesli powder, pan-fried mushrooms, potato terrine, basmati rice and port wine jus.' },
      { name: 'Flame Grilled Baby Chicken 600g', price: 'E230', description: 'Rubbed with Maldon sea salt, fresh chilli and lemon, served with chips.' },
      { name: 'Prime Rib', price: 'E310', description: 'Lazy aged prime cut, pearl barley risotto, sautéed seasonal vegetables and port wine jus.' },
      { name: 'Duck Leg', price: 'E235', description: 'Slow braised sous-vide duck leg confit with potato dauphinoise, honey-glazed root vegetables, fig preserve and port wine jus.' },
      { name: 'Pork Ribs', price: 'E280', description: 'Prepared with soya, honey and ginger, served with sumo chips and braised vegetables.' },
      { name: 'Beef Fillet and Empanada', price: 'E380', description: 'Grilled fillet, braised beef cheek pie, sautéed mushrooms, parsnip purée and thyme-infused red wine reduction.' },
      { name: 'Lamb Chops', price: 'E350', description: 'French trimmed, rubbed with dukkah served with mint pea purée and sumo chips.' },
      { name: 'Ostrich and Leek', price: 'E280', description: 'Ostrich fillet with creamy leeks, sweet buttered pears, herbed golden baby carrots, burnt leeks, turmeric pickled leeks and port wine jus.' },
      { name: 'Braised Pork Belly', price: 'E300', description: 'Slow braised pork belly with king oyster mushroom, salsa, fresh cherries, apple and potato puree, basil sprouts and fennel.' },
      { name: 'Bushveld Fillet Steak', price: 'E320', description: 'Charred grilled beef fillet, pommes dauphine, green bean and vine tomato salad topped with béarnaise.' },
      { name: 'Ostrich Fillet', price: 'E355', description: 'Grilled ostrich fillet with sweet potato and honey puree, roast Mediterranean vegetables and peppercorn sauce.' },
      { name: 'Dutch Fillet', price: 'E355', description: 'Pan-fried beef loin wrapped in bell pepper, served on a peppery bath and creamy potato, grilled baby corn and caramelized onion.' },
    ],
  },
  wines: {
    title: 'Fine Wines',
    icon: Wine,
    gradient: 'from-purple-900/20 to-pink-900/20',
    items: [
      { name: 'De Grendel Cape of Good Hope', category: 'Sauvignon Blanc 750ml', price: 'E540' },
      { name: 'Diemersdal Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E350' },
      { name: 'Diemersfontein Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E380' },
      { name: 'Eagles Nest Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E750' },
      { name: 'Stark Conde Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E805' },
      { name: 'Nederburg', category: 'Sauvignon Blanc 750ml', price: 'E300' },
      { name: 'Durbanville Hills', category: 'Cabernet Sauvignon 750ml', price: 'E400' },
      { name: 'Fat Bastard Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E280' },
      { name: 'Vergenoegd Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E1100' },
      { name: 'Plaisir De Merle Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E900' },
      { name: 'Springfield Whole Berry Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E600' },
      { name: 'Warwick First Lady Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E400' },
    ],
  },
  cocktails: {
    title: 'Signature Cocktails',
    icon: GlassWater,
    gradient: 'from-cyan-900/20 to-blue-900/20',
    items: [
      { name: 'Espinho Signature', price: 'E165', description: 'Gin, rose syrup, sour mix, camomile tea, Graham Beck bliss nectar.', featured: true },
      { name: 'Pina Colada', price: 'E104', description: 'Bacardi, pina coconut syrup, pineapple, cream and pineapple juice.' },
      { name: 'Long Island', price: 'E195', description: 'Sour mix, vodka, gin, tequila silver, Bacardi, triple sec, coke.' },
      { name: 'Margarita', price: 'E135', description: 'Fresh lime, salt, tequila, triple sec.' },
      { name: 'Respect Your Elders', price: 'E115', description: 'Gin, elderflower syrup, lemon juice, tonic water.' },
      { name: 'Cosmopolitan', price: 'E110', description: 'Vodka, cranberry juice, triple sec, orange zest.' },
      { name: 'Mojito', price: 'E135', description: 'Fresh lime, wild mint syrup, Bacardi rum, mint leaves, soda water.' },
      { name: 'Hennessy Autograph', price: 'E210', description: 'Hennessy VS, cherry syrup, lime, cherries, orange zest.' },
      { name: 'Blue Lagoon', price: 'E135', description: 'Vodka, sour mix, lemonade, blue curaçao.' },
    ],
  },
  whiskey: {
    title: 'Premium Whiskey',
    icon: Coffee,
    gradient: 'from-amber-900/20 to-yellow-900/20',
    items: [
      { name: 'Johnnie Walker Gold Label Reserve', category: 'Premium Selection', price: 'E240', featured: true },
      { name: 'Johnnie Walker King George', category: 'Premium Selection', price: 'E500', featured: true },
      { name: 'Macallan 18yrs', category: 'By Tots', price: 'E470', bottlePrice: 'E14100' },
      { name: 'Macallan 15yrs', category: 'By Tots', price: 'E250', bottlePrice: 'E7400' },
      { name: 'Macallan 12yrs', category: 'By Tots', price: 'E150', bottlePrice: 'E4550' },
      { name: 'Glenfiddich 21yrs', category: 'By Tots', price: 'E420', bottlePrice: 'E12400' },
      { name: 'Glenfiddich 18yrs', category: 'By Tots', price: 'E115', bottlePrice: 'E3450' },
      { name: 'Glenmorangie 18yrs', category: 'By Tots', price: 'E110', bottlePrice: 'E3300' },
      { name: 'Chivas Regal 18yrs', category: 'By Tots', price: 'E125', bottlePrice: 'E3750' },
    ],
  },
};

export const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80', alt: 'Plated salmon dish' },
  { src: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80', alt: 'Tomahawk steak' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80', alt: 'Signature cocktail' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80', alt: 'Salmon plate' },
  { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80', alt: 'Wine selection' },
  { src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80', alt: 'Mushroom risotto' },
  { src: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80', alt: 'Whiskey pour' },
];

export const TESTIMONIALS = [
  {
    name: 'Thandiwe N.',
    role: 'Local guest',
    quote:
      "The Nikasha Signature is unforgettable — the lobster tail with the fillet is a serious flex. Service made us feel like family.",
    rating: 5,
  },
  {
    name: 'James W.',
    role: 'Visitor from Cape Town',
    quote:
      "Finding wet-aged steak and Macallan 18 in Siteki was a surprise. Espinho easily holds up against the best in Joburg.",
    rating: 5,
  },
  {
    name: 'Sipho M.',
    role: 'Anniversary dinner',
    quote:
      "We booked the private corner for our anniversary. Custom menu, perfectly paced courses, and a cocktail named after the night.",
    rating: 5,
  },
];
