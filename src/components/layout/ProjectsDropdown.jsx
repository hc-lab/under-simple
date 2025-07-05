import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { principalesProyectos } from '../../data/principalesProyectos';

const ProjectsDropdown = ({ isDropdownOpen, toggleDropdown, closeMobileMenu, setDropdownOpen }) => {
  const { t } = useTranslation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setDropdownOpen]);

  const projectLinks = Object.keys(principalesProyectos).map(key => ({
    to: `/proyectos/${key}`,
    label: principalesProyectos[key].dropdownTitle,
  }));

  return (
    <div className="pro-dropdown" ref={dropdownRef}>
      <a 
        href="/#proyectos" 
        className={`pro-nav-link pro-dropdown-toggle ${isDropdownOpen ? 'active' : ''}`} 
        onClick={toggleDropdown}
      >
        {t('navbar.projects')} <span className="arrow"></span>
      </a>
      <div className={`pro-dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
        {projectLinks.map((link) => (
          <NavLink 
            key={link.label} 
            to={link.to} 
            className="pro-dropdown-item" 
            onClick={closeMobileMenu}
          >
            {t(link.label)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDropdown; 