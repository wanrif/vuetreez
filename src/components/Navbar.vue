<script setup lang="ts">
  import { BxMenu } from '@kalimahapps/vue-icons';
  import { useElementSize } from '@vueuse/core';
  import { onMounted, reactive, ref, watchEffect } from 'vue';

  import ThemeSwitcher from '@components/ThemeSwitcher.vue';
  import Language from '@components/Language.vue';

  interface Nav {
    name: string;
    path: string;
  }

  const navs: Nav[] = reactive([
    { name: 'nav_home', path: '/' },
    { name: 'nav_about', path: '/about' },
    { name: 'nav_notfound', path: '/not-found' },
  ]);

  const isOpen = ref<boolean>(false);

  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };

  watchEffect(() => {
    if (isOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const emit = defineEmits<{
    headerHeight: [height: number];
  }>();

  const navbarWrapper = ref<HTMLElement | null>(null);
  const { height } = useElementSize(navbarWrapper);

  onMounted(() => {
    emit('headerHeight', height.value);
  });
</script>

<template>
  <div ref="navbarWrapper" id="__navbar" class="relative">
    <header class="p-5">
      <nav class="mx-0 flex items-center sm:mx-32">
        <div class="flex-1">
          <RouterLink to="/" class="relative z-20 text-2xl font-bold text-emerald-500">
            {{ $t('app_name') }}
          </RouterLink>
        </div>
        <div class="hidden items-center gap-5 sm:flex">
          <RouterLink
            v-for="nav in navs"
            :key="nav.name"
            :to="nav.path"
            class="cursor-pointer text-base font-semibold"
            active-class="text-emerald-600 dark:text-emerald-500"
            exact-active-class="text-emerald-600 dark:text-emerald-500"
          >
            {{ $t(nav.name) }}
          </RouterLink>
          <ThemeSwitcher />
          <Language />
        </div>

        <button class="z-20 block sm:hidden" type="button" @click.prevent="toggleMenu">
          <BxMenu class="h-8 w-8" />
        </button>
      </nav>
    </header>

    <Transition :duration="550" name="nested">
      <div
        v-if="isOpen"
        class="outer fixed top-0 z-10 flex min-h-dvh w-full bg-shark-100 pt-[72px] dark:bg-shark-950 sm:hidden"
      >
        <div
          class="flex max-h-[calc(100dvh-100px)] w-full flex-col items-center gap-5 overflow-y-scroll text-xl font-semibold"
        >
          <RouterLink
            v-for="nav in navs"
            :key="nav.name"
            :to="nav.path"
            @click="isOpen = false"
            class="inner cursor-pointer"
            active-class="text-emerald-600 dark:text-emerald-500"
            exact-active-class="text-emerald-600 dark:text-emerald-500"
          >
            {{ $t(nav.name) }}
          </RouterLink>
          <ThemeSwitcher class="inner" />
          <div class="inner relative flex flex-col items-center">
            <Language />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .nested-enter-active,
  .nested-leave-active {
    transition: all 0.3s ease-in-out;
  }
  /* delay leave of parent element */
  .nested-leave-active {
    transition-delay: 0.25s;
  }

  .nested-enter-from,
  .nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
  }

  /* we can also transition nested elements using nested selectors */
  .nested-enter-active .inner,
  .nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
  }
  /* delay enter of nested element */
  .nested-enter-active .inner {
    transition-delay: 0.25s;
  }

  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translateX(30px);
    /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
    opacity: 0.001;
  }
</style>
