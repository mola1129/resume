<script setup lang="ts">
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard.vue";

interface Props {
  projects: Project[];
}

defineProps<Props>();
</script>

<template>
  <h2
    class="mb-4 border-b-2 border-slate-900 pb-2 text-xl font-bold text-slate-900 md:text-2xl dark:border-slate-100 dark:text-slate-50"
  >
    Project Experience
  </h2>
  <div class="space-y-8">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.name"
      :project="project"
      :is-last="index === projects.length - 1"
    />
  </div>
</template>
