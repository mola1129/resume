<script setup lang="ts">
import type { SkillCategory } from '@/types';
import SkillBadge from './SkillBadge.vue';

interface Props {
	categories: SkillCategory[];
}

const props = defineProps<Props>();
</script>

<template>
	<h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 pb-2 border-b-2 border-slate-900 dark:border-slate-100">
		Skills
	</h2>
	<div class="space-y-5">
		<div v-for="category in categories" :key="category.category">
			<div class="mb-2">
				<h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
					{{ category.category }}
				</h3>
				<p class="text-sm md:text-base text-slate-600 dark:text-slate-400">
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
