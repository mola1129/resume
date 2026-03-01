import type { IconName } from "@/lib/icons";

// Skill types
type EnsureSkillName<T extends IconName> = T;

export type SkillName = EnsureSkillName<
  | "typescript"
  | "vue"
  | "nuxt"
  | "nextjs"
  | "astro"
  | "java"
  | "spring"
  | "gradle"
  | "claudecode"
  | "githubcopilot"
  | "codex"
  | "nodejs"
  | "nitro"
  | "mysql"
  | "docker"
  | "kubernetes"
  | "scss"
  | "prisma"
  | "redis"
  | "trino"
  | "mq"
  | "c"
  | "cpp"
  | "swift"
  | "react"
  | "py"
>;

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
