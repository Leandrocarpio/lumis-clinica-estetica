/* ============================================================
   FAQ.JS — Accordion interactivo
   Lumis Clínica Estética · Portfolio Project
   ============================================================ */

(function () {
  'use strict';

  const faqItems = document.querySelectorAll('.faq-item');

  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn    = item.querySelector('.faq-item__btn');
    const answer = item.querySelector('.faq-item__answer');

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Cerrar todos los items abiertos
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-item__btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle del item clickeado
      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');

        // Scroll suave al item si está fuera de la vista
        setTimeout(() => {
          const rect = item.getBoundingClientRect();
          if (rect.top < 80 || rect.bottom > window.innerHeight) {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 350);
      }
    });

    // Accesibilidad: abrir con Enter y Space
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

})();
