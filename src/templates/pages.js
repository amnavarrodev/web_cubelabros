const { icon, STAR } = require('./icons');

/* ───────────────────────── shared blocks ───────────────────────── */

function sectionHead({ eyebrow, title, lead, center = false, light = false, tag = 'h2' }) {
  return `<div class="section-head${center ? ' is-center' : ''}${light ? ' is-light' : ''} reveal">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <${tag} class="h2">${title}</${tag}>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </div>`;
}

function pageHero(c, hero, imgId) {
  return `
<section class="page-hero">
  <div class="page-hero-bg" aria-hidden="true">${c.img(imgId, { sizes: '100vw', eager: true, alt: '' })}</div>
  <div class="container page-hero-inner reveal">
    <p class="eyebrow">${hero.eyebrow}</p>
    <h1 class="h1">${hero.title}</h1>
    <p class="lead">${hero.lead}</p>
  </div>
</section>`;
}

function ctaBand(c, { title, text, withArea = false } = {}) {
  const { t, site } = c;
  const cta = t.home.cta;
  return `
<section class="cta-band">
  <div class="container cta-grid${withArea ? '' : ' is-single'}">
    <div class="cta-copy reveal">
      <h2 class="h2">${title || cta.title}</h2>
      <p class="lead">${text || cta.text}</p>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="${c.href('contact')}">${cta.btn} ${icon('arrow')}</a>
        <a class="btn btn-ghost-light btn-lg" href="tel:${site.phoneHref}">${icon('phone')} ${site.phone}</a>
      </div>
    </div>
    ${
      withArea
        ? `<div class="cta-area reveal">
      <h3 class="h4">${icon('pin')} ${t.home.area.title}</h3>
      <p>${t.home.area.text}</p>
      <ul class="chips">${site.serviceArea.map((city) => `<li>${city}</li>`).join('')}</ul>
    </div>`
        : ''
    }
  </div>
</section>`;
}

function checklist(items) {
  return `<ul class="checklist">${items.map((i) => `<li>${icon('check')}<span>${i}</span></li>`).join('')}</ul>`;
}

/* ───────────────────────── HOME ───────────────────────── */

function home(c) {
  const { t } = c;
  const h = t.home;
  const catLabel = (id) => t.portfolio.filters[c.gallery.find((g) => g.id === id).cat];

  const bento = [
    'shower-hex-floor-linear-drain',
    'kitchen-mosaic-backsplash',
    'shower-rain-head-niche',
    'cabinets-shaker-white',
    'shower-window-detail',
    'kitchen-countertop-detail',
  ]
    .map(
      (id, i) => `
      <a class="bento-item bento-${i + 1} reveal" href="${c.href('portfolio')}">
        ${c.img(id, { sizes: i === 0 ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 25vw, 50vw' })}
        <span class="bento-cap">${catLabel(id)}</span>
      </a>`
    )
    .join('');

  const body = `
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy reveal">
      <p class="eyebrow">${h.hero.eyebrow}</p>
      <h1 class="display">${h.hero.title}</h1>
      <p class="lead">${h.hero.lead}</p>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="${c.href('contact')}">${h.hero.cta} ${icon('arrow')}</a>
        <a class="btn btn-outline btn-lg" href="${c.href('portfolio')}">${h.hero.cta2}</a>
      </div>
      <ul class="hero-trust">${h.hero.trust.map((i) => `<li>${icon('check')}${i}</li>`).join('')}</ul>
    </div>
    <div class="hero-media">
      <figure class="hero-img hero-img-main">${c.img('shower-blue-onyx', { sizes: '(min-width: 900px) 34vw, 70vw', eager: true })}</figure>
      <figure class="hero-img hero-img-sub">${c.img('kitchen-sage-cabinets-backsplash', { sizes: '(min-width: 900px) 20vw, 40vw', eager: true })}</figure>
      <div class="hero-badge">
        <span class="hero-badge-icon">${icon('layers')}</span>
        <span><strong>${h.hero.badgeTitle}</strong><small>${h.hero.badgeText}</small></span>
      </div>
    </div>
  </div>
</section>

<section class="strip" aria-label="${h.value.eyebrow}">
  <ul class="container strip-list">
    ${h.strip.map((s) => `<li>${icon(s.icon)}<span>${s.text}</span></li>`).join('')}
  </ul>
</section>

<section class="section">
  <div class="container value-grid">
    <div class="value-intro">
      ${sectionHead(h.value)}
      <figure class="value-photo reveal">${c.img('shower-ceiling-lights', { sizes: '(min-width: 900px) 30vw, 90vw' })}</figure>
    </div>
    <div class="feature-grid">
      ${h.value.items
        .map(
          (f) => `
      <article class="feature reveal">
        <span class="feature-icon">${icon(f.icon)}</span>
        <h3 class="h4">${f.title}</h3>
        <p>${f.text}</p>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section-sand" id="services">
  <div class="container">
    ${sectionHead({ eyebrow: h.services.eyebrow, title: h.services.title, center: true })}
    <div class="service-cards">
      ${[
        ['remodel', 'shower-rain-head-wall', t.services.remodel.id, 'brick'],
        ['carpentry', 'kitchen-open-shelf-cabinet', t.services.carpentry.id, 'ruler'],
      ]
        .map(([key, imgId, anchor, ic]) => {
          const s = h.services[key];
          return `
      <article class="service-card service-card--${key} reveal">
        <div class="service-card-media">
          ${c.img(imgId, { sizes: '(min-width: 900px) 45vw, 100vw' })}
          <span class="chip chip-dark">${icon(ic)} ${s.kicker}</span>
        </div>
        <div class="service-card-body">
          <h3 class="h3">${s.title}</h3>
          <p>${s.text}</p>
          ${checklist(s.list)}
          <a class="link-arrow" href="${c.href('services')}#${anchor}">${s.link} ${icon('arrow')}</a>
        </div>
      </article>`;
        })
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split-head">
      ${sectionHead(h.work)}
      <a class="btn btn-outline reveal" href="${c.href('portfolio')}">${h.work.cta} ${icon('arrow')}</a>
    </div>
    <div class="bento">${bento}</div>
  </div>
</section>

<section class="section section-sand">
  <div class="container">
    ${sectionHead({ ...h.stages, center: true })}
    <div class="stages">
      <figure class="stage reveal">
        ${c.img('kitchen-cabinets-install', { sizes: '(min-width: 900px) 45vw, 100vw' })}
        <figcaption><span class="stage-num">1</span>${h.stages.before}</figcaption>
      </figure>
      <span class="stage-arrow" aria-hidden="true">${icon('arrow')}</span>
      <figure class="stage reveal">
        ${c.img('kitchen-sage-cabinets-backsplash', { sizes: '(min-width: 900px) 45vw, 100vw' })}
        <figcaption><span class="stage-num">${icon('check')}</span>${h.stages.after}</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: h.process.eyebrow, title: h.process.title, center: true })}
    <ol class="process">
      ${h.process.steps
        .map(
          (s, i) => `
      <li class="process-step reveal">
        <span class="process-num">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="h4">${s.title}</h3>
        <p>${s.text}</p>
      </li>`
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="section section-sand">
  <div class="container">
    ${sectionHead({ eyebrow: h.reviews.eyebrow, title: h.reviews.title, center: true })}
    <!-- Review templates: replace with real, permission-granted client reviews in src/content/*.js -->
    <div class="reviews">
      ${h.reviews.items
        .map(
          (r) => `
      <figure class="review reveal">
        <div class="stars" role="img" aria-label="5/5">${STAR.repeat(5)}</div>
        <blockquote><p>${r.quote}</p></blockquote>
        <figcaption>
          <span class="review-avatar" aria-hidden="true">${r.name.charAt(0)}</span>
          <span><strong>${r.name}</strong><small>${r.place} · ${r.project}</small></span>
        </figcaption>
      </figure>`
        )
        .join('')}
    </div>
    ${
      c.site.social.google
        ? `<p class="reviews-more reveal"><a class="link-arrow" href="${c.site.social.google}" target="_blank" rel="noopener">${h.reviews.more} ${icon('arrow')}</a></p>`
        : ''
    }
  </div>
</section>

${ctaBand(c, { withArea: true })}`;

  return { body, schema: [c.businessSchema()] };
}

/* ───────────────────────── SERVICES ───────────────────────── */

function serviceDetail(c, s, imgId, reverse) {
  return `
<section class="section${reverse ? ' section-sand' : ''}" id="${s.id}">
  <div class="container detail-grid${reverse ? ' is-reverse' : ''}">
    <div class="detail-intro">
      <div class="reveal">
        <p class="eyebrow">${s.kicker}</p>
        <h2 class="h2">${s.title}</h2>
        <p class="lead">${s.intro}</p>
      </div>
      <figure class="detail-photo reveal">${c.img(imgId, { sizes: '(min-width: 900px) 40vw, 100vw' })}</figure>
    </div>
    <div class="detail-list">
      ${s.groups
        .map(
          (g) => `
      <article class="detail-item reveal">
        <span class="feature-icon">${icon(g.icon)}</span>
        <div><h3 class="h4">${g.title}</h3><p>${g.text}</p></div>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>`;
}

function services(c) {
  const { t } = c;
  const s = t.services;
  const body = `
${pageHero(c, s.hero, 'shower-hex-floor-linear-drain')}
${serviceDetail(c, s.remodel, 'shower-blue-onyx', false)}

<section class="together">
  <div class="container together-inner reveal">
    <div>
      <h2 class="h2">${s.together.title}</h2>
      <p class="lead">${s.together.text}</p>
    </div>
    <ul class="together-points">${s.together.points.map((p) => `<li>${icon('check')}${p}</li>`).join('')}</ul>
  </div>
</section>

${serviceDetail(c, s.carpentry, 'kitchen-sage-cabinets-backsplash', true)}

<section class="section">
  <div class="container faq-grid">
    ${sectionHead({ eyebrow: s.faq.eyebrow, title: s.faq.title })}
    <div class="faq">
      ${s.faq.items
        .map(
          (f, i) => `
      <details class="faq-item reveal"${i === 0 ? ' open' : ''}>
        <summary><span>${f.q}</span>${icon('plus')}</summary>
        <div class="faq-answer"><p>${f.a}</p></div>
      </details>`
        )
        .join('')}
    </div>
  </div>
</section>

${ctaBand(c)}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return { body, schema: [faqSchema] };
}

/* ───────────────────────── PORTFOLIO ───────────────────────── */

function portfolio(c) {
  const { t } = c;
  const p = t.portfolio;
  const cats = ['all', 'bath', 'kitchen', 'carpentry', 'tile', 'progress'];
  const items = c.gallery
    .map(
      (g, i) => `
    <figure class="pf-item" data-cat="${g.cat}">
      <button class="pf-open" type="button" data-index="${i}" data-full="${c.full(g.id)}" data-caption="${c.esc(g.alt[t.lang])}" aria-label="${p.open}: ${c.esc(g.alt[t.lang])}">
        ${c.img(g.id, { sizes: '(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw' })}
        <span class="pf-tag">${p.filters[g.cat]}</span>
      </button>
    </figure>`
    )
    .join('');

  const body = `
${pageHero(c, p.hero, 'shower-rain-head-niche')}
<section class="section">
  <div class="container">
    <div class="filters reveal" role="group" aria-label="${p.filterLabel}" data-filters>
      ${cats
        .map(
          (cat) =>
            `<button type="button" class="filter-btn" data-filter="${cat}" aria-pressed="${cat === 'all'}">${p.filters[cat]}</button>`
        )
        .join('')}
    </div>
    <div class="pf-grid" data-portfolio>${items}</div>
  </div>
</section>

<dialog class="lightbox" data-lightbox aria-label="${t.nav.portfolio}">
  <button class="lb-btn lb-close" type="button" data-lb-close aria-label="${t.common.close}">${icon('close')}</button>
  <button class="lb-btn lb-prev" type="button" data-lb-prev aria-label="${p.prev}">${icon('left')}</button>
  <figure class="lb-figure">
    <img src="" alt="" data-lb-img>
    <figcaption><span data-lb-caption></span><span class="lb-count" data-lb-count data-of="${p.of}"></span></figcaption>
  </figure>
  <button class="lb-btn lb-next" type="button" data-lb-next aria-label="${p.next}">${icon('right')}</button>
</dialog>

${ctaBand(c, { title: p.ctaTitle, text: p.ctaText })}`;
  return { body };
}

/* ───────────────────────── ABOUT ───────────────────────── */

function about(c) {
  const { t } = c;
  const a = t.about;
  const body = `
${pageHero(c, a.hero, 'kitchen-mosaic-backsplash')}
<section class="section">
  <div class="container story-grid">
    <div class="story-media reveal">
      <figure class="story-img story-img-main">${c.img('cabinets-shaker-white', { sizes: '(min-width: 900px) 40vw, 90vw' })}</figure>
      <figure class="story-img story-img-sub">${c.img('shower-tile-in-progress', { sizes: '(min-width: 900px) 22vw, 50vw' })}</figure>
    </div>
    <div class="story-copy">
      ${sectionHead({ eyebrow: a.story.eyebrow, title: a.story.title })}
      ${a.story.paras.map((p) => `<p class="reveal">${p}</p>`).join('')}
    </div>
  </div>
</section>

<section class="section section-sand">
  <div class="container">
    ${sectionHead({ eyebrow: a.values.eyebrow, title: a.values.title, center: true })}
    <div class="values">
      ${a.values.items
        .map(
          (v) => `
      <article class="feature feature-card reveal">
        <span class="feature-icon">${icon(v.icon)}</span>
        <h3 class="h4">${v.title}</h3>
        <p>${v.text}</p>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="quote-band">
  <div class="container reveal">
    <blockquote>
      <p>${a.quote.text}</p>
      <footer>${a.quote.by}</footer>
    </blockquote>
  </div>
</section>

${ctaBand(c)}`;
  return { body };
}

/* ───────────────────────── CONTACT ───────────────────────── */

function contact(c) {
  const { t, site } = c;
  const f = t.contact.form;
  const info = t.contact.info;
  const req = `<span class="req" aria-hidden="true">*</span>`;
  const body = `
${pageHero(c, t.contact.hero, 'kitchen-countertop-detail')}
<section class="section">
  <div class="container contact-grid">
    <div class="form-card reveal">
      <h2 class="h3">${f.title}</h2>
      <form class="estimate-form" action="${site.formAction}" method="post" novalidate data-contact-form
        data-msg-sending="${c.esc(f.sending)}" data-msg-success="${c.esc(f.success)}"
        data-msg-error="${c.esc(f.error)}" data-msg-invalid="${c.esc(f.invalid)}">
        <input type="hidden" name="_subject" value="${c.esc(f.subject)}">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="${c.abs('thanks')}">
        <input type="hidden" name="site_language" value="${t.langName}">
        <div class="hp" aria-hidden="true">
          <label>Leave empty <input type="text" name="_honey" tabindex="-1" autocomplete="off"></label>
        </div>
        <div class="form-grid">
          <div class="field">
            <label for="f-name">${f.name} ${req}</label>
            <input id="f-name" name="name" type="text" autocomplete="name" required maxlength="100">
          </div>
          <div class="field">
            <label for="f-phone">${f.phone} ${req}</label>
            <input id="f-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required maxlength="30">
          </div>
          <div class="field">
            <label for="f-email">${f.email}</label>
            <input id="f-email" name="email" type="email" autocomplete="email" maxlength="120">
          </div>
          <div class="field">
            <label for="f-city">${f.city}</label>
            <input id="f-city" name="city" type="text" autocomplete="address-level2" placeholder="${f.cityPlaceholder}" maxlength="60">
          </div>
          <div class="field field-full">
            <label for="f-service">${f.service} ${req}</label>
            <select id="f-service" name="service" required>
              <option value="">${f.servicePlaceholder}</option>
              ${f.services.map((s) => `<option>${s}</option>`).join('')}
            </select>
          </div>
          <div class="field field-full">
            <label for="f-message">${f.message}</label>
            <textarea id="f-message" name="message" rows="5" maxlength="3000" placeholder="${c.esc(f.messagePlaceholder)}"></textarea>
          </div>
          <fieldset class="field field-full radio-group">
            <legend>${f.langPref}</legend>
            <label><input type="radio" name="preferred_language" value="English"${t.lang === 'en' ? ' checked' : ''}> English</label>
            <label><input type="radio" name="preferred_language" value="Español"${t.lang === 'es' ? ' checked' : ''}> Español</label>
          </fieldset>
        </div>
        <div class="form-footer">
          <p class="form-note">${req} ${f.required} · ${f.privacy}</p>
          <button class="btn btn-primary btn-lg" type="submit">${f.submit} ${icon('arrow')}</button>
        </div>
        <div class="form-status" role="status" aria-live="polite" data-form-status></div>
      </form>
    </div>

    <aside class="contact-aside">
      <div class="info-card reveal">
        <h2 class="h3">${info.title}</h2>
        <p>${info.text}</p>
        <ul class="info-list">
          <li><span class="info-icon">${icon('phone')}</span><span><small>${t.common.call}</small><a href="tel:${site.phoneHref}">${site.phone}</a></span></li>
          ${
            site.whatsapp
              ? `<li><span class="info-icon">${icon('chat')}</span><span><small>${t.common.whatsapp}</small><a href="${c.wa()}" target="_blank" rel="noopener">${site.phone}</a></span></li>`
              : ''
          }
          <li><span class="info-icon">${icon('mail')}</span><span><small>${t.common.email}</small><a href="mailto:${site.email}">${site.email}</a></span></li>
          <li><span class="info-icon">${icon('clock')}</span><span><small>${t.common.hours}</small>${c.hours().join('<br>')}<br>${t.common.closed}</span></li>
          <li><span class="info-icon">${icon('pin')}</span><span><small>${t.common.serviceArea}</small>${site.serviceArea.slice(0, 6).join(' · ')}…</span></li>
        </ul>
      </div>
      <div class="map-card reveal">
        <iframe title="${info.mapTitle}" src="https://maps.google.com/maps?q=${encodeURIComponent(
          `${site.city}, ${site.region}`
        )}&amp;z=11&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </aside>
  </div>
</section>`;
  return { body, schema: [c.businessSchema()] };
}

/* ───────────────────────── THANK YOU ───────────────────────── */

function thanks(c) {
  const { t, site } = c;
  const body = `
<section class="section thanks">
  <div class="container thanks-inner reveal">
    <span class="thanks-icon">${icon('check')}</span>
    <h1 class="h1">${t.thanks.title}</h1>
    <p class="lead">${t.thanks.text}</p>
    <div class="btn-row is-center">
      <a class="btn btn-primary btn-lg" href="${c.href('home')}">${t.thanks.back}</a>
      <a class="btn btn-outline btn-lg" href="tel:${site.phoneHref}">${icon('phone')} ${site.phone}</a>
    </div>
  </div>
</section>`;
  return { body };
}

module.exports = { home, services, portfolio, about, contact, thanks };
