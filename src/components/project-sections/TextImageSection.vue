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
  <section class="text-image-section">
    <div class="section-content" :class="{ 'reverse': section.imagePosition === 'left' }">
      <div class="text-content">
        <h2 class="section-title">{{ section.title }}</h2>
        <p class="section-text">{{ section.content }}</p>
      </div>
      
      <div class="image-content">
        <img :src="section.image" :alt="section.title" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-image-section {
  margin: 4rem 0;
  padding: 3rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.section-content.reverse {
  direction: rtl;
}

.section-content.reverse > * {
  direction: ltr;
}

.section-title {
  font-family: 'Handlee', cursive;
  font-size: 2rem;
  color: #000;
  margin-bottom: 1.5rem;
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .text-image-section {
    padding: 2rem 1rem;
  }
  
  .section-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .section-text {
    font-size: 1rem;
  }
}
</style>
