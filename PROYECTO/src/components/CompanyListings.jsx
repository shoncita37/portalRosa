import React, { useState } from 'react';
import '../styles/CompanyListings.css';

function CompanyListings() {
  const [filters, setFilters] = useState({
    femaleLeadership: false,
    parentalBenefits: false,
    flexibleHours: false
  });

  const companies = [
    {
      id: 1,
      name: 'TechWomen',
      position: 'Ingeniera de Software Senior',
      location: 'Ciudad de México',
      seal: 'Nivel Oro',
      rating: 4.8,
      categories: ['Liderazgo Femenino', 'Flexibilidad Horaria', 'Beneficios Parentales']
    },
    {
      id: 2,
      name: 'Consultora Avanza',
      position: 'Analista de Datos',
      location: 'Bogotá',
      seal: 'Nivel Plata',
      rating: 4.5,
      categories: ['Flexibilidad Horaria', 'Equidad Salarial']
    },
    {
      id: 3,
      name: 'DataCorp Analytics',
      position: 'Científica de Datos',
      location: 'Santiago',
      seal: 'Nivel Oro',
      rating: 4.9,
      categories: ['Liderazgo Femenino', 'Beneficios Parentales', 'Flexibilidad Horaria']
    },
    {
      id: 4,
      name: 'InnovaLab',
      position: 'DevOps Engineer',
      location: 'Buenos Aires',
      seal: 'Nivel Bronce',
      rating: 4.2,
      categories: ['Flexibilidad Horaria']
    }
  ];

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const getSealColor = (seal) => {
    if (seal.includes('Oro')) return 'gold';
    if (seal.includes('Plata')) return 'silver';
    return 'bronze';
  };

  return (
    <div className="company-listings-view">
      <div className="listings-container">
        {/* Filtros Laterales */}
        <aside className="filters-sidebar">
          <h3 className="filters-title">Filtros Avanzados</h3>
          
          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                name="femaleLeadership"
                checked={filters.femaleLeadership}
                onChange={handleFilterChange}
              />
              <span className="checkmark"></span>
              👩‍💼 Liderazgo Femenino
            </label>
            <p className="filter-hint">Empresas con mujeres en cargos directivos</p>
          </div>

          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                name="parentalBenefits"
                checked={filters.parentalBenefits}
                onChange={handleFilterChange}
              />
              <span className="checkmark"></span>
              👶 Sala Cuna / Beneficios Parentales
            </label>
            <p className="filter-hint">Políticas comprobadas de apoyo parental</p>
          </div>

          <div className="filter-group">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                name="flexibleHours"
                checked={filters.flexibleHours}
                onChange={handleFilterChange}
              />
              <span className="checkmark"></span>
              ⏱️ Flexibilidad Horaria Comprobada
            </label>
            <p className="filter-hint">Comprobado por reseñas de empleadas</p>
          </div>

          <button className="btn-reset-filters">↻ Limpiar Filtros</button>
        </aside>

        {/* Listado Principal */}
        <main className="listings-main">
          <h2 className="listings-title">Empresas con Sello Aliada</h2>
          <p className="listings-subtitle">
            {companies.length} empresas validadas esperándote
          </p>

          <div className="companies-list">
            {companies.map(company => (
              <div key={company.id} className="company-listing-card">
                <div className="company-header">
                  <div className="company-info">
                    <h3 className="company-name">{company.name}</h3>
                    <p className="company-location">📍 {company.location}</p>
                  </div>
                  <div className={`seal-badge seal-${getSealColor(company.seal)}`}>
                    <span className="seal-icon">🏅</span>
                    <div className="seal-text">
                      <p className="seal-label">Sello Aliada</p>
                      <p className="seal-level">{company.seal}</p>
                    </div>
                  </div>
                </div>

                <div className="company-position">
                  <h4>{company.position}</h4>
                </div>

                <div className="company-rating">
                  <span className="stars">{'⭐'.repeat(Math.round(company.rating))}</span>
                  <span className="rating-number">{company.rating}/5</span>
                  <span className="rating-text">Cultura Organizacional</span>
                </div>

                <div className="company-categories">
                  {company.categories.map((cat, idx) => (
                    <span key={idx} className="category-badge">{cat}</span>
                  ))}
                </div>

                <div className="company-actions">
                  <button className="btn-apply">Ver Oferta Completa</button>
                  <button className="btn-info-company">Conocer Empresa</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CompanyListings;
