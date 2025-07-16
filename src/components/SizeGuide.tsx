import React, { useState } from 'react';
import { Ruler, Info, CheckCircle, Crown } from 'lucide-react';

const SizeGuide: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = [
    { size: 'XS', measurement: '26-28"', description: 'Petite goddess' },
    { size: 'S', measurement: '28-30"', description: 'Small goddess' },
    { size: 'M', measurement: '30-32"', description: 'Medium goddess' },
    { size: 'L', measurement: '32-34"', description: 'Large goddess' },
    { size: 'XL', measurement: '34-36"', description: 'Extra large goddess' },
    { size: 'XXL', measurement: '36-38"', description: 'Plus size goddess' }
  ];

  const howToMeasure = [
    "Use a soft measuring tape or string",
    "Measure around your hips where you want the beads to sit",
    "Keep the tape snug but comfortable",
    "Add 2-3 inches for perfect movement",
    "If between sizes, choose the larger size for comfort"
  ];

  return (
    <section id="size-guide" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Ruler className="w-8 h-8 text-gold-400 mx-4" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Size <span className="text-gold-400">Guide</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size guide. Each hip bead is custom-made to celebrate your unique curves.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* How to Measure */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-none p-8 shadow-2xl border border-gold-500/20">
              <div className="flex items-center mb-6">
                <Ruler className="w-6 h-6 text-gold-400 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-white">How to Measure</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {howToMeasure.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gold-400/10 to-gold-600/10 rounded-none p-6 border border-gold-400/30">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-gold-400 mb-2">Royal Tip:</p>
                    <p className="text-sm text-gray-300">
                      Don't have a measuring tape? Use a string and measure it against a ruler. 
                      Our customer service team is also available to help you find the perfect fit for your goddess body!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Chart */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-none p-8 shadow-2xl border border-gold-500/20">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Size Chart</h3>
              
              <div className="space-y-3">
                {sizes.map((item) => (
                  <div
                    key={item.size}
                    onClick={() => setSelectedSize(item.size)}
                    className={`p-4 rounded-none border-2 cursor-pointer transition-all duration-200 ${
                      selectedSize === item.size
                        ? 'border-gold-400 bg-gradient-to-r from-gold-400/10 to-gold-600/10'
                        : 'border-gold-500/20 hover:border-gold-400/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-bold ${
                          selectedSize === item.size
                            ? 'bg-gradient-to-r from-gold-400 to-gold-600'
                            : 'bg-gray-600'
                        }`}>
                          {item.size}
                        </div>
                        <div>
                          <p className="font-bold text-white">{item.measurement}</p>
                          <p className="text-sm text-gold-400">{item.description}</p>
                        </div>
                      </div>
                      {selectedSize === item.size && (
                        <CheckCircle className="w-6 h-6 text-gold-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold-400/10 to-gold-600/10 rounded-none border border-gold-400/30">
                <div className="flex items-center mb-3">
                  <Crown className="w-5 h-5 text-gold-400 mr-2" />
                  <h4 className="font-bold text-gold-400">Custom Royal Sizing</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Need a custom size? We offer personalized sizing for the perfect goddess fit. 
                  Contact us with your measurements and we'll create something exclusively for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;