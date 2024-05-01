<script setup lang="ts">
  import { useElementSize } from '@vueuse/core';
  import _ from 'lodash';
  import { onMounted, ref } from 'vue';

  import ThemeSwitcher from '@components/ThemeSwitcher.vue';
  import Language from '@components/Language.vue';

  const emit = defineEmits<{
    (event: 'headerHeight', height: number): void;
  }>();

  const headerWrapper = ref<HTMLElement | null>(null);
  const { height } = useElementSize(headerWrapper);

  onMounted(() => {
    emit('headerHeight', height.value);
  });
</script>

<template>
  <div ref="headerWrapper" id="__header" class="relative p-5">
    <div class="mx-0 flex items-center justify-between sm:mx-32">
      <div class="flex w-fit cursor-pointer items-center">
        <div class="flex-1">
          <RouterLink to="/" class="text-2xl font-bold text-emerald-500">
            {{ $t('app_name') }}
          </RouterLink>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <ThemeSwitcher />
        <Language />
      </div>
    </div>
  </div>
</template>

<style scoped module="classes"></style>
