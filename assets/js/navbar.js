/* ============================================================
   NAVBAR.JS — Scroll, Hamburger, Menú Móvil
   Lumis Clínica Estética · Portfolio Project
   ============================================================ */

(function () {
  'use strict';

  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu__link') : [];

  let isMenuOpen    = false;
  let lastScrollY   = 0;
  let ticking       = false;

  // ── Scroll: añadir clase .scrolled al navbar ──────────────
  function handleScroll() {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > 60) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Ejecutar al cargar

  // ── Hamburger: abrir / cerrar menú móvil ─────────────────
  function openMenu() {
    isMenuOpen = true;
    hamburger.classList.add('is-active');
    mobileMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Foco al primer link para accesibilidad
    if (mobileLinks.length) {
      setTimeout(() => mobileLinks[0].focus(), 100);
    }
  }

  function closeMenu() {
    isMenuOpen = false;
    hamburger.classList.remove('is-active');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Devolver foco al hamburger
    hamburger.focus();
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // ── Cerrar al hacer click en un link del menú móvil ───────
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ── Cerrar con tecla ESC ──────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  // ── Smooth scroll para todos los links de ancla ───────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      // Offset = altura del navbar actual
      const navbarH = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarH - 12;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });

  // ── Exponer closeMenu globalmente (por si se necesita) ────
  window.lumis = window.lumis || {};
  window.lumis.closeMenu = closeMenu;

})();
