/* ═══════════════════════════════════════════════════
   UNCMN — Shared Scripts
   Loaded on every page via <script src="main.js">
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL SHRINK ─────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ── MOBILE MENU ───────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── ACTIVE NAV LINK ───────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // ── INTERSECTION OBSERVER — ANIMATE ON SCROLL ─────
  const animEls = document.querySelectorAll('.anim');
  if (animEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    animEls.forEach(el => observer.observe(el));
  }

  // ── PRODUCT CAROUSEL ──────────────────────────────
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    const cards      = productsGrid.querySelectorAll('.product-card');
    const prevBtn    = document.getElementById('carouselPrev');
    const nextBtn    = document.getElementById('carouselNext');
    const viewAllBtn = document.getElementById('viewAllBtn');
    let index    = 0;
    let showAll  = false;

    function visibleCount() {
      if (window.innerWidth <= 768)  return 1;
      if (window.innerWidth <= 1100) return 2;
      return 3;
    }

    function syncButtons() {
      prevBtn.disabled = index <= 0;
      nextBtn.disabled = index >= cards.length - visibleCount();
    }

    function move() {
      if (showAll) return;
      const w = cards[0].offsetWidth + 2;
      productsGrid.style.transform = `translateX(-${index * w}px)`;
      syncButtons();
    }

    prevBtn.addEventListener('click', () => { index = Math.max(0, index - 1); move(); });
    nextBtn.addEventListener('click', () => {
      index = Math.min(cards.length - visibleCount(), index + 1); move();
    });

    viewAllBtn.addEventListener('click', () => {
      showAll = !showAll;
      productsGrid.classList.toggle('show-all', showAll);
      if (showAll) {
        productsGrid.style.transform = 'none';
        prevBtn.style.visibility = 'hidden';
        nextBtn.style.visibility = 'hidden';
        viewAllBtn.textContent = 'View less';
      } else {
        prevBtn.style.visibility = '';
        nextBtn.style.visibility = '';
        viewAllBtn.textContent = 'View all';
        index = 0;
        move();
      }
    });

    window.addEventListener('resize', () => {
      if (!showAll) {
        index = Math.min(index, Math.max(0, cards.length - visibleCount()));
        move();
      }
    });

    syncButtons();
  }

  // ── NEWSLETTER FORM ───────────────────────────────
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const input = form.querySelector('input');
      btn.textContent = 'Thank you ✓';
      btn.style.background = '#2d6a44';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
      }, 4000);
    });
  });

});
