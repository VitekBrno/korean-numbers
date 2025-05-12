import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { speakKorean } from '@/utils/audio';
import { convertToSinoKorean } from '@/utils/koreanNumbers';

type Difficulty = 'easy' | 'medium' | 'hard';

export const useNumberStore = defineStore('number', () => {
  const currentNumber = ref<number>(45);
  const minRange = ref<number>(0);
  const maxRange = ref<number>(100);
  const isAutoPlaying = ref<boolean>(false);
  const difficulty = ref<Difficulty>('medium');
  const isWaiting = ref<boolean>(false);
  let nextNumberTimeout: number | undefined;

  const intervalDuration = computed((): number => {
    const durations: Record<Difficulty, number> = {
      easy: 6000,
      medium: 4000,
      hard: 2000
    };
    return durations[difficulty.value];
  });

  function generateRandomNumber(): void {
    const min = Math.ceil(minRange.value);
    const max = Math.floor(maxRange.value);
    const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    currentNumber.value = newNumber;
  }

  function setRange(min: number, max: number): void {
    minRange.value = Math.max(0, Math.min(min, 9999));
    maxRange.value = Math.max(0, Math.min(max, 9999));
  }

  function startAutoPlay(): void {
    if (isAutoPlaying.value) return;
    isAutoPlaying.value = true;
    scheduleNextIteration();
  }

  function scheduleNextIteration(): void {
    generateRandomNumber();
    isWaiting.value = false;

    setTimeout(() => {
      if (isAutoPlaying.value) {
        const sinoNumber = convertToSinoKorean(currentNumber.value);
        speakKorean(sinoNumber);
        isWaiting.value = true;
      }
    }, intervalDuration.value);

    nextNumberTimeout = window.setTimeout(() => {
      if (isAutoPlaying.value) {
        isWaiting.value = false;
        scheduleNextIteration();
      }
    }, intervalDuration.value + 2000);
  }

  function stopAutoPlay(): void {
    isAutoPlaying.value = false;
    isWaiting.value = false;
    if (nextNumberTimeout) {
      clearTimeout(nextNumberTimeout);
    }
  }

  function setDifficulty(level: Difficulty): void {
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