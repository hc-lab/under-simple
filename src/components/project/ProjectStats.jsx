import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ProjectStats = ({ project, projectId }) => {
  const { t } = useTranslation();
  const i18nProjectId = projectId.replace('flor-de-', '');

  if (!project.stats || project.stats.length === 0) {
    return null;
  }

  return (
    <section className="proyecto-datos-tecnicos">
      <div className="proyecto-section-header">
        <h2>{t('projectDetails.technicalData')}</h2>
      </div>
      <div className="datos-tecnicos-grid">
        {project.stats.map((stat) => (
          <div className="dato-tecnico-item" key={stat.key}>
            <span className="dato-main">{stat.main}</span>
            <span className="dato-label">
              {t(`projects.${i18nProjectId}.stats.${stat.key}.label`)}
            </span>
            <span className="dato-description">
              {t(`projects.${i18nProjectId}.stats.${stat.key}.description`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectStats.propTypes = {
  project: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectStats; 