// Optimización de Carga de Imágenes
class ImageOptimizer {
  constructor() {
    this.init();
  }

  init() {
    // Marcar imágenes como cargadas cuando terminen de cargar
    this.handleImageLoading();
    
    // Lazy loading fallback para navegadores antiguos
    this.lazyLoadFallback();
    
    // Preload de imágenes críticas
    this.preloadCriticalImages();
  }

  handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Si la imagen ya está cargada
      if (img.complete && img.naturalHeight !== 0) {
        this.markAsLoaded(img);
      } else {
        // Escuchar cuando la imagen se carga
        img.addEventListener('load', () => {
          this.markAsLoaded(img);
        });
        
        // Manejar errores de carga
        img.addEventListener('error', () => {
          this.handleImageError(img);
        });
      }
    });
  }

  markAsLoaded(img) {
    img.setAttribute('data-loaded', 'true');
    img.style.opacity = '1';
    img.style.filter = 'blur(0)';
    
    // Remover clase de carga si existe
    const container = img.closest('.image-loading');
    if (container) {
      container.classList.remove('image-loading');
    }
  }

  handleImageError(img) {
    console.warn(`Error loading image: ${img.src}`);
    
    // Crear placeholder de error
    const placeholder = document.createElement('div');
    placeholder.className = 'image-error-placeholder';
    placeholder.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        background: #f5f5f5;
        color: #999;
        font-size: 14px;
        border-radius: 8px;
      ">
        <span>Imagen no disponible</span>
      </div>
    `;
    
    img.parentNode.replaceChild(placeholder, img);
  }

  lazyLoadFallback() {
    // Solo para navegadores que no soportan loading="lazy"
    if ('loading' in HTMLImageElement.prototype) {
      return; // El navegador soporta lazy loading nativo
    }

    // Implementar Intersection Observer para lazy loading
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  preloadCriticalImages() {
    // Precargar imagen hero
    const heroImage = document.querySelector('.proyecto-hero-image img');
    if (heroImage) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImage.src;
      document.head.appendChild(link);
    }
  }

  // Método para optimizar imágenes dinámicamente
  optimizeImage(img, options = {}) {
    const {
      quality = 0.8,
      maxWidth = 1200,
      maxHeight = 800
    } = options;

    // Solo si el navegador soporta canvas
    if (!HTMLCanvasElement.prototype.toBlob) {
      return Promise.resolve(img);
    }

    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Calcular nuevas dimensiones manteniendo aspect ratio
      const ratio = Math.min(maxWidth / img.naturalWidth, maxHeight / img.naturalHeight);
      canvas.width = img.naturalWidth * ratio;
      canvas.height = img.naturalHeight * ratio;
      
      // Dibujar imagen optimizada
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Convertir a blob optimizado
      canvas.toBlob((blob) => {
        const optimizedUrl = URL.createObjectURL(blob);
        img.src = optimizedUrl;
        resolve(img);
      }, 'image/jpeg', quality);
    });
  }

  // Método para agregar efectos de carga
  addLoadingEffect(container) {
    container.classList.add('image-loading');
    
    // Remover efecto después de 5 segundos máximo
    setTimeout(() => {
      container.classList.remove('image-loading');
    }, 5000);
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new ImageOptimizer();
});

// Exponer para uso global
window.ImageOptimizer = ImageOptimizer;
