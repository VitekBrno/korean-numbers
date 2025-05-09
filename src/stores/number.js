import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNumberStore = defineStore('number', () => {
  const currentNumber = ref(45);
  const minRange = ref(0);
  const maxRange = ref(100);

  function generateRandomNumber() {
    const min = Math.ceil(minRange.value);
    const max = Math.floor(maxRange.value);
    currentNumber.value = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function setRange(min, max) {
    minRange.value = Math.max(0, Math.min(min, 9999));
    maxRange.value = Math.max(0, Math.min(max, 9999));
  }

  return {
    currentNumber,
    minRange,
    maxRange,
    generateRandomNumber,
    setRange
  };
});