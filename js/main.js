// Script simplificado para mejorar la interactividad
document.addEventListener('DOMContentLoaded', function() {
  // Asegurar que todas las secciones sean visibles y funcionales
  document.querySelectorAll('.mining-news, .mining-about, .mining-contact').forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
    section.classList.add('visible');
  });

  // Asegurar que todas las tarjetas de proyectos sean visibles
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '1';
    card.style.animation = 'none';
  });

  // Asegurar que las estadísticas sean visibles
  document.querySelectorAll('.mining-stat').forEach(stat => {
    stat.style.opacity = '1';
    stat.style.transform = 'translateY(0)';
    stat.classList.add('animated');
  });

  // Añadir efecto de desplazamiento suave a los enlaces de navegación
  const navLinks = document.querySelectorAll('.mining-nav-link, .mining-hero-button, .mining-footer-links-column a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetSection = document.querySelector(href);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Asegurar que todos los elementos interactivos tengan los eventos correctos
  document.querySelectorAll('a, button, input, textarea, select, .mining-submit-button').forEach(element => {
    element.style.pointerEvents = 'auto';
    element.style.cursor = 'pointer';
  });

  // Asegurar que los campos de texto tengan el cursor correcto
  document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(element => {
    element.style.cursor = 'text';
  });
});
