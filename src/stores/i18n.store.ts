import { defineStore } from 'pinia';

interface State {
  locale: string;
}

export const useI18nStore = defineStore('i18n', {
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
    pick: ['locale'],
  },
});
