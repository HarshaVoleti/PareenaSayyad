<script setup>
const props = defineProps({
  section: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="creative-showcase-section">
    <div class="section-header">
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-text">{{ section.content }}</p>
    </div>
    
    <div class="creative-gallery">
      <div 
        v-for="(creative, index) in section.creatives" 
        :key="index"
        class="creative-item"
      >
        <img :src="creative" :alt="`Creative ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.creative-showcase-section {
  margin: 4rem 0;
  padding: 0 3rem;
}

.section-header {
  text-align: left;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Handlee';
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 2rem 0;
  position: relative;
  display: inline-block;
  z-index: 1;
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
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

.creative-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
}

.creative-item {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.creative-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.creative-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* Masonry-like layout for different sized images */
.creative-item:nth-child(2n) {
  transform: none;
}

.creative-item:nth-child(3n) {
  transform: none;
}

@media (max-width: 768px) {
  .creative-showcase-section {
    padding: 0 2rem;
  }
  
  .creative-gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .creative-item {
    padding: 0.75rem;
  }
  
  .section-title {
    font-size: 28px;
  }
}
</style>
