// Static site generator (no dependencies). Renders every page in English and Spanish into dist/,
// copies assets and writes sitemap.xml, robots.txt and the GitHub Pages files. Run: npm run build
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const site = require('./src/content/site');
const gallery = require('./src/content/gallery');
const images = require('./src/content/images.json');
const langs = { en: require('./src/content/en'), es: require('./src/content/es') };
const pages = require('./src/templates/pages');
const { layout } = require('./src/templates/layout');
const { icon, LOGO_MARK } = require('./src/templates/icons');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const PAGES = ['home', 'services', 'portfolio', 'about', 'contact', 'thanks'];
// Path the site is served from: '/' on a custom domain, '/web_cubelabros/' on a project page.
const BASE_PATH = new URL(`${site.siteUrl}/`).pathname;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const fileHash = (p) => crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex').slice(0, 8);

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function fmtTime(hhmm, lang) {
  const [h, m] = hhmm.split(':').map(Number);
  const h12 = h % 12 || 12;
  const suffix = lang === 'es' ? (h < 12 ? 'a. m.' : 'p. m.') : h < 12 ? 'AM' : 'PM';
  return `${h12}:${String(m).padStart(2, '0')} ${suffix}`;
}

function context(t, alt, page, base) {
  const c = {
    t,
    alt,
    site,
    page,
    base,
    gallery,
    esc,
    year: new Date().getFullYear(),
    v: {
      css: fileHash(path.join(ROOT, 'src/assets/css/styles.css')),
      js: fileHash(path.join(ROOT, 'src/assets/js/main.js')),
    },
    href(p, lt = t) {
      const route = lt.routes[p];
      return base + route || './';
    },
    abs(p, lt = t) {
      return `${site.siteUrl}/${lt.routes[p]}`;
    },
    wa() {
      return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.common.whatsappMsg)}`;
    },
    hours() {
      return site.hours.map((h) => {
        const d = h.days.map((x) => t.common.days[x]);
        const days = d.length > 1 ? `${d[0]}–${d[d.length - 1]}` : d[0];
        return `${days} · ${fmtTime(h.opens, t.lang)} – ${fmtTime(h.closes, t.lang)}`;
      });
    },
    // Largest WebP, used by the lightbox.
    full(id) {
      const v = images[id].variants;
      return `${base}assets/img/${id}-${v.lg ? 'lg' : 'sm'}.webp`;
    },
    img(id, { sizes = '100vw', eager = false, alt, cls = '' } = {}) {
      const meta = images[id];
      if (!meta) throw new Error(`Unknown image: ${id}`);
      const g = gallery.find((x) => x.id === id);
      const altText = alt !== undefined ? alt : g.alt[t.lang];
      const vs = Object.entries(meta.variants);
      const src = (k, ext) => `${base}assets/img/${id}-${k}.${ext}`;
      const srcset = (ext) => vs.map(([k, d]) => `${src(k, ext)} ${d.w}w`).join(', ');
      const [largestKey, largest] = vs[vs.length - 1];
      return `<picture${cls ? ` class="${cls}"` : ''}><source type="image/webp" srcset="${srcset('webp')}" sizes="${sizes}"><img src="${src(
        largestKey,
        'jpg'
      )}" srcset="${srcset('jpg')}" sizes="${sizes}" width="${largest.w}" height="${largest.h}" alt="${esc(altText)}" ${
        eager ? 'fetchpriority="high"' : 'loading="lazy"'
      } decoding="async"></picture>`;
    },
    businessSchema() {
      const days = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' };
      return {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${site.siteUrl}/#business`,
        name: site.name,
        alternateName: site.shortName,
        description: t.meta.home.description,
        url: `${site.siteUrl}/${t.routes.home}`,
        telephone: site.phoneHref,
        email: site.email,
        image: `${site.siteUrl}/assets/img/og-image.jpg`,
        logo: `${site.siteUrl}/assets/img/icon-512.png`,
        priceRange: '$$',
        knowsLanguage: ['en', 'es'],
        address: {
          '@type': 'PostalAddress',
          ...(site.street ? { streetAddress: site.street } : {}),
          addressLocality: site.city,
          addressRegion: site.region,
          postalCode: site.postalCode,
          addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
        areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name: `${name}, FL` })),
        openingHoursSpecification: site.hours.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.days.map((d) => days[d]),
          opens: h.opens,
          closes: h.closes,
        })),
        sameAs: Object.values(site.social).filter(Boolean),
        makesOffer: [t.home.services.remodel.title, t.home.services.carpentry.title].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      };
    },
  };
  return c;
}

function write(rel, content) {
  const out = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
}

function notFoundPage() {
  // GitHub Pages serves this for a missing URL at any depth, so links use the absolute base path.
  const en = langs.en;
  const es = langs.es;
  const b = BASE_PATH;
  const c = context(en, es, 'home', b);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found · Página no encontrada | ${site.name}</title>
<meta name="robots" content="noindex">
<link rel="icon" href="${b}assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${b}assets/css/styles.css?v=${c.v.css}">
</head>
<body class="page-404">
<main class="section thanks">
  <div class="container thanks-inner">
    <a class="brand" href="${b}">${LOGO_MARK}<span class="brand-text"><strong>Cubela <span>Bros.</span></strong><small>${en.common.tagline}</small></span></a>
    <p class="eyebrow">404</p>
    <h1 class="h1">This page isn't here.</h1>
    <p class="lead" lang="es">Esta página no existe.</p>
    <div class="btn-row is-center">
      <a class="btn btn-primary btn-lg" href="${b}">${en.nav.home}</a>
      <a class="btn btn-outline btn-lg" href="${b}es/" lang="es">${es.nav.home}</a>
      <a class="btn btn-outline btn-lg" href="tel:${site.phoneHref}">${icon('phone')} ${site.phone}</a>
    </div>
  </div>
</main>
</body>
</html>
`;
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.filter((p) => p !== 'thanks').flatMap((p) =>
    Object.values(langs).map(
      (t) => `  <url>
    <loc>${site.siteUrl}/${t.routes[p]}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${site.siteUrl}/${langs.en.routes[p]}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${site.siteUrl}/${langs.es.routes[p]}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.siteUrl}/${langs.en.routes[p]}"/>
  </url>`
    )
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  let count = 0;
  for (const [code, t] of Object.entries(langs)) {
    const alt = langs[code === 'en' ? 'es' : 'en'];
    for (const page of PAGES) {
      const route = t.routes[page];
      const depth = route.split('/').filter(Boolean).length;
      const c = context(t, alt, page, '../'.repeat(depth));
      const { body, schema } = pages[page](c);
      const html = layout(c, body, { ...t.meta[page], schema });
      write(path.join(route, 'index.html'), html);
      count++;
    }
  }

  write('404.html', notFoundPage());
  write('sitemap.xml', sitemap());
  // Crawlers only read robots.txt at a domain root, so it matters once a custom domain is set.
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.siteUrl}/sitemap.xml\n`);
  write('.nojekyll', ''); // serve files as-is on GitHub Pages
  if (site.customDomain) write('CNAME', `${site.customDomain}\n`);

  copyDir(path.join(ROOT, 'src/assets'), path.join(DIST, 'assets'));

  console.log(`Built ${count} pages + 404, sitemap and assets → dist/`);
}

build();
