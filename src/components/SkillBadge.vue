<script setup lang="ts">
import { computed } from "vue";
import { Badge } from "@/components/ui/badge";
import { SKILLICONS_BASE_URL, ICON_SIZES } from "@/constants";

interface Props {
  name: string;
  icon: string;
  url?: string;
}

const props = defineProps<Props>();

const iconUrl = computed(() => `${SKILLICONS_BASE_URL}${props.icon}`);
const iconClass = computed(() => `${ICON_SIZES.BADGE} object-contain shrink-0`);

const badgeClass =
  "rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 px-2.5 py-1 gap-1.5 h-auto text-sm md:text-base";
</script>

<template>
  <Badge
    :as="url ? 'a' : 'span'"
    :href="url"
    :target="url ? '_blank' : undefined"
    :rel="url ? 'noopener noreferrer' : undefined"
    variant="outline"
    :class="badgeClass"
    :aria-label="url ? `${name} (新しいタブで開く)` : undefined"
  >
    <img
      :src="iconUrl"
      :alt="name"
      :class="iconClass"
      loading="lazy"
      aria-hidden="true"
    />
    <span class="font-medium text-slate-700 dark:text-slate-300">{{
      name
    }}</span>
  </Badge>
</template>
