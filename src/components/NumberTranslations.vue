<template>
  <div class="row w-100 mt-5 g-4">
    <div class="col-md-6">
      <KoreanNumber
        :number="number"
        type="sino"
        :title="$t('sinoKorean')"
        :placeholder="$t('enterNumber')"
      />
    </div>
    <div class="col-md-6">
      <KoreanNumber
        :number="number"
        type="native"
        :title="$t('nativeKorean')"
        :placeholder="$t('enterNumber')"
      />
    </div>
  </div>
</template>

<script setup>
import KoreanNumber from '@/components/KoreanNumber.vue';
import { useI18n } from 'vue-i18n';

useI18n();

defineProps({
  number: {
    type: [String, Number],
    default: ''
  }
});
</script>