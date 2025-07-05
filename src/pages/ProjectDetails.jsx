import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { principalesProyectos } from '../data/principalesProyectos';
import { useProjectNavigation } from '../hooks';
import {
  ProjectHero,
  ProjectStats,
  ProjectFeatures,
  ProjectTimeline,
  ProjectGallery,
  ProjectNavigation
} from '../components/project';

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
  const { prevProjectId, nextProjectId } = useProjectNavigation(projectId);

  if (!project) {
    return <div className="container mx-auto text-center py-20">{t('projectDetails.projectNotFound')}</div>;
  }

  return (
    <main>
      <div className="project-details-container">
        <ProjectHero project={project} projectId={projectId} />
        {projectId !== 'prosperidad' && (
          <ProjectStats project={project} projectId={projectId} />
        )}
        <ProjectFeatures project={project} projectId={projectId} />
        <ProjectTimeline project={project} projectId={projectId} />
        <ProjectGallery project={project} projectId={projectId} />
        <ProjectNavigation prevProjectId={prevProjectId} nextProjectId={nextProjectId} />
      </div>
    </main>
  );
};

export default ProjectDetails;