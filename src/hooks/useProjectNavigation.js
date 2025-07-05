import { useMemo } from 'react';
import { principalesProyectos } from '../data/principalesProyectos';

/**
 * Hook personalizado para manejar la navegación entre proyectos
 * @param {string} currentProjectId - ID del proyecto actual
 * @returns {object} Información de navegación
 */
export const useProjectNavigation = (currentProjectId) => {
  return useMemo(() => {
    const projectIds = Object.keys(principalesProyectos);
    const currentIndex = projectIds.indexOf(currentProjectId);
    
    const prevProjectId = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
    const nextProjectId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null;
    
    return {
      prevProjectId,
      nextProjectId,
      currentIndex,
      totalProjects: projectIds.length,
      hasPrevious: prevProjectId !== null,
      hasNext: nextProjectId !== null
    };
  }, [currentProjectId]);
}; 