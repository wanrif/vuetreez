<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useTitle } from '@vueuse/core';
  import { computed, watchEffect } from 'vue';

  import vueImg from '@assets/images/vue.png';
  import viteImg from '@assets/images/vite.png';
  import tailwindImg from '@assets/images/tailwindcss.png';
  import tsImg from '@assets/images/typescript.png';
  import piniaImg from '@assets/images/pinia.png';
  import i18nImg from '@assets/images/vue-i18n.svg';
  import Card from '@components/Card.vue';

  const props = defineProps<{
    headerHeight: number;
  }>();

  const { t } = useI18n();
  const APP_TITLE = import.meta.env.VITE_APP_TITLE as string;
  const title = useTitle();

  watchEffect(() => {
    title.value = `${APP_TITLE} | ${t('nav_home')}`;
  });

  const heightClass = computed<any>(() => ({
    minHeight: `calc(100dvh - ${props.headerHeight}px)`,
  }));

  const techStacks = [
    {
      title: 'Vue 3',
      description: 'Vue 3 is a progressive JavaScript framework for building user interfaces.',
      img: vueImg,
      website: 'https://vuejs.org/',
    },
    {
      title: 'Vite',
      description:
        'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.',
      img: viteImg,
      website: 'https://vitejs.dev/',
    },
    {
      title: 'Tailwind CSS',
      description: 'Tailwind CSS is a utility-first CSS framework.',
      img: tailwindImg,
      website: 'https://tailwindcss.com/',
    },
    {
      title: 'TypeScript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      img: tsImg,
      website: 'https://www.typescriptlang.org/',
    },
    {
      title: 'Pinia',
      description: 'Pinia is a Vue Store that is designed to be easy to use and understand.',
      img: piniaImg,
      website: 'https://pinia.vuejs.org/',
    },
    {
      title: 'Vue I18n',
      description: 'Vue I18n is internationalization plugin for Vue.js',
      img: i18nImg,
      website: 'https://vue-i18n.intlify.dev/',
    },
  ];
</script>

<template>
  <main id="__landingPage" class="container mx-auto px-5 sm:px-10">
    <section :style="heightClass" class="flex pb-5">
      <div class="flex flex-col items-center justify-center gap-5">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-emerald-500">
            {{ t('landing_welcome', { app_name: APP_TITLE }) }}
          </h1>
          <p class="mt-4 text-shark-500 dark:text-shark-400">
            {{ t('landing_description') }}
          </p>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 sm:w-[80%] sm:grid-cols-3">
          <a
            v-for="tech in techStacks"
            :key="tech.title"
            :href="tech.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card :title="tech.title" :description="tech.description" :image="tech.img" :website="tech.website" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
