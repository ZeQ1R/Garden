import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Leaf, Coffee, Cake } from 'lucide-react';
import { menuHighlights } from '../data/mock';
import { Button } from './ui/button';

const iconMap = {
  0: <Leaf size={24} />,
  1: <Cake size={24} />,
  2: <Sparkles size={24} />,
  3: <Coffee size={24} />,
};

const MenuSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="section-padding bg-white grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium mb-6">
            <Sparkles size={16} />
            Our Signature Offerings
          </span>
          <h2 className="section-title mb-6">
            Crafted with <span className="text-[var(--garden-green)]">Love</span> & Fresh Ingredients
          </h2>
          <p className="section-subtitle mx-auto">
            Discover our carefully curated menu featuring the freshest ingredients, 
            artisan recipes, and flavors that will delight your senses.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuHighlights.map((item, index) => (
            <div 
              key={item.id} 
              className="menu-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="menu-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-green)]/10 flex items-center justify-center text-[var(--garden-green)] mb-4">
                  {iconMap[index]}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[var(--garden-dark)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--garden-text-muted)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-[var(--garden-green)] font-medium text-sm flex items-center gap-2 group">
                  Explore
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12 reveal">
          <Button className="btn-garden rounded-full px-8 py-6 text-lg flex items-center gap-2 mx-auto">
            View Full Menu
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
