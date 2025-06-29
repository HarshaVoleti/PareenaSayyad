<template>
  <section class="why-us-section">
    <div class="container">
      <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
      <div class="reasons-grid">
        <div v-for="(reason, index) in section.content" :key="index" class="reason-item">
          <div class="reason-icon">
            {{ getEmojiFromReason(reason) }}
          </div>
          <p class="reason-text">{{ getTextFromReason(reason) }}</p>
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

const getEmojiFromReason = (reason) => {
  const match = reason.match(/^([^\s]+)/)
  return match ? match[1] : '✓'
}

const getTextFromReason = (reason) => {
  return reason.replace(/^([^\s]+)\s*/, '')
}
</script>

<style scoped>
.why-us-section {
  margin-bottom: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.reason-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.reason-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.reason-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.reason-text {
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .why-us-section {
    padding: 2rem 1.5rem;
  }
  
  .reasons-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .reason-item {
    padding: 1.2rem;
  }
}
</style>
