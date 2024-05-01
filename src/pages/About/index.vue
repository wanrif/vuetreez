<script setup lang="ts">
  import { useTitle } from '@vueuse/core';
  import { computed, watchEffect } from 'vue';
  import { useI18n } from 'vue-i18n';

  const props = defineProps<{
    headerHeight: number;
  }>();

  const APP_TITLE = import.meta.env.VITE_APP_TITLE as string;
  const title = useTitle();
  const { t } = useI18n();

  watchEffect(() => {
    title.value = `${APP_TITLE} | ${t('nav_about')}`;
  });

  const heightClass = computed<any>(() => ({
    minHeight: `calc(100dvh - ${props.headerHeight}px)`,
  }));
</script>

<template>
  <main id="__about" class="container mx-auto px-5">
    <div :style="heightClass" :class="`flex flex-col items-center justify-center`">
      <h1 class="text-5xl font-semibold text-emerald-600 dark:text-emerald-500">About</h1>
      <p class="text-lg font-medium">This is the about page</p>
    </div>
  </main>
</template>

<style scoped></style>
