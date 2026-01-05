import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { featuredProducts } from '../data/mock';
import { Button } from './ui/button';

const FeaturedProducts = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollability);
      checkScrollability();
    }
    return () => scrollElement?.removeEventListener('scroll', checkScrollability);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--garden-beige)] grain-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium mb-6">
              <Star size={16} />
              Exclusive Selection
            </span>
            <h2 className="section-title">
              Featured <span className="text-[var(--garden-green)]">Products</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className={`w-12 h-12 rounded-full border-2 border-[var(--garden-green)] transition-all ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[var(--garden-green)] hover:text-white'}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={24} className="text-[var(--garden-green)]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`w-12 h-12 rounded-full border-2 border-[var(--garden-green)] transition-all ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[var(--garden-green)] hover:text-white'}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight size={24} className="text-[var(--garden-green)]" />
            </Button>
          </div>
        </div>

        {/* Product Carousel */}
        <div 
          ref={scrollRef}
          className="horizontal-scroll gap-6 pb-4 -mx-4 px-4 reveal"
        >
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-price">{product.price}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[var(--garden-dark)] mb-2">
                  {product.name}
                </h3>
                <p className="text-[var(--garden-text-muted)] text-sm">
                  {product.description}
                </p>
                <Button className="w-full mt-4 btn-garden rounded-full">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
