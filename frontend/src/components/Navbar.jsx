import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { navLinks } from '../data/mock';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
          className="flex items-center gap-2 group"
        >
          <span className="text-3xl font-serif font-bold text-[var(--garden-green)] tracking-tight transition-colors group-hover:text-[var(--garden-green-dark)]">
            GARDEN
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="gold-underline text-[var(--garden-text)] font-medium text-sm tracking-wide hover:text-[var(--garden-green)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="btn-garden rounded-full px-6 py-2 flex items-center gap-2"
            onClick={() => scrollToSection('#menu')}
          >
            <ShoppingBag size={18} />
            Order Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[var(--garden-dark)]">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[var(--garden-cream)]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-serif font-bold text-[var(--garden-green)]">
                  GARDEN
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-lg font-medium text-[var(--garden-text)] hover:text-[var(--garden-green)] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  className="btn-garden rounded-full mt-4 flex items-center gap-2 justify-center"
                  onClick={() => scrollToSection('#menu')}
                >
                  <ShoppingBag size={18} />
                  Order Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
