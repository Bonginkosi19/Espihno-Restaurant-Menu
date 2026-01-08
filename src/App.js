import React, { useState, useEffect } from 'react';
import { Fish, Utensils, Beef, Wine, GlassWater, Coffee, ShoppingBag, Calendar, X, Phone } from 'lucide-react';

const EspinhoMenu = () => {
  const [activeCategory, setActiveCategory] = useState('seafood');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [showOrderCart, setShowOrderCart] = useState(false);
  const [cart, setCart] = useState([]);
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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        { name: 'Macallan 18 yrs', category: 'By Tots', price: 'E470', bottlePrice: 'E14100' },
        { name: 'Macallan 12yrs', category: 'By Tots', price: 'E150', bottlePrice: 'E4550' },
        { name: 'Macallan 15yrs', catergory: 'By Tots', price: '250', bottleprice: 'E7400' },
        { name: 'Glenfiddich 21yrs', category: 'By Tots', price: 'E420', bottlePrice: 'E12400' },
        { name: 'Glenfiddich 18yrs', category: 'By Tots',price: 'E115', bottleprice: 'E3450' },
        { name: 'Glenfiddich 18yrs', category: 'By Tots', price: 'E115', bottlePrice: 'E3450' },
        { name: 'Glenmorangie 18yrs', catergory: 'By Tots', price: "E110', bottlepice: 'E3300' },
        { name: 'Chivas Regal 18yrs', category: 'By Tots', price: 'E125', bottlePrice: 'E3750' }
      ]
    }
  };

  const CategoryIcon = categories[activeCategory].icon;

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button
          onClick={() => setShowReservation(true)}
          className="bg-gradient-to-r from-amber-600 to-amber-500 text-black p-4 rounded-full shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-300 group"
          title="Reserve a Table"
        >
          <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
        <button
          onClick={() => setShowOrderCart(true)}
          className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 transition-all duration-300 group relative"
          title="View Cart"
        >
          <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowReservation(false)}>
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-amber-400/30 rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowReservation(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2"
              title="Close and return to menu"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-8">
              <Calendar size={48} className="text-amber-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-400 mb-2">Reserve Your Table</h2>
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowOrderCart(false)}>
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-green-400/30 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowOrderCart(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors z-10 bg-black/50 rounded-full p-2"
              title="Close and continue browsing"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-8">
              <ShoppingBag size={48} className="text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-green-400 mb-2">Your Order</h2>
              <p className="text-gray-400 text-sm">Review and place your order</p>
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
      <div className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-amber-500/10 py-4' : 'bg-black/40 backdrop-blur-md py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <img src="/logo.png" alt="Espinho" className={`mx-auto mb-3 object-contain transition-all duration-500 ${isScrolled ? 'h-12' : 'h-16'}`} />
            <p className="text-amber-400/90 text-xs uppercase tracking-[0.3em] font-light">Modern Contemporary Italian Dining</p>
            <p className="text-amber-400/60 text-xs mt-1">Siteki, Eswatini</p>
          </div>
        </div>
      </div>

      <div className="h-32"></div>

      <div className="sticky top-28 z-40 bg-gradient-to-b from-black via-black/98 to-transparent backdrop-blur-xl border-b border-amber-400/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {Object.entries(categories).map(([key, cat]) => {
              const Icon = cat.icon;
              return (
                <button key={key} onClick={() => setActiveCategory(key)} className={`flex items-center gap-3 px-6 py-3.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === key ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' : 'bg-zinc-900/50 text-gray-300 hover:bg-zinc-800/70 hover:text-amber-400 border border-zinc-800/50'}`}>
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="tracking-wide">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50"></div>
            <CategoryIcon size={36} className="text-amber-400" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-amber-400 tracking-tight">{categories[activeCategory].title}</h2>
          <p className="text-gray-400 text-sm uppercase tracking-widest">Crafted with Excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories[activeCategory].items.map((item, idx) => (
            <div key={idx} className={`group relative bg-gradient-to-br ${categories[activeCategory].gradient} backdrop-blur-sm rounded-xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${item.featured ? 'border-amber-400/40 shadow-lg shadow-amber-500/10' : 'border-zinc-800/50 hover:border-amber-400/30'}`}>
              {item.featured && (
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-xs font-bold uppercase tracking-wider rounded-full">Signature</div>
              )}
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors leading-tight">{item.name}</h3>
                <span className="text-2xl font-bold text-amber-400 whitespace-nowrap flex-shrink-0">{item.price}</span>
              </div>
              {item.category && <p className="text-xs uppercase tracking-widest text-amber-400/50 mb-3 font-light">{item.category}</p>}
              {item.description && <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>}
              {item.bottlePrice && (
                <div className="mt-4 pt-4 border-t border-zinc-700/50">
                  <p className="text-sm text-gray-500 font-light">By Bottle: <span className="text-amber-400 font-semibold">{item.bottlePrice}</span></p>
                </div>
              )}
              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full bg-gradient-to-r from-green-600/20 to-green-500/20 hover:from-green-600 hover:to-green-500 border border-green-500/30 hover:border-green-500 text-green-400 hover:text-white px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
                <span>{cart.find(c => c.name === item.name) ? `Added (${cart.find(c => c.name === item.name).quantity})` : 'Add to Order'}</span>
              </button>
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-500 rounded-tr-xl"></div>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative mt-24 border-t border-amber-400/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-amber-400 mb-4 tracking-wide">Visit Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Plot 136/180, Flame Tree Park<br/>Behind Lubombo Mall<br/>Siteki, Eswatini</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-amber-400 mb-4 tracking-wide">Hours</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Daily: 08:00 AM - 10:00 PM<br/>Lunch: 12:00 PM - 2:30 PM<br/>Dinner: 6:00 PM - 10:00 PM</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-amber-400 mb-4 tracking-wide">Contact</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <a href="tel:76796708" className="hover:text-amber-400 transition-colors">76796708</a><br/>
                <a href="mailto:info.espinho@swazi.net" className="hover:text-amber-400 transition-colors">info.espinho@swazi.net</a><br/>
                <a href="https://www.instagram.com/espinho_restaurant/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">@espinho_restaurant</a>
              </p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-zinc-800/50">
            <p className="text-gray-600 text-xs">© 2025 Espinho Restaurant & Bar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EspinhoMenu;
