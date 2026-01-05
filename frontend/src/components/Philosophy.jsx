import React, { useEffect, useRef } from 'react';
import { Heart, Leaf, Sun, Droplets } from 'lucide-react';

const Philosophy = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-[var(--garden-cream)] grain-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 reveal-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium">
              <Heart size={16} />
              Our Philosophy
            </span>
            
            <h2 className="section-title">
              Food Should Be{' '}
              <span className="gold-underline active">Beautiful</span>,{' '}
              Healthy & Inspiring
            </h2>
            
            <p className="text-lg text-[var(--garden-text-muted)] leading-relaxed">
              At GARDEN, we believe that every meal should be a celebration of nature's bounty. 
              Every juice, every cake, every dish is crafted from the freshest ingredients 
              to nourish both body and soul.
            </p>
            
            <p className="text-lg text-[var(--garden-text-muted)] leading-relaxed">
              Our commitment to quality means sourcing locally whenever possible, 
              supporting sustainable practices, and creating experiences that 
              delight all your senses.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-green)]/10 flex items-center justify-center text-[var(--garden-green)]">
                  <Leaf size={24} />
                </div>
                <span className="font-medium text-[var(--garden-dark)]">100% Natural</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-gold)]/20 flex items-center justify-center text-[var(--garden-gold)]">
                  <Sun size={24} />
                </div>
                <span className="font-medium text-[var(--garden-dark)]">Farm Fresh</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-green)]/10 flex items-center justify-center text-[var(--garden-green)]">
                  <Droplets size={24} />
                </div>
                <span className="font-medium text-[var(--garden-dark)]">Cold Pressed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-gold)]/20 flex items-center justify-center text-[var(--garden-gold)]">
                  <Heart size={24} />
                </div>
                <span className="font-medium text-[var(--garden-dark)]">Made with Love</span>
              </div>
            </div>
          </div>

          {/* Image Composition */}
          <div className="relative reveal-right">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
                  alt="GARDEN Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Overlapping Image */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80" 
                  alt="Fresh Juice"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -right-6 bg-[var(--garden-green)] text-white rounded-2xl p-6 shadow-xl animate-float-slow">
                <p className="text-4xl font-serif font-bold">10+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 -right-20 w-40 h-40 rounded-full border-2 border-dashed border-[var(--garden-green)]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
