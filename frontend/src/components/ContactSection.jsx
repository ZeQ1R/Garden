import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, User, MessageSquare, Building } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { toast } from 'sonner';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isFranchise: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (MOCK)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you within 24 hours.',
    });
    
    setFormData({ name: '', email: '', message: '', isFranchise: false });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-[var(--garden-cream)] grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--garden-green)]/10 text-[var(--garden-green)] text-sm font-medium mb-6">
              <Mail size={16} />
              Get In Touch
            </span>
            <h2 className="section-title mb-6">
              We'd Love to{' '}
              <span className="text-[var(--garden-green)]">Hear</span> From You
            </h2>
            <p className="text-lg text-[var(--garden-text-muted)] leading-relaxed mb-8">
              Have a question, feedback, or interested in franchise opportunities? 
              Drop us a message and our team will get back to you shortly.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-green)]/10 flex items-center justify-center text-[var(--garden-green)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--garden-text-muted)]">Email</p>
                  <p className="font-medium text-[var(--garden-dark)]">hello@garden.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--garden-green)]/10 flex items-center justify-center text-[var(--garden-green)]">
                  <Building size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--garden-text-muted)]">Franchise Inquiries</p>
                  <p className="font-medium text-[var(--garden-dark)]">franchise@garden.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[var(--garden-dark)] font-medium mb-2 block">
                    Your Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--garden-text-muted)]" size={18} />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="pl-12 bg-[var(--garden-cream)] border-2 border-transparent focus:border-[var(--garden-green)] rounded-xl py-6"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[var(--garden-dark)] font-medium mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--garden-text-muted)]" size={18} />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="pl-12 bg-[var(--garden-cream)] border-2 border-transparent focus:border-[var(--garden-green)] rounded-xl py-6"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[var(--garden-dark)] font-medium mb-2 block">
                    Your Message
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-[var(--garden-text-muted)]" size={18} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      rows={4}
                      className="w-full pl-12 pr-4 py-4 bg-[var(--garden-cream)] border-2 border-transparent focus:border-[var(--garden-green)] focus:outline-none rounded-xl resize-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="franchise"
                    checked={formData.isFranchise}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isFranchise: checked }))}
                    className="border-[var(--garden-green)] data-[state=checked]:bg-[var(--garden-green)]"
                  />
                  <Label htmlFor="franchise" className="text-[var(--garden-text-muted)] cursor-pointer">
                    I'm interested in franchise opportunities
                  </Label>
                </div>

                <Button 
                  type="submit"
                  className="w-full btn-garden rounded-full py-6 text-lg flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
