<script setup lang="ts">
  import { onMounted, computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import type { OnClickOutsideHandler } from '@vueuse/core';
  import { vOnClickOutside } from '@vueuse/components';
  import { useI18nStore } from '@stores/i18n.store';

  import idFlag from '@assets/images/id.png';
  import enFlag from '@assets/images/en.png';

  const dropdown = ref<boolean>(false);
  const { locale, availableLocales } = useI18n();
  const i18nStore = useI18nStore();
  i18nStore.$persist();

  const flag = computed(() => (locale.value === 'id' ? idFlag : enFlag));

  const dropdownHandler: OnClickOutsideHandler = () => {
    dropdown.value = false;
  };

  const changeLanguage = (newLocale: string) => {
    i18nStore.setLocale(newLocale);
    locale.value = newLocale;
    dropdown.value = false;
  };

  onMounted(() => {
    if (!i18nStore.locale) {
      i18nStore.setLocale(locale.value);
    } else {
      locale.value = i18nStore.locale;
    }
  });
</script>

<template>
  <div id="__language" class="relative flex cursor-pointer flex-col items-center text-sm font-semibold">
    <button @click.stop="dropdown = !dropdown" type="button" class="flex items-center gap-2 uppercase">
      <img :src="flag" alt="flag" class="h-3 w-5" />
      {{ locale }}
    </button>
    <transition name="bounce">
      <div
        v-show="dropdown"
        v-on-click-outside.bubble="dropdownHandler"
        class="absolute z-10 mt-7 flex w-[60px] flex-col overflow-x-hidden rounded-lg border border-shark-200 bg-shark-50 shadow dark:border-shark-900 dark:bg-shark-900"
      >
        <div
          v-for="locale in availableLocales"
          :key="locale"
          @click.prevent="changeLanguage(locale)"
          class="flex cursor-pointer items-center justify-start gap-2 px-1.5 py-1 hover:bg-emerald-400 dark:hover:bg-emerald-600"
        >
          <img :src="locale === 'id' ? idFlag : enFlag" alt="flag" class="h-3 w-5" />
          <span class="uppercase">{{ locale }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
