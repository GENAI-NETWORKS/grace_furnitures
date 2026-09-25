'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ClientScripts() {
  useEffect(() => {
    // Page loader — dismiss after 1.4s
    const dismissLoader = () => {
      const loader = document.querySelector('.page-loader') as HTMLElement | null;
      if (loader) {
        loader.classList.add('hidden');
      }
    };

    const loaderTimer = setTimeout(dismissLoader, 1400);

    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 60) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
      // Active nav link highlighting
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const el = section as HTMLElement;
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;
        if (scroll >= top && scroll < bottom) {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
          if (link) link.classList.add('active');
        }
      });

      // Scroll progress bar
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      const bar = document.getElementById('scroll-progress-bar');
      if (bar) bar.style.width = pct + '%';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mobile drawer
    const hamburger = document.querySelector('.hamburger');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const drawerCloseBtn = document.querySelector('#drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.drawer-links a');

    const openDrawer = () => {
      hamburger?.classList.add('open');
      mobileDrawer?.classList.add('open');
      drawerOverlay?.classList.add('show');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      hamburger?.classList.remove('open');
      mobileDrawer?.classList.remove('open');
      drawerOverlay?.classList.remove('show');
      document.body.style.overflow = '';
    };

    hamburger?.addEventListener('click', () => {
      mobileDrawer?.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    drawerOverlay?.addEventListener('click', closeDrawer);
    drawerCloseBtn?.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));

    // Cat card click-to-reveal hover panel
    const catCards = document.querySelectorAll('.cat-card');
    const handleCardClick = function (this: HTMLElement, e: Event) {
      if (!this.classList.contains('touch-hover')) {
        e.preventDefault();
        e.stopPropagation();
        catCards.forEach(c => c.classList.remove('touch-hover'));
        this.classList.add('touch-hover');
      }
    };
    catCards.forEach(card => card.addEventListener('click', handleCardClick as EventListener));

    const handleOutsideClick = (e: Event) => {
      if (!(e.target as Element).closest('.cat-card')) {
        catCards.forEach(c => c.classList.remove('touch-hover'));
      }
    };
    document.addEventListener('click', handleOutsideClick);

    // Cursor glow on desktop
    let glowEl: HTMLDivElement | null = null;
    if (window.innerWidth > 1024) {
      glowEl = document.createElement('div');
      glowEl.style.cssText = `
        position:fixed;width:300px;height:300px;border-radius:50%;
        background:radial-gradient(circle,rgba(245,197,24,0.04) 0%,transparent 70%);
        pointer-events:none;z-index:0;transform:translate(-50%,-50%);
        transition:transform 0.1s;left:-100px;top:-100px;
      `;
      document.body.appendChild(glowEl);
      const handleMouseMove = (e: MouseEvent) => {
        if (glowEl) {
          glowEl.style.left = e.clientX + 'px';
          glowEl.style.top = e.clientY + 'px';
        }
      };
      document.addEventListener('mousemove', handleMouseMove);
    }

    // Contact form submit
    const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      const btn = contactForm?.querySelector('.form-submit') as HTMLButtonElement | null;
      const success = document.querySelector('.form-success');
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      setTimeout(() => {
        contactForm?.reset();
        if (btn) { btn.textContent = 'Send Enquiry'; btn.disabled = false; }
        success?.classList.add('show');
        setTimeout(() => success?.classList.remove('show'), 5000);
      }, 1500);
    };
    contactForm?.addEventListener('submit', handleFormSubmit);

    // Scroll-reveal animations (CSS class-based, no GSAP needed)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section-title, .section-label, .section-sub, .cat-card, .usp-item, .spot-card, .biz-icon-item, .testi-card').forEach(el => observer.observe(el));

    return () => {
      clearTimeout(loaderTimer);
      window.removeEventListener('scroll', handleScroll);
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
      catCards.forEach(card => card.removeEventListener('click', handleCardClick as EventListener));
      document.removeEventListener('click', handleOutsideClick);
      contactForm?.removeEventListener('submit', handleFormSubmit);
      if (glowEl) glowEl.remove();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress-bar"
        style={{
          position: 'fixed', top: 0, left: 0, height: '2px',
          background: 'linear-gradient(90deg,#A6192E,#F5C518)',
          zIndex: 10000, width: '0%', transition: 'width 0.1s',
          pointerEvents: 'none'
        }}
      />
    </>
  );
}
