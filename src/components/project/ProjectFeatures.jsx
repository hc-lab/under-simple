import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import DynamicIcon from '../DynamicIcon';

const ProjectFeatures = ({ project, projectId }) => {
  const { t } = useTranslation();
  const i18nProjectId = projectId.replace('flor-de-', '');

  if (!project.features || project.features.length === 0) {
    return null;
  }

  return (
    <section className="proyecto-features" id="caracteristicas">
      <div className="proyecto-section-header">
        <h2>{t('projectDetails.featuresTitle')}</h2>
        <div className="elegant-line"></div>
      </div>
      <div className="proyecto-features-grid">
        {project.features.map((feature) => (
          <div className="proyecto-feature" key={feature.id}>
            <div className="proyecto-feature-icon">
              <DynamicIcon name={feature.icon} size={48} />
            </div>
            <h3>
              {t(`projects.${i18nProjectId}.features.feature${feature.id}.title`)}
            </h3>
            <p>
              {t(`projects.${i18nProjectId}.features.feature${feature.id}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectFeatures.propTypes = {
  project: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectFeatures; 