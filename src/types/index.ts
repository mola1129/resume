import type { IconName } from "@/lib/icons";

// Skill types
export interface Skill {
  name: string;
  icon: IconName;
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
  icon?: IconName;
}

export interface Profile {
  name: string;
  description: string;
  contacts: Contact[];
}

// Project types
export interface Technology {
  name: string;
  icon: IconName;
}

export interface Project {
  name: string;
  period: string;
  company?: string;
  role: string;
  description: string;
  technologies: Technology[];
  achievements?: string[];
}

export interface ProjectWithHtml extends Project {
  descriptionHtml: string;
  achievementsHtml?: string[];
}
