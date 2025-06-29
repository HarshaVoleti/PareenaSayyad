<script setup>
const props = defineProps({
  section: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="web-sections-section">
    <div class="section-header">
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-text">{{ section.content }}</p>
    </div>
    
    <div class="web-sections-gallery">
      <div 
        v-for="(sectionImage, index) in section.sections" 
        :key="index"
        class="web-section-item"
      >
        <img :src="sectionImage" :alt="`Web section ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.web-sections-section {
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

.web-sections-gallery {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.web-section-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .web-sections-section {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
