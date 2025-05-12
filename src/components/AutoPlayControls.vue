<template>
  <div class="auto-play-controls mb-4">
    <div class="d-flex gap-3 align-items-center mb-3">
      <button 
        class="btn"
        :class="store.isAutoPlaying ? 'btn-danger' : 'btn-success'"
        @click="store.isAutoPlaying ? store.stopAutoPlay() : store.startAutoPlay()"
      >
        <i class="bi" :class="store.isAutoPlaying ? 'bi-stop-fill' : 'bi-play-fill'"></i>
        {{ store.isAutoPlaying ? $t('stop') : $t('autoPlay') }}
      </button>
      
      <div class="btn-group">
        <button 
          v-for="level in ['easy', 'medium', 'hard']" 
          :key="level"
          class="btn btn-outline-primary"
          :class="{ active: store.difficulty === level }"
          @click="store.setDifficulty(level)"
          :disabled="store.isAutoPlaying"
        >
          {{ $t(level) }}
        </button>
      </div>
    </div>
    
    <div class="progress" v-if="store.isAutoPlaying">
      <div 
        class="progress-bar" 
        role="progressbar" 
        :style="{ 
          animationDuration: `${store.intervalDuration}ms`,
          animationPlayState: store.isAutoPlaying && !store.isWaiting ? 'running' : 'paused'
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNumberStore } from '@/stores/number';
import { useI18n } from 'vue-i18n';

useI18n();
const store = useNumberStore();
</script>

<style scoped>
.progress-bar {
  width: 100%;
  animation: progress-animation linear infinite;
  transform-origin: left;
}

@keyframes progress-animation {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>