// Script para incluir el footer en todas las páginas de proyectos
document.addEventListener('DOMContentLoaded', function() {
  // Verificar si estamos en una página de proyecto
  if (window.location.pathname.includes('/proyectos/')) {
    console.log('Estamos en una página de proyecto, cargando footer...');

    // Buscar el comentario que marca dónde insertar el footer
    const footerPlaceholder = document.querySelector('body').innerHTML.includes('<!-- Footer se hereda de index.html mediante JavaScript -->');

    if (footerPlaceholder) {
      console.log('Placeholder de footer encontrado');

      // Cargar el footer desde el archivo HTML
      fetch('../includes/footer.html')
        .then(response => response.text())
        .then(html => {
          console.log('Footer cargado correctamente');

          // Insertar el footer antes del cierre del div.mining-page
          const miningPage = document.querySelector('.mining-page');
          if (miningPage) {
            console.log('Insertando footer en la página...');

            // Crear un contenedor para el footer
            const footerContainer = document.createElement('div');
            footerContainer.innerHTML = html;

            // Insertar el footer
            miningPage.appendChild(footerContainer.firstElementChild);

            console.log('Footer insertado correctamente');
          } else {
            console.error('No se encontró el elemento .mining-page');
          }
        })
        .catch(error => {
          console.error('Error al cargar el footer:', error);
        });
    } else {
      console.error('No se encontró el placeholder del footer');
    }
  }
});
