import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: 'Learn Korean Numbers',
    inputLabel: 'Enter a number (0-9999)',
    invalidInput: 'Please enter a number between 0 and 9999',
    footer: 'Korean Number Learning App © 2025',
    switchToCzech: 'Switch to Czech'
  },
  cs: {
    title: 'Učte se korejská čísla',
    inputLabel: 'Zadejte číslo (0-9999)',
    invalidInput: 'Prosím zadejte číslo mezi 0 a 9999',
    footer: 'Aplikace pro učení korejských čísel © 2025',
    switchToEnglish: 'Přepnout na angličtinu'
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});