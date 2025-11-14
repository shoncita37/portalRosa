# ⚡ RESUMEN RÁPIDO - Herramientas de Diseño

## 🎯 Las 6 Herramientas Principales

### 1. **React 19.1.1** 🔵
```
¿QUÉ ES? Framework de JavaScript para interfaces
¿PARA QUÉ? Crear componentes reutilizables
¿CÓMO? Funciones que devuelven JSX
```
**Ejemplo:**
```jsx
function Header({ onLogout }) {
  return <header className="header"> ... </header>
}
```

---

### 2. **Vite 7.1.7** ⚡
```
¿QUÉ ES? Herramienta de build super rápida
¿PARA QUÉ? Ejecutar y compilar el proyecto
¿CÓMO? npm run dev / npm run build
```
**Ventajas:**
- Startup: ~500ms
- HMR (cambios sin refresh)
- Build optimizado

---

### 3. **CSS3 Puro** 🎨
```
¿QUÉ ES? Estilos sin compilador (CSS nativo)
¿PARA QUÉ? Diseñar interfaces
¿CÓMO? 45+ variables CSS para reutilización
```
**Ejemplo:**
```css
:root {
  --color-purple: #7B2CBF;
  --spacing-md: 1rem;
}
.button {
  background: var(--color-purple);
  padding: var(--spacing-md);
}
```

---

### 4. **Poppins Font** 📝
```
¿QUÉ ES? Tipografía moderna de Google Fonts
¿PARA QUÉ? Texto elegante y legible
¿CÓMO? Import desde Google Fonts
```
**Características:**
- 6 pesos (300-800)
- 7 tamaños (14px-48px)
- Licencia abierta

---

### 5. **ESLint 9.36.0** ✅
```
¿QUÉ ES? Herramienta de validación de código
¿PARA QUÉ? Garantizar calidad y consistencia
¿CÓMO? npm run lint
```
**Beneficios:**
- Previene errores
- Força mejores prácticas
- Código más limpio

---

### 6. **Git + GitHub** 📦
```
¿QUÉ ES? Sistema de versionado de código
¿PARA QUÉ? Guardar cambios y colaborar
¿CÓMO? git commit / git push
```
**Repositorio:**
- Owner: shoncita37
- Repo: portalRosa
- Branch: main

---

## 🎨 Paleta de Diseño

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Púrpura** | #7B2CBF | Primario, botones |
| **Azul Eléctrico** | #00D9FF | Links, acentos |
| **Rosa Fucsia** | #FF1493 | CTAs principales |
| **Blanco** | #FFFFFF | Fondos |
| **Gris Claro** | #F5F5F7 | Fondos secundarios |
| **Gris Oscuro** | #2C2C31 | Texto |
| **Negro** | #1A1A1D | Encabezados |

---

## 🎬 Animaciones

| Nombre | Duración | Uso |
|--------|----------|-----|
| **fadeInUp** | 0.8s | Hero section |
| **float** | 3s ♾️ | Iconos |
| **pulse-glow** | 2s ♾️ | Avatar |
| **slideDown** | 300ms | Paneles |
| **rotate** | 8s ♾️ | Logo atom |
| **spin** | 0.8s ♾️ | Loader |

---

## 📱 Breakpoints

```
Mobile S   < 480px    ├─ Teléfonos pequeños
Mobile     480-767px  ├─ Teléfonos regulares
Tablet     768-1023px ├─ Tablets
Laptop     1024-1399px├─ Laptops
Desktop    ≥ 1400px   └─ Monitores grandes
```

---

## 📦 Estructura

```
PROYECTO/
├── src/
│   ├── components/      (8 componentes JSX)
│   ├── styles/          (9 archivos CSS)
│   ├── App.jsx          (Raíz)
│   └── main.jsx         (Entrada)
├── index.html
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## 🚀 Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Iniciar servidor local
npm run build    # Compilar para producción
npm run preview  # Ver build localmente
npm run lint     # Validar código
```

---

## 💡 ¿Por qué estas herramientas?

✅ **React** → Componentes modulares + comunidad
✅ **Vite** → Desarrollo rápido + build optimizado
✅ **CSS3** → Sin dependencias + mejor performance
✅ **Poppins** → Profesional + moderna
✅ **ESLint** → Calidad de código garantizada
✅ **Git** → Control de versiones + colaboración

---

## 📊 Tech Stack Completo

```
Frontend:      React 19.1.1
Build:         Vite 7.1.7
Styling:       CSS3 Puro (45+ variables)
Tipografía:    Poppins (Google Fonts)
Linting:       ESLint 9.36.0
Node Manager:  npm
Version Ctrl:  Git + GitHub
Runtime:       Node.js 18+
```

---

## 🎓 Próximas Herramientas (Futuro)

- **TypeScript** - Type safety
- **Tailwind CSS** - Utility classes
- **React Router** - Navigation SPA
- **TanStack Query** - Data fetching
- **Zustand** - State management
- **Jest** - Unit testing

---

**¿Preguntas?** Revisa `STACK_TECNOLOGICO.md` para más detalles.
