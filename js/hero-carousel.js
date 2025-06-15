// Carrusel de Hero con Efecto Ken Burns + Crossfade
class HeroCarousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel-slide');
    this.currentSlide = 0;
    this.slideInterval = null;
    this.slideDuration = 6000; // 6 segundos por slide
    this.isTransitioning = false;
    
    this.init();
  }
  
  init() {
    if (this.slides.length === 0) return;
    
    // Crear indicadores
    this.createIndicators();
    
    // Precargar imágenes
    this.preloadImages();
    
    // Iniciar el carrusel
    this.startCarousel();
    
    // Pausar en hover
    this.setupHoverEvents();
    
    // Manejar visibilidad de la página
    this.setupVisibilityEvents();
  }
  
  createIndicators() {
    const heroSection = document.querySelector('.hero-spotify-effect');
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'carousel-indicators';
    
    this.slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => this.goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
    
    heroSection.appendChild(indicatorsContainer);
    this.indicators = document.querySelectorAll('.carousel-indicator');
  }
  
  preloadImages() {
    this.slides.forEach((slide, index) => {
      const img = new Image();
      const bgImage = slide.style.backgroundImage;
      const imageUrl = bgImage.slice(4, -1).replace(/"/g, "");
      
      slide.classList.add('loading');
      
      img.onload = () => {
        slide.classList.remove('loading');
        if (index === 0) {
          slide.classList.add('active');
        }
      };
      
      img.onerror = () => {
        slide.classList.remove('loading');
        console.warn(`Error loading image: ${imageUrl}`);
      };
      
      img.src = imageUrl;
    });
  }
  
  goToSlide(slideIndex) {
    if (this.isTransitioning || slideIndex === this.currentSlide) return;
    
    this.isTransitioning = true;
    
    // Remover clase active del slide actual
    this.slides[this.currentSlide].classList.remove('active');
    this.indicators[this.currentSlide].classList.remove('active');
    
    // Actualizar índice
    this.currentSlide = slideIndex;
    
    // Activar nuevo slide con delay para suavizar transición
    setTimeout(() => {
      this.slides[this.currentSlide].classList.add('active');
      this.indicators[this.currentSlide].classList.add('active');
      
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }, 100);
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }
  
  startCarousel() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideDuration);
  }
  
  stopCarousel() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }
  
  setupHoverEvents() {
    const heroSection = document.querySelector('.hero-spotify-effect');
    
    heroSection.addEventListener('mouseenter', () => {
      this.stopCarousel();
    });
    
    heroSection.addEventListener('mouseleave', () => {
      this.startCarousel();
    });
  }
  
  setupVisibilityEvents() {
    // Pausar cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopCarousel();
      } else {
        this.startCarousel();
      }
    });
    
    // Pausar cuando la ventana pierde el foco
    window.addEventListener('blur', () => {
      this.stopCarousel();
    });
    
    window.addEventListener('focus', () => {
      this.startCarousel();
    });
  }
  
  // Método para agregar nuevas imágenes dinámicamente
  addSlide(imageUrl, altText = '') {
    const newSlide = document.createElement('div');
    newSlide.className = 'carousel-slide';
    newSlide.style.backgroundImage = `url('${imageUrl}')`;
    
    const carousel = document.querySelector('.hero-carousel');
    carousel.appendChild(newSlide);
    
    // Actualizar arrays
    this.slides = document.querySelectorAll('.carousel-slide');
    
    // Recrear indicadores
    const oldIndicators = document.querySelector('.carousel-indicators');
    if (oldIndicators) {
      oldIndicators.remove();
    }
    this.createIndicators();
    
    // Precargar nueva imagen
    const img = new Image();
    newSlide.classList.add('loading');
    
    img.onload = () => {
      newSlide.classList.remove('loading');
    };
    
    img.src = imageUrl;
  }
  
  // Método para cambiar la velocidad del carrusel
  setSpeed(duration) {
    this.slideDuration = duration;
    this.stopCarousel();
    this.startCarousel();
  }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Pequeño delay para asegurar que todos los estilos estén cargados
  setTimeout(() => {
    window.heroCarousel = new HeroCarousel();
  }, 100);
});

// Exponer métodos globales para control manual (opcional)
window.carouselControls = {
  next: () => window.heroCarousel?.nextSlide(),
  goTo: (index) => window.heroCarousel?.goToSlide(index),
  setSpeed: (duration) => window.heroCarousel?.setSpeed(duration),
  addSlide: (url, alt) => window.heroCarousel?.addSlide(url, alt)
};
