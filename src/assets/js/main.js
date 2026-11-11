/* Cubela Brothers — site interactions (no dependencies) */
(function () {
  'use strict';

  var root = document.documentElement;
  var LANG_KEY = 'cb-lang';

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    var label = toggle.querySelector('[data-label-open]');
    var setNav = function (open) {
      root.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = open ? label.dataset.labelClose : label.dataset.labelOpen;
    };
    toggle.addEventListener('click', function () {
      setNav(!root.classList.contains('nav-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('nav-open')) {
        setNav(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 1021px)').addEventListener('change', function (mq) {
      if (mq.matches) setNav(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(
      function (entries) {
        var batch = entries.filter(function (en) {
          return en.isIntersecting;
        });
        batch.forEach(function (en, i) {
          en.target.style.setProperty('--d', Math.min(i, 5) * 80 + 'ms');
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Language preference + suggestion banner ---------- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-lang]');
    if (link) store(LANG_KEY, link.dataset.lang);
  });
  var banner = document.querySelector('[data-lang-banner]');
  if (banner && !store(LANG_KEY)) {
    var browserLang = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
    if (browserLang.indexOf(banner.dataset.target) === 0) banner.hidden = false;
    banner.querySelector('[data-lang-dismiss]').addEventListener('click', function () {
      store(LANG_KEY, root.lang);
      banner.hidden = true;
    });
  }

  /* ---------- Portfolio filter ---------- */
  var grid = document.querySelector('[data-portfolio]');
  var items = grid ? Array.prototype.slice.call(grid.querySelectorAll('.pf-item')) : [];
  var filters = document.querySelector('[data-filters]');
  if (filters && grid) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var cat = btn.dataset.filter;
      filters.querySelectorAll('[data-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      items.forEach(function (item) {
        item.classList.toggle('is-hidden', cat !== 'all' && item.dataset.cat !== cat);
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var lb = document.querySelector('[data-lightbox]');
  if (lb && grid && typeof lb.showModal === 'function') {
    var lbImg = lb.querySelector('[data-lb-img]');
    var lbCap = lb.querySelector('[data-lb-caption]');
    var lbCount = lb.querySelector('[data-lb-count]');
    var visible = [];
    var index = 0;
    var lastFocus = null;

    var show = function (i) {
      index = (i + visible.length) % visible.length;
      var btn = visible[index];
      lbImg.src = btn.dataset.full;
      lbImg.alt = btn.dataset.caption;
      lbCap.textContent = btn.dataset.caption;
      lbCount.textContent = index + 1 + ' ' + lbCount.dataset.of + ' ' + visible.length;
    };

    grid.addEventListener('click', function (e) {
      var btn = e.target.closest('.pf-open');
      if (!btn) return;
      visible = items
        .filter(function (it) {
          return !it.classList.contains('is-hidden');
        })
        .map(function (it) {
          return it.querySelector('.pf-open');
        });
      lastFocus = btn;
      show(visible.indexOf(btn));
      lb.showModal();
      root.style.overflow = 'hidden';
    });

    lb.querySelector('[data-lb-prev]').addEventListener('click', function () {
      show(index - 1);
    });
    lb.querySelector('[data-lb-next]').addEventListener('click', function () {
      show(index + 1);
    });
    lb.querySelector('[data-lb-close]').addEventListener('click', function () {
      lb.close();
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lb-figure')) lb.close();
    });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
    lb.addEventListener('close', function () {
      root.style.overflow = '';
      lbImg.removeAttribute('src');
      if (lastFocus) lastFocus.focus();
    });

    var touchX = null;
    lb.addEventListener('touchstart', function (e) {
      touchX = e.touches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      touchX = null;
    });
  }

  /* ---------- Contact form (AJAX to FormSubmit / Formspree, falls back to normal POST) ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (form && window.fetch) {
    var status = form.querySelector('[data-form-status]');
    var submit = form.querySelector('[type="submit"]');
    var setStatus = function (type, msg) {
      status.className = 'form-status' + (type ? ' is-' + type : '');
      status.textContent = msg || '';
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var invalid = [];
      form.querySelectorAll('[required]').forEach(function (field) {
        var bad = !field.value.trim() || (field.type === 'email' && field.value && !field.checkValidity());
        field.classList.toggle('is-invalid', bad);
        field.setAttribute('aria-invalid', String(bad));
        if (bad) invalid.push(field);
      });
      var email = form.querySelector('[type="email"]');
      if (email && email.value && !email.checkValidity()) {
        email.classList.add('is-invalid');
        invalid.push(email);
      }
      if (invalid.length) {
        setStatus('error', form.dataset.msgInvalid);
        invalid[0].focus();
        return;
      }

      var data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = value;
      });
      // Bots fill the hidden field; pretend success and drop it.
      if (data._honey) {
        setStatus('success', form.dataset.msgSuccess);
        form.reset();
        return;
      }

      var url = form.action.replace('://formsubmit.co/', '://formsubmit.co/ajax/');
      submit.disabled = true;
      setStatus('pending', form.dataset.msgSending);

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          return res.json().catch(function () {
            return {};
          }).then(function (body) {
            var ok = res.ok && (body.success === undefined || String(body.success) === 'true');
            if (!ok) throw new Error(body.message || res.status);
          });
        })
        .then(function () {
          setStatus('success', form.dataset.msgSuccess);
          form.reset();
        })
        .catch(function () {
          setStatus('error', form.dataset.msgError);
        })
        .then(function () {
          submit.disabled = false;
        });
    });

    form.addEventListener('input', function (e) {
      if (e.target.classList.contains('is-invalid') && e.target.value.trim()) {
        e.target.classList.remove('is-invalid');
        e.target.removeAttribute('aria-invalid');
      }
    });
  }
})();
