import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Philosophy from './components/Philosophy';
import FeaturedProducts from './components/FeaturedProducts';
import FranchiseSection from './components/FranchiseSection';
import LocationsSection from './components/LocationsSection';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[var(--garden-cream)]">
      <Navbar />
      <Hero />
      <MenuSection />
      <Philosophy />
      <FeaturedProducts />
      <FranchiseSection />
      <LocationsSection />
      <SocialProof />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{
          style: {
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
