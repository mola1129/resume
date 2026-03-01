<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { Badge } from "@/components/ui/badge";
import type { IconName } from "@/lib/icons";

interface Props {
  name: string;
  icon: IconName;
  url?: string;
}

defineProps<Props>();

const badgeClass =
  "inline-flex items-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 px-2.5 py-1 gap-1.5 h-auto text-sm md:text-base";
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
    <Icon :name="icon" class="self-center" />
    <span class="font-medium text-slate-700 dark:text-slate-300">{{
      name
    }}</span>
  </Badge>
</template>
