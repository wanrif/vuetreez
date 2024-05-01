import { defineStore } from 'pinia';

interface State {
  locale: string;
}

export const useI18nStore = defineStore({
  id: 'i18n',
  state: (): State => ({
    locale: '',
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale;
    },
  },
  getters: {},
  persist: {
    key: 'locale',
    paths: ['locale'],
  },
});
