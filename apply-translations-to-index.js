/**
 * Script para aplicar traducciones faltantes en index.html
 * Ejecutar en la consola del navegador para aplicar data-i18n a elementos faltantes
 */

function applyTranslationsToIndex() {
  console.log('Aplicando traducciones al index.html...');
  
  // Traducciones específicas para el footer y elementos faltantes
  const translations = {
    'Términos y condiciones': 'footer.terms',
    'Política de privacidad': 'footer.privacy',
    'Política de cookies': 'footer.cookies',
    'Todos los derechos reservados.': 'footer.rights',
    'Enlaces': 'footer.links',
    'Legal': 'footer.legal',
    'Síguenos': 'footer.follow',
    'UNDER': 'footer.company',
    'COMPROMISO QUE NOS HACE GRANDES': 'footer.tagline'
  };
  
  // Aplicar a elementos que no tienen data-i18n
  let applied = 0;
  document.querySelectorAll('*').forEach(element => {
    // Solo procesar elementos de texto que no tengan data-i18n
    if (element.children.length === 0 && 
        element.textContent.trim() && 
        !element.hasAttribute('data-i18n') &&
        element.tagName !== 'SCRIPT' &&
        element.tagName !== 'STYLE') {
      
      const text = element.textContent.trim();
      
      if (translations[text]) {
        element.setAttribute('data-i18n', translations[text]);
        console.log(`Aplicado: "${text}" → ${translations[text]}`);
        applied++;
      }
    }
  });
  
  console.log(`Se aplicaron ${applied} traducciones`);
  
  // Forzar re-traducción si existe el sistema i18n
  if (window.i18n) {
    window.i18n.translatePage();
    console.log('Página re-traducida');
  }
}

// Función para aplicar a elementos específicos manualmente
function addTranslationToElement(selector, translationKey) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.setAttribute('data-i18n', translationKey);
    console.log(`Aplicado ${translationKey} a ${selector}`);
  });
  
  if (window.i18n) {
    window.i18n.translatePage();
  }
}

// Exportar funciones para uso en consola
window.applyTranslationsToIndex = applyTranslationsToIndex;
window.addTranslationToElement = addTranslationToElement;

console.log('Script de traducciones para index.html cargado. Usa:');
console.log('- applyTranslationsToIndex() para aplicar automáticamente');
console.log('- addTranslationToElement(selector, key) para elementos específicos'); 