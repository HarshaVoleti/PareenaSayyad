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
  <section class="design-system-section">
    <div class="section-header">
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-text">{{ section.content }}</p>
    </div>
    
    <div class="design-system-grid">
      <!-- Colors -->
      <div class="design-element">
        <h3>Color Palette</h3>
        <div class="color-palette">
          <div 
            v-for="color in section.colors" 
            :key="color"
            class="color-swatch"
            :style="{ backgroundColor: color }"
          >
            <span class="color-code">{{ color }}</span>
          </div>
        </div>
      </div>
      
      <!-- Typography -->
      <div class="design-element">
        <h3>Typography</h3>
        <div class="typography-samples">
          <div 
            v-for="font in section.typography" 
            :key="font"
            class="font-sample"
          >
            <span class="font-name">{{ font }}</span>
            <div class="font-preview" :style="{ fontFamily: font.split(' ')[0] }">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </div>
      </div>
      
      <!-- Components -->
      <div class="design-element">
        <h3>Components</h3>
        <div class="components-list">
          <div 
            v-for="component in section.components" 
            :key="component"
            class="component-item"
          >
            {{ component }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.design-system-section {
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

.design-system-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.design-element h3 {
  font-family: 'Handlee', cursive;
  font-size: 1.3rem;
  color: #000;
  margin-bottom: 1.5rem;
}

/* Colors */
.color-palette {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.color-swatch {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.color-code {
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;
}

/* Typography */
.typography-samples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.font-sample {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
}

.font-name {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.font-preview {
  font-size: 1.1rem;
  color: #333;
}

/* Components */
.components-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.component-item {
  background: #f8f9fa;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid #e9ecef;
}

@media (max-width: 768px) {
  .design-system-section {
    padding: 2rem 1rem;
  }
  
  .design-system-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .color-palette {
    justify-content: center;
  }
  
  .color-swatch {
    width: 60px;
    height: 60px;
  }
}
</style>
