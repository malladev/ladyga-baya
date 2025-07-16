import React from 'react';
import { Crown, Gem, Sparkles, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Crown className="w-8 h-8 text-gold-400" />,
      title: "Royal Craftsmanship",
      description: "Chaque pièce est méticuleusement fabriquée à la main par des maîtres artisans qui comprennent l’art de l’élégance féminine."
    },
    {
      icon: <Gem className="w-8 h-8 text-gold-400" />,
      title: "Premium Materials",
      description: "Fabriqué avec de véritables pierres précieuses, des cristaux et des accents en or 24 carats qui rayonnent de luxe et de sophistication."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-400" />,
      title: "Spiritual Essence",
      description: "Connectez-vous aux traditions anciennes et embrassez la signification spirituelle des perles de hanche dans l’élégance moderne."
    },
    {
      icon: <Star className="w-8 h-8 text-gold-400" />,
      title: "Confidence Amplifier",
      description: "Sentez-vous autonome, belle et irrésistiblement confiante avec nos superbes collections de perles de hanche."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Crown className="w-8 h-8 text-gold-400 mx-4" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              A propos de <span className="text-gold-400">LADYGA BAYA</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nous croyons que chaque femme mérite de se sentir comme une reine. Nos perles à la hanche sont plus que des accessoires—
            ils sont des symboles de puissance, de sensualité et d’élégance intemporelle conçus pour la déesse moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-2xl blur-xl"></div>
              <img
                src="https://i0.wp.com/greenglowafrika.com/wp-content/uploads/2024/06/zyro-image_4.png?fit=1946%2C1490&ssl=1"
                alt="Artisan crafting hip beads"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border border-gold-500/20"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl">
                <Crown className="w-12 h-12 text-black" />
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-4xl font-serif font-bold mb-6">
                Notre <span className="text-gold-400">histoire</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Née d’une passion pour la célébration du pouvoir féminin, LADYGA BAYA crée des perles de hanches qui honorent 
                à la fois les traditions anciennes et la sophistication contemporaine. Chaque pièce raconte une histoire de force, 
                beauté, et amour de soi.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
              Fondée par des femmes qui comprennent le pouvoir transformateur de se sentir belle, nous fabriquons chacune 
              pièce pour vous faire sentir confiant, sensuel et connecté à votre déesse intérieure.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600"></div>
                <span className="text-gold-400 font-medium tracking-widest text-sm">DEPUIS 2020</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-none bg-gradient-to-b from-gray-900 to-black border border-gold-500/20 hover:border-gold-400/40 transition-all duration-300 group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;