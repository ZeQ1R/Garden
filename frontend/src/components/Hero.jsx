import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Leaf } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section grain-texture">
      {/* Floating Elements */}
      <div className="floating-leaf animate-float" style={{ top: '15%', left: '10%' }}>
        <Leaf size={40} className="text-[var(--garden-green-light)]" style={{ transform: 'rotate(-30deg)' }} />
      </div>
      <div className="floating-leaf animate-float-slow" style={{ top: '25%', right: '15%' }}>
        <Leaf size={32} className="text-[var(--garden-green)]" style={{ transform: 'rotate(45deg)' }} />
      </div>
      <div className="floating-leaf animate-float" style={{ bottom: '30%', left: '5%' }}>
        <Leaf size={28} className="text-[var(--garden-green-light)]" style={{ transform: 'rotate(15deg)' }} />
      </div>
      <div className="floating-leaf animate-float-slow" style={{ bottom: '20%', right: '10%' }}>
        <Leaf size={36} className="text-[var(--garden-green)]" style={{ transform: 'rotate(-60deg)' }} />
      </div>

      {/* Decorative Circles */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--garden-green-light) 0%, transparent 70%)',
          top: '-10%',
          right: '-10%',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--garden-gold) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Text Content */}
          <div className={`space-y-8 ${loaded ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium">
              <Leaf size={16} />
              <span>Fresh & Natural</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight text-[var(--garden-dark)]">
              Where Nature{' '}
              <span className="relative">
                <span className="text-[var(--garden-green)]">Meets</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="var(--garden-gold)" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              Taste
            </h1>
            
            <p className="text-xl text-[var(--garden-text-muted)] max-w-lg leading-relaxed">
              Fresh juices, artisan cakes, and healthy dishes made with love. 
              Experience the perfect blend of nature and culinary artistry.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="btn-garden rounded-full px-8 py-6 text-lg flex items-center gap-2 group"
                onClick={() => scrollToSection('#menu')}
              >
                View Menu
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="btn-outline-garden rounded-full px-8 py-6 text-lg"
                onClick={() => scrollToSection('#locations')}
              >
                Visit Us
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative ${loaded ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622597467836-f3e6707a3ee3?w=800&q=80" 
                  alt="Fresh Juice"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--garden-green)]/10 flex items-center justify-center">
                    <Leaf className="text-[var(--garden-green)]" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--garden-text-muted)]">100% Organic</p>
                    <p className="font-semibold text-[var(--garden-dark)]">Fresh Ingredients</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl animate-float-slow">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-[var(--garden-green)]">50+</p>
                  <p className="text-sm text-[var(--garden-text-muted)]">Menu Items</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-[var(--garden-green)]/20 -z-10"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-[var(--garden-green)]/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[var(--garden-green)] rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
