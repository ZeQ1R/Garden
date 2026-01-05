import React, { useEffect, useRef, useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { socialImages, testimonials } from '../data/mock';
import { Button } from './ui/button';

const SocialProof = () => {
  const sectionRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="bg-[var(--garden-cream)] grain-texture">
      {/* Instagram Grid */}
      <div className="reveal">
        <div className="instagram-grid">
          {socialImages.map((image, index) => (
            <div key={index} className="instagram-item">
              <img src={image} alt={`Instagram ${index + 1}`} />
              <div className="instagram-overlay">
                <Heart className="text-white" size={28} fill="white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium mb-6">
              <Heart size={16} />
              What Our Customers Say
            </span>
            <h2 className="section-title">
              Loved by <span className="text-[var(--garden-green)]">Thousands</span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative reveal">
            <div className="testimonial-card max-w-2xl mx-auto">
              <Quote className="text-[var(--garden-green)]/20 mx-auto mb-6" size={48} />
              <p className="text-xl text-[var(--garden-dark)] leading-relaxed mb-8 font-light italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="testimonial-avatar"
                />
                <div className="text-left">
                  <p className="font-serif font-semibold text-lg text-[var(--garden-dark)]">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-[var(--garden-text-muted)]">Loyal Customer</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[var(--garden-green)] w-8' 
                      : 'bg-[var(--garden-green)]/30'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-white shadow-lg pointer-events-auto hover:bg-[var(--garden-green)] hover:text-white transition-colors"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-white shadow-lg pointer-events-auto hover:bg-[var(--garden-green)] hover:text-white transition-colors"
                onClick={nextTestimonial}
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
