import React from 'react';
import { Crown, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gold-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gold-400">LADYGA BAYA</h3>
                  <p className="text-xs text-gold-300 tracking-widest">PREMIUM HIP BEADS</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Empowering women through beautiful, meaningful hip beads that celebrate feminine strength, 
                sensuality, and spiritual connection. Each piece is handcrafted with love and intention.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gold-400">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</a></li>
                <li><a href="#shop" className="text-gray-300 hover:text-gold-400 transition-colors">Shop</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-gold-400 transition-colors">Testimonials</a></li>
                <li><a href="#size-guide" className="text-gray-300 hover:text-gold-400 transition-colors">Size Guide</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gold-400">Customer Care</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Size Exchange</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Care Instructions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gold-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 LADYGA BAYA. All rights reserved. Made with love for powerful women.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;