import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Wine, Utensils, Coffee } from 'lucide-react';

const EspinhoMenu = () => {
  const [activeCategory, setActiveCategory] = useState('seafood');

  const categories = {
    seafood: {
      title: 'Seafood & Shellfish',
      icon: '🦞',
      items: [
        {
          name: 'Italian Salmon Ressoto',
          price: 'E255',
          description: 'Pan fried scottish salmon with creamed horse radish, garlic, onions, arboriorice and white wine, finished with a saffron and parmesan cream sauceand tempura prawns'
        },
        {
          name: 'Italian Asian Salmon',
          price: 'E210',
          description: 'Seared salmon fillet, set on a teriyaki stir-fry, charred exotic mushrooms with a wasabi enhanced beurre blanc and a complement of a squid wafer'
        },
        {
          name: 'Italian Basil Salmon',
          price: 'E270',
          description: 'Scottish salmon grilled to perfection, served with homemade pickled cucumber, basil pesto sweet potato rounds and served with teriyaki reduction and micro herbs'
        },
        {
          name: 'Shelfish',
          price: 'Market Price',
          description: 'Prepared the traditional Mozambican way and served with seasonal vegetables and a choice of rice or chips'
        },
        {
          name: 'Queen Prawns',
          price: 'E345'
        },
        {
          name: 'King Prawns',
          price: 'E365'
        },
        {
          name: 'Langoustines',
          price: 'E410'
        },
        {
          name: 'Baby Lobster',
          price: 'E415'
        },
        {
          name: 'Lobster Thermidor',
          price: 'E480'
        },
        {
          name: 'Prawn on Pan',
          price: 'E110'
        },
        {
          name: 'Prawn and Calamari',
          price: 'E320',
          description: 'A platter of six tiger prawns with squid heads, grilled calamari on basmati rice, served with vegetables'
        },
        {
          name: 'Prawn Platter',
          price: 'E230',
          description: 'A Dozen Tiger prawns sautéed in lemon, garlic & periperi on basmati rice with seasonal vegetables'
        },
        {
          name: "Ladies' Platter",
          price: 'E680',
          description: 'Four queen and tiger medium prawns serves with seasonal vegetables and savoury rice'
        },
        {
          name: 'Shellfish Platter',
          price: 'E855',
          description: 'Combination of a baby lobste,queen and tiger medium prawns served with seasonal vegetables and savoury rice'
        },
        {
          name: 'Seafood Platter for Two',
          price: 'E1400',
          description: 'Baby lobster, queen and tiger medium prawns, calamari, mussels and line fish served with seasonal vegetables and rice (Langoustine option available)'
        }
      ]
    },
    pasta: {
      title: 'Pastas & Curry Dishes',
      icon: '🍝',
      items: [
        {
          name: 'Itallian Vegetable Stack',
          price: 'E225',
          description: 'Tian of sweet potato rosti, field mushroom, roasted peppers & tofu served with tomato beure blanc'
        },
        {
          name: 'Vegetarian Pasta (V)',
          price: 'E225',
          description: 'Grilled baby corn and peas, cumin and garlic infused olive oil and served with penne, linguini or tagliatelle'
        },
        {
          name: 'Wild Mushroom Risotto (V)',
          price: 'E260',
          description: 'Grilled exotic mushrooms pan fried in olive oil with arborio rice, white wine, vegetable stock and cream, finished with a splash of truffle oil, parmesan tuile, basil pesto and micro herbs'
        },
        {
          name: 'Italian Pallastro',
          price: 'E220',
          description: 'Poached chicken thighs, truffle and parmesan infused cream sauce, rocket, lemon pepper pearls and crispy crackling'
        },
        {
          name: 'Italian Prawn Pasta',
          price: 'E240',
          description: 'Spiced prawn tails in sundried tomato, creamy fresh basil, asparagus, with penne or linguini & parmesan gratinee'
        },
        {
          name: 'Chicken Curry',
          price: 'E255',
          description: 'Chicken thighs and breast braised in a coconut infused mild blend of spices, toasted almonds dehydrated vine tomatoes, roti and sambals'
        },
        {
          name: 'Prawn Curry',
          price: 'E310',
          description: 'Simmered in traditional durban spices and tamarind served with basmati rice, sambals and poppadum'
        },
        {
          name: 'Lamb Curry',
          price: 'E360',
          description: 'Hot or mild Beef cubes braised & slow cooked the south African way'
        },
        {
          name: 'Beef Curry',
          price: 'E340',
          description: 'Hot or mild Beef cubes braised & slow cooked the south African way'
        }
      ]
    },
    meat: {
      title: 'Meat & Poultry',
      icon: '🥩',
      items: [
        {
          name: 'Traditional Rump 300g',
          price: 'E245',
          description: 'Our meat is wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces'
        },
        {
          name: 'Traditional Fillet 300g',
          price: 'E255',
          description: 'Our meat is wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces'
        },
        {
          name: 'Rib Eye 300g',
          price: 'E325',
          description: 'Our meat is wet-aged on the premises for 21 days. Served with sumo chips, glazed baby vegetables and a choice of sauces'
        },
        {
          name: 'Buffallo Wings',
          price: 'E125'
        },
        {
          name: 'Oxtail',
          price: 'E365',
          description: 'Served on the bone with rice and saffron new potatoes'
        },
        {
          name: 'Tomahawk 500g',
          price: 'E395',
          description: 'Beef fore-rib with truffle potato, asparagus and baby carrots'
        },
        {
          name: 'Lamb Shank',
          price: 'E405',
          description: 'Slow roasted curry infused lamb shank with garam masala, cinnamon andcoriander served with mash potato and seasonal vegetables'
        },
        {
          name: 'Nikasha Signature',
          price: 'E350',
          description: '200g prime cut beef fillet steak, topped with garlic lemon and butter, south coast lobster tail, maraschino cherries, cauliflower puree. Served with seasonal vegetables and potato mash'
        },
        {
          name: 'African Fillet',
          price: 'E440',
          description: 'Beef fillet grilled to perfection served with garlic snails and prawns, muesli powder, pan fried mushrooms, potato terrine, basmati rice and port wine jus'
        },
        {
          name: 'Flame Grilled Baby Chicken 600g',
          price: 'E230',
          description: 'Rubbed with maldon sea salt, fresh chilli and lemon, served with chips'
        },
        {
          name: 'Prime Rib',
          price: 'E310',
          description: 'Lazy aged prime cut, pearl barley risotto, sautéed seasonal vegetables andport wine jus'
        },
        {
          name: 'Duck Leg',
          price: 'E235',
          description: 'Slow braised sous vide style duck leg confit with potato dauphinoise, honey glazed root vegetables and topped with fig preserve and port wine jus'
        },
        {
          name: 'Pork Ribs',
          price: 'E280',
          description: 'Prepared with soya, honey and ginger, served with sumo chips and braised vegetables'
        },
        {
          name: 'Beef Fillet and Empanada',
          price: 'E380',
          description: 'Grilled fillet, braised beef cheek pie, sautéed mushrooms, parsnip purée and thyme infused red wine reduction'
        },
        {
          name: 'Lamb Chops',
          price: 'E350',
          description: 'French trimmed, rubbed with dukkah served with mint pea purée and sumo chips'
        },
        {
          name: 'Ostrich and Leek',
          price: 'E280',
          description: 'An ostrich fillet grilled to perfection, served with creamy leeks and sweet buttered pears, herbed golden baby carrots, finished with a wintery burnt leeks and turmeric pickled leeks, finished off with a port wine jus'
        },
        {
          name: 'Braised Pork Belly',
          price: 'E300',
          description: 'Slow braised pork belly served with king oyster mushroom, salsa, fresh cherries, apple and potato puree, complimented with basil sprouts and fennel'
        },
        {
          name: 'Bushveld Fillet Steak',
          price: 'E320',
          description: 'Charred grilled beef fillet, pommes dauphine, green bean and vine tomato salad topped with béarnaise'
        },
        {
          name: 'Ostrich Fillet',
          price: 'E355',
          description: 'Grilled ostrich fillet with sweet potato and honey puree, roast Mediterranean vegetables and peppercorn sauce'
        },
        {
          name: 'Dutch Fillet',
          price: 'E355',
          description: 'Pan fried beef loin, wrapped in bell pepper, served on a peppery bath and creamy potato, grill baby corn and caramelized onion'
        }
      ]
    },
    wines: {
      title: 'Wines by Bottle',
      icon: '🍷',
      items: [
        {
          name: 'De Grendel Cape of Good Hope',
          category: 'Sauvignon Blanc 750ml',
          price: 'E540'
        },
        {
          name: 'Diemersdal Sauv Blanc',
          category: 'Sauvignon Blanc 750ml',
          price: 'E350'
        },
        {
          name: 'Diemersfontain Sauv Blanc',
          category: 'Sauvignon Blanc 750ml',
          price: 'E380'
        },
        {
          name: 'Eagles Nest Sauve Blanc',
          category: 'Sauvignon Blanc 750ml',
          price: 'E750'
        },
        {
          name: 'Stark Conde Sauv Blanc',
          category: 'Sauvignon Blanc 750ml',
          price: 'E805'
        },
        {
          name: 'Nederburg',
          category: 'Sauvignon Blanc 750ml',
          price: 'E300'
        },
        {
          name: 'Durbanville Hills',
          category: 'Cabernet Sauvignon 750ml',
          price: 'E400'
        },
        {
          name: 'Fat Bastard Cab Sauve',
          category: 'Cabernet Sauvignon 750ml',
          price: 'E280'
        },
        {
          name: 'Veregenoeg Cab Sauv',
          category: 'Cabernet Sauvignon 750ml',
          price: 'E1100'
        },
        {
          name: 'Plasir De Marle Cab Sauve',
          category: 'Cabernet Sauvignon 750ml',
          price: 'E900'
        },
        {
          name: 'Sprinfield Whole Berry Cab Sauve',
          category: 'Cabernet Sauvignon 750ml',
          price: 'E600'
        },
        {
          name: 'Warwick First Lady Cab Sauve',
          category: 'Cabernet Sauvignon 750ml',
          price: 'E400'
        }
      ]
    },
    cocktails: {
      title: 'Signature Cocktails',
      icon: '🍹',
      items: [
        {
          name: 'Pinacolata',
          price: 'E104',
          description: 'Bacardi, Pina Coconut Syrup, pineapple, cream and Pineapple juice'
        },
        {
          name: 'Long Island',
          price: 'E195',
          description: 'Sour mix, Vodka, Gin, Tequila sliver, Bacardi triple sec, coke'
        },
        {
          name: 'Magarita',
          price: 'E135',
          description: 'Fresh lime, salt, tequila, triple sec'
        },
        {
          name: 'Respect Your Elders',
          price: 'E115',
          description: 'Gin, Elderflower syrup, lemon juice, Tonic water'
        },
        {
          name: 'Cosmopolitan',
          price: 'E110',
          description: 'Vodka, cranberry juice, triple sec, orange zest'
        },
        {
          name: 'Ginger Apple Sour',
          price: 'E115',
          description: 'Irish whiskey, lemon juice, lemon juice, Apple juice, syrup bitters'
        },
        {
          name: 'Siteki High Road',
          price: 'E110',
          description: 'Tequila silver, grapefruit juice, soda water'
        },
        {
          name: 'Whiskey So Ur',
          price: 'E115',
          description: 'Sour mix, grants whiskey, egg white, sugar syrup, bitters drops'
        },
        {
          name: 'Coffee Crues',
          price: 'E105',
          description: 'Amarula, coffee and kahlua'
        },
        {
          name: 'Mojito',
          price: 'E135',
          description: 'Fresh lime, fresh wild mint syrup, bacadi rum, mint leave, soda water'
        },
        {
          name: 'Strawberry Daiquiri',
          price: 'E110',
          description: 'Grenadine, Bacardi, Strawberry syrup, fresh strawberry syrup, strawberry juice'
        },
        {
          name: 'Applitini',
          price: 'E115',
          description: 'Vodka, Apple sour, Apple juice'
        },
        {
          name: 'Apperol Spritz',
          price: 'E105',
          description: 'Apperol, sparkling wine, soda water'
        },
        {
          name: 'Hennessy Autograph',
          price: 'E210',
          description: 'Hennessy vs, cherry syrup, lime, cherries, orange zest'
        },
        {
          name: 'Espinho Signature',
          price: 'E165',
          description: 'Gin, rose syrup, sour mix, camomile tea, graham beck bliss nectar'
        },
        {
          name: 'Blue Lagoon',
          price: 'E135',
          description: 'Vodka, Sourmix, Kemonade, blue Curacao'
        }
      ]
    },
    whiskey: {
      title: 'Premium Whiskey',
      icon: '🥃',
      items: [
        {
          name: 'Johnnie Walker Gold Lebl Reserve',
          category: 'Premium Selection',
          price: 'E240'
        },
        {
          name: 'Johnnie Walker Double Black',
          category: 'Premium Selection',
          price: 'E60'
        },
        {
          name: 'Johnnie Walker King George',
          category: 'Premium Selection',
          price: 'E500'
        },
        {
          name: 'Johnnie Walker Black',
          category: 'Premium Selection',
          price: 'E75'
        },
        {
          name: 'Macallan 18 yrs',
          category: 'By Tots',
          price: 'E470',
          bottlePrice: 'E14100'
        },
        {
          name: 'Macallan 15yrs',
          category: 'By Tots',
          price: 'E250',
          bottlePrice: 'E7400'
        },
        {
          name: 'Macallan 12yrs',
          category: 'By Tots',
          price: 'E150',
          bottlePrice: 'E4550'
        },
        {
          name: 'Glenfiddich 21yrs',
          category: 'By Tots',
          price: 'E420',
          bottlePrice: 'E12400'
        },
        {
          name: 'Glenfiddich 18yrs',
          category: 'By Tots',
          price: 'E115',
          bottlePrice: 'E3450'
        },
        {
          name: 'Glenfiddich 12yrs',
          category: 'By Tots',
          price: 'E60',
          bottlePrice: 'E1800'
        },
        {
          name: 'Chivas Regal 15yrs',
          category: 'By Tots',
          price: 'E65',
          bottlePrice: 'E1150'
        },
        {
          name: 'Chivas Regal 18yrs',
          category: 'By Tots',
          price: 'E125',
          bottlePrice: 'E3750'
        },
        {
          name: 'Chivas XV',
          category: 'By Tots',
          price: 'E65',
          bottlePrice: 'E1950'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-amber-950 text-white">
      {/* Header */}
      <div className="bg-black/60 backdrop-blur-lg sticky top-0 z-50 border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
            <span className="text-amber-400">Espinho</span>
          </h1>
          <p className="text-amber-400/80 text-sm uppercase tracking-widest mb-2">Restaurant & Bar</p>
          <p className="text-gray-400 text-sm">Siteki, Eswatini • Modern Contemporary Italian Dining</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-[140px] md:top-[160px] z-40 bg-black/80 backdrop-blur-md border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-4 min-w-max md:min-w-0 md:justify-center">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === key
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105'
                    : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {categories[activeCategory].icon} <span className="text-amber-400">{categories[activeCategory].title}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories[activeCategory].items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-amber-400/10 hover:border-amber-400/30 transition-all hover:shadow-xl hover:shadow-amber-400/10 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors pr-4">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-amber-400 whitespace-nowrap">{item.price}</span>
              </div>
              
              {item.category && (
                <p className="text-xs uppercase tracking-wider text-amber-400/60 mb-2">{item.category}</p>
              )}
              
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              )}
              
              {item.bottlePrice && (
                <div className="mt-3 pt-3 border-t border-zinc-700">
                  <p className="text-sm text-gray-500">By Bottle: <span className="text-amber-400 font-semibold">{item.bottlePrice}</span></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/60 border-t border-amber-400/20 py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Contact Us</h3>
            <p className="text-gray-400 mb-2">📍 Plot 136/180, Flame Tree Park, Siteki, Eswatini</p>
            <p className="text-gray-400 mb-2">📞 <a href="tel:76796708" className="hover:text-amber-400 transition-colors">76796708</a></p>
            <p className="text-gray-400 mb-2">✉️ <a href="mailto:info.espinho@swazi.net" className="hover:text-amber-400 transition-colors">info.espinho@swazi.net</a></p>
            <p className="text-gray-400">📸 <a href="https://www.instagram.com/espinho_restaurant/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">@espinho_restaurant</a></p>
          </div>
          
          <div className="border-t border-zinc-800 pt-6 mt-6">
            <p className="text-gray-500 text-sm mb-2">Daily: 08:00 AM - 10:00 PM</p>
            <p className="text-gray-600 text-xs">© 2025 Espinho Restaurant & Bar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspinhoMenu;
```

---

## **6️⃣ `.gitignore`**
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
