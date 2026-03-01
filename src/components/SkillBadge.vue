<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { Badge } from "@/components/ui/badge";
import type { SkillName } from "@/types";
import { computed } from "vue";

interface Props {
  icon: SkillName;
}

const props = defineProps<Props>();

const iconMetaMap: Record<SkillName, { name: string; docUrl: string }> = {
  typescript: {
    name: "TypeScript",
    docUrl: "https://www.typescriptlang.org",
  },
  vue: {
    name: "Vue.js",
    docUrl: "https://vuejs.org",
  },
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
  kubernetes: {
    name: "Kubernetes",
    docUrl: "https://kubernetes.io",
  },
  scss: { name: "SCSS", docUrl: "https://sass-lang.com" },
  prisma: { name: "Prisma", docUrl: "https://www.prisma.io" },
  redis: { name: "Redis", docUrl: "https://redis.io" },
  trino: { name: "Trino", docUrl: "https://trino.io" },
  mq: { name: "MQ", docUrl: "https://www.rabbitmq.com" },
  c: { name: "C", docUrl: "https://www.c-language.org" },
  cpp: { name: "C++", docUrl: "https://isocpp.org" },
  swift: { name: "Swift", docUrl: "https://swift.org" },
  react: { name: "React", docUrl: "https://react.dev" },
  py: { name: "Python", docUrl: "https://docs.python.org" },
};

const name = computed(() => iconMetaMap[props.icon].name);

const url = computed(() => iconMetaMap[props.icon].docUrl);

const badgeClass =
  "inline-flex items-center rounded border border-slate-300 bg-white hover:bg-slate-50 px-2.5 py-1 gap-1.5 h-auto text-sm md:text-base";
</script>

<template>
  <Badge
    :as="url ? 'a' : 'span'"
    :href="url"
    :target="url ? '_blank' : undefined"
    :rel="url ? 'noopener noreferrer' : undefined"
    variant="outline"
    :class="badgeClass"
    :aria-label="url ? `${name} (新しいタブで開く)` : undefined"
  >
    <Icon :name="props.icon" class="self-center" />
    <span class="font-medium text-slate-700">{{ name }}</span>
  </Badge>
</template>
