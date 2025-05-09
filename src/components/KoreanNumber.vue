<template>
  <div class="card h-100">
    <div class="card-header bg-primary bg-opacity-10 py-3">
      <h3 class="card-title h5 mb-0 text-primary">{{ title }}</h3>
    </div>
    <div class="card-body d-flex flex-column align-items-center py-4">
      <div class="text-center mb-4">
        <div class="d-flex align-items-center gap-3">
          <p class="korean-text mb-0" :class="{ 'text-muted': !number }">
            {{ koreanNumber || placeholder }}
          </p>
          <button 
            v-if="number"
            class="btn btn-link text-primary p-0"
            @click="playSound"
            :title="$t('playSound')"
          >
            <i class="bi bi-volume-up fs-4"></i>
          </button>
        </div>
      </div>
      <div v-if="number && example" class="example-section w-100">
        <p class="korean-example mb-2" v-html="example.korean"></p>
        <p v-if="currentLocale === 'en'" class="translation mb-0">{{ example.english }}</p>
        <p v-if="currentLocale === 'cs'" class="translation mb-0">{{ example.czech }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { convertToSinoKorean, convertToNativeKorean } from '@/utils/koreanNumbers';
import { sinoExampleTemplates, nativeExampleTemplates } from '@/utils/examples';
import { useI18n } from 'vue-i18n';
import { speakKorean } from '@/utils/audio';

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

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const example = computed(() => {
  if (!props.number) return null;
  const templates = props.type === 'sino' ? sinoExampleTemplates : nativeExampleTemplates;
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  return {
    korean: randomTemplate.korean.replace('{number}', koreanNumber.value),
    english: randomTemplate.english.replace('{number}', props.number),
    czech: randomTemplate.czech.replace('{number}', props.number)
  };
});

const koreanNumber = computed(() => {
  if (!props.number) return '';
  const num = Number(props.number);
  return props.type === 'sino' 
    ? convertToSinoKorean(num)
    : convertToNativeKorean(num);
});

const playSound = () => {
  if (koreanNumber.value) {
    speakKorean(koreanNumber.value);
  }
};
</script>

<style scoped>
.korean-text {
  font-size: 2.5rem;
  font-weight: 500;
}

.korean-example {
  font-size: 1.2rem;
  color: #1a1a1a;
}

.translation {
  font-size: 1rem;
  color: #4a5568;
}

@media (max-width: 768px) {
  .korean-text {
    font-size: 2rem;
  }
  
  .korean-example {
    font-size: 1rem;
  }
}
</style>