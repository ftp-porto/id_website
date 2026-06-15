(() => {
  'use strict';

  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const LOCALE_KEY = 'ftp-locale';
  const THEME_KEY = 'ftp-theme';
  const SUPPORTED_LOCALES = ['en', 'pt', 'es', 'fr'];
  const LANGUAGE_FLAGS = {
    en: '<svg class="language-switcher__flag" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><path d="M30,0 V30 M0,15 H60" stroke="#ffffff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>',
    pt: '<svg class="language-switcher__flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="12" height="20" fill="#006600"/><rect x="12" width="18" height="20" fill="#FF0000"/><circle cx="12" cy="10" r="4.4" fill="#FFCC00"/><circle cx="12" cy="10" r="2.9" fill="#ffffff"/><circle cx="12" cy="10" r="1.4" fill="#003399"/></svg>',
    es: '<svg class="language-switcher__flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/></svg>',
    fr: '<svg class="language-switcher__flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="10" height="20" fill="#002395"/><rect x="10" width="10" height="20" fill="#ffffff"/><rect x="20" width="10" height="20" fill="#ED2939"/></svg>',
  };

  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  function resolveLocale() {
    const translations = window.FTP_TRANSLATIONS || {};

    try {
      const stored = localStorage.getItem(LOCALE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) {}

    const htmlLang = (document.documentElement.lang || '').toLowerCase().split('-')[0];
    if (SUPPORTED_LOCALES.includes(htmlLang) && translations[htmlLang]) return htmlLang;

    const browserLang = (navigator.language || '').toLowerCase().split('-')[0];
    if (SUPPORTED_LOCALES.includes(browserLang) && translations[browserLang]) return browserLang;

    return translations.en ? 'en' : Object.keys(translations)[0];
  }

  function setupTheme(themeLabel) {
    const root = document.documentElement;
    const stored = (() => {
      try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
    })();

    if (stored === 'dark' || stored === 'light') {
      root.setAttribute('data-theme', stored);
    } else {
      root.setAttribute('data-theme', 'light');
    }

    const btn = $('[data-theme-toggle]');
    if (!btn) return;

    btn.setAttribute('aria-label', themeLabel);
    btn.setAttribute('title', themeLabel);

    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  function setupLanguageSwitcher(locale, t) {
    const switcher = $('[data-language-switcher]');
    if (!switcher) return;

    const btn = $('[data-language-select]', switcher);
    const menu = $('[data-language-menu]', switcher);
    const current = $('[data-language-current]', switcher);
    if (!btn || !menu || !current) return;

    switcher.setAttribute('aria-label', t.ui.languageLabel);
    btn.setAttribute('aria-label', t.ui.languageLabel);

    const renderFlagAndCode = (code) => {
      const flag = LANGUAGE_FLAGS[code] || '';
      const label = escapeHtml(code.toUpperCase());
      return `${flag}<span class="language-switcher__code">${label}</span>`;
    };

    current.innerHTML = renderFlagAndCode(locale);

    menu.innerHTML = SUPPORTED_LOCALES.map((code) => {
      const isActive = code === locale;
      return `<li role="option" class="language-switcher__item${isActive ? ' is-active' : ''}" data-language-option="${escapeHtml(code)}" aria-selected="${isActive}" tabindex="-1">${renderFlagAndCode(code)}</li>`;
    }).join('');

    if (switcher.dataset.bound === 'true') return;

    const closeMenu = () => {
      if (menu.hidden) return;
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
      if (!menu.hidden) return;
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    };

    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (menu.hidden) openMenu(); else closeMenu();
    });

    menu.addEventListener('click', (event) => {
      const item = event.target.closest('[data-language-option]');
      if (!item) return;
      const code = item.getAttribute('data-language-option');
      if (!code) return;
      if (code === locale) { closeMenu(); return; }
      try { localStorage.setItem(LOCALE_KEY, code); } catch (e) {}
      window.location.reload();
    });

    document.addEventListener('click', (event) => {
      if (!switcher.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) {
        closeMenu();
        btn.focus();
      }
    });

    switcher.dataset.bound = 'true';
  }

  function applyMeta(page, locale) {
    document.documentElement.lang = locale;
    if (!page || !page.meta) return;

    document.title = page.meta.title;

    const description = $('meta[name="description"]');
    if (description) description.setAttribute('content', page.meta.description);
  }

  function setupGoBackButton() {
    const btn = $('[data-go-back]');
    if (!btn) return;

    let hasLocalReferrer = false;
    try {
      hasLocalReferrer = !!document.referrer && new URL(document.referrer).origin === window.location.origin;
    } catch (e) {}

    btn.addEventListener('click', () => {
      if (hasLocalReferrer) {
        window.history.back();
        return;
      }

      window.location.href = 'index.html#solutions';
    });
  }

  function renderAppstudioMarkup(t) {
    const page = t.appstudioPage;
    const experts = t.solutions.experts;
    const appstudio = experts.appstudio;

    return [
      '<section class="service-hero">',
      '  <div class="service-hero__copy">',
      `    <a class="service-back" href="index.html#top">${escapeHtml(page.backLabel)}</a>`,
      `    <span class="chap-num chap-num--solo">${escapeHtml(appstudio.title)}</span>`,
      `    <h1 class="service-title">${escapeHtml(page.heroTitle)}</h1>`,
      `    <p class="service-lede">${escapeHtml(page.heroText)}</p>`,
      '    <div class="service-actions">',
      `      <a class="service-btn service-btn--primary" href="index.html#contact">${escapeHtml(page.ctaButton)}</a>`,
      `      <button class="service-btn service-btn--ghost" type="button" data-go-back>${escapeHtml(page.backButton)}</button>`,
      '    </div>',
      '  </div>',
      '  <aside class="service-snapshot">',
      `    <span class="service-kicker">${escapeHtml(page.snapshotTitle)}</span>`,
      appstudio.paragraphs.map((copy) => `    <p>${escapeHtml(copy)}</p>`).join(''),
      '    <ul class="service-snapshot__list">',
      appstudio.capabilities.map((cap) => `      <li>${escapeHtml(cap.title)}</li>`).join(''),
      '    </ul>',
      '  </aside>',
      '</section>',

      '<section class="service-section service-section--narrow">',
      `  <span class="service-kicker">${escapeHtml(page.overviewTitle)}</span>`,
      `  <p class="service-copy service-copy--large">${escapeHtml(page.overviewText)}</p>`,
      `  <p class="service-copy">${escapeHtml(page.overviewText2)}</p>`,
      '</section>',

      '<section class="service-section">',
      '  <div class="service-section__head">',
      `    <span class="service-kicker">${escapeHtml(page.capabilitiesTitle)}</span>`,
      '  </div>',
      '  <div class="service-cap-grid">',
      appstudio.capabilities.map((cap, index) => [
        '    <article class="service-cap">',
        `      <span class="service-cap__num">/${String(index + 1).padStart(2, '0')}</span>`,
        `      <h3>${escapeHtml(cap.title)}</h3>`,
        `      <p>${escapeHtml(cap.text)}</p>`,
        '    </article>',
      ].join('')).join(''),
      '  </div>',
      '</section>',

      '<section class="service-section service-section--highlight">',
      '  <article class="service-example">',
      `    <span class="service-kicker">${escapeHtml(page.exampleLabel)}</span>`,
      `    <h2>${escapeHtml(page.exampleTitle)}</h2>`,
      `    <p>${escapeHtml(page.exampleText)}</p>`,
      `    <p>${escapeHtml(page.exampleText2)}</p>`,
      '  </article>',
      '</section>',

      '<section class="service-section">',
      '  <div class="service-section__head">',
      `    <span class="service-kicker">${escapeHtml(experts.processTitle)}</span>`,
      '  </div>',
      '  <div class="service-step-grid">',
      experts.steps.map((step, index) => [
        '    <article class="service-step">',
        `      <span class="service-step__num">${String(index + 1).padStart(2, '0')}</span>`,
        `      <h3>${escapeHtml(step.title)}</h3>`,
        `      <p>${escapeHtml(step.text)}</p>`,
        '    </article>',
      ].join('')).join(''),
      '  </div>',
      '</section>',

      '<section class="service-section">',
      '  <div class="service-cta-card">',
      `    <h2>${escapeHtml(page.ctaTitle)}</h2>`,
      `    <p>${escapeHtml(page.ctaText)}</p>`,
      `    <a class="service-btn service-btn--primary" href="index.html#contact">${escapeHtml(page.ctaButton)}</a>`,
      '  </div>',
      '</section>',
    ].join('');
  }

  function init() {
    const translations = window.FTP_TRANSLATIONS || {};
    const locale = resolveLocale();
    const t = translations[locale] || translations.en || null;
    if (!t || !t.appstudioPage) return;

    applyMeta(t.appstudioPage, locale);
    setupTheme(t.ui.themeToggle);
    setupLanguageSwitcher(locale, t);

    const main = $('[data-appstudio-page]');
    if (main) {
      main.innerHTML = renderAppstudioMarkup(t);
      setupGoBackButton();
    }
  }

  init();
})();
