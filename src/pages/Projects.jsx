import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { principalesProyectos } from '../data/principalesProyectos';
import '../styles/projects.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="proyectos-container">
      <div className="proyectos-header">
        <h1>{t('navbar.projects')}</h1>
        <div className="elegant-line"></div>
      </div>
      <div className="proyectos-list">
        {Object.entries(principalesProyectos).map(([projectId, project]) => {
          const i18nProjectId = projectId.replace('flor-de-', '');
          return (
            <NavLink to={`/proyectos/${projectId}`} key={projectId} className="proyecto-list-item-link">
              <div className="proyecto-list-item">
                <div className="proyecto-list-image-container">
                  {project.gallery && project.gallery.length > 0 && (
                    <img src={project.gallery[0]} alt={t(`projects.${i18nProjectId}.title`)} className="proyecto-list-img" />
                  )}
                </div>
                <div className="proyecto-list-text-container">
                  <h3 className="proyecto-list-title">{t(`projects.${i18nProjectId}.title`)}</h3>
                  <p className="proyecto-list-description">{t(`projects.${i18nProjectId}.description`)}</p>
                  <span className="proyecto-list-cta">{t('projectDetails.seeProject')} &rarr;</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
