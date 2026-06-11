import { Fish, Utensils, Beef, Wine, GlassWater, Coffee, Egg, Salad, Pizza, Flame, Cake, Baby, Beer, Sparkles, Layers, Soup } from 'lucide-react';

// Actual Espinho restaurant photography — stored in public/images/.
// Resized to 2000px max, JPEG quality 82, EXIF stripped.
export const HERO_BG = '/images/dining-room.jpg';
export const RESTAURANT_INTERIOR = '/images/dining-room-wide.jpg';
export const CHEF_IMAGE = '/images/event-table.jpg';

export const INTERIORS = {
  diningRoom: '/images/dining-room.jpg',
  banquette: '/images/private-corner.jpg',
  tableSetting: '/images/table-velvet.jpg',
  bar: '/images/banquette.jpg',
  entrance: '/images/entrance.jpg',
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

export const PHONE = '+26878760543';
export const PHONE_DISPLAY = '+268 7876 0543';
export const WHATSAPP = '26878760543';
export const EMAIL = 'info.espinho@swazi.net';
export const INSTAGRAM = 'https://www.instagram.com/espinho_restaurant_bar/';
export const ADDRESS_LINES = ['Plot 136/180, Flame Tree Park', 'Behind Lubombo Mall', 'Siteki, Eswatini'];

// Event categories — each has a hero image, a description, and a gallery of
// supporting shots from real Espinho functions. Categories are referenced by
// their slug from /events#<slug>.
export const EVENT_CATEGORIES = [
  {
    slug: 'date-nights',
    label: 'Date Nights & Anniversaries',
    eyebrow: 'A Reservation for Two',
    title: 'An evening they\'ll talk about for years',
    description:
      'Candlelight at a brass-trimmed table, a hand-piped anniversary plate, a glass of red shared across velvet chairs. We hold a corner of the dining room just for you — quiet, attentive, and gently paced.',
    hero: '/images/date-toast.jpg',
    gallery: ['/images/date-couple-indoor.jpg', '/images/date-anniversary-cake.jpg', '/images/date-birthday.jpg', '/images/date-toast.jpg'],
    perks: [
      'Reserved table with candlelight setup',
      'Optional signature cocktail welcome',
      'Personalised anniversary or birthday plate',
      'Discreet service paced to your evening',
    ],
    inquireType: 'a date night or anniversary',
  },
  {
    slug: 'dinners',
    label: 'Dinners',
    eyebrow: 'The Tasting Table',
    title: 'Fine dining built around the producer',
    description:
      'Multi-course tasting menus built by the chef around what came in that morning. Kalahari wet-aged steaks, fresh shellfish, and a wine list curated to the night.',
    hero: '/images/fillet-redwine.jpg',
    gallery: ['/images/fillet-redwine.jpg', '/images/grilled-fish.jpg', '/images/pasta-prawn.jpg', '/images/lamb-shank.jpg', '/images/souffle-berries.jpg', '/images/dessert-tartlets.jpg'],
    perks: [
      '3, 5, or 7-course chef tasting',
      'Optional sommelier wine pairing',
      'Seasonal seafood and aged Kalahari beef',
      'Table reservation up to 30 days in advance',
    ],
    inquireType: 'a tasting dinner',
  },
  {
    slug: 'end-of-year',
    label: 'End-of-Year Parties',
    eyebrow: 'Black Tie · Gold Lights',
    title: 'The night your team has been waiting for',
    description:
      'Live entertainment, full-bar service, branded backdrops, and a kitchen that can cater 200+ guests. From All-Black Affairs to corporate galas — we run the night end to end.',
    hero: '/images/eoy-stage-laser.jpg',
    gallery: ['/images/eoy-all-black-1.jpg', '/images/eoy-stage-night.jpg', '/images/eoy-grindrod-1.jpg', '/images/eoy-grindrod-2.jpg', '/images/eoy-arrival-couple.jpg', '/images/eoy-stage-performance.jpg', '/images/eoy-corporate-couple.jpg', '/images/eoy-all-black-2.jpg'],
    perks: [
      'Stage, AV, and DJ booth on site',
      'Branded backdrops and balloon installations',
      'Capacity up to 250 guests indoor + outdoor',
      'Full-bar service with signature cocktails',
    ],
    inquireType: 'an end-of-year function',
  },
  {
    slug: 'team-building',
    label: 'Team Building',
    eyebrow: 'Off-Site Done Right',
    title: 'A long lunch your team won\'t forget',
    description:
      'Pool table, lounge couches, beer tower service and a private menu. We host team off-sites with the structure of a board room and the looseness of a great Friday afternoon.',
    hero: '/images/team-pool.jpg',
    gallery: ['/images/team-bar-tables.jpg', '/images/team-pool.jpg', '/images/team-beer.jpg', '/images/outdoor-bar-seating.jpg'],
    perks: [
      'Pool table and lounge games available',
      'Set group menus with beer towers',
      'Private breakout space on request',
      'Half-day or full-day packages',
    ],
    inquireType: 'a team-building day',
  },
  {
    slug: 'catering',
    label: 'Catering Services',
    eyebrow: 'On-Site or At Yours',
    title: 'Hospitality that travels',
    description:
      'Indoor and outdoor catering for weddings, conferences, family gatherings and corporate launches. Full buffet lines, plated service, dessert towers — and the team to run them.',
    hero: '/images/catering-banquet-hall.jpg',
    gallery: ['/images/catering-banquet-hall.jpg', '/images/catering-tent-1.jpg', '/images/catering-tent-2.jpg', '/images/catering-buffet-line.jpg', '/images/catering-buffet-alt.jpg', '/images/catering-dessert-tower.jpg', '/images/catering-salad-bowls.jpg', '/images/catering-salad-fresh.jpg', '/images/catering-team-blue.jpg', '/images/catering-traditional-dress.jpg'],
    perks: [
      'Buffet, plated, or family-style service',
      'On-site or venue-of-choice delivery',
      'Branded uniforms and waitstaff team',
      'Dessert tower and bespoke menu add-ons',
    ],
    inquireType: 'a catering brief',
  },
];

// Bar zones — the outdoor bar/lounge plus indoor whiskey-bar and pool-table room.
export const BAR_ZONES = [
  {
    slug: 'outdoor-bar',
    label: 'Outdoor Bar',
    eyebrow: 'Under the Umbrellas',
    title: 'Sundowners on the deck',
    description:
      'White couches under Stella Artois umbrellas, turf underfoot, a clear view of the Lubombo skyline. The outdoor bar is where the evening starts.',
    hero: '/images/outdoor-bar-stella.jpg',
    gallery: ['/images/outdoor-bar-stella.jpg', '/images/outdoor-bar-seating.jpg', '/images/bar-lounge-1.jpg', '/images/bar-lounge-2.jpg'],
  },
  {
    slug: 'outdoor-dining',
    label: 'Outdoor Dining',
    eyebrow: 'Long Tables Under Linen',
    title: 'Open-air feasting',
    description:
      'When the sun is right and the crowd is large, we host long-table dining under white linen tents on the turf. Family-friendly, photo-friendly, perfectly catered.',
    hero: '/images/catering-tent-1.jpg',
    gallery: ['/images/catering-tent-1.jpg', '/images/catering-tent-2.jpg', '/images/eoy-stage-night.jpg'],
  },
  {
    slug: 'whiskey-bar',
    label: 'Whiskey Bar',
    eyebrow: 'Bottles That Matter',
    title: 'Single malts on a marble counter',
    description:
      'A wall of premium pours behind the bar — Macallan, Glenfiddich, Hennessy, Chivas. By the tot or by the bottle, our bartenders pour with intention.',
    hero: '/images/bar-whiskey.jpg',
    gallery: ['/images/bar-whiskey.jpg', '/images/team-beer.jpg', '/images/team-bar-tables.jpg', '/images/team-pool.jpg'],
  },
];

export const HOURS = [
  { label: 'Mon – Wed', value: '08:00 – 22:00' },
  { label: 'Thursday', value: '09:00 – 22:00' },
  { label: 'Friday', value: '08:00 – 22:00' },
  { label: 'Saturday', value: '09:00 – 22:00' },
];

export const TODAYS_SPECIAL = [
  {
    name: 'Pan Grilled Fillet',
    price: 'E365',
    blurb: 'Black pepper fillet, grilled glazed carrots, tenderstem broccoli, garlic mash, red wine chocolate jus.',
    image: '/images/fillet-redwine.jpg',
    rating: 5,
  },
  {
    name: 'Prawn Aglio Olio',
    price: 'E265',
    blurb: 'Pan-grilled prawns with garlic, olive oil and fresh herbs over your choice of pasta.',
    image: '/images/pasta-prawn.jpg',
    rating: 5,
  },
  {
    name: 'Pina Colada',
    price: 'E104',
    blurb: 'Bacardi, pina coconut syrup, pineapple, cream and pineapple juice.',
    image: '/images/cocktails.jpg',
    rating: 5,
  },
];

export const SPECIALTY_TABS = [
  {
    key: 'sea',
    label: 'From the Sea',
    icon: Fish,
    eyebrow: 'From the Ocean',
    dish: 'Grilled Baby Kingklip',
    price: 'E365',
    description:
      'Served with vegetable stir-fry and finished with beetroot puree and lemon wedges — clean, bright, perfectly cooked.',
    image: '/images/grilled-fish.jpg',
  },
  {
    key: 'fire',
    label: 'From the Fire',
    icon: Beef,
    eyebrow: 'Aged 21 Days',
    dish: 'Pan Grilled Fillet',
    price: 'E365',
    description:
      'Black pepper fillet medallions with grilled glazed carrots, tenderstem broccoli, garlic mash and red wine chocolate jus.',
    image: '/images/fillet-redwine.jpg',
  },
  {
    key: 'pasta',
    label: 'Pasta',
    icon: Utensils,
    eyebrow: 'House Made',
    dish: 'Prawn Aglio Olio',
    price: 'E265',
    description:
      'Pan-grilled prawns tossed with garlic, olive oil and fresh herbs over your choice of penne, tagliatelle or linguine.',
    image: '/images/pasta-prawn.jpg',
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
    image: '/images/fillet-redwine.jpg',
  },
  {
    key: 'cocktails',
    label: 'Cocktails',
    icon: GlassWater,
    eyebrow: 'House Mix',
    dish: 'Pina Colada',
    price: 'E104',
    description:
      'Bacardi, pina coconut syrup, pineapple, cream and pineapple juice. Frozen, perfectly balanced.',
    image: '/images/cocktails.jpg',
  },
  {
    key: 'dessert',
    label: 'Dessert',
    icon: Cake,
    eyebrow: 'Sweet Finish',
    dish: 'Crème Brûlée',
    price: 'E105',
    description:
      'Raspberry, berry compote and sugar work — pastry cream finished with a torched amber crust.',
    image: '/images/souffle-berries.jpg',
  },
];

export const CATEGORIES = {
  breakfast: {
    title: 'Breakfast',
    icon: Egg,
    gradient: 'from-amber-900/20 to-orange-900/20',
    items: [
      { name: 'Espinho Breakfast', price: 'E165', description: '2 eggs of your choice, 150g sirloin steak, streaky bacon, grilled tomato & toast of the day.' },
      { name: 'The Farmer', price: 'E135', description: '2 eggs of your choice, streaky bacon, 2 beef sausages, grilled tomato, baked beans & toast of your choice.' },
      { name: 'Eggs Benedict Salmon', price: 'E175', description: 'Toasted English muffin served with spinach, a poached egg of your choice, & topped with homemade hollandaise sauce.' },
      { name: 'Eggs Benedict Bacon', price: 'E115', description: 'Toasted English muffin served with spinach, a poached egg of your choice, & topped with homemade hollandaise sauce.' },
      { name: 'Smashed Avocado', price: 'E105', description: 'Toasted bread topped with smashed avocado, grilled mushrooms, & confit cherry tomatoes.' },
      { name: 'Espinho English Breakfast', price: 'E245', description: 'Grilled streaky bacon, grilled 150g sirloin steak, 1 beef sausage, potatoes, grilled tomato topped with cheese, chakalaka, and toast of the day finished with parmesan cheese.', featured: true },
      { name: 'Open Omelette', price: 'E175', description: 'Rocket, smoked salmon, confit tomato, feta cheese, & topped with red onion.' },
      { name: 'Omelette of Day', price: 'E115', description: 'With 4 fillings of your choice: tomatoes, onions, mixed peppers, mince meat, ham, bacon, or cheddar cheese.' },
    ],
  },
  starters: {
    title: 'Starters',
    icon: Soup,
    gradient: 'from-amber-900/20 to-yellow-900/20',
    items: [
      { name: 'Espinho Oysters', price: 'E35', description: 'Baby oysters served with Tabasco, onion salsa, and finished with a white wine reduction.' },
      { name: 'Vegetable Pakora', price: 'E105', description: 'Stir-fry vegetables coated in butter, deep-fried, and served with sweet chilli sauce.' },
      { name: 'Couscous and Vegetables Bowl', price: 'E130', description: 'Served with grilled chicken cubes and Tikka sauce.' },
      { name: 'Prawn Tempura', price: 'E175', description: 'Served with lemon mayo, strawberries, and baby spinach, finished with lemon slices.' },
      { name: 'Angry Prawns', price: 'E165', description: 'Prawn tails flamed in brandy, chilli, and tomato, with pecorino gratinée and rice.' },
      { name: 'Salmon Gravlax', price: 'E145', description: 'Cured salmon, microgreens, cream cheese mousse, caper salsa, and rye crisp.' },
      { name: 'Blue Cheese & Tomato Tart', price: 'E195', description: 'Served with caramelized onions.' },
      { name: 'Creamy Garlic Mussels', price: 'E165', description: '6 mussels in cream garlic sauce, served with toasted bread.' },
      { name: 'Peri-Peri / BBQ Chicken Wings', price: 'E125', description: 'Served with your choice of sauce on garlic mashed potato, butternut puree, and finished with olive tapenade.' },
      { name: 'Arancini Balls', price: 'E105', description: 'Panko-crusted risotto, tomato and basil dip, wasabi mayo, and soya and lemon sauce.' },
      { name: 'Trio Crumbed Mushroom', price: 'E105', description: 'Served with sojla salsa, chakalaka, and olive tapenade.' },
    ],
  },
  salads: {
    title: 'Salads & Vegetarian',
    icon: Salad,
    gradient: 'from-green-900/20 to-emerald-900/20',
    items: [
      { name: 'Summer Asian Salad', price: 'E115', description: 'Fresh sliced peaches, rocket, red cabbage, green beans, roast nuts, and fresh greens.' },
      { name: 'Espinho Greek Salad', price: 'E95', description: 'With olives, red onion, cucumber, mixed peppers, and feta cheese, finished with greens.' },
      { name: 'Beetroot & Halloumi Salad', price: 'E105', description: 'Grilled halloumi with rocket, cherry tomatoes, ribbon carrots, cucumber, and finished with edible flowers.' },
      { name: 'Prawn Salad', price: 'E165', description: 'With strawberries, mixed lettuce, garlic mayo, olives, and cucumbers, finished with greens.' },
      { name: 'Cajun Chicken Salad', price: 'E145', description: 'Served with cherry tomatoes, cucumber, olives, lettuce, and finished with black pepper feta.' },
      { name: 'Sundried Tomato & Teriyaki Beef Salad', price: 'E155', description: 'Served with avocado, sundried tomatoes, basil pesto, old dill cucumber, finished with edible flowers.' },
      { name: 'Chickpea & Roast Carrot Salad', price: 'E105', description: 'Served with roast feta cheese, avocado, grilled asparagus, pomegranate, and finished with fresh edible flowers.' },
      { name: 'Spicy Crocodile Salad', price: 'E165', description: 'Served with crispy lettuce, cherry tomatoes, cucumber, and olives, finished with homemade dressing.' },
      { name: 'Arancini Balls (V)', price: 'E165', description: 'Panko-crusted risotto with tomato and basil dip, wasabi mayo, and soya and lemon sauce.' },
      { name: 'Stuffed Roast Butternut (V)', price: 'E135', description: 'Stuffed with green bean ratatouille and basmati rice, topped with plain yogurt and honey sauce.' },
      { name: 'Garlic and Lentil Biryani (V)', price: 'E185', description: 'Served with prego sauce, tzatziki, basil, and honey sauce.' },
    ],
  },
  pizza: {
    title: 'Pizza',
    icon: Pizza,
    gradient: 'from-red-900/20 to-orange-900/20',
    items: [
      { name: 'The Meaty (M)', price: 'E165', description: 'A tomato base with beef mince, cheddar, and mozzarella, topped with mixed peppers.' },
      { name: 'The Meaty (L)', price: 'E185', description: 'A tomato base with beef mince, cheddar, and mozzarella, topped with mixed peppers.' },
      { name: 'Four in One (M)', price: 'E165', description: 'A tomato base loaded with pepperoni, ham, beef mince, and bacon, plus cheddar and mozzarella cheese.' },
      { name: 'Four in One (L)', price: 'E195', description: 'A tomato base loaded with pepperoni, ham, beef mince, and bacon, plus cheddar and mozzarella cheese.' },
      { name: 'Veggie Lover (M)', price: 'E145', description: 'A tomato base, mushrooms, mixed peppers, onions, cheddar, mozzarella, and olives, finished with greens.' },
      { name: 'Veggie Lover (L)', price: 'E165', description: 'A tomato base, mushrooms, mixed peppers, onions, cheddar, mozzarella, and olives, finished with greens.' },
      { name: 'Chicken Supreme (M)', price: 'E95', description: 'A tomato base topped with chicken, mushrooms, mixed peppers, onions, cheddar, and mozzarella.' },
      { name: 'Chicken Supreme (L)', price: 'E165', description: 'A tomato base topped with chicken, mushrooms, mixed peppers, onions, cheddar, and mozzarella.' },
      { name: 'Mexican Pizza (M)', price: 'E155', description: 'A tomato base with mince, jalapeño, mixed peppers, onions, cheddar, and mozzarella, topped with fresh chopped chilli.' },
      { name: 'Mexican Pizza (L)', price: 'E185', description: 'A tomato base with mince, jalapeño, mixed peppers, onions, cheddar, and mozzarella, topped with fresh chopped chilli.' },
    ],
  },
  pasta: {
    title: 'Pasta',
    icon: Utensils,
    gradient: 'from-orange-900/20 to-amber-900/20',
    items: [
      { name: 'Oxtail Ragu', price: 'E235', description: 'Slow-braised deboned oxtail with chilli napolitana, parmesan shavings, and asparagus. Penne, tagliatelle, or linguine.' },
      { name: 'Prawn Aglio Olio', price: 'E265', description: 'Pan-grilled prawns with garlic, olive oil, and herbs.' },
      { name: 'Arrabbiata Pasta', price: 'E165', description: 'Chilli tomato sauce with grilled baby marrow and cherry tomatoes, topped with parmesan cheese.' },
      { name: 'Creamy Chicken & Cherry Tomato', price: 'E145', description: 'With rocket, sweet chilli sauce, and sliced green chilli, topped with ribbon carrots and baby marrow.' },
      { name: 'Prawn Alfredo Pasta', price: 'E215', description: 'With olives, garlic, Napolitana sauce, and fresh herbs, finished with parmesan cheese and topped with cherry tomatoes.' },
    ],
  },
  mains: {
    title: 'Main Course',
    icon: Utensils,
    gradient: 'from-amber-900/30 to-red-900/20',
    items: [
      { name: 'Curry: Lamb', price: 'E225', description: 'With basmati rice or roti, served with mashed potato and grilled vegetables. Condiments include tomato and chilli salsa, chutney, and sliced banana.' },
      { name: 'Curry: Chicken', price: 'E175', description: 'With basmati rice or roti, served with mashed potato and grilled vegetables. Condiments include tomato and chilli salsa, chutney, and sliced banana.' },
      { name: 'Curry: Beef', price: 'E195', description: 'With basmati rice or roti, served with mashed potato and grilled vegetables. Condiments include tomato and chilli salsa, chutney, and sliced banana.' },
      { name: 'Sweet and Sour Lamb Shank Curry', price: 'E365', description: 'Served with mashed potato and grilled vegetables.' },
      { name: 'Espinho Pork Ribs', price: 'E345', description: 'Served with gourmet chips and BBQ sauce.' },
      { name: 'Grilled Baby Chicken', price: 'E225', description: 'Served with peri-peri or BBQ sauce, finished with gourmet Espinho chips.' },
      { name: 'Slow Braised Oxtail', price: 'E335', description: 'Served with mashed potato and topped with grilled vegetables.' },
      { name: 'Espinho 1kg Tomahawk for Two', price: 'E1,405', description: 'Carved tableside by the chef, served with hero salad, chargrilled vegetables, gourmet chips, and sauces of the day. Includes two glasses of red wine.', featured: true },
      { name: 'Pan Grilled Ostrich Fillet', price: 'E295', description: 'Served with berry compote, sweet potato mash, glazed carrots, and broccoli, finished with rosemary and thyme.' },
      { name: 'Cheese Burger', price: 'E95', description: 'Served with chips.' },
      { name: 'Duck à la Orange', price: 'E315', description: 'Confit duck leg with baby beetroot, mange tout, and grilled apples, finished with orange sauce.' },
      { name: 'Pan Grilled Fillet', price: 'E365', description: 'Black pepper fillet with grilled glazed carrots, tenderstem broccoli, and garlic mash, served with red wine chocolate jus.' },
      { name: 'Vegetarian Paella', price: 'E215', description: 'With rice, chickpeas, broccoli, baby marrow, carrots, and butter beans, topped with homemade tzatziki.' },
      { name: 'Espinho Meat Lovers for Two', price: 'E865', description: 'Beef sausage, lamb chops, chicken wings, and beef strips, served with chakalaka, peri-peri sauce, BBQ sauce, and your choice of pap or Espinho chips.' },
      { name: 'Espinho Meat Lovers for Four', price: 'E1,415', description: 'Beef sausage, lamb chops, chicken wings, and beef strips, served with chakalaka, peri-peri sauce, BBQ sauce, and your choice of pap or Espinho chips.' },
      { name: 'Goat Curry', price: 'E205', description: 'With basmati rice or roti, served with mashed potato and grilled vegetables. Condiments include tomato and chilli salsa, chutney, and sliced banana.' },
      { name: 'Makhaya Chicken', price: 'E165', description: 'Served with basmati rice or roti, mashed potato, and grilled vegetables. Condiments include tomato and chilli salsa, chutney, and sliced banana.' },
    ],
  },
  fire: {
    title: 'From the Fire',
    icon: Flame,
    gradient: 'from-red-900/30 to-orange-900/20',
    items: [
      { name: 'Sirloin 300g', price: 'E185', description: 'Sourced from the Kalahari. Our steak is matured for 21 days and cooked over an open flame. Served with homemade basting, seasonal vegetables, and your choice of starch.' },
      { name: 'Prime Rib 300g', price: 'E285', description: 'Kalahari-matured 21 days, served with homemade basting, seasonal vegetables, and choice of starch.' },
      { name: 'Rib Eye 300g', price: 'E255', description: 'Kalahari-matured 21 days, served with homemade basting, seasonal vegetables, and choice of starch.' },
      { name: 'Chalmer Tomahawk 800g', price: 'E645', description: 'Kalahari-matured 21 days, served with homemade basting, seasonal vegetables, and choice of starch.', featured: true },
      { name: 'Lamb Chops', price: 'E295', description: 'Sourced from the Kalahari. Cooked over an open flame and served with homemade basting and starch of choice.' },
      { name: 'Rack of Lamb', price: 'E425', description: 'Kalahari-matured. Cooked over open flame, served with homemade basting and starch of choice.' },
    ],
  },
  sea: {
    title: 'From the Sea',
    icon: Fish,
    gradient: 'from-blue-900/20 to-cyan-900/20',
    items: [
      { name: '7 Queen Prawns', price: 'E295', description: 'All served with your choice of gourmet chips, rice, or mashed potato, accompanied by a trio of sauces (garlic, peri-peri, and lemon butter).' },
      { name: '5 Grilled Langoustine', price: 'E365' },
      { name: '6 King Prawns', price: 'E395' },
      { name: 'Espinho Seafood Platter for Two', price: 'E795', description: 'Lobster tail, 2 langoustines, 4 king prawns, 4 queen prawns, and 180g grilled calamari, served with grilled vegetables and your choice of rice or gourmet chips.' },
      { name: 'Espinho La Familia Seafood Platter', price: 'E1,945', description: 'A lavish platter featuring 2 lobster tails, 4 langoustines, 4 king prawns, 8 queen prawns, 300g grilled calamari, and deep-fried calamari heads. Served with a generous portion of gourmet chips, grilled vegetables, and rice, all finished with your choice of prego sauce, garlic sauce, and lemon honey sauce.', featured: true },
      { name: 'Lobster Thermidor', price: 'E375', description: 'Bruleéd Mornay sauce, wild mushrooms with spicy rice, roasted gourmet chips, and vegetables.' },
      { name: 'Pan Grilled Salmon', price: 'E325', description: 'Served with risotto rice, lemon butter greens, teriyaki sauce, and topped with glazed carrots.' },
      { name: 'Grilled Baby Kingklip', price: 'E365', description: 'Served with vegetable stir-fry and finished with beetroot puree and lemon wedges.' },
      { name: 'Healthy White Wine Poached Salmon', price: 'E335', description: 'Served with fresh sliced cucumber, poached asparagus, garlic mayo, and greens.' },
      { name: 'Deep Fried / Grilled Calamari', price: 'E215', description: 'Served with homemade chips and vegetables, finished with garlic mayo.' },
    ],
  },
  tapas: {
    title: 'Tapas / Bar',
    icon: Beer,
    gradient: 'from-yellow-900/20 to-amber-900/20',
    items: [
      { name: 'Chicken and Avocado', price: 'E215', description: 'Filled with deep-fried chicken and tomato salsa, and finished with avocado.' },
      { name: 'Beef and Olive Teriyaki', price: 'E275', description: 'Grilled beef strips with teriyaki sauce, lettuce, olive and tomato salsa.' },
      { name: 'Prawns Tapas', price: 'E315', description: 'Served with crispy lettuce, lemon segments, tomato, and avocado salsa.' },
      { name: 'Gummed Beef Burger for Two w/ 2x Sibebe Beer', price: 'E565', description: 'Served with gummed chips, tomato chilli salsa, and home-made chutney.' },
      { name: 'Pork Chops Platter for 1', price: 'E395', description: 'Pork chops with pork sausage, tomato and onion chilli salad, and chips.' },
      { name: 'Espinho Meat Platter for 2 w/ 2x 500ml Beer', price: 'E845', description: 'Pork ribs, chicken wings, sausage, and beef strips, served with a side of chips and green salad.' },
      { name: 'Friends Platter for 4 w/ 4x Sibebe Beer', price: 'E1,650', description: 'Includes 4 lamb chops, 12 chicken wings, 300g beef strips, 4 corn chops, 200g beef sausage, tomato chilli salsa, rolls, chakalaka, and chips, with BBQ, Prego, and sweet chilli sauces on the side.' },
      { name: 'Snack Platter', price: 'E275', description: 'Grilled halloumi, samoosas, rissoles, beef kebabs, sweet chilli sauce, and prego sauce.' },
      { name: 'Deep Fried Hake, Grilled Calamari and Squid Heads for 2', price: 'E425', description: 'Panko-crusted risotto served with a tomato and basil dip, wasabi mayo, and a soya and lemon sauce.' },
      { name: 'Home-Made Focaccia and Avocado', price: 'E175', description: 'Confit tomatoes, red onion, roasted butter nut, and grapes.' },
      { name: 'Espinho Beef Prego', price: 'E115', description: 'Served with tomato, lettuce, cucumber, prego garlic sauce and home-made chips.' },
      { name: 'Espinho Chicken Prego', price: 'E105', description: 'Served with tomato, lettuce, cucumber, prego garlic sauce and home-made chips.' },
    ],
  },
  platters: {
    title: 'Platters',
    icon: Layers,
    gradient: 'from-amber-900/30 to-yellow-900/30',
    items: [
      { name: 'Prestige Oxtail & Chop Board', price: 'E1,200', description: 'Served with Oxtail 700g, Lamb Chops 800g, Half Chicken, Wors 100g, Pap 2ptns, Chakalaka, Spinach and Butternut.' },
      { name: 'Espinho Ultimate Meat Board', price: 'E1,600', description: 'Sirloin 800g, Lamb Chops 800g, Half Chicken, Pork Ribs 700g, Wors 100g, 10 Buffalo Wings, Grilled Vegies, Spinach, Butternut, Chips and Rice.' },
      { name: 'Espinho Gold Platter', price: 'E1,850', description: 'Sirloin 1kg, Lamb Chops 800g, Half Chicken, Pork Ribs 700g, Beef Short Rib or Oxtail 700g, 10 Wings, Roasted Vegies, Butternut, Spinach, and Wedges.', featured: true },
      { name: 'Prestige Oxtail Chop Board', price: 'E1,650', description: 'Oxtail 1.2kg, Lamb Chops 1kg, Full Chicken, Wors 100g, Pap 2ptns, Chakalaka, Spinach, and Butternut.' },
      { name: 'The Espinho Ultimate Meat Board', price: 'E2,200', description: 'Sirloin 1kg, Lamb Chops 1kg, Full Chicken, 14 Buffalo Wings, Pork Ribs 1.2kg, Boerewors 2 Coils, Grilled Vegies, Butternut, Spinach, Chips and Rice.' },
      { name: 'Espinho Gold Family Platter', price: 'E2,800', description: 'Sirloin 1.5kg, Lamb Chops 1.2kg, Full Chicken, Pork Ribs 1kg, Oxtail / Beef Short Ribs 1kg, 14 Wings, Roast Vegies, Spinach, Butternut, Wedges 2 ptns.' },
    ],
  },
  setmenus: {
    title: 'Set Menus',
    icon: Sparkles,
    gradient: 'from-amber-900/30 to-amber-800/20',
    items: [
      { name: 'Set Menu 1 — 3 Course (per person)', price: 'E450', description: 'Starter: Espinho Greek Salad. Main: Grilled Peri-Peri / BBQ Baby Chicken OR Grilled Beef Fillet. Dessert: Mini Red Velvet Cake.' },
      { name: 'Set Menu 2 — 3 Course (per person)', price: 'E565', description: 'Starters: Kudu Beef Carpaccio & Soup of the Day. Main: Pan-Grilled Ostrich Fillet OR Stuffed Chicken Breast. Dessert: Red Velvet with Ice Cream.' },
      { name: 'Set Menu 3 (per person)', price: 'E745', description: 'Main: Chicken Ballotine OR Butter Grilled Salmon OR Pan-Grilled Ostrich Fillet. Desserts: Lemon Sorbet & Mini Red Velvet Cake.' },
      { name: 'Set Menu 4 — 6 Course (per person)', price: 'E1,335', description: 'Jalapeño Pops, Grilled Halloumi, Cajun Chicken Salad, Combo of Salmon and 2 King Prawns, Pineapple Sorbet, Mini Red Velvet Cake & Fruit Platters.', featured: true },
    ],
  },
  dessert: {
    title: 'Dessert',
    icon: Cake,
    gradient: 'from-pink-900/20 to-red-900/20',
    items: [
      { name: 'Traditional Malva Pudding', price: 'E95', description: 'Served with custard or ice cream.' },
      { name: 'Crème Brûlée', price: 'E105', description: 'Raspberry, berry compote, and sugar work.' },
      { name: 'Mixed Berry Cheesecake', price: 'E105', description: 'With whipped cream, blueberries, strawberries, and fresh mint, served with berry coulis.' },
      { name: 'Carrot Cake', price: 'E125', description: 'With fresh berries and vanilla ice cream.' },
      { name: 'Fruit Platter', price: 'E95', description: 'Seasonal fruits.' },
      { name: 'Cheese Platter', price: 'E175', description: 'With savory crackers, preserves, grapes, strawberries, and nuts.' },
      { name: 'Blueberry Cheese Cake', price: 'E105', description: 'Served with berries compote.' },
      { name: 'Chocolate Fondant', price: 'E95', description: 'With chocolate sauce and ice cream.' },
      { name: 'Warm Apple and Cinnamon Crumble', price: 'E117', description: 'Served with pastry cream and ice cream.' },
    ],
  },
  kids: {
    title: 'Kids',
    icon: Baby,
    gradient: 'from-amber-900/15 to-orange-900/15',
    items: [
      { name: 'Chicken Nuggets', price: 'E75', description: 'With homemade chips and tomato sauce.' },
      { name: 'Macaroni and Cheese', price: 'E65', description: 'With cheese sauce and fresh tomatoes.' },
      { name: '3 Mini Burgers', price: 'E95', description: 'With crispy lettuce, sliced tomato, cucumber, tomato sauce, and mayonnaise.' },
      { name: 'Pork Ribs', price: 'E85', description: 'With homemade chips and BBQ sauce.' },
      { name: 'Margarita Pizza', price: 'E65', description: 'With Napolitana sauce, sliced tomatoes, and topped with mozzarella cheese.' },
    ],
  },
  cocktails: {
    title: 'Cocktails',
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
  wines: {
    title: 'Wines',
    icon: Wine,
    gradient: 'from-purple-900/20 to-pink-900/20',
    items: [
      { name: 'Cinsation Chardonnay', category: 'Chardonnay 750ml', price: 'E450' },
      { name: 'Esticulan Chardonnay', category: 'Chardonnay 750ml', price: 'E550' },
      { name: 'Fat Bastard Chardonnay', category: 'Chardonnay 750ml', price: 'E320' },
      { name: 'Hamilton Russell Chardonnay', category: 'Chardonnay 750ml', price: 'E1,400' },
      { name: 'Lona Chardonnay', category: 'Chardonnay 750ml', price: 'E750' },
      { name: 'Jordan Nine Yards Chardonnay', category: 'Chardonnay 750ml', price: 'E1,050' },
      { name: 'Paul Cluver Chardonnay', category: 'Chardonnay 750ml', price: 'E630' },
      { name: 'Durbanville Hills Chenin Blanc', category: 'Chenin Blanc 750ml', price: 'E175' },
      { name: 'Durbanville Hills Collectors Reserve', category: 'Chenin Blanc 750ml', price: 'E245' },
      { name: 'Holden Manz Chenin Blanc', category: 'Chenin Blanc 750ml', price: 'E330' },
      { name: 'Ken Forrester Petit Chenin Blanc', category: 'Chenin Blanc 750ml', price: 'E150' },
      { name: 'Kleine Zalze C2 Chenin Blanc', category: 'Chenin Blanc 750ml', price: 'E230' },
      { name: 'Spier Chenin Blanc', category: 'Chenin Blanc 750ml', price: 'E650' },
      { name: 'De Grendel Cape of Good Hope', category: 'Sauvignon Blanc 750ml', price: 'E200' },
      { name: 'Diemersdal Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E180' },
      { name: 'Eagles Nest Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E750', featured: true },
      { name: 'Stark Conde Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E805' },
      { name: 'Nederburg Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E250' },
      { name: 'Durbanville Hills Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E170' },
      { name: 'Fat Bastard Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E280' },
      { name: 'Plaisir De Merle Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E550' },
      { name: 'Springfield Whole Berry Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E340' },
      { name: 'Warwick First Lady Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E230' },
    ],
  },
  spirits: {
    title: 'Spirits',
    icon: Coffee,
    gradient: 'from-amber-900/30 to-yellow-900/20',
    items: [
      { name: 'Johnnie Walker Gold Label Reserve', category: 'By Tots', price: 'E240', featured: true },
      { name: 'Johnnie Walker King George', category: 'By Tots', price: 'E500', featured: true },
      { name: 'Macallan 18yrs', category: 'By Tots', price: 'E470', bottlePrice: 'E14,100' },
      { name: 'Macallan 15yrs', category: 'By Tots', price: 'E250', bottlePrice: 'E7,400' },
      { name: 'Macallan 12yrs', category: 'By Tots', price: 'E150', bottlePrice: 'E4,550' },
      { name: 'Glenfiddich 21yrs', category: 'By Tots', price: 'E420', bottlePrice: 'E12,400' },
      { name: 'Glenfiddich 18yrs', category: 'By Tots', price: 'E115', bottlePrice: 'E3,450' },
      { name: 'Glenmorangie 18yrs', category: 'By Tots', price: 'E110', bottlePrice: 'E3,300' },
      { name: 'Chivas Regal 18yrs', category: 'By Tots', price: 'E125', bottlePrice: 'E3,750' },
      { name: 'Hennessy XO', category: 'Cognac', price: 'E1,400' },
      { name: 'Remy Martin XO', category: 'Cognac', price: 'E1,500' },
      { name: 'Bombay Sapphire', category: 'Gin', price: 'E40' },
      { name: "Hendrick's Classic", category: 'Gin', price: 'E45' },
      { name: 'Inverroche Verdant', category: 'Gin', price: 'E55' },
      { name: 'José Cuervo Silver', category: 'Tequila', price: 'E40' },
      { name: 'Don Julio Reposado', category: 'Tequila', price: 'E55' },
      { name: 'Olmeca Blanco', category: 'Tequila', price: 'E55' },
    ],
  },
  beer: {
    title: 'Beer & Beverages',
    icon: Beer,
    gradient: 'from-yellow-900/20 to-amber-900/15',
    items: [
      { name: 'Sibebe', category: 'Local Beer', price: 'E25' },
      { name: 'Castle Lager', category: 'Beer', price: 'E25' },
      { name: 'Corona', category: 'Beer', price: 'E33' },
      { name: 'Heineken', category: 'Beer', price: 'E33' },
      { name: 'Stella Artois', category: 'Beer', price: 'E30' },
      { name: 'Windhoek Draught 440ml', category: 'Beer', price: 'E45' },
      { name: 'Jack Black', category: 'Beer', price: 'E33' },
      { name: "Hunter's Gold", category: 'Cider', price: 'E33' },
      { name: "Hunter's Extreme", category: 'Cider', price: 'E33' },
      { name: 'Bernini Blush', category: 'Cider', price: 'E35' },
      { name: 'Bernini Classic', category: 'Cider', price: 'E35' },
      { name: 'Savanna Dry 330ml', category: 'Cider', price: 'E33' },
      { name: 'Coke / Coke Zero 330ml', category: 'Soft Drinks', price: 'E25' },
      { name: 'Sprite 330ml', category: 'Soft Drinks', price: 'E25' },
      { name: 'Appletiser 275ml', category: 'Soft Drinks', price: 'E40' },
      { name: 'Schweppes Tonic Water 200ml', category: 'Soft Drinks', price: 'E25' },
      { name: 'Manhattan Lemon 500ml', category: 'Juice', price: 'E30' },
      { name: 'Manhattan Peach 500ml', category: 'Juice', price: 'E30' },
      { name: 'Cranberry Cooler 300ml', category: 'Juice', price: 'E30' },
      { name: 'Berry Blaze 300ml', category: 'Juice', price: 'E30' },
      { name: 'Valpré Sparkling Water 500ml', category: 'Water', price: 'E30' },
      { name: 'Valpré Still Water 750ml', category: 'Water', price: 'E45' },
      { name: 'Filter Coffee', category: 'Hot Beverages', price: 'E25' },
      { name: 'Cappuccino', category: 'Hot Beverages', price: 'E30' },
      { name: 'Hot Chocolate', category: 'Hot Beverages', price: 'E35' },
      { name: 'Espresso Single', category: 'Hot Beverages', price: 'E25' },
      { name: 'Espresso Double', category: 'Hot Beverages', price: 'E24.99' },
      { name: 'Tea — Earl Grey / English / Chamomile / Five Roses / Rooibos', category: 'Hot Beverages', price: 'E30' },
    ],
  },
};
export const GALLERY_IMAGES = [
  { src: '/images/fillet-redwine.jpg', alt: 'Pan-grilled fillet medallions with red wine' },
  { src: '/images/pasta-prawn.jpg', alt: 'Prawn aglio olio pasta plated with edible flowers' },
  { src: '/images/lamb-shank.jpg', alt: 'Slow-braised lamb shank with mash and vegetables' },
  { src: '/images/grilled-fish.jpg', alt: 'Grilled baby kingklip with vegetable straws' },
  { src: '/images/prawn-salad.jpg', alt: 'Prawn salad in a black bowl' },
  { src: '/images/caesar-salad.jpg', alt: 'Cajun chicken Caesar salad' },
  { src: '/images/dessert-tartlets.jpg', alt: 'Crumble tartlets with vanilla quenelle' },
  { src: '/images/souffle-berries.jpg', alt: 'Soufflé with strawberries and icing sugar' },
  { src: '/images/chocolate-dessert.jpg', alt: 'Chocolate dessert with edible nasturtium' },
  { src: '/images/cocktails.jpg', alt: 'House cocktails behind the bar' },
  { src: '/images/coffee-latte.jpg', alt: 'Latte art with gold-leaf candle' },
  { src: '/images/cappuccino.jpg', alt: 'Cappuccino on marble with gold-leaf bowl' },
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
