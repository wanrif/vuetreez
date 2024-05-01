<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import _ from 'lodash';
  import type { OnClickOutsideHandler } from '@vueuse/core';
  import { vOnClickOutside } from '@vueuse/components';
  import { useI18nStore } from '@stores/i18n.store';

  import id from '@assets/images/id.png';
  import en from '@assets/images/en.png';

  const dropdown = ref<boolean>(false);
  const { locale, availableLocales } = useI18n();
  const flag = ref<string>('');
  const i18nStore = useI18nStore();
  i18nStore.$persist();

  const dropdownHandler: OnClickOutsideHandler = () => {
    dropdown.value = false;
  };

  const changeLanguage = (newLocale: string) => {
    i18nStore.setLocale(newLocale);
    locale.value = newLocale;
    dropdown.value = false;
    flag.value = newLocale === 'id' ? id : en;
  };

  onMounted(() => {
    if (_.isEmpty(i18nStore.locale)) {
      i18nStore.setLocale(locale.value);
    }
    locale.value = i18nStore.locale;
    flag.value = locale.value === 'id' ? id : en;
  });
</script>

<template>
  <div id="__language" class="relative flex cursor-pointer flex-col items-center text-sm font-semibold">
    <button @click.stop="dropdown = !dropdown" type="button" class="flex items-center gap-2 uppercase">
      <img :src="flag" alt="flag" class="h-3 w-5" />
      {{ locale }}
    </button>
    <Transition name="bounce">
      <div
        v-show="dropdown"
        v-on-click-outside.bubble="dropdownHandler"
        class="absolute z-10 mt-7 flex w-[60px] flex-col overflow-x-hidden rounded-lg border border-shark-200 bg-shark-50 shadow dark:border-shark-900 dark:bg-shark-900"
      >
        <div
          v-for="locale in availableLocales"
          :key="`locale-${locale}`"
          @click.prevent="changeLanguage(locale)"
          class="flex cursor-pointer items-center justify-start gap-2 px-1.5 py-1 hover:bg-emerald-400 dark:hover:bg-emerald-600"
        >
          <img :src="locale === 'id' ? id : en" alt="flag" class="h-3 w-5" />
          <span class="uppercase">
            {{ locale }}
          </span>
        </div>
      </div>
    </Transition>
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
