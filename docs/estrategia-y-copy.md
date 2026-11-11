# Cubela Brothers — Estrategia, copy y directrices UX/UI

> El copy definitivo de cada página está en `src/content/en.js` y `src/content/es.js` (misma estructura, en espejo). Este documento resume las decisiones y los textos clave.

---

## 1. Arquitectura de la información y navegación

| Página | EN (URL) | ES (URL) | Objetivo |
|---|---|---|---|
| Home | `/` | `/es/` | Generar confianza en 10 segundos y llevar al presupuesto |
| Servicios | `/services/` | `/es/servicios/` | Detallar los dos oficios + FAQ (SEO local) |
| Portafolio | `/portfolio/` | `/es/portafolio/` | Prueba visual: galería filtrable con lightbox |
| Nosotros | `/about/` | `/es/nosotros/` | Herencia familiar, valores, "los dueños en la obra" |
| Contacto | `/contact/` | `/es/contacto/` | Formulario de presupuesto, teléfono, WhatsApp, mapa |
| Gracias | `/thank-you/` | `/es/gracias/` | Confirmación (noindex) |

**Navegación:** header fijo con logo · 5 enlaces · selector `EN | ES` · botón "Free Estimate". En móvil: menú a pantalla completa + **barra inferior fija** (Llamar · WhatsApp · Presupuesto), porque la mayoría de las visitas de servicios locales llegan desde el teléfono.

**Bilingüe:** cada idioma tiene URLs propias (no un simple "toggle" por JavaScript), con `hreflang`, `canonical` y sitemap con alternates. Así Google indexa la versión en español y la muestra a quien busca en español en Lakeland.

### Paleta de colores

Tomada de las propias fotos de los proyectos (ónix azul, grifería dorada, gabinetes salvia):

| Token | HEX | Uso |
|---|---|---|
| Slate Ink | `#1C2326` | Texto de titulares, bandas oscuras, footer |
| Brass | `#C9974A` | CTAs, acentos (evoca la grifería dorada) |
| Brass Dark | `#8A6224` | Texto de acento sobre fondo claro (contraste AA) |
| Brass Soft | `#F3E8D6` | Fondos de íconos, banda "Mejor juntos" |
| Limestone | `#FAF8F4` | Fondo general |
| Sand | `#F1ECE3` | Secciones alternas |
| Onyx Slate | `#5E7C8A` | Acento secundario (remodelación) |
| Text / Muted | `#2A2F33` / `#5B6368` | Cuerpo de texto |

Todos los pares texto/fondo cumplen WCAG AA (botón ink sobre brass ≈ 6:1).

### Tipografías

- **Fraunces** (serif, titulares): transmite oficio y tradición, sin perder modernidad.
- **Inter** (sans, cuerpo/UI): máxima legibilidad en móvil.
- Ambas **alojadas en el propio sitio** (licencia OFL); no dependen de Google Fonts.

---

## 2. Copy página por página (espejo EN / ES)

### Home — Hero

| | English | Español |
|---|---|---|
| Eyebrow | Family-owned · Lakeland, Florida | Negocio familiar · Lakeland, Florida |
| H1 | Built by brothers. **Crafted to last.** | Hecho por hermanos. **Construido para durar.** |
| Subtítulo | From tiled walk-in showers to custom kitchen cabinets, we remodel Lakeland homes with the care of a family business — one team for the masonry and the fine woodwork, start to finish. | Desde duchas de obra revestidas hasta gabinetes de cocina a medida, remodelamos hogares en Lakeland con el cuidado de un negocio familiar: un solo equipo para la albañilería y la carpintería fina, de principio a fin. |
| CTA principal | Get a Free Estimate | Pida su presupuesto gratis |
| CTA secundario | See Our Work | Vea nuestros trabajos |
| Microconfianza | Free in-home estimates · Se habla español · Clean, respectful job sites | Presupuestos gratis a domicilio · We speak English · Obras limpias y respetuosas |

### Home — Propuesta de valor

| English | Español |
|---|---|
| **Two trades. One family. No runaround.** | **Dos oficios. Una familia. Cero complicaciones.** |
| Most remodels stall in the gap between the tile guy and the cabinet guy. We close that gap… | La mayoría de las remodelaciones se atrasan entre el que pone la losa y el que hace los gabinetes. Nosotros eliminamos ese problema… |
| Masonry + carpentry under one roof | Albañilería y carpintería en un solo lugar |
| The owners are on your job | Los dueños están en su obra |
| Built for Florida homes | Pensado para casas en Florida |
| Straight answers, in writing | Respuestas claras, por escrito |

### Home — Servicios

| | English | Español |
|---|---|---|
| Título | Two crafts. One standard of quality. | Dos oficios. Un mismo estándar de calidad. |
| Oficio 1 | **Remodeling & Masonry** — bathrooms & showers, tile & large-format porcelain, kitchens, flooring, drywall/stucco/block, niches & benches | **Remodelación y Albañilería** — baños y duchas, losas y porcelanato, cocinas, pisos, drywall/stucco/bloque, nichos y bancos |
| Oficio 2 | **Custom Furniture & Carpentry** — kitchen cabinets, vanities, built-ins, closets & pantries, trim & millwork, custom furniture | **Muebles a Medida y Carpintería** — gabinetes de cocina, tocadores, empotrados, clósets y despensas, molduras, muebles a medida |

### Home — Reseñas (plantillas)

| English | Español |
|---|---|
| "They turned our outdated hall bath into something that feels like a spa…" — Maria G., South Lakeland | "Convirtieron nuestro baño anticuado en algo que parece un spa…" — Maria G., South Lakeland |
| "Having one team do the tile and build the vanity made everything easier…" — Jason & Erin T., Winter Haven | "Tener un solo equipo para la losa y el tocador lo hizo todo más fácil…" — Jason & Erin T., Winter Haven |
| "Muy profesionales y honestos. Nos explicaron todo en español…" — Rosa M., Lakeland | (igual) |

> ⚠️ **Son plantillas.** Reemplázalas por reseñas reales de clientes (con su permiso) antes de difundir el sitio. La FTC prohíbe publicar testimonios inventados. Lo ideal: copiar reseñas de Google Business Profile y enlazar a él (`social.google` en `site.js`).

### Resto de la Home
- **Recent projects / Proyectos recientes** — galería tipo bento con 6 fotos → portafolio.
- **From install day to finished kitchen / De la instalación a la cocina terminada** — la misma cocina en 2 etapas (fotos reales del proyecto).
- **A simple, honest process / Un proceso simple y honesto** — 4 pasos: contacto → presupuesto gratis → construcción → revisión final.
- **Ready to start your project? / ¿Listo para empezar su proyecto?** — CTA final + chips de ciudades atendidas (Polk County).

Servicios, Portafolio, Nosotros y Contacto siguen el mismo patrón; ver `en.js` / `es.js`.

---

## 3. Directrices de diseño UX/UI

**Jerarquía y espacio**
- Secciones con 64–112 px de padding vertical; ancho máximo 1200 px; nunca más de ~70 caracteres por línea en párrafos.
- Alternar fondo Limestone / Sand / Ink para marcar el ritmo sin líneas divisorias.
- Un solo CTA dominante (brass) por pantalla; los secundarios van con borde.

**Imágenes**
- Las fotos son la prueba de calidad: bordes redondeados (14–22 px), sombras suaves y recortes `object-fit: cover` con relaciones fijas (4:5, 16:10) para que la grilla sea uniforme.
- Todas se sirven en **WebP + JPEG de respaldo**, con `srcset`, `width/height` (sin saltos de layout) y `loading="lazy"` excepto el hero.
- Para fotos nuevas: luz natural, cámara a la altura del pecho, encuadre recto. Ejecutar `npm run images` para optimizarlas.

**Antes / después y video**
- Hoy se usa una comparación honesta "Etapa 1 → Terminado" con fotos del mismo proyecto.
- Para un **slider antes/después** de verdad hacen falta dos fotos **desde el mismo punto y ángulo** (marcar la posición del trípode con cinta en el piso). Con ese par, un slider con `<input type="range">` y `clip-path` es la mejor opción.
- **Video:** clips verticales cortos (10–20 s) en MP4 H.264 ≤ 4 MB, `muted autoplay loop playsinline` y póster JPG. Sin sonido ni autoplay con audio. Para videos largos, subirlos a YouTube y embeberlos con carga diferida (GitHub Pages limita el tamaño del repositorio).

**Transiciones**
- Aparición suave al hacer scroll (fade + 20 px, 0.7 s, escalonado 80 ms), zoom leve (1.04) en imágenes al pasar el mouse.
- Todo se desactiva con `prefers-reduced-motion`.

**Selector de idioma**
- Control segmentado `EN | ES` siempre visible en el header (también en móvil), con el idioma actual resaltado.
- Lleva a la **página equivalente** en el otro idioma (no a la Home).
- Nunca redirige automáticamente: si el navegador está en español y el visitante está en inglés, aparece una barra discreta "¿Prefiere ver este sitio en español?" que se puede descartar. La preferencia se recuerda.

**Conversión móvil**
- Barra inferior fija: Llamar · WhatsApp · Presupuesto Gratis.
- Formulario corto (3 campos obligatorios), teclado numérico en teléfono, mensajes de error claros y confirmación sin recargar la página.

**Accesibilidad**
- Contraste AA, foco visible, "Saltar al contenido", textos alternativos bilingües en todas las fotos, lightbox navegable con teclado (← → Esc) y gestos de swipe.
