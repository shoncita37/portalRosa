# 🌹 Guía de Diseño UI/UX - Portal Rosa

## Resumen Ejecutivo
Diseño de interfaz de usuario de alta fidelidad para el Portal Rosa, un portal de empleo especializado en conectar talento femenino en STEM con empresas aliadas que validan prácticas de equidad e inclusión.

---

## 📋 Índice de Vistas

1. **Página de Inicio (Home)**
2. **Perfil de Candidata (Vitrina de Talento)**
3. **Listado de Empresas (Búsqueda por Confianza)**

---

## 🎨 Paleta de Colores

### Colores Principales
- **Púrpura Real**: `#7B2CBF` - Color primario, transmite profesionalismo
- **Azul Eléctrico**: `#00D9FF` - Secundario, energía y modernidad
- **Rosa Fucsia**: `#FF1493` - Acentos, botones de acción

### Gradientes
- **Primario**: De Púrpura Real (135°) a Azul Eléctrico
- **Aplicación**: Headers, botones primarios, overlay de hover

### Colores Neutrales
- **Blanco**: `#FFFFFF` - Fondos principales
- **Gris Claro**: `#F5F5F7` - Fondos secundarios
- **Gris Oscuro**: `#2C2C31` - Texto principal
- **Negro**: `#1A1D` - Encabezados

### Colores Especiales
- **Sello Oro**: `#FFD700` - Sello Aliada Nivel Oro
- **Sello Plata**: `#C0C0C0` - Sello Aliada Nivel Plata
- **Sello Bronce**: `#CD7F32` - Sello Aliada Nivel Bronce

---

## 📐 Tipografía

- **Familia**: Poppins (Google Fonts)
- **Pesos utilizados**: 300, 400, 500, 600, 700, 800

### Escala de Tamaños
- **Título Principal (h1)**: 3rem / 48px
- **Títulos Secundarios (h2)**: 2.5rem / 40px
- **Subtítulos (h3)**: 1.5rem / 24px
- **Texto Base**: 1rem / 16px
- **Texto Pequeño**: 0.875rem / 14px

---

## 🏗️ Vista 1: Página de Inicio

### Componentes Principales

#### Header
- Logo "Portal Rosa" con icono 🌹
- Subtítulo: "Tu Empleo, Con Confianza"
- Navegación principal: Explorar Empresas, Mi Perfil, Recursos
- Botones CTA: Iniciar Sesión (secundario), Registrarse (primario)
- Estado: Sticky en scroll

#### Hero Section
- Fondo: Gradiente púrpura a azul eléctrico
- Titular: "Tu carrera, con Confianza"
- Destacado en gradiente fucsia: "con Confianza"
- Subtítulo: "Empleos en STEM validados por mujeres. Conectamos talento femenino con empresas que realmente valoran la equidad."
- Botones CTA (lado a lado en desktop, stack en móvil):
  - Primario: "🎯 Encuentra Talento (Empresas)"
  - Secundario: "✨ Crea tu Vitrina (Profesionales)"

#### Sección de Valor (4 Cards)
- Layout: Grid responsive (4 columnas desktop, 1 móvil)
- Cada card contiene:
  - Icono grande (emoji o SVG)
  - Título
  - Descripción
  - Efecto hover: Elevación + borde top gradiente

**Cards:**
1. 🏅 **Sello de Confianza** - Validación rigurosa de empresas aliadas
2. 💻 **Portafolio Digital** - Vitrina profesional que destaca proyectos
3. 🔒 **Anonimización** - Control total sobre privacidad
4. ⚖️ **Filtros de Equidad** - Busca empresas con beneficios comprobados

#### Testimonios (3 Cards)
- Cards con borde izquierdo de 4px en gradiente
- Comilla decorativa grande y translúcida en esquina superior
- Texto en cursiva
- Autor y empresa al pie
- Efecto hover: Elevación

#### Footer
- Secciones: Logo, Enlaces, Legal, Accesibilidad
- Fondos oscuro (gradiente gris oscuro a negro)
- Botones de accesibilidad:
  - 🔤 Aumentar Texto
  - 🎨 Modo Alto Contraste
- Copyright

---

## 🏢 Vista 2: Perfil de Candidata (Vitrina de Talento)

### Diseño Lateral (Sidebar + Main)

#### Sidebar Izquierdo (350px, sticky)

**Avatar Anónimo**
- Icono 👤 dentro de círculo gradiente
- Texto: "Perfil Anónimo" en púrpura
- Animación: Pulse glow

**Profile Card**
- Borde superior de 4px púrpura
- Título Profesional: "Ingeniera de Software Senior"

**Score Section**
- Fondo: Gradiente light (purple + blue a 5%)
- Formato: `9.2 / 10`
- Números en gradiente principal
- Texto "Puntuación de Portafolio"

**Disponibilidad (Toggle)**
- Switch animado
- Etiqueta: "Abierta a Oportunidades"
- On: Verde/Gradiente
- Off: Gris

**Skills Tags**
- Badges con borde eléctrico, fondo light
- Hover: Elevación
- Ejemplos: Python, AWS, React, Scrum, Machine Learning

#### Main Content

**Sección de Portafolio**
- Título con borde inferior en eléctrico
- Grid de 3 proyectos
- Cada proyecto:
  - Icono/Emoji
  - Nombre del proyecto
  - Hover: Fondo gradiente + elevación

**Proyectos Demo:**
1. 🤖 Sistema de IA para Análisis
2. 📊 Plataforma de Datos
3. 📱 App Móvil React Native

**Sección de Acción**
- Fondo: Gradiente principal
- Botón principal:
  - Fondo: Rosa Fucsia
  - Texto: "✉️ Enviar Solicitud de Contacto"
  - Sombra fucsia
  - Hover: Elevación + sombra más intensa
- Texto debajo: "El perfil será revelado solo si la candidata acepta tu solicitud."
- Botón secundario: "Ver más detalles de validación"
- Panel expandible con validaciones:
  - ✓ Experiencia verificada en proyectos reales
  - ✓ Referencias profesionales comprobadas
  - ✓ Habilidades técnicas validadas
  - ✓ Autenticidad de portafolio confirmada

### Responsividad
- Desktop: Sidebar + Main en grid
- Tablet: Grid ajustado
- Mobile: Stack vertical (sidebar arriba)

---

## 🏢 Vista 3: Listado de Empresas (Búsqueda por Confianza)

### Diseño Lateral (Filtros + Lista)

#### Sidebar de Filtros (300px, sticky)

**Título**: "Filtros Avanzados"
- Borde inferior púrpura (3px)

**Filtros (Checkboxes personalizados)**

1. **Liderazgo Femenino**
   - Icono: 👩‍💼
   - Hint: "Empresas con mujeres en cargos directivos"

2. **Sala Cuna / Beneficios Parentales**
   - Icono: 👶
   - Hint: "Políticas comprobadas de apoyo parental"

3. **Flexibilidad Horaria Comprobada**
   - Icono: ⏱️
   - Hint: "Comprobado por reseñas de empleadas"

**Botón Limpiar Filtros**
- Fondo: Gris claro
- Texto: Púrpura
- Border: 2px púrpura
- Hover: Gradiente primario con texto blanco

#### Main Content

**Título y Descripción**
- "Empresas con Sello Aliada"
- Contador: "{N} empresas validadas esperándote"

**Lista de Empresas (Cards verticales)**

Cada card contiene:

**Header**
- Nombre empresa + Ubicación (🌹 Ciudad)
- Sello Aliada en corner derecho

**Sello Aliada Badge**
- Fondo: Gradiente según nivel
  - Oro: Gradiente dorado (15% opacity) + borde FFD700
  - Plata: Gradiente plata + borde C0C0C0
  - Bronce: Gradiente bronce + borde CD7F32
- Icono: 🏅
- Texto:
  - Etiqueta: "Sello Aliada"
  - Nivel: "Nivel Oro" / "Nivel Plata" / "Nivel Bronce"

**Puesto**
- Título del puesto en bold
- Borde inferior gris (2px)

**Rating Sección**
- Estrellas: ⭐⭐⭐⭐⭐ (cantidad variable)
- Número: 4.8/5
- Etiqueta: "Cultura Organizacional"
- Fondo: Gradiente light (purple+blue) con borde izquierdo eléctrico

**Categorías**
- Badges con fondo light eléctrico
- Borde eléctrico
- Texto púrpura
- Ejemplos: "Liderazgo Femenino", "Flexibilidad Horaria", "Beneficios Parentales"

**Acciones**
- Flex row de 2 botones (wrap en móvil)
- Botón Primario: "Ver Oferta Completa"
  - Gradiente primario
  - Sombra
  - Hover: Elevación
- Botón Secundario: "Conocer Empresa"
  - Fondo: Gris claro
  - Border: 2px púrpura
  - Hover: Fondo gradiente + texto blanco

**Efecto Card Hover**
- Elevación (-4px)
- Sombra aumentada
- Borde superior aparece con gradiente

### Datos Demo (4 Empresas)

1. **TechWomen** - Nivel Oro - 4.8/5
   - Ingeniera de Software Senior
   - Ciudad de México
   - Categorías: Liderazgo Femenino, Flexibilidad Horaria, Beneficios Parentales

2. **Consultora Avanza** - Nivel Plata - 4.5/5
   - Analista de Datos
   - Bogotá
   - Categorías: Flexibilidad Horaria, Equidad Salarial

3. **DataCorp Analytics** - Nivel Oro - 4.9/5
   - Científica de Datos
   - Santiago
   - Categorías: Liderazgo Femenino, Beneficios Parentales, Flexibilidad Horaria

4. **InnovaLab** - Nivel Bronce - 4.2/5
   - DevOps Engineer
   - Buenos Aires
   - Categorías: Flexibilidad Horaria

---

## 🎯 Componentes Reutilizables

### Botones

**Primario (.btn-primary)**
- Gradiente púrpura → azul
- Texto blanco
- Padding: md/lg/xl
- Sombra: md
- Hover: Elevación + sombra aumentada
- Border-radius: lg (1.5rem)

**Secundario (.btn-secondary)**
- Fondo: Blanco
- Texto: Púrpura
- Border: 2px púrpura
- Hover: Gradiente light + texto blanco
- Transiciones: smooth

**Grande (.btn-lg)**
- Padding aumentado
- Font-size aumentado
- Ideal para CTAs principales

### Tarjetas

**Estructura general**
- Fondo: Blanco
- Border-radius: lg
- Sombra: md
- Border: 1px medium-gray
- Hover: Sombra lg + elevación

**Variantes**
- Con borde superior gradiente
- Con borde izquierdo de color
- Con overlay de gradiente

### Badges/Tags

**Skill Tags**
- Fondo: Light eléctrico (10%)
- Borde: eléctrico
- Texto: Púrpura
- Border-radius: 20px
- Padding: sm/md

**Category Badges**
- Similar a skill tags
- Más compactos
- White-space: nowrap

---

## ♿ Accesibilidad (RNF-03)

### Implementado

1. **Alto Contraste**: Textos oscuros sobre fondos claros (WCAG AA)
2. **Focus Visible**: Outline en azul eléctrico (3px)
3. **Elementos Interactivos**: Mínimo 44x44px
4. **Botones de Accesibilidad en Footer**:
   - Aumentar tamaño de texto
   - Modo alto contraste
5. **Semántica HTML**: Uso de h1-h6, buttons, labels
6. **Textos Alternativos**: Emojis con títulos (title attributes)
7. **Navegación por Teclado**: Todos los elementos navegables
8. **Skip Links**: Para saltar al contenido principal

---

## 📱 Breakpoints de Responsividad

- **Desktop**: 1400px+ (3 columnas, layouts complejos)
- **Laptop**: 1024px - 1399px (2-3 columnas ajustadas)
- **Tablet**: 768px - 1023px (2 columnas, sidebar colapsado)
- **Móvil**: 480px - 767px (1 columna, stack vertical)
- **Móvil Pequeño**: < 480px (optimizado para pantallas pequeñas)

---

## 🎬 Animaciones y Transiciones

### Transiciones
- `--transition-fast`: 150ms ease-in-out
- `--transition-base`: 300ms ease-in-out
- `--transition-slow`: 500ms ease-in-out

### Animaciones CSS

1. **fadeInUp**: Aparición con movimiento vertical (0.8s)
   - Usado en hero section
   - De 20px hacia arriba + opacity

2. **float**: Flotación suave en loop (3s)
   - Usado en iconos de valor
   - ±10px vertical

3. **pulse-glow**: Brillo pulsante (2s)
   - Usado en avatar anónimo
   - Sombra variable

4. **slideDown**: Deslizamiento de panel (300ms)
   - Usado en detalles expandibles

---

## 🔧 Espaciado (Escala de 8px)

- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)
- `--spacing-3xl`: 4rem (64px)

---

## 📊 Estructura de Archivos CSS

```
src/styles/
├── globals.css           # Variables CSS y estilos globales
├── Header.css            # Header responsivo
├── HeroSection.css       # Hero con gradientes
├── ValueProposition.css  # Cards de valor
├── TestimonialsSection.css  # Testimonios
├── Footer.css            # Footer con accesibilidad
├── CandidateProfile.css  # Vista de perfil (sidebar + main)
└── CompanyListings.css   # Vista de empresas con filtros
```

---

## 🎨 Notas de Diseño

1. **Coherencia Visual**: Todos los botones primarios usan el mismo gradiente
2. **Jerarquía Clara**: Tamaños de fuente y colores definen la importancia
3. **Espaciado Consistente**: Basado en escala de 8px
4. **Microinteracciones**: Hover, focus y active states suaves
5. **Anonimización Visual**: Avatar genérico + términos como "Perfil Anónimo"
6. **Confianza**: Logos de sellos, estrellas de rating, badges de validación
7. **Empoderamiento**: Colores vibrantes (púrpura + azul), tipografía moderna

---

## 📋 Checklist de Implementación

- ✅ Componentes React modularizados
- ✅ Sistema de variables CSS completo
- ✅ Paleta de colores aplicada en todas las vistas
- ✅ Responsive design (mobile-first)
- ✅ Accesibilidad (contraste, focus, navegación)
- ✅ Animaciones y transiciones suaves
- ✅ Sombras y profundidad visuales
- ✅ Badges y iconografía consistentes
- ✅ Botones con múltiples variantes
- ✅ Navegación entre vistas (demo)

---

**Última actualización**: 14 de Noviembre de 2025
**Versión**: 1.0
**Estado**: Diseño de Alta Fidelidad Completado ✨
