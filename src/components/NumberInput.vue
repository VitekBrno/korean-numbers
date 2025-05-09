<template>
  <div class="number-display d-flex flex-column justify-content-center align-items-center w-100 my-5">
    <label class="form-label h4 mb-4">{{ $t('inputLabel') }}</label>
    <input
      type="number"
      class="number form-control border-0 shadow-sm text-center"
      v-model="inputValue"
      @input="validateInput"
      min="0"
      max="9999"
      :class="{ 'is-invalid': !isValidInput }"
    >
    <div v-if="!isValidInput" class="invalid-feedback">
      {{ $t('invalidInput') }}
    </div>
    
    <div class="row w-100 mt-5 g-4">
      <div class="col-md-6">
        <KoreanNumber
          :number="isValidInput ? inputValue : ''"
          type="sino"
          :title="$t('sinoKorean')"
          :placeholder="$t('enterNumber')"
        />
      </div>
      <div class="col-md-6">
        <KoreanNumber
          :number="isValidInput ? inputValue : ''"
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
import { useI18n } from 'vue-i18n';
import KoreanNumber from '@/components/KoreanNumber.vue';

useI18n();

const inputValue = ref('45');
const isValidInput = ref(true);

const validateInput = () => {
  const num = Number(inputValue.value);
  isValidInput.value = !isNaN(num) && num >= 0 && num <= 9999 && inputValue.value !== '';
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