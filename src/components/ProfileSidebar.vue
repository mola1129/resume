<script setup lang="ts">
import type { Profile } from '@/types';
import { ICON_SIZES } from '@/constants';

interface Props {
	profile: Profile;
	profileImageSrc: string;
}

const props = defineProps<Props>();
const iconClass = `${ICON_SIZES.CONTACT} shrink-0`;
</script>

<template>
	<div class="space-y-6">
		<!-- 写真 -->
		<div class="flex justify-center md:justify-start">
			<img
				:src="profileImageSrc"
				:alt="profile.name"
				class="w-40 h-40 rounded-full object-cover border-2 border-slate-300 dark:border-slate-700"
				width="160"
				height="160"
			/>
		</div>

		<!-- 名前・役職 -->
		<div class="text-center md:text-left">
			<h1 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
				{{ profile.name }}
			</h1>
			<p class="text-base md:text-lg text-slate-700 dark:text-slate-300">
				{{ profile.title }}
			</p>
		</div>

		<!-- 連絡先 -->
		<div>
			<h2 class="text-xs font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wide">
				Contact
			</h2>
			<div class="space-y-2">
				<a
					v-for="contact in profile.contacts"
					:key="contact.type"
					:href="contact.url"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
				>
					<svg v-if="contact.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="iconClass">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
					</svg>
					<img
						v-else-if="contact.icon"
						:src="`https://skillicons.dev/icons?i=${contact.icon}`"
						:alt="contact.type"
						:class="iconClass"
						loading="lazy"
					/>
					<span class="break-all">{{ contact.type }}</span>
				</a>
			</div>
		</div>
	</div>
</template>
