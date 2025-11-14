import React from 'react';
import '../styles/ValueProposition.css';

function ValueProposition() {
  const values = [
    {
      id: 1,
      icon: '🏅',
      title: 'Sello de Confianza',
      description: 'Validación rigurosa de empresas aliadas con políticas de equidad comprobada'
    },
    {
      id: 2,
      icon: '💻',
      title: 'Portafolio Digital',
      description: 'Vitrina profesional que destaca tus proyectos, habilidades y logros'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Anonimización',
      description: 'Control total sobre tu privacidad y cuándo revelar tu identidad'
    },
    {
      id: 4,
      icon: '⚖️',
      title: 'Filtros de Equidad',
      description: 'Busca empresas con beneficios parentales y flexibilidad comprobada'
    }
  ];

  return (
    <section className="value-proposition">
      <div className="value-container">
        <h2 className="value-title">¿Por qué elegir Portal Rosa?</h2>
        <div className="values-grid">
          {values.map(value => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
