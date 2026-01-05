import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-20 w-24 h-24 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Healthy never tasted{' '}
          <span className="relative">
            this beautiful
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 8C75 2 225 2 298 8" stroke="var(--garden-gold)" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Experience the perfect harmony of taste and wellness. 
          Your journey to delicious, healthy eating starts here.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            className="bg-white text-[var(--garden-green)] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 group"
            onClick={() => scrollToSection('#menu')}
          >
            Order Online
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2"
            onClick={() => scrollToSection('#locations')}
          >
            <MapPin size={20} />
            Find a Location
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
