export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  category: string;
  features: string[];
  status: 'stable' | 'beta' | 'alpha';
  version: string;
  documentation: string;
  demo: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  projects: Project[];
}

export const categories: Category[] = [
  { 
    id: 'web', 
    name: 'Web Solutions', 
    description: 'Privacy-focused web frameworks and tools for building secure applications',
    projects: [
      {
        id: 'web-framework',
        title: 'Privacy-First Web Framework',
        description: 'A modern web framework built with privacy and security at its core.',
        image: '/images/projects/web-framework.jpg',
        tags: ['TypeScript', 'React', 'Privacy'],
        github: 'https://github.com/project-big-bang/web-framework',
        category: 'web',
        features: ['Encryption', 'Secure Routing', 'Privacy Controls'],
        status: 'beta',
        version: '0.1.0',
        documentation: '/docs/web-framework',
        demo: '/demo/web-framework'
      },
      {
        id: 'gdpr-kit',
        title: 'GDPR Compliance Kit',
        description: 'Tools and utilities for making web applications GDPR compliant.',
        image: '/images/projects/gdpr-kit.jpg',
        tags: ['Privacy', 'Compliance', 'Web'],
        github: 'https://github.com/project-big-bang/gdpr-kit',
        category: 'web',
        features: ['Data Mapping', 'Consent Management', 'Data Subject Rights'],
        status: 'stable',
        version: '1.0.0',
        documentation: '/docs/gdpr-kit',
        demo: '/demo/gdpr-kit'
      }
    ]
  },
  { 
    id: 'apps', 
    name: 'Applications', 
    description: 'Secure and private applications for everyday use, from messaging to productivity',
    projects: [
      {
        id: 'secure-messaging',
        title: 'Secure Messaging App',
        description: 'End-to-end encrypted messaging application with zero knowledge architecture.',
        image: '/images/projects/messaging-app.jpg',
        tags: ['Encryption', 'Mobile', 'P2P'],
        github: 'https://github.com/project-big-bang/secure-messaging',
        category: 'apps',
        features: ['End-to-End Encryption', 'Zero Knowledge Architecture', 'Secure File Sharing'],
        status: 'alpha',
        version: '0.0.1',
        documentation: '/docs/secure-messaging',
        demo: '/demo/secure-messaging'
      },
      {
        id: 'private-notes',
        title: 'Private Notes',
        description: 'Encrypted note-taking app with local-first storage.',
        image: '/images/projects/private-notes.jpg',
        tags: ['Encryption', 'Productivity', 'Local-First'],
        github: 'https://github.com/project-big-bang/private-notes',
        category: 'apps',
        features: ['Encryption', 'Local-First Storage', 'Secure Syncing'],
        status: 'stable',
        version: '1.1.0',
        documentation: '/docs/private-notes',
        demo: '/demo/private-notes'
      }
    ]
  },
  { 
    id: 'os', 
    name: 'Secure OS', 
    description: 'Operating system projects focused on security, privacy, and user control',
    projects: [
      {
        id: 'privacy-os',
        title: 'Privacy OS',
        description: 'A secure operating system designed for privacy-conscious users.',
        image: '/images/projects/privacy-os.jpg',
        tags: ['Linux', 'Security', 'Privacy'],
        github: 'https://github.com/project-big-bang/privacy-os',
        category: 'os',
        features: ['Encryption', 'Secure Boot', 'Privacy Controls'],
        status: 'stable',
        version: '1.2.0',
        documentation: '/docs/privacy-os',
        demo: '/demo/privacy-os'
      },
      {
        id: 'secure-boot',
        title: 'Secure Boot Manager',
        description: 'Custom secure boot implementation for Privacy OS.',
        image: '/images/projects/secure-boot.jpg',
        tags: ['Security', 'Boot', 'TPM'],
        github: 'https://github.com/project-big-bang/secure-boot',
        category: 'os',
        features: ['Secure Boot', 'TPM Support', 'Customizable Boot Process'],
        status: 'beta',
        version: '0.2.0',
        documentation: '/docs/secure-boot',
        demo: '/demo/secure-boot'
      }
    ]
  },
  { 
    id: 'hardware', 
    name: 'Hardware', 
    description: 'Open-source hardware projects for secure computing and privacy protection',
    projects: [
      {
        id: 'open-hardware',
        title: 'Open Hardware Hub',
        description: 'Open-source hardware designs for secure computing.',
        image: '/images/projects/hardware-hub.jpg',
        tags: ['Hardware', 'Open Source'],
        github: 'https://github.com/project-big-bang/open-hardware',
        category: 'hardware',
        features: ['Open-Source Designs', 'Secure Computing', 'Customizable Hardware'],
        status: 'alpha',
        version: '0.0.1',
        documentation: '/docs/open-hardware',
        demo: '/demo/open-hardware'
      },
      {
        id: 'privacy-key',
        title: 'Privacy Key',
        description: 'Hardware security key for two-factor authentication.',
        image: '/images/projects/privacy-key.jpg',
        tags: ['Hardware', '2FA', 'Security'],
        github: 'https://github.com/project-big-bang/privacy-key',
        category: 'hardware',
        features: ['Two-Factor Authentication', 'Hardware Security Key', 'Secure Encryption'],
        status: 'stable',
        version: '1.0.0',
        documentation: '/docs/privacy-key',
        demo: '/demo/privacy-key'
      }
    ]
  },
  { 
    id: 'software', 
    name: 'Software', 
    description: 'Privacy-focused software solutions designed to run on our secure hardware platforms',
    projects: [
      {
        id: 'secureos-companion',
        title: 'SecureOS Companion',
        description: 'Essential software suite optimized for Privacy OS and our hardware platforms.',
        image: '/images/projects/secureos-companion.jpg',
        tags: ['Software', 'Privacy OS', 'Security'],
        github: 'https://github.com/project-big-bang/secureos-companion',
        category: 'software',
        features: ['Encryption', 'Secure Networking', 'Privacy Controls'],
        status: 'stable',
        version: '1.1.0',
        documentation: '/docs/secureos-companion',
        demo: '/demo/secureos-companion'
      },
      {
        id: 'hardware-suite',
        title: 'Hardware Management Suite',
        description: 'Advanced tools for managing and monitoring our privacy-focused hardware.',
        image: '/images/projects/hardware-suite.jpg',
        tags: ['Software', 'Hardware', 'Management'],
        github: 'https://github.com/project-big-bang/hardware-suite',
        category: 'software',
        features: ['Hardware Monitoring', 'Secure Configuration', 'Customizable Management'],
        status: 'beta',
        version: '0.2.0',
        documentation: '/docs/hardware-suite',
        demo: '/demo/hardware-suite'
      },
      {
        id: 'privacy-toolkit',
        title: 'Privacy Toolkit',
        description: 'Collection of privacy-enhancing tools and utilities for our hardware platforms.',
        image: '/images/projects/privacy-toolkit.jpg',
        tags: ['Privacy', 'Tools', 'Security'],
        github: 'https://github.com/project-big-bang/privacy-toolkit',
        category: 'software',
        features: ['Encryption', 'Secure Networking', 'Privacy Controls'],
        status: 'alpha',
        version: '0.0.1',
        documentation: '/docs/privacy-toolkit',
        demo: '/demo/privacy-toolkit'
      }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  for (const category of categories) {
    const project = category.projects.find(p => p.id === id);
    if (project) return project;
  }
  return undefined;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};
