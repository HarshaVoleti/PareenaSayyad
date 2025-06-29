<template>
  <section class="feature-list-section">
    <div class="container">
      <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
      <div class="features-grid">
        <div v-for="(feature, index) in section.content" :key="index" class="feature-item">
          <div class="feature-content">
            <h3 class="feature-title">{{ getFeatureTitle(feature) }}</h3>
            <p class="feature-description">{{ getFeatureDescription(feature) }}</p>
          </div>
        </div>
      </div>
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

const getFeatureTitle = (feature) => {
  const colonIndex = feature.indexOf(':')
  return colonIndex !== -1 ? feature.substring(0, colonIndex) : feature
}

const getFeatureDescription = (feature) => {
  const colonIndex = feature.indexOf(':')
  return colonIndex !== -1 ? feature.substring(colonIndex + 1).trim() : ''
}
</script>

<style scoped>
.feature-list-section {
  margin-bottom: 4rem;
  padding: 3rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: left;
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

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.feature-item {
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #7c3aed;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.feature-description {
  line-height: 1.6;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  .feature-list-section {
    padding: 2rem 1.5rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .feature-item {
    padding: 1.2rem;
  }
}
</style>
