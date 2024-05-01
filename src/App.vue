<script setup lang="ts">
  import { useColorMode } from '@vueuse/core';
  import { ref, watchEffect } from 'vue';

  import Navbar from '@components/Navbar.vue';

  const mode = useColorMode({
    emitAuto: true,
    storageKey: '__vuetreez__theme',
  });

  watchEffect(() => mode.value);

  const height = ref<number>(0);
  const callbackHeight = (value: number) => {
    height.value = value;
  };
</script>

<template>
  <component v-if="$route.meta.isNavbar" :is="Navbar" @headerHeight="callbackHeight" />
  <component :is="$route.meta.header" @headerHeight="callbackHeight" />
  <component v-if="!!$route.meta.layout" :is="$route.meta.layout">
    <RouterView v-slot="{ Component }">
      <component :is="Component" :headerHeight="height" />
    </RouterView>
  </component>
  <RouterView v-else />
</template>

<style scoped></style>
