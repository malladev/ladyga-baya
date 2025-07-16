import React, { useState } from 'react';
import { Filter, Star, MessageCircle } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
};

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'gemstone', label: 'Gemstone' },
    { id: 'crystal', label: 'Crystal' },
    { id: 'gold', label: 'Gold Collection' },
    { id: 'premium', label: 'Premium' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Golden Empress",
      price: 150,
      originalPrice: 200,
      image: "https://i.etsystatic.com/30922865/r/il/8830e1/3506986241/il_570xN.3506986241_2qgi.jpg",
      category: 'gold',
      rating: 4.9,
      reviews: 127,
      description: "perles hanches accentuées en or 24 carats avec quartz rose"
    },
    {
      id: 2,
      name: "Royal Obsidian",
      price: 180,
      originalPrice: 220,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkgTVQS0xzoVciveHzDipEG-L9CruC7NCaA&s",
      category: 'premium',
      rating: 5.0,
      reviews: 89,
      description: "Obsidienne noire avec des détails de chaîne en or"
    },
    {
      id: 3,
      name: "Midnight Goddess",
      price: 120,
      originalPrice: 160,
      image: "https://i.etsystatic.com/6149485/r/il/41ad60/3507106394/il_570xN.3507106394_dv1a.jpg",
      category: 'crystal',
      rating: 4.8,
      reviews: 156,
      description: "Tourmaline noire avec des accents dorés"
    },
    {
      id: 4,
      name: "Divine Elegance",
      price: 200,
      originalPrice: 250,
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/Waist_Beads_732x549-thumbnail-732x549.jpg",
      category: 'premium',
      rating: 4.9,
      reviews: 203,
      description: "Collection premium avec des pierres précieuses rares"
    },
    {
      id: 5,
      name: "Onyx Royalty",
      price: 140,
      originalPrice: 180,
      image: "https://images.squarespace-cdn.com/content/v1/6144d35f43df67432786eaef/e47a2428-2b2b-43c3-a907-aef496c7bf15/IMG_20230626_220046.jpg",
      category: 'gemstone',
      rating: 4.7,
      reviews: 94,
      description: "Onyx noir avec des maillons de chaîne en or"
    },
    {
      id: 6,
      name: "Golden Aura",
      price: 160,
      originalPrice: 200,
      image: "https://pbs.twimg.com/media/D7GIjkAW4AA29-6.jpg",
      category: 'gold',
      rating: 4.8,
      reviews: 178,
      description: "Perles en or pur avec des accents de cristal"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (priceRange === 'under150' && product.price >= 150) return false;
    if (priceRange === 'over150' && product.price < 150) return false;
    return true;
  });

  const handleWhatsAppOrder = (product: Product, quantity: number) => {
    const message = `Bonjour ! Je suis intéressé à commander:

*Image:* ${product.image}
*Produit:* ${product.name}
*Prix unitaire:* $${product.price}
*Quantité:* ${quantity}
*Total:* $${product.price * quantity}

*Description:* ${product.description}

Veuillez me faire savoir la disponibilité et les détails d'expédition.`;

    const whatsappUrl = `https://wa.me/22383116186?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Star className="w-8 h-8 text-gold-400 mx-4" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Our <span className="text-gold-400">Collection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de perles de hanche premium, chaque pièce fabriquée à la perfection pour la déesse perspicace.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gold-400" />
              <span className="font-medium text-gold-400">Filtrer par:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-none text-sm font-medium transition-all duration-200 border ${
                    selectedCategory === category.id
                      ? 'bg-gold-400 text-black border-gold-400'
                      : 'bg-transparent text-gold-400 border-gold-400 hover:bg-gold-400 hover:text-black'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 rounded-none text-sm font-medium bg-black text-gold-400 border border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <option value="all">Tous</option>
              <option value="under150">Moins de $150</option>
              <option value="over150">$150 & Plus</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onWhatsAppOrder={handleWhatsAppOrder}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product; onWhatsAppOrder: (product: Product, quantity: number) => void }> = ({ 
  product, 
  onWhatsAppOrder 
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="group bg-gradient-to-b from-gray-900 to-black rounded-none shadow-2xl overflow-hidden hover:shadow-gold-400/10 transition-all duration-300 transform hover:-translate-y-2 border border-gold-500/20 hover:border-gold-400/40">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* {product.originalPrice > product.price && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-3 py-1 rounded-none text-sm font-bold">
            SAVE ${product.originalPrice - product.price}
          </div>
        )} */}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-current' : 'text-gray-600'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">{product.rating} ({product.reviews} reviews)</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gold-400">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <label className="text-gold-400 font-medium">Quantity:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 bg-gold-400 text-black font-bold rounded-none hover:bg-gold-300 transition-colors"
            >
              -
            </button>
            <span className="text-white font-bold w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 bg-gold-400 text-black font-bold rounded-none hover:bg-gold-300 transition-colors"
            >
              +
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => onWhatsAppOrder(product, quantity)}
          className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-black px-6 py-3 rounded-none font-bold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span>COMMANDE VIA WHATSAPP</span>
        </button>
      </div>
    </div>
  );
};

export default Shop;