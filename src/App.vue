<template>
  <div class="container-fluid p-0">
    <header class="bg-white shadow-sm py-3 mb-4">
      <div class="container">
        <h1 class="display-5 text-center">{{ $t('title') }}</h1>
        <div class="position-absolute top-0 end-0 mt-3 me-3">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
    
    <main class="container">
      <div class="number-display d-flex flex-column justify-content-center align-items-center w-100 my-5">
        <RangeControls />
        <AutoPlayControls />
        <NumberDisplay />
        <NumberTranslations :number="isValidInput ? store.currentNumber : ''" />
      </div>
    </main>
    
    <footer class="mt-5 py-3 text-center text-muted">
      <div class="container">
        <p class="mb-0">{{ $t('footer') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNumberStore } from '@/stores/number';
import RangeControls from '@/components/RangeControls.vue';
import AutoPlayControls from '@/components/AutoPlayControls.vue';
import NumberDisplay from '@/components/NumberDisplay.vue';
import NumberTranslations from '@/components/NumberTranslations.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const store = useNumberStore();
const isValidInput = ref(true);

const validateInput = () => {
  const num = Number(store.currentNumber);
  isValidInput.value = !isNaN(num) && num >= 0 && num <= 9999 && store.currentNumber !== '';
};
</script>

<style scoped>
header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

h1 {
  color: var(--primary-color);
  font-weight: 600;
}
</style>