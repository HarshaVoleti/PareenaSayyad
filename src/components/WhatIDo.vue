<script setup>
// What I Do section component
</script>

<template>
  <section class="what-i-do-section">
    <div class="section-header">
      <h2 class="section-title">
        <span class="highlight-full">what i do?</span>
      </h2>
    </div>

    <!-- Curved Arrow pointing to first card -->
    <div class="curved-arrow">
      <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
    </div>

    <div class="cards-container">
      <!-- First Card - Yellow -->
      <div class="card card-yellow">
        <div class="card-content">
          <div class="card-icon">
            ✏️
          </div>
          <h3>User Research & UX Strategy</h3>
        </div>
        <!-- Pen/Paper sticky label -->
        <div class="sticky-label sticky-pen">Pen/Paper</div>
      </div>

      <!-- Second Card - Blue -->
      <div class="card card-blue">
        <div class="card-content">
          <div class="card-icon">
            👁️
          </div>
          <h3>UI & Visual Design</h3>
        </div>
        <!-- Figma sticky label on top -->
        <div class="sticky-label sticky-figma-top">Figma</div>
      </div>

      <!-- Third Card - Pink -->
      <div class="card card-pink">
        <div class="card-content">
          <div class="card-icon">
            ⭐
          </div>
          <h3>Product Thinking & End-to-End Design</h3>
        </div>
        <!-- Figma sticky label positioned to the right of third card -->
        <div class="sticky-label sticky-figma-right">Figma</div>
      </div>
      
    </div>

    <!-- Horizontal Scrolling Bulletin -->
    <div class="scrolling-bulletin">
      <div class="bulletin-track">
        <span class="bulletin-item">UX Research</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Competitor Analysis</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Design System</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Wireframing</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Prototyping</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Personas</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Interface Design</span>
        <span class="bulletin-separator">🤖</span>
        <span class="bulletin-item">Brand Identity</span>
        <span class="bulletin-separator">🤖</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* What I Do Section */
.what-i-do-section {
  padding: 50px 0;
  margin-top: 40px;
}

.section-header {
  text-align: left;
  margin-bottom: 1rem;
  margin-left: 60px;
}

.section-title {
  font-family: 'Handlee';
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  margin: 0 0 2rem 0;
}

.highlight-full {
  font-family: 'Handlee';
  font-size: 32px;
  font-weight: bold;
  position: relative;
  display: inline-block;
}

.highlight-full::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 80%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.curved-arrow {
  display: flex;
  justify-content: flex-start;
  margin-left: 200px;
  margin-bottom: 2rem;
  position: relative;
}

.arrow-image {
  width: 80px;
  height: 50px;
  transform: rotate(245deg); /* Placeholder angle - adjust as needed */
}

.cards-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  padding: 0 2rem;
}

.card {
  aspect-ratio: 4/5; /* Instagram post ratio */
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  border: 3px solid;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg); /* Placeholder angle - adjust as needed */
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card:nth-child(1) {
  transform: rotate(-4deg); /* First card tilt - adjust as needed */
}

.card:nth-child(2) {
  transform: rotate(5.5deg); /* Second card tilt - adjust as needed */
}

.card:nth-child(3) {
  transform: rotate(-5deg); /* Third card tilt - adjust as needed */
}

.card:hover {
  transform: rotate(0deg) scale(1.02);
}

.card-yellow {
  background: #FFF3C4;
  border-color: #D4A574;
}

.card-blue {
  background: #E3F2FD;
  border-color: #1976D2;
}

.card-pink {
  background: #FCE4EC;
  border-color: #C2185B;
}

.card-content {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.card-content h3 {
  font-family: 'Inter';
  font-size: 36px;
  font-weight:bold;
  margin: 0;
  color: #333;
  line-height: 1.3;
}

/* Sticky Labels */
.sticky-label {
  position: absolute;
  background: #fff;
  font-family: 'Handlee', cursive;
  font-size: 32px;
  font-weight: bold;
  transform: rotate(-10deg);
  z-index: 10;
}

.sticky-pen {
  background: #E3F2FD;
  color: #1976D2;
  top: 60px;
  right: -45px;
  transform:  rotate(4deg);
}

.sticky-figma-top {
  background: #FCE4EC;
  color: #C2185B;
  top: -15px;
  left: 70%;
  transform: translateX(-50%) rotate(-8deg);
}

.sticky-figma-right {
  background: #FFF3C4;
  color: #D4A574;
  top: 20%;
  right: 20px;
  transform: translateY(-10%) rotate(-11deg);
}

/* Scrolling Bulletin */
.scrolling-bulletin {
  margin-top: 4rem;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  background: transparent;
}

.bulletin-track {
  display: inline-flex;
  align-items: center;
  animation: scroll-horizontal 30s linear infinite;
}

.bulletin-item {
  font-family: 'Inter';
  font-size: 24px;
  font-weight: normal;
  color: #333;
  margin: 0 1rem;
  white-space: nowrap;
}

.bulletin-separator {
  font-size: 1.2rem;
  margin: 0 1rem;
  opacity: 0.7;
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .sticky-figma-right {
    position: relative;
    right: auto;
    top: auto;
    transform: rotate(12deg);
    margin: 1rem auto;
    display: block;
    width: fit-content;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .what-i-do-section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .card {
    min-height: 250px;
    padding: 1.5rem;
  }
  
  .sticky-label {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
