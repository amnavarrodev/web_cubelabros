# Cubela Brothers — sitio web

Sitio estático bilingüe (inglés / español) para **Cubela Brothers**, remodelación y carpintería a medida en Lakeland, FL. Se publica gratis en **GitHub Pages**.

- 6 páginas × 2 idiomas: Home, Servicios, Portafolio, Nosotros, Contacto, Gracias (+ 404)
- HTML/CSS/JS puros, sin frameworks; imágenes WebP optimizadas; fuentes alojadas en el sitio
- SEO local: `hreflang`, datos estructurados `HomeAndConstructionBusiness` y `FAQPage`, sitemap
- Estrategia, paleta, copy y guía UX/UI: [docs/estrategia-y-copy.md](docs/estrategia-y-copy.md)

## Estructura

```
src/content/site.js      ← datos del negocio (teléfono, correo, horario, redes, URL)
src/content/en.js|es.js  ← todos los textos, en espejo
src/content/gallery.js   ← fotos del portafolio (categoría y texto alternativo EN/ES)
src/templates/           ← plantillas HTML
src/assets/              ← CSS, JS, fuentes e imágenes optimizadas
build.js                 ← genera dist/ (lo que se publica)
.github/workflows/       ← publica automáticamente en GitHub Pages
```

## Antes de publicar

1. Edita **`src/content/site.js`** y reemplaza todo lo marcado `TODO`: teléfono, WhatsApp, correo, `formAction`, Facebook/Instagram, enlace de reseñas de Google.
2. Reemplaza las **reseñas de ejemplo** en `en.js` / `es.js` (`home.reviews.items`) por reseñas reales.
3. Revisa la historia en `about.story` y ajústala a la de la familia.

## Probar en local

Requiere Node.js 18+.

```bash
npm run serve
```

Abre http://localhost:8080/web_cubelabros/

## Publicar en GitHub Pages

1. Sube el proyecto a `main` en GitHub (repositorio público).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `git push` a `main` construye y publica el sitio solo. Queda en
   `https://amnavarrodev.github.io/web_cubelabros/`

### Dominio propio (opcional)

1. En `site.js`: `siteUrl: 'https://cubelabros.com'` y `customDomain: 'cubelabros.com'`.
2. En el proveedor del dominio, crea registros `A` hacia `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` y un `CNAME` de `www` hacia `amnavarrodev.github.io`.
3. En **Settings → Pages** escribe el dominio y activa **Enforce HTTPS**.

## Formulario de contacto

GitHub Pages no ejecuta PHP, así que el formulario envía a **FormSubmit** (gratis, sin cuenta):

1. Pon el correo que recibirá las solicitudes en `formAction` (`https://formsubmit.co/tu@correo.com`).
2. Publica y envía **una solicitud de prueba** desde el sitio. FormSubmit manda un correo de activación: confírmalo.
3. FormSubmit te dará un alias aleatorio (`https://formsubmit.co/abc123…`); úsalo en `formAction` para no exponer el correo en el HTML.

Alternativa: **Formspree** — crea un formulario y usa `https://formspree.io/f/XXXXXXX` como `formAction`.

## Agregar fotos nuevas

1. Copia las fotos originales a `tmp/img/`.
2. Agrégalas en `src/content/gallery.js` (id, archivo, categoría, texto alternativo EN/ES).
3. `npm install` (una sola vez) y `npm run images` → genera las versiones WebP/JPEG.
4. Haz commit de `src/assets/img/` y `src/content/images.json`, y push.
