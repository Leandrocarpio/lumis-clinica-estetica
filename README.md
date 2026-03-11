# 🏥 Lumis Clínica Estética — Landing Page Premium

> Caso de estudio: landing page profesional para clínica de medicina estética en Mendoza.
> Diseñada para convertir visitantes en consultas vía WhatsApp.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-brightgreen)
![Status](https://img.shields.io/badge/Estado-Completado-success)

---

## 🚀 Ver Demo Online

**[👉 Ver la landing page en vivo →](https://leandrocarpio.github.io/lumis-clinica-estetica/)**

![Lumis Clínica Estética — Hero](https://images.unsplash.com/photo-1570172619644-dfd03ed5d881
)

---

## 📋 Navegación rápida

- [¿Qué es este proyecto?](#-qué-es-este-proyecto)
- [Secciones de la landing](#-secciones-de-la-landing)
- [Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [Arquitectura de archivos](#-arquitectura-de-archivos)
- [Cómo usar este proyecto](#-cómo-usar-este-proyecto)
- [Decisiones de diseño](#-decisiones-de-diseño)
- [Contacto](#-contacto)

---

## 🎯 ¿Qué es este proyecto?

**Lumis Clínica Estética** es un caso ficticio desarrollado como parte de mi portfolio profesional, orientado al nicho de salud y bienestar. Demuestra cómo diseño y desarrollo landings de alto impacto para clínicas, consultorios y centros médicos que buscan mejorar su presencia digital y captar más pacientes.

**Objetivos del proyecto:**
- 💬 Convertir visitas en consultas directas por WhatsApp
- 🏥 Transmitir confianza médica y profesionalismo desde el primer scroll
- 📱 Ofrecer una experiencia mobile-first real, no solo adaptada
- 🎨 Demostrar capacidad de diseño premium en el nicho salud

**Público objetivo de la clínica ficticia:**
adultos de 25 a 55 años, poder adquisitivo medio-alto, interesados en estética y bienestar personal.

---

## 📄 Secciones de la landing

| Sección | Descripción |
|---|---|
| **Hero fullscreen** | Imagen de impacto, título orientado a resultados y CTAs de conversión |
| **Propuesta de valor** | Filosofía médica de la clínica y diferenciales clave |
| **Tratamientos** | 4 cards con servicios principales, duración y CTA |
| **Beneficios** | Por qué elegir Lumis, lista numerada con copy honesto |
| **Equipo médico** | 3 profesionales con especialidad y trayectoria |
| **Instalaciones** | Galería visual que transmite el nivel premium del espacio |
| **Testimonios** | 3 reseñas reales con avatar, nombre y tratamiento |
| **CTA fuerte** | Llamado a la acción central con doble botón |
| **FAQ** | 6 preguntas frecuentes con accordion animado |
| **Contacto** | Dirección, horarios, WhatsApp, mapa de Google Maps |
| **Footer** | Links internos, redes sociales, datos de contacto corporativo |

---

## 🛠️ Tecnologías utilizadas

- **HTML5** semántico con atributos ARIA para accesibilidad
- **CSS3** modular con variables, Flexbox y Grid
- **JavaScript** vanilla sin dependencias externas
- **Bootstrap Icons** vía CDN para iconografía profesional
- **Google Fonts** — Cormorant Garamond + Jost
- **Unsplash** para imágenes de referencia (reemplazables)
- **Google Maps Embed** para ubicación real en Mendoza

---

## 📁 Arquitectura de archivos

```
lumis-clinica-estetica/
│
├── index.html                  # Estructura HTML completa
├── README.md                   # Este archivo
│
└── assets/
    ├── css/
    │   ├── base.css            # Variables, reset, tipografía, utilidades
    │   ├── components.css      # Botones, cards, badges, testimonios, FAQ
    │   ├── layout.css          # Navbar, hero, secciones, footer, WhatsApp float
    │   └── responsive.css      # Breakpoints mobile-first, prefers-reduced-motion
    │
    ├── js/
    │   ├── navbar.js           # Scroll, hamburger, smooth scroll
    │   ├── faq.js              # Accordion accesible con teclado
    │   └── animations.js       # IntersectionObserver, parallax hero, contadores
    │
    └── img/
        ├── hero-desktop.jpg        # Hero — imagen principal (1920×1080)
        ├── maquinas.jpg            # Propuesta de valor — equipamiento clínico
        ├── atencion-personal.jpg   # Beneficios — médica con paciente
        ├── facial.jpg              # Card tratamiento — rejuvenecimiento
        ├── acido-hialuronico.jpg   # Card tratamiento — rellenos
        ├── laser.jpg               # Card tratamiento — láser
        ├── corporal.jpg            # Card tratamiento — remodelación corporal
        ├── dra-valentina-ortiz.jpg # Equipo — Directora médica
        ├── dr-sebastian-molina.jpg # Equipo — Medicina láser
        ├── dra-carolina-reyes.jpg  # Equipo — Estética corporal
        ├── sala-de-espera.jpg      # Instalaciones — sala de espera
        ├── consultorio.jpg         # Instalaciones — consultorio
        └── equipamiento.jpg        # Instalaciones — equipos tecnológicos
```

---

## 🚀 Cómo usar este proyecto

### Ver en tu computadora

**1. Clonar el repositorio:**
```bash
git clone https://github.com/leandrocarpio/lumis-clinica-estetica.git
```

**2. Abrir con Live Server:**
```
- Abrí la carpeta en Visual Studio Code
- Click derecho en index.html → "Open with Live Server"
```

> 💡 También podés abrir `index.html` directamente en el navegador, ya que este proyecto no usa módulos ES6 ni requiere servidor.

### Adaptar para un cliente real

Los datos ficticios a reemplazar están claramente comentados en el código:

```html
<!-- Teléfono WhatsApp -->
https://wa.me/5492612000000

<!-- Email corporativo -->
consultas@lumisclinica.com.ar

<!-- Dirección -->
Av. San Martín 1250, Piso 3 · Ciudad de Mendoza

<!-- Iframe Google Maps -->
Actualizar src con la dirección real del cliente
```

---

## 🎨 Decisiones de diseño

**Hero mobile-first sin zoom:**
se usó `height: 100svh` (small viewport height) que descuenta la barra del navegador en mobile, evitando el scroll inesperado que genera `100vh`. Combinado con `background-position: top center` en mobile, el sujeto principal de la imagen nunca se pierde en ningún tamaño de pantalla.

**Arquitectura CSS modular:**
cuatro archivos con responsabilidades claras permiten escalar, mantener y reutilizar componentes sin afectar el resto del proyecto.

**Conversión por WhatsApp:**
cada CTA tiene un mensaje predefinido contextual según la sección donde se origina el click, lo que mejora la tasa de respuesta y permite identificar el nivel de intención del usuario.

**Copy orientado a confianza:**
investigado en base a los principales miedos del paciente al buscar servicios estéticos: miedo al resultado artificial, desconfianza en la formación del profesional y falta de claridad sobre resultados. El copy responde cada uno de esos miedos directamente.

---

## 📬 Contacto

**Leandro Carpio**
Desarrollador Frontend · Especializado en landing pages para salud y bienestar

- 📧 **Email:** leo_gabriel_carpio@hotmail.com
- 📱 **WhatsApp:** [+54 261 612-3777](https://wa.me/5492616123777)
- 💼 **LinkedIn:** [linkedin.com/in/leandrocarpio](https://www.linkedin.com/in/leandrocarpio)
- 🌐 **Portfolio:** [leandrocarpio.github.io/web-design-lc](https://leandrocarpio.github.io/web-design-lc/)

---

### ¿Te gustó el proyecto?

Si te sirvió de inspiración, dejame una ⭐ en GitHub. ¡Gracias!

---

**Lumis Clínica Estética** es un proyecto ficticio creado con fines de portfolio.
Desarrollado por [Leandro Carpio](https://github.com/leandrocarpio) © 2025

[⬆️ Volver arriba](#-lumis-clínica-estética--landing-page-premium)
