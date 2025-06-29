<template>
  <section class="stats-section">
    <div class="container">
      <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
      <div class="stats-grid">
        <div v-for="(stat, index) in section.content" :key="index" class="stat-card">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
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
</script>

<style scoped>
.stats-section {
  margin-bottom: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 12px;
  color: white;
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
  margin-bottom: 3rem;
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-value {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #fbbf24;
}

.stat-label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-section {
    padding: 2rem 1.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .stat-value {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
