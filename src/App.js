import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Fish, Utensils, Beef, Wine, GlassWater, Coffee, ShoppingBag, Calendar, X, Phone, Search, MapPin, Clock, Instagram, Mail, ArrowUp, Star, Users, Briefcase, ChevronRight } from 'lucide-react';

const EspinhoMenu = () => {
  const [activeCategory, setActiveCategory] = useState('seafood');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [showOrderCart, setShowOrderCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const menuRef = useRef(null);
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showReservation || showOrderCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showReservation, showOrderCart]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setShowReservation(false);
        setShowOrderCart(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categories = {
    seafood: {
      title: 'Seafood & Shellfish',
      icon: Fish,
      gradient: 'from-blue-900/20 to-cyan-900/20',
      items: [
        { name: 'Italian Salmon Ressoto', price: 'E255', description: 'Pan fried scottish salmon with creamed horse radish, garlic, onions, arboriorice and white wine, finished with a saffron and parmesan cream sauceand tempura prawns' },
        { name: 'Italian Asian Salmon', price: 'E210', description: 'Seared salmon fillet, set on a teriyaki stir-fry, charred exotic mushrooms with a wasabi enhanced beurre blanc and a complement of a squid wafer' },
        { name: 'Italian Basil Salmon', price: 'E270', description: 'Scottish salmon grilled to perfection, served with homemade pickled cucumber, basil pesto sweet potato rounds and served with teriyaki reduction and micro herbs' },
        { name: 'Shelfish', price: 'Market Price', description: 'Prepared the traditional Mozambican way and served with seasonal vegetables and a choice of rice or chips' },
        { name: 'Queen Prawns', price: 'E345' },
        { name: 'King Prawns', price: 'E365' },
        { name: 'Langoustines', price: 'E410' },
        { name: 'Baby Lobster', price: 'E415' },
        { name: 'Lobster Thermidor', price: 'E480' },
        { name: 'Prawn on Pan', price: 'E110' },
        { name: 'Prawn and Calamari', price: 'E320', description: 'A platter of six tiger prawns with squid heads, grilled calamari on basmati rice, served with vegetables' },
        { name: 'Prawn Platter', price: 'E230', description: 'A Dozen Tiger prawns sautéed in lemon, garlic & periperi on basmati rice with seasonal vegetables' },
        { name: "Ladies' Platter", price: 'E680', description: 'Four queen and tiger medium prawns serves with seasonal vegetables and savoury rice' },
        { name: 'Shellfish Platter', price: 'E855', description: 'Combination of a baby lobste,queen and tiger medium prawns served with seasonal vegetables and savoury rice' },
        { name: 'Seafood Platter for Two', price: 'E1400', description: 'Baby lobster, queen and tiger medium prawns, calamari, mussels and line fish served with seasonal vegetables and rice (Langoustine option available)' }
      ]
    },
    pasta: {
      title: 'Pastas & Curry',
      icon: Utensils,
      gradient: 'from-orange-900/20 to-red-900/20',
      items: [
        { name: 'Itallian Vegetable Stack', price: 'E225', description: 'Tian of sweet potato rosti, field mushroom, roasted peppers & tofu served with tomato beure blanc' },
        { name: 'Vegetarian Pasta (V)', price: 'E225', description: 'Grilled baby corn and peas, cumin and garlic infused olive oil and served with penne, linguini or tagliatelle' },
        { name: 'Wild Mushroom Risotto (V)', price: 'E260', description: 'Grilled exotic mushrooms pan fried in olive oil with arborio rice, white wine, vegetable stock and cream, finished with a splash of truffle oil, parmesan tuile, basil pesto and micro herbs' },
        { name: 'Italian Pallastro', price: 'E220', description: 'Poached chicken thighs, truffle and parmesan infused cream sauce, rocket, lemon pepper pearls and crispy crackling' },
        { name: 'Italian Prawn Pasta', price: 'E240', description: 'Spiced prawn tails in sundried tomato, creamy fresh basil, asparagus, with penne or linguini & parmesan gratinee' },
        { name: 'Chicken Curry', price: 'E255', description: 'Chicken thighs and breast braised in a coconut infused mild blend of spices, toasted almonds dehydrated vine tomatoes, roti and sambals' },
        { name: 'Prawn Curry', price: 'E310', description: 'Simmered in traditional durban spices and tamarind served with basmati rice, sambals and poppadum' },
        { name: 'Lamb Curry', price: 'E360', description: 'Hot or mild Beef cubes braised & slow cooked the south African way' },
        { name: 'Beef Curry', price: 'E340', description: 'Hot or mild Beef cubes braised & slow cooked the south African way' }
      ]
    },
    meat: {
      title: 'Meat & Poultry',
      icon: Beef,
      gradient: 'from-red-900/20 to-orange-900/20',
      items: [
        { name: 'Traditional Rump 300g', price: 'E245', description: 'Our meat is wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces' },
        { name: 'Traditional Fillet 300g', price: 'E255', description: 'Our meat is wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces' },
        { name: 'Rib Eye 300g', price: 'E325', description: 'Our meat is wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces' },
        { name: 'Buffallo Wings', price: 'E125' },
        { name: 'Oxtail', price: 'E365', description: 'Served on the bone with rice and saffron new potatoes' },
        { name: 'Tomahawk 500g', price: 'E395', description: 'Beef fore-rib with truffle potato, asparagus and baby carrots' },
        { name: 'Lamb Shank', price: 'E405', description: 'Slow roasted curry infused lamb shank with garam masala, cinnamon andcoriander served with mash potato and seasonal vegetables' },
        { name: 'Nikasha Signature', price: 'E350', description: '200g prime cut beef fillet steak, topped with garlic lemon and butter, south coast lobster tail, maraschino cherries, cauliflower puree. Served with seasonal vegetables and potato mash', featured: true },
        { name: 'African Fillet', price: 'E440', description: 'Beef fillet grilled to perfection served with garlic snails and prawns, muesli powder, pan fried mushrooms, potato terrine, basmati rice and port wine jus' },
        { name: 'Flame Grilled Baby Chicken 600g', price: 'E230', description: 'Rubbed with maldon sea salt, fresh chilli and lemon, served with chips' },
        { name: 'Prime Rib', price: 'E310', description: 'Lazy aged prime cut, pearl barley risotto, sautéed seasonal vegetables andport wine jus' },
        { name: 'Duck Leg', price: 'E235', description: 'Slow braised sous vide style duck leg confit with potato dauphinoise, honey glazed root vegetables and topped with fig preserve and port wine jus' },
        { name: 'Pork Ribs', price: 'E280', description: 'Prepared with soya, honey and ginger, served with sumo chips and braised vegetables' },
        { name: 'Beef Fillet and Empanada', price: 'E380', description: 'Grilled fillet, braised beef cheek pie, sautéed mushrooms, parsnip purée and thyme infused red wine reduction' },
        { name: 'Lamb Chops', price: 'E350', description: 'French trimmed, rubbed with dukkah served with mint pea purée and sumo chips' },
        { name: 'Ostrich and Leek', price: 'E280', description: 'An ostrich fillet grilled to perfection, served with creamy leeks and sweet buttered pears, herbed golden baby carrots, finished with a wintery burnt leeks and turmeric pickled leeks, finished off with a port wine jus' },
        { name: 'Braised Pork Belly', price: 'E300', description: 'Slow braised pork belly served with king oyster mushroom, salsa, fresh cherries, apple and potato puree, complimented with basil sprouts and fennel' },
        { name: 'Bushveld Fillet Steak', price: 'E320', description: 'Charred grilled beef fillet, pommes dauphine, green bean and vine tomato salad topped with béarnaise' },
        { name: 'Ostrich Fillet', price: 'E355', description: 'Grilled ostrich fillet with sweet potato and honey puree, roast Mediterranean vegetables and peppercorn sauce' },
        { name: 'Dutch Fillet', price: 'E355', description: 'Pan fried beef loin, wrapped in bell pepper, served on a peppery bath and creamy potato, grill baby corn and caramelized onion' }
      ]
    },
    wines: {
      title: 'Fine Wines',
      icon: Wine,
      gradient: 'from-purple-900/20 to-pink-900/20',
      items: [
        { name: 'De Grendel Cape of Good Hope', category: 'Sauvignon Blanc 750ml', price: 'E540' },
        { name: 'Diemersdal Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E350' },
        { name: 'Diemersfontain Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E380' },
        { name: 'Eagles Nest Sauve Blanc', category: 'Sauvignon Blanc 750ml', price: 'E750' },
        { name: 'Stark Conde Sauv Blanc', category: 'Sauvignon Blanc 750ml', price: 'E805' },
        { name: 'Nederburg', category: 'Sauvignon Blanc 750ml', price: 'E300' },
        { name: 'Durbanville Hills', category: 'Cabernet Sauvignon 750ml', price: 'E400' },
        { name: 'Fat Bastard Cab Sauve', category: 'Cabernet Sauvignon 750ml', price: 'E280' },
        { name: 'Veregenoeg Cab Sauv', category: 'Cabernet Sauvignon 750ml', price: 'E1100' },
        { name: 'Plasir De Marle Cab Sauve', category: 'Cabernet Sauvignon 750ml', price: 'E900' },
        { name: 'Sprinfield Whole Berry Cab Sauve', category: 'Cabernet Sauvignon 750ml', price: 'E600' },
        { name: 'Warwick First Lady Cab Sauve', category: 'Cabernet Sauvignon 750ml', price: 'E400' }
      ]
    },
    cocktails: {
      title: 'Signature Cocktails',
      icon: GlassWater,
      gradient: 'from-cyan-900/20 to-blue-900/20',
      items: [
        { name: 'Espinho Signature', price: 'E165', description: 'Gin, rose syrup, sour mix, camomile tea, graham beck bliss nectar', featured: true },
        { name: 'Pinacolata', price: 'E104', description: 'Bacardi, Pina Coconut Syrup, pineapple, cream and Pineapple juice' },
        { name: 'Long Island', price: 'E195', description: 'Sour mix, Vodka, Gin, Tequila sliver, Bacardi triple sec, coke' },
        { name: 'Magarita', price: 'E135', description: 'Fresh lime, salt, tequila, triple sec' },
        { name: 'Respect Your Elders', price: 'E115', description: 'Gin, Elderflower syrup, lemon juice, Tonic water' },
        { name: 'Cosmopolitan', price: 'E110', description: 'Vodka, cranberry juice, triple sec, orange zest' },
        { name: 'Mojito', price: 'E135', description: 'Fresh lime, fresh wild mint syrup, bacadi rum, mint leave, soda water' },
        { name: 'Hennessy Autograph', price: 'E210', description: 'Hennessy vs, cherry syrup, lime, cherries, orange zest' },
        { name: 'Blue Lagoon', price: 'E135', description: 'Vodka, Sourmix, Kemonade, blue Curacao' }
      ]
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
        { name: 'Chivas Regal 18yrs', category: 'By Tots', price: 'E125', bottlePrice: 'E3750' }
      ]
    }
  };

  const CategoryIcon = categories[activeCategory].icon;

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categories[activeCategory].items;
    return categories[activeCategory].items.filter((item) => {
      const haystack = `${item.name} ${item.description || ''} ${item.category || ''}`.toLowerCase();
      return haystack.includes(q);
    });
    // categories is a stable in-component constant; only the active key matters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, activeCategory]);

  const cartItemCount = cart.reduce((n, i) => n + i.quantity, 0);

  const heroBg = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80';

  const todaysSpecial = [
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

  const specialtyTabs = [
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

  const [activeSpecialty, setActiveSpecialty] = useState(specialtyTabs[0].key);
  const currentSpecialty = specialtyTabs.find((t) => t.key === activeSpecialty) || specialtyTabs[0];

  const handleEventInquiry = (type) => {
    const message = `Hello Espinho! I'd like to inquire about hosting a ${type} event. Please share availability and packages.`;
    window.open(`https://wa.me/26876796708?text=${encodeURIComponent(message)}`, '_blank');
  };

  const addToCart = (item) => {
    const existingItem = cart.find(i => i.name === item.name);
    if (existingItem) {
      setCart(cart.map(i => i.name === item.name ? {...i, quantity: i.quantity + 1} : i));
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
    // Don't automatically open cart - let user keep browsing
  };

  const removeFromCart = (itemName) => {
    setCart(cart.filter(i => i.name !== itemName));
  };

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemName);
    } else {
      setCart(cart.map(i => i.name === itemName ? {...i, quantity: newQuantity} : i));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('E', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handleOrderNow = () => {
    const orderText = cart.map(item => `${item.quantity}x ${item.name} - ${item.price}`).join('%0A');
    const total = getCartTotal();
    const message = `Hello Espinho! I would like to place an order:%0A%0A${orderText}%0A%0ATotal: E${total.toFixed(2)}%0A%0APlease confirm availability and delivery details.`;
    window.open(`https://wa.me/26876796708?text=${message}`, '_blank');
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const message = `New Reservation Request:%0A%0AName: ${reservationData.name}%0APhone: ${reservationData.phone}%0AEmail: ${reservationData.email}%0ADate: ${reservationData.date}%0ATime: ${reservationData.time}%0AGuests: ${reservationData.guests}%0ASpecial Requests: ${reservationData.requests || 'None'}`;
    window.open(`https://wa.me/26876796708?text=${message}`, '_blank');
    setShowReservation(false);
    setReservationData({ name: '', email: '', phone: '', date: '', time: '', guests: '', requests: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white selection:bg-amber-400/30 selection:text-amber-100">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-amber-400 focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Skip to menu
      </a>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col gap-3 md:gap-4">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="bg-zinc-900/90 backdrop-blur border border-amber-400/30 text-amber-400 p-3 rounded-full shadow-xl hover:bg-zinc-800 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >
            <ArrowUp size={20} />
          </button>
        )}
        <button
          onClick={() => setShowReservation(true)}
          aria-label="Reserve a table"
          className="bg-gradient-to-r from-amber-600 to-amber-500 text-black p-4 rounded-full shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
        <button
          onClick={() => setShowOrderCart(true)}
          aria-label={`View cart, ${cartItemCount} items`}
          className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 transition-all duration-300 group relative focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-[24px] h-6 px-1.5 flex items-center justify-center border-2 border-black">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>

      {/* Reservation Modal */}
      {showReservation && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-title"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setShowReservation(false)}
        >
          <div
            className="bg-gradient-to-br from-zinc-900 to-black border border-amber-400/30 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl shadow-amber-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowReservation(false)}
              aria-label="Close reservation form"
              className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <Calendar size={40} className="text-amber-400 mx-auto mb-4" />
              <h2 id="reservation-title" className="font-serif text-3xl font-bold text-amber-400 mb-2">Reserve Your Table</h2>
              <p className="text-gray-400 text-sm">Experience elegance at Espinho</p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={reservationData.name}
                onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={reservationData.phone}
                onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={reservationData.email}
                onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={reservationData.date}
                  onChange={(e) => setReservationData({...reservationData, date: e.target.value})}
                  className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                  required
                />
                <input
                  type="time"
                  value={reservationData.time}
                  onChange={(e) => setReservationData({...reservationData, time: e.target.value})}
                  className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                  required
                />
              </div>
              <select
                value={reservationData.guests}
                onChange={(e) => setReservationData({...reservationData, guests: e.target.value})}
                className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                required
              >
                <option value="">Number of Guests</option>
                <option value="1-2">1-2 guests</option>
                <option value="3-4">3-4 guests</option>
                <option value="5-6">5-6 guests</option>
                <option value="7+">7+ guests</option>
              </select>
              <textarea
                placeholder="Special Requests (Optional)"
                value={reservationData.requests}
                onChange={(e) => setReservationData({...reservationData, requests: e.target.value})}
                rows="3"
                className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors resize-none text-white"
              />
              <button
                onClick={handleReservation}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Confirm via WhatsApp
              </button>
              <p className="text-gray-500 text-xs text-center">
                Or call us directly at <a href="tel:76796708" className="text-amber-400 hover:underline">76796708</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Order Cart Modal */}
      {showOrderCart && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setShowOrderCart(false)}
        >
          <div
            className="bg-gradient-to-br from-zinc-900 to-black border border-green-400/30 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl shadow-green-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOrderCart(false)}
              aria-label="Close cart"
              className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400/60"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <ShoppingBag size={40} className="text-green-400 mx-auto mb-4" />
              <h2 id="cart-title" className="font-serif text-3xl font-bold text-green-400 mb-2">Your Order</h2>
              <p className="text-gray-400 text-sm">Review and confirm via WhatsApp</p>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">Your cart is empty</p>
                <button
                  onClick={() => setShowOrderCart(false)}
                  className="text-amber-400 hover:text-amber-300 text-sm uppercase tracking-wider"
                >
                  Start ordering
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, idx) => (
                    <div key={idx} className="bg-black/50 border border-zinc-700 rounded-lg p-4 flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <p className="text-amber-400 text-sm">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="text-red-400 hover:text-red-300 ml-2"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-700 pt-4 mb-6">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-white">Total:</span>
                    <span className="text-amber-400">E{getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleOrderNow}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Place Order via WhatsApp
                </button>
                <p className="text-gray-500 text-xs text-center mt-4">
                  Your order will be sent to our WhatsApp for confirmation
                </p>
              </>
            )}
          </div>
        </div>
      )}
      {/* Sticky brand header */}
      <header className={`fixed w-full top-0 z-30 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-amber-500/10 py-3' : 'bg-black/40 backdrop-blur-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Espinho Restaurant & Bar" className={`object-contain transition-all duration-500 ${isScrolled ? 'h-9' : 'h-11'}`} />
              <div className="hidden sm:block">
                <p className="text-amber-400/90 text-[10px] uppercase tracking-[0.3em] font-light leading-tight">Modern Italian Dining</p>
                <p className="text-amber-400/50 text-[10px] tracking-widest">Siteki, Eswatini</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
              <a href="#menu" className="px-3 py-2 hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">Menu</a>
              <a href="#visit" className="px-3 py-2 hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">Visit</a>
              <button
                onClick={() => setShowReservation(true)}
                className="ml-2 px-4 py-2 rounded-full border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                Reserve
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero — image bg, dark overlay, centered serif headline */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_75%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
          <p className="font-script text-amber-300 text-3xl md:text-4xl mb-4">Best Italian In Town</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            TASTE THE RICH FLAVOR OF<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500">
              ITALIAN COASTAL CUISINE
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light mb-10">
            We only use five-star quality for our menu — come and get the richness in every food we serve.
          </p>
          <button
            onClick={scrollToMenu}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Go To Menu
            <span className="w-8 h-px bg-black/60 group-hover:w-12 transition-all" />
          </button>

          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.3em] text-gray-400">
            <span className="flex items-center gap-2"><Clock size={14} className="text-amber-400/80" /> Open Daily 08:00 – 22:00</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-amber-400/80" /> Flame Tree Park, Siteki</span>
          </div>
        </div>
      </section>

      {/* Today's Special */}
      <section className="relative py-20 md:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Signature Menu</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Today's Special</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-amber-400/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="h-px w-10 bg-amber-400/40" />
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Specials rotate daily — these are our chef's picks for tonight.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {todaysSpecial.map((s) => (
              <article
                key={s.name}
                className="group bg-gradient-to-b from-zinc-900/90 to-black border border-zinc-800/70 hover:border-amber-400/40 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <span className="absolute top-4 right-4 bg-black/70 backdrop-blur text-amber-400 text-sm font-bold px-3 py-1.5 rounded-full tabular-nums">
                    {s.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{s.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[3.5rem]">{s.blurb}</p>
                  <div className="flex items-center gap-1 mb-5" aria-label={`${s.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < s.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => addToCart({ name: s.name, price: s.price })}
                    className="w-full inline-flex items-center justify-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                  >
                    Choose Now
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties — tabbed image + text */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Quality First For You</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Specialties</h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Authentic flavours from our kitchen and bar — built on high-quality ingredients.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {specialtyTabs.map((t) => {
              const Icon = t.icon;
              const active = activeSpecialty === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveSpecialty(t.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                    active
                      ? 'border border-amber-400 text-amber-400 bg-amber-400/10'
                      : 'border border-zinc-800 text-gray-400 hover:border-amber-400/40 hover:text-amber-400'
                  }`}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div
            key={currentSpecialty.key}
            className="grid md:grid-cols-2 gap-8 md:gap-14 items-center animate-[fadeIn_0.4s_ease-out]"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 md:order-2">
              <img
                src={currentSpecialty.image}
                alt={currentSpecialty.dish}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            <div className="order-2 md:order-1">
              <p className="font-script text-amber-300 text-xl md:text-2xl mb-2">{currentSpecialty.eyebrow}</p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">{currentSpecialty.dish}</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">{currentSpecialty.description}</p>
              <p className="font-serif text-3xl text-amber-400 font-bold mb-8 tabular-nums">{currentSpecialty.price}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => addToCart({ name: currentSpecialty.dish, price: currentSpecialty.price })}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <ShoppingBag size={14} />
                  Add to Order
                </button>
                <button
                  onClick={() => { setActiveCategory(currentSpecialty.key); setSearchQuery(''); scrollToMenu(); }}
                  className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                >
                  See Full {currentSpecialty.label}
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Events */}
      <section className="relative py-20 md:py-28 bg-black border-y border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Choose Your Day</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Dining Events</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-12">
            From intimate celebrations to corporate evenings — we'll build the night around you.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-amber-400/20 hover:border-amber-400/60 rounded-2xl p-8 transition-all text-left overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-all" />
              <Users className="text-amber-400 mb-5 relative" size={32} />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 relative">Private Events</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative">
                Birthdays, anniversaries, intimate dinners. Custom menus, private seating, dedicated service.
              </p>
              <button
                onClick={() => handleEventInquiry('private')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all relative focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Enquire Now
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-amber-400/20 hover:border-amber-400/60 rounded-2xl p-8 transition-all text-left overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-all" />
              <Briefcase className="text-amber-400 mb-5 relative" size={32} />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 relative">Corporate Events</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative">
                Board dinners, team celebrations, client hosting. Set menus, AV-friendly spaces, full-bar service.
              </p>
              <button
                onClick={() => handleEventInquiry('corporate')}
                className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all relative focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                Enquire Now
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category nav + search */}
      <div ref={menuRef} id="menu" className="sticky top-[68px] md:top-[72px] z-20 bg-black/90 backdrop-blur-xl border-y border-amber-400/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1 flex-1"
            >
              {Object.entries(categories).map(([key, cat]) => {
                const Icon = cat.icon;
                const active = activeCategory === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => { setActiveCategory(key); setSearchQuery(''); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                      active
                        ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black shadow-lg shadow-amber-500/30'
                        : 'bg-zinc-900/60 text-gray-300 hover:bg-zinc-800 hover:text-amber-400 border border-zinc-800/50'
                    }`}
                  >
                    <Icon size={16} strokeWidth={2.5} />
                    <span className="tracking-wide">{cat.title}</span>
                  </button>
                );
              })}
            </div>
            <label className="relative lg:w-72 shrink-0">
              <span className="sr-only">Search the menu</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${categories[activeCategory].title.toLowerCase()}…`}
                className="w-full bg-zinc-900/60 border border-zinc-800/70 text-white text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-400/60 focus:bg-zinc-900 transition-colors placeholder:text-gray-500"
              />
            </label>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50"></div>
            <CategoryIcon size={36} className="text-amber-400" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50"></div>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-amber-400 tracking-tight">{categories[activeCategory].title}</h2>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-[0.3em]">Crafted with Excellence</p>
          {searchQuery && (
            <p className="mt-4 text-gray-500 text-sm">
              {filteredItems.length} result{filteredItems.length === 1 ? '' : 's'} for “{searchQuery}”
              <button onClick={() => setSearchQuery('')} className="ml-3 text-amber-400 hover:underline focus:outline-none">
                clear
              </button>
            </p>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
            <Search size={32} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 mb-2">No dishes match “{searchQuery}”.</p>
            <button onClick={() => setSearchQuery('')} className="text-amber-400 text-sm uppercase tracking-wider hover:underline">
              Show all {categories[activeCategory].title.toLowerCase()}
            </button>
          </div>
        ) : (
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => {
            const inCart = cart.find(c => c.name === item.name);
            return (
            <article
              key={`${activeCategory}-${item.name}-${idx}`}
              className={`group relative bg-gradient-to-br ${categories[activeCategory].gradient} backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col ${item.featured ? 'border-amber-400/40 shadow-lg shadow-amber-500/10' : 'border-zinc-800/60 hover:border-amber-400/30'}`}
            >
              {item.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-500/30">
                  Signature
                </div>
              )}
              <div className="flex justify-between items-start mb-3 gap-4">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors leading-tight">
                  {item.name}
                </h3>
                <span className="text-xl md:text-2xl font-bold text-amber-400 whitespace-nowrap flex-shrink-0 tabular-nums">{item.price}</span>
              </div>
              {item.category && (
                <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/60 mb-3 font-light">{item.category}</p>
              )}
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">{item.description}</p>
              )}
              {item.bottlePrice && (
                <div className="mt-4 pt-4 border-t border-zinc-700/50 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-gray-500">By Bottle</span>
                  <span className="text-amber-400 font-semibold tabular-nums">{item.bottlePrice}</span>
                </div>
              )}
              <button
                onClick={() => addToCart(item)}
                aria-label={inCart ? `${item.name} added ${inCart.quantity} times` : `Add ${item.name} to order`}
                className={`mt-5 w-full px-6 py-3 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400/60 ${
                  inCart
                    ? 'bg-green-500/15 border border-green-500/40 text-green-300'
                    : 'bg-zinc-900/60 border border-zinc-700/70 text-gray-300 hover:bg-green-500 hover:border-green-500 hover:text-white'
                }`}
              >
                <ShoppingBag size={15} />
                <span>{inCart ? `Added · ${inCart.quantity}` : 'Add to Order'}</span>
              </button>
            </article>
            );
          })}
        </div>
        )}
      </main>

      <footer id="visit" className="relative mt-24 border-t border-amber-400/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-amber-400/80 text-xs uppercase tracking-[0.4em] mb-3">Visit Espinho</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-400">A seat at the table awaits</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <a
              href="https://maps.google.com/?q=Flame+Tree+Park+Siteki+Eswatini"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900/50 border border-zinc-800/70 hover:border-amber-400/40 rounded-2xl p-6 transition-all hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              <MapPin className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="text-amber-400 font-semibold mb-2 tracking-wide">Find Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plot 136/180, Flame Tree Park<br />
                Behind Lubombo Mall<br />
                Siteki, Eswatini
              </p>
              <span className="text-amber-400/70 text-xs uppercase tracking-widest mt-4 inline-block group-hover:text-amber-400">Open in Maps →</span>
            </a>

            <div className="bg-zinc-900/50 border border-zinc-800/70 rounded-2xl p-6">
              <Clock className="text-amber-400 mb-4" size={24} />
              <h3 className="text-amber-400 font-semibold mb-2 tracking-wide">Opening Hours</h3>
              <dl className="text-gray-400 text-sm leading-relaxed space-y-1">
                <div className="flex justify-between"><dt>Mon – Wed</dt><dd className="tabular-nums">08:00 – 22:00</dd></div>
                <div className="flex justify-between"><dt>Thursday</dt><dd className="tabular-nums">09:00 – 22:00</dd></div>
                <div className="flex justify-between"><dt>Friday</dt><dd className="tabular-nums">08:00 – 22:00</dd></div>
                <div className="flex justify-between"><dt>Saturday</dt><dd className="tabular-nums">09:00 – 22:00</dd></div>
              </dl>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/70 rounded-2xl p-6">
              <Phone className="text-amber-400 mb-4" size={24} />
              <h3 className="text-amber-400 font-semibold mb-2 tracking-wide">Get in Touch</h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>
                  <a href="tel:+26876796708" className="flex items-center gap-2 hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">
                    <Phone size={14} /> +268 76 796 708
                  </a>
                </li>
                <li>
                  <a href="mailto:info.espinho@swazi.net" className="flex items-center gap-2 hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">
                    <Mail size={14} /> info.espinho@swazi.net
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/espinho_restaurant_bar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400">
                    <Instagram size={14} /> @espinho_restaurant_bar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-zinc-800/50">
            <img src="/logo.png" alt="" className="h-8 mx-auto mb-3 opacity-50" />
            <p className="text-gray-600 text-xs tracking-wide">© {new Date().getFullYear()} Espinho Restaurant & Bar · All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EspinhoMenu;
