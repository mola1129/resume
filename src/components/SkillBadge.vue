<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { Badge } from "@/components/ui/badge";
import { skillMetaMap } from "@/lib/icons";
import type { SkillName } from "@/types";
import { computed } from "vue";

interface Props {
  icon: SkillName;
}

const props = defineProps<Props>();

const name = computed(() => skillMetaMap[props.icon].name);

const url = computed(() => skillMetaMap[props.icon].docUrl);

const badgeClass =
  "inline-flex items-center rounded border border-slate-300 bg-white hover:bg-slate-50 px-2.5 py-1 gap-1.5 h-auto text-sm md:text-base";
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
    <Icon :name="props.icon" class="self-center" />
    <span class="font-medium text-slate-700">{{ name }}</span>
  </Badge>
</template>
