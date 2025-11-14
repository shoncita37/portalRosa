import { useState } from 'react';
import '../styles/Login.css';

export default function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simular llamada a API
    setTimeout(() => {
      setIsLoading(false);
      // Simular login exitoso
      onLoginSuccess({
        email: formData.email,
        role: formData.email.includes('empresa') ? 'employer' : 'candidate',
      });
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Panel izquierdo - Información */}
        <div className="login-info">
          <div className="login-logo">
            <div className="stemfem-logo-login">
              <div className="logo-atom-login"></div>
              <span className="logo-text-f-login">F</span>
            </div>
            <h1>StemFem</h1>
          </div>

          <div className="login-benefits">
            <h2>Bienvenida a StemFem</h2>
            <p>La plataforma de confianza para mujeres en STEM</p>

            <ul className="benefits-list">
              <li>✓ Perfiles anónimos y seguros</li>
              <li>✓ Empresas con certificación de equidad</li>
              <li>✓ Oportunidades laborales inclusivas</li>
              <li>✓ Comunidad de mujeres en tech</li>
            </ul>
          </div>

          <div className="login-footer-info">
            <p>¿No tienes cuenta? <a href="#signup">Regístrate aquí</a></p>
          </div>
        </div>

        {/* Panel derecho - Formulario */}
        <div className="login-form-section">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <p className="form-subtitle">Accede a tu perfil profesional</p>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? 'input-error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {/* Remember & Forgot Password */}
            <div className="form-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span>Recuérdame</span>
              </label>
              <a href="#forgot" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn-primary btn-login"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                '🔐 Iniciar Sesión'
              )}
            </button>

            {/* Divider */}
            <div className="form-divider">
              <span>O</span>
            </div>

            {/* Social Login */}
            <div className="social-login">
              <button type="button" className="social-button google">
                <span>🔷</span> Google
              </button>
              <button type="button" className="social-button microsoft">
                <span>📱</span> Microsoft
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="signup-prompt">
              ¿Eres nueva en Portal Rosa? <a href="#signup">Crea tu cuenta</a>
            </p>
          </form>

          {/* Demo Credentials */}
          <div className="demo-credentials">
            <p className="demo-label">Demo - Credenciales de prueba:</p>
            <div className="demo-item">
              <strong>Candidata:</strong>
              <code>demo@candidata.com / password123</code>
            </div>
            <div className="demo-item">
              <strong>Empresa:</strong>
              <code>demo@empresa.com / password123</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
