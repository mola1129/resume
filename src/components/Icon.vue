<script setup lang="ts">
import type { IconName } from "@/lib/icons";
import { iconColorMap, iconMap } from "@/lib/icons";

interface Props {
  name: IconName;
}

const props = defineProps<Props>();
</script>

<template>
  <component
    :is="iconMap[props.name]"
    v-if="iconMap[props.name]"
    class="h-5 w-5 shrink-0"
    :style="
      iconColorMap[props.name] ? { color: iconColorMap[props.name] } : undefined
    "
    aria-hidden="true"
  />
</template>
