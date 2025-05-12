<template>
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
</template>

<script setup lang="ts">
import { useNumberStore } from '@/stores/number';
import { useI18n } from 'vue-i18n';

useI18n();
const store = useNumberStore();
</script>