import { createApp } from 'vue';
import '@assets/css/main.css';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { parse, stringify } from 'zipson';

import App from './App.vue';
import router from '@router/index';
import i18n from '@i18n/index';

/**
 * create pinia instance with options
 *
 * @see [Pinia Plugins](https://pinia.vuejs.org/core-concepts/plugins.html)
 * @see [Pinia Persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/advanced.html)
 *
 */
const pinia = createPinia();
pinia.use(
  createPersistedState({
    key: (id) => `__vuetreez__${id}`,
    storage: localStorage,
    serializer: {
      deserialize: (value) => parse(value),
      serialize: (value) => stringify(value),
    },
  })
);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.mount('#app');
