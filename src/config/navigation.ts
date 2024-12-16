import type { NavItem } from '../types';

export const mainNavItems: NavItem[] = [
  {
    label: "Vision",
    href: "/#vision",
    icon: "🎯"
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: "🚀",
    children: [
      { label: "Web Solutions", href: "/projects?category=web" },
      { label: "Applications", href: "/projects?category=apps" },
      { label: "Secure OS", href: "/projects?category=os" },
      { label: "Hardware", href: "/projects?category=hardware" }
    ]
  },
  {
    label: "Documentation",
    href: "/docs",
    icon: "📚"
  },
  {
    label: "Contribute",
    href: "/contribute",
    icon: "🤝"
  }
];