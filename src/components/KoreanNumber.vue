<template>
  <div class="card h-100">
    <div class="card-header bg-primary bg-opacity-10 py-3">
      <h3 class="card-title h5 mb-0 text-primary">{{ title }}</h3>
    </div>
    <div class="card-body d-flex align-items-center justify-content-center py-4">
      <p class="korean-text mb-0" :class="{ 'text-muted': !number }">
        {{ koreanNumber || placeholder }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { convertToSinoKorean, convertToNativeKorean } from '@/utils/koreanNumbers';

const props = defineProps({
  number: {
    type: [Number, String],
    default: ''
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['sino', 'native'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
});

const koreanNumber = computed(() => {
  if (!props.number) return '';
  const num = Number(props.number);
  return props.type === 'sino' 
    ? convertToSinoKorean(num)
    : convertToNativeKorean(num);
});
</script>

<style scoped>
.korean-text {
  font-size: 2.5rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .korean-text {
    font-size: 2rem;
  }
}
</style>