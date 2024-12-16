// Date formatting utilities
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Project status formatting
export function formatProjectStatus(stage: string): string {
  return stage.charAt(0).toUpperCase() + stage.slice(1);
}

// Technology stack formatting
export function formatTechStack(technologies: string[]): string {
  return technologies.join(' • ');
}