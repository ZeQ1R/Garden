import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { locations } from '../data/mock';
import { Button } from './ui/button';

const LocationsSection = () => {
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
    <section id="locations" ref={sectionRef} className="section-padding bg-white grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium mb-6">
            <MapPin size={16} />
            Find Us
          </span>
          <h2 className="section-title mb-6">
            Our <span className="text-[var(--garden-green)]">Locations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Visit one of our beautiful locations and experience the GARDEN difference.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className="location-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.city}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-serif text-2xl font-bold text-white">
                  {location.city}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[var(--garden-green)] flex-shrink-0 mt-1" size={18} />
                  <span className="text-[var(--garden-text-muted)]">{location.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[var(--garden-green)] flex-shrink-0 mt-1" size={18} />
                  <span className="text-[var(--garden-text-muted)]">{location.hours}</span>
                </div>
                <Button className="w-full btn-outline-garden rounded-full mt-4 flex items-center justify-center gap-2">
                  <Navigation size={16} />
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
