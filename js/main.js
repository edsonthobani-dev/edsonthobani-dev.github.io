/* *************************************************************
   THOBANI EDISON — PORTFOLIO
   main.js
   ***************************************************************/

/* 1. NAV SCROLL BEHAVIOUR ************************** */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/*  2. MOBILE BURGER MENU  */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/*  3. SCROLL REVEAL  */
const revealElements = document.querySelectorAll(
  '.about__grid, .project-card, .skill-group, .contact__sub, .contact__links, .section__title, .section__eyebrow'
);

// Add reveal class to all target elements
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));

/*  4. ACTIVE NAV LINK HIGHLIGHT  */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.color = 'var(--paper)';
        }
      });
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(section => sectionObserver.observe(section));

/*  5. PROJECT CARD STAGGER  */
const cards = document.querySelectorAll('.project-card');

cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

/*  6. SMOOTH SCROLL FOR ALL ANCHOR LINKS  */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});