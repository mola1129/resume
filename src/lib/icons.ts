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

export const iconMap = {
  ts: IconTypescript,
  typescript: IconTypescript,
  vue: IconVuedotjs,
  nuxtjs: IconNuxt,
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
  nitrojs: IconNitro,
  mysql: IconMysql,
  docker: IconDocker,
  kubernetes: IconKubernetes,
  scss: IconSass,
  prisma: IconPrisma,
  redis: IconRedis,
  trino: IconTrino,
  mq: IconRabbitmq,
  rabbitmq: IconRabbitmq,
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

// Simple Icons official brand colors
export const iconColorMap: Partial<Record<IconName, string>> = {
  ts: "#3178C6",
  typescript: "#3178C6",
  vue: "#4FC08D",
  nuxtjs: "#00DC82",
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
  rabbitmq: "#FF6600",
  c: "#A8B9CC",
  cpp: "#00599C",
  swift: "#F05138",
  react: "#61DAFB",
  py: "#3776AB",
  github: "#181717",
  linkedin: "#0A66C2",
};
