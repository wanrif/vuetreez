<script setup lang="ts">
  import { useTitle } from '@vueuse/core';
  import { computed, watchEffect } from 'vue';
  import { useI18n } from 'vue-i18n';

  import NotFound from '@assets/images/illustration.svg';

  const props = defineProps<{
    headerHeight: number;
  }>();

  const APP_TITLE = import.meta.env.VITE_APP_TITLE as string;
  const title = useTitle();
  const { t } = useI18n();

  watchEffect(() => {
    title.value = `${APP_TITLE} | ${t('not_found')}`;
  });

  const heightClass = computed<any>(() => ({
    minHeight: `calc(100dvh - ${props.headerHeight}px)`,
  }));
</script>

<template>
  <main id="__notFound" class="mx-6 bg-white dark:bg-shark-950">
    <div :style="heightClass" :class="`container mx-auto px-6 py-12 lg:flex lg:items-center lg:gap-12`">
      <div class="wf-ull lg:w-1/2">
        <p class="text-sm font-medium text-shark-500 dark:text-shark-400">{{ $t('not_found_title') }}</p>
        <h1 class="mt-3 text-2xl font-semibold text-shark-800 dark:text-white md:text-3xl">{{ $t('not_found') }}</h1>
        <p class="mt-4 text-shark-500 dark:text-shark-400">
          {{ $t('not_found_message') }}
        </p>

        <div class="mt-6 flex items-center gap-x-3">
          <button
            @click="$router.back()"
            type="button"
            class="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-shark-700 transition duration-200 ease-in hover:bg-shark-100 focus:outline-none focus:ring-2 focus:ring-shark-500 focus:ring-offset-2 focus:ring-offset-shark-200 dark:border-shark-700 dark:bg-shark-950 dark:text-shark-200 dark:hover:bg-shark-800 dark:focus:ring-shark-600 dark:focus:ring-offset-shark-950 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 rtl:rotate-180"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>{{ $t('not_found_back') }}</span>
          </button>

          <button
            @click="$router.push('/')"
            type="button"
            class="w-1/2 shrink-0 rounded-lg bg-emerald-500 px-5 py-2 text-sm tracking-wide text-white transition duration-200 ease-in hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-200 dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:focus:ring-emerald-600 dark:focus:ring-offset-emerald-950 sm:w-auto"
          >
            {{ $t('not_found_home') }}
          </button>
        </div>
      </div>

      <div class="relative mt-12 w-full text-emerald-500 dark:text-emerald-500 lg:mt-0 lg:w-1/2">
        <img class="w-full max-w-lg lg:mx-auto" :src="NotFound" alt="" />
      </div>
    </div>
  </main>
</template>

<style scoped module="classes"></style>
