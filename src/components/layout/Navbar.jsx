import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { principalesProyectos } from '../../data/principalesProyectos';
import '../../styles/Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', label: 'navbar.home' },
    { to: '/nosotros', label: 'navbar.about' },
    { to: '/contacto', label: 'navbar.contact' },
  ];

  const projectLinks = Object.keys(principalesProyectos).map(key => ({
    to: `/proyectos/${key}`,
    label: principalesProyectos[key].dropdownTitle,
  }));

  const renderNavLink = (link) => {
    const commonProps = {
      className: 'pro-nav-link',
      onClick: closeMobileMenu,
    };
    if (link.isHashLink) {
      return <HashLink smooth to={link.to} {...commonProps}>{t(link.label)}</HashLink>;
    }
    return <NavLink to={link.to} {...commonProps}>{t(link.label)}</NavLink>;
  };

  return (
    <header 
      className="pro-header" 
      role="banner"
      aria-label="Navegación principal"
    >
      <div className="pro-navbar-container">
        <NavLink to="/" className="pro-navbar-logo" onClick={closeMobileMenu}>
          <div className="logo-text-container">
            <span className="logo-line-1">UNDER<span className="diamond-large">◆</span></span>
          </div>
        </NavLink>

        <button 
          className={`pro-mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span /><span /><span />
        </button>

        <div className={`pro-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
        <nav className={`pro-navbar-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`} id="mobile-menu">
          {navLinks.map((link) => <React.Fragment key={link.label}>{renderNavLink(link)}</React.Fragment>)}

          <div className="pro-dropdown" ref={dropdownRef}>
            <a href="/#proyectos" className={`pro-nav-link pro-dropdown-toggle ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
              {t('navbar.projects')} <span className="arrow"></span>
            </a>
            <div className={`pro-dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              {projectLinks.map((link) => (
                <NavLink key={link.label} to={link.to} className="pro-dropdown-item" onClick={closeMobileMenu}>
                  {t(link.label)}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="language-switcher">
            <button onClick={() => changeLanguage('es')} className={`flag-button ${i18n.language === 'es' ? 'active' : ''}`} aria-label="Switch to Spanish">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3"><path fill="#C60B1E" d="M0 0h5v3H0z"/><path fill="#FFC400" d="M0 1h5v1H0z"/></svg>
            </button>
            <button onClick={() => changeLanguage('en')} className={`flag-button ${i18n.language === 'en' ? 'active' : ''}`} aria-label="Switch to English">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/><path d="M0 0l60 30m0-30L0 30" clipPath="url(#a)" stroke="#C8102E" strokeWidth="4"/><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/></svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
