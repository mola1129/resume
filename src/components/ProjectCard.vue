<script setup lang="ts">
import { computed } from "vue";
import type { ProjectWithHtml } from "@/types";
import { calculateDuration } from "@/utils/date";
import { TIMELINE_STYLES } from "@/constants";
import { Card } from "@/components/ui/card";
import ProjectTypeIcon from "./ProjectTypeIcon.vue";
import SkillBadge from "./SkillBadge.vue";

interface Props {
  project: ProjectWithHtml;
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
  <article class="relative pl-8">
    <!-- タイムライン縦線 -->
    <div :class="lineClass" aria-hidden="true" />

    <!-- タイムラインドット -->
    <div :class="dotClass" aria-hidden="true" />

    <!-- 期間表示 -->
    <div
      class="mb-3 text-sm font-semibold text-slate-600 md:text-base dark:text-slate-400"
    >
      <time>{{ project.period }}</time>
      <span class="ml-2 font-normal text-slate-500 dark:text-slate-500">
        {{ duration }}
      </span>
    </div>

    <!-- プロジェクトカード -->
    <Card
      class="gap-0 rounded-lg border-slate-200 bg-slate-50 p-6 py-6 shadow-none dark:border-slate-800 dark:bg-slate-900"
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

      <div
        class="project-content mb-5 text-base leading-relaxed text-slate-700 dark:text-slate-300"
        v-html="project.descriptionHtml"
      />

      <div
        v-if="project.achievementsHtml && project.achievementsHtml.length > 0"
        class="mb-5"
      >
        <h4
          class="mb-2 text-sm font-semibold tracking-wide text-slate-600 uppercase md:text-base dark:text-slate-400"
        >
          成果・実績
        </h4>
        <ul
          class="project-content space-y-1.5 text-sm text-slate-700 md:text-base dark:text-slate-300"
        >
          <li
            v-for="(achievement, index) in project.achievementsHtml"
            :key="index"
            class="flex gap-2"
          >
            <span
              class="shrink-0 text-slate-400 dark:text-slate-600"
              aria-hidden="true"
              >▸</span
            >
            <span v-html="achievement" />
          </li>
        </ul>
      </div>

      <div>
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
    </Card>
  </article>
</template>
