import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { principalesProyectos } from '../../data/principalesProyectos';

const ProjectsSection = () => {
  const { t } = useTranslation();
      const featuredProjects = Object.entries(principalesProyectos).filter(([id]) => id !== 'san-antonio');

  return (
    <section id="noticias" className="mining-news section-divider">
      <div className="mining-section-header">
        <h2>{t('projectsSection.title')}</h2>
        <div className="description-boxes flex flex-col md:flex-row gap-8 mt-10">
          <div className="description-box flex-1 bg-white rounded-2xl shadow-sm p-8 flex items-center justify-center min-h-[140px]">
            <p className="text-neutral-800 text-lg md:text-xl font-light leading-relaxed text-center">
              Tenemos hoy en nuestro portafolio operaciones mineras de polimetálicos (2,500 toneladas mensuales) y otros 2,300 Hectáreas tituladas de proyectos Green Field, que serán desarrollados en los próximos 24 meses.
            </p>
          </div>
          <div className="description-box flex-1 bg-white rounded-2xl shadow-sm p-8 flex items-center justify-center min-h-[140px]">
            <p className="text-neutral-800 text-lg md:text-xl font-light leading-relaxed text-center">
              Nuestro modelo de operación integra gestión eficiente de costos y compromiso con el entorno y los grupos de interés, respaldado por un sólido desempeño operativo y avances sostenidos en producción.
            </p>
          </div>
        </div>
      </div>
      <div className="project-cards-container flex flex-wrap justify-center gap-8 py-6">
        {featuredProjects.map(([projectId, project]) => (
          <Link
            to={`/proyectos/${projectId}`}
            key={projectId}
            className="project-card-wrapper group focus:outline-none focus:ring-2 focus:ring-primary-400 rounded-xl"
          >
            <div className="project-card relative w-72 h-80 rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-200 flex flex-col">
              <div className="project-card-image relative w-full h-44 overflow-hidden">
                {project.gallery && project.gallery.length > 0 && (
                  <img
                    src={project.gallery[0]}
                    alt={t(project.title)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="project-card-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>
              </div>
              <div className="project-card-title absolute bottom-0 left-0 w-full px-6 py-4 text-white text-center z-10">
                <h3 className="text-lg font-semibold drop-shadow">{t(project.title)}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {};

export default ProjectsSection;
