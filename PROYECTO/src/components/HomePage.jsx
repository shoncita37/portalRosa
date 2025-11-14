import React from 'react';
import '../styles/HomePage.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ValueProposition from './ValueProposition';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

function HomePage({ onLogout }) {
  return (
    <div className="home-page">
      <Header onLogout={onLogout} />
      <HeroSection />
      <ValueProposition />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
