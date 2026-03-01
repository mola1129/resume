import type { IconName, SkillName } from "@/lib/icons";

// SkillName is auto-derived from skillMetaMap keys in icons.ts
export type { SkillName } from "@/lib/icons";

export interface SkillCategory {
  category: string;
  skills: SkillName[];
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
export interface Project {
  name: string;
  period: string;
  company?: string;
  role: string;
  description: string;
  skills: SkillName[];
  achievements?: string[];
}

export interface ProjectWithHtml extends Project {
  descriptionHtml: string;
  achievementsHtml?: string[];
}
