/**
 * Script profesional para el navbar y menú desplegable
 */
document.addEventListener('DOMContentLoaded', function() {
  // Detectar la página actual para marcar el enlace activo
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  
  // Obtener todos los enlaces del navbar
  const navItems = document.querySelectorAll('.pro-nav-item');
  const dropdownToggle = document.querySelector('.pro-dropdown-toggle');
  const dropdownItems = document.querySelectorAll('.pro-dropdown-item');
  
  // Función para marcar el enlace activo
  function setActiveLink() {
    // Primero, quitar la clase active de todos los enlaces
    navItems.forEach(item => item.classList.remove('active'));
    dropdownToggle.classList.remove('active');
    dropdownItems.forEach(item => item.classList.remove('active'));
    
    // Marcar el enlace activo según la página actual
    if (currentPath.includes('/proyectos/')) {
      // Estamos en una página de proyecto
      dropdownToggle.classList.add('active');
      
      // Marcar el proyecto específico en el menú desplegable
      const projectName = currentPath.split('/').pop().replace('.html', '');
      dropdownItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath.includes(projectName)) {
          item.classList.add('active');
        }
      });
    } else {
      // Estamos en la página principal
      if (currentHash) {
        // Si hay un hash, marcar el enlace correspondiente
        navItems.forEach(item => {
          const itemHref = item.getAttribute('href');
          if (itemHref && itemHref.includes(currentHash)) {
            item.classList.add('active');
          }
        });
        
        // Verificar si el hash corresponde a la sección de proyectos
        if (currentHash === '#noticias') {
          dropdownToggle.classList.add('active');
        }
      } else {
        // Si no hay hash, marcar el enlace de inicio
        navItems[0].classList.add('active');
      }
    }
  }
  
  // Ejecutar la función para marcar el enlace activo
  setActiveLink();

  // Hacer el logo clicable para ir al inicio
  const logo = document.querySelector('.pro-navbar-logo h1');
  if (logo) {
    logo.addEventListener('click', function() {
      // Si estamos en una página de proyecto, ir al index
      if (window.location.pathname.includes('/proyectos/')) {
        window.location.href = '../index.html';
      } else {
        // Si estamos en index, ir al top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Manejo del menú móvil hamburguesa
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.pro-navbar-nav');

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      mobileNav.classList.toggle('mobile-active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.pro-nav-item, .pro-dropdown-item');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('mobile-active');
      });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('mobile-active');
      }
    });
  }

  // Mejorar la accesibilidad para dispositivos táctiles
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    const dropdown = document.querySelector('.pro-dropdown');
    const dropdownMenu = document.querySelector('.pro-dropdown-menu');
    
    // En dispositivos táctiles, mostrar/ocultar el menú al hacer clic
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (dropdownMenu.classList.contains('touch-visible')) {
        dropdownMenu.classList.remove('touch-visible');
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateX(-50%) translateY(10px) scale(0.95)';
      } else {
        dropdownMenu.classList.add('touch-visible');
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'translateX(-50%) translateY(0) scale(1)';
      }
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target) && dropdownMenu.classList.contains('touch-visible')) {
        dropdownMenu.classList.remove('touch-visible');
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateX(-50%) translateY(10px) scale(0.95)';
      }
    });
    
    // Evitar que los clics en el menú desplegable cierren el menú
    dropdownMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Efecto de scroll para el navbar
  let lastScrollTop = 0;
  const navbar = document.querySelector('.pro-navbar');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      navbar.style.height = '70px';
    } else {
      navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
      navbar.style.height = '80px';
    }
    
    lastScrollTop = scrollTop;
  });
});
