import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Send, Leaf, Heart } from 'lucide-react';
import { navLinks } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Subscribed successfully!', {
        description: 'Thank you for joining our newsletter.',
      });
      setEmail('');
    }
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-[var(--garden-green)]" size={28} />
              <span className="footer-logo">GARDEN</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Where nature meets taste. Fresh juices, artisan cakes, and healthy 
              dishes crafted with love.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="footer-links space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="hover:text-[var(--garden-green-light)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">Company</h4>
            <ul className="footer-links space-y-3">
              <li>
                <a href="#franchise" onClick={(e) => { e.preventDefault(); scrollToSection('#franchise'); }}>Franchise</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a>
              </li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe for updates, offers, and new menu items.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-4"
                required
              />
              <Button 
                type="submit" 
                size="icon"
                className="rounded-full bg-[var(--garden-green)] hover:bg-[var(--garden-green-dark)] flex-shrink-0"
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} GARDEN. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-[var(--garden-green)]" fill="var(--garden-green)" /> for healthy living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
