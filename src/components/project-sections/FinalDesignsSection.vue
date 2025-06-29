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
  <section class="final-designs-section">
    <div class="section-header">
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-text">{{ section.content }}</p>
    </div>
    
    <div class="designs-gallery">
      <div 
        v-for="(image, index) in section.images" 
        :key="index"
        class="design-item"
      >
        <img :src="image" :alt="`Design ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-designs-section {
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

.designs-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.design-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.design-item img:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .final-designs-section {
    padding: 2rem 1rem;
  }
  
  .designs-gallery {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
