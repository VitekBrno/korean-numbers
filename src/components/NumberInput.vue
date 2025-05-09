<template>
  <div class="number-display d-flex justify-content-center align-items-center w-100 my-5">
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
      Please enter a number between 0 and 9999
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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