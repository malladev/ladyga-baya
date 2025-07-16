import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Crown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold-400"></div>
              <Crown className="w-8 h-8 text-gold-400 mx-4" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Get in <span className="text-gold-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our hip beads? Need help with sizing? We're here to help you embrace your feminine power.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-none p-8 border border-gold-500/20">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">
                  Let's Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">hello@ladygabaya.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p className="text-gray-400">123 Feminine Way, Beauty City, BC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Hours</p>
                      <p className="text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold-400/10 to-gold-600/10 rounded-none p-8 border border-gold-400/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Crown className="w-6 h-6 text-gold-400" />
                  <h4 className="text-xl font-serif font-bold text-white">
                    Why Choose LADYGA BAYA?
                  </h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Handcrafted with premium materials</li>
                  <li>• Custom sizing available</li>
                  <li>• 30-day satisfaction guarantee</li>
                  <li>• Free shipping on orders over $75</li>
                  <li>• Dedicated customer support</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-none p-8 shadow-2xl border border-gold-500/20">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gold-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold-500/30 rounded-none text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold-500/30 rounded-none text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gold-400 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold-500/30 rounded-none text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="sizing">Sizing Help</option>
                    <option value="custom">Custom Order</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="return">Return/Exchange</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gold-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gold-500/30 rounded-none text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-black font-bold py-4 px-6 rounded-none transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;