import React from 'react';
import '../styles/Header.css';

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon">
              <div className="stemfem-logo">
                <div className="logo-atom"></div>
                <span className="logo-text-f">F</span>
              </div>
            </div>
            <div className="logo-text">
              <h1 className="logo-title">StemFem</h1>
              <p className="logo-subtitle">Mujeres en STEM</p>
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <a href="#empresas" className="nav-link">Explorar Empresas</a>
          <a href="#perfil" className="nav-link">Mi Perfil</a>
          <a href="#recursos" className="nav-link">Recursos</a>
        </nav>

        <div className="header-actions">
          {onLogout ? (
            <button className="btn-secondary" onClick={onLogout}>🚪 Cerrar Sesión</button>
          ) : (
            <>
              <button className="btn-secondary">Iniciar Sesión</button>
              <button className="btn-primary">Registrarse</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
