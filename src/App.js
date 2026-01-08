import React, { useState, useEffect } from 'react';
import { Fish, Utensils, Beef, Wine, GlassWater, Coffee, ShoppingBag, Calendar, X, Phone, MapPin, Clock, Instagram, Mail, Music, Star, Award, Users } from 'lucide-react';

const EspinhoWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('seafood');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [showOrderCart, setShowOrderCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [reservationData, setReservationData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '', requests: ''
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categories = {
    seafood: { title: 'Seafood & Shellfish', icon: Fish, gradient: 'from-blue-900/20 to-cyan-900/20',
      items: [
        { name: 'Italian Salmon Ressoto', price: 'E255', description: 'Pan fried scottish salmon with creamed horse radish, garlic, onions, arboriorice and white wine' },
        { name: 'Seafood Platter for Two', price: 'E1400', description: 'Baby lobster, queen and tiger prawns, calamari, mussels and line fish' },
        { name: 'Queen Prawns', price: 'E345' },
        { name: 'Lobster Thermidor', price: 'E480' }
      ]
    },
    pasta: { title: 'Pastas & Curry', icon: Utensils, gradient: 'from-orange-900/20 to-red-900/20',
      items: [
        { name: 'Wild Mushroom Risotto (V)', price: 'E260', description: 'Grilled exotic mushrooms with arborio rice, white wine, truffle oil' },
        { name: 'Italian Prawn Pasta', price: 'E240', description: 'Spiced prawn tails in sundried tomato, creamy basil, asparagus' }
      ]
    },
    meat: { title: 'Meat & Poultry', icon: Beef, gradient: 'from-red-900/20 to-orange-900/20',
      items: [
        { name: 'Nikasha Signature', price: 'E350', description: '200g beef fillet, lobster tail, maraschino cherries', featured: true },
        { name: 'Tomahawk 500g', price: 'E395', description: 'Beef fore-rib with truffle potato, asparagus' }
      ]
    },
    cocktails: { title: 'Signature Cocktails', icon: GlassWater, gradient: 'from-cyan-900/20 to-blue-900/20',
      items: [
        { name: 'Espinho Signature', price: 'E165', description: 'Gin, rose syrup, camomile tea', featured: true },
        { name: 'Mojito', price: 'E135', description: 'Fresh lime, mint syrup, rum' }
      ]
    }
  };

  const addToCart = (item) => {
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      setCart(cart.map(i => i.name === item.name ? {...i, quantity: i.quantity + 1} : i));
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
  };

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter(i => i.name !== itemName));
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
    const message = `Hello Espinho! Order:%0A%0A${orderText}%0A%0ATotal: E${total.toFixed(2)}`;
    window.open(`https://wa.me/26876796708?text=${message}`, '_blank');
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const message = `Reservation:%0A%0AName: ${reservationData.name}%0APhone: ${reservationData.phone}%0ADate: ${reservationData.date}%0ATime: ${reservationData.time}%0AGuests: ${reservationData.guests}`;
    window.open(`https://wa.me/26876796708?text=${message}`, '_blank');
    setShowReservation(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-3' : 'bg-black/60 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <img src="/logo.png" alt="Espinho" className={`object-contain transition-all ${isScrolled ? 'h-10' : 'h-14'}`} />
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'menu', 'events', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-sm uppercase tracking-wider hover:text-amber-400 transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </nav>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button onClick={() => setShowReservation(true)} className="bg-gradient-to-r from-amber-600 to-amber-500 text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
          <Calendar size={24} />
        </button>
        <button onClick={() => setShowOrderCart(true)} className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all relative">
          <ShoppingBag size={24} />
          {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">{cart.length}</span>}
        </button>
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="text-7xl md:text-9xl font-bold mb-6">Welcome to<br/><span className="text-amber-400">Espinho</span></h1>
          <p className="text-2xl text-gray-300 mb-4 uppercase tracking-widest">Modern Contemporary Italian Dining</p>
          <p className="text-lg text-gray-400 mb-10">Experience Italian hospitality in Siteki, Eswatini</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('menu')} className="bg-amber-400 text-black px-10 py-4 text-sm uppercase font-bold hover:bg-amber-500 transition-all">View Menu</button>
            <button onClick={() => setShowReservation(true)} className="border-2 border-amber-400 text-amber-400 px-10 py-4 text-sm uppercase font-bold hover:bg-amber-400 hover:text-black transition-all">Reserve Table</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-5xl font-bold mb-6">Est. 2020 • <span className="text-amber-400">Italian Heritage</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">A Culinary <span className="text-amber-400">Experience</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">Nestled in Flame Tree Park, Espinho brings Italian traditions with contemporary twist, creating dishes that celebrate innovation and authenticity.</p>
              <p className="text-gray-400 text-lg leading-relaxed">From curated wines to signature cocktails, every element elevates your dining experience.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 p-6 rounded-lg text-center">
                <Award size={40} className="text-amber-400 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-amber-400 mb-2">2+</h4>
                <p className="text-gray-400 text-sm uppercase">Years</p>
              </div>
              <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 p-6 rounded-lg text-center">
                <Star size={40} className="text-amber-400 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-amber-400 mb-2">5★</h4>
                <p className="text-gray-400 text-sm uppercase">Rating</p>
              </div>
              <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 p-6 rounded-lg text-center">
                <Utensils size={40} className="text-amber-400 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-amber-400 mb-2">Fresh</h4>
                <p className="text-gray-400 text-sm uppercase">Daily</p>
              </div>
              <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 p-6 rounded-lg text-center">
                <Users size={40} className="text-amber-400 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-amber-400 mb-2">Warm</h4>
                <p className="text-gray-400 text-sm uppercase">Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Culinary Delights</p>
            <h2 className="text-5xl font-bold mb-6">Our <span className="text-amber-400">Menu</span></h2>
          </div>
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {Object.entries(categories).map(([key, cat]) => {
              const Icon = cat.icon;
              return (
                <button key={key} onClick={() => setActiveCategory(key)} className={`flex items-center gap-3 px-6 py-3 rounded-lg whitespace-nowrap transition-all ${activeCategory === key ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black' : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'}`}>
                  <Icon size={18} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {categories[activeCategory].items.map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${categories[activeCategory].gradient} rounded-xl p-8 border transition-all hover:scale-[1.02] ${item.featured ? 'border-amber-400/40' : 'border-zinc-800/50'}`}>
                {item.featured && <div className="mb-4 px-4 py-1 bg-amber-400 text-black text-xs font-bold uppercase inline-block rounded-full">Signature</div>}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-amber-400">{item.name}</h3>
                  <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                </div>
                {item.description && <p className="text-gray-400 text-sm mb-4">{item.description}</p>}
                <button onClick={() => addToCart(item)} className="w-full bg-green-600/20 hover:bg-green-600 border border-green-500/30 text-green-400 hover:text-white px-6 py-3 rounded-lg text-sm uppercase font-semibold transition-all flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  {cart.find(c => c.name === item.name) ? `Added (${cart.find(c => c.name === item.name).quantity})` : 'Add to Order'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest mb-4">Entertainment</p>
            <h2 className="text-5xl font-bold mb-6">Events & <span className="text-amber-400">Live Music</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/30 p-8 rounded-xl">
              <p className="text-amber-400 text-sm uppercase mb-2">April 19, 2025</p>
              <h3 className="text-3xl font-bold mb-4">DJ Fresh Live</h3>
              <p className="text-gray-400">SA's legendary DJ Fresh plus top local DJs</p>
            </div>
            <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/30 p-8 rounded-xl">
              <p className="text-amber-400 text-sm uppercase mb-2">October 4, 2025</p>
              <h3 className="text-3xl font-bold mb-4">All Black Affair</h3>
              <p className="text-gray-400">Azana live with full band. From E70</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Visit <span className="text-amber-400">Us</span></h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <MapPin size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Location</h3>
              <p className="text-gray-400">Plot 136/180, Flame Tree Park<br/>Siteki, Eswatini</p>
            </div>
            <div>
              <Clock size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Hours</h3>
              <p className="text-gray-400">Daily: 08:00 AM - 10:00 PM</p>
            </div>
            <div>
              <Phone size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Contact</h3>
              <p className="text-gray-400">
                <a href="tel:76796708" className="hover:text-amber-400">76796708</a><br/>
                <a href="mailto:info.espinho@swazi.net" className="hover:text-amber-400">info.espinho@swazi.net</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {showReservation && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowReservation(false)}>
          <div className="bg-zinc-900 border border-amber-400/30 rounded-2xl max-w-md w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowReservation(false)} className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 bg-black/50 rounded-full p-2"><X size={24} /></button>
            <Calendar size={48} className="text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">Reserve Table</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Name" value={reservationData.name} onChange={(e) => setReservationData({...reservationData, name: e.target.value})} className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none text-white" />
              <input type="tel" placeholder="Phone" value={reservationData.phone} onChange={(e) => setReservationData({...reservationData, phone: e.target.value})} className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none text-white" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" value={reservationData.date} onChange={(e) => setReservationData({...reservationData, date: e.target.value})} className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none text-white" />
                <input type="time" value={reservationData.time} onChange={(e) => setReservationData({...reservationData, time: e.target.value})} className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none text-white" />
              </div>
              <select value={reservationData.guests} onChange={(e) => setReservationData({...reservationData, guests: e.target.value})} className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none text-white">
                <option value="">Guests</option>
                <option>1-2</option>
                <option>3-4</option>
                <option>5-6</option>
                <option>7+</option>
              </select>
              <button onClick={handleReservation} className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-lg uppercase font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"><Phone size={18} />Confirm via WhatsApp</button>
            </div>
          </div>
        </div>
      )}

      {showOrderCart && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowOrderCart(false)}>
          <div className="bg-zinc-900 border border-green-400/30 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowOrderCart(false)} className="absolute top-4 right-4 text-gray-400 hover:text-green-400 bg-black/50 rounded-full p-2"><X size={24} /></button>
            <ShoppingBag size={48} className="text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">Your Order</h2>
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">Cart is empty</p>
                <button onClick={() => setShowOrderCart(false)} className="text-amber-400">Start ordering</button>
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
                        <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="bg-zinc-800 text-white w-8 h-8 rounded">-</button>
                        <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="bg-zinc-800 text-white w-8 h-8 rounded">+</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-zinc-700 pt-4 mb-6 flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-amber-400">E{getCartTotal().toFixed(2)}</span>
                </div>
                <button onClick={handleOrderNow} className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg uppercase font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"><Phone size={18} />Order via WhatsApp</button>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="bg-black py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <img src="/logo.png" alt="Espinho" className="h-16 mx-auto mb-4" />
          <p className="text-gray-400 mb-6">Modern Contemporary Italian Restaurant & Bar</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/espinho_restaurant/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400"><Instagram size={24} /></a>
            <a href="tel:76796708" className="text-gray-400 hover:text-amber-400"><Phone size={24} /></a>
            <a href="mailto:info.espinho@swazi.net" className="text-gray-400 hover:text-amber-400"><Mail size={24} /></a>
          </div>
          <p className="text-gray-600 text-sm">© 2025 Espinho Restaurant & Bar</p>
        </div>
      </footer>
    </div>
  );
};

export default EspinhoWebsite;
