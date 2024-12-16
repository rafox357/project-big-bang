import { z } from 'zod';
import { ProjectSchema } from '../utils/validation';

// Project type derived from Zod schema
export type Project = z.infer<typeof ProjectSchema>;

// Component Props types
export interface ProjectCardProps {
  project: Project;
  showDetails?: boolean;
}

export interface ProjectGridProps {
  projects: Project[];
  filter?: string;
  showFilters?: boolean;
}

export interface ProjectDetailsProps {
  project: Project;
  showRelated?: boolean;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}