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
  padding: 3rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Handlee', cursive;
  font-size: 2rem;
  color: #000;
  margin-bottom: 1rem;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  auto-rows: auto;
}

.creative-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.creative-item:hover {
  transform: translateY(-5px);
}

.creative-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* Masonry-like layout for different sized images */
.creative-item:nth-child(2n) {
  transform: translateY(20px);
}

.creative-item:nth-child(3n) {
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .creative-showcase-section {
    padding: 2rem 1rem;
  }
  
  .creative-gallery {
    grid-template-columns: 1fr;
  }
  
  .creative-item:nth-child(2n),
  .creative-item:nth-child(3n) {
    transform: none;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
