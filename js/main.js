/* =====================================================
   GRACE™ Furniture — Main JavaScript
   GSAP + ScrollTrigger powered interactions
   ===================================================== */

/* ── GSAP Plugin Registration ── */
gsap.registerPlugin(ScrollTrigger);

/* ── Page Loader ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.page-loader');
    if (loader) loader.classList.add('hidden');
    initAnimations();
  }, 1400);
});

/* ── Navbar Scroll Behavior ── */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = scroll;

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    if (scroll >= top && scroll < bottom) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { passive: true });

/* ── Mobile Menu / Hamburger ── */
const hamburger = document.querySelector('.hamburger');
const mobileDrawer = document.querySelector('.mobile-drawer');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawerLinks = document.querySelectorAll('.drawer-links a');

function openDrawer() {
  hamburger.classList.add('open');
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Staggered link animation
  gsap.fromTo(drawerLinks,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, stagger: 0.07, duration: 0.35, ease: 'power2.out', delay: 0.1 }
  );
}

function closeDrawer() {
  hamburger.classList.remove('open');
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
drawerOverlay?.addEventListener('click', closeDrawer);
drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

/* ── Smooth Scroll for Nav Links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* =====================================================
   GSAP ANIMATIONS (init after loader)
   ===================================================== */
function initAnimations() {
  lucide.createIcons();

  /* ── Hero Headline Word Reveal ── */
  const heroWords = document.querySelectorAll('.hero-headline .word');
  if (heroWords.length) {
    gsap.fromTo(heroWords,
      { opacity: 0, y: 60, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );
  }

  /* ── Hero Sub + Qualities ── */
  gsap.fromTo('.hero-sub, .hero-qualities', { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out', delay: 0.85 });

  /* ── Hero CTAs ── */
  gsap.fromTo('.hero-ctas .btn', { opacity: 0, y: 20, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.6, ease: 'back.out(1.5)', delay: 1.1 });

  /* ── Hero Trust Badges ── */
  gsap.fromTo('.trust-badge', { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, stagger: 0.12, duration: 0.5, ease: 'back.out(2)', delay: 1.4 });

  /* ── Eyebrow + scroll line ── */
  gsap.fromTo('.hero-eyebrow', { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.15 });

  /* ── Section Labels (all) ── */
  gsap.utils.toArray('.section-label').forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  /* ── Category Cards — fade-up stagger ── */
  gsap.fromTo('.cat-card',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '#categories', start: 'top 75%' } });

  /* ── Business Section ── */
  gsap.fromTo('.business-img-wrap',
    { opacity: 0, x: -60 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '#business', start: 'top 75%' } });

  gsap.fromTo('.business-content > *',
    { opacity: 0, x: 60 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '#business', start: 'top 70%' } });

  gsap.fromTo('.biz-icon-item',
    { opacity: 0, scale: 0.85, y: 20 },
    { opacity: 1, scale: 1, y: 0, stagger: 0.07, duration: 0.55, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.business-icon-grid', start: 'top 80%' } });

  /* ── USP Items ── */
  gsap.fromTo('.usp-item',
    { opacity: 0, y: 50, scale: 0.92 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.65, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: '#usp', start: 'top 75%' } });

  /* ── Stats Counter ── */
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  statNums.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(obj.val).toLocaleString(); }
        });
      }
    });
  });

  gsap.fromTo('.stat-item',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '#stats', start: 'top 80%' } });

  /* ── Spotlight Section ── */
  gsap.fromTo('.spotlight-hero',
    { opacity: 0, y: 50, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '#spotlight', start: 'top 75%' } });

  gsap.fromTo('.spot-card',
    { opacity: 0, x: 60 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: '.spotlight-grid', start: 'top 82%' } });

  /* ── Testimonials header ── */
  gsap.fromTo('.testimonials-header > *',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '#testimonials', start: 'top 80%' } });

  /* ── CTA Banner ── */
  gsap.fromTo('.cta-banner-inner > *',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#cta-banner', start: 'top 78%' } });

  /* ── Contact Section ── */
  gsap.fromTo('.contact-form-wrap',
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 78%' } });

  gsap.fromTo('.contact-info > *',
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 75%' } });

  /* ── Footer ── */
  gsap.fromTo('.footer-grid > *',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '#footer', start: 'top 88%' } });

  /* ── Parallax: Hero BG ── */
  gsap.to('.hero-bg', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* ── Parallax: CTA Banner background ── */
  gsap.to('#cta-banner', {
    backgroundPositionY: '30%',
    ease: 'none',
    scrollTrigger: { trigger: '#cta-banner', start: 'top bottom', end: 'bottom top', scrub: true }
  });

  /* ── Gold line draws ── */
  gsap.utils.toArray('.gold-line').forEach(el => {
    gsap.fromTo(el, { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  /* ── Section titles ── */
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  gsap.utils.toArray('.section-sub').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

}

/* ── Form Submission (Mock) ── */
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  const success = document.querySelector('.form-success');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    btn.textContent = 'Send Enquiry';
    btn.disabled = false;
    success.classList.add('show');

    gsap.fromTo(success, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });

    setTimeout(() => {
      success.classList.remove('show');
    }, 5000);
  }, 1500);
});

/* ── Magnetic button hover effect ── */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
  });
});

/* ── Cursor glow effect on desktop ── */
if (window.innerWidth > 1024) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(245,197,24,0.04) 0%,transparent 70%);
    pointer-events:none;z-index:0;transform:translate(-50%,-50%);
    transition:transform 0.1s;left:-100px;top:-100px;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

/* ── Scroll progress indicator (thin bar at top) ── */
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#A6192E,#F5C518);
  z-index:10000;width:0%;transition:width 0.1s;pointer-events:none;
`;
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ── Mobile Touch Hover Fix for Cards ── */
const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
  card.addEventListener('touchstart', function(e) {
    if (!this.classList.contains('touch-hover')) {
      // Remove touch-hover from all others
      catCards.forEach(c => c.classList.remove('touch-hover'));
      this.classList.add('touch-hover');
    }
  }, { passive: true });
});

// Click anywhere else to close
document.addEventListener('touchstart', function(e) {
  if (!e.target.closest('.cat-card')) {
    catCards.forEach(c => c.classList.remove('touch-hover'));
  }
}, { passive: true });
