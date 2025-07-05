import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ProjectHero = ({ project, projectId }) => {
  const { t } = useTranslation();
  const i18nProjectId = projectId.replace('flor-de-', '');
  const heroImage = project.gallery && project.gallery.length > 0 ? project.gallery[0] : null;

  return (
    <section className="proyecto-hero">
      <div className="hero-content-left">
        <h1>{t(`projects.${i18nProjectId}.title`)}</h1>
        <div className="elegant-line"></div>
        <p className="proyecto-description">{t(`projects.${i18nProjectId}.description`)}</p>
      </div>
      <div className="hero-image-right">
        {heroImage && (
          <img 
            src={heroImage} 
            alt={`Imagen principal de ${t(`projects.${i18nProjectId}.title`)}`} 
          />
        )}
      </div>
    </section>
  );
};

ProjectHero.propTypes = {
  project: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectHero; 