const { icon, LOGO_MARK } = require('./icons');

const NAV = ['home', 'services', 'portfolio', 'about', 'contact'];

function head(c, { title, description, schema = [] }) {
  const { t, alt, site, page } = c;
  const canonical = c.abs(page, t);
  const enUrl = c.abs(page, t.lang === 'en' ? t : alt);
  const esUrl = c.abs(page, t.lang === 'es' ? t : alt);
  const noindex = page === 'thanks';
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<script>document.documentElement.classList.add('js')</script>
<meta name="description" content="${c.esc(description)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${enUrl}">
<link rel="alternate" hreflang="es" href="${esUrl}">
<link rel="alternate" hreflang="x-default" href="${enUrl}">
<meta name="theme-color" content="#1C2326">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${c.esc(title)}">
<meta property="og:description" content="${c.esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.siteUrl}/assets/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${t.locale}">
<meta property="og:locale:alternate" content="${alt.locale}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${c.base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${c.base}assets/img/apple-touch-icon.png">
<link rel="preload" href="${c.base}assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${c.base}assets/fonts/fraunces-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${c.base}assets/css/styles.css?v=${c.v.css}">
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>`;
}

function header(c) {
  const { t, alt, site, page } = c;
  const links = NAV.map(
    (p) =>
      `<li><a href="${c.href(p)}"${p === page ? ' aria-current="page"' : ''}>${t.nav[p]}</a></li>`
  ).join('');
  const langLink = (lt) => {
    const current = lt.lang === t.lang;
    return `<a href="${c.href(page, lt)}" hreflang="${lt.lang}" lang="${lt.lang}" data-lang="${lt.lang}"${
      current ? ' aria-current="true"' : ''
    } title="${lt.langName}">${lt.lang.toUpperCase()}</a>`;
  };
  const en = t.lang === 'en' ? t : alt;
  const es = t.lang === 'es' ? t : alt;
  return `
<a class="skip-link" href="#main">${t.common.skip}</a>
<header class="site-header" data-header>
  <div class="container header-inner">
    <a class="brand" href="${c.href('home')}" aria-label="${site.name} — ${t.nav.home}">
      ${LOGO_MARK}
      <span class="brand-text"><strong>Cubela <span>Bros.</span></strong><small>${t.common.tagline}</small></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="${t.nav.home}" data-nav>
      <ul>${links}</ul>
      <div class="nav-mobile-extra">
        <a class="btn btn-primary btn-block" href="${c.href('contact')}">${t.common.estimateLong}</a>
        <a class="nav-phone" href="tel:${site.phoneHref}">${icon('phone')} ${site.phone}</a>
      </div>
    </nav>
    <div class="header-actions">
      <div class="lang-switch" role="group" aria-label="${t.common.langSwitch} / ${alt.common.langSwitch}">
        ${icon('globe', 'icon lang-icon')}${langLink(en)}${langLink(es)}
      </div>
      <a class="btn btn-primary btn-sm header-cta" href="${c.href('contact')}">${t.common.estimate}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" data-nav-toggle>
        <span class="visually-hidden" data-label-open="${t.common.menu}" data-label-close="${t.common.close}">${t.common.menu}</span>
        ${icon('menu', 'icon icon-open')}${icon('close', 'icon icon-close')}
      </button>
    </div>
  </div>
</header>`;
}

function langBanner(c) {
  // Suggests the other language once, based on the browser language (see main.js). Never auto-redirects.
  const { t, alt, page } = c;
  const b = t.common.langBanner;
  return `
<div class="lang-banner" data-lang-banner data-target="${alt.lang}" hidden>
  <div class="container lang-banner-inner" lang="${alt.lang}">
    <p>${icon('globe')} ${b.text}</p>
    <div>
      <a class="btn btn-light btn-sm" href="${c.href(page, alt)}" data-lang="${alt.lang}">${b.yes}</a>
      <button class="btn btn-ghost-light btn-sm" type="button" data-lang-dismiss>${b.no}</button>
    </div>
  </div>
</div>`;
}

function footer(c) {
  const { t, site } = c;
  const social = Object.entries({ facebook: site.social.facebook, instagram: site.social.instagram })
    .filter(([, url]) => url)
    .map(
      ([name, url]) =>
        `<a href="${url}" target="_blank" rel="noopener" aria-label="${name[0].toUpperCase() + name.slice(1)}">${icon(name)}</a>`
    )
    .join('');
  const svc = t.home.services;
  return `
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand brand-light" href="${c.href('home')}">
        ${LOGO_MARK}
        <span class="brand-text"><strong>Cubela <span>Bros.</span></strong><small>${t.common.tagline}</small></span>
      </a>
      <p>${t.footer.about}</p>
      ${social ? `<div class="social">${social}</div>` : ''}
    </div>
    <div>
      <h2 class="footer-title">${t.footer.explore}</h2>
      <ul class="footer-links">
        ${NAV.map((p) => `<li><a href="${c.href(p)}">${t.nav[p]}</a></li>`).join('')}
      </ul>
    </div>
    <div>
      <h2 class="footer-title">${t.footer.servicesTitle}</h2>
      <ul class="footer-links">
        <li><a href="${c.href('services')}#${t.services.remodel.id}">${svc.remodel.title}</a></li>
        <li><a href="${c.href('services')}#${t.services.carpentry.id}">${svc.carpentry.title}</a></li>
        <li><a href="${c.href('portfolio')}">${t.nav.portfolio}</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer-title">${t.footer.contactTitle}</h2>
      <ul class="footer-contact">
        <li>${icon('phone')}<a href="tel:${site.phoneHref}">${site.phone}</a></li>
        <li>${icon('mail')}<a href="mailto:${site.email}">${site.email}</a></li>
        <li>${icon('pin')}<span>${site.street ? site.street + ', ' : ''}${site.city}, ${site.region}</span></li>
        <li>${icon('clock')}<span>${c.hours().join('<br>')}<br>${t.common.closed}</span></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© ${c.year} ${site.name}. ${t.footer.rights}</p>
    <p>${t.footer.madeIn}</p>
  </div>
</footer>`;
}

function mobileBar(c) {
  const { t, site } = c;
  return `
<div class="mobile-bar" aria-label="${t.common.callUs}">
  <a href="tel:${site.phoneHref}">${icon('phone')}<span>${t.common.call}</span></a>
  ${site.whatsapp ? `<a href="${c.wa()}" target="_blank" rel="noopener">${icon('chat')}<span>${t.common.whatsapp}</span></a>` : ''}
  <a class="mobile-bar-cta" href="${c.href('contact')}">${icon('file')}<span>${t.common.estimate}</span></a>
</div>`;
}

function layout(c, body, opts) {
  return `${head(c, opts)}
<body class="page-${c.page}">
${langBanner(c)}
${header(c)}
<main id="main">
${body}
</main>
${footer(c)}
${mobileBar(c)}
<script src="${c.base}assets/js/main.js?v=${c.v.js}" defer></script>
</body>
</html>
`;
}

module.exports = { layout };
