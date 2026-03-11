/* ============================================================
   ANIMATIONS.JS — Scroll Reveal con IntersectionObserver
   Lumis Clínica Estética · Portfolio Project
   ============================================================ */

(function () {
  'use strict';

  // Si el usuario prefiere movimiento reducido, no aplicar animaciones
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // ── Fade-up individual ────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeEls.forEach(el => fadeObserver.observe(el));
  }

  // ── Stagger (grillas de cards) ────────────────────────────
  const staggerEls = document.querySelectorAll('.stagger');

  if (staggerEls.length) {
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    staggerEls.forEach(el => staggerObserver.observe(el));
  }

  // ── Contador animado (trust bar) ──────────────────────────
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const duration = 1800;
    const start    = performance.now();

    function step(timestamp) {
      const elapsed  = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(eased * target);

      el.textContent = prefix + current.toLocaleString('es-AR') + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString('es-AR') + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // ── Parallax suave en hero ────────────────────────────────
  const heroBg = document.querySelector('.hero__bg');

  if (heroBg) {
    let rafId = null;

    function parallaxHero() {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        // Solo aplicar parallax si el hero es visible
        if (scrolled < window.innerHeight) {
          const offset = scrolled * 0.3;
          heroBg.style.transform = `scale(1) translateY(${offset}px)`;
        }
        rafId = null;
      });
    }

    window.addEventListener('scroll', parallaxHero, { passive: true });
  }

})();
