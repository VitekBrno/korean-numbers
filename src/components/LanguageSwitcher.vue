<template>
  <button 
    class="btn btn-link text-primary p-2"
    @click="toggleLanguage"
    :title="currentLocale === 'en' ? $t('switchToCzech') : $t('switchToEnglish')"
  >
    <i class="bi bi-translate fs-5"></i>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'cs' : 'en';
};
</script>