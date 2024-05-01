<script setup lang="ts"></script>

<template>
  <div :class="classes.mainLayout">
    <slot />
  </div>
</template>

<style scoped module="classes">
  .mainLayout {
    max-width: 100%;
  }
</style>
