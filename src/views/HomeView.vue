<script setup>
import WhatIDo from '@/components/WhatIDo.vue'
</script>

<template>
  <main class="portfolio-main">
    <section class="hero-section">
      <!-- Left Side -->
      <div class="hero-left">
        <div class="profile-section">
          <!-- User Picture -->
          <div class="profile-picture">
            <img src="@/assets/svgs/person.svg" alt="Profile" class="profile-image" />
          </div>

          
          <!-- Curved Arrow -->
          <div class="curved-arrow">
            <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
          </div>
          <!-- Name -->
          <h1 class="hero-name"><span class="highlight-full">pareena</span></h1>
        </div>
        
        <!-- Tagline with highlight -->
        <div class="tagline">
          <p class="tagline-text">
            I <span class="highlight">turn wir</span>eframes into wow frames.
          </p>
        </div>
      </div>
      
      <!-- Right Side -->
      <div class="hero-right">
        <div class="description">
          <p class="description-text">
            I design clean, usable, and strategic digital experiences, from ideation to execution.
          </p>
          
          <button class="hire-me-btn">Hire me</button>
        </div>
      </div>
    </section>

    <!-- What I Do Section -->
    <WhatIDo />
  </main>
</template>

<style scoped>
.portfolio-main {
  width: 100%;
  padding: 2rem 0;
}

.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 70vh;
}

/* Left Side Styles */
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-section {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  justify-content: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.curved-arrow {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.arrow-image {
  width: 80px;
  height: 60px;
}

.hero-name {
  font-family: 'Handlee', cursive;
  font-size: 2.5rem;
  font-weight: normal;
  color: #000000;
  margin: 0;
  text-align: center;
  flex-shrink: 0;
  transform: rotate(-3deg) translateY(-10px);
  position: relative;
}

.tagline {
  margin-top: 1rem;
}

.tagline-text {
  font-size: 58px;
  font-weight: 600;
  color: #000000;
  line-height: 1.3;
  margin: 0;
}

.highlight {
  position: relative;
  display: inline-block;
  font-size: 58px;
  font-weight: 600;
}

.highlight::before {
  content: '';
  position: absolute;
  top: 75%;
  font-size: 58px;
  font-weight: 600;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.highlight-full {
  position: relative;
  display: inline-block;
}

.highlight-full::before {
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

/* Right Side Styles */
.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  max-width: 400px;
}

.description-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 400;
}

.hire-me-btn {
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 0;
  font-family: 'Handlee', cursive;
  font-weight: normal;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  transform: rotate(-1deg);
  box-shadow: 
    2px 2px 0px rgba(0, 0, 0, 0.3),
    inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}

.hire-me-btn:hover {
  background: #222222;
  transform: rotate(-0.5deg) scale(1.02);
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .profile-section {
    flex-direction: column;
    gap: 1rem;
  }
  
  .curved-arrow {
    display: none;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
  }
  
  .hero-name {
    font-size: 2rem;
  }
  
  .tagline-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .portfolio-main {
    padding: 1rem 0;
  }
  
  .hero-section {
    gap: 2rem;
  }
  
  .profile-picture {
    width: 120px;
    height: 120px;
  }
  
  .picture-placeholder span {
    font-size: 2rem;
  }
  
  .hero-name {
    font-size: 1.8rem;
  }
  
  .tagline-text {
    font-size: 1.3rem;
  }
  
  .description-text {
    font-size: 1.1rem;
  }
  
  .hire-me-btn {
    font-size: 20px;
    padding: 10px 20px;
  }
}
</style>
