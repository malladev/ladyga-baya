import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://m.media-amazon.com/images/I/61lvRrBDqyL._UY350_.jpg"
          alt="Beautiful woman wearing hip beads"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-gold-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse delay-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-8 bg-gradient-to-b from-gold-400 to-gold-600"></div>
              <Crown className="w-6 h-6 text-gold-400" />
              <span className="text-gold-400 font-medium tracking-[0.3em] text-sm">PREMIUM COLLECTION</span>
              <Crown className="w-6 h-6 text-gold-400" />
              <div className="w-1 h-8 bg-gradient-to-b from-gold-400 to-gold-600"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            <span className="block text-white">LADYGA</span>
            <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              BAYA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
          Des perles de hanche artisanales exquises qui célèbrent votre essence féminine. 
          Chaque pièce est un chef-d’œuvre de l’élégance, conçu pour la déesse moderne.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-black px-10 py-4 rounded-none font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gold-400/25 flex items-center tracking-wide"
            >
              EXPLORER LA COLLECTION
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-10 py-4 rounded-none font-bold text-lg transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              CE QUE DISENT NOS CLIENTS
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;