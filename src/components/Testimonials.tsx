import React from 'react';
import { Star, Quote, Crown } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amara Johnson",
      location: "New York, NY",
      rating: 5,
      text: "LADYGA BAYA hip beads have completely transformed how I feel about my body. The quality is absolutely exceptional and I feel like a goddess every day!",
      image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Zara Thompson",
      location: "Los Angeles, CA",
      rating: 5,
      text: "These aren't just accessories - they're works of art. The craftsmanship is incredible and the gold details are absolutely stunning. Worth every penny!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Luna Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "I've never felt more confident and beautiful. The way these hip beads make me feel is indescribable - pure feminine power and elegance.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "Nia Williams",
      location: "Atlanta, GA",
      rating: 5,
      text: "The attention to detail is remarkable. Each bead feels precious and the overall design is sophisticated yet sensual. Absolutely love my collection!",
      image: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Quote className="w-8 h-8 text-gold-400 mx-4" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Goddess <span className="text-gold-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from the beautiful women who have embraced their feminine power with LADYGA BAYA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="relative bg-gradient-to-br from-gray-900 to-black rounded-none p-8 shadow-2xl hover:shadow-gold-400/10 transition-all duration-300 border border-gold-500/20 hover:border-gold-400/40 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Quote className="w-6 h-6 text-black" />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold-400"
                    />
                    <Crown className="absolute -top-2 -right-2 w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gold-400">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-gray-900 to-black rounded-none px-12 py-6 border border-gold-400/40">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold-400 fill-current" />
                ))}
              </div>
              <div className="text-white">
                <span className="font-bold text-gold-400 text-xl">4.9/5</span> rating from over <span className="font-bold text-gold-400">500+</span> goddesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;