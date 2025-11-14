# StemFem - Interfaz (Frontend)

Este repositorio contiene la interfaz de alta fidelidad de StemFem (antes "Portal Rosa").
Es una aplicación frontend creada con React + Vite que implementa las vistas principales: Landing, Perfil de candidata (Vitrina de Talento - RF-01) y Listado de Empresas con filtros de equidad (RF-02).

Este README reúne todo lo que se ha usado en el proyecto y las instrucciones para ejecutar, desarrollar y desplegar localmente en Windows (PowerShell).

## Contenido

- Descripción del proyecto
- Stack tecnológico
- Cómo ejecutar localmente (PowerShell)
- Estructura de archivos
- Componentes principales
- Estilos y tokens de diseño
- Accesibilidad
- Credenciales demo
- Documentación adicional
- Próximos pasos sugeridos

---

## Descripción rápida

StemFem es una interfaz de ejemplo diseñada para una plataforma de empleos enfocada en mujeres en STEM. Incluye:

- Landing page moderna con gradientes y CTAs
- Perfil de candidata anónimo con portafolio y botón de contacto bajo consentimiento (RF-01)
- Listado de empresas con filtros por equidad y sellos (RF-02)
- Sistema de diseño centralizado en `src/styles/globals.css` (45+ variables)

---

## Stack tecnológico (qué se usó)

- Node.js + npm (gestor de paquetes)
- React 19.1.1 (UI)
- Vite 7.1.7 (dev server y bundler)
- CSS3 puro con variables (no se usó preprocesador)
- Google Fonts: Poppins (300-800)
- ESLint 9.36.0 (linting)
- Git (control de versiones)

Librerías listadas en `package.json`:

```json
"dependencies": {
	"react": "^19.1.1",
	"react-dom": "^19.1.1"
},
"devDependencies": {
	"@eslint/js": "^9.36.0",
	"@types/react": "^19.1.16",
	"@types/react-dom": "^19.1.9",
	"@vitejs/plugin-react": "^5.0.4",
	"eslint": "^9.36.0",
	"eslint-plugin-react-hooks": "^5.2.0",
	"eslint-plugin-react-refresh": "^0.4.22",
	"globals": "^16.4.0",
	"vite": "^7.1.7"
}
```

---

## Cómo ejecutar localmente (Windows - PowerShell)

1. Abrir PowerShell en la carpeta del proyecto `PROYECTO`.

2. Instalar dependencias (sólo la primera vez o cuando cambien):

```powershell
cd 'c:\Users\DELL\Documents\GitHub\portalRosa\PROYECTO'
npm install
```

3. Ejecutar servidor de desarrollo (Vite):

```powershell
npm run dev
```

4. Abrir en el navegador: http://localhost:5173

Vite habilita HMR (Hot Module Replacement): cualquier cambio en los archivos se recargará automáticamente.

---

## Scripts útiles (package.json)

- `npm run dev` — iniciar servidor de desarrollo
- `npm run build` — generar build para producción
- `npm run preview` — previsualizar build localmente
- `npm run lint` — ejecutar ESLint

---

## Estructura del proyecto (resumen)

```
PROYECTO/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
+│   ├── App.jsx
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ValueProposition.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── CandidateProfile.jsx
│   │   ├── CompanyListings.jsx
│   │   ├── Login.jsx
│   │   └── Footer.jsx
│   └── styles/
│       ├── globals.css
│       ├── Header.css
│       ├── Login.css
│       ├── HomePage.css
│       ├── HeroSection.css
│       ├── ValueProposition.css
│       ├── TestimonialsSection.css
│       ├── CandidateProfile.css
│       ├── CompanyListings.css
│       └── Footer.css
└── PROYECTO/ (documentación y archivos adicionales)
```

---

## Componentes principales

- `HomePage.jsx` — Wrapper que muestra Header, Hero, ValueProposition, Testimonials y Footer
- `Header.jsx` — Navbar con logo StemFem, navegación y acciones (login/registro/cerrar sesión)
- `HeroSection.jsx` — Sección principal con gradiente y CTAs
- `ValueProposition.jsx` — 4 tarjetas de valor
- `TestimonialsSection.jsx` — Testimonios
- `Login.jsx` — Página de inicio de sesión con validación y credenciales demo
- `CandidateProfile.jsx` — Vitrina de talento anónima (RF-01)
- `CompanyListings.jsx` — Listado de empresas con filtros de equidad (RF-02)
- `Footer.jsx` — Footer con enlaces y accesibilidad

---

## Estilos y sistema de diseño

- `src/styles/globals.css` contiene el sistema de tokens (45+ variables): colores, gradientes, tipografía, espaciado (grid 8px), sombras, radios, transiciones.
- Uso de la fuente Poppins desde Google Fonts.
- Estilos separados por componente en `src/styles/*.css`.

Variables destacadas en `globals.css`:

- Colores primarios: `--color-purple: #7B2CBF`, `--color-electric-blue: #00D9FF`, `--color-fuchsia: #FF1493`
- Sellos: `--seal-gold`, `--seal-silver`, `--seal-bronze`
- Espaciado: `--spacing-sm/md/lg/...` (8px grid)
- Tipografía: `--font-family: 'Poppins'`

---

## Animaciones implementadas

- `fadeInUp` — Hero (0.8s)
- `float` — Iconos (3s infinito)
- `pulse-glow` — Avatar anónimo (2s infinito)
- `slideDown` — Panel expandible (300ms)
- `rotate` — Logo átomo (8s infinito)
- `spin` — Loader (0.8s infinito)

---

## Accesibilidad (WCAG AA)

- Contraste de color verificado (relación mínima 4.5:1 en textos importantes)
- Tamaño mínimo de botones/interactivos: 44×44 px
- Estados `:focus` visibles y respetuosos
- Uso semántico de etiquetas (`header`, `nav`, `main`, `footer`, `label`)

---

## Credenciales demo

Usa estas credenciales para probar el flujo de login demo:

- Candidata: `demo@candidata.com` / `password123`
- Empresa: `demo@empresa.com` / `password123`

Nota: el login en este prototipo está simulado (setTimeout) y no llama a un backend real.

---

## Branding y cambios recientes

- El proyecto fue renombrado y rebrandeado a **StemFem**.
- Se sustituyó el icono de rosa por un logo más conceptual "StemFem": un icono cuadrado redondeado con un átomo animado y una letra "F" en el centro. El cambio se aplicó en `Header.jsx`, `Login.jsx` y `Footer.jsx`.

---

## Documentación adicional (archivos dentro del repo)

- `STACK_TECNOLOGICO.md` — Documento técnico con detalle del stack y razones de selección
- `HERRAMIENTAS_VISUALES.md` — Diagramas y flujos visuales
- `HERRAMIENTAS_RESUMEN.md` — Resumen rápido de herramientas
- `DESIGN_GUIDE.md`, `TECHNICAL_SPECS.md`, `GUIA_INICIO_RAPIDO.md`, `VISTA_PREVIA_VISUAL.md`, etc. — documentación de diseño y entrega

Ver estos archivos en la raíz `PROYECTO/`.

---

## Buenas prácticas y próximos pasos sugeridos

1. Integrar un backend real (API REST o GraphQL) para:
	 - Autenticación real (OAuth2/JWT)
	 - CRUD de candidatos y empresas
	 - Filtrado y búsqueda dinámica

2. Reemplazar navegación demo por `react-router-dom` (Rutas: `/`, `/login`, `/profile`, `/companies`).

3. Añadir tests unitarios e2e (Jest + React Testing Library, Cypress).

4. Considerar TypeScript para seguridad de tipos.

5. Configurar CI/CD (GitHub Actions) con lint, tests y build.

6. Configurar entorno de despliegue (Vercel, Netlify, AWS S3 + CloudFront).

---

## Contribuir

1. Crea una rama a partir de `main`.
2. Haz commits pequeños y descriptivos.
3. Ejecuta `npm run lint` antes de abrir PR.
4. Describe en el PR los cambios y cómo probarlos.

---

## Licencia

Este repositorio de ejemplo se entrega sin una licencia explícita. Para uso público/privado, añadir `LICENSE.md` con la licencia deseada (MIT, Apache-2.0, etc.).

---

## Contacto

Para dudas sobre el código o la arquitectura, abre un issue en el repositorio o contáctame dentro del equipo.

---

_Última actualización: 14 de noviembre de 2025_

