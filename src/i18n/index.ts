import { createI18n, type I18nOptions } from 'vue-i18n';

/**
 * import locale messages resource from json for global scope
 */
import en from '@i18n/en.json';
import id from '@i18n/id.json';

/**
 * define messages for i18n
 */
const messages = {
  en,
  id,
};

/**
 * create i18n instance with options
 * @see [Vue-i18n Composition API](https://vue-i18n.intlify.dev/guide/advanced/composition#integrate-with-vue-i18n)
 * @see [Vue-i18n TypeScript Support](https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition)
 */

const options: I18nOptions = {
  locale: navigator.language.split('-')[0], // set locale from browser
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages,
};

const i18n = createI18n<false, typeof options>(options);

export default i18n;
