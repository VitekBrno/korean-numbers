<template>
  <div class="number-display d-flex flex-column justify-content-center align-items-center w-100 my-5">
    <div class="range-controls mb-4">
      <h4 class="h5 mb-3">{{ $t('rangeSettings') }}</h4>
      <div class="d-flex gap-4 align-items-center">
        <div class="form-group">
          <label class="form-label">{{ $t('minValue') }}</label>
          <input
            type="number"
            class="form-control"
            v-model="store.minRange"
            min="0"
            max="9999"
          >
        </div>
        <div class="form-group">
          <label class="form-label">{{ $t('maxValue') }}</label>
          <input
            type="number"
            class="form-control"
            v-model="store.maxRange"
            min="0"
            max="9999"
          >
        </div>
      </div>
    </div>

    <button 
      class="btn btn-primary mb-4"
      @click="store.generateRandomNumber()"
      :title="$t('generateRandom')"
    >
      <i class="bi bi-shuffle me-2"></i>
      {{ $t('random') }}
    </button>

    <div class="mb-5">
      <div class="d-flex gap-3 align-items-center">
        <input
          type="number"
          class="number form-control border-0 shadow-sm text-center"
          v-model="store.currentNumber"
          @input="validateInput"
          min="0"
          max="9999"
          :class="{ 'is-invalid': !isValidInput }"
        >
      </div>
      <div v-if="!isValidInput" class="invalid-feedback">
        {{ $t('invalidInput') }}
      </div>
    </div>
    
    <div class="row w-100 mt-5 g-4">
      <div class="col-md-6">
        <KoreanNumber
          :number="isValidInput ? store.currentNumber : ''"
          type="sino"
          :title="$t('sinoKorean')"
          :placeholder="$t('enterNumber')"
        />
      </div>
      <div class="col-md-6">
        <KoreanNumber
          :number="isValidInput ? store.currentNumber : ''"
          type="native"
          :title="$t('nativeKorean')"
          :placeholder="$t('enterNumber')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNumberStore } from '@/stores/number';
import { useI18n } from 'vue-i18n';
import KoreanNumber from '@/components/KoreanNumber.vue';

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