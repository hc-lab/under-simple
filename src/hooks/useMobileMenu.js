import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar el menú móvil
 * @returns {object} Estado y funciones del menú móvil
 */
export const useMobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
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
  
  // Lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);
  
  return {
    isMobileMenuOpen,
    isDropdownOpen,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    setDropdownOpen
  };
}; 