// Script para insertar el navbar directamente en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
  // Determinar si estamos en una subpágina (proyectos)
  const path = window.location.pathname;
  const isSubPage = path.includes('/proyectos/') || path.includes('\\proyectos\\');

  // Crear el HTML del navbar con menú desplegable para proyectos
  const navbarHTML = `
    <div class="mining-logo">
      <h1>UNDER<span class="diamond-small">◆</span></h1>
    </div>
    <nav class="mining-nav">
      <a href="${isSubPage ? '../' : ''}index.html" class="mining-nav-link" style="color: #222222;">INICIO</a>
      <a href="${isSubPage ? '../' : ''}index.html#nosotros" class="mining-nav-link" style="color: #222222;">NOSOTROS</a>
      <div class="dropdown">
        <a href="${isSubPage ? '../' : ''}index.html#noticias" class="mining-nav-link dropdown-toggle" style="color: #222222;">PROYECTOS</a>
        <div class="dropdown-menu">
          <a href="${isSubPage ? './' : 'proyectos/'}flor-de-kantu.html" class="dropdown-item">FLOR DE KANTU</a>
          <a href="${isSubPage ? './' : 'proyectos/'}guadalupe.html" class="dropdown-item">GUADALUPE</a>
          <a href="${isSubPage ? './' : 'proyectos/'}santamaria.html" class="dropdown-item">SANTAMARIA</a>
          <a href="${isSubPage ? './' : 'proyectos/'}prosperidad.html" class="dropdown-item">PROSPERIDAD</a>
        </div>
      </div>
      <a href="${isSubPage ? '../' : ''}index.html#contacto" class="mining-nav-link" style="color: #222222;">CONTACTO</a>
    </nav>
  `;

  // Insertar el navbar en el DOM
  const navbarContainer = document.querySelector('.mining-header');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;

    // Establecer el enlace activo según la página actual
    const navLinks = document.querySelectorAll('.mining-nav-link');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const currentPath = window.location.pathname;
    const hash = window.location.hash;
    const currentPage = currentPath.split('/').pop();

    if (currentPath.includes('/proyectos/') || currentPath.includes('\\proyectos\\')) {
      // Estamos en una página de proyecto
      dropdownToggle.classList.add('active'); // Activar PROYECTOS

      // Activar el proyecto específico en el menú desplegable
      dropdownItems.forEach(item => {
        const itemPath = item.getAttribute('href').split('/').pop();
        if (currentPage === itemPath) {
          item.classList.add('active');
        }
      });
    } else if (currentPath.endsWith('/index.html') || currentPath.endsWith('/')) {
      // Estamos en la página principal
      if (hash) {
        // Si hay un hash, activar el enlace correspondiente
        if (hash === '#nosotros') {
          navLinks[1].classList.add('active'); // NOSOTROS
        } else if (hash === '#noticias') {
          dropdownToggle.classList.add('active'); // PROYECTOS
        } else if (hash === '#contacto') {
          navLinks[navLinks.length - 1].classList.add('active'); // CONTACTO
        } else {
          navLinks[0].classList.add('active'); // INICIO por defecto
        }
      } else {
        navLinks[0].classList.add('active'); // INICIO por defecto
      }
    }

    // El menú desplegable ahora funciona con CSS :hover, no necesitamos JavaScript para mostrar/ocultar
    // Pero añadimos funcionalidad para mejorar la experiencia en dispositivos táctiles
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdown && dropdownToggle && dropdownMenu) {
      // Detectar si es un dispositivo táctil
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      if (isTouchDevice) {
        // En dispositivos táctiles, alternar el menú al hacer clic
        dropdownToggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('touch-open');

          if (dropdown.classList.contains('touch-open')) {
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.transform = 'translateX(-50%) translateY(0)';
            dropdownMenu.style.pointerEvents = 'auto';
          } else {
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateX(-50%) translateY(10px)';
            dropdownMenu.style.pointerEvents = 'none';
          }
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target) && dropdown.classList.contains('touch-open')) {
            dropdown.classList.remove('touch-open');
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateX(-50%) translateY(10px)';
            dropdownMenu.style.pointerEvents = 'none';
          }
        });
      }

      // Asegurar que los enlaces del menú desplegable funcionen correctamente
      const dropdownItems = document.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
          // Permitir que el enlace funcione normalmente
          // El navegador navegará a la URL del enlace
        });
      });
    }
  } else {
    console.error('No se encontró el contenedor del navbar');
  }
});
