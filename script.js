document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const nombre = document.getElementById('nombre')?.value.trim() || '';
        const telefono = document.getElementById('telefono')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const servicio = document.getElementById('servicio')?.value || '';
        const mensaje = document.getElementById('mensaje')?.value.trim() || '';
  
        const texto = `Hola, me interesa recibir asesoría inmobiliaria.%0A%0A` +
          `Nombre: ${encodeURIComponent(nombre)}%0A` +
          `Teléfono: ${encodeURIComponent(telefono)}%0A` +
          `Correo: ${encodeURIComponent(email)}%0A` +
          `Servicio: ${encodeURIComponent(servicio)}%0A` +
          `Mensaje: ${encodeURIComponent(mensaje)}`;
  
        const whatsapp = '5215512345678'; // Reemplazar por el número real
        window.open(`https://wa.me/${whatsapp}?text=${texto}`, '_blank');
      });
    }
  
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });
  
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');
          toggle.classList.remove('active');
        });
      });
    }
  });