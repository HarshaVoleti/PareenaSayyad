<script setup>
const props = defineProps({
  section: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="product-gallery-section">
    <div class="section-header">
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-text">{{ section.content }}</p>
    </div>
    
    <div class="product-gallery">
      <div 
        v-for="(image, index) in section.images" 
        :key="index"
        class="product-item"
      >
        <img :src="image" :alt="`Product ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-gallery-section {
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

.product-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.product-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.product-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .product-gallery-section {
    padding: 2rem 1rem;
  }
  
  .product-gallery {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
