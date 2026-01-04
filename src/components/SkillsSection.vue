<script setup lang="ts">
import type { SkillCategory } from "@/types";
import SkillBadge from "./SkillBadge.vue";

interface Props {
  categories: SkillCategory[];
}

defineProps<Props>();
</script>

<template>
  <h2
    class="mb-4 border-b-2 border-slate-900 pb-2 text-xl font-bold text-slate-900 md:text-2xl dark:border-slate-100 dark:text-slate-50"
  >
    Skills
  </h2>
  <div class="space-y-5">
    <div v-for="category in categories" :key="category.category">
      <div class="mb-2">
        <h3
          class="text-base font-semibold text-slate-900 md:text-lg dark:text-slate-50"
        >
          {{ category.category }}
        </h3>
        <p class="text-sm text-slate-600 md:text-base dark:text-slate-400">
          {{ category.description }}
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillBadge
          v-for="skill in category.items"
          :key="skill.name"
          :name="skill.name"
          :icon="skill.icon"
          :url="skill.url"
        />
      </div>
    </div>
  </div>
</template>
