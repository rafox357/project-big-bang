import type { Project } from '../types';
import { PROJECT_CATEGORIES, TECH_DOMAINS } from './constants';

// Filter projects by category
export function filterProjectsByCategory(projects: Project[], category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}

// Filter projects by technology domain
export function filterProjectsByDomain(projects: Project[], domain: string): Project[] {
  return projects.filter(project => project.domains.includes(domain));
}

// Filter projects by development stage
export function filterProjectsByStage(projects: Project[], stage: string): Project[] {
  return projects.filter(project => project.stage === stage);
}

// Get related projects
export function getRelatedProjects(project: Project, allProjects: Project[]): Project[] {
  return allProjects.filter(p => 
    p.id !== project.id && 
    (p.category === project.category || 
     p.domains.some(domain => project.domains.includes(domain)))
  ).slice(0, 3);
}