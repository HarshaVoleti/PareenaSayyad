<template>
  <section class="testimonial-cards-section">
    <div class="container">
      <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in section.content" :key="index" class="testimonial-card">
          <div class="quote-icon">"</div>
          <blockquote class="testimonial-quote">{{ testimonial.quote }}</blockquote>
          <div class="testimonial-author">
            <div class="author-name">{{ testimonial.name }}</div>
            <div class="author-position">{{ testimonial.position }}</div>
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
</script>

<style scoped>
.testimonial-cards-section {
  margin-bottom: 4rem;
  padding: 3rem;
  background: #f8f7f2;
  border-radius: 12px;
}

.container {
  max-width: 1200px;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.quote-icon {
  font-size: 4rem;
  color: #ff69b4;
  font-family: serif;
  position: absolute;
  top: -10px;
  left: 20px;
  line-height: 1;
}

.testimonial-quote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin: 2rem 0 1.5rem 0;
  font-style: italic;
}

.testimonial-author {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.author-name {
  font-weight: 400;
  color: #000;
  margin-bottom: 0.3rem;
}

.author-position {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .testimonial-cards-section {
    padding: 2rem 1.5rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .quote-icon {
    font-size: 3rem;
    top: -5px;
    left: 15px;
  }
}
</style>
