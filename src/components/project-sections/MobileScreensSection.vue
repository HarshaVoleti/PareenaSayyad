<script setup>
const props = defineProps({
  section: {
    type: Object,
    required: true
  },
  projectType: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="mobile-screens-section">
    <div class="section-header">
      <h2 class="section-title">{{ section.title }}</h2>
      <p v-if="section.content" class="section-text">{{ section.content }}</p>
    </div>
    
    <div class="screenshots-grid">
      <div 
        v-for="(screen, index) in section.screens" 
        :key="index"
        class="screenshot-item"
      >
        <img :src="screen" :alt="`Screenshot ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-screens-section {
  margin: 3rem 0;
  padding: 0;
  background: transparent;
}

.section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.section-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #6b7280;
  max-width: 800px;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.screenshot-item {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.screenshot-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.screenshot-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .mobile-screens-section {
    padding: 0 1rem;
  }
  
  .screenshots-grid {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .screenshots-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
