# 🎯 Guía de Inicio Rápido - Portal Rosa UI

## 🚀 Primeros Pasos (5 minutos)

### 1. Instalar Dependencias
```bash
cd PROYECTO
npm install
```

### 2. Ejecutar Servidor de Desarrollo
```bash
npm run dev
```

La aplicación se abrirá en **http://localhost:5173/**

### 3. Navegar Entre Vistas
En la **esquina inferior derecha** encontrarás 3 botones de navegación:

```
┌─────────┐
│ Inicio  │  ← Página de inicio
├─────────┤
│ Perfil  │  ← Vitrina de candidata
├─────────┤
│Empresas │  ← Listado con filtros
└─────────┘
```

---

## 📖 Estructura de Carpetas

```
PROYECTO/
│
├── src/
│   ├── components/          ← 8 componentes React
│   │   ├── HomePage.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ValueProposition.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── CandidateProfile.jsx
│   │   ├── CompanyListings.jsx
│   │   └── Footer.jsx
│   │
│   ├── styles/              ← 9 archivos CSS
│   │   ├── globals.css      ← Variables + estilos globales
│   │   ├── Header.css
│   │   ├── HeroSection.css
│   │   ├── ValueProposition.css
│   │   ├── TestimonialsSection.css
│   │   ├── CandidateProfile.css
│   │   ├── CompanyListings.css
│   │   ├── HomePage.css
│   │   └── Footer.css
│   │
│   ├── App.jsx              ← App principal (router demo)
│   └── main.jsx             ← Entry point
│
├── index.html               ← HTML principal
├── vite.config.js           ← Config Vite
├── package.json             ← Dependencias
│
└── Documentación:
    ├── DESIGN_GUIDE.md              ← Guía de diseño completa
    ├── TECHNICAL_SPECS.md           ← Especificaciones técnicas
    ├── QUICK_REFERENCE.md           ← Referencia rápida
    ├── RESUMEN_ENTREGA.md           ← Este proyecto
    └── README_DESIGN.md             ← Instrucciones

```

---

## 🎨 Vista 1: Página de Inicio

### Características
- **Header**: Logo + Navegación + Botones
- **Hero Section**: Gradiente púrpura-azul con 2 botones CTA
- **4 Cards de Valor**: Iconos + Descripción (animación float)
- **Testimonios**: 3 cards con borde colorido
- **Footer**: Links + Botones accesibilidad

### Elementos Visuales Clave
```
┌─────────────────────────────────────┐
│        🌹 PORTAL ROSA               │
│  [Nav Links]        [Login] [Sign]  │ ← Header
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   Tu carrera, con Confianza         │
│   [Botón 1]  [Botón 2]              │ ← Hero
└─────────────────────────────────────┘

┌─────┬─────┬─────┬─────┐
│ 🏅  │ 💻  │ 🔒  │ ⚖️   │ ← Valor
└─────┴─────┴─────┴─────┘

┌──────────┬──────────┬──────────┐
│ "Texto"  │ "Texto"  │ "Texto"  │ ← Testimonios
└──────────┴──────────┴──────────┘

┌─────────────────────────────────────┐
│ [Links] [Accesibilidad] [Copyright] │ ← Footer
└─────────────────────────────────────┘
```

### Prueba Esto
1. Hover sobre los cards de valor → ¡Se elevan!
2. Scroll en los testimonios → Sombra aumenta
3. Prueba botones de accesibilidad en footer → Experimenta cambios

---

## 👩‍💼 Vista 2: Perfil de Candidata

### Layout
```
┌──────────────────┬──────────────────────────┐
│                  │                          │
│  SIDEBAR         │  MAIN                    │
│                  │                          │
│  👤 Avatar       │  Portfolio Projects      │
│  (anónimo)       │  ┌──┐ ┌──┐ ┌──┐        │
│                  │  │🤖│ │📊│ │📱│        │
│  9.2 / 10        │  └──┘ └──┘ └──┘        │
│  ★★★★★ Score    │                        │
│                  │  ✉️ Enviar Solicitud   │
│  ☑️ Disponible   │                        │
│                  │  + Ver Validación ▼    │
│  SKILLS:         │                        │
│  #Python         │  ┌─────────────────┐  │
│  #AWS            │  │✓ Experiencia    │  │
│  #React          │  │✓ Referencias    │  │
│  #Scrum          │  │✓ Habilidades    │  │
│  #ML             │  │✓ Autenticidad   │  │
│                  │  └─────────────────┘  │
│                  │                        │
└──────────────────┴──────────────────────────┘
```

### Elementos Clave
- ✅ **Avatar Anónimo**: Círculo gradiente con animación pulse
- ✅ **Score**: 9.2/10 en gradiente
- ✅ **Toggle**: "Abierta a Oportunidades"
- ✅ **Skills**: Tags con borde eléctrico
- ✅ **Proyectos**: 3 cards con hover
- ✅ **CTA Principal**: Rosa Fucsia (#FF1493)
- ✅ **Expandible**: Detalles de validación

### Interactividad
- Hover sobre projects → Elevan + overlay
- Click "Ver Validación" → Panel se expande
- Tab navigation → Todos elementos navegables
- Focus visible → Outline azul

### Datos Demo
```javascript
Candidata = {
  titulo: "Ingeniera de Software Senior",
  portafolioScore: 9.2,
  disponible: true,
  skills: ["Python", "AWS", "React", "Scrum", "Machine Learning"],
  proyectos: [
    { nombre: "Sistema de IA", icono: "🤖" },
    { nombre: "Plataforma de Datos", icono: "📊" },
    { nombre: "App Móvil", icono: "📱" }
  ]
}
```

---

## 🏢 Vista 3: Listado de Empresas

### Layout
```
┌──────────────────┬───────────────────────────┐
│                  │                           │
│  FILTROS         │  EMPRESAS                 │
│                  │                           │
│ ☑️ Liderazgo F.  │ ┌───────────────────────┐ │
│    (+ hint)      │ │ TechWomen   [🏅Oro]  │ │
│                  │ │ Ing. Software Senior │ │
│ ☑️ Beneficios    │ │ Ciudad de México     │ │
│    (+ hint)      │ │ ⭐⭐⭐⭐⭐ 4.8/5    │ │
│                  │ │ #Liderazgo          │ │
│ ☑️ Flexibilidad  │ │ #Flexibilidad       │ │
│    (+ hint)      │ │ #Beneficios         │ │
│                  │ │ [Botón] [Botón]     │ │
│ [↻ Limpiar]      │ └───────────────────────┘ │
│                  │ ...                       │
│                  │ (3 más)                   │
│                  │                           │
└──────────────────┴───────────────────────────┘
```

### Elementos Clave
- ✅ **Filtros**: 3 checkboxes + limpiar
- ✅ **Sello Aliada**: Oro/Plata/Bronce con gradientes
- ✅ **Rating**: ⭐⭐⭐⭐⭐ 4.8/5
- ✅ **Categorías**: Badges compactos
- ✅ **Botones**: Ver Oferta (primario) + Conocer Empresa (secundario)

### Interactividad
- Click checkbox → Activa/Desactiva
- Hover card → Eleva + borde top aparece
- Click "Limpiar" → Todos checkboxes off
- Tab navigation → Accesible por teclado

### Datos Demo (4 Empresas)
```
1. TechWomen
   - Nivel Oro 🏅
   - Puesto: Ing. Software Senior
   - Rating: 4.8/5
   - Ciudad: Ciudad de México
   - Beneficios: Liderazgo F., Flexibilidad, Parentales

2. Consultora Avanza
   - Nivel Plata 🥈
   - Puesto: Analista de Datos
   - Rating: 4.5/5
   - Ciudad: Bogotá
   - Beneficios: Flexibilidad, Equidad

3. DataCorp Analytics
   - Nivel Oro 🏅
   - Puesto: Científica de Datos
   - Rating: 4.9/5
   - Ciudad: Santiago
   - Beneficios: Liderazgo F., Parentales, Flexibilidad

4. InnovaLab
   - Nivel Bronce 🥉
   - Puesto: DevOps Engineer
   - Rating: 4.2/5
   - Ciudad: Buenos Aires
   - Beneficios: Flexibilidad
```

---

## 🎨 Pruebas de Diseño

### Prueba la Paleta de Colores
```
Púrpura: Header, botones primarios, texto destacado
Azul: Links, bordes, acentos
Fucsia: Botones CTA principales (Enviar Solicitud)
```

### Prueba Animaciones
1. **fadeInUp** (Hero): Carga inicial
2. **float** (Iconos): Scroll a sección de valor
3. **pulse-glow** (Avatar): Carga perfil candidata
4. **slideDown** (Panel): Expandir validación

### Prueba Responsividad
Abre DevTools (F12) y prueba en:
- Desktop: 1400px+ (Full layout)
- Laptop: 1024px (Sidebar 280px)
- Tablet: 768px (2 columnas)
- Mobile: 480px (1 columna)
- Mobile S: 360px (Optimizado)

### Prueba Accesibilidad
1. **Contraste**: Use WAVE (Chrome extension)
2. **Navegación**: Tab por toda la página
3. **Focus**: Debe ver outline azul
4. **Botones**: Todos navegables por teclado
5. **Footer**: Prueba botones accesibilidad

---

## 🔧 Personalización Rápida

### Cambiar Colores Primarios
Edita `src/styles/globals.css`:
```css
:root {
  --color-purple: #7B2CBF;        /* Cambiar este */
  --color-electric-blue: #00D9FF; /* O este */
  --color-fuchsia: #FF1493;       /* O este */
}
```

### Cambiar Tipografía
En `src/styles/globals.css`:
```css
--font-family: 'Poppins', -apple-system, ...;
/* Reemplazar 'Poppins' por tu fuente */
```

### Cambiar Espaciado
En `src/styles/globals.css`:
```css
--spacing-md: 1rem;  /* Cambiar de 1rem a lo que quieras */
```

### Agregar Nueva Vista
1. Crear componente: `src/components/NuevaVista.jsx`
2. Crear estilos: `src/styles/NuevaVista.css`
3. Agregar botón en `App.jsx`

---

## 📝 Archivos de Documentación

### 📖 DESIGN_GUIDE.md (3000+ líneas)
**Leer si necesitas**: Especificaciones completas de diseño
- Paleta de colores completa
- Tipografía y escala
- Componentes detallados
- Responsividad por vista

### 🔧 TECHNICAL_SPECS.md (2000+ líneas)
**Leer si necesitas**: Detalles técnicos y arquitectura
- Estructura React
- Variables CSS
- Especificaciones de componentes
- Performance

### ⚡ QUICK_REFERENCE.md (1500+ líneas)
**Leer si necesitas**: Referencia rápida de elementos
- Paleta visual
- Componentes clave
- Breakpoints
- Animaciones

### 📋 README_DESIGN.md
**Leer si necesitas**: Instrucciones de instalación y deployment

---

## 🐛 Troubleshooting

### Los estilos no se ven
```bash
# 1. Verifica que globals.css se importe en main.jsx
# 2. Limpia cache del navegador (Ctrl+Shift+R)
# 3. Reinicia servidor (npm run dev)
```

### Las animaciones no funcionan
```bash
# 1. Verifica soporte CSS3 del navegador
# 2. Revisa que @keyframes estén en CSS correcto
# 3. Abre DevTools > Performance para debug
```

### Responsive no funciona correctamente
```bash
# 1. DevTools > Device Toolbar (Ctrl+Shift+M)
# 2. Prueba diferentes resoluciones
# 3. Recarga página (Ctrl+R)
```

### Color de botones raro
```bash
# 1. Verifica variables CSS en globals.css
# 2. Abre DevTools > Computed styles
# 3. Revisa que no haya CSS conflictivo
```

---

## 💡 Consejos

### Para Desarrolladores
1. Usa las variables CSS (no hardcoded colors)
2. Mantén componentes pequeños y reutilizables
3. Sigue la escala de espaciado 8px
4. Testa en todos los breakpoints

### Para Diseñadores
1. Consulta DESIGN_GUIDE.md para especificaciones
2. Usa QUICK_REFERENCE.md para componentes
3. Todos los colores están en variables
4. Las animaciones duran 300ms por defecto

### Para Product Managers
1. Primer objetivo: Router real (React Router v6)
2. Segundo: Backend API (Get empresas, filtros)
3. Tercero: Autenticación
4. Cuarto: Panel de usuario

---

## 🎯 Objetivos Alcanzados

✅ **Página de Inicio**: Completa con all components
✅ **Vitrina de Talento**: Anonimización + Portafolio
✅ **Búsqueda por Confianza**: Filtros + Sello Aliada
✅ **Accesibilidad**: WCAG AA completo
✅ **Responsividad**: 5 breakpoints
✅ **Animaciones**: 4 animations implementadas
✅ **Documentación**: 6500+ líneas

---

## 📞 Soporte

**Stack**: React 19 + Vite 7 + CSS3
**Node Version**: 16+
**Package Manager**: npm
**Browsers**: Chrome 90+, Firefox 88+, Safari 14+

---

## 🚀 Próximos Pasos

1. **Agregar Router** (React Router v6)
2. **Conectar Backend** (API endpoints)
3. **Sistema de Auth** (Login/Signup)
4. **Dashboard Dinámico** (Real data)
5. **PWA** (Progressive Web App)

---

## ✨ ¡Listo para Usar!

Tu proyecto Portal Rosa está listo. Inicia el servidor con:

```bash
npm run dev
```

¡Disfruta explorando el diseño de alta fidelidad! 🌹✨

---

**Última actualización**: 14 de Noviembre de 2025
**Versión**: 1.0
**Estado**: ✅ Completado
