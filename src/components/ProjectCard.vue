<script setup lang="ts">
import { Card } from "@/components/ui/card";
import type { ProjectWithHtml } from "@/types";
import { calculateDuration } from "@/utils/date";
import { computed } from "vue";
import SkillBadge from "./SkillBadge.vue";

interface Props {
  project: ProjectWithHtml;
  isLast: boolean;
}

const props = defineProps<Props>();

const isOngoing = computed(() => props.project.period.includes("現在"));
const dotClass = computed(
  () =>
    `absolute left-0 top-[8px] w-2.5 h-2.5 rounded-full ring-4 ring-white ${isOngoing.value ? "bg-blue-500" : "bg-slate-900"}`,
);
const lineClass = computed(
  () =>
    `absolute left-[5px] top-[8px] bottom-0 w-px bg-slate-300 ${!props.isLast ? "-mb-8" : ""}`,
);

const duration = computed(() => calculateDuration(props.project.period));

// 期間を開始・終了に分割してISO 8601形式に変換
const period = computed(() => {
  const [startRaw, endRaw] = props.project.period.split(/\s*-\s*/);
  return {
    startRaw,
    endRaw,
    start: startRaw.replace("/", "-"),
    end: endRaw && endRaw !== "現在" ? endRaw.replace("/", "-") : undefined,
  };
});
</script>

<template>
  <article class="relative pl-8">
    <!-- タイムライン縦線 -->
    <div :class="lineClass" aria-hidden="true" />

    <!-- タイムラインドット -->
    <div :class="dotClass" aria-hidden="true" />

    <!-- 期間表示 -->
    <div class="mb-3 text-sm font-semibold text-slate-600 md:text-base">
      <time :datetime="period.start">{{ period.startRaw }}</time> -
      <time v-if="period.end" :datetime="period.end">{{ period.endRaw }}</time
      ><span v-else>現在</span>
      <span class="ml-2 font-normal text-slate-500">
        {{ duration }}
      </span>
    </div>

    <!-- プロジェクトカード -->
    <Card class="gap-0 rounded-lg border-slate-200 bg-slate-50 p-6 shadow-none">
      <!-- プロジェクト名 -->
      <div class="mb-4">
        <h3 class="mb-1 text-lg font-bold text-slate-900 md:text-xl">
          {{ project.name }}
        </h3>
        <p v-if="project.company" class="text-sm text-slate-600 md:text-base">
          {{ project.company }} / {{ project.role }}
        </p>
      </div>

      <div
        class="project-content mb-5 text-base leading-relaxed text-slate-700"
        v-html="project.descriptionHtml"
      />

      <div
        v-if="project.achievementsHtml && project.achievementsHtml.length > 0"
        class="mb-5"
      >
        <h4
          class="mb-2 text-sm font-semibold tracking-wide text-slate-600 uppercase md:text-base"
        >
          成果・実績
        </h4>
        <ul
          class="project-content space-y-1.5 text-sm text-slate-700 md:text-base"
        >
          <li
            v-for="(achievement, index) in project.achievementsHtml"
            :key="`${project.name}-achievement-${index}`"
            class="flex gap-2"
          >
            <span class="shrink-0 text-slate-400" aria-hidden="true">▸</span>
            <span v-html="achievement" />
          </li>
        </ul>
      </div>

      <div>
        <h4
          class="mb-2 text-sm font-semibold tracking-wide text-slate-600 uppercase md:text-base"
        >
          使用技術
        </h4>
        <div class="flex flex-wrap gap-2">
          <SkillBadge
            v-for="(skill, index) in project.skills"
            :key="`${project.name}-${skill}-${index}`"
            :icon="skill"
          />
        </div>
      </div>
    </Card>
  </article>
</template>
