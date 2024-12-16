import { z } from 'zod';
import { PROJECT_CATEGORIES, DEVELOPMENT_STAGES, TECH_DOMAINS } from './constants';

// Type-safe schema for project data
export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.enum(Object.values(PROJECT_CATEGORIES) as [string, ...string[]]),
  stage: z.enum(Object.values(DEVELOPMENT_STAGES) as [string, ...string[]]),
  domains: z.array(z.enum(Object.values(TECH_DOMAINS) as [string, ...string[]])),
  features: z.array(z.string()),
  technologies: z.array(z.string()),
  links: z.object({
    github: z.string().optional(),
    demo: z.string().optional(),
    docs: z.string().optional()
  }),
  dependencies: z.array(z.string()).optional(),
  integrations: z.array(z.string()).optional()
});