// ===== PROJECT DETAILS RENDERER — CodeWithYuvraj =====
// Reads ?id= from the URL, looks up PROJECT_DATA, and renders the detail page.

document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const root = document.getElementById('projectDetailRoot');

  if (!id || !PROJECT_DATA[id]) {
    root.innerHTML = renderNotFound();
    return;
  }

  const p = PROJECT_DATA[id];
  document.title = `${p.name} — CodeWithYuvraj`;

  // Set accent colour as CSS custom property
  document.documentElement.style.setProperty('--pd-accent', p.accentColor);
  document.documentElement.style.setProperty('--pd-gradient', p.accentGradient);

  root.innerHTML = [
    renderHero(p),
    renderOverview(p),
    renderAudience(p),
    renderFeatures(p),
    renderDesign(p),
    renderLocations(p),
    renderStats(p),
    renderDeliverables(p),
    renderStandout(p),
    renderPages(p),
    renderCTA(p)
  ].join('');

  // Re-init reveal animations for dynamically inserted elements
  initDetailReveals();
});

/* ────────────────────────────────────────────────────────────
 *  SECTION RENDERERS
 * ──────────────────────────────────────────────────────────── */

function renderHero(p) {
  return `
  <section class="pd-hero">
    <div class="pd-hero-bg"></div>
    <div class="pd-hero-orb pd-hero-orb-1"></div>
    <div class="pd-hero-orb pd-hero-orb-2"></div>
    <div class="pd-hero-orb pd-hero-orb-3"></div>
    <div class="container pd-hero-inner">
      <div class="pd-hero-content">
        <div class="pd-hero-badge">${p.heroEmoji} ${p.category === 'web' ? 'Web Application' : 'Full-Stack'}</div>
        <h1 class="pd-hero-title">${p.name}</h1>
        <p class="pd-hero-tagline">${p.tagline}</p>
        <div class="pd-hero-price-row">
          <span class="pd-price-old">₹${p.price.old.toLocaleString('en-IN')}</span>
          <span class="pd-price-current">₹${p.price.current.toLocaleString('en-IN')}</span>
          <span class="pd-price-badge">${p.price.discount}</span>
        </div>
        <div class="pd-hero-actions">
          <a href="#" class="btn-primary pd-buy-btn" data-buy-project="${p.name}" data-project-price="${p.price.current}">🛒 Buy Now — ₹${p.price.current.toLocaleString('en-IN')}</a>
          <a href="projects.html" class="btn-secondary">← All Projects</a>
        </div>
      </div>
      <div class="pd-hero-visual">
        <div class="pd-hero-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="eager">
        </div>
      </div>
    </div>
  </section>`;
}

function renderOverview(p) {
  return `
  <section class="pd-section pd-overview">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">📋</span>
        <h2>Project Overview</h2>
      </div>
      <div class="pd-overview-card card reveal">
        <p>${p.overview}</p>
      </div>
    </div>
  </section>`;
}

function renderAudience(p) {
  if (!p.audience || !p.audience.length) return '';
  return `
  <section class="pd-section pd-audience">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">🎯</span>
        <h2>Who Is This For?</h2>
      </div>
      <div class="pd-audience-grid">
        ${p.audience.map(a => `
          <div class="pd-audience-card card reveal">
            <div class="pd-audience-icon">${a.icon}</div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* ── Features: concise 2-col card grid (no bullet lists) ── */
function renderFeatures(p) {
  if (!p.features || !p.features.length) return '';
  return `
  <section class="pd-section pd-features">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">✨</span>
        <h2>Key Features</h2>
      </div>
      <div class="pd-features-grid">
        ${p.features.map(f => `
          <div class="pd-feat-card card reveal">
            <div class="pd-feat-icon-wrap"><span>${f.icon}</span></div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
            ${f.callout ? `<div class="pd-callout">${f.callout}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* ── Design: icon + text row cards ── */
function renderDesign(p) {
  if (!p.designHighlights || !p.designHighlights.length) return '';
  return `
  <section class="pd-section pd-design">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">🎨</span>
        <h2>Design & User Experience</h2>
      </div>
      <div class="pd-design-grid">
        ${p.designHighlights.map(d => `
          <div class="pd-design-item reveal">
            <span class="pd-design-emoji">${d.icon}</span>
            <span>${d.text}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderLocations(p) {
  if (!p.locations) return '';
  return `
  <section class="pd-section pd-locations">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">🌍</span>
        <h2>Supported Locations</h2>
      </div>
      <div class="pd-locations-card card reveal">
        <p>${p.locations.desc}</p>
        <div class="pd-cities-strip">${p.locations.cities}</div>
        <p class="pd-locations-note">${p.locations.note}</p>
      </div>
    </div>
  </section>`;
}

function renderStats(p) {
  if (!p.statsTable || !p.statsTable.length) return '';
  return `
  <section class="pd-section pd-stats-section">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">📊</span>
        <h2>Platform at a Glance</h2>
      </div>
      <div class="pd-stats-grid">
        ${p.statsTable.map(s => `
          <div class="pd-stat-card card reveal">
            <div class="pd-stat-value">${s.value}</div>
            <div class="pd-stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* ── Deliverables: horizontal pill strip ── */
function renderDeliverables(p) {
  if (!p.deliverables || !p.deliverables.length) return '';
  return `
  <section class="pd-section pd-deliverables">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">📦</span>
        <h2>What You Get</h2>
      </div>
      <div class="pd-del-grid">
        ${p.deliverables.map(d => `
          <div class="pd-del-card reveal">
            <span class="pd-del-check">✅</span>
            <span>${d}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* ── Standout: 4 horizontal cards ── */
function renderStandout(p) {
  if (!p.standout || !p.standout.length) return '';
  return `
  <section class="pd-section pd-standout">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">📌</span>
        <h2>What Makes This Project Stand Out</h2>
      </div>
      <div class="pd-standout-grid">
        ${p.standout.map((s, i) => `
          <div class="pd-standout-card card reveal">
            <div class="pd-standout-num">${String(i + 1).padStart(2, '0')}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

/* ── Pages: App-launcher icon grid with access legend ── */
function renderPages(p) {
  if (!p.pages || !p.pages.length) return '';

  // Colour/icon map for known access types
  const accessMeta = {
    'Public':         { label: 'Public',     color: '#22c55e', bg: 'rgba(34,197,94,0.12)'  },
    'Private':        { label: 'Private',    color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
    'Donor Only':     { label: 'Donor',      color: '#ef4444', bg: 'rgba(239,68,68,0.12)'  },
    'Requester Only': { label: 'Requester',  color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
    'Admin':          { label: 'Admin',      color: '#a855f7', bg: 'rgba(168,85,247,0.12)' }
  };
  const fallback = { label: 'Other', color: '#64748b', bg: 'rgba(100,116,139,0.12)' };

  // Build legend from unique access types
  const uniqueAccess = [];
  p.pages.forEach(pg => { if (!uniqueAccess.includes(pg.access)) uniqueAccess.push(pg.access); });

  const getMeta = key => accessMeta[key] || fallback;

  return `
  <section class="pd-section pd-pages">
    <div class="container">
      <div class="pd-section-header reveal">
        <span class="pd-section-icon">🖥️</span>
        <h2>Pages Included <span class="pd-page-count">(${p.pages.length})</span></h2>
      </div>
      <div class="pd-pg-legend reveal">
        ${uniqueAccess.map(key => {
          const m = getMeta(key);
          return `<span class="pd-pg-legend-item" style="--lg-c:${m.color};--lg-bg:${m.bg};">
            <span class="pd-pg-legend-dot"></span>${m.label}
          </span>`;
        }).join('')}
      </div>
      <div class="pd-pg-grid">
        ${p.pages.map(pg => {
          const m = getMeta(pg.access);
          return `
          <div class="pd-pg-card reveal" style="--pg-c:${m.color};--pg-bg:${m.bg};">
            <div class="pd-pg-card-icon">${pg.icon || '📄'}</div>
            <div class="pd-pg-card-name">${pg.name}</div>
            <span class="pd-pg-card-badge">${m.label}</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  </section>`;
}


function renderCTA(p) {
  return `
  <section class="pd-section pd-cta-wrap">
    <div class="container">
      <div class="pd-cta reveal">
        <div class="pd-cta-emoji">${p.heroEmoji}</div>
        <h2>Get ${p.name.split('—')[0].trim()} Today</h2>
        <p>${p.footerTagline || 'Complete source code, documentation, and deployment guide included.'}</p>
        <div class="pd-cta-price">
          <span class="pd-price-old">₹${p.price.old.toLocaleString('en-IN')}</span>
          <span class="pd-price-current">₹${p.price.current.toLocaleString('en-IN')}</span>
          <span class="pd-price-badge">${p.price.discount}</span>
        </div>
        <div class="pd-cta-actions">
          <a href="#" class="btn-primary pd-buy-btn" data-buy-project="${p.name}" data-project-price="${p.price.current}">🛒 Buy Now</a>
          <a href="contact.html" class="btn-secondary">💬 Ask Questions</a>
        </div>
      </div>
    </div>
  </section>`;
}

function renderNotFound() {
  return `
  <section class="pd-section" style="text-align:center;padding:200px 24px;">
    <h1 style="font-size:3rem;margin-bottom:16px;">😕 Project Not Found</h1>
    <p style="color:var(--tx2);margin-bottom:32px;">The project you're looking for doesn't exist or has been removed.</p>
    <a href="projects.html" class="btn-primary">← Browse All Projects</a>
  </section>`;
}

/* ────────────────────────────────────────────────────────────
 *  REVEAL ANIMATION (re-init for dynamically inserted content)
 * ──────────────────────────────────────────────────────────── */
function initDetailReveals() {
  const els = document.querySelectorAll('#projectDetailRoot .reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => observer.observe(el));

  // Wire up buy buttons
  document.querySelectorAll('.pd-buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const price = Number(btn.dataset.projectPrice || 0);
      buyProject(btn.dataset.buyProject, price, e);
    });
  });
}
