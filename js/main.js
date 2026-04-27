// ===== MAIN.JS — CodeWithYuvraj =====

document.addEventListener('DOMContentLoaded', () => {
  initPublicPageEnhancements();
  initThemeToggle();
  initNavbar();
  initHandbookGlobalIndex();
  initRevealAnimations();
  initCounters();
  initTypingEffect();
  initFilters();
  initMobileNav();
  initProjectActionDelegates();
  initContactForm();
  initFaqToggles();
  hardenExternalLinks();
  setActiveNav();
});

function initPublicPageEnhancements() {
  ensureSkipToContent();
  ensureMainLandmark();
  initScrollProgress();
  initBackToTop();
}

function ensureSkipToContent() {
  if (document.querySelector('.skip-link')) return;
  const skip = document.createElement('a');
  skip.className = 'skip-link';
  skip.href = '#main-content';
  skip.textContent = 'Skip to main content';
  document.body.insertAdjacentElement('afterbegin', skip);
}

function ensureMainLandmark() {
  const main = document.querySelector('main') || document.getElementById('main-content');
  if (main) return;
  const firstSection = document.querySelector('section');
  if (!firstSection) return;
  const wrapper = document.createElement('main');
  wrapper.id = 'main-content';
  firstSection.parentNode.insertBefore(wrapper, firstSection);
  while (firstSection && firstSection.tagName === 'SECTION') {
    const next = firstSection.nextElementSibling;
    wrapper.appendChild(firstSection);
    if (!next || next.tagName !== 'SECTION') break;
  }
}

function initScrollProgress() {
  if (document.querySelector('.scroll-progress')) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  const update = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function initBackToTop() {
  if (document.querySelector('.back-to-top')) return;
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);

  const toggle = () => btn.classList.toggle('show', window.scrollY > 360);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
  const saved = localStorage.getItem('cwu-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cwu-theme', next);
    });
  });
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 50
      ? 'var(--navbar-bg-scroll)' : 'var(--navbar-bg)';
  });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    toggleMobileMenu(mobileNav, hamburger, !mobileNav.classList.contains('active'));
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggleMobileMenu(mobileNav, hamburger, false);
    });
  });
}

function toggleMobileMenu(mobileNav, hamburger, shouldOpen) {
  const spans = hamburger.querySelectorAll('span');
  mobileNav.classList.toggle('active', shouldOpen);
  hamburger.classList.toggle('active', shouldOpen);
  if (shouldOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    document.body.style.overflow = 'hidden';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    document.body.style.overflow = '';
  }
}

// ===== ACTIVE NAV LINK =====
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ===== HANDBOOK GLOBAL INDEX (PART PAGES) =====
function initHandbookGlobalIndex() {
  const page = document.querySelector('.handbook-page');
  if (!page) return;

  const path = window.location.pathname.replace(/\\/g, '/');
  const partMatch = path.match(/\/content\/handbooks\/(python|html-css|c-programming|cpp-programming|java)\/part([1-8])\.html$/);
  if (!partMatch) return;

  const handbookSlug = partMatch[1];
  const activePart = Number(partMatch[2]);
  const topbar = page.querySelector('.hb-topbar');
  if (!topbar) return;

  const wrap = document.createElement('aside');
  wrap.className = 'hb-global-index';

  const title = document.createElement('div');
  title.className = 'hb-global-index-title';
  title.textContent = 'Main Handbook Index';
  wrap.appendChild(title);

  const links = document.createElement('div');
  links.className = 'hb-global-index-links';

  const partTitlesByHandbook = {
    python: {
      1: 'Python Foundations',
      2: 'Control Flow & Loops',
      3: 'Strings & Data Structures',
      4: 'Functions & Modules',
      5: 'Object-Oriented Programming',
      6: 'File Handling & Error Management',
      7: 'Advanced Python',
      8: 'Standard Library & Industry Practices'
    },
    'html-css': {
      1: 'HTML Foundations',
      2: 'Semantic HTML & Forms',
      3: 'CSS Foundations',
      4: 'CSS Layout Systems',
      5: 'Responsive Design & Modern CSS',
      6: 'Visual Effects & Animations',
      7: 'Accessibility, SEO & Performance',
      8: 'Architecture & Industry Practices'
    },
    'c-programming': {
      1: 'C Foundations',
      2: 'Operators & Control Flow',
      3: 'Functions & Modular Programming',
      4: 'Arrays, Strings & Pointers',
      5: 'Structures, Unions & Advanced Types',
      6: 'Dynamic Memory & File I/O',
      7: 'Data Structures in C',
      8: 'Systems Programming & Industry Practices'
    },
    'cpp-programming': {
      1: 'C++ Foundations & Environment Setup',
      2: 'Control Flow, Functions & References',
      3: 'OOP — Classes & Objects',
      4: 'Inheritance & Polymorphism',
      5: 'Templates & Generic Programming',
      6: 'STL — Containers, Iterators & Algorithms',
      7: 'Memory Management & Smart Pointers',
      8: 'Concurrency & Modern C++'
    },
    java: {
      1: 'Java Foundations & Setup',
      2: 'Control Flow & Arrays',
      3: 'OOP Basics',
      4: 'Inheritance & Polymorphism',
      5: 'Collections & Generics',
      6: 'Exceptions & File I/O',
      7: 'Functional Java & Streams',
      8: 'Concurrency, Testing & Industry'
    }
  };
  const partTitles = partTitlesByHandbook[handbookSlug];

  const indexLink = document.createElement('a');
  indexLink.href = 'index.html';
  indexLink.textContent = handbookSlug === 'python'
    ? 'Python Index'
    : handbookSlug === 'html-css'
      ? 'HTML/CSS Index'
      : handbookSlug === 'c-programming'
        ? 'C Programming Index'
        : handbookSlug === 'cpp-programming'
          ? 'C++ Programming Index'
          : 'Java Programming Index';
  links.appendChild(indexLink);

  for (let i = 1; i <= 8; i++) {
    const a = document.createElement('a');
    a.href = `part${i}.html`;
    a.textContent = `Part ${i}: ${partTitles[i]}`;
    if (i === activePart) a.classList.add('active');
    links.appendChild(a);
  }

  wrap.appendChild(links);
  topbar.insertAdjacentElement('afterend', wrap);

  const mainContent = document.createElement('div');
  mainContent.className = 'hb-main-content';

  Array.from(page.children).forEach((child) => {
    if (child === topbar || child === wrap) return;
    mainContent.appendChild(child);
  });

  page.appendChild(mainContent);
  page.classList.add('has-global-index');
}

// ===== SCROLL REVEAL =====
function initRevealAnimations() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
  const el = document.querySelector('.hero-typed');
  if (!el) return;
  const words = ['Web Development', 'AI & Machine Learning', 'Mobile Apps', 'Data Structures', 'Cloud & DevOps'];
  let wordIndex = 0, charIndex = 0, isDeleting = false;
  function type() {
    const current = words[wordIndex];
    el.textContent = isDeleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);
    let delay = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex > current.length) {
      delay = 2000; isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 400;
    }
    setTimeout(type, delay);
  }
  type();
}

// ===== FILTER SYSTEM =====
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.filter-bar');
      parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = btn.closest('section').querySelectorAll('[data-category]');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

// ===== SEARCH =====
function initSearch(inputSelector, cardSelector, searchKey) {
  const input = document.querySelector(inputSelector);
  if (!input) return;
  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    document.querySelectorAll(cardSelector).forEach(card => {
      const text = card.querySelector(searchKey)?.textContent.toLowerCase() || '';
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

// ===== BUY PROJECT MODAL =====
function createBuyModal() {
  if (document.querySelector('.buy-modal-overlay')) return;
  const overlay = document.createElement('div');
  overlay.className = 'buy-modal-overlay';
  overlay.innerHTML = `
    <div class="buy-modal">
      <button class="buy-modal-close" onclick="closeBuyModal()">×</button>
      <div class="buy-modal-icon">🛒</div>
      <h3>Purchase Project</h3>
      <div class="modal-project-name" id="modalProjectName"></div>
      <div class="modal-price" id="modalPrice"></div>
      <p>Get the complete source code, documentation, and setup guide. Contact us to purchase this project.</p>
      <div class="modal-actions">
        <a id="modalWhatsApp" href="#" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
        <a id="modalEmail" href="#" class="btn-email">
          <i class="fa-solid fa-envelope"></i> Email
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeBuyModal();
  });
}

function buyProject(name, price, e) {
  if (e) e.preventDefault();
  createBuyModal();
  const overlay = document.querySelector('.buy-modal-overlay');
  document.getElementById('modalProjectName').textContent = name;
  document.getElementById('modalPrice').textContent = '₹' + price.toLocaleString('en-IN');

  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in buying the "${name}" project (₹${price.toLocaleString('en-IN')}). Please share the details.`);
  document.getElementById('modalWhatsApp').href = `https://wa.me/918261074512?text=${whatsappMsg}`;

  const emailSubject = encodeURIComponent(`Purchase Inquiry: ${name}`);
  const emailBody = encodeURIComponent(`Hi Yuvraj,\n\nI'm interested in purchasing the "${name}" project (₹${price.toLocaleString('en-IN')}).\n\nPlease share the payment details and project deliverables.\n\nThank you!`);
  document.getElementById('modalEmail').href = `mailto:yuvii9552@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  requestAnimationFrame(() => overlay.classList.add('active'));
}

function closeBuyModal() {
  const overlay = document.querySelector('.buy-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
}

function viewDetails(name, e) {
  if (e) e.preventDefault();
  const trigger = e ? e.target : null;
  const card = trigger ? trigger.closest('.project-card, .resource-card, .roadmap-card') : null;
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.borderColor = 'rgba(124,58,237,0.5)';
    card.style.boxShadow = '0 0 30px rgba(124,58,237,0.2)';
    setTimeout(() => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    }, 2000);
  }
}

function initProjectActionDelegates() {
  document.querySelectorAll('[data-buy-project]').forEach(link => {
    link.addEventListener('click', (e) => {
      const price = Number(link.dataset.projectPrice || 0);
      buyProject(link.dataset.buyProject, price, e);
    });
  });

  document.querySelectorAll('[data-view-details]').forEach(link => {
    link.addEventListener('click', (e) => {
      viewDetails(link.dataset.viewDetails, e);
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const successMsg = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (successMsg) successMsg.style.display = 'block';
    form.style.display = 'none';
    form.reset();
  });
}

function initFaqToggles() {
  document.querySelectorAll('[data-faq-item]').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const toggle = item.querySelector('.faq-toggle');
      if (!answer || !toggle) return;
      const isOpen = answer.style.display === 'block';
      answer.style.display = isOpen ? 'none' : 'block';
      toggle.textContent = isOpen ? '+' : '−';
    });
  });
}

function hardenExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const relValues = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    relValues.add('noopener');
    relValues.add('noreferrer');
    link.setAttribute('rel', Array.from(relValues).join(' '));
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBuyModal();
});
