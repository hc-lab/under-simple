// Script para configurar la imagen de fondo en las páginas de proyectos
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el nombre de la página actual
  const path = window.location.pathname;
  const pageName = path.split('/').pop().replace('.html', '');
  
  // Configurar la imagen de fondo según la página
  const sideImage = document.querySelector('.artistic-side-image');
  if (sideImage) {
    // Determinar la ruta de la imagen según la página
    let imagePath = '';
    
    switch (pageName) {
      case 'flor-de-kantu':
        imagePath = '../img/Flor-de-Kantu/1-2.jpg';
        break;
      case 'guadalupe':
        imagePath = '../img/Guadalupe/(1).jpeg';
        break;
      case 'santamaria':
        imagePath = '../img/Santamaria/(1).jpeg';
        break;
      case 'prosperidad':
        imagePath = '../img/Prosperidad/(1).jpeg';
        break;
      default:
        // Imagen por defecto si no coincide con ninguna página conocida
        imagePath = '../img/Otros/halftone-under-3.png';
    }
    
    // Aplicar la imagen de fondo
    sideImage.style.backgroundImage = `url('${imagePath}')`;
    
    // Añadir un mensaje en la consola para depuración
    console.log(`Proyecto: ${pageName}, Imagen configurada: ${imagePath}`);
  }
});
