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
      <NumberInput />
    </main>
    
    <footer class="mt-5 py-3 text-center text-muted">
      <div class="container">
        <p class="mb-0">{{ $t('footer') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NumberInput from '@/components/NumberInput.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
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