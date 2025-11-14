import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Tu carrera,<br />
          <span className="highlight">con Confianza</span>
        </h2>
        <p className="hero-subtitle">
          Empleos en STEM validados por mujeres. Conectamos talento femenino con empresas que realmente valoran la equidad.
        </p>
        <div className="hero-cta">
          <button className="btn-primary btn-lg">
            🎯 Encuentra Talento (Empresas)
          </button>
          <button className="btn-secondary btn-lg">
            ✨ Crea tu Vitrina (Profesionales)
          </button>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
}

export default HeroSection;
