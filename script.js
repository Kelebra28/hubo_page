const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
const header = document.querySelector('.site-header');

if (header) {
  const toggleHeaderOnScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  toggleHeaderOnScroll();
  window.addEventListener('scroll', toggleHeaderOnScroll);
}

const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const servicio = document.getElementById('servicio').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const text = `Hola Hugo, te contacto desde tu página web.%0A%0A` +
      `Nombre: ${encodeURIComponent(nombre)}%0A` +
      `Teléfono: ${encodeURIComponent(telefono)}%0A` +
      `Servicio de interés: ${encodeURIComponent(servicio)}%0A` +
      `Mensaje: ${encodeURIComponent(mensaje || 'Sin mensaje adicional')}`;

    window.open(`https://wa.me/525534775471?text=${text}`, '_blank');
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    if (window.innerWidth < 992) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

const activateNavOnScroll = () => {
  const scrollY = window.scrollY + 140;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('scroll', activateNavOnScroll);
window.addEventListener('load', activateNavOnScroll);