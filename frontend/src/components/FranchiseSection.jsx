import React, { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { franchiseBenefits } from '../data/mock';
import { Button } from './ui/button';

const iconMap = {
  0: <Award size={28} />,
  1: <TrendingUp size={28} />,
  2: <Users size={28} />,
  3: <Shield size={28} />,
};

const FranchiseSection = () => {
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="franchise" ref={sectionRef} className="franchise-section section-padding grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium mb-6">
            <TrendingUp size={16} />
            Business Opportunity
          </span>
          <h2 className="section-title mb-6">
            Join the <span className="text-[var(--garden-green)]">GARDEN</span> Family
          </h2>
          <p className="section-subtitle mx-auto">
            Be part of a growing premium brand. Our franchise model offers 
            comprehensive support and a proven path to success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {franchiseBenefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="benefit-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-icon">
                {iconMap[index]}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[var(--garden-dark)] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[var(--garden-text-muted)] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <Button 
            className="btn-garden rounded-full px-10 py-6 text-lg flex items-center gap-2 mx-auto group"
            onClick={scrollToContact}
          >
            Become a Franchise Partner
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
