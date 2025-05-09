import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: 'Learn Korean Numbers',
    invalidInput: 'Please enter a number between 0 and 9999',
    footer: 'Korean Number Learning App © 2025',
    switchToCzech: 'Switch to Czech',
    sinoKorean: 'Sino-Korean',
    nativeKorean: 'Native Korean',
    enterNumber: 'Enter a number...',
    playSound: 'Play pronunciation',
    generateRandom: 'Generate random number',
    random: 'Random',
    rangeSettings: 'Random Number Range',
    minValue: 'Minimum',
    maxValue: 'Maximum',
    autoPlay: 'Auto Play',
    stop: 'Stop',
    difficulty: 'Difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard'
  },
  cs: {
    title: 'Učte se korejská čísla',
    invalidInput: 'Prosím zadejte číslo mezi 0 a 9999',
    footer: 'Aplikace pro učení korejských čísel © 2025',
    switchToEnglish: 'Přepnout na angličtinu',
    sinoKorean: 'Sino-korejština',
    nativeKorean: 'Původní korejština',
    enterNumber: 'Zadejte číslo...',
    playSound: 'Přehrát výslovnost',
    generateRandom: 'Generovat náhodné číslo',
    random: 'Náhodně',
    rangeSettings: 'Rozsah náhodných čísel',
    minValue: 'Minimum',
    maxValue: 'Maximum',
    autoPlay: 'Automatické přehrávání',
    stop: 'Stop',
    difficulty: 'Obtížnost',
    easy: 'Lehká',
    medium: 'Střední',
    hard: 'Těžká'
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});