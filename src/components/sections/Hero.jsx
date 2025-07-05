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
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % images.length
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <section 
      className="hero-section"
      onMouseEnter={() => resetTimeout()}
      onMouseLeave={() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
          6000
        );
      }}
    >
      <div className="hero-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="hero-title">UNDER◆</h1>
        <p>COMPROMISO QUE NOS HACE GRANDES</p>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
