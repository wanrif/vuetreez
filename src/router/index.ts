import { createWebHistory, createRouter } from 'vue-router';

import MainLayout from '@layouts/MainLayout.vue';
import Header from '@components/Header.vue';
import LandingPage from '@pages/LandingPage/index.vue';
import About from '@pages/About/index.vue';
import NotFound from '@pages/NotFound/index.vue';

const routes = [
  {
    path: '/',
    name: 'Main Layout',
    meta: {
      layout: MainLayout,
      isNavbar: true,
    },
    children: [
      {
        path: '/',
        name: 'Landing Page',
        component: LandingPage,
      },
      { path: '/about', name: 'About', component: About },
    ],
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      layout: MainLayout,
      isNavbar: false,
      header: Header,
    },
    props: true,
  },
];

/**
 * create router instance with options
 *
 * @see [Vue Router](https://router.vuejs.org/)
 *
 * @returns {Router}
 *
 * @example
 * import { createWebHistory, createRouter } from 'vue-router';
 *
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
