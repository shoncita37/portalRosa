import { useState } from 'react'
import './App.css'

function App() {
  // Datos de ejemplo para empresas con Sello Aliada
  const empresasAliadas = [
    {
      id: 1,
      nombre: "TechWomen",
      industria: "Tecnología",
      descripcion: "Empresa líder en desarrollo de software con 45% de mujeres en cargos directivos.",
      sellos: ["Liderazgo Femenino", "Flexibilidad Horaria", "Cero Tolerancia al Acoso"]
    },
    {
      id: 2,
      nombre: "Consultora Avanza",
      industria: "Consultoría",
      descripcion: "Consultora con políticas de equidad salarial y programas de mentoría para mujeres.",
      sellos: ["Beneficios Parentales", "Equidad Salarial", "Flexibilidad Horaria"]
    },
    {
      id: 3,
      nombre: "Salud Integral",
      industria: "Salud",
      descripcion: "Red de clínicas con sala cuna y horarios adaptados para madres y padres.",
      sellos: ["Beneficios Parentales", "Flexibilidad Horaria"]
    }
  ];

  // Datos de ejemplo para reseñas
  const resenas = [
    {
      id: 1,
      empresa: "TechWomen",
      cargo: "Desarrolladora Senior",
      calificacion: 4.8,
      comentario: "Excelente ambiente laboral. Valoran el talento sin importar el género y tienen políticas claras contra el acoso.",
      fecha: "Mayo 2023"
    },
    {
      id: 2,
      empresa: "Consultora Avanza",
      cargo: "Analista de Proyectos",
      calificacion: 4.5,
      comentario: "Gran flexibilidad para madres. Pude adaptar mi horario después de mi permiso maternal sin afectar mi carrera.",
      fecha: "Marzo 2023"
    },
    {
      id: 3,
      empresa: "Salud Integral",
      cargo: "Enfermera Jefe",
      calificacion: 4.2,
      comentario: "Buen equilibrio vida-trabajo. La sala cuna en las instalaciones hace toda la diferencia.",
      fecha: "Junio 2023"
    }
  ];

  // Datos de ejemplo para recursos
  const recursos = [
    {
      id: 1,
      titulo: "Cómo negociar tu salario",
      tipo: "Artículo",
      descripcion: "Aprende estrategias efectivas para negociar un salario justo y beneficios adicionales.",
      imagen: "negociacion.svg"
    },
    {
      id: 2,
      titulo: "Preparación para entrevistas",
      tipo: "Video",
      descripcion: "Tips para destacar en entrevistas laborales y mostrar tus habilidades con confianza.",
      imagen: "entrevista.svg"
    },
    {
      id: 3,
      titulo: "Currículum efectivo",
      tipo: "Plantilla",
      descripcion: "Plantillas y consejos para crear un CV que destaque tus logros y experiencia.",
      imagen: "curriculum.svg"
    },
    {
      id: 4,
      titulo: "Derechos laborales para mujeres",
      tipo: "Guía",
      descripcion: "Información sobre leyes y derechos laborales específicos para mujeres trabajadoras.",
      imagen: "derechos.svg"
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1 className="brand-title">PORTAL ROSA</h1>
            <p className="brand-subtitle">Tu Profesional de Confianza y Crecimiento</p>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="#empresas">Aliados</a></li>
              <li><a href="#resenas">Reseñas</a></li>
              <li><a href="#recursos">Recursos</a></li>
              <li><a href="#login" className="btn-login">Iniciar Sesión</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Encuentra talento femenino profesional</h2>
            <p>No es una red social ni un portal de empleo: es un catálogo curado de profesionales validadas, 
              donde empresas y reclutadores pueden encontrar perfiles femeninos calificados para sus vacantes.</p>
            <div className="search-box">
              <input type="text" placeholder="Buscar por cargo, área o empresa..." />
              <button className="btn-search">Buscar</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filtros de Búsqueda */}
      <section className="filters">
        <div className="container">
          <h3>Filtros Relevantes</h3>
          <div className="filter-options">
            <div className="filter-option">
              <input type="checkbox" id="flexibilidad" />
              <label htmlFor="flexibilidad">Flexibilidad Horaria Comprobada</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="liderazgo" />
              <label htmlFor="liderazgo">Con Liderazgo Femenino</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="beneficios" />
              <label htmlFor="beneficios">Sala Cuna / Beneficios Parentales</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="acoso" />
              <label htmlFor="acoso">Política de Cero Tolerancia al Acoso</label>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Empresas con Sello Aliada */}
      <section id="empresas" className="empresas-aliadas">
        <div className="container">
          <h2>Empresas con Sello Aliada</h2>
          <p className="section-description">
            Estas empresas han sido validadas como excelentes lugares para que las mujeres trabajen, 
            basado en encuestas anónimas a sus empleadas actuales.
          </p>
          
          <div className="empresas-grid">
            {empresasAliadas.map(empresa => (
              <div key={empresa.id} className="empresa-card">
                <h3>{empresa.nombre}</h3>
                <p className="empresa-industria">{empresa.industria}</p>
                <p className="empresa-descripcion">{empresa.descripcion}</p>
                <div className="sellos-container">
                  {empresa.sellos.map((sello, index) => (
                    <span key={index} className="sello-badge">{sello}</span>
                  ))}
                </div>
                <button className="btn-ver-ofertas">Ver Ofertas</button>
              </div>
            ))}
          </div>
          
          <div className="info-sello">
            <h4>¿Qué es el Sello Aliada?</h4>
            <p>
              Es un distintivo que se obtiene tras una revisión rigurosa que valida la cultura interna, 
              equidad salarial y oportunidades de crecimiento para mujeres en la empresa.
            </p>
            <a href="#" className="btn-info">Conoce más</a>
          </div>
        </div>
      </section>

      {/* Sección de Reseñas Anónimas */}
      <section id="resenas" className="resenas">
        <div className="container">
          <h2>Reseñas Anónimas</h2>
          <p className="section-description">
            Conoce las experiencias reales de mujeres que trabajan o han trabajado en estas empresas.
          </p>
          
          <div className="resenas-grid">
            {resenas.map(resena => (
              <div key={resena.id} className="resena-card">
                <div className="resena-header">
                  <h3>{resena.empresa}</h3>
                  <div className="calificacion">
                    <span className="estrellas">{'★'.repeat(Math.round(resena.calificacion))}</span>
                    <span className="numero">{resena.calificacion}</span>
                  </div>
                </div>
                <p className="cargo-fecha">{resena.cargo} • {resena.fecha}</p>
                <p className="comentario">{resena.comentario}</p>
              </div>
            ))}
          </div>
          
          <div className="compartir-experiencia">
            <h4>¿Has trabajado en alguna de estas empresas?</h4>
            <p>Comparte tu experiencia de forma anónima y ayuda a otras mujeres a tomar mejores decisiones laborales.</p>
            <button className="btn-compartir">Compartir mi experiencia</button>
          </div>
        </div>
      </section>

      {/* Sección de Biblioteca de Recursos */}
      <section id="recursos" className="recursos">
        <div className="container">
          <h2>Biblioteca de Recursos</h2>
          <p className="section-description">
            Artículos, videos y herramientas para ayudarte en tu desarrollo profesional.
          </p>
          
          <div className="recursos-grid">
            {recursos.map(recurso => (
              <div key={recurso.id} className="recurso-card">
                <div className="recurso-imagen">
                  <div className="placeholder-imagen">{recurso.tipo}</div>
                </div>
                <div className="recurso-content">
                  <span className="recurso-tipo">{recurso.tipo}</span>
                  <h3>{recurso.titulo}</h3>
                  <p>{recurso.descripcion}</p>
                  <a href="#" className="btn-acceder">Acceder</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="recursos-adicionales">
            <h4>¿Buscas más recursos?</h4>
            <p>Tenemos webinars, talleres y asesorías personalizadas para impulsar tu carrera profesional.</p>
            <div className="recursos-botones">
              <a href="#" className="btn-webinars">Ver Webinars</a>
              <a href="#" className="btn-talleres">Talleres</a>
              <a href="#" className="btn-asesorias">Asesorías</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
          <div className="footer-logo">
            <h2>PORTAL ROSA</h2>
            <p>Tu Empleo con Confianza y Crecimiento</p>
          </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explorar</h4>
                <ul>
                  <li><a href="#empleos">Empleos</a></li>
                  <li><a href="#empresas">Empresas</a></li>
                  <li><a href="#resenas">Reseñas</a></li>
                  <li><a href="#recursos">Recursos</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Sobre Nosotros</h4>
                <ul>
                  <li><a href="#">Nuestra Misión</a></li>
                  <li><a href="#">Equipo</a></li>
                  <li><a href="#">Prensa</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Términos de Uso</a></li>
                  <li><a href="#">Política de Privacidad</a></li>
                  <li><a href="#">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 PORTAL ROSA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
