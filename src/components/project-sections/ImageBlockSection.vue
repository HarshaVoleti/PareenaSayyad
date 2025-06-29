<template>
  <section class="image-block-section">
    <div class="container">
      <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
      <div class="image-container">
        <img :src="section.image" :alt="section.title || 'Project image'" />
      </div>
      <p v-if="section.content" class="image-caption">{{ section.content }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.image-block-section {
  margin-bottom: 4rem;
  padding: 0 3rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

.section-title {
  font-family: 'Handlee';
  font-size: 32px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 2rem 0;
  text-align: left;
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

.image-container {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.image-container img {
  max-width: 100%;
  height: auto;
  display: block;
}

.image-caption {
  font-size: 1rem;
  color: #777;
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .image-block-section {
    padding: 2rem 1.5rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
