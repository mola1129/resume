// Skill types
export interface Skill {
  name: string;
  icon: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

// Profile types
export interface Contact {
  type: string;
  url?: string;
  icon?: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  contacts: Contact[];
}

// Project types
export interface Technology {
  name: string;
  icon: string;
}

export type ProjectType = "web" | "mobile" | "infrastructure" | "data";

export interface Project {
  name: string;
  period: string;
  company?: string;
  role: string;
  description: string;
  type: ProjectType;
  technologies: Technology[];
  achievements?: string[];
}

export interface ProjectWithHtml extends Project {
  descriptionHtml: string;
  achievementsHtml?: string[];
}
