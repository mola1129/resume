<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '@/types';
import { calculateDuration } from '@/utils/date';
import { TIMELINE_STYLES } from '@/constants';
import ProjectTypeIcon from './ProjectTypeIcon.vue';
import SkillBadge from './SkillBadge.vue';

interface Props {
	project: Project;
	isLast: boolean;
}

const props = defineProps<Props>();

const isOngoing = computed(() => props.project.period.includes('現在'));
const dotClass = computed(() =>
	`${TIMELINE_STYLES.DOT.BASE} ${isOngoing.value ? TIMELINE_STYLES.DOT.ONGOING : TIMELINE_STYLES.DOT.COMPLETED}`
);
const lineClass = computed(() =>
	`${TIMELINE_STYLES.LINE} ${!props.isLast ? '-mb-8' : ''}`
);
const duration = computed(() => calculateDuration(props.project.period));
</script>

<template>
	<div class="relative pl-8">
		<!-- タイムライン縦線 -->
		<div :class="lineClass"></div>

		<!-- タイムラインドット -->
		<div :class="dotClass"></div>

		<!-- 期間表示 -->
		<div class="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mb-3">
			{{ project.period }}
			<span class="ml-2 font-normal text-slate-500 dark:text-slate-500">
				{{ duration }}
			</span>
		</div>

		<!-- プロジェクトカード -->
		<div class="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
			<!-- プロジェクト名とタイプアイコン -->
			<div class="flex items-start gap-3 mb-4">
				<ProjectTypeIcon :type="project.type" />

				<div class="flex-1">
					<h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
						{{ project.name }}
					</h3>
					<p v-if="project.company" class="text-sm md:text-base text-slate-600 dark:text-slate-400">
						{{ project.company }} / {{ project.role }}
					</p>
				</div>
			</div>

			<p class="text-base text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
				{{ project.description }}
			</p>

			<div class="mb-5">
				<h4 class="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
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
				<h4 class="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
					成果・実績
				</h4>
				<ul class="space-y-1.5 text-sm md:text-base text-slate-700 dark:text-slate-300">
					<li v-for="achievement in project.achievements" :key="achievement" class="flex gap-2">
						<span class="text-slate-400 dark:text-slate-600 shrink-0">▸</span>
						<span>{{ achievement }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
