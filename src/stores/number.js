import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { speakKorean } from '@/utils/audio';
import { convertToSinoKorean, convertToNativeKorean } from '@/utils/koreanNumbers';

export const useNumberStore = defineStore('number', () => {
  const currentNumber = ref(45);
  const minRange = ref(0);
  const maxRange = ref(100);
  const isAutoPlaying = ref(false);
  const difficulty = ref('medium');
  const isWaiting = ref(false);
  let nextNumberTimeout;

  const intervalDuration = computed(() => {
    const durations = {
      easy: 6000,
      medium: 4000,
      hard: 2000
    };
    return durations[difficulty.value];
  });

  function generateRandomNumber() {
    const min = Math.ceil(minRange.value);
    const max = Math.floor(maxRange.value);
    const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    currentNumber.value = newNumber;
  }

  function setRange(min, max) {
    minRange.value = Math.max(0, Math.min(min, 9999));
    maxRange.value = Math.max(0, Math.min(max, 9999));
  }

  function startAutoPlay() {
    if (isAutoPlaying.value) return;
    isAutoPlaying.value = true;
    scheduleNextIteration();
  }

  function scheduleNextIteration() {
    generateRandomNumber();
    isWaiting.value = false;

    // Play pronunciations at the end of the interval
    setTimeout(() => {
      if (isAutoPlaying.value) {
        const sinoNumber = convertToSinoKorean(currentNumber.value);
        speakKorean(sinoNumber);
        isWaiting.value = true;
      }
    }, intervalDuration.value);

    // Schedule next number after interval + 2 seconds
    nextNumberTimeout = setTimeout(() => {
      if (isAutoPlaying.value) {
        isWaiting.value = false;
        scheduleNextIteration();
      }
    }, intervalDuration.value + 2000);
  }

  function stopAutoPlay() {
    isAutoPlaying.value = false;
    isWaiting.value = false;
    clearTimeout(nextNumberTimeout);
  }

  function setDifficulty(level) {
    difficulty.value = level;
    if (isAutoPlaying.value) {
      stopAutoPlay();
      startAutoPlay();
    }
  }

  return {
    currentNumber,
    minRange,
    maxRange,
    intervalDuration,
    generateRandomNumber,
    setRange,
    isWaiting,
    isAutoPlaying,
    difficulty,
    startAutoPlay,
    stopAutoPlay,
    setDifficulty
  };
});