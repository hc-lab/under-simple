import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProjectNavigation = ({ prevProjectId, nextProjectId }) => {
  const { t } = useTranslation();

  const getProjectTitle = (projectId) => {
    if (!projectId) return '';
    const i18nProjectId = projectId.replace('flor-de-', '');
    return t(`projects.${i18nProjectId}.title`);
  };

  const prevProjectTitle = getProjectTitle(prevProjectId);
  const nextProjectTitle = getProjectTitle(nextProjectId);

  return (
    <section className="proyecto-navigation">
      {prevProjectId ? (
        <Link to={`/proyectos/${prevProjectId}`} className="nav-link prev">
          <span>{t('projectDetails.prevProject')}</span>
          <h3>&larr; {prevProjectTitle}</h3>
        </Link>
      ) : (
        <div className="nav-link-placeholder" />
      )}
      
      <Link to="/proyectos" className="nav-link all-projects">
        {t('projectDetails.allProjects')}
      </Link>
      
      {nextProjectId ? (
        <Link to={`/proyectos/${nextProjectId}`} className="nav-link next">
          <span>{t('projectDetails.nextProject')}</span>
          <h3>{nextProjectTitle} &rarr;</h3>
        </Link>
      ) : (
        <div className="nav-link-placeholder" />
      )}
    </section>
  );
};

ProjectNavigation.propTypes = {
  prevProjectId: PropTypes.string,
  nextProjectId: PropTypes.string,
};

export default ProjectNavigation; 