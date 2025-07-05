import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ProjectTimeline = ({ project, projectId }) => {
  const { t } = useTranslation();
  const i18nProjectId = projectId.replace('flor-de-', '');
  const isFlorDeKantu = projectId === 'flor-de-kantu';

  if (!project.timeline || project.timeline.length === 0) {
    return null;
  }

  if (isFlorDeKantu) {
    return (
      <section className="proyecto-timeline fk-timeline-alt">
        <div className="proyecto-section-header">
          <h2>{t('projectDetails.timelineTitle')}</h2>
          <div className="elegant-line"></div>
        </div>
        <div className="timeline-container-alt">
          {project.timeline.map((item, index) => {
            const isCardLeft = index % 2 === 0;
            const card = (
              <div className="timeline-card">
                <div className="timeline-phase-number">
                  <span className="phase-number">{index + 1}</span>
                </div>
                <span className="timeline-phase-alt">
                  {t('projectDetails.timelinePhase', { phase: index + 1 })}
                </span>
                <h3>
                  {t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)}
                </h3>
                <p>
                  {t(`projects.${i18nProjectId}.timeline.phase${item.id}.desc`)}
                </p>
                <span className={`timeline-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
              </div>
            );
            const image = (
              <div className="timeline-image-container-alt">
                <img 
                  src={item.image} 
                  alt={t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)} 
                />
              </div>
            );
            return (
              <div className="timeline-item-alt" key={item.id}>
                <div className="timeline-content-col">{isCardLeft ? card : image}</div>
                <div className="timeline-content-col">{isCardLeft ? image : card}</div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="proyecto-timeline">
      <div className="proyecto-section-header">
        <h2>{t('projectDetails.timelineTitle')}</h2>
        <div className="elegant-line"></div>
      </div>
      <div className="timeline-container">
        {project.timeline.map((item, index) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-phase-number">
              <span className="phase-number">{index + 1}</span>
            </div>
            <div className="timeline-image-container">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)} 
                  className="timeline-image" 
                />
              )}
            </div>
            <div className="timeline-content">
              <span className="timeline-phase">
                {t('projectDetails.timelinePhase', { phase: index + 1 })}
              </span>
              <h3>
                {t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)}
              </h3>
              <p>
                {t(`projects.${i18nProjectId}.timeline.phase${item.id}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectTimeline.propTypes = {
  project: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectTimeline; 