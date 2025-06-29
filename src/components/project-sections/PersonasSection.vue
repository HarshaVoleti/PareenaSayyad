<template>
  <section class="personas-section">
    <div class="container">
      <div class="personas-grid">
        <div v-for="(persona, index) in section.content" :key="index" class="persona-card">
          <div class="card-content">
            <div class="persona-image">
              <img :src="persona.image" :alt="persona.name" />
            </div>
            <p class="persona-description">{{ persona.description }}</p>
          </div>
          <!-- Sticky name tag -->
          <div class="sticky-label" :class="`sticky-${index + 1}`">{{ persona.name }}</div>
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
.personas-section {
  margin-bottom: 3rem;
  padding: 0;
  background: transparent;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

.personas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;
}

.persona-card {
  aspect-ratio: 4/5;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  border: 3px solid;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.persona-card:nth-child(1) {
  background: #FFF3C4;
  border-color: #D4A574;
  transform: rotate(-4deg);
}

.persona-card:nth-child(2) {
  background: #E3F2FD;
  border-color: #1976D2;
  transform: rotate(5.5deg);
}

.persona-card:nth-child(3) {
  background: #FCE4EC;
  border-color: #C2185B;
  transform: rotate(-5deg);
}

.persona-card:hover {
  transform: rotate(0deg) scale(1.02);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.persona-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.persona-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.persona-header {
  margin-bottom: 1rem;
}

.persona-name {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
  margin-bottom: 1rem;
}

.persona-description {
  line-height: 140%;
  color: #333;
  margin: 0;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0%;
}

/* Sticky Labels */
.sticky-label {
  position: absolute;
  background: #fff;
  font-family: 'Handlee', cursive;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.sticky-1 {
  background: #E3F2FD;
  color: #1976D2;
  top: -15px;
  right: -20px;
  transform: rotate(4deg);
}

.sticky-2 {
  background: #FCE4EC;
  color: #C2185B;
  top: 15px;
  right: -25px;
  transform: rotate(-8deg);
}

.sticky-3 {
  background: #FFF3C4;
  color: #D4A574;
  top: -10px;
  right: -15px;
  transform: rotate(6deg);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .personas-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .persona-card {
    padding: 1.5rem;
    transform: rotate(0deg) !important;
  }
  
  .persona-card:hover {
    transform: scale(1.02) !important;
  }
  
  .persona-image {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .persona-description {
    font-size: 20px;
  }
  
  .sticky-label {
    font-size: 16px;
    padding: 6px 12px;
  }
  
  .sticky-1,
  .sticky-2,
  .sticky-3 {
    top: -10px;
    right: -10px;
    transform: rotate(0deg);
  }
}
</style>
