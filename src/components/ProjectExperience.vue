<script setup lang="ts">
import type { Project } from '@/types';
import ProjectCard from './ProjectCard.vue';

interface Props {
	projects: Project[];
}

const props = defineProps<Props>();
</script>

<template>
	<h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 pb-2 border-b-2 border-slate-900 dark:border-slate-100">
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
