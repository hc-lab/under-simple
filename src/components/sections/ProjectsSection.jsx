import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { principalesProyectos } from '../../data/principalesProyectos';

const ProjectsSection = () => {
  const { t } = useTranslation();
      const featuredProjects = Object.entries(principalesProyectos).filter(([id]) => id !== 'san-antonio');

  return (
    <section id="noticias" className="mining-news">
      <div className="mining-section-header">
        <h2>{t('projectsSection.title')}</h2>
        <div className="description-boxes">
          <div className="description-box">
            <p className="portfolio-description">{t('projectsSection.description1')}</p>
          </div>
          <div className="description-box">
            <p className="portfolio-description">{t('projectsSection.description2')}</p>
          </div>
        </div>
      </div>
      <div className="project-cards-container">
        <div className="project-row">
          {featuredProjects.map(([projectId, project]) => (
            <Link to={`/proyectos/${projectId}`} key={projectId} className="project-card-wrapper">
              <div className="project-card">
                <div className="project-card-image">
                  {project.gallery && project.gallery.length > 0 && <img src={project.gallery[0]} alt={t(project.title)} />}
                  <div className="project-card-overlay"></div>
                </div>
                <div className="project-card-title">
                  <h3>{t(project.title)}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
