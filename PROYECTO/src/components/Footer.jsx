import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>StemFem</h4>
            <p>Mujeres empoderadas en STEM</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#empresas">Empresas</a></li>
              <li><a href="#perfil">Mi Perfil</a></li>
              <li><a href="#recursos">Recursos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacidad">Privacidad</a></li>
              <li><a href="#terminos">Términos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section accessibility">
            <h4>Accesibilidad</h4>
            <button className="accessibility-btn">🔤 Aumentar Texto</button>
            <button className="accessibility-btn">🎨 Modo Alto Contraste</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 StemFem. Empoderando mujeres en STEM.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
