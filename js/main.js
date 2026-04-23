// ===== MAIN.JS — CodeWithYuvraj =====

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initRevealAnimations();
  initCounters();
  initTypingEffect();
  initFilters();
  initMobileNav();
  setActiveNav();
});

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 50
      ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.15)';
    nav.style.background = window.scrollY > 50
      ? 'rgba(6,6,11,0.95)' : 'rgba(6,6,11,0.8)';
  });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileNav.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
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
        <a id="modalWhatsApp" href="#" target="_blank" class="btn-whatsapp">
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

function buyProject(name, price) {
  event.preventDefault();
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

function viewDetails(name) {
  event.preventDefault();
  const card = event.target.closest('.project-card');
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

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBuyModal();
});
