# 🛠️ Stack Tecnológico - StemFem

## 📊 Herramientas y Tecnologías Utilizadas

---

## 1️⃣ **FRONTEND - Frameworks & Librerías**

### React 19.1.1
```
- Framework principal para componentes
- Manejo de estado con `useState`
- Renderizado condicional
- Componentes reutilizables
```
**Por qué React?**
- ✅ Componentes modulares
- ✅ Hot Module Reload (HMR) automático
- ✅ Virtual DOM para performance
- ✅ Comunidad activa

---

## 2️⃣ **Build Tool - Vite 7.1.7**

```
- Bundler y dev server ultrarrápido
- HMR instantáneo (Hot Module Replacement)
- Optimización automática para producción
- ES Modules native
```
**Por qué Vite?**
- ✅ Desarrollo super rápido (~500ms startup)
- ✅ Recarga automática de cambios en navegador
- ✅ Build optimizado (tree-shaking, minificación)
- ✅ Soporte nativo para JSX

---

## 3️⃣ **Lenguajes & Markup**

### JSX (JavaScript XML)
```jsx
// Sintaxis HTML directamente en JS
function Header({ onLogout }) {
  return (
    <header className="header">
      <h1>StemFem</h1>
    </header>
  );
}
```
**Ventajas:**
- ✅ Sintaxis declarativa
- ✅ Fácil de leer y mantener
- ✅ Type-safe (con TypeScript opcional)

### HTML5
- Semántica correcta (`<header>`, `<footer>`, `<nav>`)
- Accesibilidad nativa (`role`, `aria-*` attributes)
- Formularios con validación

### CSS3 Puro (Sin preprocesadores)
```css
/* Variables CSS (CSS Custom Properties) */
:root {
  --color-purple: #7B2CBF;
  --gradient-primary: linear-gradient(135deg, #7B2CBF 0%, #00D9FF 100%);
}

/* Uso en componentes */
.btn-primary {
  background: var(--gradient-primary);
}
```

**Por qué CSS3 puro?**
- ✅ No requiere compilación
- ✅ Mejor performance
- ✅ Variables CSS nativas (Cascading Variables)
- ✅ Soporte en navegadores modernos

---

## 4️⃣ **Diseño & Estilos**

### Sistema de Diseño Tokens

#### 📐 **Variables CSS (45+ variables)**

```css
/* Colores */
--color-purple: #7B2CBF
--color-electric-blue: #00D9FF
--color-fuchsia: #FF1493

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #7B2CBF 0%, #00D9FF 100%)
--gradient-dark: linear-gradient(135deg, #5A1F8C 0%, #0099CC 100%)

/* Espaciado (Grid 8px) */
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)

/* Sombras */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12)
--shadow-lg: 0 12px 24px rgba(123, 44, 191, 0.15)
--shadow-xl: 0 20px 48px rgba(123, 44, 191, 0.2)

/* Border Radius */
--border-radius-sm: 0.375rem (6px)
--border-radius-md: 0.75rem (12px)
--border-radius-lg: 1.5rem (24px)
--border-radius-xl: 2rem (32px)

/* Transiciones */
--transition-fast: 150ms ease-in-out
--transition-base: 300ms ease-in-out
--transition-slow: 500ms ease-in-out
```

#### 🎨 **Tipografía**

**Font Family:** Poppins (Google Fonts)
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap')
```

**Escala Tipográfica (7 niveles):**
```
--font-size-sm:  0.875rem  (14px)
--font-size-base: 1rem      (16px)
--font-size-md:  1.125rem  (18px)
--font-size-lg:  1.5rem    (24px)
--font-size-xl:  2rem      (32px)
--font-size-2xl: 2.5rem    (40px)
--font-size-3xl: 3rem      (48px)
```

**Pesos:**
- 300: Light
- 400: Regular
- 500: Medium
- 600: SemiBold
- 700: Bold
- 800: ExtraBold

---

## 5️⃣ **Animaciones & Transiciones**

### CSS Animations (Keyframes)

#### **fadeInUp** (Hero Section)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Duración:** 0.8s ease-out

#### **float** (Iconos)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```
**Duración:** 3s ease-in-out (infinito)

#### **pulse-glow** (Avatar)
```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 217, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 217, 255, 0);
  }
}
```
**Duración:** 2s ease-in-out (infinito)

#### **slideDown** (Expandibles)
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**Duración:** 300ms ease-out

#### **rotate** (Logo Atom)
```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
**Duración:** 8s linear (infinito)

#### **spin** (Loading)
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
```
**Duración:** 0.8s linear (infinito)

### Transiciones (CSS Transitions)
```css
transition: all 300ms ease-in-out;
transition: color 150ms ease-in-out;
transition: transform 300ms ease-in-out;
```

---

## 6️⃣ **Metodología de Diseño Responsivo**

### Mobile-First Approach
```css
/* Base: Mobile (default) */
.component {
  display: flex;
  flex-direction: column;
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .component {
    flex-direction: row;
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .component {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
}
```

### Breakpoints Implementados
```
Mobile Small:  < 480px   (Ej: iPhone SE)
Mobile:        480-767px (Ej: iPhone 12)
Tablet:        768-1023px (Ej: iPad)
Laptop:        1024-1399px (Ej: MacBook)
Desktop:       ≥ 1400px   (Ej: Monitor)
```

---

## 7️⃣ **Control de Versiones & Linting**

### Git
```bash
git init
git add .
git commit -m "mensaje"
git push origin main
```

### ESLint 9.36.0
```javascript
// Valida código JavaScript/JSX
// Reglas customizadas
// Previene errores comunes
// Mejora calidad del código
```

**Configuración:**
```javascript
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
]
```

---

## 8️⃣ **Arquitectura de Componentes**

### Estructura de Carpetas
```
PROYECTO/
├── src/
│   ├── components/              (Componentes React)
│   │   ├── Login.jsx            (Página de login)
│   │   ├── HomePage.jsx         (Página inicio)
│   │   ├── Header.jsx           (Navbar)
│   │   ├── HeroSection.jsx      (Sección hero)
│   │   ├── ValueProposition.jsx (Propuesta de valor)
│   │   ├── TestimonialsSection.jsx
│   │   ├── CandidateProfile.jsx (RF-01)
│   │   ├── CompanyListings.jsx  (RF-02)
│   │   └── Footer.jsx           (Footer)
│   │
│   ├── styles/                  (CSS puro)
│   │   ├── globals.css          (Variables + reset)
│   │   ├── Header.css
│   │   ├── Login.css
│   │   ├── HeroSection.css
│   │   ├── ValueProposition.css
│   │   ├── TestimonialsSection.css
│   │   ├── CandidateProfile.css
│   │   ├── CompanyListings.css
│   │   ├── HomePage.css
│   │   └── Footer.css
│   │
│   ├── App.jsx                  (Componente raíz)
│   └── main.jsx                 (Punto de entrada)
│
├── index.html                   (HTML principal)
├── vite.config.js              (Configuración Vite)
├── package.json                (Dependencias)
└── eslint.config.js            (Linting)
```

### Patrones de Componentes

#### **Componentes Funcionales**
```jsx
function Header({ onLogout }) {
  // Lógica del componente
  return (
    <header className="header">
      {/* JSX */}
    </header>
  );
}
export default Header;
```

#### **State Management con useState**
```jsx
const [currentView, setCurrentView] = useState('login');
const [formData, setFormData] = useState({ email: '', password: '' });
```

#### **Validación de Formularios**
```jsx
const validateForm = () => {
  const errors = {};
  if (!email) errors.email = 'Email requerido';
  if (password.length < 6) errors.password = 'Min 6 caracteres';
  return errors;
};
```

---

## 9️⃣ **Herramientas de Desarrollo**

### npm (Node Package Manager)
```bash
npm install          # Instala dependencias
npm run dev          # Inicia servidor (http://localhost:5173)
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Valida código con ESLint
npm audit            # Verifica vulnerabilidades
```

### Node.js
- Runtime de JavaScript en servidor
- Ejecuta npm y herramientas de build
- Versión: Compatible con Node 16+

### Navegadores (DevTools)
- Chrome/Edge DevTools para inspeccionar DOM
- Network tab para verificar recursos
- Console para debugging
- Elements inspector para CSS

---

## 🔟 **Performance & Optimización**

### Vite Optimizations
```
✅ Code Splitting automático
✅ Tree Shaking (elimina código no usado)
✅ Minificación de CSS/JS
✅ Compresión Gzip
✅ Lazy Loading de módulos
```

### CSS Optimization
```css
/* Selectors específicos (evita !important) */
.header-actions .btn-primary { }

/* Media queries optimizadas */
@media (max-width: 768px) { }

/* GPU Acceleration */
transform: translateY(-10px);  ✅ Rápido
animation: fadeInUp 0.8s;      ✅ Smooth
```

### JavaScript Optimization
```javascript
// Usar const/let en lugar de var
const count = 0;  // ✅

// Evitar funciones inline costosas
const handleClick = () => { };  // ✅

// Memoization (si es necesario)
const memoizedValue = useMemo(() => {}, [dependency]);
```

---

## 1️⃣1️⃣ **Accesibilidad (WCAG AA)**

### Herramientas de Testing
- Axe DevTools (Chrome Extension)
- Wave (Web Accessibility Evaluation Tool)
- Lighthouse (Chrome DevTools)

### Implementación
```html
<!-- Contraste de colores -->
<button style="color: white; background: #7B2CBF;">
  Contraste 7:1 ✅
</button>

<!-- Elementos interactivos ≥44x44px -->
<button style="min-height: 44px; min-width: 44px;">
  44px minimum ✅
</button>

<!-- Focus visible -->
<a style="outline: 3px solid #00D9FF;">
  Focus visible ✅
</a>

<!-- Labels for inputs -->
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

---

## 1️⃣2️⃣ **Herramientas Externas (Integradas)**

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Browser APIs
- `localStorage` - Almacenamiento local
- `setTimeout/setInterval` - Timers
- `fetch` - Llamadas HTTP (futuro)

---

## 📊 **Resumen Técnico**

| Herramienta | Versión | Propósito |
|------------|---------|----------|
| React | 19.1.1 | Framework UI |
| Vite | 7.1.7 | Build tool |
| Node.js | 18+ | Runtime |
| npm | 9+ | Package manager |
| Poppins Font | Latest | Tipografía |
| CSS3 | Puro | Estilos |
| ESLint | 9.36.0 | Linting |
| Git | Latest | Versionado |

---

## 🚀 **Tech Stack Completo**

```
┌─────────────────────────────────────────┐
│         STACK TECNOLÓGICO STEMFEM       │
├─────────────────────────────────────────┤
│                                         │
│  Frontend Layer:                        │
│  ├─ React 19.1.1 (Componentes)         │
│  ├─ JSX (Syntax)                       │
│  └─ HTML5 (Markup)                     │
│                                         │
│  Styling Layer:                         │
│  ├─ CSS3 Puro (45+ Variables)          │
│  ├─ Poppins Font (Google Fonts)        │
│  ├─ Responsive Design (5 breakpoints)  │
│  ├─ Animaciones CSS (6 keyframes)      │
│  └─ Gradientes (135° purple→blue)      │
│                                         │
│  Build & Dev Layer:                     │
│  ├─ Vite 7.1.7 (HMR + Bundle)          │
│  ├─ npm (Package Manager)              │
│  ├─ Node.js (Runtime)                  │
│  └─ ESLint 9.36.0 (Linting)            │
│                                         │
│  Version Control:                       │
│  └─ Git (GitHub)                       │
│                                         │
│  Accessibility:                         │
│  ├─ WCAG AA (Contrast, Size)           │
│  ├─ Semantic HTML                      │
│  └─ Focus States                       │
│                                         │
└─────────────────────────────────────────┘
```

---

## 💡 **Por qué estas herramientas?**

### ✅ **React**
- Componentes reutilizables
- Estado reactivo automático
- Comunidad gigante
- Ecosistema maduro

### ✅ **Vite**
- Startup en ~500ms
- HMR instantáneo (cambios sin refresh)
- Build ultraoptimizado
- Mejor que Webpack/Create React App

### ✅ **CSS3 Puro**
- Sin dependencias externas
- Variables CSS nativas
- Mejor performance
- Menos configuración

### ✅ **Poppins Font**
- Moderna y legible
- Múltiples pesos
- Diseño profesional
- Licencia abierta (Google Fonts)

### ✅ **Gradientes & Animaciones**
- Atractivo visual
- Bajo costo de performance
- GPU accelerated
- Mejor UX

---

## 🔮 **Futuras Herramientas (Next Steps)**

```javascript
// TypeScript - Type safety
import { FC } from 'react';
interface HeaderProps {
  onLogout: () => void;
}
const Header: FC<HeaderProps> = ({ onLogout }) => { };

// Tailwind CSS - Utility classes
<div className="flex items-center justify-between gap-4">

// React Router v6 - SPA Navigation
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</BrowserRouter>

// TanStack Query - API data fetching
const { data } = useQuery(['companies'], fetchCompanies);

// Zustand - State management
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Testing - Jest + React Testing Library
test('renders login form', () => {
  render(<Login />);
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
});
```

---

## 📞 **Contacto & Soporte**

Para preguntas sobre el stack:
- Documentación de React: https://react.dev
- Documentación de Vite: https://vitejs.dev
- MDN Web Docs: https://developer.mozilla.org
- CSS-Tricks: https://css-tricks.com

---

**Última Actualización:** 14 de Noviembre de 2025
**Stack Version:** 1.0 - Production Ready
