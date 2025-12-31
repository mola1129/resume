<script setup lang="ts">
import { computed } from 'vue';
import { SKILLICONS_BASE_URL, ICON_SIZES, BADGE_STYLES } from '@/constants';

interface Props {
	name: string;
	icon: string;
	url?: string;
}

const props = defineProps<Props>();

const iconUrl = computed(() => `${SKILLICONS_BASE_URL}${props.icon}`);
const iconClass = computed(() => `${ICON_SIZES.BADGE} object-contain shrink-0`);
</script>

<template>
	<a
		v-if="url"
		:href="url"
		target="_blank"
		rel="noopener noreferrer"
		:class="BADGE_STYLES.BASE"
	>
		<img
			:src="iconUrl"
			:alt="name"
			:class="iconClass"
			loading="lazy"
		/>
		<span class="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300">{{ name }}</span>
	</a>
	<span v-else :class="BADGE_STYLES.BASE">
		<img
			:src="iconUrl"
			:alt="name"
			:class="iconClass"
			loading="lazy"
		/>
		<span class="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300">{{ name }}</span>
	</span>
</template>
