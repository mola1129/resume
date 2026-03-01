<script setup lang="ts">
import type { IconName } from "@/lib/icons";
import { iconMap, iconColorMap } from "@/lib/icons";

type IconSize = "sm" | "md";

const sizeClasses: Record<IconSize, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
};

interface Props {
  name: IconName;
  size?: IconSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: "sm",
});
</script>

<template>
  <component
    :is="iconMap[props.name]"
    v-if="iconMap[props.name]"
    :class="[sizeClasses[props.size], 'shrink-0']"
    :style="
      iconColorMap[props.name]
        ? { color: iconColorMap[props.name] }
        : undefined
    "
    aria-hidden="true"
  />
</template>
