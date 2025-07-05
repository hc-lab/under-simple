import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useMobileMenu } from '../../hooks';
import LanguageSwitcher from './LanguageSwitcher';
import ProjectsDropdown from './ProjectsDropdown';
import '../../styles/Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const { 
    isMobileMenuOpen, 
    isDropdownOpen, 
    toggleMobileMenu, 
    closeMobileMenu, 
    toggleDropdown, 
    setDropdownOpen 
  } = useMobileMenu();

  const navLinks = [
    { to: '/', label: 'navbar.home' },
    { to: '/nosotros', label: 'navbar.about' },
    { to: '/contacto', label: 'navbar.contact' },
  ];

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
      className="pro-header bg-white/80 backdrop-blur shadow-md fixed w-full z-50 transition-all duration-300"
      role="banner"
      aria-label="Navegación principal"
    >
      <div className="pro-navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="pro-navbar-logo flex items-center gap-2" onClick={closeMobileMenu} aria-label="Ir a inicio">
          <div className="logo-text-container flex items-center text-primary-700 font-bold text-xl">
            <span className="logo-line-1">UNDER<span className="diamond-large ml-1">◆</span></span>
          </div>
        </NavLink>

        {/* Botón hamburguesa para mobile */}
        <button
          className={`hamburger-menu md:hidden flex flex-col justify-center items-center w-10 h-10 rounded transition hover:bg-primary-100 ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="block w-6 h-0.5 bg-primary-700 mb-1 transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-primary-700 mb-1 transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-primary-700 transition-all duration-300" />
        </button>

        {/* Overlay para mobile */}
        <div className={`pro-overlay ${isMobileMenuOpen ? 'active' : ''} fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMobileMenu}></div>

        {/* Navegación principal */}
        <nav
          className={`pro-navbar-nav flex-1 flex items-center justify-end gap-6 md:gap-8 font-medium transition-all duration-300 ${isMobileMenuOpen ? 'mobile-active flex-col absolute top-16 left-0 w-full bg-white/95 shadow-lg z-50 py-6 px-4' : 'hidden md:flex static bg-transparent shadow-none py-0 px-0'}`}
          id="mobile-menu"
        >
          {navLinks.map((link) => <React.Fragment key={link.label}>{renderNavLink(link)}</React.Fragment>)}

          <ProjectsDropdown
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            closeMobileMenu={closeMobileMenu}
            setDropdownOpen={setDropdownOpen}
          />

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
