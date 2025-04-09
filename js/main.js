// Efectos adicionales para mejorar la elegancia y profesionalidad
document.addEventListener('DOMContentLoaded', function() {
  // Efecto de parallax suave en el scroll solo para elementos de fondo
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Efecto parallax solo en el fondo, no en el contenido
    if (document.querySelector('.mining-hero-video')) {
      document.querySelector('.mining-hero-video').style.transform = `scale(1.02) translateY(${scrollPosition * 0.03}px)`;
    }

    if (document.querySelector('.mining-hero-fallback')) {
      document.querySelector('.mining-hero-fallback').style.transform = `scale(1.02) translateY(${scrollPosition * 0.03}px)`;
    }

    // Efecto de aparición en las secciones al hacer scroll
    const sections = document.querySelectorAll('.mining-news, .mining-about, .mining-contact');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  });

  // Efecto de brillo en el logo al pasar el mouse
  const logo = document.querySelector('.mining-logo h1');
  if (logo) {
    logo.addEventListener('mouseover', function() {
      this.style.backgroundSize = '150% 100%';
      this.style.transition = 'all 0.5s ease';
    });

    logo.addEventListener('mouseout', function() {
      this.style.backgroundSize = '200% 100%';
    });
  }

  // Añadir clases de animación a elementos específicos
  const animateElements = () => {
    // Animación para las tarjetas de noticias
    const newsCards = document.querySelectorAll('.mining-news-card');
    newsCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animated');
      }, 200 * index);
    });

    // Animación para las estadísticas
    const stats = document.querySelectorAll('.mining-stat');
    stats.forEach((stat, index) => {
      setTimeout(() => {
        stat.classList.add('animated');
      }, 150 * index);
    });

    // Efecto de animación para el contenedor principal
    const heroContent = document.querySelector('.mining-hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 500);
    }
  };

  // Ejecutar animaciones después de que la página cargue completamente
  window.addEventListener('load', animateElements);

  // Añadir efecto de desplazamiento suave a los enlaces de navegación
  const navLinks = document.querySelectorAll('.mining-nav-link, .mining-hero-button, .mining-footer-links-column a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href.startsWith('#') && href.length > 1) {
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
});
