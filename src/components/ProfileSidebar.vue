<script setup lang="ts">
import type { Profile } from "@/types";
import { ICON_SIZES } from "@/constants";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-vue-next";

interface Props {
  profile: Profile;
  profileImageSrc: string;
}

defineProps<Props>();
const iconClass = `${ICON_SIZES.CONTACT} shrink-0`;
</script>

<template>
  <div class="space-y-6">
    <!-- 写真 -->
    <div class="flex justify-center md:justify-start">
      <Avatar class="h-40 w-40 border-2 border-slate-300 dark:border-slate-700">
        <AvatarImage :src="profileImageSrc" :alt="profile.name" />
      </Avatar>
    </div>

    <!-- 名前・役職 -->
    <div class="text-center md:text-left">
      <h1
        class="mb-2 text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-50"
      >
        {{ profile.name }}
      </h1>
      <p class="text-base text-slate-700 md:text-lg dark:text-slate-300">
        {{ profile.description }}
      </p>
    </div>

    <!-- 連絡先 -->
    <nav aria-label="連絡先">
      <h2
        class="mb-3 text-xs font-semibold tracking-wide text-slate-900 uppercase dark:text-slate-50"
      >
        Contact
      </h2>
      <div class="space-y-2">
        <a
          v-for="contact in profile.contacts"
          :key="contact.type"
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900 md:text-base dark:text-slate-400 dark:hover:text-slate-100"
          :aria-label="`${contact.type} (新しいタブで開く)`"
        >
          <Mail
            v-if="contact.icon === 'mail'"
            :class="iconClass"
            aria-hidden="true"
          />
          <img
            v-else-if="contact.icon"
            :src="`https://skillicons.dev/icons?i=${contact.icon}`"
            :alt="contact.type"
            :class="iconClass"
            loading="lazy"
            aria-hidden="true"
          />
          <span class="break-all">{{ contact.type }}</span>
        </a>
      </div>
    </nav>
  </div>
</template>
