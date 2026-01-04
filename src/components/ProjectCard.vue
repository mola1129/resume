<script setup lang="ts">
import { computed } from "vue";
import type { Project } from "@/types";
import { calculateDuration } from "@/utils/date";
import { TIMELINE_STYLES } from "@/constants";
import ProjectTypeIcon from "./ProjectTypeIcon.vue";
import SkillBadge from "./SkillBadge.vue";

interface Props {
  project: Project;
  isLast: boolean;
}

const props = defineProps<Props>();

const isOngoing = computed(() => props.project.period.includes("現在"));
const dotClass = computed(
  () =>
    `${TIMELINE_STYLES.DOT.BASE} ${isOngoing.value ? TIMELINE_STYLES.DOT.ONGOING : TIMELINE_STYLES.DOT.COMPLETED}`,
);
const lineClass = computed(
  () => `${TIMELINE_STYLES.LINE} ${!props.isLast ? "-mb-8" : ""}`,
);
const duration = computed(() => calculateDuration(props.project.period));
</script>

<template>
  <div class="relative pl-8">
    <!-- タイムライン縦線 -->
    <div :class="lineClass" />

    <!-- タイムラインドット -->
    <div :class="dotClass" />

    <!-- 期間表示 -->
    <div
      class="mb-3 text-sm font-semibold text-slate-600 md:text-base dark:text-slate-400"
    >
      {{ project.period }}
      <span class="ml-2 font-normal text-slate-500 dark:text-slate-500">
        {{ duration }}
      </span>
    </div>

    <!-- プロジェクトカード -->
    <div
      class="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
    >
      <!-- プロジェクト名とタイプアイコン -->
      <div class="mb-4 flex items-start gap-3">
        <ProjectTypeIcon :type="project.type" />

        <div class="flex-1">
          <h3
            class="mb-1 text-lg font-bold text-slate-900 md:text-xl dark:text-slate-50"
          >
            {{ project.name }}
          </h3>
          <p
            v-if="project.company"
            class="text-sm text-slate-600 md:text-base dark:text-slate-400"
          >
            {{ project.company }} / {{ project.role }}
          </p>
        </div>
      </div>

      <p
        class="mb-5 text-base leading-relaxed text-slate-700 dark:text-slate-300"
      >
        {{ project.description }}
      </p>

      <div class="mb-5">
        <h4
          class="mb-2 text-sm font-semibold tracking-wide text-slate-600 uppercase md:text-base dark:text-slate-400"
        >
          使用技術
        </h4>
        <div class="flex flex-wrap gap-2">
          <SkillBadge
            v-for="tech in project.technologies"
            :key="tech.name"
            :name="tech.name"
            :icon="tech.icon"
          />
        </div>
      </div>

      <div v-if="project.achievements && project.achievements.length > 0">
        <h4
          class="mb-2 text-sm font-semibold tracking-wide text-slate-600 uppercase md:text-base dark:text-slate-400"
        >
          成果・実績
        </h4>
        <ul
          class="space-y-1.5 text-sm text-slate-700 md:text-base dark:text-slate-300"
        >
          <li
            v-for="achievement in project.achievements"
            :key="achievement"
            class="flex gap-2"
          >
            <span class="shrink-0 text-slate-400 dark:text-slate-600">▸</span>
            <span>{{ achievement }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
