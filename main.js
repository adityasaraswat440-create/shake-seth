document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile hamburger toggle ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // --- Active nav link switching with smooth indicator ---
  const links = document.querySelectorAll('.nav-link');
  const indicator = document.querySelector('.nav-indicator');

  function moveIndicator(el) {
    const nav = el.closest('.nav-links');
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    indicator.style.width = elRect.width + 'px';
    indicator.style.transform = `translateX(${elRect.left - navRect.left}px)`;
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        // Let actual page navigation happen
        return;
      }
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      moveIndicator(link);
    });
  });

  // Set initial indicator position on the active link
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink && indicator) {
    moveIndicator(activeLink);
  }

  // --- Carousel scroll ---
  const container = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');

  if (container && prevBtn && nextBtn) {
    const scrollAmount = 260;

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // --- Wishlist toggle ---
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const svg = btn.querySelector('svg');
      const isFilled = svg.getAttribute('fill') !== 'none';
      if (isFilled) {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        btn.style.color = '';
      } else {
        svg.setAttribute('fill', '#E24C4C');
        svg.setAttribute('stroke', '#E24C4C');
        btn.style.color = '#E24C4C';
      }
    });
  });
});
