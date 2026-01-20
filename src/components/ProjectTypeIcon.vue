<script setup lang="ts">
import type { ProjectType } from "@/types";
import { ICON_SIZES } from "@/constants";
import { Globe, Smartphone, Server, Database } from "lucide-vue-next";

interface Props {
  type: ProjectType;
}

defineProps<Props>();
const iconClass = `${ICON_SIZES.PROJECT_TYPE} text-slate-700 dark:text-slate-300`;
</script>

<template>
  <div
    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700"
    aria-hidden="true"
  >
    <Globe v-if="type === 'web'" :class="iconClass" />
    <Smartphone v-else-if="type === 'mobile'" :class="iconClass" />
    <Server v-else-if="type === 'infrastructure'" :class="iconClass" />
    <Database v-else-if="type === 'data'" :class="iconClass" />
  </div>
</template>
