import React, { useState } from 'react';
import '../styles/CandidateProfile.css';

function CandidateProfile() {
  const [showDetails, setShowDetails] = useState(false);

  const candidate = {
    title: 'Ingeniera de Software Senior',
    portfolio_score: 9.2,
    available: true,
    skills: ['Python', 'AWS', 'React', 'Scrum', 'Machine Learning'],
    projects: [
      {
        id: 1,
        name: 'Sistema de IA para Análisis',
        image: '🤖'
      },
      {
        id: 2,
        name: 'Plataforma de Datos',
        image: '📊'
      },
      {
        id: 3,
        name: 'App Móvil React Native',
        image: '📱'
      }
    ]
  };

  return (
    <div className="candidate-profile-view">
      <div className="candidate-container">
        {/* Sidebar - Información anónima */}
        <aside className="candidate-sidebar">
          <div className="avatar-section">
            <div className="avatar-placeholder">👤</div>
            <p className="anon-text">Perfil Anónimo</p>
          </div>

          <div className="profile-card">
            <h2 className="profile-title">{candidate.title}</h2>
            
            <div className="score-section">
              <p className="score-label">Puntuación de Portafolio</p>
              <div className="score-display">
                <span className="score-number">{candidate.portfolio_score}</span>
                <span className="score-max">/10</span>
              </div>
            </div>

            <div className="availability-section">
              <label className="toggle-label">
                <input type="checkbox" checked={candidate.available} readOnly />
                <span className="toggle-switch"></span>
                Abierta a Oportunidades
              </label>
            </div>

            <div className="skills-section">
              <p className="skills-label">Competencias</p>
              <div className="skills-tags">
                {candidate.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content - Portafolio */}
        <main className="candidate-main">
          <section className="portfolio-section">
            <h3 className="section-title">Portafolio de Proyectos</h3>
            <div className="projects-grid">
              {candidate.projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">{project.image}</div>
                  <p className="project-name">{project.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="action-section">
            <button className="btn-contact-request">
              ✉️ Enviar Solicitud de Contacto
            </button>
            <p className="cta-description">
              El perfil será revelado solo si la candidata acepta tu solicitud.
            </p>
            <button 
              className="btn-details-toggle"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? '−' : '+'} Ver más detalles de validación
            </button>

            {showDetails && (
              <div className="validation-details">
                <h4>Validación de Perfil</h4>
                <ul className="validation-list">
                  <li>✓ Experiencia verificada en proyectos reales</li>
                  <li>✓ Referencias profesionales comprobadas</li>
                  <li>✓ Habilidades técnicas validadas</li>
                  <li>✓ Autenticidad de portafolio confirmada</li>
                </ul>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default CandidateProfile;
