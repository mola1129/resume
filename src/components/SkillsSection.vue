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
    class="mb-4 border-b-2 border-slate-900 pb-2 text-xl font-bold text-slate-900 md:text-2xl"
  >
    技術スキル
  </h2>
  <div class="space-y-5">
    <div v-for="category in categories" :key="category.category">
      <div class="mb-2">
        <h3 class="text-base font-semibold text-slate-900 md:text-lg">
          {{ category.category }}
        </h3>
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillBadge
          v-for="skill in category.skills"
          :key="skill"
          :icon="skill"
        />
      </div>
    </div>
  </div>
</template>
