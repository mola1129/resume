import type { Component } from "vue";

// Simple Icons (brand/tech)
import IconAstro from "~icons/simple-icons/astro";
import IconC from "~icons/simple-icons/c";
import IconCplusplus from "~icons/simple-icons/cplusplus";
import IconClaude from "~icons/simple-icons/claude";
import IconDocker from "~icons/simple-icons/docker";
import IconGithub from "~icons/simple-icons/github";
import IconGithubcopilot from "~icons/simple-icons/githubcopilot";
import IconGradle from "~icons/simple-icons/gradle";
import IconKubernetes from "~icons/simple-icons/kubernetes";
import IconLinkedin from "~icons/simple-icons/linkedin";
import IconMysql from "~icons/simple-icons/mysql";
import IconNodedotjs from "~icons/simple-icons/nodedotjs";
import IconNextdotjs from "~icons/simple-icons/nextdotjs";
import IconNuxt from "~icons/simple-icons/nuxt";
import IconOpenjdk from "~icons/simple-icons/openjdk";
import IconOpenai from "~icons/simple-icons/openai";
import IconPrisma from "~icons/simple-icons/prisma";
import IconPython from "~icons/simple-icons/python";
import IconRabbitmq from "~icons/simple-icons/rabbitmq";
import IconReact from "~icons/simple-icons/react";
import IconRedis from "~icons/simple-icons/redis";
import IconSass from "~icons/simple-icons/sass";
import IconSpring from "~icons/simple-icons/spring";
import IconSwift from "~icons/simple-icons/swift";
import IconTrino from "~icons/simple-icons/trino";
import IconTypescript from "~icons/simple-icons/typescript";
import IconVuedotjs from "~icons/simple-icons/vuedotjs";

// Lucide (UI icons)
import IconMail from "~icons/lucide/mail";

// UnJS
import IconNitro from "~icons/unjs/nitro";

// Icon component registry
export const iconMap = {
  typescript: IconTypescript,
  vue: IconVuedotjs,
  nuxt: IconNuxt,
  nextjs: IconNextdotjs,
  astro: IconAstro,
  java: IconOpenjdk,
  spring: IconSpring,
  gradle: IconGradle,
  claudecode: IconClaude,
  githubcopilot: IconGithubcopilot,
  codex: IconOpenai,
  nodejs: IconNodedotjs,
  nitro: IconNitro,
  mysql: IconMysql,
  docker: IconDocker,
  kubernetes: IconKubernetes,
  scss: IconSass,
  prisma: IconPrisma,
  redis: IconRedis,
  trino: IconTrino,
  mq: IconRabbitmq,
  c: IconC,
  cpp: IconCplusplus,
  swift: IconSwift,
  react: IconReact,
  py: IconPython,
  github: IconGithub,
  linkedin: IconLinkedin,
  mail: IconMail,
} satisfies Record<string, Component>;

export type IconName = keyof typeof iconMap;

// Brand colors
export const brandColors: Partial<Record<IconName, string>> = {
  typescript: "#3178C6",
  vue: "#4FC08D",
  nuxt: "#00DC82",
  nextjs: "#000000",
  astro: "#BC52EE",
  java: "#000000",
  spring: "#6DB33F",
  gradle: "#02303A",
  claudecode: "#D97757",
  githubcopilot: "#000000",
  codex: "#000000",
  nodejs: "#5FA04E",
  mysql: "#4479A1",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  scss: "#CC6699",
  prisma: "#2D3748",
  redis: "#FF4438",
  trino: "#DD00A1",
  mq: "#FF6600",
  c: "#A8B9CC",
  cpp: "#00599C",
  swift: "#F05138",
  react: "#61DAFB",
  py: "#3776AB",
  github: "#181717",
  linkedin: "#0A66C2",
};

// Skill metadata (display name + documentation URL)
export const skillMetaMap = {
  typescript: {
    name: "TypeScript",
    docUrl: "https://www.typescriptlang.org",
  },
  vue: { name: "Vue.js", docUrl: "https://vuejs.org" },
  nuxt: { name: "Nuxt.js", docUrl: "https://nuxt.com" },
  nextjs: { name: "Next.js", docUrl: "https://nextjs.org" },
  astro: { name: "Astro", docUrl: "https://astro.build" },
  java: { name: "Java", docUrl: "https://www.java.com/" },
  spring: {
    name: "Spring Boot",
    docUrl: "https://spring.io/projects/spring-boot",
  },
  gradle: { name: "Gradle", docUrl: "https://gradle.org" },
  claudecode: {
    name: "Claude Code",
    docUrl: "https://docs.anthropic.com/en/docs/claude-code",
  },
  githubcopilot: {
    name: "GitHub Copilot",
    docUrl: "https://github.com/features/copilot",
  },
  codex: { name: "Codex", docUrl: "https://openai.com" },
  nodejs: { name: "Node.js", docUrl: "https://nodejs.org" },
  nitro: { name: "Nitro", docUrl: "https://nitro.unjs.io" },
  mysql: { name: "MySQL", docUrl: "https://dev.mysql.com" },
  docker: { name: "Docker", docUrl: "https://docs.docker.com" },
  kubernetes: { name: "Kubernetes", docUrl: "https://kubernetes.io" },
  scss: { name: "SCSS", docUrl: "https://sass-lang.com" },
  prisma: { name: "Prisma", docUrl: "https://www.prisma.io" },
  redis: { name: "Redis", docUrl: "https://redis.io" },
  trino: { name: "Trino", docUrl: "https://trino.io" },
  mq: { name: "MQ", docUrl: "https://www.rabbitmq.com" },
  c: { name: "C", docUrl: "https://en.cppreference.com/w/c" },
  cpp: { name: "C++", docUrl: "https://isocpp.org" },
  swift: { name: "Swift", docUrl: "https://swift.org" },
  react: { name: "React", docUrl: "https://react.dev" },
  py: { name: "Python", docUrl: "https://docs.python.org" },
} as const satisfies Partial<
  Record<IconName, { name: string; docUrl: string }>
>;

export type SkillName = keyof typeof skillMetaMap;
