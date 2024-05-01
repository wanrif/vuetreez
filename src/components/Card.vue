<script setup lang="ts">
  const props = defineProps<{
    title: string;
    description: string;
    image: string;
  }>();
</script>

<template>
  <div
    id="__card"
    class="group flex h-full w-full transform items-center gap-3 rounded-md border-2 border-transparent bg-shark-100 p-4 shadow transition duration-200 ease-in hover:-translate-y-1 hover:scale-105 hover:border-emerald-500 hover:bg-shark-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-shark-100 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-emerald-500 group-hover:border-transparent group-hover:bg-shark-200 group-hover:shadow-lg group-focus:-translate-y-1 group-focus:scale-105 group-focus:border-emerald-500 group-focus:border-transparent group-focus:bg-shark-200 group-focus:shadow-lg dark:bg-shark-900 dark:hover:-translate-y-1 dark:hover:scale-105 dark:hover:border-emerald-500 dark:hover:bg-shark-800 dark:hover:shadow-lg dark:focus:ring-shark-900 dark:focus:ring-offset-shark-900 dark:group-hover:-translate-y-1 dark:group-hover:scale-105 dark:group-hover:border-emerald-500 dark:group-hover:bg-shark-800 dark:group-hover:shadow-lg dark:group-focus:-translate-y-1 dark:group-focus:scale-105 dark:group-focus:border-emerald-500 dark:group-focus:bg-shark-800 dark:group-focus:shadow-lg"
  >
    <div class="flex">
      <div class="flex flex-1 gap-3">
        <img :src="props.image" :alt="props.title" class="h-10 w-10" />
        <div>
          <h1 class="text-2xl font-bold text-emerald-500">{{ props.title }}</h1>
          <p class="mt-1 text-shark-500 dark:text-shark-400">{{ props.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
