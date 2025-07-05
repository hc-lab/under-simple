import React from 'react';
import { useLanguageSwitcher } from '../../hooks/useLanguageSwitcher';

const LanguageSwitcher = () => {
  const { changeLanguage, isSpanish, isEnglish } = useLanguageSwitcher();

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('es')} 
        className={`flag-button ${isSpanish ? 'active' : ''}`} 
        aria-label="Switch to Spanish"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
          <path fill="#C60B1E" d="M0 0h5v3H0z"/>
          <path fill="#FFC400" d="M0 1h5v1H0z"/>
        </svg>
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`flag-button ${isEnglish ? 'active' : ''}`} 
        aria-label="Switch to English"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <clipPath id="a">
            <path d="M0 0v30h60V0z"/>
          </clipPath>
          <path d="M0 0v30h60V0z" fill="#012169"/>
          <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
          <path d="M0 0l60 30m0-30L0 30" clipPath="url(#a)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher; 