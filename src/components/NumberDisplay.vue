<template>
  <div class="mb-5">
    <button 
      class="btn btn-primary mb-4 d-block mx-auto"
      @click="store.generateRandomNumber()"
      :disabled="store.isAutoPlaying"
      :title="$t('generateRandom')"
    >
      <i class="bi bi-shuffle me-2"></i>
      {{ $t('random') }}
    </button>
    <div class="d-flex gap-3 align-items-center">
      <input
        type="number"
        class="number form-control border-0 shadow-sm text-center"
        v-model="store.currentNumber"
        :disabled="store.isAutoPlaying"
        @input="validateInput"
        min="0"
        max="9999"
        :class="{ 'is-invalid': !isValidInput }"
      />
    </div>
    <div v-if="!isValidInput" class="invalid-feedback">
      {{ $t('invalidInput') }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNumberStore } from '@/stores/number';
import { useI18n } from 'vue-i18n';

useI18n();
const store = useNumberStore();

const isValidInput = ref(true);

const validateInput = () => {
  const num = Number(store.currentNumber);
  isValidInput.value = !isNaN(num) && num >= 0 && num <= 9999 && store.currentNumber !== '';
};
</script>

<style scoped>
.number {
  font-size: 6rem;
  font-weight: 700;
  background-color: #f0f7ff;
  color: #0369a1;
  max-width: 320px;
  padding: 2rem;
  transition: transform 0.3s ease;
  -moz-appearance: textfield;
}

.number::-webkit-inner-spin-button,
.number::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>