import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ProjectGallery = ({ project, projectId }) => {
  const { t } = useTranslation();
  const i18nProjectId = projectId.replace('flor-de-', '');

  if (!project.gallery || project.gallery.length <= 1) {
    return null;
  }

  return (
    <section className="proyecto-gallery">
      <div className="proyecto-section-header">
        <h2>{t('projectDetails.galleryTitle')}</h2>
        <div className="elegant-line"></div>
      </div>
      <div className="proyecto-gallery-grid">
        {project.gallery.map((image, index) => (
          <div className="proyecto-gallery-item" key={index}>
            <img 
              src={image} 
              alt={`${t('projectDetails.galleryTitle')} de ${t(`projects.${i18nProjectId}.title`)} - ${index + 1}`} 
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectGallery.propTypes = {
  project: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectGallery; 