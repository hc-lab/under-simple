import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// IMPORTANTE: Estas imágenes deben estar en la carpeta `public/img/Otros/` de tu proyecto React.
const images = [
  '/img/Otros/1.jpeg',
  '/img/Otros/2.jpeg',
  '/img/Otros/3.jpeg',
  '/img/Otros/4.jpg',
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      6000
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  const togglePlayPause = () => {
    // This function is no longer used in the new implementation
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('noticias');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="hero-section section-divider">
      <div className="hero-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide${index === currentIndex ? ' active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="hero-title-main">UNDER</span>
            <span className="hero-title-accent">◆</span>
          </h1>
          <p className="hero-subtitle">COMPROMISO QUE NOS HACE GRANDES</p>
      </div>
      </div>
      <button className="hero-scroll-down" aria-label="Deslizar hacia abajo" onClick={() => {
        const section = document.getElementById('noticias');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>                                                                                                                                                             
    </section>
  );
};

export default Hero;
