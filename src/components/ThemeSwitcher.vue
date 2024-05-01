<script lang="ts" setup>
  import { useColorMode, useCycleList } from '@vueuse/core';
  import { watchEffect } from 'vue';
  import { AkSun, BsMoonStarsFill, MdComputer } from '@kalimahapps/vue-icons';

  const mode = useColorMode({
    emitAuto: true,
    storageKey: '__vuetreez__theme',
  });

  const { state, next } = useCycleList(['dark', 'light', 'auto'], { initialValue: mode });

  watchEffect(() => (mode.value = state.value as any));
</script>

<template>
  <button class="focus:outline-none" @click="next()">
    <div v-show="state === 'light'">
      <AkSun class="h-5 w-5" />
    </div>
    <div v-show="state === 'dark'">
      <BsMoonStarsFill class="h-5 w-5" />
    </div>
    <div v-show="state === 'auto'">
      <MdComputer class="h-5 w-5" />
    </div>
  </button>
</template>

<style></style>
