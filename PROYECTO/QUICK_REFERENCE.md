# 🎨 Referencia Rápida - Portal Rosa UI Design

## 📱 Vistas Principales

### Vista 1: Página de Inicio (Home)
```
┌─────────────────────────────────────────────┐
│            HEADER                          │
│  🌹 PORTAL ROSA  [Nav Links]  [Botones]   │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│        HERO SECTION (Gradiente)             │
│                                             │
│    Tu carrera, con Confianza               │
│    Empleos en STEM validados...             │
│                                             │
│    [🎯 Encuentra Talento] [✨ Crea Vitrina]│
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│     PROPUESTA DE VALOR (4 Cards)           │
│  [🏅] [💻] [🔒] [⚖️]                        │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│       TESTIMONIOS (3 Cards)                 │
│  ["Texto..."] ["Texto..."] ["Texto..."]     │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│         FOOTER (Oscuro)                     │
│  [Secciones] [Accesibilidad] [Copyright]    │
└─────────────────────────────────────────────┘
```

### Vista 2: Perfil de Candidata
```
┌──────────────────────────────────────────────────────────┐
│                      HEADER                              │
└──────────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────────────────────────┐
│                  │                                      │
│  SIDEBAR (350px) │     MAIN CONTENT                     │
│                  │                                      │
│  ┌────────────┐  │  ┌─────────────────────────────────┐ │
│  │    👤      │  │  │  Portafolio de Proyectos        │ │
│  │  Anónimo   │  │  │  [🤖] [📊] [📱]                 │ │
│  └────────────┘  │  └─────────────────────────────────┘ │
│                  │                                      │
│  Ing. Software   │  ┌─────────────────────────────────┐ │
│  Senior          │  │  ✉️ Enviar Solicitud Contacto   │ │
│                  │  │  (Solo si acepta)               │ │
│  9.2 / 10 📊     │  │  [+ Ver validación]             │ │
│                  │  └─────────────────────────────────┘ │
│  ☑️ Disponible   │                                      │
│                  │                                      │
│  #Skills         │                                      │
│  #Tags           │                                      │
│                  │                                      │
└──────────────────┴──────────────────────────────────────┘
```

### Vista 3: Listado de Empresas
```
┌──────────────────────────────────────────────────────────┐
│                      HEADER                              │
└──────────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────────────────────────┐
│                  │                                      │
│  FILTROS (300px) │     LISTADO DE EMPRESAS             │
│                  │                                      │
│  ☐ Liderazgo F.  │  ┌─────────────────────────────────┐ │
│  ☐ Beneficios    │  │ TechWomen      [Sello Oro 🏅]   │ │
│  ☐ Flexibilidad  │  │ Ciudad de México                │ │
│                  │  │ Ing. Software Senior            │ │
│  [↻ Limpiar]     │  │ ⭐⭐⭐⭐⭐ 4.8/5 Cultura Org     │ │
│                  │  │ #Liderazgo #Flexibilidad #Padres│ │
│                  │  │ [Ver Oferta] [Conocer Empresa]  │ │
│                  │  └─────────────────────────────────┘ │
│                  │  ┌─────────────────────────────────┐ │
│                  │  │ Consultora Avanza  [Plata 🥈]   │ │
│                  │  │ ... (similar)                   │ │
│                  │  └─────────────────────────────────┘ │
│                  │                                      │
└──────────────────┴──────────────────────────────────────┘
```

---

## 🎨 Paleta de Colores

### Colores Principales
```
PÚRPURA REAL              AZUL ELÉCTRICO           ROSA FUCSIA
#7B2CBF                   #00D9FF                  #FF1493
███████                   ███████                  ███████
Profesional               Moderno                  Acentos/CTAs
```

### Gradiente Primario
```
135° Angle
#7B2CBF ──────────────────────→ #00D9FF
Púrpura Real              Azul Eléctrico
(Usado en: Botones, Headers, Accents)
```

### Colores Neutrales
```
BLANCO          GRIS CLARO      GRIS OSCURO     NEGRO
#FFFFFF         #F5F5F7         #2C2C31         #1A1A1D
(Fondos)        (BG Secundario) (Texto)         (Encabezados)
```

### Selos Aliada
```
ORO              PLATA            BRONCE
#FFD700          #C0C0C0          #CD7F32
(Nivel Oro)      (Nivel Plata)    (Nivel Bronce)
```

---

## 🧩 Componentes Clave

### 1. Botón Primario (.btn-primary)
```css
Gradiente: Púrpura → Azul Eléctrico
Color: Blanco
Padding: 1rem 2rem (md) o 1.5rem 3rem (lg)
Border-radius: 1.5rem
Sombra: Elevada
Hover: Sube 2px + sombra mayor
Transición: 300ms ease-in-out
```

### 2. Botón Secundario (.btn-secondary)
```css
Fondo: Blanco
Border: 2px Púrpura
Color: Púrpura
Padding: 1rem 2rem
Border-radius: 1.5rem
Hover: Gradiente Light + Texto blanco
Transición: 300ms ease-in-out
```

### 3. Sello Aliada Badge
```css
Estilos según nivel:
- Oro: Fondo dorado 15% + borde #FFD700
- Plata: Fondo plata 15% + borde #C0C0C0
- Bronce: Fondo bronce 15% + borde #CD7F32

Contenido:
🏅 | Sello Aliada
   | Nivel Oro/Plata/Bronce

Padding: 1rem 1.5rem
Border-radius: 1.5rem
```

### 4. Skill Tag
```css
Fondo: Azul Eléctrico 10% rgba
Color: Púrpura
Border: 1px Azul Eléctrico
Border-radius: 20px
Padding: 0.5rem 1rem
Font-size: 0.875rem
Font-weight: 600
Hover: Fondo 20% + eleva 2px
```

### 5. Card de Empresa
```css
Fondo: Blanco
Border: 1px Gris Medio
Border-radius: 1.5rem
Padding: 2rem
Sombra: Elevada
Hover: Borde púrpura + sombra mayor + eleva 4px
Border-top: 4px transparente (aparece on hover)
```

### 6. Avatar Anónimo
```css
Forma: Círculo (120x120px)
Gradiente: Púrpura → Azul Eléctrico
Contenido: 👤 Icono
Animación: pulse-glow (2s loop)
- Sombra variable (glow effect)
Texto debajo: "Perfil Anónimo" en púrpura
```

### 7. Rating Component
```css
Contenedor con:
- Fondo: Gradiente light (purple+blue 5%)
- Borde-izquierdo: 4px Azul Eléctrico
- Padding: 1rem 1.5rem
- Border-radius: 0.75rem

Contenido:
⭐⭐⭐⭐⭐ | 4.8/5 | Cultura Organizacional
```

### 8. Toggle Switch
```css
Ancho: 44px
Alto: 24px
Fondo: #ccc (off) / Gradiente (on)
Switch interno:
  - Forma: círculo
  - Color: Blanco
  - Sombra: Elevada
  - Transición: 300ms
Etiqueta: "Abierta a Oportunidades"
```

---

## 📐 Espaciado (Escala 8px)

```
xs  4px   ▂▂
sm  8px   ▄▄
md  16px  ███
lg  24px  ████
xl  32px  ██████
2xl 48px  ███████
3xl 64px  ████████
```

---

## 🔤 Tipografía

### Familia
```
Poppins (Google Fonts)
Weights: 300, 400, 500, 600, 700, 800
```

### Escala de Tamaños
```
h1 (3rem / 48px)      - Títulos principales
h2 (2.5rem / 40px)    - Secciones principales
h3 (1.5rem / 24px)    - Subtítulos
md (1.125rem / 18px)  - Texto destacado
base (1rem / 16px)    - Texto normal
sm (0.875rem / 14px)  - Texto pequeño
```

---

## ♿ Accesibilidad

```
✓ Contraste: WCAG AA (Dark text on light bg)
✓ Focus Visible: Outline 3px azul eléctrico
✓ Elementos: Mínimo 44x44px interactivos
✓ Semántica: h1-h6, button, label, nav
✓ Teclado: Tab navegable completo
✓ Footer: Botones accesibilidad
  - 🔤 Aumentar Texto
  - 🎨 Modo Alto Contraste
✓ Colores: No dependen solo del color
✓ Animaciones: Suaves 300ms (evitan flasheo)
```

---

## 🎬 Animaciones

### fadeInUp (0.8s)
```
Entrada hero
0%:    opacity: 0, translateY(20px)
100%:  opacity: 1, translateY(0)
```

### float (3s loop)
```
Iconos flotantes
0%, 100%:  translateY(0)
50%:       translateY(-10px)
```

### pulse-glow (2s loop)
```
Avatar anónimo
0%, 100%:  box-shadow: var(--shadow-lg)
50%:       box-shadow: 0 0 30px rgba(123, 44, 191, 0.4)
```

### slideDown (300ms)
```
Panel expandible
0%:   opacity: 0, translateY(-10px)
100%: opacity: 1, translateY(0)
```

---

## 📱 Breakpoints

```
Desktop XL    ≥ 1400px  ▌▌▌ (3 col layouts)
Laptop        1024-1399 ▌▌  (2 col layouts)
Tablet        768-1023  ▌   (2 col, compact)
Mobile        480-767   ▌   (1 col, stacked)
Mobile S      < 480px   ▌   (Full optimized)
```

**Cambios en breakpoints:**
- Hero: Font-size ajustado
- Grid: Columnas reducidas
- Sidebar: Sticky → Static (móvil)
- Cards: Padding reducido
- Botones: Width full (móvil)

---

## 🔧 Variables CSS Principales

```css
/* Colores */
--color-purple: #7B2CBF
--color-electric-blue: #00D9FF
--color-fuchsia: #FF1493
--color-white: #FFFFFF
--color-light-gray: #F5F5F7
--color-dark-gray: #2C2C31
--color-black: #1A1A1D

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #7B2CBF 0%, #00D9FF 100%)
--gradient-dark: linear-gradient(135deg, #5A1F8C 0%, #0099CC 100%)
--gradient-light: linear-gradient(135deg, #A855D9 0%, #06E7F1 100%)

/* Sombras */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12)
--shadow-lg: 0 12px 24px rgba(123, 44, 191, 0.15)
--shadow-xl: 0 20px 48px rgba(123, 44, 191, 0.2)

/* Transiciones */
--transition-fast: 150ms ease-in-out
--transition-base: 300ms ease-in-out
--transition-slow: 500ms ease-in-out
```

---

## 📊 Estructura de Archivos CSS

```
src/styles/
│
├── globals.css ........................ Variables + estilos globales
├── Header.css ........................ Header navegable sticky
├── HeroSection.css ................... Hero con gradientes
├── ValueProposition.css .............. 4 cards de valor
├── TestimonialsSection.css ........... Testimonios
├── Footer.css ........................ Footer + accesibilidad
├── CandidateProfile.css .............. Sidebar 350px + main
└── CompanyListings.css ............... Filtros 300px + lista
```

---

## 🎯 Elementos por Vista

### Página de Inicio
- Header con nav y botones
- Hero section (gradiente + CTAs)
- 4 value cards
- 3 testimonios
- Footer accesible

### Perfil de Candidata
- Sidebar: Avatar + Score + Skills
- Main: Portfolio projects + CTA fucsia
- Expandible: Detalles de validación
- Anonimización completa

### Listado de Empresas
- Sidebar: 3 checkboxes + limpiar
- Main: 4 companies cards
- Cada card: Nombre + Sello + Rating + Badges
- Botones: Ver Oferta + Conocer Empresa

---

## 🚀 Estado de Implementación

✅ **Completado:**
- ✓ 8 componentes React
- ✓ 9 archivos CSS con sistema de variables
- ✓ Paleta de colores implementada
- ✓ Responsive design (5 breakpoints)
- ✓ Accesibilidad WCAG AA
- ✓ Animaciones suaves
- ✓ Sombras y profundidad
- ✓ Layout sidebar + main
- ✓ Badges y badges especiales
- ✓ Demo navigation

🔄 **Próximas Fases:**
- [ ] Router real (React Router v6)
- [ ] Backend API
- [ ] Sistema de autenticación
- [ ] Filtros dinámicos
- [ ] Dark mode
- [ ] PWA (Service Workers)

---

## 💡 Notas de Diseño

1. **Consistencia**: Todo usa variables CSS
2. **Accesibilidad**: Prioridad en contraste y navegación
3. **Performance**: Animations usan transform/opacity
4. **Responsividad**: Mobile-first
5. **Equidad**: Anonimización + Sello Aliada visible
6. **Confianza**: Sellos, ratings, validaciones
7. **Empoderamiento**: Colores vibrantes + tipografía moderna

---

## 📞 Soporte de Navegadores

| Navegador | Desktop | Móvil |
|-----------|---------|-------|
| Chrome    | ✅ 90+  | ✅ 90+ |
| Firefox   | ✅ 88+  | ✅ 88+ |
| Safari    | ✅ 14+  | ✅ 14+ |
| Edge      | ✅ 90+  | ✅ 90+ |

---

**Última actualización**: 14 de Noviembre de 2025
**Versión**: 1.0 - Diseño de Alta Fidelidad
**Estado**: ✅ Completado
