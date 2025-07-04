import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { principalesProyectos } from '../data/principalesProyectos';
import DynamicIcon from '../components/DynamicIcon'; // Importa el componente DynamicIcon

// Import all necessary CSS files
import '../styles/proyecto.css';
import '../styles/proyecto-hero.css';
import '../styles/proyecto-gallery.css';
import '../styles/proyecto-navigation.css';
import '../styles/proyecto-timeline.css';
import '../styles/proyecto-stats.css';

const ProjectDetails = () => {
  const { t } = useTranslation();
  const { projectId } = useParams();
  const project = principalesProyectos[projectId];

  const i18nProjectId = projectId.replace('flor-de-', '');

  const projectIds = Object.keys(principalesProyectos);
  const currentIndex = projectIds.indexOf(projectId);
  const prevProjectId = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
  const nextProjectId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null;

  const prevProjectTitle = prevProjectId ? t(`projects.${prevProjectId.replace('flor-de-', '')}.title`) : '';
  const nextProjectTitle = nextProjectId ? t(`projects.${nextProjectId.replace('flor-de-', '')}.title`) : '';

  const isFlorDeKantu = projectId === 'flor-de-kantu';

  if (!project) {
    return <div className="container mx-auto text-center py-20">{t('projectDetails.projectNotFound')}</div>;
  }

  const heroImage = project.gallery && project.gallery.length > 0 ? project.gallery[0] : null;

  return (
    <main>
      <title>{t(`projects.${i18nProjectId}.title`)} - {t('projectDetails.breadcrumbProjects')}</title>
      <meta name="description" content={t(`projects.${i18nProjectId}.description`)} />

      <div className="project-details-container">
        <section className="proyecto-hero">
          <div className="hero-content-left">
            <h1>{t(`projects.${i18nProjectId}.title`)}</h1>
            <div className="elegant-line"></div>
            <p className="proyecto-description">{t(`projects.${i18nProjectId}.description`)}</p>
          </div>
          <div className="hero-image-right">
            {heroImage && <img src={heroImage} alt={`Imagen principal de ${t(`projects.${i18nProjectId}.title`)}`} />}
          </div>
        </section>

        {isFlorDeKantu && (
          <section className="proyecto-datos-tecnicos">
            <div className="proyecto-section-header">
              <h2>{t('projectDetails.technicalData')}</h2>
            </div>
            <div className="datos-tecnicos-grid">
              {project.stats.map((stat) => (
                <div className="dato-tecnico-item" key={stat.key}>
                  <span className="dato-main">{stat.main}</span>
                  <span className="dato-label">{t(`projects.${i18nProjectId}.stats.${stat.key}.label`)}</span>
                  <span className="dato-description">{t(`projects.${i18nProjectId}.stats.${stat.key}.description`)}</span>
                </div>
              ))}
            </div>
          </section>
        )}

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
                <h3>{t(`projects.${i18nProjectId}.features.feature${feature.id}.title`)}</h3>
                <p>{t(`projects.${i18nProjectId}.features.feature${feature.id}.desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {isFlorDeKantu ? (
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
                    <span className="timeline-phase-alt">{t('projectDetails.timelinePhase', { phase: index + 1 })}</span>
                    <h3>{t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)}</h3>
                    <p>{t(`projects.${i18nProjectId}.timeline.phase${item.id}.desc`)}</p>
                    <span className={`timeline-status ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span>
                  </div>
                );
                const image = (
                  <div className="timeline-image-container-alt">
                    <img src={item.image} alt={t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)} />
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
        ) : (
          project.timeline && project.timeline.length > 0 && (
            <section className="proyecto-timeline">
              <div className="proyecto-section-header">
                <h2>{t('projectDetails.timelineTitle')}</h2>
                <div className="elegant-line"></div>
              </div>
              <div className="timeline-container">
                {project.timeline.map((item, index) => (
                  <div className="timeline-item" key={item.id}>
                    <div className="timeline-image-container">
                      {item.image && <img src={item.image} alt={t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)} className="timeline-image" />}
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-phase">{t('projectDetails.timelinePhase', { phase: index + 1 })}</span>
                      <h3>{t(`projects.${i18nProjectId}.timeline.phase${item.id}.title`)}</h3>
                      <p>{t(`projects.${i18nProjectId}.timeline.phase${item.id}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        )}

        {project.gallery && project.gallery.length > 1 && (
          <section className="proyecto-gallery">
            <div className="proyecto-section-header">
              <h2>{t('projectDetails.galleryTitle')}</h2>
              <div className="elegant-line"></div>
            </div>
            <div className="proyecto-gallery-grid">
              {project.gallery.map((image, index) => (
                <div className="proyecto-gallery-item" key={index}>
                  <img src={image} alt={`${t('projectDetails.galleryTitle')} de ${t(`projects.${i18nProjectId}.title`)} - ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

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
      </div>
    </main>
  );
};

export default ProjectDetails;