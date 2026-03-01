<script setup lang="ts">
import Icon from "@/components/Icon.vue";

defineProps<{
  formattedDate: string;
}>();

const REPO_URL = "https://github.com/mola1129/resume";
</script>

<template>
  <footer
    class="border-border bg-background border-t px-4 py-6 text-center text-sm"
  >
    <div class="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
      <p class="text-slate-600">最終更新: {{ formattedDate }}</p>
      <span class="hidden text-slate-600 sm:inline">|</span>
      <a
        :href="REPO_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-slate-900"
        aria-label="ソースコード (GitHubで新しいタブで開く)"
      >
        <Icon name="github" />
        <span>ソースコード</span>
      </a>
    </div>
  </footer>
</template>
